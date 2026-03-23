import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Logger,
  Post,
  Query,
  RawBodyRequest,
  Req,
  Res,
} from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { WhatsappService } from './whatsapp.service';
import { BotEngineService } from './bot-engine.service';

@ApiExcludeController()
@Controller('whatsapp')
export class WhatsappController {
  private readonly logger = new Logger(WhatsappController.name);

  constructor(
    private readonly whatsappService: WhatsappService,
    private readonly botEngine: BotEngineService,
  ) {}

  // ─── WEBHOOK VERIFICATION (Meta GET) ───────────────────────────────────────

  @Get('webhook')
  verifyWebhook(
    @Query('hub.mode') mode: string,
    @Query('hub.verify_token') token: string,
    @Query('hub.challenge') challenge: string,
    @Res() res: Response,
  ) {
    if (mode === 'subscribe' && token === this.whatsappService.getVerifyToken()) {
      this.logger.log('WhatsApp webhook verified ✅');
      return res.status(200).send(challenge);
    }
    this.logger.warn('WhatsApp webhook verification failed');
    return res.status(403).send('Forbidden');
  }

  // ─── RECEIVE MESSAGES (Meta POST) ──────────────────────────────────────────

  @Post('webhook')
  @HttpCode(200)
  async receiveMessage(
    @Req() req: RawBodyRequest<Request>,
    @Headers('x-hub-signature-256') signature: string,
    @Body() body: any,
  ) {
    // Always respond 200 immediately — Meta will retry if we're slow
    // Process the message asynchronously

    try {
      // Verify signature
      const rawBody = req.rawBody?.toString() ?? JSON.stringify(body);
      const isValid = this.whatsappService.verifyWebhookSignature(
        rawBody,
        signature ?? '',
      );

      if (!isValid) {
        this.logger.warn('Invalid webhook signature — ignoring');
        return { status: 'ok' };
      }

      // Ignore status updates (delivered, read receipts)
      if (this.whatsappService.isStatusUpdate(body)) {
        return { status: 'ok' };
      }

      // Parse incoming message
      const message = this.whatsappService.parseIncomingMessage(body);
      if (!message) {
        return { status: 'ok' };
      }

      const { from, type, text, interactiveId } = message;

      // Log inbound message
      this.whatsappService
        .logMessage({
          direction: 'INBOUND',
          fromNumber: from,
          content: text ?? interactiveId ?? '',
          status: 'received',
        })
        .catch(() => {});

      // Process through bot engine async (don't await — respond 200 first)
      this.botEngine.handle(from, type, text, interactiveId).catch((err) => {
        this.logger.error(`Bot engine error for ${from}: ${err.message}`);
      });

    } catch (err) {
      this.logger.error(`Webhook processing error: ${err}`);
    }

    return { status: 'ok' };
  }

  // ─── SEND MANUAL MESSAGE (internal use) ────────────────────────────────────

  @Post('send')
  async sendMessage(@Body() body: { to: string; text: string }) {
    await this.whatsappService.sendText(body.to, body.text);
    return { sent: true };
  }
}
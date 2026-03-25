import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  root(@Res() res: Response) {
    // In development, when someone hits the root of the backend (Port 3000),
    // we redirect them to the Frontend Dev Server (Port 5173).
    // This allows the Shopify Admin to show your Dashboard instead of a 404.
    const frontendUrl = 'http://localhost:5173';
    return res.redirect(frontendUrl);
  }
}

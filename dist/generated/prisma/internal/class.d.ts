import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get seller(): Prisma.SellerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get store(): Prisma.StoreDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get product(): Prisma.ProductDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get order(): Prisma.OrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orderItem(): Prisma.OrderItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payment(): Prisma.PaymentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get whatsappMessage(): Prisma.WhatsappMessageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get botSession(): Prisma.BotSessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get buyer(): Prisma.BuyerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get otpCode(): Prisma.OtpCodeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get productImage(): Prisma.ProductImageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rider(): Prisma.RiderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get delivery(): Prisma.DeliveryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get riderEarning(): Prisma.RiderEarningDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get plugin(): Prisma.PluginDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get sellerPlugin(): Prisma.SellerPluginDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get sellerSession(): Prisma.SellerSessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get shopifyMerchant(): Prisma.ShopifyMerchantDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get commentTrigger(): Prisma.CommentTriggerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get commentDmLog(): Prisma.CommentDmLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get postProductMapping(): Prisma.PostProductMappingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;

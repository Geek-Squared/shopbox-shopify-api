import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Seller: "Seller";
    readonly Store: "Store";
    readonly Product: "Product";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly Payment: "Payment";
    readonly WhatsappMessage: "WhatsappMessage";
    readonly BotSession: "BotSession";
    readonly Buyer: "Buyer";
    readonly OtpCode: "OtpCode";
    readonly ProductImage: "ProductImage";
    readonly Rider: "Rider";
    readonly Delivery: "Delivery";
    readonly RiderEarning: "RiderEarning";
    readonly Plugin: "Plugin";
    readonly SellerPlugin: "SellerPlugin";
    readonly SellerSession: "SellerSession";
    readonly AuditLog: "AuditLog";
    readonly ShopifyMerchant: "ShopifyMerchant";
    readonly CommentTrigger: "CommentTrigger";
    readonly CommentDmLog: "CommentDmLog";
    readonly PostProductMapping: "PostProductMapping";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "seller" | "store" | "product" | "order" | "orderItem" | "payment" | "whatsappMessage" | "botSession" | "buyer" | "otpCode" | "productImage" | "rider" | "delivery" | "riderEarning" | "plugin" | "sellerPlugin" | "sellerSession" | "auditLog" | "shopifyMerchant" | "commentTrigger" | "commentDmLog" | "postProductMapping";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Seller: {
            payload: Prisma.$SellerPayload<ExtArgs>;
            fields: Prisma.SellerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SellerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SellerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPayload>;
                };
                findFirst: {
                    args: Prisma.SellerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SellerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPayload>;
                };
                findMany: {
                    args: Prisma.SellerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPayload>[];
                };
                create: {
                    args: Prisma.SellerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPayload>;
                };
                createMany: {
                    args: Prisma.SellerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SellerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPayload>[];
                };
                delete: {
                    args: Prisma.SellerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPayload>;
                };
                update: {
                    args: Prisma.SellerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPayload>;
                };
                deleteMany: {
                    args: Prisma.SellerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SellerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SellerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPayload>[];
                };
                upsert: {
                    args: Prisma.SellerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPayload>;
                };
                aggregate: {
                    args: Prisma.SellerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSeller>;
                };
                groupBy: {
                    args: Prisma.SellerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SellerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SellerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SellerCountAggregateOutputType> | number;
                };
            };
        };
        Store: {
            payload: Prisma.$StorePayload<ExtArgs>;
            fields: Prisma.StoreFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StoreFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>;
                };
                findFirst: {
                    args: Prisma.StoreFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>;
                };
                findMany: {
                    args: Prisma.StoreFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>[];
                };
                create: {
                    args: Prisma.StoreCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>;
                };
                createMany: {
                    args: Prisma.StoreCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StoreCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>[];
                };
                delete: {
                    args: Prisma.StoreDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>;
                };
                update: {
                    args: Prisma.StoreUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>;
                };
                deleteMany: {
                    args: Prisma.StoreDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StoreUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StoreUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>[];
                };
                upsert: {
                    args: Prisma.StoreUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StorePayload>;
                };
                aggregate: {
                    args: Prisma.StoreAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStore>;
                };
                groupBy: {
                    args: Prisma.StoreGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StoreGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StoreCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StoreCountAggregateOutputType> | number;
                };
            };
        };
        Product: {
            payload: Prisma.$ProductPayload<ExtArgs>;
            fields: Prisma.ProductFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findFirst: {
                    args: Prisma.ProductFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findMany: {
                    args: Prisma.ProductFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                create: {
                    args: Prisma.ProductCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                createMany: {
                    args: Prisma.ProductCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                delete: {
                    args: Prisma.ProductDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                update: {
                    args: Prisma.ProductUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                upsert: {
                    args: Prisma.ProductUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                aggregate: {
                    args: Prisma.ProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct>;
                };
                groupBy: {
                    args: Prisma.ProductGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCountAggregateOutputType> | number;
                };
            };
        };
        Order: {
            payload: Prisma.$OrderPayload<ExtArgs>;
            fields: Prisma.OrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findFirst: {
                    args: Prisma.OrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findMany: {
                    args: Prisma.OrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                create: {
                    args: Prisma.OrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                createMany: {
                    args: Prisma.OrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                delete: {
                    args: Prisma.OrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                update: {
                    args: Prisma.OrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                upsert: {
                    args: Prisma.OrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                aggregate: {
                    args: Prisma.OrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder>;
                };
                groupBy: {
                    args: Prisma.OrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderCountAggregateOutputType> | number;
                };
            };
        };
        OrderItem: {
            payload: Prisma.$OrderItemPayload<ExtArgs>;
            fields: Prisma.OrderItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                findFirst: {
                    args: Prisma.OrderItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                findMany: {
                    args: Prisma.OrderItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                create: {
                    args: Prisma.OrderItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                createMany: {
                    args: Prisma.OrderItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                delete: {
                    args: Prisma.OrderItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                update: {
                    args: Prisma.OrderItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                upsert: {
                    args: Prisma.OrderItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                aggregate: {
                    args: Prisma.OrderItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderItem>;
                };
                groupBy: {
                    args: Prisma.OrderItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderItemCountAggregateOutputType> | number;
                };
            };
        };
        Payment: {
            payload: Prisma.$PaymentPayload<ExtArgs>;
            fields: Prisma.PaymentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PaymentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                findFirst: {
                    args: Prisma.PaymentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                findMany: {
                    args: Prisma.PaymentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                create: {
                    args: Prisma.PaymentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                createMany: {
                    args: Prisma.PaymentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                delete: {
                    args: Prisma.PaymentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                update: {
                    args: Prisma.PaymentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                deleteMany: {
                    args: Prisma.PaymentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PaymentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                upsert: {
                    args: Prisma.PaymentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayment>;
                };
                groupBy: {
                    args: Prisma.PaymentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PaymentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentCountAggregateOutputType> | number;
                };
            };
        };
        WhatsappMessage: {
            payload: Prisma.$WhatsappMessagePayload<ExtArgs>;
            fields: Prisma.WhatsappMessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WhatsappMessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsappMessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WhatsappMessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>;
                };
                findFirst: {
                    args: Prisma.WhatsappMessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsappMessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WhatsappMessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>;
                };
                findMany: {
                    args: Prisma.WhatsappMessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>[];
                };
                create: {
                    args: Prisma.WhatsappMessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>;
                };
                createMany: {
                    args: Prisma.WhatsappMessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WhatsappMessageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>[];
                };
                delete: {
                    args: Prisma.WhatsappMessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>;
                };
                update: {
                    args: Prisma.WhatsappMessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>;
                };
                deleteMany: {
                    args: Prisma.WhatsappMessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WhatsappMessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WhatsappMessageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>[];
                };
                upsert: {
                    args: Prisma.WhatsappMessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>;
                };
                aggregate: {
                    args: Prisma.WhatsappMessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWhatsappMessage>;
                };
                groupBy: {
                    args: Prisma.WhatsappMessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WhatsappMessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WhatsappMessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WhatsappMessageCountAggregateOutputType> | number;
                };
            };
        };
        BotSession: {
            payload: Prisma.$BotSessionPayload<ExtArgs>;
            fields: Prisma.BotSessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BotSessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotSessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BotSessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotSessionPayload>;
                };
                findFirst: {
                    args: Prisma.BotSessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotSessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BotSessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotSessionPayload>;
                };
                findMany: {
                    args: Prisma.BotSessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotSessionPayload>[];
                };
                create: {
                    args: Prisma.BotSessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotSessionPayload>;
                };
                createMany: {
                    args: Prisma.BotSessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BotSessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotSessionPayload>[];
                };
                delete: {
                    args: Prisma.BotSessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotSessionPayload>;
                };
                update: {
                    args: Prisma.BotSessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotSessionPayload>;
                };
                deleteMany: {
                    args: Prisma.BotSessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BotSessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BotSessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotSessionPayload>[];
                };
                upsert: {
                    args: Prisma.BotSessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotSessionPayload>;
                };
                aggregate: {
                    args: Prisma.BotSessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBotSession>;
                };
                groupBy: {
                    args: Prisma.BotSessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BotSessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BotSessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BotSessionCountAggregateOutputType> | number;
                };
            };
        };
        Buyer: {
            payload: Prisma.$BuyerPayload<ExtArgs>;
            fields: Prisma.BuyerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BuyerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BuyerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerPayload>;
                };
                findFirst: {
                    args: Prisma.BuyerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BuyerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerPayload>;
                };
                findMany: {
                    args: Prisma.BuyerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerPayload>[];
                };
                create: {
                    args: Prisma.BuyerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerPayload>;
                };
                createMany: {
                    args: Prisma.BuyerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BuyerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerPayload>[];
                };
                delete: {
                    args: Prisma.BuyerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerPayload>;
                };
                update: {
                    args: Prisma.BuyerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerPayload>;
                };
                deleteMany: {
                    args: Prisma.BuyerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BuyerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BuyerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerPayload>[];
                };
                upsert: {
                    args: Prisma.BuyerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerPayload>;
                };
                aggregate: {
                    args: Prisma.BuyerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBuyer>;
                };
                groupBy: {
                    args: Prisma.BuyerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BuyerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BuyerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BuyerCountAggregateOutputType> | number;
                };
            };
        };
        OtpCode: {
            payload: Prisma.$OtpCodePayload<ExtArgs>;
            fields: Prisma.OtpCodeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OtpCodeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OtpCodeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                findFirst: {
                    args: Prisma.OtpCodeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OtpCodeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                findMany: {
                    args: Prisma.OtpCodeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>[];
                };
                create: {
                    args: Prisma.OtpCodeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                createMany: {
                    args: Prisma.OtpCodeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OtpCodeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>[];
                };
                delete: {
                    args: Prisma.OtpCodeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                update: {
                    args: Prisma.OtpCodeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                deleteMany: {
                    args: Prisma.OtpCodeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OtpCodeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OtpCodeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>[];
                };
                upsert: {
                    args: Prisma.OtpCodeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                aggregate: {
                    args: Prisma.OtpCodeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOtpCode>;
                };
                groupBy: {
                    args: Prisma.OtpCodeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OtpCodeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OtpCodeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OtpCodeCountAggregateOutputType> | number;
                };
            };
        };
        ProductImage: {
            payload: Prisma.$ProductImagePayload<ExtArgs>;
            fields: Prisma.ProductImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                findFirst: {
                    args: Prisma.ProductImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                findMany: {
                    args: Prisma.ProductImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>[];
                };
                create: {
                    args: Prisma.ProductImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                createMany: {
                    args: Prisma.ProductImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductImageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>[];
                };
                delete: {
                    args: Prisma.ProductImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                update: {
                    args: Prisma.ProductImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                deleteMany: {
                    args: Prisma.ProductImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductImageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>[];
                };
                upsert: {
                    args: Prisma.ProductImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                aggregate: {
                    args: Prisma.ProductImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductImage>;
                };
                groupBy: {
                    args: Prisma.ProductImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductImageCountAggregateOutputType> | number;
                };
            };
        };
        Rider: {
            payload: Prisma.$RiderPayload<ExtArgs>;
            fields: Prisma.RiderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RiderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RiderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderPayload>;
                };
                findFirst: {
                    args: Prisma.RiderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RiderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderPayload>;
                };
                findMany: {
                    args: Prisma.RiderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderPayload>[];
                };
                create: {
                    args: Prisma.RiderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderPayload>;
                };
                createMany: {
                    args: Prisma.RiderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RiderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderPayload>[];
                };
                delete: {
                    args: Prisma.RiderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderPayload>;
                };
                update: {
                    args: Prisma.RiderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderPayload>;
                };
                deleteMany: {
                    args: Prisma.RiderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RiderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RiderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderPayload>[];
                };
                upsert: {
                    args: Prisma.RiderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderPayload>;
                };
                aggregate: {
                    args: Prisma.RiderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRider>;
                };
                groupBy: {
                    args: Prisma.RiderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RiderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RiderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RiderCountAggregateOutputType> | number;
                };
            };
        };
        Delivery: {
            payload: Prisma.$DeliveryPayload<ExtArgs>;
            fields: Prisma.DeliveryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeliveryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeliveryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>;
                };
                findFirst: {
                    args: Prisma.DeliveryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeliveryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>;
                };
                findMany: {
                    args: Prisma.DeliveryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>[];
                };
                create: {
                    args: Prisma.DeliveryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>;
                };
                createMany: {
                    args: Prisma.DeliveryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeliveryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>[];
                };
                delete: {
                    args: Prisma.DeliveryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>;
                };
                update: {
                    args: Prisma.DeliveryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>;
                };
                deleteMany: {
                    args: Prisma.DeliveryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeliveryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeliveryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>[];
                };
                upsert: {
                    args: Prisma.DeliveryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryPayload>;
                };
                aggregate: {
                    args: Prisma.DeliveryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDelivery>;
                };
                groupBy: {
                    args: Prisma.DeliveryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeliveryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeliveryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeliveryCountAggregateOutputType> | number;
                };
            };
        };
        RiderEarning: {
            payload: Prisma.$RiderEarningPayload<ExtArgs>;
            fields: Prisma.RiderEarningFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RiderEarningFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderEarningPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RiderEarningFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderEarningPayload>;
                };
                findFirst: {
                    args: Prisma.RiderEarningFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderEarningPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RiderEarningFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderEarningPayload>;
                };
                findMany: {
                    args: Prisma.RiderEarningFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderEarningPayload>[];
                };
                create: {
                    args: Prisma.RiderEarningCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderEarningPayload>;
                };
                createMany: {
                    args: Prisma.RiderEarningCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RiderEarningCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderEarningPayload>[];
                };
                delete: {
                    args: Prisma.RiderEarningDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderEarningPayload>;
                };
                update: {
                    args: Prisma.RiderEarningUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderEarningPayload>;
                };
                deleteMany: {
                    args: Prisma.RiderEarningDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RiderEarningUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RiderEarningUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderEarningPayload>[];
                };
                upsert: {
                    args: Prisma.RiderEarningUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiderEarningPayload>;
                };
                aggregate: {
                    args: Prisma.RiderEarningAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRiderEarning>;
                };
                groupBy: {
                    args: Prisma.RiderEarningGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RiderEarningGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RiderEarningCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RiderEarningCountAggregateOutputType> | number;
                };
            };
        };
        Plugin: {
            payload: Prisma.$PluginPayload<ExtArgs>;
            fields: Prisma.PluginFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PluginFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PluginPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PluginFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PluginPayload>;
                };
                findFirst: {
                    args: Prisma.PluginFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PluginPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PluginFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PluginPayload>;
                };
                findMany: {
                    args: Prisma.PluginFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PluginPayload>[];
                };
                create: {
                    args: Prisma.PluginCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PluginPayload>;
                };
                createMany: {
                    args: Prisma.PluginCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PluginCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PluginPayload>[];
                };
                delete: {
                    args: Prisma.PluginDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PluginPayload>;
                };
                update: {
                    args: Prisma.PluginUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PluginPayload>;
                };
                deleteMany: {
                    args: Prisma.PluginDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PluginUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PluginUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PluginPayload>[];
                };
                upsert: {
                    args: Prisma.PluginUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PluginPayload>;
                };
                aggregate: {
                    args: Prisma.PluginAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlugin>;
                };
                groupBy: {
                    args: Prisma.PluginGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PluginGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PluginCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PluginCountAggregateOutputType> | number;
                };
            };
        };
        SellerPlugin: {
            payload: Prisma.$SellerPluginPayload<ExtArgs>;
            fields: Prisma.SellerPluginFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SellerPluginFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPluginPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SellerPluginFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPluginPayload>;
                };
                findFirst: {
                    args: Prisma.SellerPluginFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPluginPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SellerPluginFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPluginPayload>;
                };
                findMany: {
                    args: Prisma.SellerPluginFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPluginPayload>[];
                };
                create: {
                    args: Prisma.SellerPluginCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPluginPayload>;
                };
                createMany: {
                    args: Prisma.SellerPluginCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SellerPluginCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPluginPayload>[];
                };
                delete: {
                    args: Prisma.SellerPluginDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPluginPayload>;
                };
                update: {
                    args: Prisma.SellerPluginUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPluginPayload>;
                };
                deleteMany: {
                    args: Prisma.SellerPluginDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SellerPluginUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SellerPluginUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPluginPayload>[];
                };
                upsert: {
                    args: Prisma.SellerPluginUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerPluginPayload>;
                };
                aggregate: {
                    args: Prisma.SellerPluginAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSellerPlugin>;
                };
                groupBy: {
                    args: Prisma.SellerPluginGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SellerPluginGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SellerPluginCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SellerPluginCountAggregateOutputType> | number;
                };
            };
        };
        SellerSession: {
            payload: Prisma.$SellerSessionPayload<ExtArgs>;
            fields: Prisma.SellerSessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SellerSessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerSessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SellerSessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerSessionPayload>;
                };
                findFirst: {
                    args: Prisma.SellerSessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerSessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SellerSessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerSessionPayload>;
                };
                findMany: {
                    args: Prisma.SellerSessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerSessionPayload>[];
                };
                create: {
                    args: Prisma.SellerSessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerSessionPayload>;
                };
                createMany: {
                    args: Prisma.SellerSessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SellerSessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerSessionPayload>[];
                };
                delete: {
                    args: Prisma.SellerSessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerSessionPayload>;
                };
                update: {
                    args: Prisma.SellerSessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerSessionPayload>;
                };
                deleteMany: {
                    args: Prisma.SellerSessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SellerSessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SellerSessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerSessionPayload>[];
                };
                upsert: {
                    args: Prisma.SellerSessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SellerSessionPayload>;
                };
                aggregate: {
                    args: Prisma.SellerSessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSellerSession>;
                };
                groupBy: {
                    args: Prisma.SellerSessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SellerSessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SellerSessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SellerSessionCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        ShopifyMerchant: {
            payload: Prisma.$ShopifyMerchantPayload<ExtArgs>;
            fields: Prisma.ShopifyMerchantFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopifyMerchantFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopifyMerchantPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopifyMerchantFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopifyMerchantPayload>;
                };
                findFirst: {
                    args: Prisma.ShopifyMerchantFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopifyMerchantPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopifyMerchantFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopifyMerchantPayload>;
                };
                findMany: {
                    args: Prisma.ShopifyMerchantFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopifyMerchantPayload>[];
                };
                create: {
                    args: Prisma.ShopifyMerchantCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopifyMerchantPayload>;
                };
                createMany: {
                    args: Prisma.ShopifyMerchantCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopifyMerchantCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopifyMerchantPayload>[];
                };
                delete: {
                    args: Prisma.ShopifyMerchantDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopifyMerchantPayload>;
                };
                update: {
                    args: Prisma.ShopifyMerchantUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopifyMerchantPayload>;
                };
                deleteMany: {
                    args: Prisma.ShopifyMerchantDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopifyMerchantUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopifyMerchantUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopifyMerchantPayload>[];
                };
                upsert: {
                    args: Prisma.ShopifyMerchantUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopifyMerchantPayload>;
                };
                aggregate: {
                    args: Prisma.ShopifyMerchantAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopifyMerchant>;
                };
                groupBy: {
                    args: Prisma.ShopifyMerchantGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopifyMerchantGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopifyMerchantCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopifyMerchantCountAggregateOutputType> | number;
                };
            };
        };
        CommentTrigger: {
            payload: Prisma.$CommentTriggerPayload<ExtArgs>;
            fields: Prisma.CommentTriggerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CommentTriggerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentTriggerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CommentTriggerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentTriggerPayload>;
                };
                findFirst: {
                    args: Prisma.CommentTriggerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentTriggerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CommentTriggerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentTriggerPayload>;
                };
                findMany: {
                    args: Prisma.CommentTriggerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentTriggerPayload>[];
                };
                create: {
                    args: Prisma.CommentTriggerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentTriggerPayload>;
                };
                createMany: {
                    args: Prisma.CommentTriggerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CommentTriggerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentTriggerPayload>[];
                };
                delete: {
                    args: Prisma.CommentTriggerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentTriggerPayload>;
                };
                update: {
                    args: Prisma.CommentTriggerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentTriggerPayload>;
                };
                deleteMany: {
                    args: Prisma.CommentTriggerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CommentTriggerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CommentTriggerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentTriggerPayload>[];
                };
                upsert: {
                    args: Prisma.CommentTriggerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentTriggerPayload>;
                };
                aggregate: {
                    args: Prisma.CommentTriggerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCommentTrigger>;
                };
                groupBy: {
                    args: Prisma.CommentTriggerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommentTriggerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CommentTriggerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommentTriggerCountAggregateOutputType> | number;
                };
            };
        };
        CommentDmLog: {
            payload: Prisma.$CommentDmLogPayload<ExtArgs>;
            fields: Prisma.CommentDmLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CommentDmLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentDmLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CommentDmLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentDmLogPayload>;
                };
                findFirst: {
                    args: Prisma.CommentDmLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentDmLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CommentDmLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentDmLogPayload>;
                };
                findMany: {
                    args: Prisma.CommentDmLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentDmLogPayload>[];
                };
                create: {
                    args: Prisma.CommentDmLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentDmLogPayload>;
                };
                createMany: {
                    args: Prisma.CommentDmLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CommentDmLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentDmLogPayload>[];
                };
                delete: {
                    args: Prisma.CommentDmLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentDmLogPayload>;
                };
                update: {
                    args: Prisma.CommentDmLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentDmLogPayload>;
                };
                deleteMany: {
                    args: Prisma.CommentDmLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CommentDmLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CommentDmLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentDmLogPayload>[];
                };
                upsert: {
                    args: Prisma.CommentDmLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentDmLogPayload>;
                };
                aggregate: {
                    args: Prisma.CommentDmLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCommentDmLog>;
                };
                groupBy: {
                    args: Prisma.CommentDmLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommentDmLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CommentDmLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommentDmLogCountAggregateOutputType> | number;
                };
            };
        };
        PostProductMapping: {
            payload: Prisma.$PostProductMappingPayload<ExtArgs>;
            fields: Prisma.PostProductMappingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PostProductMappingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PostProductMappingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PostProductMappingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PostProductMappingPayload>;
                };
                findFirst: {
                    args: Prisma.PostProductMappingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PostProductMappingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PostProductMappingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PostProductMappingPayload>;
                };
                findMany: {
                    args: Prisma.PostProductMappingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PostProductMappingPayload>[];
                };
                create: {
                    args: Prisma.PostProductMappingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PostProductMappingPayload>;
                };
                createMany: {
                    args: Prisma.PostProductMappingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PostProductMappingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PostProductMappingPayload>[];
                };
                delete: {
                    args: Prisma.PostProductMappingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PostProductMappingPayload>;
                };
                update: {
                    args: Prisma.PostProductMappingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PostProductMappingPayload>;
                };
                deleteMany: {
                    args: Prisma.PostProductMappingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PostProductMappingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PostProductMappingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PostProductMappingPayload>[];
                };
                upsert: {
                    args: Prisma.PostProductMappingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PostProductMappingPayload>;
                };
                aggregate: {
                    args: Prisma.PostProductMappingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePostProductMapping>;
                };
                groupBy: {
                    args: Prisma.PostProductMappingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PostProductMappingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PostProductMappingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PostProductMappingCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const SellerScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly name: "name";
    readonly phone: "phone";
    readonly isVerified: "isVerified";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SellerScalarFieldEnum = (typeof SellerScalarFieldEnum)[keyof typeof SellerScalarFieldEnum];
export declare const StoreScalarFieldEnum: {
    readonly id: "id";
    readonly sellerId: "sellerId";
    readonly slug: "slug";
    readonly name: "name";
    readonly description: "description";
    readonly logoUrl: "logoUrl";
    readonly city: "city";
    readonly category: "category";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly sellerId: "sellerId";
    readonly storeId: "storeId";
    readonly name: "name";
    readonly description: "description";
    readonly price: "price";
    readonly currency: "currency";
    readonly active: "active";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly stockQty: "stockQty";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly sellerId: "sellerId";
    readonly storeId: "storeId";
    readonly status: "status";
    readonly customerName: "customerName";
    readonly customerPhone: "customerPhone";
    readonly customerEmail: "customerEmail";
    readonly totalAmount: "totalAmount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly orderNumber: "orderNumber";
    readonly deliveryCode: "deliveryCode";
    readonly buyerId: "buyerId";
    readonly deliveryAddress: "deliveryAddress";
    readonly notes: "notes";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly productId: "productId";
    readonly quantity: "quantity";
    readonly unitPrice: "unitPrice";
    readonly lineTotal: "lineTotal";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly provider: "provider";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly gatewayReference: "gatewayReference";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const WhatsappMessageScalarFieldEnum: {
    readonly id: "id";
    readonly sellerId: "sellerId";
    readonly storeId: "storeId";
    readonly orderId: "orderId";
    readonly direction: "direction";
    readonly toNumber: "toNumber";
    readonly fromNumber: "fromNumber";
    readonly content: "content";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type WhatsappMessageScalarFieldEnum = (typeof WhatsappMessageScalarFieldEnum)[keyof typeof WhatsappMessageScalarFieldEnum];
export declare const BotSessionScalarFieldEnum: {
    readonly id: "id";
    readonly phoneNumber: "phoneNumber";
    readonly state: "state";
    readonly context: "context";
    readonly updatedAt: "updatedAt";
    readonly createdAt: "createdAt";
};
export type BotSessionScalarFieldEnum = (typeof BotSessionScalarFieldEnum)[keyof typeof BotSessionScalarFieldEnum];
export declare const BuyerScalarFieldEnum: {
    readonly id: "id";
    readonly phoneNumber: "phoneNumber";
    readonly fullName: "fullName";
    readonly city: "city";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BuyerScalarFieldEnum = (typeof BuyerScalarFieldEnum)[keyof typeof BuyerScalarFieldEnum];
export declare const OtpCodeScalarFieldEnum: {
    readonly id: "id";
    readonly phoneNumber: "phoneNumber";
    readonly code: "code";
    readonly purpose: "purpose";
    readonly isUsed: "isUsed";
    readonly attempts: "attempts";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
};
export type OtpCodeScalarFieldEnum = (typeof OtpCodeScalarFieldEnum)[keyof typeof OtpCodeScalarFieldEnum];
export declare const ProductImageScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly imageUrl: "imageUrl";
    readonly isPrimary: "isPrimary";
    readonly sortOrder: "sortOrder";
};
export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum];
export declare const RiderScalarFieldEnum: {
    readonly id: "id";
    readonly phoneNumber: "phoneNumber";
    readonly fullName: "fullName";
    readonly nationalId: "nationalId";
    readonly city: "city";
    readonly vehicleType: "vehicleType";
    readonly isVerified: "isVerified";
    readonly isOnline: "isOnline";
    readonly rating: "rating";
    readonly totalDeliveries: "totalDeliveries";
    readonly createdAt: "createdAt";
};
export type RiderScalarFieldEnum = (typeof RiderScalarFieldEnum)[keyof typeof RiderScalarFieldEnum];
export declare const DeliveryScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly riderId: "riderId";
    readonly pickupAddress: "pickupAddress";
    readonly dropoffAddress: "dropoffAddress";
    readonly distanceKm: "distanceKm";
    readonly feeUsd: "feeUsd";
    readonly platformCut: "platformCut";
    readonly riderPayout: "riderPayout";
    readonly status: "status";
    readonly assignedAt: "assignedAt";
    readonly pickedUpAt: "pickedUpAt";
    readonly deliveredAt: "deliveredAt";
    readonly createdAt: "createdAt";
};
export type DeliveryScalarFieldEnum = (typeof DeliveryScalarFieldEnum)[keyof typeof DeliveryScalarFieldEnum];
export declare const RiderEarningScalarFieldEnum: {
    readonly id: "id";
    readonly riderId: "riderId";
    readonly deliveryId: "deliveryId";
    readonly amountUsd: "amountUsd";
    readonly type: "type";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type RiderEarningScalarFieldEnum = (typeof RiderEarningScalarFieldEnum)[keyof typeof RiderEarningScalarFieldEnum];
export declare const PluginScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly name: "name";
    readonly description: "description";
    readonly priceUsd: "priceUsd";
    readonly isFree: "isFree";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
};
export type PluginScalarFieldEnum = (typeof PluginScalarFieldEnum)[keyof typeof PluginScalarFieldEnum];
export declare const SellerPluginScalarFieldEnum: {
    readonly id: "id";
    readonly sellerId: "sellerId";
    readonly pluginId: "pluginId";
    readonly isActive: "isActive";
    readonly config: "config";
    readonly installedAt: "installedAt";
};
export type SellerPluginScalarFieldEnum = (typeof SellerPluginScalarFieldEnum)[keyof typeof SellerPluginScalarFieldEnum];
export declare const SellerSessionScalarFieldEnum: {
    readonly id: "id";
    readonly sellerId: "sellerId";
    readonly refreshToken: "refreshToken";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
};
export type SellerSessionScalarFieldEnum = (typeof SellerSessionScalarFieldEnum)[keyof typeof SellerSessionScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly actorType: "actorType";
    readonly actorId: "actorId";
    readonly action: "action";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly metadata: "metadata";
    readonly ipAddress: "ipAddress";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const ShopifyMerchantScalarFieldEnum: {
    readonly id: "id";
    readonly shop: "shop";
    readonly accessToken: "accessToken";
    readonly scope: "scope";
    readonly storeSlug: "storeSlug";
    readonly storeName: "storeName";
    readonly whatsappConnected: "whatsappConnected";
    readonly whatsappNumber: "whatsappNumber";
    readonly whatsappPhoneId: "whatsappPhoneId";
    readonly whatsappToken: "whatsappToken";
    readonly instagramConnected: "instagramConnected";
    readonly instagramToken: "instagramToken";
    readonly instagramAccountId: "instagramAccountId";
    readonly instagramUsername: "instagramUsername";
    readonly messengerConnected: "messengerConnected";
    readonly messengerToken: "messengerToken";
    readonly messengerPageId: "messengerPageId";
    readonly messengerPageName: "messengerPageName";
    readonly isActive: "isActive";
    readonly installedAt: "installedAt";
    readonly uninstalledAt: "uninstalledAt";
    readonly planName: "planName";
    readonly planStatus: "planStatus";
    readonly planChargeId: "planChargeId";
    readonly planTrialExpiresAt: "planTrialExpiresAt";
    readonly updatedAt: "updatedAt";
};
export type ShopifyMerchantScalarFieldEnum = (typeof ShopifyMerchantScalarFieldEnum)[keyof typeof ShopifyMerchantScalarFieldEnum];
export declare const CommentTriggerScalarFieldEnum: {
    readonly id: "id";
    readonly merchantId: "merchantId";
    readonly keyword: "keyword";
    readonly replyComment: "replyComment";
    readonly templateMessage: "templateMessage";
    readonly isActive: "isActive";
    readonly triggerCount: "triggerCount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CommentTriggerScalarFieldEnum = (typeof CommentTriggerScalarFieldEnum)[keyof typeof CommentTriggerScalarFieldEnum];
export declare const CommentDmLogScalarFieldEnum: {
    readonly id: "id";
    readonly merchantId: "merchantId";
    readonly commenterId: "commenterId";
    readonly mediaId: "mediaId";
    readonly keyword: "keyword";
    readonly sentAt: "sentAt";
};
export type CommentDmLogScalarFieldEnum = (typeof CommentDmLogScalarFieldEnum)[keyof typeof CommentDmLogScalarFieldEnum];
export declare const PostProductMappingScalarFieldEnum: {
    readonly id: "id";
    readonly merchantId: "merchantId";
    readonly platform: "platform";
    readonly postUrl: "postUrl";
    readonly mediaId: "mediaId";
    readonly shopifyProductId: "shopifyProductId";
    readonly productTitle: "productTitle";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PostProductMappingScalarFieldEnum = (typeof PostProductMappingScalarFieldEnum)[keyof typeof PostProductMappingScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>;
export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>;
export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>;
export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>;
export type EnumMessageDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageDirection'>;
export type ListEnumMessageDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageDirection[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type EnumOtpPurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtpPurpose'>;
export type ListEnumOtpPurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtpPurpose[]'>;
export type EnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType'>;
export type ListEnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType[]'>;
export type EnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus'>;
export type ListEnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus[]'>;
export type EnumEarningTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EarningType'>;
export type ListEnumEarningTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EarningType[]'>;
export type EnumEarningStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EarningStatus'>;
export type ListEnumEarningStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EarningStatus[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    seller?: Prisma.SellerOmit;
    store?: Prisma.StoreOmit;
    product?: Prisma.ProductOmit;
    order?: Prisma.OrderOmit;
    orderItem?: Prisma.OrderItemOmit;
    payment?: Prisma.PaymentOmit;
    whatsappMessage?: Prisma.WhatsappMessageOmit;
    botSession?: Prisma.BotSessionOmit;
    buyer?: Prisma.BuyerOmit;
    otpCode?: Prisma.OtpCodeOmit;
    productImage?: Prisma.ProductImageOmit;
    rider?: Prisma.RiderOmit;
    delivery?: Prisma.DeliveryOmit;
    riderEarning?: Prisma.RiderEarningOmit;
    plugin?: Prisma.PluginOmit;
    sellerPlugin?: Prisma.SellerPluginOmit;
    sellerSession?: Prisma.SellerSessionOmit;
    auditLog?: Prisma.AuditLogOmit;
    shopifyMerchant?: Prisma.ShopifyMerchantOmit;
    commentTrigger?: Prisma.CommentTriggerOmit;
    commentDmLog?: Prisma.CommentDmLogOmit;
    postProductMapping?: Prisma.PostProductMappingOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;

import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SellerModel = runtime.Types.Result.DefaultSelection<Prisma.$SellerPayload>;
export type AggregateSeller = {
    _count: SellerCountAggregateOutputType | null;
    _min: SellerMinAggregateOutputType | null;
    _max: SellerMaxAggregateOutputType | null;
};
export type SellerMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    name: string | null;
    phone: string | null;
    isVerified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SellerMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    name: string | null;
    phone: string | null;
    isVerified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SellerCountAggregateOutputType = {
    id: number;
    email: number;
    passwordHash: number;
    name: number;
    phone: number;
    isVerified: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SellerMinAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    name?: true;
    phone?: true;
    isVerified?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SellerMaxAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    name?: true;
    phone?: true;
    isVerified?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SellerCountAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    name?: true;
    phone?: true;
    isVerified?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SellerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerWhereInput;
    orderBy?: Prisma.SellerOrderByWithRelationInput | Prisma.SellerOrderByWithRelationInput[];
    cursor?: Prisma.SellerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SellerCountAggregateInputType;
    _min?: SellerMinAggregateInputType;
    _max?: SellerMaxAggregateInputType;
};
export type GetSellerAggregateType<T extends SellerAggregateArgs> = {
    [P in keyof T & keyof AggregateSeller]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSeller[P]> : Prisma.GetScalarType<T[P], AggregateSeller[P]>;
};
export type SellerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerWhereInput;
    orderBy?: Prisma.SellerOrderByWithAggregationInput | Prisma.SellerOrderByWithAggregationInput[];
    by: Prisma.SellerScalarFieldEnum[] | Prisma.SellerScalarFieldEnum;
    having?: Prisma.SellerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SellerCountAggregateInputType | true;
    _min?: SellerMinAggregateInputType;
    _max?: SellerMaxAggregateInputType;
};
export type SellerGroupByOutputType = {
    id: string;
    email: string | null;
    passwordHash: string;
    name: string;
    phone: string;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: SellerCountAggregateOutputType | null;
    _min: SellerMinAggregateOutputType | null;
    _max: SellerMaxAggregateOutputType | null;
};
type GetSellerGroupByPayload<T extends SellerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SellerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SellerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SellerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SellerGroupByOutputType[P]>;
}>>;
export type SellerWhereInput = {
    AND?: Prisma.SellerWhereInput | Prisma.SellerWhereInput[];
    OR?: Prisma.SellerWhereInput[];
    NOT?: Prisma.SellerWhereInput | Prisma.SellerWhereInput[];
    id?: Prisma.StringFilter<"Seller"> | string;
    email?: Prisma.StringNullableFilter<"Seller"> | string | null;
    passwordHash?: Prisma.StringFilter<"Seller"> | string;
    name?: Prisma.StringFilter<"Seller"> | string;
    phone?: Prisma.StringFilter<"Seller"> | string;
    isVerified?: Prisma.BoolFilter<"Seller"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Seller"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Seller"> | Date | string;
    store?: Prisma.XOR<Prisma.StoreNullableScalarRelationFilter, Prisma.StoreWhereInput> | null;
    products?: Prisma.ProductListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
    messages?: Prisma.WhatsappMessageListRelationFilter;
    sessions?: Prisma.SellerSessionListRelationFilter;
    plugins?: Prisma.SellerPluginListRelationFilter;
};
export type SellerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    store?: Prisma.StoreOrderByWithRelationInput;
    products?: Prisma.ProductOrderByRelationAggregateInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    messages?: Prisma.WhatsappMessageOrderByRelationAggregateInput;
    sessions?: Prisma.SellerSessionOrderByRelationAggregateInput;
    plugins?: Prisma.SellerPluginOrderByRelationAggregateInput;
};
export type SellerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    phone?: string;
    AND?: Prisma.SellerWhereInput | Prisma.SellerWhereInput[];
    OR?: Prisma.SellerWhereInput[];
    NOT?: Prisma.SellerWhereInput | Prisma.SellerWhereInput[];
    passwordHash?: Prisma.StringFilter<"Seller"> | string;
    name?: Prisma.StringFilter<"Seller"> | string;
    isVerified?: Prisma.BoolFilter<"Seller"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Seller"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Seller"> | Date | string;
    store?: Prisma.XOR<Prisma.StoreNullableScalarRelationFilter, Prisma.StoreWhereInput> | null;
    products?: Prisma.ProductListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
    messages?: Prisma.WhatsappMessageListRelationFilter;
    sessions?: Prisma.SellerSessionListRelationFilter;
    plugins?: Prisma.SellerPluginListRelationFilter;
}, "id" | "email" | "phone">;
export type SellerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SellerCountOrderByAggregateInput;
    _max?: Prisma.SellerMaxOrderByAggregateInput;
    _min?: Prisma.SellerMinOrderByAggregateInput;
};
export type SellerScalarWhereWithAggregatesInput = {
    AND?: Prisma.SellerScalarWhereWithAggregatesInput | Prisma.SellerScalarWhereWithAggregatesInput[];
    OR?: Prisma.SellerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SellerScalarWhereWithAggregatesInput | Prisma.SellerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Seller"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Seller"> | string | null;
    passwordHash?: Prisma.StringWithAggregatesFilter<"Seller"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Seller"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"Seller"> | string;
    isVerified?: Prisma.BoolWithAggregatesFilter<"Seller"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Seller"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Seller"> | Date | string;
};
export type SellerCreateInput = {
    id?: string;
    email?: string | null;
    passwordHash: string;
    name: string;
    phone: string;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    store?: Prisma.StoreCreateNestedOneWithoutSellerInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutSellerInput;
    messages?: Prisma.WhatsappMessageCreateNestedManyWithoutSellerInput;
    sessions?: Prisma.SellerSessionCreateNestedManyWithoutSellerInput;
    plugins?: Prisma.SellerPluginCreateNestedManyWithoutSellerInput;
};
export type SellerUncheckedCreateInput = {
    id?: string;
    email?: string | null;
    passwordHash: string;
    name: string;
    phone: string;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    store?: Prisma.StoreUncheckedCreateNestedOneWithoutSellerInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutSellerInput;
    messages?: Prisma.WhatsappMessageUncheckedCreateNestedManyWithoutSellerInput;
    sessions?: Prisma.SellerSessionUncheckedCreateNestedManyWithoutSellerInput;
    plugins?: Prisma.SellerPluginUncheckedCreateNestedManyWithoutSellerInput;
};
export type SellerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store?: Prisma.StoreUpdateOneWithoutSellerNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutSellerNestedInput;
    messages?: Prisma.WhatsappMessageUpdateManyWithoutSellerNestedInput;
    sessions?: Prisma.SellerSessionUpdateManyWithoutSellerNestedInput;
    plugins?: Prisma.SellerPluginUpdateManyWithoutSellerNestedInput;
};
export type SellerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store?: Prisma.StoreUncheckedUpdateOneWithoutSellerNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutSellerNestedInput;
    messages?: Prisma.WhatsappMessageUncheckedUpdateManyWithoutSellerNestedInput;
    sessions?: Prisma.SellerSessionUncheckedUpdateManyWithoutSellerNestedInput;
    plugins?: Prisma.SellerPluginUncheckedUpdateManyWithoutSellerNestedInput;
};
export type SellerCreateManyInput = {
    id?: string;
    email?: string | null;
    passwordHash: string;
    name: string;
    phone: string;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SellerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SellerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SellerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SellerScalarRelationFilter = {
    is?: Prisma.SellerWhereInput;
    isNot?: Prisma.SellerWhereInput;
};
export type SellerNullableScalarRelationFilter = {
    is?: Prisma.SellerWhereInput | null;
    isNot?: Prisma.SellerWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type SellerCreateNestedOneWithoutStoreInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutStoreInput, Prisma.SellerUncheckedCreateWithoutStoreInput>;
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutStoreInput;
    connect?: Prisma.SellerWhereUniqueInput;
};
export type SellerUpdateOneRequiredWithoutStoreNestedInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutStoreInput, Prisma.SellerUncheckedCreateWithoutStoreInput>;
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutStoreInput;
    upsert?: Prisma.SellerUpsertWithoutStoreInput;
    connect?: Prisma.SellerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SellerUpdateToOneWithWhereWithoutStoreInput, Prisma.SellerUpdateWithoutStoreInput>, Prisma.SellerUncheckedUpdateWithoutStoreInput>;
};
export type SellerCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutProductsInput, Prisma.SellerUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutProductsInput;
    connect?: Prisma.SellerWhereUniqueInput;
};
export type SellerUpdateOneRequiredWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutProductsInput, Prisma.SellerUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.SellerUpsertWithoutProductsInput;
    connect?: Prisma.SellerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SellerUpdateToOneWithWhereWithoutProductsInput, Prisma.SellerUpdateWithoutProductsInput>, Prisma.SellerUncheckedUpdateWithoutProductsInput>;
};
export type SellerCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutOrdersInput, Prisma.SellerUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.SellerWhereUniqueInput;
};
export type SellerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutOrdersInput, Prisma.SellerUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.SellerUpsertWithoutOrdersInput;
    connect?: Prisma.SellerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SellerUpdateToOneWithWhereWithoutOrdersInput, Prisma.SellerUpdateWithoutOrdersInput>, Prisma.SellerUncheckedUpdateWithoutOrdersInput>;
};
export type SellerCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutMessagesInput, Prisma.SellerUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.SellerWhereUniqueInput;
};
export type SellerUpdateOneWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutMessagesInput, Prisma.SellerUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.SellerUpsertWithoutMessagesInput;
    disconnect?: Prisma.SellerWhereInput | boolean;
    delete?: Prisma.SellerWhereInput | boolean;
    connect?: Prisma.SellerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SellerUpdateToOneWithWhereWithoutMessagesInput, Prisma.SellerUpdateWithoutMessagesInput>, Prisma.SellerUncheckedUpdateWithoutMessagesInput>;
};
export type SellerCreateNestedOneWithoutPluginsInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutPluginsInput, Prisma.SellerUncheckedCreateWithoutPluginsInput>;
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutPluginsInput;
    connect?: Prisma.SellerWhereUniqueInput;
};
export type SellerUpdateOneRequiredWithoutPluginsNestedInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutPluginsInput, Prisma.SellerUncheckedCreateWithoutPluginsInput>;
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutPluginsInput;
    upsert?: Prisma.SellerUpsertWithoutPluginsInput;
    connect?: Prisma.SellerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SellerUpdateToOneWithWhereWithoutPluginsInput, Prisma.SellerUpdateWithoutPluginsInput>, Prisma.SellerUncheckedUpdateWithoutPluginsInput>;
};
export type SellerCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutSessionsInput, Prisma.SellerUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.SellerWhereUniqueInput;
};
export type SellerUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutSessionsInput, Prisma.SellerUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.SellerUpsertWithoutSessionsInput;
    connect?: Prisma.SellerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SellerUpdateToOneWithWhereWithoutSessionsInput, Prisma.SellerUpdateWithoutSessionsInput>, Prisma.SellerUncheckedUpdateWithoutSessionsInput>;
};
export type SellerCreateWithoutStoreInput = {
    id?: string;
    email?: string | null;
    passwordHash: string;
    name: string;
    phone: string;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutSellerInput;
    messages?: Prisma.WhatsappMessageCreateNestedManyWithoutSellerInput;
    sessions?: Prisma.SellerSessionCreateNestedManyWithoutSellerInput;
    plugins?: Prisma.SellerPluginCreateNestedManyWithoutSellerInput;
};
export type SellerUncheckedCreateWithoutStoreInput = {
    id?: string;
    email?: string | null;
    passwordHash: string;
    name: string;
    phone: string;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutSellerInput;
    messages?: Prisma.WhatsappMessageUncheckedCreateNestedManyWithoutSellerInput;
    sessions?: Prisma.SellerSessionUncheckedCreateNestedManyWithoutSellerInput;
    plugins?: Prisma.SellerPluginUncheckedCreateNestedManyWithoutSellerInput;
};
export type SellerCreateOrConnectWithoutStoreInput = {
    where: Prisma.SellerWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerCreateWithoutStoreInput, Prisma.SellerUncheckedCreateWithoutStoreInput>;
};
export type SellerUpsertWithoutStoreInput = {
    update: Prisma.XOR<Prisma.SellerUpdateWithoutStoreInput, Prisma.SellerUncheckedUpdateWithoutStoreInput>;
    create: Prisma.XOR<Prisma.SellerCreateWithoutStoreInput, Prisma.SellerUncheckedCreateWithoutStoreInput>;
    where?: Prisma.SellerWhereInput;
};
export type SellerUpdateToOneWithWhereWithoutStoreInput = {
    where?: Prisma.SellerWhereInput;
    data: Prisma.XOR<Prisma.SellerUpdateWithoutStoreInput, Prisma.SellerUncheckedUpdateWithoutStoreInput>;
};
export type SellerUpdateWithoutStoreInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutSellerNestedInput;
    messages?: Prisma.WhatsappMessageUpdateManyWithoutSellerNestedInput;
    sessions?: Prisma.SellerSessionUpdateManyWithoutSellerNestedInput;
    plugins?: Prisma.SellerPluginUpdateManyWithoutSellerNestedInput;
};
export type SellerUncheckedUpdateWithoutStoreInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutSellerNestedInput;
    messages?: Prisma.WhatsappMessageUncheckedUpdateManyWithoutSellerNestedInput;
    sessions?: Prisma.SellerSessionUncheckedUpdateManyWithoutSellerNestedInput;
    plugins?: Prisma.SellerPluginUncheckedUpdateManyWithoutSellerNestedInput;
};
export type SellerCreateWithoutProductsInput = {
    id?: string;
    email?: string | null;
    passwordHash: string;
    name: string;
    phone: string;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    store?: Prisma.StoreCreateNestedOneWithoutSellerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutSellerInput;
    messages?: Prisma.WhatsappMessageCreateNestedManyWithoutSellerInput;
    sessions?: Prisma.SellerSessionCreateNestedManyWithoutSellerInput;
    plugins?: Prisma.SellerPluginCreateNestedManyWithoutSellerInput;
};
export type SellerUncheckedCreateWithoutProductsInput = {
    id?: string;
    email?: string | null;
    passwordHash: string;
    name: string;
    phone: string;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    store?: Prisma.StoreUncheckedCreateNestedOneWithoutSellerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutSellerInput;
    messages?: Prisma.WhatsappMessageUncheckedCreateNestedManyWithoutSellerInput;
    sessions?: Prisma.SellerSessionUncheckedCreateNestedManyWithoutSellerInput;
    plugins?: Prisma.SellerPluginUncheckedCreateNestedManyWithoutSellerInput;
};
export type SellerCreateOrConnectWithoutProductsInput = {
    where: Prisma.SellerWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerCreateWithoutProductsInput, Prisma.SellerUncheckedCreateWithoutProductsInput>;
};
export type SellerUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.SellerUpdateWithoutProductsInput, Prisma.SellerUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.SellerCreateWithoutProductsInput, Prisma.SellerUncheckedCreateWithoutProductsInput>;
    where?: Prisma.SellerWhereInput;
};
export type SellerUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.SellerWhereInput;
    data: Prisma.XOR<Prisma.SellerUpdateWithoutProductsInput, Prisma.SellerUncheckedUpdateWithoutProductsInput>;
};
export type SellerUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store?: Prisma.StoreUpdateOneWithoutSellerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutSellerNestedInput;
    messages?: Prisma.WhatsappMessageUpdateManyWithoutSellerNestedInput;
    sessions?: Prisma.SellerSessionUpdateManyWithoutSellerNestedInput;
    plugins?: Prisma.SellerPluginUpdateManyWithoutSellerNestedInput;
};
export type SellerUncheckedUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store?: Prisma.StoreUncheckedUpdateOneWithoutSellerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutSellerNestedInput;
    messages?: Prisma.WhatsappMessageUncheckedUpdateManyWithoutSellerNestedInput;
    sessions?: Prisma.SellerSessionUncheckedUpdateManyWithoutSellerNestedInput;
    plugins?: Prisma.SellerPluginUncheckedUpdateManyWithoutSellerNestedInput;
};
export type SellerCreateWithoutOrdersInput = {
    id?: string;
    email?: string | null;
    passwordHash: string;
    name: string;
    phone: string;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    store?: Prisma.StoreCreateNestedOneWithoutSellerInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    messages?: Prisma.WhatsappMessageCreateNestedManyWithoutSellerInput;
    sessions?: Prisma.SellerSessionCreateNestedManyWithoutSellerInput;
    plugins?: Prisma.SellerPluginCreateNestedManyWithoutSellerInput;
};
export type SellerUncheckedCreateWithoutOrdersInput = {
    id?: string;
    email?: string | null;
    passwordHash: string;
    name: string;
    phone: string;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    store?: Prisma.StoreUncheckedCreateNestedOneWithoutSellerInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    messages?: Prisma.WhatsappMessageUncheckedCreateNestedManyWithoutSellerInput;
    sessions?: Prisma.SellerSessionUncheckedCreateNestedManyWithoutSellerInput;
    plugins?: Prisma.SellerPluginUncheckedCreateNestedManyWithoutSellerInput;
};
export type SellerCreateOrConnectWithoutOrdersInput = {
    where: Prisma.SellerWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerCreateWithoutOrdersInput, Prisma.SellerUncheckedCreateWithoutOrdersInput>;
};
export type SellerUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.SellerUpdateWithoutOrdersInput, Prisma.SellerUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.SellerCreateWithoutOrdersInput, Prisma.SellerUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.SellerWhereInput;
};
export type SellerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.SellerWhereInput;
    data: Prisma.XOR<Prisma.SellerUpdateWithoutOrdersInput, Prisma.SellerUncheckedUpdateWithoutOrdersInput>;
};
export type SellerUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store?: Prisma.StoreUpdateOneWithoutSellerNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    messages?: Prisma.WhatsappMessageUpdateManyWithoutSellerNestedInput;
    sessions?: Prisma.SellerSessionUpdateManyWithoutSellerNestedInput;
    plugins?: Prisma.SellerPluginUpdateManyWithoutSellerNestedInput;
};
export type SellerUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store?: Prisma.StoreUncheckedUpdateOneWithoutSellerNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    messages?: Prisma.WhatsappMessageUncheckedUpdateManyWithoutSellerNestedInput;
    sessions?: Prisma.SellerSessionUncheckedUpdateManyWithoutSellerNestedInput;
    plugins?: Prisma.SellerPluginUncheckedUpdateManyWithoutSellerNestedInput;
};
export type SellerCreateWithoutMessagesInput = {
    id?: string;
    email?: string | null;
    passwordHash: string;
    name: string;
    phone: string;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    store?: Prisma.StoreCreateNestedOneWithoutSellerInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutSellerInput;
    sessions?: Prisma.SellerSessionCreateNestedManyWithoutSellerInput;
    plugins?: Prisma.SellerPluginCreateNestedManyWithoutSellerInput;
};
export type SellerUncheckedCreateWithoutMessagesInput = {
    id?: string;
    email?: string | null;
    passwordHash: string;
    name: string;
    phone: string;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    store?: Prisma.StoreUncheckedCreateNestedOneWithoutSellerInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutSellerInput;
    sessions?: Prisma.SellerSessionUncheckedCreateNestedManyWithoutSellerInput;
    plugins?: Prisma.SellerPluginUncheckedCreateNestedManyWithoutSellerInput;
};
export type SellerCreateOrConnectWithoutMessagesInput = {
    where: Prisma.SellerWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerCreateWithoutMessagesInput, Prisma.SellerUncheckedCreateWithoutMessagesInput>;
};
export type SellerUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.SellerUpdateWithoutMessagesInput, Prisma.SellerUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.SellerCreateWithoutMessagesInput, Prisma.SellerUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.SellerWhereInput;
};
export type SellerUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.SellerWhereInput;
    data: Prisma.XOR<Prisma.SellerUpdateWithoutMessagesInput, Prisma.SellerUncheckedUpdateWithoutMessagesInput>;
};
export type SellerUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store?: Prisma.StoreUpdateOneWithoutSellerNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutSellerNestedInput;
    sessions?: Prisma.SellerSessionUpdateManyWithoutSellerNestedInput;
    plugins?: Prisma.SellerPluginUpdateManyWithoutSellerNestedInput;
};
export type SellerUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store?: Prisma.StoreUncheckedUpdateOneWithoutSellerNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutSellerNestedInput;
    sessions?: Prisma.SellerSessionUncheckedUpdateManyWithoutSellerNestedInput;
    plugins?: Prisma.SellerPluginUncheckedUpdateManyWithoutSellerNestedInput;
};
export type SellerCreateWithoutPluginsInput = {
    id?: string;
    email?: string | null;
    passwordHash: string;
    name: string;
    phone: string;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    store?: Prisma.StoreCreateNestedOneWithoutSellerInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutSellerInput;
    messages?: Prisma.WhatsappMessageCreateNestedManyWithoutSellerInput;
    sessions?: Prisma.SellerSessionCreateNestedManyWithoutSellerInput;
};
export type SellerUncheckedCreateWithoutPluginsInput = {
    id?: string;
    email?: string | null;
    passwordHash: string;
    name: string;
    phone: string;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    store?: Prisma.StoreUncheckedCreateNestedOneWithoutSellerInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutSellerInput;
    messages?: Prisma.WhatsappMessageUncheckedCreateNestedManyWithoutSellerInput;
    sessions?: Prisma.SellerSessionUncheckedCreateNestedManyWithoutSellerInput;
};
export type SellerCreateOrConnectWithoutPluginsInput = {
    where: Prisma.SellerWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerCreateWithoutPluginsInput, Prisma.SellerUncheckedCreateWithoutPluginsInput>;
};
export type SellerUpsertWithoutPluginsInput = {
    update: Prisma.XOR<Prisma.SellerUpdateWithoutPluginsInput, Prisma.SellerUncheckedUpdateWithoutPluginsInput>;
    create: Prisma.XOR<Prisma.SellerCreateWithoutPluginsInput, Prisma.SellerUncheckedCreateWithoutPluginsInput>;
    where?: Prisma.SellerWhereInput;
};
export type SellerUpdateToOneWithWhereWithoutPluginsInput = {
    where?: Prisma.SellerWhereInput;
    data: Prisma.XOR<Prisma.SellerUpdateWithoutPluginsInput, Prisma.SellerUncheckedUpdateWithoutPluginsInput>;
};
export type SellerUpdateWithoutPluginsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store?: Prisma.StoreUpdateOneWithoutSellerNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutSellerNestedInput;
    messages?: Prisma.WhatsappMessageUpdateManyWithoutSellerNestedInput;
    sessions?: Prisma.SellerSessionUpdateManyWithoutSellerNestedInput;
};
export type SellerUncheckedUpdateWithoutPluginsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store?: Prisma.StoreUncheckedUpdateOneWithoutSellerNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutSellerNestedInput;
    messages?: Prisma.WhatsappMessageUncheckedUpdateManyWithoutSellerNestedInput;
    sessions?: Prisma.SellerSessionUncheckedUpdateManyWithoutSellerNestedInput;
};
export type SellerCreateWithoutSessionsInput = {
    id?: string;
    email?: string | null;
    passwordHash: string;
    name: string;
    phone: string;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    store?: Prisma.StoreCreateNestedOneWithoutSellerInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutSellerInput;
    messages?: Prisma.WhatsappMessageCreateNestedManyWithoutSellerInput;
    plugins?: Prisma.SellerPluginCreateNestedManyWithoutSellerInput;
};
export type SellerUncheckedCreateWithoutSessionsInput = {
    id?: string;
    email?: string | null;
    passwordHash: string;
    name: string;
    phone: string;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    store?: Prisma.StoreUncheckedCreateNestedOneWithoutSellerInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutSellerInput;
    messages?: Prisma.WhatsappMessageUncheckedCreateNestedManyWithoutSellerInput;
    plugins?: Prisma.SellerPluginUncheckedCreateNestedManyWithoutSellerInput;
};
export type SellerCreateOrConnectWithoutSessionsInput = {
    where: Prisma.SellerWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerCreateWithoutSessionsInput, Prisma.SellerUncheckedCreateWithoutSessionsInput>;
};
export type SellerUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.SellerUpdateWithoutSessionsInput, Prisma.SellerUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.SellerCreateWithoutSessionsInput, Prisma.SellerUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.SellerWhereInput;
};
export type SellerUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.SellerWhereInput;
    data: Prisma.XOR<Prisma.SellerUpdateWithoutSessionsInput, Prisma.SellerUncheckedUpdateWithoutSessionsInput>;
};
export type SellerUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store?: Prisma.StoreUpdateOneWithoutSellerNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutSellerNestedInput;
    messages?: Prisma.WhatsappMessageUpdateManyWithoutSellerNestedInput;
    plugins?: Prisma.SellerPluginUpdateManyWithoutSellerNestedInput;
};
export type SellerUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store?: Prisma.StoreUncheckedUpdateOneWithoutSellerNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutSellerNestedInput;
    messages?: Prisma.WhatsappMessageUncheckedUpdateManyWithoutSellerNestedInput;
    plugins?: Prisma.SellerPluginUncheckedUpdateManyWithoutSellerNestedInput;
};
export type SellerCountOutputType = {
    products: number;
    orders: number;
    messages: number;
    sessions: number;
    plugins: number;
};
export type SellerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | SellerCountOutputTypeCountProductsArgs;
    orders?: boolean | SellerCountOutputTypeCountOrdersArgs;
    messages?: boolean | SellerCountOutputTypeCountMessagesArgs;
    sessions?: boolean | SellerCountOutputTypeCountSessionsArgs;
    plugins?: boolean | SellerCountOutputTypeCountPluginsArgs;
};
export type SellerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerCountOutputTypeSelect<ExtArgs> | null;
};
export type SellerCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
export type SellerCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type SellerCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsappMessageWhereInput;
};
export type SellerCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerSessionWhereInput;
};
export type SellerCountOutputTypeCountPluginsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerPluginWhereInput;
};
export type SellerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    name?: boolean;
    phone?: boolean;
    isVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    store?: boolean | Prisma.Seller$storeArgs<ExtArgs>;
    products?: boolean | Prisma.Seller$productsArgs<ExtArgs>;
    orders?: boolean | Prisma.Seller$ordersArgs<ExtArgs>;
    messages?: boolean | Prisma.Seller$messagesArgs<ExtArgs>;
    sessions?: boolean | Prisma.Seller$sessionsArgs<ExtArgs>;
    plugins?: boolean | Prisma.Seller$pluginsArgs<ExtArgs>;
    _count?: boolean | Prisma.SellerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["seller"]>;
export type SellerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    name?: boolean;
    phone?: boolean;
    isVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["seller"]>;
export type SellerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    name?: boolean;
    phone?: boolean;
    isVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["seller"]>;
export type SellerSelectScalar = {
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    name?: boolean;
    phone?: boolean;
    isVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SellerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "phone" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["seller"]>;
export type SellerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store?: boolean | Prisma.Seller$storeArgs<ExtArgs>;
    products?: boolean | Prisma.Seller$productsArgs<ExtArgs>;
    orders?: boolean | Prisma.Seller$ordersArgs<ExtArgs>;
    messages?: boolean | Prisma.Seller$messagesArgs<ExtArgs>;
    sessions?: boolean | Prisma.Seller$sessionsArgs<ExtArgs>;
    plugins?: boolean | Prisma.Seller$pluginsArgs<ExtArgs>;
    _count?: boolean | Prisma.SellerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SellerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SellerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SellerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Seller";
    objects: {
        store: Prisma.$StorePayload<ExtArgs> | null;
        products: Prisma.$ProductPayload<ExtArgs>[];
        orders: Prisma.$OrderPayload<ExtArgs>[];
        messages: Prisma.$WhatsappMessagePayload<ExtArgs>[];
        sessions: Prisma.$SellerSessionPayload<ExtArgs>[];
        plugins: Prisma.$SellerPluginPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string | null;
        passwordHash: string;
        name: string;
        phone: string;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["seller"]>;
    composites: {};
};
export type SellerGetPayload<S extends boolean | null | undefined | SellerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SellerPayload, S>;
export type SellerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SellerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SellerCountAggregateInputType | true;
};
export interface SellerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Seller'];
        meta: {
            name: 'Seller';
        };
    };
    findUnique<T extends SellerFindUniqueArgs>(args: Prisma.SelectSubset<T, SellerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SellerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SellerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SellerFindFirstArgs>(args?: Prisma.SelectSubset<T, SellerFindFirstArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SellerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SellerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SellerFindManyArgs>(args?: Prisma.SelectSubset<T, SellerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SellerCreateArgs>(args: Prisma.SelectSubset<T, SellerCreateArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SellerCreateManyArgs>(args?: Prisma.SelectSubset<T, SellerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SellerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SellerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SellerDeleteArgs>(args: Prisma.SelectSubset<T, SellerDeleteArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SellerUpdateArgs>(args: Prisma.SelectSubset<T, SellerUpdateArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SellerDeleteManyArgs>(args?: Prisma.SelectSubset<T, SellerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SellerUpdateManyArgs>(args: Prisma.SelectSubset<T, SellerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SellerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SellerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SellerUpsertArgs>(args: Prisma.SelectSubset<T, SellerUpsertArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SellerCountArgs>(args?: Prisma.Subset<T, SellerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SellerCountAggregateOutputType> : number>;
    aggregate<T extends SellerAggregateArgs>(args: Prisma.Subset<T, SellerAggregateArgs>): Prisma.PrismaPromise<GetSellerAggregateType<T>>;
    groupBy<T extends SellerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SellerGroupByArgs['orderBy'];
    } : {
        orderBy?: SellerGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SellerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SellerFieldRefs;
}
export interface Prisma__SellerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    store<T extends Prisma.Seller$storeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Seller$storeArgs<ExtArgs>>): Prisma.Prisma__StoreClient<runtime.Types.Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    products<T extends Prisma.Seller$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Seller$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orders<T extends Prisma.Seller$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Seller$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    messages<T extends Prisma.Seller$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Seller$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessions<T extends Prisma.Seller$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Seller$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    plugins<T extends Prisma.Seller$pluginsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Seller$pluginsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerPluginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SellerFieldRefs {
    readonly id: Prisma.FieldRef<"Seller", 'String'>;
    readonly email: Prisma.FieldRef<"Seller", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"Seller", 'String'>;
    readonly name: Prisma.FieldRef<"Seller", 'String'>;
    readonly phone: Prisma.FieldRef<"Seller", 'String'>;
    readonly isVerified: Prisma.FieldRef<"Seller", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Seller", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Seller", 'DateTime'>;
}
export type SellerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    where: Prisma.SellerWhereUniqueInput;
};
export type SellerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    where: Prisma.SellerWhereUniqueInput;
};
export type SellerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    where?: Prisma.SellerWhereInput;
    orderBy?: Prisma.SellerOrderByWithRelationInput | Prisma.SellerOrderByWithRelationInput[];
    cursor?: Prisma.SellerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerScalarFieldEnum | Prisma.SellerScalarFieldEnum[];
};
export type SellerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    where?: Prisma.SellerWhereInput;
    orderBy?: Prisma.SellerOrderByWithRelationInput | Prisma.SellerOrderByWithRelationInput[];
    cursor?: Prisma.SellerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerScalarFieldEnum | Prisma.SellerScalarFieldEnum[];
};
export type SellerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    where?: Prisma.SellerWhereInput;
    orderBy?: Prisma.SellerOrderByWithRelationInput | Prisma.SellerOrderByWithRelationInput[];
    cursor?: Prisma.SellerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerScalarFieldEnum | Prisma.SellerScalarFieldEnum[];
};
export type SellerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerCreateInput, Prisma.SellerUncheckedCreateInput>;
};
export type SellerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SellerCreateManyInput | Prisma.SellerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SellerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    data: Prisma.SellerCreateManyInput | Prisma.SellerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SellerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerUpdateInput, Prisma.SellerUncheckedUpdateInput>;
    where: Prisma.SellerWhereUniqueInput;
};
export type SellerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SellerUpdateManyMutationInput, Prisma.SellerUncheckedUpdateManyInput>;
    where?: Prisma.SellerWhereInput;
    limit?: number;
};
export type SellerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerUpdateManyMutationInput, Prisma.SellerUncheckedUpdateManyInput>;
    where?: Prisma.SellerWhereInput;
    limit?: number;
};
export type SellerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    where: Prisma.SellerWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerCreateInput, Prisma.SellerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SellerUpdateInput, Prisma.SellerUncheckedUpdateInput>;
};
export type SellerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    where: Prisma.SellerWhereUniqueInput;
};
export type SellerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerWhereInput;
    limit?: number;
};
export type Seller$storeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreSelect<ExtArgs> | null;
    omit?: Prisma.StoreOmit<ExtArgs> | null;
    include?: Prisma.StoreInclude<ExtArgs> | null;
    where?: Prisma.StoreWhereInput;
};
export type Seller$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type Seller$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type Seller$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsappMessageSelect<ExtArgs> | null;
    omit?: Prisma.WhatsappMessageOmit<ExtArgs> | null;
    include?: Prisma.WhatsappMessageInclude<ExtArgs> | null;
    where?: Prisma.WhatsappMessageWhereInput;
    orderBy?: Prisma.WhatsappMessageOrderByWithRelationInput | Prisma.WhatsappMessageOrderByWithRelationInput[];
    cursor?: Prisma.WhatsappMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WhatsappMessageScalarFieldEnum | Prisma.WhatsappMessageScalarFieldEnum[];
};
export type Seller$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSessionSelect<ExtArgs> | null;
    omit?: Prisma.SellerSessionOmit<ExtArgs> | null;
    include?: Prisma.SellerSessionInclude<ExtArgs> | null;
    where?: Prisma.SellerSessionWhereInput;
    orderBy?: Prisma.SellerSessionOrderByWithRelationInput | Prisma.SellerSessionOrderByWithRelationInput[];
    cursor?: Prisma.SellerSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerSessionScalarFieldEnum | Prisma.SellerSessionScalarFieldEnum[];
};
export type Seller$pluginsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerPluginSelect<ExtArgs> | null;
    omit?: Prisma.SellerPluginOmit<ExtArgs> | null;
    include?: Prisma.SellerPluginInclude<ExtArgs> | null;
    where?: Prisma.SellerPluginWhereInput;
    orderBy?: Prisma.SellerPluginOrderByWithRelationInput | Prisma.SellerPluginOrderByWithRelationInput[];
    cursor?: Prisma.SellerPluginWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerPluginScalarFieldEnum | Prisma.SellerPluginScalarFieldEnum[];
};
export type SellerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
};
export {};

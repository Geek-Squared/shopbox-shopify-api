import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type WhatsappMessageModel = runtime.Types.Result.DefaultSelection<Prisma.$WhatsappMessagePayload>;
export type AggregateWhatsappMessage = {
    _count: WhatsappMessageCountAggregateOutputType | null;
    _min: WhatsappMessageMinAggregateOutputType | null;
    _max: WhatsappMessageMaxAggregateOutputType | null;
};
export type WhatsappMessageMinAggregateOutputType = {
    id: string | null;
    sellerId: string | null;
    storeId: string | null;
    orderId: string | null;
    direction: $Enums.MessageDirection | null;
    toNumber: string | null;
    fromNumber: string | null;
    content: string | null;
    status: string | null;
    createdAt: Date | null;
};
export type WhatsappMessageMaxAggregateOutputType = {
    id: string | null;
    sellerId: string | null;
    storeId: string | null;
    orderId: string | null;
    direction: $Enums.MessageDirection | null;
    toNumber: string | null;
    fromNumber: string | null;
    content: string | null;
    status: string | null;
    createdAt: Date | null;
};
export type WhatsappMessageCountAggregateOutputType = {
    id: number;
    sellerId: number;
    storeId: number;
    orderId: number;
    direction: number;
    toNumber: number;
    fromNumber: number;
    content: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type WhatsappMessageMinAggregateInputType = {
    id?: true;
    sellerId?: true;
    storeId?: true;
    orderId?: true;
    direction?: true;
    toNumber?: true;
    fromNumber?: true;
    content?: true;
    status?: true;
    createdAt?: true;
};
export type WhatsappMessageMaxAggregateInputType = {
    id?: true;
    sellerId?: true;
    storeId?: true;
    orderId?: true;
    direction?: true;
    toNumber?: true;
    fromNumber?: true;
    content?: true;
    status?: true;
    createdAt?: true;
};
export type WhatsappMessageCountAggregateInputType = {
    id?: true;
    sellerId?: true;
    storeId?: true;
    orderId?: true;
    direction?: true;
    toNumber?: true;
    fromNumber?: true;
    content?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type WhatsappMessageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsappMessageWhereInput;
    orderBy?: Prisma.WhatsappMessageOrderByWithRelationInput | Prisma.WhatsappMessageOrderByWithRelationInput[];
    cursor?: Prisma.WhatsappMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WhatsappMessageCountAggregateInputType;
    _min?: WhatsappMessageMinAggregateInputType;
    _max?: WhatsappMessageMaxAggregateInputType;
};
export type GetWhatsappMessageAggregateType<T extends WhatsappMessageAggregateArgs> = {
    [P in keyof T & keyof AggregateWhatsappMessage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWhatsappMessage[P]> : Prisma.GetScalarType<T[P], AggregateWhatsappMessage[P]>;
};
export type WhatsappMessageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsappMessageWhereInput;
    orderBy?: Prisma.WhatsappMessageOrderByWithAggregationInput | Prisma.WhatsappMessageOrderByWithAggregationInput[];
    by: Prisma.WhatsappMessageScalarFieldEnum[] | Prisma.WhatsappMessageScalarFieldEnum;
    having?: Prisma.WhatsappMessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WhatsappMessageCountAggregateInputType | true;
    _min?: WhatsappMessageMinAggregateInputType;
    _max?: WhatsappMessageMaxAggregateInputType;
};
export type WhatsappMessageGroupByOutputType = {
    id: string;
    sellerId: string | null;
    storeId: string | null;
    orderId: string | null;
    direction: $Enums.MessageDirection;
    toNumber: string | null;
    fromNumber: string | null;
    content: string;
    status: string | null;
    createdAt: Date;
    _count: WhatsappMessageCountAggregateOutputType | null;
    _min: WhatsappMessageMinAggregateOutputType | null;
    _max: WhatsappMessageMaxAggregateOutputType | null;
};
type GetWhatsappMessageGroupByPayload<T extends WhatsappMessageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WhatsappMessageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WhatsappMessageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WhatsappMessageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WhatsappMessageGroupByOutputType[P]>;
}>>;
export type WhatsappMessageWhereInput = {
    AND?: Prisma.WhatsappMessageWhereInput | Prisma.WhatsappMessageWhereInput[];
    OR?: Prisma.WhatsappMessageWhereInput[];
    NOT?: Prisma.WhatsappMessageWhereInput | Prisma.WhatsappMessageWhereInput[];
    id?: Prisma.StringFilter<"WhatsappMessage"> | string;
    sellerId?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    storeId?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    orderId?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    direction?: Prisma.EnumMessageDirectionFilter<"WhatsappMessage"> | $Enums.MessageDirection;
    toNumber?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    fromNumber?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    content?: Prisma.StringFilter<"WhatsappMessage"> | string;
    status?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WhatsappMessage"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderNullableScalarRelationFilter, Prisma.OrderWhereInput> | null;
    seller?: Prisma.XOR<Prisma.SellerNullableScalarRelationFilter, Prisma.SellerWhereInput> | null;
    store?: Prisma.XOR<Prisma.StoreNullableScalarRelationFilter, Prisma.StoreWhereInput> | null;
};
export type WhatsappMessageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    storeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    orderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    toNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    fromNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
    seller?: Prisma.SellerOrderByWithRelationInput;
    store?: Prisma.StoreOrderByWithRelationInput;
};
export type WhatsappMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WhatsappMessageWhereInput | Prisma.WhatsappMessageWhereInput[];
    OR?: Prisma.WhatsappMessageWhereInput[];
    NOT?: Prisma.WhatsappMessageWhereInput | Prisma.WhatsappMessageWhereInput[];
    sellerId?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    storeId?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    orderId?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    direction?: Prisma.EnumMessageDirectionFilter<"WhatsappMessage"> | $Enums.MessageDirection;
    toNumber?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    fromNumber?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    content?: Prisma.StringFilter<"WhatsappMessage"> | string;
    status?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WhatsappMessage"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderNullableScalarRelationFilter, Prisma.OrderWhereInput> | null;
    seller?: Prisma.XOR<Prisma.SellerNullableScalarRelationFilter, Prisma.SellerWhereInput> | null;
    store?: Prisma.XOR<Prisma.StoreNullableScalarRelationFilter, Prisma.StoreWhereInput> | null;
}, "id">;
export type WhatsappMessageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    storeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    orderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    toNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    fromNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WhatsappMessageCountOrderByAggregateInput;
    _max?: Prisma.WhatsappMessageMaxOrderByAggregateInput;
    _min?: Prisma.WhatsappMessageMinOrderByAggregateInput;
};
export type WhatsappMessageScalarWhereWithAggregatesInput = {
    AND?: Prisma.WhatsappMessageScalarWhereWithAggregatesInput | Prisma.WhatsappMessageScalarWhereWithAggregatesInput[];
    OR?: Prisma.WhatsappMessageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WhatsappMessageScalarWhereWithAggregatesInput | Prisma.WhatsappMessageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WhatsappMessage"> | string;
    sellerId?: Prisma.StringNullableWithAggregatesFilter<"WhatsappMessage"> | string | null;
    storeId?: Prisma.StringNullableWithAggregatesFilter<"WhatsappMessage"> | string | null;
    orderId?: Prisma.StringNullableWithAggregatesFilter<"WhatsappMessage"> | string | null;
    direction?: Prisma.EnumMessageDirectionWithAggregatesFilter<"WhatsappMessage"> | $Enums.MessageDirection;
    toNumber?: Prisma.StringNullableWithAggregatesFilter<"WhatsappMessage"> | string | null;
    fromNumber?: Prisma.StringNullableWithAggregatesFilter<"WhatsappMessage"> | string | null;
    content?: Prisma.StringWithAggregatesFilter<"WhatsappMessage"> | string;
    status?: Prisma.StringNullableWithAggregatesFilter<"WhatsappMessage"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WhatsappMessage"> | Date | string;
};
export type WhatsappMessageCreateInput = {
    id?: string;
    direction: $Enums.MessageDirection;
    toNumber?: string | null;
    fromNumber?: string | null;
    content: string;
    status?: string | null;
    createdAt?: Date | string;
    order?: Prisma.OrderCreateNestedOneWithoutMessagesInput;
    seller?: Prisma.SellerCreateNestedOneWithoutMessagesInput;
    store?: Prisma.StoreCreateNestedOneWithoutMessagesInput;
};
export type WhatsappMessageUncheckedCreateInput = {
    id?: string;
    sellerId?: string | null;
    storeId?: string | null;
    orderId?: string | null;
    direction: $Enums.MessageDirection;
    toNumber?: string | null;
    fromNumber?: string | null;
    content: string;
    status?: string | null;
    createdAt?: Date | string;
};
export type WhatsappMessageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumMessageDirectionFieldUpdateOperationsInput | $Enums.MessageDirection;
    toNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fromNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneWithoutMessagesNestedInput;
    seller?: Prisma.SellerUpdateOneWithoutMessagesNestedInput;
    store?: Prisma.StoreUpdateOneWithoutMessagesNestedInput;
};
export type WhatsappMessageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direction?: Prisma.EnumMessageDirectionFieldUpdateOperationsInput | $Enums.MessageDirection;
    toNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fromNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsappMessageCreateManyInput = {
    id?: string;
    sellerId?: string | null;
    storeId?: string | null;
    orderId?: string | null;
    direction: $Enums.MessageDirection;
    toNumber?: string | null;
    fromNumber?: string | null;
    content: string;
    status?: string | null;
    createdAt?: Date | string;
};
export type WhatsappMessageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumMessageDirectionFieldUpdateOperationsInput | $Enums.MessageDirection;
    toNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fromNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsappMessageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direction?: Prisma.EnumMessageDirectionFieldUpdateOperationsInput | $Enums.MessageDirection;
    toNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fromNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsappMessageListRelationFilter = {
    every?: Prisma.WhatsappMessageWhereInput;
    some?: Prisma.WhatsappMessageWhereInput;
    none?: Prisma.WhatsappMessageWhereInput;
};
export type WhatsappMessageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WhatsappMessageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    storeId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    toNumber?: Prisma.SortOrder;
    fromNumber?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WhatsappMessageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    storeId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    toNumber?: Prisma.SortOrder;
    fromNumber?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WhatsappMessageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    storeId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    toNumber?: Prisma.SortOrder;
    fromNumber?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WhatsappMessageCreateNestedManyWithoutSellerInput = {
    create?: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutSellerInput, Prisma.WhatsappMessageUncheckedCreateWithoutSellerInput> | Prisma.WhatsappMessageCreateWithoutSellerInput[] | Prisma.WhatsappMessageUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.WhatsappMessageCreateOrConnectWithoutSellerInput | Prisma.WhatsappMessageCreateOrConnectWithoutSellerInput[];
    createMany?: Prisma.WhatsappMessageCreateManySellerInputEnvelope;
    connect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
};
export type WhatsappMessageUncheckedCreateNestedManyWithoutSellerInput = {
    create?: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutSellerInput, Prisma.WhatsappMessageUncheckedCreateWithoutSellerInput> | Prisma.WhatsappMessageCreateWithoutSellerInput[] | Prisma.WhatsappMessageUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.WhatsappMessageCreateOrConnectWithoutSellerInput | Prisma.WhatsappMessageCreateOrConnectWithoutSellerInput[];
    createMany?: Prisma.WhatsappMessageCreateManySellerInputEnvelope;
    connect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
};
export type WhatsappMessageUpdateManyWithoutSellerNestedInput = {
    create?: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutSellerInput, Prisma.WhatsappMessageUncheckedCreateWithoutSellerInput> | Prisma.WhatsappMessageCreateWithoutSellerInput[] | Prisma.WhatsappMessageUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.WhatsappMessageCreateOrConnectWithoutSellerInput | Prisma.WhatsappMessageCreateOrConnectWithoutSellerInput[];
    upsert?: Prisma.WhatsappMessageUpsertWithWhereUniqueWithoutSellerInput | Prisma.WhatsappMessageUpsertWithWhereUniqueWithoutSellerInput[];
    createMany?: Prisma.WhatsappMessageCreateManySellerInputEnvelope;
    set?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    disconnect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    delete?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    connect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    update?: Prisma.WhatsappMessageUpdateWithWhereUniqueWithoutSellerInput | Prisma.WhatsappMessageUpdateWithWhereUniqueWithoutSellerInput[];
    updateMany?: Prisma.WhatsappMessageUpdateManyWithWhereWithoutSellerInput | Prisma.WhatsappMessageUpdateManyWithWhereWithoutSellerInput[];
    deleteMany?: Prisma.WhatsappMessageScalarWhereInput | Prisma.WhatsappMessageScalarWhereInput[];
};
export type WhatsappMessageUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutSellerInput, Prisma.WhatsappMessageUncheckedCreateWithoutSellerInput> | Prisma.WhatsappMessageCreateWithoutSellerInput[] | Prisma.WhatsappMessageUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.WhatsappMessageCreateOrConnectWithoutSellerInput | Prisma.WhatsappMessageCreateOrConnectWithoutSellerInput[];
    upsert?: Prisma.WhatsappMessageUpsertWithWhereUniqueWithoutSellerInput | Prisma.WhatsappMessageUpsertWithWhereUniqueWithoutSellerInput[];
    createMany?: Prisma.WhatsappMessageCreateManySellerInputEnvelope;
    set?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    disconnect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    delete?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    connect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    update?: Prisma.WhatsappMessageUpdateWithWhereUniqueWithoutSellerInput | Prisma.WhatsappMessageUpdateWithWhereUniqueWithoutSellerInput[];
    updateMany?: Prisma.WhatsappMessageUpdateManyWithWhereWithoutSellerInput | Prisma.WhatsappMessageUpdateManyWithWhereWithoutSellerInput[];
    deleteMany?: Prisma.WhatsappMessageScalarWhereInput | Prisma.WhatsappMessageScalarWhereInput[];
};
export type WhatsappMessageCreateNestedManyWithoutStoreInput = {
    create?: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutStoreInput, Prisma.WhatsappMessageUncheckedCreateWithoutStoreInput> | Prisma.WhatsappMessageCreateWithoutStoreInput[] | Prisma.WhatsappMessageUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: Prisma.WhatsappMessageCreateOrConnectWithoutStoreInput | Prisma.WhatsappMessageCreateOrConnectWithoutStoreInput[];
    createMany?: Prisma.WhatsappMessageCreateManyStoreInputEnvelope;
    connect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
};
export type WhatsappMessageUncheckedCreateNestedManyWithoutStoreInput = {
    create?: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutStoreInput, Prisma.WhatsappMessageUncheckedCreateWithoutStoreInput> | Prisma.WhatsappMessageCreateWithoutStoreInput[] | Prisma.WhatsappMessageUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: Prisma.WhatsappMessageCreateOrConnectWithoutStoreInput | Prisma.WhatsappMessageCreateOrConnectWithoutStoreInput[];
    createMany?: Prisma.WhatsappMessageCreateManyStoreInputEnvelope;
    connect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
};
export type WhatsappMessageUpdateManyWithoutStoreNestedInput = {
    create?: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutStoreInput, Prisma.WhatsappMessageUncheckedCreateWithoutStoreInput> | Prisma.WhatsappMessageCreateWithoutStoreInput[] | Prisma.WhatsappMessageUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: Prisma.WhatsappMessageCreateOrConnectWithoutStoreInput | Prisma.WhatsappMessageCreateOrConnectWithoutStoreInput[];
    upsert?: Prisma.WhatsappMessageUpsertWithWhereUniqueWithoutStoreInput | Prisma.WhatsappMessageUpsertWithWhereUniqueWithoutStoreInput[];
    createMany?: Prisma.WhatsappMessageCreateManyStoreInputEnvelope;
    set?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    disconnect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    delete?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    connect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    update?: Prisma.WhatsappMessageUpdateWithWhereUniqueWithoutStoreInput | Prisma.WhatsappMessageUpdateWithWhereUniqueWithoutStoreInput[];
    updateMany?: Prisma.WhatsappMessageUpdateManyWithWhereWithoutStoreInput | Prisma.WhatsappMessageUpdateManyWithWhereWithoutStoreInput[];
    deleteMany?: Prisma.WhatsappMessageScalarWhereInput | Prisma.WhatsappMessageScalarWhereInput[];
};
export type WhatsappMessageUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutStoreInput, Prisma.WhatsappMessageUncheckedCreateWithoutStoreInput> | Prisma.WhatsappMessageCreateWithoutStoreInput[] | Prisma.WhatsappMessageUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: Prisma.WhatsappMessageCreateOrConnectWithoutStoreInput | Prisma.WhatsappMessageCreateOrConnectWithoutStoreInput[];
    upsert?: Prisma.WhatsappMessageUpsertWithWhereUniqueWithoutStoreInput | Prisma.WhatsappMessageUpsertWithWhereUniqueWithoutStoreInput[];
    createMany?: Prisma.WhatsappMessageCreateManyStoreInputEnvelope;
    set?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    disconnect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    delete?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    connect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    update?: Prisma.WhatsappMessageUpdateWithWhereUniqueWithoutStoreInput | Prisma.WhatsappMessageUpdateWithWhereUniqueWithoutStoreInput[];
    updateMany?: Prisma.WhatsappMessageUpdateManyWithWhereWithoutStoreInput | Prisma.WhatsappMessageUpdateManyWithWhereWithoutStoreInput[];
    deleteMany?: Prisma.WhatsappMessageScalarWhereInput | Prisma.WhatsappMessageScalarWhereInput[];
};
export type WhatsappMessageCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutOrderInput, Prisma.WhatsappMessageUncheckedCreateWithoutOrderInput> | Prisma.WhatsappMessageCreateWithoutOrderInput[] | Prisma.WhatsappMessageUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.WhatsappMessageCreateOrConnectWithoutOrderInput | Prisma.WhatsappMessageCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.WhatsappMessageCreateManyOrderInputEnvelope;
    connect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
};
export type WhatsappMessageUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutOrderInput, Prisma.WhatsappMessageUncheckedCreateWithoutOrderInput> | Prisma.WhatsappMessageCreateWithoutOrderInput[] | Prisma.WhatsappMessageUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.WhatsappMessageCreateOrConnectWithoutOrderInput | Prisma.WhatsappMessageCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.WhatsappMessageCreateManyOrderInputEnvelope;
    connect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
};
export type WhatsappMessageUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutOrderInput, Prisma.WhatsappMessageUncheckedCreateWithoutOrderInput> | Prisma.WhatsappMessageCreateWithoutOrderInput[] | Prisma.WhatsappMessageUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.WhatsappMessageCreateOrConnectWithoutOrderInput | Prisma.WhatsappMessageCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.WhatsappMessageUpsertWithWhereUniqueWithoutOrderInput | Prisma.WhatsappMessageUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.WhatsappMessageCreateManyOrderInputEnvelope;
    set?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    disconnect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    delete?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    connect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    update?: Prisma.WhatsappMessageUpdateWithWhereUniqueWithoutOrderInput | Prisma.WhatsappMessageUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.WhatsappMessageUpdateManyWithWhereWithoutOrderInput | Prisma.WhatsappMessageUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.WhatsappMessageScalarWhereInput | Prisma.WhatsappMessageScalarWhereInput[];
};
export type WhatsappMessageUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutOrderInput, Prisma.WhatsappMessageUncheckedCreateWithoutOrderInput> | Prisma.WhatsappMessageCreateWithoutOrderInput[] | Prisma.WhatsappMessageUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.WhatsappMessageCreateOrConnectWithoutOrderInput | Prisma.WhatsappMessageCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.WhatsappMessageUpsertWithWhereUniqueWithoutOrderInput | Prisma.WhatsappMessageUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.WhatsappMessageCreateManyOrderInputEnvelope;
    set?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    disconnect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    delete?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    connect?: Prisma.WhatsappMessageWhereUniqueInput | Prisma.WhatsappMessageWhereUniqueInput[];
    update?: Prisma.WhatsappMessageUpdateWithWhereUniqueWithoutOrderInput | Prisma.WhatsappMessageUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.WhatsappMessageUpdateManyWithWhereWithoutOrderInput | Prisma.WhatsappMessageUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.WhatsappMessageScalarWhereInput | Prisma.WhatsappMessageScalarWhereInput[];
};
export type EnumMessageDirectionFieldUpdateOperationsInput = {
    set?: $Enums.MessageDirection;
};
export type WhatsappMessageCreateWithoutSellerInput = {
    id?: string;
    direction: $Enums.MessageDirection;
    toNumber?: string | null;
    fromNumber?: string | null;
    content: string;
    status?: string | null;
    createdAt?: Date | string;
    order?: Prisma.OrderCreateNestedOneWithoutMessagesInput;
    store?: Prisma.StoreCreateNestedOneWithoutMessagesInput;
};
export type WhatsappMessageUncheckedCreateWithoutSellerInput = {
    id?: string;
    storeId?: string | null;
    orderId?: string | null;
    direction: $Enums.MessageDirection;
    toNumber?: string | null;
    fromNumber?: string | null;
    content: string;
    status?: string | null;
    createdAt?: Date | string;
};
export type WhatsappMessageCreateOrConnectWithoutSellerInput = {
    where: Prisma.WhatsappMessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutSellerInput, Prisma.WhatsappMessageUncheckedCreateWithoutSellerInput>;
};
export type WhatsappMessageCreateManySellerInputEnvelope = {
    data: Prisma.WhatsappMessageCreateManySellerInput | Prisma.WhatsappMessageCreateManySellerInput[];
    skipDuplicates?: boolean;
};
export type WhatsappMessageUpsertWithWhereUniqueWithoutSellerInput = {
    where: Prisma.WhatsappMessageWhereUniqueInput;
    update: Prisma.XOR<Prisma.WhatsappMessageUpdateWithoutSellerInput, Prisma.WhatsappMessageUncheckedUpdateWithoutSellerInput>;
    create: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutSellerInput, Prisma.WhatsappMessageUncheckedCreateWithoutSellerInput>;
};
export type WhatsappMessageUpdateWithWhereUniqueWithoutSellerInput = {
    where: Prisma.WhatsappMessageWhereUniqueInput;
    data: Prisma.XOR<Prisma.WhatsappMessageUpdateWithoutSellerInput, Prisma.WhatsappMessageUncheckedUpdateWithoutSellerInput>;
};
export type WhatsappMessageUpdateManyWithWhereWithoutSellerInput = {
    where: Prisma.WhatsappMessageScalarWhereInput;
    data: Prisma.XOR<Prisma.WhatsappMessageUpdateManyMutationInput, Prisma.WhatsappMessageUncheckedUpdateManyWithoutSellerInput>;
};
export type WhatsappMessageScalarWhereInput = {
    AND?: Prisma.WhatsappMessageScalarWhereInput | Prisma.WhatsappMessageScalarWhereInput[];
    OR?: Prisma.WhatsappMessageScalarWhereInput[];
    NOT?: Prisma.WhatsappMessageScalarWhereInput | Prisma.WhatsappMessageScalarWhereInput[];
    id?: Prisma.StringFilter<"WhatsappMessage"> | string;
    sellerId?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    storeId?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    orderId?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    direction?: Prisma.EnumMessageDirectionFilter<"WhatsappMessage"> | $Enums.MessageDirection;
    toNumber?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    fromNumber?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    content?: Prisma.StringFilter<"WhatsappMessage"> | string;
    status?: Prisma.StringNullableFilter<"WhatsappMessage"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WhatsappMessage"> | Date | string;
};
export type WhatsappMessageCreateWithoutStoreInput = {
    id?: string;
    direction: $Enums.MessageDirection;
    toNumber?: string | null;
    fromNumber?: string | null;
    content: string;
    status?: string | null;
    createdAt?: Date | string;
    order?: Prisma.OrderCreateNestedOneWithoutMessagesInput;
    seller?: Prisma.SellerCreateNestedOneWithoutMessagesInput;
};
export type WhatsappMessageUncheckedCreateWithoutStoreInput = {
    id?: string;
    sellerId?: string | null;
    orderId?: string | null;
    direction: $Enums.MessageDirection;
    toNumber?: string | null;
    fromNumber?: string | null;
    content: string;
    status?: string | null;
    createdAt?: Date | string;
};
export type WhatsappMessageCreateOrConnectWithoutStoreInput = {
    where: Prisma.WhatsappMessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutStoreInput, Prisma.WhatsappMessageUncheckedCreateWithoutStoreInput>;
};
export type WhatsappMessageCreateManyStoreInputEnvelope = {
    data: Prisma.WhatsappMessageCreateManyStoreInput | Prisma.WhatsappMessageCreateManyStoreInput[];
    skipDuplicates?: boolean;
};
export type WhatsappMessageUpsertWithWhereUniqueWithoutStoreInput = {
    where: Prisma.WhatsappMessageWhereUniqueInput;
    update: Prisma.XOR<Prisma.WhatsappMessageUpdateWithoutStoreInput, Prisma.WhatsappMessageUncheckedUpdateWithoutStoreInput>;
    create: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutStoreInput, Prisma.WhatsappMessageUncheckedCreateWithoutStoreInput>;
};
export type WhatsappMessageUpdateWithWhereUniqueWithoutStoreInput = {
    where: Prisma.WhatsappMessageWhereUniqueInput;
    data: Prisma.XOR<Prisma.WhatsappMessageUpdateWithoutStoreInput, Prisma.WhatsappMessageUncheckedUpdateWithoutStoreInput>;
};
export type WhatsappMessageUpdateManyWithWhereWithoutStoreInput = {
    where: Prisma.WhatsappMessageScalarWhereInput;
    data: Prisma.XOR<Prisma.WhatsappMessageUpdateManyMutationInput, Prisma.WhatsappMessageUncheckedUpdateManyWithoutStoreInput>;
};
export type WhatsappMessageCreateWithoutOrderInput = {
    id?: string;
    direction: $Enums.MessageDirection;
    toNumber?: string | null;
    fromNumber?: string | null;
    content: string;
    status?: string | null;
    createdAt?: Date | string;
    seller?: Prisma.SellerCreateNestedOneWithoutMessagesInput;
    store?: Prisma.StoreCreateNestedOneWithoutMessagesInput;
};
export type WhatsappMessageUncheckedCreateWithoutOrderInput = {
    id?: string;
    sellerId?: string | null;
    storeId?: string | null;
    direction: $Enums.MessageDirection;
    toNumber?: string | null;
    fromNumber?: string | null;
    content: string;
    status?: string | null;
    createdAt?: Date | string;
};
export type WhatsappMessageCreateOrConnectWithoutOrderInput = {
    where: Prisma.WhatsappMessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutOrderInput, Prisma.WhatsappMessageUncheckedCreateWithoutOrderInput>;
};
export type WhatsappMessageCreateManyOrderInputEnvelope = {
    data: Prisma.WhatsappMessageCreateManyOrderInput | Prisma.WhatsappMessageCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type WhatsappMessageUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.WhatsappMessageWhereUniqueInput;
    update: Prisma.XOR<Prisma.WhatsappMessageUpdateWithoutOrderInput, Prisma.WhatsappMessageUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.WhatsappMessageCreateWithoutOrderInput, Prisma.WhatsappMessageUncheckedCreateWithoutOrderInput>;
};
export type WhatsappMessageUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.WhatsappMessageWhereUniqueInput;
    data: Prisma.XOR<Prisma.WhatsappMessageUpdateWithoutOrderInput, Prisma.WhatsappMessageUncheckedUpdateWithoutOrderInput>;
};
export type WhatsappMessageUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.WhatsappMessageScalarWhereInput;
    data: Prisma.XOR<Prisma.WhatsappMessageUpdateManyMutationInput, Prisma.WhatsappMessageUncheckedUpdateManyWithoutOrderInput>;
};
export type WhatsappMessageCreateManySellerInput = {
    id?: string;
    storeId?: string | null;
    orderId?: string | null;
    direction: $Enums.MessageDirection;
    toNumber?: string | null;
    fromNumber?: string | null;
    content: string;
    status?: string | null;
    createdAt?: Date | string;
};
export type WhatsappMessageUpdateWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumMessageDirectionFieldUpdateOperationsInput | $Enums.MessageDirection;
    toNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fromNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneWithoutMessagesNestedInput;
    store?: Prisma.StoreUpdateOneWithoutMessagesNestedInput;
};
export type WhatsappMessageUncheckedUpdateWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direction?: Prisma.EnumMessageDirectionFieldUpdateOperationsInput | $Enums.MessageDirection;
    toNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fromNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsappMessageUncheckedUpdateManyWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direction?: Prisma.EnumMessageDirectionFieldUpdateOperationsInput | $Enums.MessageDirection;
    toNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fromNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsappMessageCreateManyStoreInput = {
    id?: string;
    sellerId?: string | null;
    orderId?: string | null;
    direction: $Enums.MessageDirection;
    toNumber?: string | null;
    fromNumber?: string | null;
    content: string;
    status?: string | null;
    createdAt?: Date | string;
};
export type WhatsappMessageUpdateWithoutStoreInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumMessageDirectionFieldUpdateOperationsInput | $Enums.MessageDirection;
    toNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fromNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneWithoutMessagesNestedInput;
    seller?: Prisma.SellerUpdateOneWithoutMessagesNestedInput;
};
export type WhatsappMessageUncheckedUpdateWithoutStoreInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direction?: Prisma.EnumMessageDirectionFieldUpdateOperationsInput | $Enums.MessageDirection;
    toNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fromNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsappMessageUncheckedUpdateManyWithoutStoreInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direction?: Prisma.EnumMessageDirectionFieldUpdateOperationsInput | $Enums.MessageDirection;
    toNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fromNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsappMessageCreateManyOrderInput = {
    id?: string;
    sellerId?: string | null;
    storeId?: string | null;
    direction: $Enums.MessageDirection;
    toNumber?: string | null;
    fromNumber?: string | null;
    content: string;
    status?: string | null;
    createdAt?: Date | string;
};
export type WhatsappMessageUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumMessageDirectionFieldUpdateOperationsInput | $Enums.MessageDirection;
    toNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fromNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seller?: Prisma.SellerUpdateOneWithoutMessagesNestedInput;
    store?: Prisma.StoreUpdateOneWithoutMessagesNestedInput;
};
export type WhatsappMessageUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direction?: Prisma.EnumMessageDirectionFieldUpdateOperationsInput | $Enums.MessageDirection;
    toNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fromNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsappMessageUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direction?: Prisma.EnumMessageDirectionFieldUpdateOperationsInput | $Enums.MessageDirection;
    toNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fromNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsappMessageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sellerId?: boolean;
    storeId?: boolean;
    orderId?: boolean;
    direction?: boolean;
    toNumber?: boolean;
    fromNumber?: boolean;
    content?: boolean;
    status?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.WhatsappMessage$orderArgs<ExtArgs>;
    seller?: boolean | Prisma.WhatsappMessage$sellerArgs<ExtArgs>;
    store?: boolean | Prisma.WhatsappMessage$storeArgs<ExtArgs>;
}, ExtArgs["result"]["whatsappMessage"]>;
export type WhatsappMessageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sellerId?: boolean;
    storeId?: boolean;
    orderId?: boolean;
    direction?: boolean;
    toNumber?: boolean;
    fromNumber?: boolean;
    content?: boolean;
    status?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.WhatsappMessage$orderArgs<ExtArgs>;
    seller?: boolean | Prisma.WhatsappMessage$sellerArgs<ExtArgs>;
    store?: boolean | Prisma.WhatsappMessage$storeArgs<ExtArgs>;
}, ExtArgs["result"]["whatsappMessage"]>;
export type WhatsappMessageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sellerId?: boolean;
    storeId?: boolean;
    orderId?: boolean;
    direction?: boolean;
    toNumber?: boolean;
    fromNumber?: boolean;
    content?: boolean;
    status?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.WhatsappMessage$orderArgs<ExtArgs>;
    seller?: boolean | Prisma.WhatsappMessage$sellerArgs<ExtArgs>;
    store?: boolean | Prisma.WhatsappMessage$storeArgs<ExtArgs>;
}, ExtArgs["result"]["whatsappMessage"]>;
export type WhatsappMessageSelectScalar = {
    id?: boolean;
    sellerId?: boolean;
    storeId?: boolean;
    orderId?: boolean;
    direction?: boolean;
    toNumber?: boolean;
    fromNumber?: boolean;
    content?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type WhatsappMessageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sellerId" | "storeId" | "orderId" | "direction" | "toNumber" | "fromNumber" | "content" | "status" | "createdAt", ExtArgs["result"]["whatsappMessage"]>;
export type WhatsappMessageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.WhatsappMessage$orderArgs<ExtArgs>;
    seller?: boolean | Prisma.WhatsappMessage$sellerArgs<ExtArgs>;
    store?: boolean | Prisma.WhatsappMessage$storeArgs<ExtArgs>;
};
export type WhatsappMessageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.WhatsappMessage$orderArgs<ExtArgs>;
    seller?: boolean | Prisma.WhatsappMessage$sellerArgs<ExtArgs>;
    store?: boolean | Prisma.WhatsappMessage$storeArgs<ExtArgs>;
};
export type WhatsappMessageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.WhatsappMessage$orderArgs<ExtArgs>;
    seller?: boolean | Prisma.WhatsappMessage$sellerArgs<ExtArgs>;
    store?: boolean | Prisma.WhatsappMessage$storeArgs<ExtArgs>;
};
export type $WhatsappMessagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WhatsappMessage";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs> | null;
        seller: Prisma.$SellerPayload<ExtArgs> | null;
        store: Prisma.$StorePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sellerId: string | null;
        storeId: string | null;
        orderId: string | null;
        direction: $Enums.MessageDirection;
        toNumber: string | null;
        fromNumber: string | null;
        content: string;
        status: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["whatsappMessage"]>;
    composites: {};
};
export type WhatsappMessageGetPayload<S extends boolean | null | undefined | WhatsappMessageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WhatsappMessagePayload, S>;
export type WhatsappMessageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WhatsappMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WhatsappMessageCountAggregateInputType | true;
};
export interface WhatsappMessageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WhatsappMessage'];
        meta: {
            name: 'WhatsappMessage';
        };
    };
    findUnique<T extends WhatsappMessageFindUniqueArgs>(args: Prisma.SelectSubset<T, WhatsappMessageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WhatsappMessageClient<runtime.Types.Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WhatsappMessageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WhatsappMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WhatsappMessageClient<runtime.Types.Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WhatsappMessageFindFirstArgs>(args?: Prisma.SelectSubset<T, WhatsappMessageFindFirstArgs<ExtArgs>>): Prisma.Prisma__WhatsappMessageClient<runtime.Types.Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WhatsappMessageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WhatsappMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WhatsappMessageClient<runtime.Types.Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WhatsappMessageFindManyArgs>(args?: Prisma.SelectSubset<T, WhatsappMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WhatsappMessageCreateArgs>(args: Prisma.SelectSubset<T, WhatsappMessageCreateArgs<ExtArgs>>): Prisma.Prisma__WhatsappMessageClient<runtime.Types.Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WhatsappMessageCreateManyArgs>(args?: Prisma.SelectSubset<T, WhatsappMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WhatsappMessageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WhatsappMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WhatsappMessageDeleteArgs>(args: Prisma.SelectSubset<T, WhatsappMessageDeleteArgs<ExtArgs>>): Prisma.Prisma__WhatsappMessageClient<runtime.Types.Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WhatsappMessageUpdateArgs>(args: Prisma.SelectSubset<T, WhatsappMessageUpdateArgs<ExtArgs>>): Prisma.Prisma__WhatsappMessageClient<runtime.Types.Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WhatsappMessageDeleteManyArgs>(args?: Prisma.SelectSubset<T, WhatsappMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WhatsappMessageUpdateManyArgs>(args: Prisma.SelectSubset<T, WhatsappMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WhatsappMessageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WhatsappMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WhatsappMessageUpsertArgs>(args: Prisma.SelectSubset<T, WhatsappMessageUpsertArgs<ExtArgs>>): Prisma.Prisma__WhatsappMessageClient<runtime.Types.Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WhatsappMessageCountArgs>(args?: Prisma.Subset<T, WhatsappMessageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WhatsappMessageCountAggregateOutputType> : number>;
    aggregate<T extends WhatsappMessageAggregateArgs>(args: Prisma.Subset<T, WhatsappMessageAggregateArgs>): Prisma.PrismaPromise<GetWhatsappMessageAggregateType<T>>;
    groupBy<T extends WhatsappMessageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WhatsappMessageGroupByArgs['orderBy'];
    } : {
        orderBy?: WhatsappMessageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WhatsappMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsappMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WhatsappMessageFieldRefs;
}
export interface Prisma__WhatsappMessageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.WhatsappMessage$orderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WhatsappMessage$orderArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    seller<T extends Prisma.WhatsappMessage$sellerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WhatsappMessage$sellerArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    store<T extends Prisma.WhatsappMessage$storeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WhatsappMessage$storeArgs<ExtArgs>>): Prisma.Prisma__StoreClient<runtime.Types.Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WhatsappMessageFieldRefs {
    readonly id: Prisma.FieldRef<"WhatsappMessage", 'String'>;
    readonly sellerId: Prisma.FieldRef<"WhatsappMessage", 'String'>;
    readonly storeId: Prisma.FieldRef<"WhatsappMessage", 'String'>;
    readonly orderId: Prisma.FieldRef<"WhatsappMessage", 'String'>;
    readonly direction: Prisma.FieldRef<"WhatsappMessage", 'MessageDirection'>;
    readonly toNumber: Prisma.FieldRef<"WhatsappMessage", 'String'>;
    readonly fromNumber: Prisma.FieldRef<"WhatsappMessage", 'String'>;
    readonly content: Prisma.FieldRef<"WhatsappMessage", 'String'>;
    readonly status: Prisma.FieldRef<"WhatsappMessage", 'String'>;
    readonly createdAt: Prisma.FieldRef<"WhatsappMessage", 'DateTime'>;
}
export type WhatsappMessageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsappMessageSelect<ExtArgs> | null;
    omit?: Prisma.WhatsappMessageOmit<ExtArgs> | null;
    include?: Prisma.WhatsappMessageInclude<ExtArgs> | null;
    where: Prisma.WhatsappMessageWhereUniqueInput;
};
export type WhatsappMessageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsappMessageSelect<ExtArgs> | null;
    omit?: Prisma.WhatsappMessageOmit<ExtArgs> | null;
    include?: Prisma.WhatsappMessageInclude<ExtArgs> | null;
    where: Prisma.WhatsappMessageWhereUniqueInput;
};
export type WhatsappMessageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WhatsappMessageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WhatsappMessageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WhatsappMessageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsappMessageSelect<ExtArgs> | null;
    omit?: Prisma.WhatsappMessageOmit<ExtArgs> | null;
    include?: Prisma.WhatsappMessageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WhatsappMessageCreateInput, Prisma.WhatsappMessageUncheckedCreateInput>;
};
export type WhatsappMessageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WhatsappMessageCreateManyInput | Prisma.WhatsappMessageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WhatsappMessageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsappMessageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WhatsappMessageOmit<ExtArgs> | null;
    data: Prisma.WhatsappMessageCreateManyInput | Prisma.WhatsappMessageCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WhatsappMessageIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WhatsappMessageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsappMessageSelect<ExtArgs> | null;
    omit?: Prisma.WhatsappMessageOmit<ExtArgs> | null;
    include?: Prisma.WhatsappMessageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WhatsappMessageUpdateInput, Prisma.WhatsappMessageUncheckedUpdateInput>;
    where: Prisma.WhatsappMessageWhereUniqueInput;
};
export type WhatsappMessageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WhatsappMessageUpdateManyMutationInput, Prisma.WhatsappMessageUncheckedUpdateManyInput>;
    where?: Prisma.WhatsappMessageWhereInput;
    limit?: number;
};
export type WhatsappMessageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsappMessageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WhatsappMessageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WhatsappMessageUpdateManyMutationInput, Prisma.WhatsappMessageUncheckedUpdateManyInput>;
    where?: Prisma.WhatsappMessageWhereInput;
    limit?: number;
    include?: Prisma.WhatsappMessageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WhatsappMessageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsappMessageSelect<ExtArgs> | null;
    omit?: Prisma.WhatsappMessageOmit<ExtArgs> | null;
    include?: Prisma.WhatsappMessageInclude<ExtArgs> | null;
    where: Prisma.WhatsappMessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.WhatsappMessageCreateInput, Prisma.WhatsappMessageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WhatsappMessageUpdateInput, Prisma.WhatsappMessageUncheckedUpdateInput>;
};
export type WhatsappMessageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsappMessageSelect<ExtArgs> | null;
    omit?: Prisma.WhatsappMessageOmit<ExtArgs> | null;
    include?: Prisma.WhatsappMessageInclude<ExtArgs> | null;
    where: Prisma.WhatsappMessageWhereUniqueInput;
};
export type WhatsappMessageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsappMessageWhereInput;
    limit?: number;
};
export type WhatsappMessage$orderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
};
export type WhatsappMessage$sellerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    where?: Prisma.SellerWhereInput;
};
export type WhatsappMessage$storeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreSelect<ExtArgs> | null;
    omit?: Prisma.StoreOmit<ExtArgs> | null;
    include?: Prisma.StoreInclude<ExtArgs> | null;
    where?: Prisma.StoreWhereInput;
};
export type WhatsappMessageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsappMessageSelect<ExtArgs> | null;
    omit?: Prisma.WhatsappMessageOmit<ExtArgs> | null;
    include?: Prisma.WhatsappMessageInclude<ExtArgs> | null;
};
export {};

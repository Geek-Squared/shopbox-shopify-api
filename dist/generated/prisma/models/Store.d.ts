import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type StoreModel = runtime.Types.Result.DefaultSelection<Prisma.$StorePayload>;
export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null;
    _min: StoreMinAggregateOutputType | null;
    _max: StoreMaxAggregateOutputType | null;
};
export type StoreMinAggregateOutputType = {
    id: string | null;
    sellerId: string | null;
    slug: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    category: string | null;
    city: string | null;
    logoUrl: string | null;
};
export type StoreMaxAggregateOutputType = {
    id: string | null;
    sellerId: string | null;
    slug: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    category: string | null;
    city: string | null;
    logoUrl: string | null;
};
export type StoreCountAggregateOutputType = {
    id: number;
    sellerId: number;
    slug: number;
    name: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    category: number;
    city: number;
    logoUrl: number;
    _all: number;
};
export type StoreMinAggregateInputType = {
    id?: true;
    sellerId?: true;
    slug?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    category?: true;
    city?: true;
    logoUrl?: true;
};
export type StoreMaxAggregateInputType = {
    id?: true;
    sellerId?: true;
    slug?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    category?: true;
    city?: true;
    logoUrl?: true;
};
export type StoreCountAggregateInputType = {
    id?: true;
    sellerId?: true;
    slug?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    category?: true;
    city?: true;
    logoUrl?: true;
    _all?: true;
};
export type StoreAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StoreWhereInput;
    orderBy?: Prisma.StoreOrderByWithRelationInput | Prisma.StoreOrderByWithRelationInput[];
    cursor?: Prisma.StoreWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StoreCountAggregateInputType;
    _min?: StoreMinAggregateInputType;
    _max?: StoreMaxAggregateInputType;
};
export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
    [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStore[P]> : Prisma.GetScalarType<T[P], AggregateStore[P]>;
};
export type StoreGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StoreWhereInput;
    orderBy?: Prisma.StoreOrderByWithAggregationInput | Prisma.StoreOrderByWithAggregationInput[];
    by: Prisma.StoreScalarFieldEnum[] | Prisma.StoreScalarFieldEnum;
    having?: Prisma.StoreScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StoreCountAggregateInputType | true;
    _min?: StoreMinAggregateInputType;
    _max?: StoreMaxAggregateInputType;
};
export type StoreGroupByOutputType = {
    id: string;
    sellerId: string;
    slug: string;
    name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    category: string | null;
    city: string | null;
    logoUrl: string | null;
    _count: StoreCountAggregateOutputType | null;
    _min: StoreMinAggregateOutputType | null;
    _max: StoreMaxAggregateOutputType | null;
};
type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StoreGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StoreGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StoreGroupByOutputType[P]>;
}>>;
export type StoreWhereInput = {
    AND?: Prisma.StoreWhereInput | Prisma.StoreWhereInput[];
    OR?: Prisma.StoreWhereInput[];
    NOT?: Prisma.StoreWhereInput | Prisma.StoreWhereInput[];
    id?: Prisma.StringFilter<"Store"> | string;
    sellerId?: Prisma.StringFilter<"Store"> | string;
    slug?: Prisma.StringFilter<"Store"> | string;
    name?: Prisma.StringFilter<"Store"> | string;
    description?: Prisma.StringNullableFilter<"Store"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Store"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Store"> | Date | string;
    category?: Prisma.StringNullableFilter<"Store"> | string | null;
    city?: Prisma.StringNullableFilter<"Store"> | string | null;
    logoUrl?: Prisma.StringNullableFilter<"Store"> | string | null;
    orders?: Prisma.OrderListRelationFilter;
    products?: Prisma.ProductListRelationFilter;
    seller?: Prisma.XOR<Prisma.SellerScalarRelationFilter, Prisma.SellerWhereInput>;
    messages?: Prisma.WhatsappMessageListRelationFilter;
};
export type StoreOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    logoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    products?: Prisma.ProductOrderByRelationAggregateInput;
    seller?: Prisma.SellerOrderByWithRelationInput;
    messages?: Prisma.WhatsappMessageOrderByRelationAggregateInput;
};
export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    sellerId?: string;
    slug?: string;
    AND?: Prisma.StoreWhereInput | Prisma.StoreWhereInput[];
    OR?: Prisma.StoreWhereInput[];
    NOT?: Prisma.StoreWhereInput | Prisma.StoreWhereInput[];
    name?: Prisma.StringFilter<"Store"> | string;
    description?: Prisma.StringNullableFilter<"Store"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Store"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Store"> | Date | string;
    category?: Prisma.StringNullableFilter<"Store"> | string | null;
    city?: Prisma.StringNullableFilter<"Store"> | string | null;
    logoUrl?: Prisma.StringNullableFilter<"Store"> | string | null;
    orders?: Prisma.OrderListRelationFilter;
    products?: Prisma.ProductListRelationFilter;
    seller?: Prisma.XOR<Prisma.SellerScalarRelationFilter, Prisma.SellerWhereInput>;
    messages?: Prisma.WhatsappMessageListRelationFilter;
}, "id" | "sellerId" | "slug">;
export type StoreOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    logoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.StoreCountOrderByAggregateInput;
    _max?: Prisma.StoreMaxOrderByAggregateInput;
    _min?: Prisma.StoreMinOrderByAggregateInput;
};
export type StoreScalarWhereWithAggregatesInput = {
    AND?: Prisma.StoreScalarWhereWithAggregatesInput | Prisma.StoreScalarWhereWithAggregatesInput[];
    OR?: Prisma.StoreScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StoreScalarWhereWithAggregatesInput | Prisma.StoreScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Store"> | string;
    sellerId?: Prisma.StringWithAggregatesFilter<"Store"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Store"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Store"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Store"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Store"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Store"> | Date | string;
    category?: Prisma.StringNullableWithAggregatesFilter<"Store"> | string | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"Store"> | string | null;
    logoUrl?: Prisma.StringNullableWithAggregatesFilter<"Store"> | string | null;
};
export type StoreCreateInput = {
    id?: string;
    slug: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: string | null;
    city?: string | null;
    logoUrl?: string | null;
    orders?: Prisma.OrderCreateNestedManyWithoutStoreInput;
    products?: Prisma.ProductCreateNestedManyWithoutStoreInput;
    seller: Prisma.SellerCreateNestedOneWithoutStoreInput;
    messages?: Prisma.WhatsappMessageCreateNestedManyWithoutStoreInput;
};
export type StoreUncheckedCreateInput = {
    id?: string;
    sellerId: string;
    slug: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: string | null;
    city?: string | null;
    logoUrl?: string | null;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutStoreInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutStoreInput;
    messages?: Prisma.WhatsappMessageUncheckedCreateNestedManyWithoutStoreInput;
};
export type StoreUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orders?: Prisma.OrderUpdateManyWithoutStoreNestedInput;
    products?: Prisma.ProductUpdateManyWithoutStoreNestedInput;
    seller?: Prisma.SellerUpdateOneRequiredWithoutStoreNestedInput;
    messages?: Prisma.WhatsappMessageUpdateManyWithoutStoreNestedInput;
};
export type StoreUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutStoreNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutStoreNestedInput;
    messages?: Prisma.WhatsappMessageUncheckedUpdateManyWithoutStoreNestedInput;
};
export type StoreCreateManyInput = {
    id?: string;
    sellerId: string;
    slug: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: string | null;
    city?: string | null;
    logoUrl?: string | null;
};
export type StoreUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StoreUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StoreNullableScalarRelationFilter = {
    is?: Prisma.StoreWhereInput | null;
    isNot?: Prisma.StoreWhereInput | null;
};
export type StoreCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
};
export type StoreMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
};
export type StoreMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
};
export type StoreScalarRelationFilter = {
    is?: Prisma.StoreWhereInput;
    isNot?: Prisma.StoreWhereInput;
};
export type StoreCreateNestedOneWithoutSellerInput = {
    create?: Prisma.XOR<Prisma.StoreCreateWithoutSellerInput, Prisma.StoreUncheckedCreateWithoutSellerInput>;
    connectOrCreate?: Prisma.StoreCreateOrConnectWithoutSellerInput;
    connect?: Prisma.StoreWhereUniqueInput;
};
export type StoreUncheckedCreateNestedOneWithoutSellerInput = {
    create?: Prisma.XOR<Prisma.StoreCreateWithoutSellerInput, Prisma.StoreUncheckedCreateWithoutSellerInput>;
    connectOrCreate?: Prisma.StoreCreateOrConnectWithoutSellerInput;
    connect?: Prisma.StoreWhereUniqueInput;
};
export type StoreUpdateOneWithoutSellerNestedInput = {
    create?: Prisma.XOR<Prisma.StoreCreateWithoutSellerInput, Prisma.StoreUncheckedCreateWithoutSellerInput>;
    connectOrCreate?: Prisma.StoreCreateOrConnectWithoutSellerInput;
    upsert?: Prisma.StoreUpsertWithoutSellerInput;
    disconnect?: Prisma.StoreWhereInput | boolean;
    delete?: Prisma.StoreWhereInput | boolean;
    connect?: Prisma.StoreWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StoreUpdateToOneWithWhereWithoutSellerInput, Prisma.StoreUpdateWithoutSellerInput>, Prisma.StoreUncheckedUpdateWithoutSellerInput>;
};
export type StoreUncheckedUpdateOneWithoutSellerNestedInput = {
    create?: Prisma.XOR<Prisma.StoreCreateWithoutSellerInput, Prisma.StoreUncheckedCreateWithoutSellerInput>;
    connectOrCreate?: Prisma.StoreCreateOrConnectWithoutSellerInput;
    upsert?: Prisma.StoreUpsertWithoutSellerInput;
    disconnect?: Prisma.StoreWhereInput | boolean;
    delete?: Prisma.StoreWhereInput | boolean;
    connect?: Prisma.StoreWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StoreUpdateToOneWithWhereWithoutSellerInput, Prisma.StoreUpdateWithoutSellerInput>, Prisma.StoreUncheckedUpdateWithoutSellerInput>;
};
export type StoreCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.StoreCreateWithoutProductsInput, Prisma.StoreUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.StoreCreateOrConnectWithoutProductsInput;
    connect?: Prisma.StoreWhereUniqueInput;
};
export type StoreUpdateOneRequiredWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.StoreCreateWithoutProductsInput, Prisma.StoreUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.StoreCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.StoreUpsertWithoutProductsInput;
    connect?: Prisma.StoreWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StoreUpdateToOneWithWhereWithoutProductsInput, Prisma.StoreUpdateWithoutProductsInput>, Prisma.StoreUncheckedUpdateWithoutProductsInput>;
};
export type StoreCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.StoreCreateWithoutOrdersInput, Prisma.StoreUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.StoreCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.StoreWhereUniqueInput;
};
export type StoreUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.StoreCreateWithoutOrdersInput, Prisma.StoreUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.StoreCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.StoreUpsertWithoutOrdersInput;
    connect?: Prisma.StoreWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StoreUpdateToOneWithWhereWithoutOrdersInput, Prisma.StoreUpdateWithoutOrdersInput>, Prisma.StoreUncheckedUpdateWithoutOrdersInput>;
};
export type StoreCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.StoreCreateWithoutMessagesInput, Prisma.StoreUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.StoreCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.StoreWhereUniqueInput;
};
export type StoreUpdateOneWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.StoreCreateWithoutMessagesInput, Prisma.StoreUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.StoreCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.StoreUpsertWithoutMessagesInput;
    disconnect?: Prisma.StoreWhereInput | boolean;
    delete?: Prisma.StoreWhereInput | boolean;
    connect?: Prisma.StoreWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StoreUpdateToOneWithWhereWithoutMessagesInput, Prisma.StoreUpdateWithoutMessagesInput>, Prisma.StoreUncheckedUpdateWithoutMessagesInput>;
};
export type StoreCreateWithoutSellerInput = {
    id?: string;
    slug: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: string | null;
    city?: string | null;
    logoUrl?: string | null;
    orders?: Prisma.OrderCreateNestedManyWithoutStoreInput;
    products?: Prisma.ProductCreateNestedManyWithoutStoreInput;
    messages?: Prisma.WhatsappMessageCreateNestedManyWithoutStoreInput;
};
export type StoreUncheckedCreateWithoutSellerInput = {
    id?: string;
    slug: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: string | null;
    city?: string | null;
    logoUrl?: string | null;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutStoreInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutStoreInput;
    messages?: Prisma.WhatsappMessageUncheckedCreateNestedManyWithoutStoreInput;
};
export type StoreCreateOrConnectWithoutSellerInput = {
    where: Prisma.StoreWhereUniqueInput;
    create: Prisma.XOR<Prisma.StoreCreateWithoutSellerInput, Prisma.StoreUncheckedCreateWithoutSellerInput>;
};
export type StoreUpsertWithoutSellerInput = {
    update: Prisma.XOR<Prisma.StoreUpdateWithoutSellerInput, Prisma.StoreUncheckedUpdateWithoutSellerInput>;
    create: Prisma.XOR<Prisma.StoreCreateWithoutSellerInput, Prisma.StoreUncheckedCreateWithoutSellerInput>;
    where?: Prisma.StoreWhereInput;
};
export type StoreUpdateToOneWithWhereWithoutSellerInput = {
    where?: Prisma.StoreWhereInput;
    data: Prisma.XOR<Prisma.StoreUpdateWithoutSellerInput, Prisma.StoreUncheckedUpdateWithoutSellerInput>;
};
export type StoreUpdateWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orders?: Prisma.OrderUpdateManyWithoutStoreNestedInput;
    products?: Prisma.ProductUpdateManyWithoutStoreNestedInput;
    messages?: Prisma.WhatsappMessageUpdateManyWithoutStoreNestedInput;
};
export type StoreUncheckedUpdateWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutStoreNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutStoreNestedInput;
    messages?: Prisma.WhatsappMessageUncheckedUpdateManyWithoutStoreNestedInput;
};
export type StoreCreateWithoutProductsInput = {
    id?: string;
    slug: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: string | null;
    city?: string | null;
    logoUrl?: string | null;
    orders?: Prisma.OrderCreateNestedManyWithoutStoreInput;
    seller: Prisma.SellerCreateNestedOneWithoutStoreInput;
    messages?: Prisma.WhatsappMessageCreateNestedManyWithoutStoreInput;
};
export type StoreUncheckedCreateWithoutProductsInput = {
    id?: string;
    sellerId: string;
    slug: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: string | null;
    city?: string | null;
    logoUrl?: string | null;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutStoreInput;
    messages?: Prisma.WhatsappMessageUncheckedCreateNestedManyWithoutStoreInput;
};
export type StoreCreateOrConnectWithoutProductsInput = {
    where: Prisma.StoreWhereUniqueInput;
    create: Prisma.XOR<Prisma.StoreCreateWithoutProductsInput, Prisma.StoreUncheckedCreateWithoutProductsInput>;
};
export type StoreUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.StoreUpdateWithoutProductsInput, Prisma.StoreUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.StoreCreateWithoutProductsInput, Prisma.StoreUncheckedCreateWithoutProductsInput>;
    where?: Prisma.StoreWhereInput;
};
export type StoreUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.StoreWhereInput;
    data: Prisma.XOR<Prisma.StoreUpdateWithoutProductsInput, Prisma.StoreUncheckedUpdateWithoutProductsInput>;
};
export type StoreUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orders?: Prisma.OrderUpdateManyWithoutStoreNestedInput;
    seller?: Prisma.SellerUpdateOneRequiredWithoutStoreNestedInput;
    messages?: Prisma.WhatsappMessageUpdateManyWithoutStoreNestedInput;
};
export type StoreUncheckedUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutStoreNestedInput;
    messages?: Prisma.WhatsappMessageUncheckedUpdateManyWithoutStoreNestedInput;
};
export type StoreCreateWithoutOrdersInput = {
    id?: string;
    slug: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: string | null;
    city?: string | null;
    logoUrl?: string | null;
    products?: Prisma.ProductCreateNestedManyWithoutStoreInput;
    seller: Prisma.SellerCreateNestedOneWithoutStoreInput;
    messages?: Prisma.WhatsappMessageCreateNestedManyWithoutStoreInput;
};
export type StoreUncheckedCreateWithoutOrdersInput = {
    id?: string;
    sellerId: string;
    slug: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: string | null;
    city?: string | null;
    logoUrl?: string | null;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutStoreInput;
    messages?: Prisma.WhatsappMessageUncheckedCreateNestedManyWithoutStoreInput;
};
export type StoreCreateOrConnectWithoutOrdersInput = {
    where: Prisma.StoreWhereUniqueInput;
    create: Prisma.XOR<Prisma.StoreCreateWithoutOrdersInput, Prisma.StoreUncheckedCreateWithoutOrdersInput>;
};
export type StoreUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.StoreUpdateWithoutOrdersInput, Prisma.StoreUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.StoreCreateWithoutOrdersInput, Prisma.StoreUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.StoreWhereInput;
};
export type StoreUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.StoreWhereInput;
    data: Prisma.XOR<Prisma.StoreUpdateWithoutOrdersInput, Prisma.StoreUncheckedUpdateWithoutOrdersInput>;
};
export type StoreUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    products?: Prisma.ProductUpdateManyWithoutStoreNestedInput;
    seller?: Prisma.SellerUpdateOneRequiredWithoutStoreNestedInput;
    messages?: Prisma.WhatsappMessageUpdateManyWithoutStoreNestedInput;
};
export type StoreUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    products?: Prisma.ProductUncheckedUpdateManyWithoutStoreNestedInput;
    messages?: Prisma.WhatsappMessageUncheckedUpdateManyWithoutStoreNestedInput;
};
export type StoreCreateWithoutMessagesInput = {
    id?: string;
    slug: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: string | null;
    city?: string | null;
    logoUrl?: string | null;
    orders?: Prisma.OrderCreateNestedManyWithoutStoreInput;
    products?: Prisma.ProductCreateNestedManyWithoutStoreInput;
    seller: Prisma.SellerCreateNestedOneWithoutStoreInput;
};
export type StoreUncheckedCreateWithoutMessagesInput = {
    id?: string;
    sellerId: string;
    slug: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: string | null;
    city?: string | null;
    logoUrl?: string | null;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutStoreInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutStoreInput;
};
export type StoreCreateOrConnectWithoutMessagesInput = {
    where: Prisma.StoreWhereUniqueInput;
    create: Prisma.XOR<Prisma.StoreCreateWithoutMessagesInput, Prisma.StoreUncheckedCreateWithoutMessagesInput>;
};
export type StoreUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.StoreUpdateWithoutMessagesInput, Prisma.StoreUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.StoreCreateWithoutMessagesInput, Prisma.StoreUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.StoreWhereInput;
};
export type StoreUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.StoreWhereInput;
    data: Prisma.XOR<Prisma.StoreUpdateWithoutMessagesInput, Prisma.StoreUncheckedUpdateWithoutMessagesInput>;
};
export type StoreUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orders?: Prisma.OrderUpdateManyWithoutStoreNestedInput;
    products?: Prisma.ProductUpdateManyWithoutStoreNestedInput;
    seller?: Prisma.SellerUpdateOneRequiredWithoutStoreNestedInput;
};
export type StoreUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutStoreNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutStoreNestedInput;
};
export type StoreCountOutputType = {
    orders: number;
    products: number;
    messages: number;
};
export type StoreCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | StoreCountOutputTypeCountOrdersArgs;
    products?: boolean | StoreCountOutputTypeCountProductsArgs;
    messages?: boolean | StoreCountOutputTypeCountMessagesArgs;
};
export type StoreCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreCountOutputTypeSelect<ExtArgs> | null;
};
export type StoreCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type StoreCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
export type StoreCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsappMessageWhereInput;
};
export type StoreSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sellerId?: boolean;
    slug?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean;
    city?: boolean;
    logoUrl?: boolean;
    orders?: boolean | Prisma.Store$ordersArgs<ExtArgs>;
    products?: boolean | Prisma.Store$productsArgs<ExtArgs>;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
    messages?: boolean | Prisma.Store$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.StoreCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store"]>;
export type StoreSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sellerId?: boolean;
    slug?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean;
    city?: boolean;
    logoUrl?: boolean;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store"]>;
export type StoreSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sellerId?: boolean;
    slug?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean;
    city?: boolean;
    logoUrl?: boolean;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store"]>;
export type StoreSelectScalar = {
    id?: boolean;
    sellerId?: boolean;
    slug?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean;
    city?: boolean;
    logoUrl?: boolean;
};
export type StoreOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sellerId" | "slug" | "name" | "description" | "createdAt" | "updatedAt" | "category" | "city" | "logoUrl", ExtArgs["result"]["store"]>;
export type StoreInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.Store$ordersArgs<ExtArgs>;
    products?: boolean | Prisma.Store$productsArgs<ExtArgs>;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
    messages?: boolean | Prisma.Store$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.StoreCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StoreIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
};
export type StoreIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
};
export type $StorePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Store";
    objects: {
        orders: Prisma.$OrderPayload<ExtArgs>[];
        products: Prisma.$ProductPayload<ExtArgs>[];
        seller: Prisma.$SellerPayload<ExtArgs>;
        messages: Prisma.$WhatsappMessagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sellerId: string;
        slug: string;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        category: string | null;
        city: string | null;
        logoUrl: string | null;
    }, ExtArgs["result"]["store"]>;
    composites: {};
};
export type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StorePayload, S>;
export type StoreCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StoreCountAggregateInputType | true;
};
export interface StoreDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Store'];
        meta: {
            name: 'Store';
        };
    };
    findUnique<T extends StoreFindUniqueArgs>(args: Prisma.SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StoreClient<runtime.Types.Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StoreClient<runtime.Types.Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StoreFindFirstArgs>(args?: Prisma.SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma.Prisma__StoreClient<runtime.Types.Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StoreClient<runtime.Types.Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StoreFindManyArgs>(args?: Prisma.SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StoreCreateArgs>(args: Prisma.SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma.Prisma__StoreClient<runtime.Types.Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StoreCreateManyArgs>(args?: Prisma.SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StoreCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StoreDeleteArgs>(args: Prisma.SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma.Prisma__StoreClient<runtime.Types.Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StoreUpdateArgs>(args: Prisma.SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma.Prisma__StoreClient<runtime.Types.Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StoreDeleteManyArgs>(args?: Prisma.SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StoreUpdateManyArgs>(args: Prisma.SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StoreUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StoreUpsertArgs>(args: Prisma.SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma.Prisma__StoreClient<runtime.Types.Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StoreCountArgs>(args?: Prisma.Subset<T, StoreCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StoreCountAggregateOutputType> : number>;
    aggregate<T extends StoreAggregateArgs>(args: Prisma.Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>;
    groupBy<T extends StoreGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StoreGroupByArgs['orderBy'];
    } : {
        orderBy?: StoreGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StoreFieldRefs;
}
export interface Prisma__StoreClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.Store$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Store$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    products<T extends Prisma.Store$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Store$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    seller<T extends Prisma.SellerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SellerDefaultArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    messages<T extends Prisma.Store$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Store$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StoreFieldRefs {
    readonly id: Prisma.FieldRef<"Store", 'String'>;
    readonly sellerId: Prisma.FieldRef<"Store", 'String'>;
    readonly slug: Prisma.FieldRef<"Store", 'String'>;
    readonly name: Prisma.FieldRef<"Store", 'String'>;
    readonly description: Prisma.FieldRef<"Store", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Store", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Store", 'DateTime'>;
    readonly category: Prisma.FieldRef<"Store", 'String'>;
    readonly city: Prisma.FieldRef<"Store", 'String'>;
    readonly logoUrl: Prisma.FieldRef<"Store", 'String'>;
}
export type StoreFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreSelect<ExtArgs> | null;
    omit?: Prisma.StoreOmit<ExtArgs> | null;
    include?: Prisma.StoreInclude<ExtArgs> | null;
    where: Prisma.StoreWhereUniqueInput;
};
export type StoreFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreSelect<ExtArgs> | null;
    omit?: Prisma.StoreOmit<ExtArgs> | null;
    include?: Prisma.StoreInclude<ExtArgs> | null;
    where: Prisma.StoreWhereUniqueInput;
};
export type StoreFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreSelect<ExtArgs> | null;
    omit?: Prisma.StoreOmit<ExtArgs> | null;
    include?: Prisma.StoreInclude<ExtArgs> | null;
    where?: Prisma.StoreWhereInput;
    orderBy?: Prisma.StoreOrderByWithRelationInput | Prisma.StoreOrderByWithRelationInput[];
    cursor?: Prisma.StoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StoreScalarFieldEnum | Prisma.StoreScalarFieldEnum[];
};
export type StoreFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreSelect<ExtArgs> | null;
    omit?: Prisma.StoreOmit<ExtArgs> | null;
    include?: Prisma.StoreInclude<ExtArgs> | null;
    where?: Prisma.StoreWhereInput;
    orderBy?: Prisma.StoreOrderByWithRelationInput | Prisma.StoreOrderByWithRelationInput[];
    cursor?: Prisma.StoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StoreScalarFieldEnum | Prisma.StoreScalarFieldEnum[];
};
export type StoreFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreSelect<ExtArgs> | null;
    omit?: Prisma.StoreOmit<ExtArgs> | null;
    include?: Prisma.StoreInclude<ExtArgs> | null;
    where?: Prisma.StoreWhereInput;
    orderBy?: Prisma.StoreOrderByWithRelationInput | Prisma.StoreOrderByWithRelationInput[];
    cursor?: Prisma.StoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StoreScalarFieldEnum | Prisma.StoreScalarFieldEnum[];
};
export type StoreCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreSelect<ExtArgs> | null;
    omit?: Prisma.StoreOmit<ExtArgs> | null;
    include?: Prisma.StoreInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StoreCreateInput, Prisma.StoreUncheckedCreateInput>;
};
export type StoreCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StoreCreateManyInput | Prisma.StoreCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StoreCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StoreOmit<ExtArgs> | null;
    data: Prisma.StoreCreateManyInput | Prisma.StoreCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StoreIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StoreUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreSelect<ExtArgs> | null;
    omit?: Prisma.StoreOmit<ExtArgs> | null;
    include?: Prisma.StoreInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StoreUpdateInput, Prisma.StoreUncheckedUpdateInput>;
    where: Prisma.StoreWhereUniqueInput;
};
export type StoreUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StoreUpdateManyMutationInput, Prisma.StoreUncheckedUpdateManyInput>;
    where?: Prisma.StoreWhereInput;
    limit?: number;
};
export type StoreUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StoreOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StoreUpdateManyMutationInput, Prisma.StoreUncheckedUpdateManyInput>;
    where?: Prisma.StoreWhereInput;
    limit?: number;
    include?: Prisma.StoreIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StoreUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreSelect<ExtArgs> | null;
    omit?: Prisma.StoreOmit<ExtArgs> | null;
    include?: Prisma.StoreInclude<ExtArgs> | null;
    where: Prisma.StoreWhereUniqueInput;
    create: Prisma.XOR<Prisma.StoreCreateInput, Prisma.StoreUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StoreUpdateInput, Prisma.StoreUncheckedUpdateInput>;
};
export type StoreDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreSelect<ExtArgs> | null;
    omit?: Prisma.StoreOmit<ExtArgs> | null;
    include?: Prisma.StoreInclude<ExtArgs> | null;
    where: Prisma.StoreWhereUniqueInput;
};
export type StoreDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StoreWhereInput;
    limit?: number;
};
export type Store$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Store$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Store$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StoreDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoreSelect<ExtArgs> | null;
    omit?: Prisma.StoreOmit<ExtArgs> | null;
    include?: Prisma.StoreInclude<ExtArgs> | null;
};
export {};

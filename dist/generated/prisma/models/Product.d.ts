import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPayload>;
export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type ProductAvgAggregateOutputType = {
    price: number | null;
    stockQty: number | null;
};
export type ProductSumAggregateOutputType = {
    price: number | null;
    stockQty: number | null;
};
export type ProductMinAggregateOutputType = {
    id: string | null;
    sellerId: string | null;
    storeId: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    currency: string | null;
    active: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    stockQty: number | null;
};
export type ProductMaxAggregateOutputType = {
    id: string | null;
    sellerId: string | null;
    storeId: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    currency: string | null;
    active: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    stockQty: number | null;
};
export type ProductCountAggregateOutputType = {
    id: number;
    sellerId: number;
    storeId: number;
    name: number;
    description: number;
    price: number;
    currency: number;
    active: number;
    createdAt: number;
    updatedAt: number;
    stockQty: number;
    _all: number;
};
export type ProductAvgAggregateInputType = {
    price?: true;
    stockQty?: true;
};
export type ProductSumAggregateInputType = {
    price?: true;
    stockQty?: true;
};
export type ProductMinAggregateInputType = {
    id?: true;
    sellerId?: true;
    storeId?: true;
    name?: true;
    description?: true;
    price?: true;
    currency?: true;
    active?: true;
    createdAt?: true;
    updatedAt?: true;
    stockQty?: true;
};
export type ProductMaxAggregateInputType = {
    id?: true;
    sellerId?: true;
    storeId?: true;
    name?: true;
    description?: true;
    price?: true;
    currency?: true;
    active?: true;
    createdAt?: true;
    updatedAt?: true;
    stockQty?: true;
};
export type ProductCountAggregateInputType = {
    id?: true;
    sellerId?: true;
    storeId?: true;
    name?: true;
    description?: true;
    price?: true;
    currency?: true;
    active?: true;
    createdAt?: true;
    updatedAt?: true;
    stockQty?: true;
    _all?: true;
};
export type ProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductCountAggregateInputType;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct[P]> : Prisma.GetScalarType<T[P], AggregateProduct[P]>;
};
export type ProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithAggregationInput | Prisma.ProductOrderByWithAggregationInput[];
    by: Prisma.ProductScalarFieldEnum[] | Prisma.ProductScalarFieldEnum;
    having?: Prisma.ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type ProductGroupByOutputType = {
    id: string;
    sellerId: string;
    storeId: string;
    name: string;
    description: string | null;
    price: number;
    currency: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
    stockQty: number;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]>;
}>>;
export type ProductWhereInput = {
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    id?: Prisma.StringFilter<"Product"> | string;
    sellerId?: Prisma.StringFilter<"Product"> | string;
    storeId?: Prisma.StringFilter<"Product"> | string;
    name?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    price?: Prisma.FloatFilter<"Product"> | number;
    currency?: Prisma.StringFilter<"Product"> | string;
    active?: Prisma.BoolFilter<"Product"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    stockQty?: Prisma.IntFilter<"Product"> | number;
    orderItems?: Prisma.OrderItemListRelationFilter;
    seller?: Prisma.XOR<Prisma.SellerScalarRelationFilter, Prisma.SellerWhereInput>;
    store?: Prisma.XOR<Prisma.StoreScalarRelationFilter, Prisma.StoreWhereInput>;
    images?: Prisma.ProductImageListRelationFilter;
};
export type ProductOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    storeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    stockQty?: Prisma.SortOrder;
    orderItems?: Prisma.OrderItemOrderByRelationAggregateInput;
    seller?: Prisma.SellerOrderByWithRelationInput;
    store?: Prisma.StoreOrderByWithRelationInput;
    images?: Prisma.ProductImageOrderByRelationAggregateInput;
};
export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    sellerId?: Prisma.StringFilter<"Product"> | string;
    storeId?: Prisma.StringFilter<"Product"> | string;
    name?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    price?: Prisma.FloatFilter<"Product"> | number;
    currency?: Prisma.StringFilter<"Product"> | string;
    active?: Prisma.BoolFilter<"Product"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    stockQty?: Prisma.IntFilter<"Product"> | number;
    orderItems?: Prisma.OrderItemListRelationFilter;
    seller?: Prisma.XOR<Prisma.SellerScalarRelationFilter, Prisma.SellerWhereInput>;
    store?: Prisma.XOR<Prisma.StoreScalarRelationFilter, Prisma.StoreWhereInput>;
    images?: Prisma.ProductImageListRelationFilter;
}, "id">;
export type ProductOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    storeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    stockQty?: Prisma.SortOrder;
    _count?: Prisma.ProductCountOrderByAggregateInput;
    _avg?: Prisma.ProductAvgOrderByAggregateInput;
    _max?: Prisma.ProductMaxOrderByAggregateInput;
    _min?: Prisma.ProductMinOrderByAggregateInput;
    _sum?: Prisma.ProductSumOrderByAggregateInput;
};
export type ProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    sellerId?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    storeId?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    price?: Prisma.FloatWithAggregatesFilter<"Product"> | number;
    currency?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    active?: Prisma.BoolWithAggregatesFilter<"Product"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
    stockQty?: Prisma.IntWithAggregatesFilter<"Product"> | number;
};
export type ProductCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    currency?: string;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stockQty?: number;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    seller: Prisma.SellerCreateNestedOneWithoutProductsInput;
    store: Prisma.StoreCreateNestedOneWithoutProductsInput;
    images?: Prisma.ProductImageCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateInput = {
    id?: string;
    sellerId: string;
    storeId: string;
    name: string;
    description?: string | null;
    price: number;
    currency?: string;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stockQty?: number;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    images?: Prisma.ProductImageUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockQty?: Prisma.IntFieldUpdateOperationsInput | number;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    seller?: Prisma.SellerUpdateOneRequiredWithoutProductsNestedInput;
    store?: Prisma.StoreUpdateOneRequiredWithoutProductsNestedInput;
    images?: Prisma.ProductImageUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockQty?: Prisma.IntFieldUpdateOperationsInput | number;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    images?: Prisma.ProductImageUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManyInput = {
    id?: string;
    sellerId: string;
    storeId: string;
    name: string;
    description?: string | null;
    price: number;
    currency?: string;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stockQty?: number;
};
export type ProductUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockQty?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockQty?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductListRelationFilter = {
    every?: Prisma.ProductWhereInput;
    some?: Prisma.ProductWhereInput;
    none?: Prisma.ProductWhereInput;
};
export type ProductOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    storeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    stockQty?: Prisma.SortOrder;
};
export type ProductAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    stockQty?: Prisma.SortOrder;
};
export type ProductMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    storeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    stockQty?: Prisma.SortOrder;
};
export type ProductMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    storeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    stockQty?: Prisma.SortOrder;
};
export type ProductSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    stockQty?: Prisma.SortOrder;
};
export type ProductScalarRelationFilter = {
    is?: Prisma.ProductWhereInput;
    isNot?: Prisma.ProductWhereInput;
};
export type ProductCreateNestedManyWithoutSellerInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSellerInput, Prisma.ProductUncheckedCreateWithoutSellerInput> | Prisma.ProductCreateWithoutSellerInput[] | Prisma.ProductUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSellerInput | Prisma.ProductCreateOrConnectWithoutSellerInput[];
    createMany?: Prisma.ProductCreateManySellerInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutSellerInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSellerInput, Prisma.ProductUncheckedCreateWithoutSellerInput> | Prisma.ProductCreateWithoutSellerInput[] | Prisma.ProductUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSellerInput | Prisma.ProductCreateOrConnectWithoutSellerInput[];
    createMany?: Prisma.ProductCreateManySellerInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutSellerNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSellerInput, Prisma.ProductUncheckedCreateWithoutSellerInput> | Prisma.ProductCreateWithoutSellerInput[] | Prisma.ProductUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSellerInput | Prisma.ProductCreateOrConnectWithoutSellerInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutSellerInput | Prisma.ProductUpsertWithWhereUniqueWithoutSellerInput[];
    createMany?: Prisma.ProductCreateManySellerInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutSellerInput | Prisma.ProductUpdateWithWhereUniqueWithoutSellerInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutSellerInput | Prisma.ProductUpdateManyWithWhereWithoutSellerInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSellerInput, Prisma.ProductUncheckedCreateWithoutSellerInput> | Prisma.ProductCreateWithoutSellerInput[] | Prisma.ProductUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSellerInput | Prisma.ProductCreateOrConnectWithoutSellerInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutSellerInput | Prisma.ProductUpsertWithWhereUniqueWithoutSellerInput[];
    createMany?: Prisma.ProductCreateManySellerInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutSellerInput | Prisma.ProductUpdateWithWhereUniqueWithoutSellerInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutSellerInput | Prisma.ProductUpdateManyWithWhereWithoutSellerInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductCreateNestedManyWithoutStoreInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutStoreInput, Prisma.ProductUncheckedCreateWithoutStoreInput> | Prisma.ProductCreateWithoutStoreInput[] | Prisma.ProductUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutStoreInput | Prisma.ProductCreateOrConnectWithoutStoreInput[];
    createMany?: Prisma.ProductCreateManyStoreInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutStoreInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutStoreInput, Prisma.ProductUncheckedCreateWithoutStoreInput> | Prisma.ProductCreateWithoutStoreInput[] | Prisma.ProductUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutStoreInput | Prisma.ProductCreateOrConnectWithoutStoreInput[];
    createMany?: Prisma.ProductCreateManyStoreInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutStoreNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutStoreInput, Prisma.ProductUncheckedCreateWithoutStoreInput> | Prisma.ProductCreateWithoutStoreInput[] | Prisma.ProductUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutStoreInput | Prisma.ProductCreateOrConnectWithoutStoreInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutStoreInput | Prisma.ProductUpsertWithWhereUniqueWithoutStoreInput[];
    createMany?: Prisma.ProductCreateManyStoreInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutStoreInput | Prisma.ProductUpdateWithWhereUniqueWithoutStoreInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutStoreInput | Prisma.ProductUpdateManyWithWhereWithoutStoreInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutStoreInput, Prisma.ProductUncheckedCreateWithoutStoreInput> | Prisma.ProductCreateWithoutStoreInput[] | Prisma.ProductUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutStoreInput | Prisma.ProductCreateOrConnectWithoutStoreInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutStoreInput | Prisma.ProductUpsertWithWhereUniqueWithoutStoreInput[];
    createMany?: Prisma.ProductCreateManyStoreInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutStoreInput | Prisma.ProductUpdateWithWhereUniqueWithoutStoreInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutStoreInput | Prisma.ProductUpdateManyWithWhereWithoutStoreInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ProductCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutOrderItemsInput, Prisma.ProductUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutOrderItemsInput, Prisma.ProductUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.ProductUpsertWithoutOrderItemsInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.ProductUpdateWithoutOrderItemsInput>, Prisma.ProductUncheckedUpdateWithoutOrderItemsInput>;
};
export type ProductCreateNestedOneWithoutImagesInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutImagesInput, Prisma.ProductUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutImagesInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutImagesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutImagesInput, Prisma.ProductUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutImagesInput;
    upsert?: Prisma.ProductUpsertWithoutImagesInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutImagesInput, Prisma.ProductUpdateWithoutImagesInput>, Prisma.ProductUncheckedUpdateWithoutImagesInput>;
};
export type ProductCreateWithoutSellerInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    currency?: string;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stockQty?: number;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    store: Prisma.StoreCreateNestedOneWithoutProductsInput;
    images?: Prisma.ProductImageCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutSellerInput = {
    id?: string;
    storeId: string;
    name: string;
    description?: string | null;
    price: number;
    currency?: string;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stockQty?: number;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    images?: Prisma.ProductImageUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutSellerInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutSellerInput, Prisma.ProductUncheckedCreateWithoutSellerInput>;
};
export type ProductCreateManySellerInputEnvelope = {
    data: Prisma.ProductCreateManySellerInput | Prisma.ProductCreateManySellerInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutSellerInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutSellerInput, Prisma.ProductUncheckedUpdateWithoutSellerInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutSellerInput, Prisma.ProductUncheckedCreateWithoutSellerInput>;
};
export type ProductUpdateWithWhereUniqueWithoutSellerInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutSellerInput, Prisma.ProductUncheckedUpdateWithoutSellerInput>;
};
export type ProductUpdateManyWithWhereWithoutSellerInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutSellerInput>;
};
export type ProductScalarWhereInput = {
    AND?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    OR?: Prisma.ProductScalarWhereInput[];
    NOT?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    id?: Prisma.StringFilter<"Product"> | string;
    sellerId?: Prisma.StringFilter<"Product"> | string;
    storeId?: Prisma.StringFilter<"Product"> | string;
    name?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    price?: Prisma.FloatFilter<"Product"> | number;
    currency?: Prisma.StringFilter<"Product"> | string;
    active?: Prisma.BoolFilter<"Product"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    stockQty?: Prisma.IntFilter<"Product"> | number;
};
export type ProductCreateWithoutStoreInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    currency?: string;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stockQty?: number;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    seller: Prisma.SellerCreateNestedOneWithoutProductsInput;
    images?: Prisma.ProductImageCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutStoreInput = {
    id?: string;
    sellerId: string;
    name: string;
    description?: string | null;
    price: number;
    currency?: string;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stockQty?: number;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    images?: Prisma.ProductImageUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutStoreInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutStoreInput, Prisma.ProductUncheckedCreateWithoutStoreInput>;
};
export type ProductCreateManyStoreInputEnvelope = {
    data: Prisma.ProductCreateManyStoreInput | Prisma.ProductCreateManyStoreInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutStoreInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutStoreInput, Prisma.ProductUncheckedUpdateWithoutStoreInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutStoreInput, Prisma.ProductUncheckedCreateWithoutStoreInput>;
};
export type ProductUpdateWithWhereUniqueWithoutStoreInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutStoreInput, Prisma.ProductUncheckedUpdateWithoutStoreInput>;
};
export type ProductUpdateManyWithWhereWithoutStoreInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutStoreInput>;
};
export type ProductCreateWithoutOrderItemsInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    currency?: string;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stockQty?: number;
    seller: Prisma.SellerCreateNestedOneWithoutProductsInput;
    store: Prisma.StoreCreateNestedOneWithoutProductsInput;
    images?: Prisma.ProductImageCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutOrderItemsInput = {
    id?: string;
    sellerId: string;
    storeId: string;
    name: string;
    description?: string | null;
    price: number;
    currency?: string;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stockQty?: number;
    images?: Prisma.ProductImageUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutOrderItemsInput, Prisma.ProductUncheckedCreateWithoutOrderItemsInput>;
};
export type ProductUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutOrderItemsInput, Prisma.ProductUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutOrderItemsInput, Prisma.ProductUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutOrderItemsInput, Prisma.ProductUncheckedUpdateWithoutOrderItemsInput>;
};
export type ProductUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockQty?: Prisma.IntFieldUpdateOperationsInput | number;
    seller?: Prisma.SellerUpdateOneRequiredWithoutProductsNestedInput;
    store?: Prisma.StoreUpdateOneRequiredWithoutProductsNestedInput;
    images?: Prisma.ProductImageUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockQty?: Prisma.IntFieldUpdateOperationsInput | number;
    images?: Prisma.ProductImageUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutImagesInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    currency?: string;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stockQty?: number;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    seller: Prisma.SellerCreateNestedOneWithoutProductsInput;
    store: Prisma.StoreCreateNestedOneWithoutProductsInput;
};
export type ProductUncheckedCreateWithoutImagesInput = {
    id?: string;
    sellerId: string;
    storeId: string;
    name: string;
    description?: string | null;
    price: number;
    currency?: string;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stockQty?: number;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutImagesInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutImagesInput, Prisma.ProductUncheckedCreateWithoutImagesInput>;
};
export type ProductUpsertWithoutImagesInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutImagesInput, Prisma.ProductUncheckedUpdateWithoutImagesInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutImagesInput, Prisma.ProductUncheckedCreateWithoutImagesInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutImagesInput, Prisma.ProductUncheckedUpdateWithoutImagesInput>;
};
export type ProductUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockQty?: Prisma.IntFieldUpdateOperationsInput | number;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    seller?: Prisma.SellerUpdateOneRequiredWithoutProductsNestedInput;
    store?: Prisma.StoreUpdateOneRequiredWithoutProductsNestedInput;
};
export type ProductUncheckedUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockQty?: Prisma.IntFieldUpdateOperationsInput | number;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManySellerInput = {
    id?: string;
    storeId: string;
    name: string;
    description?: string | null;
    price: number;
    currency?: string;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stockQty?: number;
};
export type ProductUpdateWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockQty?: Prisma.IntFieldUpdateOperationsInput | number;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    store?: Prisma.StoreUpdateOneRequiredWithoutProductsNestedInput;
    images?: Prisma.ProductImageUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockQty?: Prisma.IntFieldUpdateOperationsInput | number;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    images?: Prisma.ProductImageUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockQty?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductCreateManyStoreInput = {
    id?: string;
    sellerId: string;
    name: string;
    description?: string | null;
    price: number;
    currency?: string;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stockQty?: number;
};
export type ProductUpdateWithoutStoreInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockQty?: Prisma.IntFieldUpdateOperationsInput | number;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    seller?: Prisma.SellerUpdateOneRequiredWithoutProductsNestedInput;
    images?: Prisma.ProductImageUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutStoreInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockQty?: Prisma.IntFieldUpdateOperationsInput | number;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    images?: Prisma.ProductImageUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutStoreInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockQty?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductCountOutputType = {
    orderItems: number;
    images: number;
};
export type ProductCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orderItems?: boolean | ProductCountOutputTypeCountOrderItemsArgs;
    images?: boolean | ProductCountOutputTypeCountImagesArgs;
};
export type ProductCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductImageWhereInput;
};
export type ProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sellerId?: boolean;
    storeId?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    currency?: boolean;
    active?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    stockQty?: boolean;
    orderItems?: boolean | Prisma.Product$orderItemsArgs<ExtArgs>;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
    store?: boolean | Prisma.StoreDefaultArgs<ExtArgs>;
    images?: boolean | Prisma.Product$imagesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sellerId?: boolean;
    storeId?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    currency?: boolean;
    active?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    stockQty?: boolean;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
    store?: boolean | Prisma.StoreDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sellerId?: boolean;
    storeId?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    currency?: boolean;
    active?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    stockQty?: boolean;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
    store?: boolean | Prisma.StoreDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectScalar = {
    id?: boolean;
    sellerId?: boolean;
    storeId?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    currency?: boolean;
    active?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    stockQty?: boolean;
};
export type ProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sellerId" | "storeId" | "name" | "description" | "price" | "currency" | "active" | "createdAt" | "updatedAt" | "stockQty", ExtArgs["result"]["product"]>;
export type ProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orderItems?: boolean | Prisma.Product$orderItemsArgs<ExtArgs>;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
    store?: boolean | Prisma.StoreDefaultArgs<ExtArgs>;
    images?: boolean | Prisma.Product$imagesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
    store?: boolean | Prisma.StoreDefaultArgs<ExtArgs>;
};
export type ProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
    store?: boolean | Prisma.StoreDefaultArgs<ExtArgs>;
};
export type $ProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Product";
    objects: {
        orderItems: Prisma.$OrderItemPayload<ExtArgs>[];
        seller: Prisma.$SellerPayload<ExtArgs>;
        store: Prisma.$StorePayload<ExtArgs>;
        images: Prisma.$ProductImagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sellerId: string;
        storeId: string;
        name: string;
        description: string | null;
        price: number;
        currency: string;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        stockQty: number;
    }, ExtArgs["result"]["product"]>;
    composites: {};
};
export type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPayload, S>;
export type ProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
};
export interface ProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Product'];
        meta: {
            name: 'Product';
        };
    };
    findUnique<T extends ProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductFindManyArgs>(args?: Prisma.SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductCreateArgs>(args: Prisma.SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductDeleteArgs>(args: Prisma.SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductUpdateArgs>(args: Prisma.SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductUpsertArgs>(args: Prisma.SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductCountArgs>(args?: Prisma.Subset<T, ProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCountAggregateOutputType> : number>;
    aggregate<T extends ProductAggregateArgs>(args: Prisma.Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>;
    groupBy<T extends ProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductFieldRefs;
}
export interface Prisma__ProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orderItems<T extends Prisma.Product$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    seller<T extends Prisma.SellerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SellerDefaultArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    store<T extends Prisma.StoreDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StoreDefaultArgs<ExtArgs>>): Prisma.Prisma__StoreClient<runtime.Types.Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    images<T extends Prisma.Product$imagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductFieldRefs {
    readonly id: Prisma.FieldRef<"Product", 'String'>;
    readonly sellerId: Prisma.FieldRef<"Product", 'String'>;
    readonly storeId: Prisma.FieldRef<"Product", 'String'>;
    readonly name: Prisma.FieldRef<"Product", 'String'>;
    readonly description: Prisma.FieldRef<"Product", 'String'>;
    readonly price: Prisma.FieldRef<"Product", 'Float'>;
    readonly currency: Prisma.FieldRef<"Product", 'String'>;
    readonly active: Prisma.FieldRef<"Product", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly stockQty: Prisma.FieldRef<"Product", 'Int'>;
}
export type ProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
};
export type ProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type ProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
    include?: Prisma.ProductIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
};
export type ProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type Product$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type Product$imagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductImageSelect<ExtArgs> | null;
    omit?: Prisma.ProductImageOmit<ExtArgs> | null;
    include?: Prisma.ProductImageInclude<ExtArgs> | null;
    where?: Prisma.ProductImageWhereInput;
    orderBy?: Prisma.ProductImageOrderByWithRelationInput | Prisma.ProductImageOrderByWithRelationInput[];
    cursor?: Prisma.ProductImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductImageScalarFieldEnum | Prisma.ProductImageScalarFieldEnum[];
};
export type ProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
};
export {};

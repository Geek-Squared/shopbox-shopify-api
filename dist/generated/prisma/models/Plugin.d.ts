import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PluginModel = runtime.Types.Result.DefaultSelection<Prisma.$PluginPayload>;
export type AggregatePlugin = {
    _count: PluginCountAggregateOutputType | null;
    _avg: PluginAvgAggregateOutputType | null;
    _sum: PluginSumAggregateOutputType | null;
    _min: PluginMinAggregateOutputType | null;
    _max: PluginMaxAggregateOutputType | null;
};
export type PluginAvgAggregateOutputType = {
    priceUsd: number | null;
};
export type PluginSumAggregateOutputType = {
    priceUsd: number | null;
};
export type PluginMinAggregateOutputType = {
    id: string | null;
    slug: string | null;
    name: string | null;
    description: string | null;
    priceUsd: number | null;
    isFree: boolean | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type PluginMaxAggregateOutputType = {
    id: string | null;
    slug: string | null;
    name: string | null;
    description: string | null;
    priceUsd: number | null;
    isFree: boolean | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type PluginCountAggregateOutputType = {
    id: number;
    slug: number;
    name: number;
    description: number;
    priceUsd: number;
    isFree: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type PluginAvgAggregateInputType = {
    priceUsd?: true;
};
export type PluginSumAggregateInputType = {
    priceUsd?: true;
};
export type PluginMinAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    description?: true;
    priceUsd?: true;
    isFree?: true;
    isActive?: true;
    createdAt?: true;
};
export type PluginMaxAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    description?: true;
    priceUsd?: true;
    isFree?: true;
    isActive?: true;
    createdAt?: true;
};
export type PluginCountAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    description?: true;
    priceUsd?: true;
    isFree?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type PluginAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PluginWhereInput;
    orderBy?: Prisma.PluginOrderByWithRelationInput | Prisma.PluginOrderByWithRelationInput[];
    cursor?: Prisma.PluginWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PluginCountAggregateInputType;
    _avg?: PluginAvgAggregateInputType;
    _sum?: PluginSumAggregateInputType;
    _min?: PluginMinAggregateInputType;
    _max?: PluginMaxAggregateInputType;
};
export type GetPluginAggregateType<T extends PluginAggregateArgs> = {
    [P in keyof T & keyof AggregatePlugin]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlugin[P]> : Prisma.GetScalarType<T[P], AggregatePlugin[P]>;
};
export type PluginGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PluginWhereInput;
    orderBy?: Prisma.PluginOrderByWithAggregationInput | Prisma.PluginOrderByWithAggregationInput[];
    by: Prisma.PluginScalarFieldEnum[] | Prisma.PluginScalarFieldEnum;
    having?: Prisma.PluginScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PluginCountAggregateInputType | true;
    _avg?: PluginAvgAggregateInputType;
    _sum?: PluginSumAggregateInputType;
    _min?: PluginMinAggregateInputType;
    _max?: PluginMaxAggregateInputType;
};
export type PluginGroupByOutputType = {
    id: string;
    slug: string;
    name: string;
    description: string | null;
    priceUsd: number;
    isFree: boolean;
    isActive: boolean;
    createdAt: Date;
    _count: PluginCountAggregateOutputType | null;
    _avg: PluginAvgAggregateOutputType | null;
    _sum: PluginSumAggregateOutputType | null;
    _min: PluginMinAggregateOutputType | null;
    _max: PluginMaxAggregateOutputType | null;
};
type GetPluginGroupByPayload<T extends PluginGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PluginGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PluginGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PluginGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PluginGroupByOutputType[P]>;
}>>;
export type PluginWhereInput = {
    AND?: Prisma.PluginWhereInput | Prisma.PluginWhereInput[];
    OR?: Prisma.PluginWhereInput[];
    NOT?: Prisma.PluginWhereInput | Prisma.PluginWhereInput[];
    id?: Prisma.StringFilter<"Plugin"> | string;
    slug?: Prisma.StringFilter<"Plugin"> | string;
    name?: Prisma.StringFilter<"Plugin"> | string;
    description?: Prisma.StringNullableFilter<"Plugin"> | string | null;
    priceUsd?: Prisma.FloatFilter<"Plugin"> | number;
    isFree?: Prisma.BoolFilter<"Plugin"> | boolean;
    isActive?: Prisma.BoolFilter<"Plugin"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Plugin"> | Date | string;
    sellers?: Prisma.SellerPluginListRelationFilter;
};
export type PluginOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    priceUsd?: Prisma.SortOrder;
    isFree?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    sellers?: Prisma.SellerPluginOrderByRelationAggregateInput;
};
export type PluginWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.PluginWhereInput | Prisma.PluginWhereInput[];
    OR?: Prisma.PluginWhereInput[];
    NOT?: Prisma.PluginWhereInput | Prisma.PluginWhereInput[];
    name?: Prisma.StringFilter<"Plugin"> | string;
    description?: Prisma.StringNullableFilter<"Plugin"> | string | null;
    priceUsd?: Prisma.FloatFilter<"Plugin"> | number;
    isFree?: Prisma.BoolFilter<"Plugin"> | boolean;
    isActive?: Prisma.BoolFilter<"Plugin"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Plugin"> | Date | string;
    sellers?: Prisma.SellerPluginListRelationFilter;
}, "id" | "slug">;
export type PluginOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    priceUsd?: Prisma.SortOrder;
    isFree?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PluginCountOrderByAggregateInput;
    _avg?: Prisma.PluginAvgOrderByAggregateInput;
    _max?: Prisma.PluginMaxOrderByAggregateInput;
    _min?: Prisma.PluginMinOrderByAggregateInput;
    _sum?: Prisma.PluginSumOrderByAggregateInput;
};
export type PluginScalarWhereWithAggregatesInput = {
    AND?: Prisma.PluginScalarWhereWithAggregatesInput | Prisma.PluginScalarWhereWithAggregatesInput[];
    OR?: Prisma.PluginScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PluginScalarWhereWithAggregatesInput | Prisma.PluginScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Plugin"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Plugin"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Plugin"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Plugin"> | string | null;
    priceUsd?: Prisma.FloatWithAggregatesFilter<"Plugin"> | number;
    isFree?: Prisma.BoolWithAggregatesFilter<"Plugin"> | boolean;
    isActive?: Prisma.BoolWithAggregatesFilter<"Plugin"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Plugin"> | Date | string;
};
export type PluginCreateInput = {
    id?: string;
    slug: string;
    name: string;
    description?: string | null;
    priceUsd?: number;
    isFree?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    sellers?: Prisma.SellerPluginCreateNestedManyWithoutPluginInput;
};
export type PluginUncheckedCreateInput = {
    id?: string;
    slug: string;
    name: string;
    description?: string | null;
    priceUsd?: number;
    isFree?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    sellers?: Prisma.SellerPluginUncheckedCreateNestedManyWithoutPluginInput;
};
export type PluginUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sellers?: Prisma.SellerPluginUpdateManyWithoutPluginNestedInput;
};
export type PluginUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sellers?: Prisma.SellerPluginUncheckedUpdateManyWithoutPluginNestedInput;
};
export type PluginCreateManyInput = {
    id?: string;
    slug: string;
    name: string;
    description?: string | null;
    priceUsd?: number;
    isFree?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type PluginUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PluginUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PluginCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    priceUsd?: Prisma.SortOrder;
    isFree?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PluginAvgOrderByAggregateInput = {
    priceUsd?: Prisma.SortOrder;
};
export type PluginMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    priceUsd?: Prisma.SortOrder;
    isFree?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PluginMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    priceUsd?: Prisma.SortOrder;
    isFree?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PluginSumOrderByAggregateInput = {
    priceUsd?: Prisma.SortOrder;
};
export type PluginScalarRelationFilter = {
    is?: Prisma.PluginWhereInput;
    isNot?: Prisma.PluginWhereInput;
};
export type PluginCreateNestedOneWithoutSellersInput = {
    create?: Prisma.XOR<Prisma.PluginCreateWithoutSellersInput, Prisma.PluginUncheckedCreateWithoutSellersInput>;
    connectOrCreate?: Prisma.PluginCreateOrConnectWithoutSellersInput;
    connect?: Prisma.PluginWhereUniqueInput;
};
export type PluginUpdateOneRequiredWithoutSellersNestedInput = {
    create?: Prisma.XOR<Prisma.PluginCreateWithoutSellersInput, Prisma.PluginUncheckedCreateWithoutSellersInput>;
    connectOrCreate?: Prisma.PluginCreateOrConnectWithoutSellersInput;
    upsert?: Prisma.PluginUpsertWithoutSellersInput;
    connect?: Prisma.PluginWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PluginUpdateToOneWithWhereWithoutSellersInput, Prisma.PluginUpdateWithoutSellersInput>, Prisma.PluginUncheckedUpdateWithoutSellersInput>;
};
export type PluginCreateWithoutSellersInput = {
    id?: string;
    slug: string;
    name: string;
    description?: string | null;
    priceUsd?: number;
    isFree?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type PluginUncheckedCreateWithoutSellersInput = {
    id?: string;
    slug: string;
    name: string;
    description?: string | null;
    priceUsd?: number;
    isFree?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type PluginCreateOrConnectWithoutSellersInput = {
    where: Prisma.PluginWhereUniqueInput;
    create: Prisma.XOR<Prisma.PluginCreateWithoutSellersInput, Prisma.PluginUncheckedCreateWithoutSellersInput>;
};
export type PluginUpsertWithoutSellersInput = {
    update: Prisma.XOR<Prisma.PluginUpdateWithoutSellersInput, Prisma.PluginUncheckedUpdateWithoutSellersInput>;
    create: Prisma.XOR<Prisma.PluginCreateWithoutSellersInput, Prisma.PluginUncheckedCreateWithoutSellersInput>;
    where?: Prisma.PluginWhereInput;
};
export type PluginUpdateToOneWithWhereWithoutSellersInput = {
    where?: Prisma.PluginWhereInput;
    data: Prisma.XOR<Prisma.PluginUpdateWithoutSellersInput, Prisma.PluginUncheckedUpdateWithoutSellersInput>;
};
export type PluginUpdateWithoutSellersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PluginUncheckedUpdateWithoutSellersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PluginCountOutputType = {
    sellers: number;
};
export type PluginCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sellers?: boolean | PluginCountOutputTypeCountSellersArgs;
};
export type PluginCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PluginCountOutputTypeSelect<ExtArgs> | null;
};
export type PluginCountOutputTypeCountSellersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerPluginWhereInput;
};
export type PluginSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    description?: boolean;
    priceUsd?: boolean;
    isFree?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    sellers?: boolean | Prisma.Plugin$sellersArgs<ExtArgs>;
    _count?: boolean | Prisma.PluginCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["plugin"]>;
export type PluginSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    description?: boolean;
    priceUsd?: boolean;
    isFree?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["plugin"]>;
export type PluginSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    description?: boolean;
    priceUsd?: boolean;
    isFree?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["plugin"]>;
export type PluginSelectScalar = {
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    description?: boolean;
    priceUsd?: boolean;
    isFree?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type PluginOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slug" | "name" | "description" | "priceUsd" | "isFree" | "isActive" | "createdAt", ExtArgs["result"]["plugin"]>;
export type PluginInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sellers?: boolean | Prisma.Plugin$sellersArgs<ExtArgs>;
    _count?: boolean | Prisma.PluginCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PluginIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PluginIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PluginPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Plugin";
    objects: {
        sellers: Prisma.$SellerPluginPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        slug: string;
        name: string;
        description: string | null;
        priceUsd: number;
        isFree: boolean;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["plugin"]>;
    composites: {};
};
export type PluginGetPayload<S extends boolean | null | undefined | PluginDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PluginPayload, S>;
export type PluginCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PluginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PluginCountAggregateInputType | true;
};
export interface PluginDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Plugin'];
        meta: {
            name: 'Plugin';
        };
    };
    findUnique<T extends PluginFindUniqueArgs>(args: Prisma.SelectSubset<T, PluginFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PluginClient<runtime.Types.Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PluginFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PluginFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PluginClient<runtime.Types.Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PluginFindFirstArgs>(args?: Prisma.SelectSubset<T, PluginFindFirstArgs<ExtArgs>>): Prisma.Prisma__PluginClient<runtime.Types.Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PluginFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PluginFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PluginClient<runtime.Types.Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PluginFindManyArgs>(args?: Prisma.SelectSubset<T, PluginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PluginCreateArgs>(args: Prisma.SelectSubset<T, PluginCreateArgs<ExtArgs>>): Prisma.Prisma__PluginClient<runtime.Types.Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PluginCreateManyArgs>(args?: Prisma.SelectSubset<T, PluginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PluginCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PluginCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PluginDeleteArgs>(args: Prisma.SelectSubset<T, PluginDeleteArgs<ExtArgs>>): Prisma.Prisma__PluginClient<runtime.Types.Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PluginUpdateArgs>(args: Prisma.SelectSubset<T, PluginUpdateArgs<ExtArgs>>): Prisma.Prisma__PluginClient<runtime.Types.Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PluginDeleteManyArgs>(args?: Prisma.SelectSubset<T, PluginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PluginUpdateManyArgs>(args: Prisma.SelectSubset<T, PluginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PluginUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PluginUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PluginUpsertArgs>(args: Prisma.SelectSubset<T, PluginUpsertArgs<ExtArgs>>): Prisma.Prisma__PluginClient<runtime.Types.Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PluginCountArgs>(args?: Prisma.Subset<T, PluginCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PluginCountAggregateOutputType> : number>;
    aggregate<T extends PluginAggregateArgs>(args: Prisma.Subset<T, PluginAggregateArgs>): Prisma.PrismaPromise<GetPluginAggregateType<T>>;
    groupBy<T extends PluginGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PluginGroupByArgs['orderBy'];
    } : {
        orderBy?: PluginGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PluginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPluginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PluginFieldRefs;
}
export interface Prisma__PluginClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sellers<T extends Prisma.Plugin$sellersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Plugin$sellersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerPluginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PluginFieldRefs {
    readonly id: Prisma.FieldRef<"Plugin", 'String'>;
    readonly slug: Prisma.FieldRef<"Plugin", 'String'>;
    readonly name: Prisma.FieldRef<"Plugin", 'String'>;
    readonly description: Prisma.FieldRef<"Plugin", 'String'>;
    readonly priceUsd: Prisma.FieldRef<"Plugin", 'Float'>;
    readonly isFree: Prisma.FieldRef<"Plugin", 'Boolean'>;
    readonly isActive: Prisma.FieldRef<"Plugin", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Plugin", 'DateTime'>;
}
export type PluginFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PluginSelect<ExtArgs> | null;
    omit?: Prisma.PluginOmit<ExtArgs> | null;
    include?: Prisma.PluginInclude<ExtArgs> | null;
    where: Prisma.PluginWhereUniqueInput;
};
export type PluginFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PluginSelect<ExtArgs> | null;
    omit?: Prisma.PluginOmit<ExtArgs> | null;
    include?: Prisma.PluginInclude<ExtArgs> | null;
    where: Prisma.PluginWhereUniqueInput;
};
export type PluginFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PluginSelect<ExtArgs> | null;
    omit?: Prisma.PluginOmit<ExtArgs> | null;
    include?: Prisma.PluginInclude<ExtArgs> | null;
    where?: Prisma.PluginWhereInput;
    orderBy?: Prisma.PluginOrderByWithRelationInput | Prisma.PluginOrderByWithRelationInput[];
    cursor?: Prisma.PluginWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PluginScalarFieldEnum | Prisma.PluginScalarFieldEnum[];
};
export type PluginFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PluginSelect<ExtArgs> | null;
    omit?: Prisma.PluginOmit<ExtArgs> | null;
    include?: Prisma.PluginInclude<ExtArgs> | null;
    where?: Prisma.PluginWhereInput;
    orderBy?: Prisma.PluginOrderByWithRelationInput | Prisma.PluginOrderByWithRelationInput[];
    cursor?: Prisma.PluginWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PluginScalarFieldEnum | Prisma.PluginScalarFieldEnum[];
};
export type PluginFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PluginSelect<ExtArgs> | null;
    omit?: Prisma.PluginOmit<ExtArgs> | null;
    include?: Prisma.PluginInclude<ExtArgs> | null;
    where?: Prisma.PluginWhereInput;
    orderBy?: Prisma.PluginOrderByWithRelationInput | Prisma.PluginOrderByWithRelationInput[];
    cursor?: Prisma.PluginWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PluginScalarFieldEnum | Prisma.PluginScalarFieldEnum[];
};
export type PluginCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PluginSelect<ExtArgs> | null;
    omit?: Prisma.PluginOmit<ExtArgs> | null;
    include?: Prisma.PluginInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PluginCreateInput, Prisma.PluginUncheckedCreateInput>;
};
export type PluginCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PluginCreateManyInput | Prisma.PluginCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PluginCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PluginSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PluginOmit<ExtArgs> | null;
    data: Prisma.PluginCreateManyInput | Prisma.PluginCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PluginUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PluginSelect<ExtArgs> | null;
    omit?: Prisma.PluginOmit<ExtArgs> | null;
    include?: Prisma.PluginInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PluginUpdateInput, Prisma.PluginUncheckedUpdateInput>;
    where: Prisma.PluginWhereUniqueInput;
};
export type PluginUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PluginUpdateManyMutationInput, Prisma.PluginUncheckedUpdateManyInput>;
    where?: Prisma.PluginWhereInput;
    limit?: number;
};
export type PluginUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PluginSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PluginOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PluginUpdateManyMutationInput, Prisma.PluginUncheckedUpdateManyInput>;
    where?: Prisma.PluginWhereInput;
    limit?: number;
};
export type PluginUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PluginSelect<ExtArgs> | null;
    omit?: Prisma.PluginOmit<ExtArgs> | null;
    include?: Prisma.PluginInclude<ExtArgs> | null;
    where: Prisma.PluginWhereUniqueInput;
    create: Prisma.XOR<Prisma.PluginCreateInput, Prisma.PluginUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PluginUpdateInput, Prisma.PluginUncheckedUpdateInput>;
};
export type PluginDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PluginSelect<ExtArgs> | null;
    omit?: Prisma.PluginOmit<ExtArgs> | null;
    include?: Prisma.PluginInclude<ExtArgs> | null;
    where: Prisma.PluginWhereUniqueInput;
};
export type PluginDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PluginWhereInput;
    limit?: number;
};
export type Plugin$sellersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PluginDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PluginSelect<ExtArgs> | null;
    omit?: Prisma.PluginOmit<ExtArgs> | null;
    include?: Prisma.PluginInclude<ExtArgs> | null;
};
export {};

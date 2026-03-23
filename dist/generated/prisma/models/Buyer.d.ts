import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type BuyerModel = runtime.Types.Result.DefaultSelection<Prisma.$BuyerPayload>;
export type AggregateBuyer = {
    _count: BuyerCountAggregateOutputType | null;
    _min: BuyerMinAggregateOutputType | null;
    _max: BuyerMaxAggregateOutputType | null;
};
export type BuyerMinAggregateOutputType = {
    id: string | null;
    phoneNumber: string | null;
    fullName: string | null;
    city: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BuyerMaxAggregateOutputType = {
    id: string | null;
    phoneNumber: string | null;
    fullName: string | null;
    city: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BuyerCountAggregateOutputType = {
    id: number;
    phoneNumber: number;
    fullName: number;
    city: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BuyerMinAggregateInputType = {
    id?: true;
    phoneNumber?: true;
    fullName?: true;
    city?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BuyerMaxAggregateInputType = {
    id?: true;
    phoneNumber?: true;
    fullName?: true;
    city?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BuyerCountAggregateInputType = {
    id?: true;
    phoneNumber?: true;
    fullName?: true;
    city?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BuyerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BuyerWhereInput;
    orderBy?: Prisma.BuyerOrderByWithRelationInput | Prisma.BuyerOrderByWithRelationInput[];
    cursor?: Prisma.BuyerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BuyerCountAggregateInputType;
    _min?: BuyerMinAggregateInputType;
    _max?: BuyerMaxAggregateInputType;
};
export type GetBuyerAggregateType<T extends BuyerAggregateArgs> = {
    [P in keyof T & keyof AggregateBuyer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBuyer[P]> : Prisma.GetScalarType<T[P], AggregateBuyer[P]>;
};
export type BuyerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BuyerWhereInput;
    orderBy?: Prisma.BuyerOrderByWithAggregationInput | Prisma.BuyerOrderByWithAggregationInput[];
    by: Prisma.BuyerScalarFieldEnum[] | Prisma.BuyerScalarFieldEnum;
    having?: Prisma.BuyerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BuyerCountAggregateInputType | true;
    _min?: BuyerMinAggregateInputType;
    _max?: BuyerMaxAggregateInputType;
};
export type BuyerGroupByOutputType = {
    id: string;
    phoneNumber: string;
    fullName: string | null;
    city: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: BuyerCountAggregateOutputType | null;
    _min: BuyerMinAggregateOutputType | null;
    _max: BuyerMaxAggregateOutputType | null;
};
type GetBuyerGroupByPayload<T extends BuyerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BuyerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BuyerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BuyerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BuyerGroupByOutputType[P]>;
}>>;
export type BuyerWhereInput = {
    AND?: Prisma.BuyerWhereInput | Prisma.BuyerWhereInput[];
    OR?: Prisma.BuyerWhereInput[];
    NOT?: Prisma.BuyerWhereInput | Prisma.BuyerWhereInput[];
    id?: Prisma.StringFilter<"Buyer"> | string;
    phoneNumber?: Prisma.StringFilter<"Buyer"> | string;
    fullName?: Prisma.StringNullableFilter<"Buyer"> | string | null;
    city?: Prisma.StringNullableFilter<"Buyer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Buyer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Buyer"> | Date | string;
    orders?: Prisma.OrderListRelationFilter;
};
export type BuyerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
};
export type BuyerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    phoneNumber?: string;
    AND?: Prisma.BuyerWhereInput | Prisma.BuyerWhereInput[];
    OR?: Prisma.BuyerWhereInput[];
    NOT?: Prisma.BuyerWhereInput | Prisma.BuyerWhereInput[];
    fullName?: Prisma.StringNullableFilter<"Buyer"> | string | null;
    city?: Prisma.StringNullableFilter<"Buyer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Buyer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Buyer"> | Date | string;
    orders?: Prisma.OrderListRelationFilter;
}, "id" | "phoneNumber">;
export type BuyerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BuyerCountOrderByAggregateInput;
    _max?: Prisma.BuyerMaxOrderByAggregateInput;
    _min?: Prisma.BuyerMinOrderByAggregateInput;
};
export type BuyerScalarWhereWithAggregatesInput = {
    AND?: Prisma.BuyerScalarWhereWithAggregatesInput | Prisma.BuyerScalarWhereWithAggregatesInput[];
    OR?: Prisma.BuyerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BuyerScalarWhereWithAggregatesInput | Prisma.BuyerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Buyer"> | string;
    phoneNumber?: Prisma.StringWithAggregatesFilter<"Buyer"> | string;
    fullName?: Prisma.StringNullableWithAggregatesFilter<"Buyer"> | string | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"Buyer"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Buyer"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Buyer"> | Date | string;
};
export type BuyerCreateInput = {
    id?: string;
    phoneNumber: string;
    fullName?: string | null;
    city?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
};
export type BuyerUncheckedCreateInput = {
    id?: string;
    phoneNumber: string;
    fullName?: string | null;
    city?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
};
export type BuyerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
};
export type BuyerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
};
export type BuyerCreateManyInput = {
    id?: string;
    phoneNumber: string;
    fullName?: string | null;
    city?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BuyerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BuyerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BuyerNullableScalarRelationFilter = {
    is?: Prisma.BuyerWhereInput | null;
    isNot?: Prisma.BuyerWhereInput | null;
};
export type BuyerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BuyerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BuyerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BuyerCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.BuyerCreateWithoutOrdersInput, Prisma.BuyerUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.BuyerCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.BuyerWhereUniqueInput;
};
export type BuyerUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.BuyerCreateWithoutOrdersInput, Prisma.BuyerUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.BuyerCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.BuyerUpsertWithoutOrdersInput;
    disconnect?: Prisma.BuyerWhereInput | boolean;
    delete?: Prisma.BuyerWhereInput | boolean;
    connect?: Prisma.BuyerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BuyerUpdateToOneWithWhereWithoutOrdersInput, Prisma.BuyerUpdateWithoutOrdersInput>, Prisma.BuyerUncheckedUpdateWithoutOrdersInput>;
};
export type BuyerCreateWithoutOrdersInput = {
    id?: string;
    phoneNumber: string;
    fullName?: string | null;
    city?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BuyerUncheckedCreateWithoutOrdersInput = {
    id?: string;
    phoneNumber: string;
    fullName?: string | null;
    city?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BuyerCreateOrConnectWithoutOrdersInput = {
    where: Prisma.BuyerWhereUniqueInput;
    create: Prisma.XOR<Prisma.BuyerCreateWithoutOrdersInput, Prisma.BuyerUncheckedCreateWithoutOrdersInput>;
};
export type BuyerUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.BuyerUpdateWithoutOrdersInput, Prisma.BuyerUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.BuyerCreateWithoutOrdersInput, Prisma.BuyerUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.BuyerWhereInput;
};
export type BuyerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.BuyerWhereInput;
    data: Prisma.XOR<Prisma.BuyerUpdateWithoutOrdersInput, Prisma.BuyerUncheckedUpdateWithoutOrdersInput>;
};
export type BuyerUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BuyerUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BuyerCountOutputType = {
    orders: number;
};
export type BuyerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | BuyerCountOutputTypeCountOrdersArgs;
};
export type BuyerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BuyerCountOutputTypeSelect<ExtArgs> | null;
};
export type BuyerCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type BuyerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phoneNumber?: boolean;
    fullName?: boolean;
    city?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    orders?: boolean | Prisma.Buyer$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.BuyerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["buyer"]>;
export type BuyerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phoneNumber?: boolean;
    fullName?: boolean;
    city?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["buyer"]>;
export type BuyerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phoneNumber?: boolean;
    fullName?: boolean;
    city?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["buyer"]>;
export type BuyerSelectScalar = {
    id?: boolean;
    phoneNumber?: boolean;
    fullName?: boolean;
    city?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BuyerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "phoneNumber" | "fullName" | "city" | "createdAt" | "updatedAt", ExtArgs["result"]["buyer"]>;
export type BuyerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.Buyer$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.BuyerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BuyerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type BuyerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $BuyerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Buyer";
    objects: {
        orders: Prisma.$OrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        phoneNumber: string;
        fullName: string | null;
        city: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["buyer"]>;
    composites: {};
};
export type BuyerGetPayload<S extends boolean | null | undefined | BuyerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BuyerPayload, S>;
export type BuyerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BuyerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BuyerCountAggregateInputType | true;
};
export interface BuyerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Buyer'];
        meta: {
            name: 'Buyer';
        };
    };
    findUnique<T extends BuyerFindUniqueArgs>(args: Prisma.SelectSubset<T, BuyerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BuyerClient<runtime.Types.Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BuyerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BuyerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BuyerClient<runtime.Types.Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BuyerFindFirstArgs>(args?: Prisma.SelectSubset<T, BuyerFindFirstArgs<ExtArgs>>): Prisma.Prisma__BuyerClient<runtime.Types.Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BuyerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BuyerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BuyerClient<runtime.Types.Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BuyerFindManyArgs>(args?: Prisma.SelectSubset<T, BuyerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BuyerCreateArgs>(args: Prisma.SelectSubset<T, BuyerCreateArgs<ExtArgs>>): Prisma.Prisma__BuyerClient<runtime.Types.Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BuyerCreateManyArgs>(args?: Prisma.SelectSubset<T, BuyerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BuyerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BuyerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BuyerDeleteArgs>(args: Prisma.SelectSubset<T, BuyerDeleteArgs<ExtArgs>>): Prisma.Prisma__BuyerClient<runtime.Types.Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BuyerUpdateArgs>(args: Prisma.SelectSubset<T, BuyerUpdateArgs<ExtArgs>>): Prisma.Prisma__BuyerClient<runtime.Types.Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BuyerDeleteManyArgs>(args?: Prisma.SelectSubset<T, BuyerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BuyerUpdateManyArgs>(args: Prisma.SelectSubset<T, BuyerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BuyerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BuyerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BuyerUpsertArgs>(args: Prisma.SelectSubset<T, BuyerUpsertArgs<ExtArgs>>): Prisma.Prisma__BuyerClient<runtime.Types.Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BuyerCountArgs>(args?: Prisma.Subset<T, BuyerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BuyerCountAggregateOutputType> : number>;
    aggregate<T extends BuyerAggregateArgs>(args: Prisma.Subset<T, BuyerAggregateArgs>): Prisma.PrismaPromise<GetBuyerAggregateType<T>>;
    groupBy<T extends BuyerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BuyerGroupByArgs['orderBy'];
    } : {
        orderBy?: BuyerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BuyerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuyerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BuyerFieldRefs;
}
export interface Prisma__BuyerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.Buyer$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Buyer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BuyerFieldRefs {
    readonly id: Prisma.FieldRef<"Buyer", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"Buyer", 'String'>;
    readonly fullName: Prisma.FieldRef<"Buyer", 'String'>;
    readonly city: Prisma.FieldRef<"Buyer", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Buyer", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Buyer", 'DateTime'>;
}
export type BuyerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BuyerSelect<ExtArgs> | null;
    omit?: Prisma.BuyerOmit<ExtArgs> | null;
    include?: Prisma.BuyerInclude<ExtArgs> | null;
    where: Prisma.BuyerWhereUniqueInput;
};
export type BuyerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BuyerSelect<ExtArgs> | null;
    omit?: Prisma.BuyerOmit<ExtArgs> | null;
    include?: Prisma.BuyerInclude<ExtArgs> | null;
    where: Prisma.BuyerWhereUniqueInput;
};
export type BuyerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BuyerSelect<ExtArgs> | null;
    omit?: Prisma.BuyerOmit<ExtArgs> | null;
    include?: Prisma.BuyerInclude<ExtArgs> | null;
    where?: Prisma.BuyerWhereInput;
    orderBy?: Prisma.BuyerOrderByWithRelationInput | Prisma.BuyerOrderByWithRelationInput[];
    cursor?: Prisma.BuyerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BuyerScalarFieldEnum | Prisma.BuyerScalarFieldEnum[];
};
export type BuyerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BuyerSelect<ExtArgs> | null;
    omit?: Prisma.BuyerOmit<ExtArgs> | null;
    include?: Prisma.BuyerInclude<ExtArgs> | null;
    where?: Prisma.BuyerWhereInput;
    orderBy?: Prisma.BuyerOrderByWithRelationInput | Prisma.BuyerOrderByWithRelationInput[];
    cursor?: Prisma.BuyerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BuyerScalarFieldEnum | Prisma.BuyerScalarFieldEnum[];
};
export type BuyerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BuyerSelect<ExtArgs> | null;
    omit?: Prisma.BuyerOmit<ExtArgs> | null;
    include?: Prisma.BuyerInclude<ExtArgs> | null;
    where?: Prisma.BuyerWhereInput;
    orderBy?: Prisma.BuyerOrderByWithRelationInput | Prisma.BuyerOrderByWithRelationInput[];
    cursor?: Prisma.BuyerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BuyerScalarFieldEnum | Prisma.BuyerScalarFieldEnum[];
};
export type BuyerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BuyerSelect<ExtArgs> | null;
    omit?: Prisma.BuyerOmit<ExtArgs> | null;
    include?: Prisma.BuyerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BuyerCreateInput, Prisma.BuyerUncheckedCreateInput>;
};
export type BuyerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BuyerCreateManyInput | Prisma.BuyerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BuyerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BuyerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BuyerOmit<ExtArgs> | null;
    data: Prisma.BuyerCreateManyInput | Prisma.BuyerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BuyerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BuyerSelect<ExtArgs> | null;
    omit?: Prisma.BuyerOmit<ExtArgs> | null;
    include?: Prisma.BuyerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BuyerUpdateInput, Prisma.BuyerUncheckedUpdateInput>;
    where: Prisma.BuyerWhereUniqueInput;
};
export type BuyerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BuyerUpdateManyMutationInput, Prisma.BuyerUncheckedUpdateManyInput>;
    where?: Prisma.BuyerWhereInput;
    limit?: number;
};
export type BuyerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BuyerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BuyerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BuyerUpdateManyMutationInput, Prisma.BuyerUncheckedUpdateManyInput>;
    where?: Prisma.BuyerWhereInput;
    limit?: number;
};
export type BuyerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BuyerSelect<ExtArgs> | null;
    omit?: Prisma.BuyerOmit<ExtArgs> | null;
    include?: Prisma.BuyerInclude<ExtArgs> | null;
    where: Prisma.BuyerWhereUniqueInput;
    create: Prisma.XOR<Prisma.BuyerCreateInput, Prisma.BuyerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BuyerUpdateInput, Prisma.BuyerUncheckedUpdateInput>;
};
export type BuyerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BuyerSelect<ExtArgs> | null;
    omit?: Prisma.BuyerOmit<ExtArgs> | null;
    include?: Prisma.BuyerInclude<ExtArgs> | null;
    where: Prisma.BuyerWhereUniqueInput;
};
export type BuyerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BuyerWhereInput;
    limit?: number;
};
export type Buyer$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BuyerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BuyerSelect<ExtArgs> | null;
    omit?: Prisma.BuyerOmit<ExtArgs> | null;
    include?: Prisma.BuyerInclude<ExtArgs> | null;
};
export {};

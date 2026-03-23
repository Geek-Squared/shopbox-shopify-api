import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PostProductMappingModel = runtime.Types.Result.DefaultSelection<Prisma.$PostProductMappingPayload>;
export type AggregatePostProductMapping = {
    _count: PostProductMappingCountAggregateOutputType | null;
    _min: PostProductMappingMinAggregateOutputType | null;
    _max: PostProductMappingMaxAggregateOutputType | null;
};
export type PostProductMappingMinAggregateOutputType = {
    id: string | null;
    merchantId: string | null;
    platform: string | null;
    postUrl: string | null;
    mediaId: string | null;
    shopifyProductId: string | null;
    productTitle: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PostProductMappingMaxAggregateOutputType = {
    id: string | null;
    merchantId: string | null;
    platform: string | null;
    postUrl: string | null;
    mediaId: string | null;
    shopifyProductId: string | null;
    productTitle: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PostProductMappingCountAggregateOutputType = {
    id: number;
    merchantId: number;
    platform: number;
    postUrl: number;
    mediaId: number;
    shopifyProductId: number;
    productTitle: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PostProductMappingMinAggregateInputType = {
    id?: true;
    merchantId?: true;
    platform?: true;
    postUrl?: true;
    mediaId?: true;
    shopifyProductId?: true;
    productTitle?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PostProductMappingMaxAggregateInputType = {
    id?: true;
    merchantId?: true;
    platform?: true;
    postUrl?: true;
    mediaId?: true;
    shopifyProductId?: true;
    productTitle?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PostProductMappingCountAggregateInputType = {
    id?: true;
    merchantId?: true;
    platform?: true;
    postUrl?: true;
    mediaId?: true;
    shopifyProductId?: true;
    productTitle?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PostProductMappingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PostProductMappingWhereInput;
    orderBy?: Prisma.PostProductMappingOrderByWithRelationInput | Prisma.PostProductMappingOrderByWithRelationInput[];
    cursor?: Prisma.PostProductMappingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PostProductMappingCountAggregateInputType;
    _min?: PostProductMappingMinAggregateInputType;
    _max?: PostProductMappingMaxAggregateInputType;
};
export type GetPostProductMappingAggregateType<T extends PostProductMappingAggregateArgs> = {
    [P in keyof T & keyof AggregatePostProductMapping]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePostProductMapping[P]> : Prisma.GetScalarType<T[P], AggregatePostProductMapping[P]>;
};
export type PostProductMappingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PostProductMappingWhereInput;
    orderBy?: Prisma.PostProductMappingOrderByWithAggregationInput | Prisma.PostProductMappingOrderByWithAggregationInput[];
    by: Prisma.PostProductMappingScalarFieldEnum[] | Prisma.PostProductMappingScalarFieldEnum;
    having?: Prisma.PostProductMappingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostProductMappingCountAggregateInputType | true;
    _min?: PostProductMappingMinAggregateInputType;
    _max?: PostProductMappingMaxAggregateInputType;
};
export type PostProductMappingGroupByOutputType = {
    id: string;
    merchantId: string;
    platform: string;
    postUrl: string | null;
    mediaId: string;
    shopifyProductId: string;
    productTitle: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: PostProductMappingCountAggregateOutputType | null;
    _min: PostProductMappingMinAggregateOutputType | null;
    _max: PostProductMappingMaxAggregateOutputType | null;
};
type GetPostProductMappingGroupByPayload<T extends PostProductMappingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PostProductMappingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PostProductMappingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PostProductMappingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PostProductMappingGroupByOutputType[P]>;
}>>;
export type PostProductMappingWhereInput = {
    AND?: Prisma.PostProductMappingWhereInput | Prisma.PostProductMappingWhereInput[];
    OR?: Prisma.PostProductMappingWhereInput[];
    NOT?: Prisma.PostProductMappingWhereInput | Prisma.PostProductMappingWhereInput[];
    id?: Prisma.StringFilter<"PostProductMapping"> | string;
    merchantId?: Prisma.StringFilter<"PostProductMapping"> | string;
    platform?: Prisma.StringFilter<"PostProductMapping"> | string;
    postUrl?: Prisma.StringNullableFilter<"PostProductMapping"> | string | null;
    mediaId?: Prisma.StringFilter<"PostProductMapping"> | string;
    shopifyProductId?: Prisma.StringFilter<"PostProductMapping"> | string;
    productTitle?: Prisma.StringNullableFilter<"PostProductMapping"> | string | null;
    isActive?: Prisma.BoolFilter<"PostProductMapping"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PostProductMapping"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PostProductMapping"> | Date | string;
};
export type PostProductMappingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    merchantId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    postUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    mediaId?: Prisma.SortOrder;
    shopifyProductId?: Prisma.SortOrder;
    productTitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PostProductMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    merchantId_mediaId?: Prisma.PostProductMappingMerchantIdMediaIdCompoundUniqueInput;
    AND?: Prisma.PostProductMappingWhereInput | Prisma.PostProductMappingWhereInput[];
    OR?: Prisma.PostProductMappingWhereInput[];
    NOT?: Prisma.PostProductMappingWhereInput | Prisma.PostProductMappingWhereInput[];
    merchantId?: Prisma.StringFilter<"PostProductMapping"> | string;
    platform?: Prisma.StringFilter<"PostProductMapping"> | string;
    postUrl?: Prisma.StringNullableFilter<"PostProductMapping"> | string | null;
    mediaId?: Prisma.StringFilter<"PostProductMapping"> | string;
    shopifyProductId?: Prisma.StringFilter<"PostProductMapping"> | string;
    productTitle?: Prisma.StringNullableFilter<"PostProductMapping"> | string | null;
    isActive?: Prisma.BoolFilter<"PostProductMapping"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PostProductMapping"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PostProductMapping"> | Date | string;
}, "id" | "merchantId_mediaId">;
export type PostProductMappingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    merchantId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    postUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    mediaId?: Prisma.SortOrder;
    shopifyProductId?: Prisma.SortOrder;
    productTitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PostProductMappingCountOrderByAggregateInput;
    _max?: Prisma.PostProductMappingMaxOrderByAggregateInput;
    _min?: Prisma.PostProductMappingMinOrderByAggregateInput;
};
export type PostProductMappingScalarWhereWithAggregatesInput = {
    AND?: Prisma.PostProductMappingScalarWhereWithAggregatesInput | Prisma.PostProductMappingScalarWhereWithAggregatesInput[];
    OR?: Prisma.PostProductMappingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PostProductMappingScalarWhereWithAggregatesInput | Prisma.PostProductMappingScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PostProductMapping"> | string;
    merchantId?: Prisma.StringWithAggregatesFilter<"PostProductMapping"> | string;
    platform?: Prisma.StringWithAggregatesFilter<"PostProductMapping"> | string;
    postUrl?: Prisma.StringNullableWithAggregatesFilter<"PostProductMapping"> | string | null;
    mediaId?: Prisma.StringWithAggregatesFilter<"PostProductMapping"> | string;
    shopifyProductId?: Prisma.StringWithAggregatesFilter<"PostProductMapping"> | string;
    productTitle?: Prisma.StringNullableWithAggregatesFilter<"PostProductMapping"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"PostProductMapping"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PostProductMapping"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PostProductMapping"> | Date | string;
};
export type PostProductMappingCreateInput = {
    id?: string;
    merchantId: string;
    platform: string;
    postUrl?: string | null;
    mediaId: string;
    shopifyProductId: string;
    productTitle?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PostProductMappingUncheckedCreateInput = {
    id?: string;
    merchantId: string;
    platform: string;
    postUrl?: string | null;
    mediaId: string;
    shopifyProductId: string;
    productTitle?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PostProductMappingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchantId?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    postUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaId?: Prisma.StringFieldUpdateOperationsInput | string;
    shopifyProductId?: Prisma.StringFieldUpdateOperationsInput | string;
    productTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PostProductMappingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchantId?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    postUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaId?: Prisma.StringFieldUpdateOperationsInput | string;
    shopifyProductId?: Prisma.StringFieldUpdateOperationsInput | string;
    productTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PostProductMappingCreateManyInput = {
    id?: string;
    merchantId: string;
    platform: string;
    postUrl?: string | null;
    mediaId: string;
    shopifyProductId: string;
    productTitle?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PostProductMappingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchantId?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    postUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaId?: Prisma.StringFieldUpdateOperationsInput | string;
    shopifyProductId?: Prisma.StringFieldUpdateOperationsInput | string;
    productTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PostProductMappingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchantId?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    postUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaId?: Prisma.StringFieldUpdateOperationsInput | string;
    shopifyProductId?: Prisma.StringFieldUpdateOperationsInput | string;
    productTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PostProductMappingMerchantIdMediaIdCompoundUniqueInput = {
    merchantId: string;
    mediaId: string;
};
export type PostProductMappingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    merchantId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    postUrl?: Prisma.SortOrder;
    mediaId?: Prisma.SortOrder;
    shopifyProductId?: Prisma.SortOrder;
    productTitle?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PostProductMappingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    merchantId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    postUrl?: Prisma.SortOrder;
    mediaId?: Prisma.SortOrder;
    shopifyProductId?: Prisma.SortOrder;
    productTitle?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PostProductMappingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    merchantId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    postUrl?: Prisma.SortOrder;
    mediaId?: Prisma.SortOrder;
    shopifyProductId?: Prisma.SortOrder;
    productTitle?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PostProductMappingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    merchantId?: boolean;
    platform?: boolean;
    postUrl?: boolean;
    mediaId?: boolean;
    shopifyProductId?: boolean;
    productTitle?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["postProductMapping"]>;
export type PostProductMappingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    merchantId?: boolean;
    platform?: boolean;
    postUrl?: boolean;
    mediaId?: boolean;
    shopifyProductId?: boolean;
    productTitle?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["postProductMapping"]>;
export type PostProductMappingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    merchantId?: boolean;
    platform?: boolean;
    postUrl?: boolean;
    mediaId?: boolean;
    shopifyProductId?: boolean;
    productTitle?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["postProductMapping"]>;
export type PostProductMappingSelectScalar = {
    id?: boolean;
    merchantId?: boolean;
    platform?: boolean;
    postUrl?: boolean;
    mediaId?: boolean;
    shopifyProductId?: boolean;
    productTitle?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PostProductMappingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "merchantId" | "platform" | "postUrl" | "mediaId" | "shopifyProductId" | "productTitle" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["postProductMapping"]>;
export type $PostProductMappingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PostProductMapping";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        merchantId: string;
        platform: string;
        postUrl: string | null;
        mediaId: string;
        shopifyProductId: string;
        productTitle: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["postProductMapping"]>;
    composites: {};
};
export type PostProductMappingGetPayload<S extends boolean | null | undefined | PostProductMappingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PostProductMappingPayload, S>;
export type PostProductMappingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PostProductMappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PostProductMappingCountAggregateInputType | true;
};
export interface PostProductMappingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PostProductMapping'];
        meta: {
            name: 'PostProductMapping';
        };
    };
    findUnique<T extends PostProductMappingFindUniqueArgs>(args: Prisma.SelectSubset<T, PostProductMappingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PostProductMappingClient<runtime.Types.Result.GetResult<Prisma.$PostProductMappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PostProductMappingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PostProductMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PostProductMappingClient<runtime.Types.Result.GetResult<Prisma.$PostProductMappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PostProductMappingFindFirstArgs>(args?: Prisma.SelectSubset<T, PostProductMappingFindFirstArgs<ExtArgs>>): Prisma.Prisma__PostProductMappingClient<runtime.Types.Result.GetResult<Prisma.$PostProductMappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PostProductMappingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PostProductMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PostProductMappingClient<runtime.Types.Result.GetResult<Prisma.$PostProductMappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PostProductMappingFindManyArgs>(args?: Prisma.SelectSubset<T, PostProductMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PostProductMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PostProductMappingCreateArgs>(args: Prisma.SelectSubset<T, PostProductMappingCreateArgs<ExtArgs>>): Prisma.Prisma__PostProductMappingClient<runtime.Types.Result.GetResult<Prisma.$PostProductMappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PostProductMappingCreateManyArgs>(args?: Prisma.SelectSubset<T, PostProductMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PostProductMappingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PostProductMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PostProductMappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PostProductMappingDeleteArgs>(args: Prisma.SelectSubset<T, PostProductMappingDeleteArgs<ExtArgs>>): Prisma.Prisma__PostProductMappingClient<runtime.Types.Result.GetResult<Prisma.$PostProductMappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PostProductMappingUpdateArgs>(args: Prisma.SelectSubset<T, PostProductMappingUpdateArgs<ExtArgs>>): Prisma.Prisma__PostProductMappingClient<runtime.Types.Result.GetResult<Prisma.$PostProductMappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PostProductMappingDeleteManyArgs>(args?: Prisma.SelectSubset<T, PostProductMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PostProductMappingUpdateManyArgs>(args: Prisma.SelectSubset<T, PostProductMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PostProductMappingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PostProductMappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PostProductMappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PostProductMappingUpsertArgs>(args: Prisma.SelectSubset<T, PostProductMappingUpsertArgs<ExtArgs>>): Prisma.Prisma__PostProductMappingClient<runtime.Types.Result.GetResult<Prisma.$PostProductMappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PostProductMappingCountArgs>(args?: Prisma.Subset<T, PostProductMappingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PostProductMappingCountAggregateOutputType> : number>;
    aggregate<T extends PostProductMappingAggregateArgs>(args: Prisma.Subset<T, PostProductMappingAggregateArgs>): Prisma.PrismaPromise<GetPostProductMappingAggregateType<T>>;
    groupBy<T extends PostProductMappingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PostProductMappingGroupByArgs['orderBy'];
    } : {
        orderBy?: PostProductMappingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PostProductMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostProductMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PostProductMappingFieldRefs;
}
export interface Prisma__PostProductMappingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PostProductMappingFieldRefs {
    readonly id: Prisma.FieldRef<"PostProductMapping", 'String'>;
    readonly merchantId: Prisma.FieldRef<"PostProductMapping", 'String'>;
    readonly platform: Prisma.FieldRef<"PostProductMapping", 'String'>;
    readonly postUrl: Prisma.FieldRef<"PostProductMapping", 'String'>;
    readonly mediaId: Prisma.FieldRef<"PostProductMapping", 'String'>;
    readonly shopifyProductId: Prisma.FieldRef<"PostProductMapping", 'String'>;
    readonly productTitle: Prisma.FieldRef<"PostProductMapping", 'String'>;
    readonly isActive: Prisma.FieldRef<"PostProductMapping", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"PostProductMapping", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PostProductMapping", 'DateTime'>;
}
export type PostProductMappingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostProductMappingSelect<ExtArgs> | null;
    omit?: Prisma.PostProductMappingOmit<ExtArgs> | null;
    where: Prisma.PostProductMappingWhereUniqueInput;
};
export type PostProductMappingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostProductMappingSelect<ExtArgs> | null;
    omit?: Prisma.PostProductMappingOmit<ExtArgs> | null;
    where: Prisma.PostProductMappingWhereUniqueInput;
};
export type PostProductMappingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostProductMappingSelect<ExtArgs> | null;
    omit?: Prisma.PostProductMappingOmit<ExtArgs> | null;
    where?: Prisma.PostProductMappingWhereInput;
    orderBy?: Prisma.PostProductMappingOrderByWithRelationInput | Prisma.PostProductMappingOrderByWithRelationInput[];
    cursor?: Prisma.PostProductMappingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PostProductMappingScalarFieldEnum | Prisma.PostProductMappingScalarFieldEnum[];
};
export type PostProductMappingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostProductMappingSelect<ExtArgs> | null;
    omit?: Prisma.PostProductMappingOmit<ExtArgs> | null;
    where?: Prisma.PostProductMappingWhereInput;
    orderBy?: Prisma.PostProductMappingOrderByWithRelationInput | Prisma.PostProductMappingOrderByWithRelationInput[];
    cursor?: Prisma.PostProductMappingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PostProductMappingScalarFieldEnum | Prisma.PostProductMappingScalarFieldEnum[];
};
export type PostProductMappingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostProductMappingSelect<ExtArgs> | null;
    omit?: Prisma.PostProductMappingOmit<ExtArgs> | null;
    where?: Prisma.PostProductMappingWhereInput;
    orderBy?: Prisma.PostProductMappingOrderByWithRelationInput | Prisma.PostProductMappingOrderByWithRelationInput[];
    cursor?: Prisma.PostProductMappingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PostProductMappingScalarFieldEnum | Prisma.PostProductMappingScalarFieldEnum[];
};
export type PostProductMappingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostProductMappingSelect<ExtArgs> | null;
    omit?: Prisma.PostProductMappingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PostProductMappingCreateInput, Prisma.PostProductMappingUncheckedCreateInput>;
};
export type PostProductMappingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PostProductMappingCreateManyInput | Prisma.PostProductMappingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PostProductMappingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostProductMappingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PostProductMappingOmit<ExtArgs> | null;
    data: Prisma.PostProductMappingCreateManyInput | Prisma.PostProductMappingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PostProductMappingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostProductMappingSelect<ExtArgs> | null;
    omit?: Prisma.PostProductMappingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PostProductMappingUpdateInput, Prisma.PostProductMappingUncheckedUpdateInput>;
    where: Prisma.PostProductMappingWhereUniqueInput;
};
export type PostProductMappingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PostProductMappingUpdateManyMutationInput, Prisma.PostProductMappingUncheckedUpdateManyInput>;
    where?: Prisma.PostProductMappingWhereInput;
    limit?: number;
};
export type PostProductMappingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostProductMappingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PostProductMappingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PostProductMappingUpdateManyMutationInput, Prisma.PostProductMappingUncheckedUpdateManyInput>;
    where?: Prisma.PostProductMappingWhereInput;
    limit?: number;
};
export type PostProductMappingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostProductMappingSelect<ExtArgs> | null;
    omit?: Prisma.PostProductMappingOmit<ExtArgs> | null;
    where: Prisma.PostProductMappingWhereUniqueInput;
    create: Prisma.XOR<Prisma.PostProductMappingCreateInput, Prisma.PostProductMappingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PostProductMappingUpdateInput, Prisma.PostProductMappingUncheckedUpdateInput>;
};
export type PostProductMappingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostProductMappingSelect<ExtArgs> | null;
    omit?: Prisma.PostProductMappingOmit<ExtArgs> | null;
    where: Prisma.PostProductMappingWhereUniqueInput;
};
export type PostProductMappingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PostProductMappingWhereInput;
    limit?: number;
};
export type PostProductMappingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostProductMappingSelect<ExtArgs> | null;
    omit?: Prisma.PostProductMappingOmit<ExtArgs> | null;
};
export {};

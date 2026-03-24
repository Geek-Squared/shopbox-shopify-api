import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type CommentTriggerModel = runtime.Types.Result.DefaultSelection<Prisma.$CommentTriggerPayload>;
export type AggregateCommentTrigger = {
    _count: CommentTriggerCountAggregateOutputType | null;
    _avg: CommentTriggerAvgAggregateOutputType | null;
    _sum: CommentTriggerSumAggregateOutputType | null;
    _min: CommentTriggerMinAggregateOutputType | null;
    _max: CommentTriggerMaxAggregateOutputType | null;
};
export type CommentTriggerAvgAggregateOutputType = {
    triggerCount: number | null;
};
export type CommentTriggerSumAggregateOutputType = {
    triggerCount: number | null;
};
export type CommentTriggerMinAggregateOutputType = {
    id: string | null;
    merchantId: string | null;
    keyword: string | null;
    replyComment: boolean | null;
    isActive: boolean | null;
    triggerCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    templateMessage: string | null;
};
export type CommentTriggerMaxAggregateOutputType = {
    id: string | null;
    merchantId: string | null;
    keyword: string | null;
    replyComment: boolean | null;
    isActive: boolean | null;
    triggerCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    templateMessage: string | null;
};
export type CommentTriggerCountAggregateOutputType = {
    id: number;
    merchantId: number;
    keyword: number;
    replyComment: number;
    isActive: number;
    triggerCount: number;
    createdAt: number;
    updatedAt: number;
    templateMessage: number;
    _all: number;
};
export type CommentTriggerAvgAggregateInputType = {
    triggerCount?: true;
};
export type CommentTriggerSumAggregateInputType = {
    triggerCount?: true;
};
export type CommentTriggerMinAggregateInputType = {
    id?: true;
    merchantId?: true;
    keyword?: true;
    replyComment?: true;
    isActive?: true;
    triggerCount?: true;
    createdAt?: true;
    updatedAt?: true;
    templateMessage?: true;
};
export type CommentTriggerMaxAggregateInputType = {
    id?: true;
    merchantId?: true;
    keyword?: true;
    replyComment?: true;
    isActive?: true;
    triggerCount?: true;
    createdAt?: true;
    updatedAt?: true;
    templateMessage?: true;
};
export type CommentTriggerCountAggregateInputType = {
    id?: true;
    merchantId?: true;
    keyword?: true;
    replyComment?: true;
    isActive?: true;
    triggerCount?: true;
    createdAt?: true;
    updatedAt?: true;
    templateMessage?: true;
    _all?: true;
};
export type CommentTriggerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentTriggerWhereInput;
    orderBy?: Prisma.CommentTriggerOrderByWithRelationInput | Prisma.CommentTriggerOrderByWithRelationInput[];
    cursor?: Prisma.CommentTriggerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CommentTriggerCountAggregateInputType;
    _avg?: CommentTriggerAvgAggregateInputType;
    _sum?: CommentTriggerSumAggregateInputType;
    _min?: CommentTriggerMinAggregateInputType;
    _max?: CommentTriggerMaxAggregateInputType;
};
export type GetCommentTriggerAggregateType<T extends CommentTriggerAggregateArgs> = {
    [P in keyof T & keyof AggregateCommentTrigger]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCommentTrigger[P]> : Prisma.GetScalarType<T[P], AggregateCommentTrigger[P]>;
};
export type CommentTriggerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentTriggerWhereInput;
    orderBy?: Prisma.CommentTriggerOrderByWithAggregationInput | Prisma.CommentTriggerOrderByWithAggregationInput[];
    by: Prisma.CommentTriggerScalarFieldEnum[] | Prisma.CommentTriggerScalarFieldEnum;
    having?: Prisma.CommentTriggerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentTriggerCountAggregateInputType | true;
    _avg?: CommentTriggerAvgAggregateInputType;
    _sum?: CommentTriggerSumAggregateInputType;
    _min?: CommentTriggerMinAggregateInputType;
    _max?: CommentTriggerMaxAggregateInputType;
};
export type CommentTriggerGroupByOutputType = {
    id: string;
    merchantId: string;
    keyword: string;
    replyComment: boolean;
    isActive: boolean;
    triggerCount: number;
    createdAt: Date;
    updatedAt: Date;
    templateMessage: string | null;
    _count: CommentTriggerCountAggregateOutputType | null;
    _avg: CommentTriggerAvgAggregateOutputType | null;
    _sum: CommentTriggerSumAggregateOutputType | null;
    _min: CommentTriggerMinAggregateOutputType | null;
    _max: CommentTriggerMaxAggregateOutputType | null;
};
type GetCommentTriggerGroupByPayload<T extends CommentTriggerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommentTriggerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommentTriggerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommentTriggerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommentTriggerGroupByOutputType[P]>;
}>>;
export type CommentTriggerWhereInput = {
    AND?: Prisma.CommentTriggerWhereInput | Prisma.CommentTriggerWhereInput[];
    OR?: Prisma.CommentTriggerWhereInput[];
    NOT?: Prisma.CommentTriggerWhereInput | Prisma.CommentTriggerWhereInput[];
    id?: Prisma.StringFilter<"CommentTrigger"> | string;
    merchantId?: Prisma.StringFilter<"CommentTrigger"> | string;
    keyword?: Prisma.StringFilter<"CommentTrigger"> | string;
    replyComment?: Prisma.BoolFilter<"CommentTrigger"> | boolean;
    isActive?: Prisma.BoolFilter<"CommentTrigger"> | boolean;
    triggerCount?: Prisma.IntFilter<"CommentTrigger"> | number;
    createdAt?: Prisma.DateTimeFilter<"CommentTrigger"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CommentTrigger"> | Date | string;
    templateMessage?: Prisma.StringNullableFilter<"CommentTrigger"> | string | null;
};
export type CommentTriggerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    merchantId?: Prisma.SortOrder;
    keyword?: Prisma.SortOrder;
    replyComment?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    triggerCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    templateMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type CommentTriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    merchantId_keyword?: Prisma.CommentTriggerMerchantIdKeywordCompoundUniqueInput;
    AND?: Prisma.CommentTriggerWhereInput | Prisma.CommentTriggerWhereInput[];
    OR?: Prisma.CommentTriggerWhereInput[];
    NOT?: Prisma.CommentTriggerWhereInput | Prisma.CommentTriggerWhereInput[];
    merchantId?: Prisma.StringFilter<"CommentTrigger"> | string;
    keyword?: Prisma.StringFilter<"CommentTrigger"> | string;
    replyComment?: Prisma.BoolFilter<"CommentTrigger"> | boolean;
    isActive?: Prisma.BoolFilter<"CommentTrigger"> | boolean;
    triggerCount?: Prisma.IntFilter<"CommentTrigger"> | number;
    createdAt?: Prisma.DateTimeFilter<"CommentTrigger"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CommentTrigger"> | Date | string;
    templateMessage?: Prisma.StringNullableFilter<"CommentTrigger"> | string | null;
}, "id" | "merchantId_keyword">;
export type CommentTriggerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    merchantId?: Prisma.SortOrder;
    keyword?: Prisma.SortOrder;
    replyComment?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    triggerCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    templateMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CommentTriggerCountOrderByAggregateInput;
    _avg?: Prisma.CommentTriggerAvgOrderByAggregateInput;
    _max?: Prisma.CommentTriggerMaxOrderByAggregateInput;
    _min?: Prisma.CommentTriggerMinOrderByAggregateInput;
    _sum?: Prisma.CommentTriggerSumOrderByAggregateInput;
};
export type CommentTriggerScalarWhereWithAggregatesInput = {
    AND?: Prisma.CommentTriggerScalarWhereWithAggregatesInput | Prisma.CommentTriggerScalarWhereWithAggregatesInput[];
    OR?: Prisma.CommentTriggerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CommentTriggerScalarWhereWithAggregatesInput | Prisma.CommentTriggerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CommentTrigger"> | string;
    merchantId?: Prisma.StringWithAggregatesFilter<"CommentTrigger"> | string;
    keyword?: Prisma.StringWithAggregatesFilter<"CommentTrigger"> | string;
    replyComment?: Prisma.BoolWithAggregatesFilter<"CommentTrigger"> | boolean;
    isActive?: Prisma.BoolWithAggregatesFilter<"CommentTrigger"> | boolean;
    triggerCount?: Prisma.IntWithAggregatesFilter<"CommentTrigger"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CommentTrigger"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CommentTrigger"> | Date | string;
    templateMessage?: Prisma.StringNullableWithAggregatesFilter<"CommentTrigger"> | string | null;
};
export type CommentTriggerCreateInput = {
    id?: string;
    merchantId: string;
    keyword: string;
    replyComment?: boolean;
    isActive?: boolean;
    triggerCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    templateMessage?: string | null;
};
export type CommentTriggerUncheckedCreateInput = {
    id?: string;
    merchantId: string;
    keyword: string;
    replyComment?: boolean;
    isActive?: boolean;
    triggerCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    templateMessage?: string | null;
};
export type CommentTriggerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchantId?: Prisma.StringFieldUpdateOperationsInput | string;
    keyword?: Prisma.StringFieldUpdateOperationsInput | string;
    replyComment?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    triggerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    templateMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommentTriggerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchantId?: Prisma.StringFieldUpdateOperationsInput | string;
    keyword?: Prisma.StringFieldUpdateOperationsInput | string;
    replyComment?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    triggerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    templateMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommentTriggerCreateManyInput = {
    id?: string;
    merchantId: string;
    keyword: string;
    replyComment?: boolean;
    isActive?: boolean;
    triggerCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    templateMessage?: string | null;
};
export type CommentTriggerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchantId?: Prisma.StringFieldUpdateOperationsInput | string;
    keyword?: Prisma.StringFieldUpdateOperationsInput | string;
    replyComment?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    triggerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    templateMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommentTriggerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchantId?: Prisma.StringFieldUpdateOperationsInput | string;
    keyword?: Prisma.StringFieldUpdateOperationsInput | string;
    replyComment?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    triggerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    templateMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommentTriggerMerchantIdKeywordCompoundUniqueInput = {
    merchantId: string;
    keyword: string;
};
export type CommentTriggerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    merchantId?: Prisma.SortOrder;
    keyword?: Prisma.SortOrder;
    replyComment?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    triggerCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    templateMessage?: Prisma.SortOrder;
};
export type CommentTriggerAvgOrderByAggregateInput = {
    triggerCount?: Prisma.SortOrder;
};
export type CommentTriggerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    merchantId?: Prisma.SortOrder;
    keyword?: Prisma.SortOrder;
    replyComment?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    triggerCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    templateMessage?: Prisma.SortOrder;
};
export type CommentTriggerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    merchantId?: Prisma.SortOrder;
    keyword?: Prisma.SortOrder;
    replyComment?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    triggerCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    templateMessage?: Prisma.SortOrder;
};
export type CommentTriggerSumOrderByAggregateInput = {
    triggerCount?: Prisma.SortOrder;
};
export type CommentTriggerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    merchantId?: boolean;
    keyword?: boolean;
    replyComment?: boolean;
    isActive?: boolean;
    triggerCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    templateMessage?: boolean;
}, ExtArgs["result"]["commentTrigger"]>;
export type CommentTriggerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    merchantId?: boolean;
    keyword?: boolean;
    replyComment?: boolean;
    isActive?: boolean;
    triggerCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    templateMessage?: boolean;
}, ExtArgs["result"]["commentTrigger"]>;
export type CommentTriggerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    merchantId?: boolean;
    keyword?: boolean;
    replyComment?: boolean;
    isActive?: boolean;
    triggerCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    templateMessage?: boolean;
}, ExtArgs["result"]["commentTrigger"]>;
export type CommentTriggerSelectScalar = {
    id?: boolean;
    merchantId?: boolean;
    keyword?: boolean;
    replyComment?: boolean;
    isActive?: boolean;
    triggerCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    templateMessage?: boolean;
};
export type CommentTriggerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "merchantId" | "keyword" | "replyComment" | "isActive" | "triggerCount" | "createdAt" | "updatedAt" | "templateMessage", ExtArgs["result"]["commentTrigger"]>;
export type $CommentTriggerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CommentTrigger";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        merchantId: string;
        keyword: string;
        replyComment: boolean;
        isActive: boolean;
        triggerCount: number;
        createdAt: Date;
        updatedAt: Date;
        templateMessage: string | null;
    }, ExtArgs["result"]["commentTrigger"]>;
    composites: {};
};
export type CommentTriggerGetPayload<S extends boolean | null | undefined | CommentTriggerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CommentTriggerPayload, S>;
export type CommentTriggerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CommentTriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommentTriggerCountAggregateInputType | true;
};
export interface CommentTriggerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CommentTrigger'];
        meta: {
            name: 'CommentTrigger';
        };
    };
    findUnique<T extends CommentTriggerFindUniqueArgs>(args: Prisma.SelectSubset<T, CommentTriggerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CommentTriggerClient<runtime.Types.Result.GetResult<Prisma.$CommentTriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CommentTriggerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CommentTriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommentTriggerClient<runtime.Types.Result.GetResult<Prisma.$CommentTriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CommentTriggerFindFirstArgs>(args?: Prisma.SelectSubset<T, CommentTriggerFindFirstArgs<ExtArgs>>): Prisma.Prisma__CommentTriggerClient<runtime.Types.Result.GetResult<Prisma.$CommentTriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CommentTriggerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CommentTriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommentTriggerClient<runtime.Types.Result.GetResult<Prisma.$CommentTriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CommentTriggerFindManyArgs>(args?: Prisma.SelectSubset<T, CommentTriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentTriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CommentTriggerCreateArgs>(args: Prisma.SelectSubset<T, CommentTriggerCreateArgs<ExtArgs>>): Prisma.Prisma__CommentTriggerClient<runtime.Types.Result.GetResult<Prisma.$CommentTriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CommentTriggerCreateManyArgs>(args?: Prisma.SelectSubset<T, CommentTriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CommentTriggerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CommentTriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentTriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CommentTriggerDeleteArgs>(args: Prisma.SelectSubset<T, CommentTriggerDeleteArgs<ExtArgs>>): Prisma.Prisma__CommentTriggerClient<runtime.Types.Result.GetResult<Prisma.$CommentTriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CommentTriggerUpdateArgs>(args: Prisma.SelectSubset<T, CommentTriggerUpdateArgs<ExtArgs>>): Prisma.Prisma__CommentTriggerClient<runtime.Types.Result.GetResult<Prisma.$CommentTriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CommentTriggerDeleteManyArgs>(args?: Prisma.SelectSubset<T, CommentTriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CommentTriggerUpdateManyArgs>(args: Prisma.SelectSubset<T, CommentTriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CommentTriggerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CommentTriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentTriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CommentTriggerUpsertArgs>(args: Prisma.SelectSubset<T, CommentTriggerUpsertArgs<ExtArgs>>): Prisma.Prisma__CommentTriggerClient<runtime.Types.Result.GetResult<Prisma.$CommentTriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CommentTriggerCountArgs>(args?: Prisma.Subset<T, CommentTriggerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommentTriggerCountAggregateOutputType> : number>;
    aggregate<T extends CommentTriggerAggregateArgs>(args: Prisma.Subset<T, CommentTriggerAggregateArgs>): Prisma.PrismaPromise<GetCommentTriggerAggregateType<T>>;
    groupBy<T extends CommentTriggerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CommentTriggerGroupByArgs['orderBy'];
    } : {
        orderBy?: CommentTriggerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CommentTriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CommentTriggerFieldRefs;
}
export interface Prisma__CommentTriggerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CommentTriggerFieldRefs {
    readonly id: Prisma.FieldRef<"CommentTrigger", 'String'>;
    readonly merchantId: Prisma.FieldRef<"CommentTrigger", 'String'>;
    readonly keyword: Prisma.FieldRef<"CommentTrigger", 'String'>;
    readonly replyComment: Prisma.FieldRef<"CommentTrigger", 'Boolean'>;
    readonly isActive: Prisma.FieldRef<"CommentTrigger", 'Boolean'>;
    readonly triggerCount: Prisma.FieldRef<"CommentTrigger", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"CommentTrigger", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CommentTrigger", 'DateTime'>;
    readonly templateMessage: Prisma.FieldRef<"CommentTrigger", 'String'>;
}
export type CommentTriggerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentTriggerSelect<ExtArgs> | null;
    omit?: Prisma.CommentTriggerOmit<ExtArgs> | null;
    where: Prisma.CommentTriggerWhereUniqueInput;
};
export type CommentTriggerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentTriggerSelect<ExtArgs> | null;
    omit?: Prisma.CommentTriggerOmit<ExtArgs> | null;
    where: Prisma.CommentTriggerWhereUniqueInput;
};
export type CommentTriggerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentTriggerSelect<ExtArgs> | null;
    omit?: Prisma.CommentTriggerOmit<ExtArgs> | null;
    where?: Prisma.CommentTriggerWhereInput;
    orderBy?: Prisma.CommentTriggerOrderByWithRelationInput | Prisma.CommentTriggerOrderByWithRelationInput[];
    cursor?: Prisma.CommentTriggerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentTriggerScalarFieldEnum | Prisma.CommentTriggerScalarFieldEnum[];
};
export type CommentTriggerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentTriggerSelect<ExtArgs> | null;
    omit?: Prisma.CommentTriggerOmit<ExtArgs> | null;
    where?: Prisma.CommentTriggerWhereInput;
    orderBy?: Prisma.CommentTriggerOrderByWithRelationInput | Prisma.CommentTriggerOrderByWithRelationInput[];
    cursor?: Prisma.CommentTriggerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentTriggerScalarFieldEnum | Prisma.CommentTriggerScalarFieldEnum[];
};
export type CommentTriggerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentTriggerSelect<ExtArgs> | null;
    omit?: Prisma.CommentTriggerOmit<ExtArgs> | null;
    where?: Prisma.CommentTriggerWhereInput;
    orderBy?: Prisma.CommentTriggerOrderByWithRelationInput | Prisma.CommentTriggerOrderByWithRelationInput[];
    cursor?: Prisma.CommentTriggerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentTriggerScalarFieldEnum | Prisma.CommentTriggerScalarFieldEnum[];
};
export type CommentTriggerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentTriggerSelect<ExtArgs> | null;
    omit?: Prisma.CommentTriggerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommentTriggerCreateInput, Prisma.CommentTriggerUncheckedCreateInput>;
};
export type CommentTriggerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CommentTriggerCreateManyInput | Prisma.CommentTriggerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CommentTriggerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentTriggerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CommentTriggerOmit<ExtArgs> | null;
    data: Prisma.CommentTriggerCreateManyInput | Prisma.CommentTriggerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CommentTriggerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentTriggerSelect<ExtArgs> | null;
    omit?: Prisma.CommentTriggerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommentTriggerUpdateInput, Prisma.CommentTriggerUncheckedUpdateInput>;
    where: Prisma.CommentTriggerWhereUniqueInput;
};
export type CommentTriggerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CommentTriggerUpdateManyMutationInput, Prisma.CommentTriggerUncheckedUpdateManyInput>;
    where?: Prisma.CommentTriggerWhereInput;
    limit?: number;
};
export type CommentTriggerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentTriggerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CommentTriggerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommentTriggerUpdateManyMutationInput, Prisma.CommentTriggerUncheckedUpdateManyInput>;
    where?: Prisma.CommentTriggerWhereInput;
    limit?: number;
};
export type CommentTriggerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentTriggerSelect<ExtArgs> | null;
    omit?: Prisma.CommentTriggerOmit<ExtArgs> | null;
    where: Prisma.CommentTriggerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommentTriggerCreateInput, Prisma.CommentTriggerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CommentTriggerUpdateInput, Prisma.CommentTriggerUncheckedUpdateInput>;
};
export type CommentTriggerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentTriggerSelect<ExtArgs> | null;
    omit?: Prisma.CommentTriggerOmit<ExtArgs> | null;
    where: Prisma.CommentTriggerWhereUniqueInput;
};
export type CommentTriggerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentTriggerWhereInput;
    limit?: number;
};
export type CommentTriggerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentTriggerSelect<ExtArgs> | null;
    omit?: Prisma.CommentTriggerOmit<ExtArgs> | null;
};
export {};

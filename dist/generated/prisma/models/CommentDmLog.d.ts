import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type CommentDmLogModel = runtime.Types.Result.DefaultSelection<Prisma.$CommentDmLogPayload>;
export type AggregateCommentDmLog = {
    _count: CommentDmLogCountAggregateOutputType | null;
    _min: CommentDmLogMinAggregateOutputType | null;
    _max: CommentDmLogMaxAggregateOutputType | null;
};
export type CommentDmLogMinAggregateOutputType = {
    id: string | null;
    merchantId: string | null;
    commenterId: string | null;
    mediaId: string | null;
    keyword: string | null;
    sentAt: Date | null;
};
export type CommentDmLogMaxAggregateOutputType = {
    id: string | null;
    merchantId: string | null;
    commenterId: string | null;
    mediaId: string | null;
    keyword: string | null;
    sentAt: Date | null;
};
export type CommentDmLogCountAggregateOutputType = {
    id: number;
    merchantId: number;
    commenterId: number;
    mediaId: number;
    keyword: number;
    sentAt: number;
    _all: number;
};
export type CommentDmLogMinAggregateInputType = {
    id?: true;
    merchantId?: true;
    commenterId?: true;
    mediaId?: true;
    keyword?: true;
    sentAt?: true;
};
export type CommentDmLogMaxAggregateInputType = {
    id?: true;
    merchantId?: true;
    commenterId?: true;
    mediaId?: true;
    keyword?: true;
    sentAt?: true;
};
export type CommentDmLogCountAggregateInputType = {
    id?: true;
    merchantId?: true;
    commenterId?: true;
    mediaId?: true;
    keyword?: true;
    sentAt?: true;
    _all?: true;
};
export type CommentDmLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentDmLogWhereInput;
    orderBy?: Prisma.CommentDmLogOrderByWithRelationInput | Prisma.CommentDmLogOrderByWithRelationInput[];
    cursor?: Prisma.CommentDmLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CommentDmLogCountAggregateInputType;
    _min?: CommentDmLogMinAggregateInputType;
    _max?: CommentDmLogMaxAggregateInputType;
};
export type GetCommentDmLogAggregateType<T extends CommentDmLogAggregateArgs> = {
    [P in keyof T & keyof AggregateCommentDmLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCommentDmLog[P]> : Prisma.GetScalarType<T[P], AggregateCommentDmLog[P]>;
};
export type CommentDmLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentDmLogWhereInput;
    orderBy?: Prisma.CommentDmLogOrderByWithAggregationInput | Prisma.CommentDmLogOrderByWithAggregationInput[];
    by: Prisma.CommentDmLogScalarFieldEnum[] | Prisma.CommentDmLogScalarFieldEnum;
    having?: Prisma.CommentDmLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentDmLogCountAggregateInputType | true;
    _min?: CommentDmLogMinAggregateInputType;
    _max?: CommentDmLogMaxAggregateInputType;
};
export type CommentDmLogGroupByOutputType = {
    id: string;
    merchantId: string;
    commenterId: string;
    mediaId: string;
    keyword: string;
    sentAt: Date;
    _count: CommentDmLogCountAggregateOutputType | null;
    _min: CommentDmLogMinAggregateOutputType | null;
    _max: CommentDmLogMaxAggregateOutputType | null;
};
type GetCommentDmLogGroupByPayload<T extends CommentDmLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommentDmLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommentDmLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommentDmLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommentDmLogGroupByOutputType[P]>;
}>>;
export type CommentDmLogWhereInput = {
    AND?: Prisma.CommentDmLogWhereInput | Prisma.CommentDmLogWhereInput[];
    OR?: Prisma.CommentDmLogWhereInput[];
    NOT?: Prisma.CommentDmLogWhereInput | Prisma.CommentDmLogWhereInput[];
    id?: Prisma.StringFilter<"CommentDmLog"> | string;
    merchantId?: Prisma.StringFilter<"CommentDmLog"> | string;
    commenterId?: Prisma.StringFilter<"CommentDmLog"> | string;
    mediaId?: Prisma.StringFilter<"CommentDmLog"> | string;
    keyword?: Prisma.StringFilter<"CommentDmLog"> | string;
    sentAt?: Prisma.DateTimeFilter<"CommentDmLog"> | Date | string;
};
export type CommentDmLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    merchantId?: Prisma.SortOrder;
    commenterId?: Prisma.SortOrder;
    mediaId?: Prisma.SortOrder;
    keyword?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
};
export type CommentDmLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    merchantId_commenterId_mediaId?: Prisma.CommentDmLogMerchantIdCommenterIdMediaIdCompoundUniqueInput;
    AND?: Prisma.CommentDmLogWhereInput | Prisma.CommentDmLogWhereInput[];
    OR?: Prisma.CommentDmLogWhereInput[];
    NOT?: Prisma.CommentDmLogWhereInput | Prisma.CommentDmLogWhereInput[];
    merchantId?: Prisma.StringFilter<"CommentDmLog"> | string;
    commenterId?: Prisma.StringFilter<"CommentDmLog"> | string;
    mediaId?: Prisma.StringFilter<"CommentDmLog"> | string;
    keyword?: Prisma.StringFilter<"CommentDmLog"> | string;
    sentAt?: Prisma.DateTimeFilter<"CommentDmLog"> | Date | string;
}, "id" | "merchantId_commenterId_mediaId">;
export type CommentDmLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    merchantId?: Prisma.SortOrder;
    commenterId?: Prisma.SortOrder;
    mediaId?: Prisma.SortOrder;
    keyword?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    _count?: Prisma.CommentDmLogCountOrderByAggregateInput;
    _max?: Prisma.CommentDmLogMaxOrderByAggregateInput;
    _min?: Prisma.CommentDmLogMinOrderByAggregateInput;
};
export type CommentDmLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.CommentDmLogScalarWhereWithAggregatesInput | Prisma.CommentDmLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.CommentDmLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CommentDmLogScalarWhereWithAggregatesInput | Prisma.CommentDmLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CommentDmLog"> | string;
    merchantId?: Prisma.StringWithAggregatesFilter<"CommentDmLog"> | string;
    commenterId?: Prisma.StringWithAggregatesFilter<"CommentDmLog"> | string;
    mediaId?: Prisma.StringWithAggregatesFilter<"CommentDmLog"> | string;
    keyword?: Prisma.StringWithAggregatesFilter<"CommentDmLog"> | string;
    sentAt?: Prisma.DateTimeWithAggregatesFilter<"CommentDmLog"> | Date | string;
};
export type CommentDmLogCreateInput = {
    id?: string;
    merchantId: string;
    commenterId: string;
    mediaId: string;
    keyword: string;
    sentAt?: Date | string;
};
export type CommentDmLogUncheckedCreateInput = {
    id?: string;
    merchantId: string;
    commenterId: string;
    mediaId: string;
    keyword: string;
    sentAt?: Date | string;
};
export type CommentDmLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchantId?: Prisma.StringFieldUpdateOperationsInput | string;
    commenterId?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaId?: Prisma.StringFieldUpdateOperationsInput | string;
    keyword?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentDmLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchantId?: Prisma.StringFieldUpdateOperationsInput | string;
    commenterId?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaId?: Prisma.StringFieldUpdateOperationsInput | string;
    keyword?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentDmLogCreateManyInput = {
    id?: string;
    merchantId: string;
    commenterId: string;
    mediaId: string;
    keyword: string;
    sentAt?: Date | string;
};
export type CommentDmLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchantId?: Prisma.StringFieldUpdateOperationsInput | string;
    commenterId?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaId?: Prisma.StringFieldUpdateOperationsInput | string;
    keyword?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentDmLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchantId?: Prisma.StringFieldUpdateOperationsInput | string;
    commenterId?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaId?: Prisma.StringFieldUpdateOperationsInput | string;
    keyword?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentDmLogMerchantIdCommenterIdMediaIdCompoundUniqueInput = {
    merchantId: string;
    commenterId: string;
    mediaId: string;
};
export type CommentDmLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    merchantId?: Prisma.SortOrder;
    commenterId?: Prisma.SortOrder;
    mediaId?: Prisma.SortOrder;
    keyword?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
};
export type CommentDmLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    merchantId?: Prisma.SortOrder;
    commenterId?: Prisma.SortOrder;
    mediaId?: Prisma.SortOrder;
    keyword?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
};
export type CommentDmLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    merchantId?: Prisma.SortOrder;
    commenterId?: Prisma.SortOrder;
    mediaId?: Prisma.SortOrder;
    keyword?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
};
export type CommentDmLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    merchantId?: boolean;
    commenterId?: boolean;
    mediaId?: boolean;
    keyword?: boolean;
    sentAt?: boolean;
}, ExtArgs["result"]["commentDmLog"]>;
export type CommentDmLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    merchantId?: boolean;
    commenterId?: boolean;
    mediaId?: boolean;
    keyword?: boolean;
    sentAt?: boolean;
}, ExtArgs["result"]["commentDmLog"]>;
export type CommentDmLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    merchantId?: boolean;
    commenterId?: boolean;
    mediaId?: boolean;
    keyword?: boolean;
    sentAt?: boolean;
}, ExtArgs["result"]["commentDmLog"]>;
export type CommentDmLogSelectScalar = {
    id?: boolean;
    merchantId?: boolean;
    commenterId?: boolean;
    mediaId?: boolean;
    keyword?: boolean;
    sentAt?: boolean;
};
export type CommentDmLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "merchantId" | "commenterId" | "mediaId" | "keyword" | "sentAt", ExtArgs["result"]["commentDmLog"]>;
export type $CommentDmLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CommentDmLog";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        merchantId: string;
        commenterId: string;
        mediaId: string;
        keyword: string;
        sentAt: Date;
    }, ExtArgs["result"]["commentDmLog"]>;
    composites: {};
};
export type CommentDmLogGetPayload<S extends boolean | null | undefined | CommentDmLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CommentDmLogPayload, S>;
export type CommentDmLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CommentDmLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommentDmLogCountAggregateInputType | true;
};
export interface CommentDmLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CommentDmLog'];
        meta: {
            name: 'CommentDmLog';
        };
    };
    findUnique<T extends CommentDmLogFindUniqueArgs>(args: Prisma.SelectSubset<T, CommentDmLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CommentDmLogClient<runtime.Types.Result.GetResult<Prisma.$CommentDmLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CommentDmLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CommentDmLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommentDmLogClient<runtime.Types.Result.GetResult<Prisma.$CommentDmLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CommentDmLogFindFirstArgs>(args?: Prisma.SelectSubset<T, CommentDmLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__CommentDmLogClient<runtime.Types.Result.GetResult<Prisma.$CommentDmLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CommentDmLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CommentDmLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommentDmLogClient<runtime.Types.Result.GetResult<Prisma.$CommentDmLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CommentDmLogFindManyArgs>(args?: Prisma.SelectSubset<T, CommentDmLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentDmLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CommentDmLogCreateArgs>(args: Prisma.SelectSubset<T, CommentDmLogCreateArgs<ExtArgs>>): Prisma.Prisma__CommentDmLogClient<runtime.Types.Result.GetResult<Prisma.$CommentDmLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CommentDmLogCreateManyArgs>(args?: Prisma.SelectSubset<T, CommentDmLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CommentDmLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CommentDmLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentDmLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CommentDmLogDeleteArgs>(args: Prisma.SelectSubset<T, CommentDmLogDeleteArgs<ExtArgs>>): Prisma.Prisma__CommentDmLogClient<runtime.Types.Result.GetResult<Prisma.$CommentDmLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CommentDmLogUpdateArgs>(args: Prisma.SelectSubset<T, CommentDmLogUpdateArgs<ExtArgs>>): Prisma.Prisma__CommentDmLogClient<runtime.Types.Result.GetResult<Prisma.$CommentDmLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CommentDmLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, CommentDmLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CommentDmLogUpdateManyArgs>(args: Prisma.SelectSubset<T, CommentDmLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CommentDmLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CommentDmLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentDmLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CommentDmLogUpsertArgs>(args: Prisma.SelectSubset<T, CommentDmLogUpsertArgs<ExtArgs>>): Prisma.Prisma__CommentDmLogClient<runtime.Types.Result.GetResult<Prisma.$CommentDmLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CommentDmLogCountArgs>(args?: Prisma.Subset<T, CommentDmLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommentDmLogCountAggregateOutputType> : number>;
    aggregate<T extends CommentDmLogAggregateArgs>(args: Prisma.Subset<T, CommentDmLogAggregateArgs>): Prisma.PrismaPromise<GetCommentDmLogAggregateType<T>>;
    groupBy<T extends CommentDmLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CommentDmLogGroupByArgs['orderBy'];
    } : {
        orderBy?: CommentDmLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CommentDmLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentDmLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CommentDmLogFieldRefs;
}
export interface Prisma__CommentDmLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CommentDmLogFieldRefs {
    readonly id: Prisma.FieldRef<"CommentDmLog", 'String'>;
    readonly merchantId: Prisma.FieldRef<"CommentDmLog", 'String'>;
    readonly commenterId: Prisma.FieldRef<"CommentDmLog", 'String'>;
    readonly mediaId: Prisma.FieldRef<"CommentDmLog", 'String'>;
    readonly keyword: Prisma.FieldRef<"CommentDmLog", 'String'>;
    readonly sentAt: Prisma.FieldRef<"CommentDmLog", 'DateTime'>;
}
export type CommentDmLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentDmLogSelect<ExtArgs> | null;
    omit?: Prisma.CommentDmLogOmit<ExtArgs> | null;
    where: Prisma.CommentDmLogWhereUniqueInput;
};
export type CommentDmLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentDmLogSelect<ExtArgs> | null;
    omit?: Prisma.CommentDmLogOmit<ExtArgs> | null;
    where: Prisma.CommentDmLogWhereUniqueInput;
};
export type CommentDmLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentDmLogSelect<ExtArgs> | null;
    omit?: Prisma.CommentDmLogOmit<ExtArgs> | null;
    where?: Prisma.CommentDmLogWhereInput;
    orderBy?: Prisma.CommentDmLogOrderByWithRelationInput | Prisma.CommentDmLogOrderByWithRelationInput[];
    cursor?: Prisma.CommentDmLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentDmLogScalarFieldEnum | Prisma.CommentDmLogScalarFieldEnum[];
};
export type CommentDmLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentDmLogSelect<ExtArgs> | null;
    omit?: Prisma.CommentDmLogOmit<ExtArgs> | null;
    where?: Prisma.CommentDmLogWhereInput;
    orderBy?: Prisma.CommentDmLogOrderByWithRelationInput | Prisma.CommentDmLogOrderByWithRelationInput[];
    cursor?: Prisma.CommentDmLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentDmLogScalarFieldEnum | Prisma.CommentDmLogScalarFieldEnum[];
};
export type CommentDmLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentDmLogSelect<ExtArgs> | null;
    omit?: Prisma.CommentDmLogOmit<ExtArgs> | null;
    where?: Prisma.CommentDmLogWhereInput;
    orderBy?: Prisma.CommentDmLogOrderByWithRelationInput | Prisma.CommentDmLogOrderByWithRelationInput[];
    cursor?: Prisma.CommentDmLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentDmLogScalarFieldEnum | Prisma.CommentDmLogScalarFieldEnum[];
};
export type CommentDmLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentDmLogSelect<ExtArgs> | null;
    omit?: Prisma.CommentDmLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommentDmLogCreateInput, Prisma.CommentDmLogUncheckedCreateInput>;
};
export type CommentDmLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CommentDmLogCreateManyInput | Prisma.CommentDmLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CommentDmLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentDmLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CommentDmLogOmit<ExtArgs> | null;
    data: Prisma.CommentDmLogCreateManyInput | Prisma.CommentDmLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CommentDmLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentDmLogSelect<ExtArgs> | null;
    omit?: Prisma.CommentDmLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommentDmLogUpdateInput, Prisma.CommentDmLogUncheckedUpdateInput>;
    where: Prisma.CommentDmLogWhereUniqueInput;
};
export type CommentDmLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CommentDmLogUpdateManyMutationInput, Prisma.CommentDmLogUncheckedUpdateManyInput>;
    where?: Prisma.CommentDmLogWhereInput;
    limit?: number;
};
export type CommentDmLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentDmLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CommentDmLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommentDmLogUpdateManyMutationInput, Prisma.CommentDmLogUncheckedUpdateManyInput>;
    where?: Prisma.CommentDmLogWhereInput;
    limit?: number;
};
export type CommentDmLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentDmLogSelect<ExtArgs> | null;
    omit?: Prisma.CommentDmLogOmit<ExtArgs> | null;
    where: Prisma.CommentDmLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommentDmLogCreateInput, Prisma.CommentDmLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CommentDmLogUpdateInput, Prisma.CommentDmLogUncheckedUpdateInput>;
};
export type CommentDmLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentDmLogSelect<ExtArgs> | null;
    omit?: Prisma.CommentDmLogOmit<ExtArgs> | null;
    where: Prisma.CommentDmLogWhereUniqueInput;
};
export type CommentDmLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentDmLogWhereInput;
    limit?: number;
};
export type CommentDmLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentDmLogSelect<ExtArgs> | null;
    omit?: Prisma.CommentDmLogOmit<ExtArgs> | null;
};
export {};

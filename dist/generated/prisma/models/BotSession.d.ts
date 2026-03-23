import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type BotSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$BotSessionPayload>;
export type AggregateBotSession = {
    _count: BotSessionCountAggregateOutputType | null;
    _min: BotSessionMinAggregateOutputType | null;
    _max: BotSessionMaxAggregateOutputType | null;
};
export type BotSessionMinAggregateOutputType = {
    id: string | null;
    phoneNumber: string | null;
    state: string | null;
    updatedAt: Date | null;
    createdAt: Date | null;
};
export type BotSessionMaxAggregateOutputType = {
    id: string | null;
    phoneNumber: string | null;
    state: string | null;
    updatedAt: Date | null;
    createdAt: Date | null;
};
export type BotSessionCountAggregateOutputType = {
    id: number;
    phoneNumber: number;
    state: number;
    context: number;
    updatedAt: number;
    createdAt: number;
    _all: number;
};
export type BotSessionMinAggregateInputType = {
    id?: true;
    phoneNumber?: true;
    state?: true;
    updatedAt?: true;
    createdAt?: true;
};
export type BotSessionMaxAggregateInputType = {
    id?: true;
    phoneNumber?: true;
    state?: true;
    updatedAt?: true;
    createdAt?: true;
};
export type BotSessionCountAggregateInputType = {
    id?: true;
    phoneNumber?: true;
    state?: true;
    context?: true;
    updatedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type BotSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BotSessionWhereInput;
    orderBy?: Prisma.BotSessionOrderByWithRelationInput | Prisma.BotSessionOrderByWithRelationInput[];
    cursor?: Prisma.BotSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BotSessionCountAggregateInputType;
    _min?: BotSessionMinAggregateInputType;
    _max?: BotSessionMaxAggregateInputType;
};
export type GetBotSessionAggregateType<T extends BotSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateBotSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBotSession[P]> : Prisma.GetScalarType<T[P], AggregateBotSession[P]>;
};
export type BotSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BotSessionWhereInput;
    orderBy?: Prisma.BotSessionOrderByWithAggregationInput | Prisma.BotSessionOrderByWithAggregationInput[];
    by: Prisma.BotSessionScalarFieldEnum[] | Prisma.BotSessionScalarFieldEnum;
    having?: Prisma.BotSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BotSessionCountAggregateInputType | true;
    _min?: BotSessionMinAggregateInputType;
    _max?: BotSessionMaxAggregateInputType;
};
export type BotSessionGroupByOutputType = {
    id: string;
    phoneNumber: string;
    state: string;
    context: runtime.JsonValue;
    updatedAt: Date;
    createdAt: Date;
    _count: BotSessionCountAggregateOutputType | null;
    _min: BotSessionMinAggregateOutputType | null;
    _max: BotSessionMaxAggregateOutputType | null;
};
type GetBotSessionGroupByPayload<T extends BotSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BotSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BotSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BotSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BotSessionGroupByOutputType[P]>;
}>>;
export type BotSessionWhereInput = {
    AND?: Prisma.BotSessionWhereInput | Prisma.BotSessionWhereInput[];
    OR?: Prisma.BotSessionWhereInput[];
    NOT?: Prisma.BotSessionWhereInput | Prisma.BotSessionWhereInput[];
    id?: Prisma.StringFilter<"BotSession"> | string;
    phoneNumber?: Prisma.StringFilter<"BotSession"> | string;
    state?: Prisma.StringFilter<"BotSession"> | string;
    context?: Prisma.JsonFilter<"BotSession">;
    updatedAt?: Prisma.DateTimeFilter<"BotSession"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"BotSession"> | Date | string;
};
export type BotSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    context?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BotSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    phoneNumber?: string;
    AND?: Prisma.BotSessionWhereInput | Prisma.BotSessionWhereInput[];
    OR?: Prisma.BotSessionWhereInput[];
    NOT?: Prisma.BotSessionWhereInput | Prisma.BotSessionWhereInput[];
    state?: Prisma.StringFilter<"BotSession"> | string;
    context?: Prisma.JsonFilter<"BotSession">;
    updatedAt?: Prisma.DateTimeFilter<"BotSession"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"BotSession"> | Date | string;
}, "id" | "phoneNumber">;
export type BotSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    context?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BotSessionCountOrderByAggregateInput;
    _max?: Prisma.BotSessionMaxOrderByAggregateInput;
    _min?: Prisma.BotSessionMinOrderByAggregateInput;
};
export type BotSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.BotSessionScalarWhereWithAggregatesInput | Prisma.BotSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.BotSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BotSessionScalarWhereWithAggregatesInput | Prisma.BotSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BotSession"> | string;
    phoneNumber?: Prisma.StringWithAggregatesFilter<"BotSession"> | string;
    state?: Prisma.StringWithAggregatesFilter<"BotSession"> | string;
    context?: Prisma.JsonWithAggregatesFilter<"BotSession">;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BotSession"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BotSession"> | Date | string;
};
export type BotSessionCreateInput = {
    id?: string;
    phoneNumber: string;
    state?: string;
    context?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
    createdAt?: Date | string;
};
export type BotSessionUncheckedCreateInput = {
    id?: string;
    phoneNumber: string;
    state?: string;
    context?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
    createdAt?: Date | string;
};
export type BotSessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BotSessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BotSessionCreateManyInput = {
    id?: string;
    phoneNumber: string;
    state?: string;
    context?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
    createdAt?: Date | string;
};
export type BotSessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BotSessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    context?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BotSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    context?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BotSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BotSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BotSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phoneNumber?: boolean;
    state?: boolean;
    context?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["botSession"]>;
export type BotSessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phoneNumber?: boolean;
    state?: boolean;
    context?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["botSession"]>;
export type BotSessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phoneNumber?: boolean;
    state?: boolean;
    context?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["botSession"]>;
export type BotSessionSelectScalar = {
    id?: boolean;
    phoneNumber?: boolean;
    state?: boolean;
    context?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
};
export type BotSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "phoneNumber" | "state" | "context" | "updatedAt" | "createdAt", ExtArgs["result"]["botSession"]>;
export type $BotSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BotSession";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        phoneNumber: string;
        state: string;
        context: runtime.JsonValue;
        updatedAt: Date;
        createdAt: Date;
    }, ExtArgs["result"]["botSession"]>;
    composites: {};
};
export type BotSessionGetPayload<S extends boolean | null | undefined | BotSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BotSessionPayload, S>;
export type BotSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BotSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BotSessionCountAggregateInputType | true;
};
export interface BotSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BotSession'];
        meta: {
            name: 'BotSession';
        };
    };
    findUnique<T extends BotSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, BotSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BotSessionClient<runtime.Types.Result.GetResult<Prisma.$BotSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BotSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BotSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BotSessionClient<runtime.Types.Result.GetResult<Prisma.$BotSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BotSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, BotSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__BotSessionClient<runtime.Types.Result.GetResult<Prisma.$BotSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BotSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BotSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BotSessionClient<runtime.Types.Result.GetResult<Prisma.$BotSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BotSessionFindManyArgs>(args?: Prisma.SelectSubset<T, BotSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BotSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BotSessionCreateArgs>(args: Prisma.SelectSubset<T, BotSessionCreateArgs<ExtArgs>>): Prisma.Prisma__BotSessionClient<runtime.Types.Result.GetResult<Prisma.$BotSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BotSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, BotSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BotSessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BotSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BotSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BotSessionDeleteArgs>(args: Prisma.SelectSubset<T, BotSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__BotSessionClient<runtime.Types.Result.GetResult<Prisma.$BotSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BotSessionUpdateArgs>(args: Prisma.SelectSubset<T, BotSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__BotSessionClient<runtime.Types.Result.GetResult<Prisma.$BotSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BotSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, BotSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BotSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, BotSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BotSessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BotSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BotSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BotSessionUpsertArgs>(args: Prisma.SelectSubset<T, BotSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__BotSessionClient<runtime.Types.Result.GetResult<Prisma.$BotSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BotSessionCountArgs>(args?: Prisma.Subset<T, BotSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BotSessionCountAggregateOutputType> : number>;
    aggregate<T extends BotSessionAggregateArgs>(args: Prisma.Subset<T, BotSessionAggregateArgs>): Prisma.PrismaPromise<GetBotSessionAggregateType<T>>;
    groupBy<T extends BotSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BotSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: BotSessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BotSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBotSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BotSessionFieldRefs;
}
export interface Prisma__BotSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BotSessionFieldRefs {
    readonly id: Prisma.FieldRef<"BotSession", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"BotSession", 'String'>;
    readonly state: Prisma.FieldRef<"BotSession", 'String'>;
    readonly context: Prisma.FieldRef<"BotSession", 'Json'>;
    readonly updatedAt: Prisma.FieldRef<"BotSession", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"BotSession", 'DateTime'>;
}
export type BotSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSessionSelect<ExtArgs> | null;
    omit?: Prisma.BotSessionOmit<ExtArgs> | null;
    where: Prisma.BotSessionWhereUniqueInput;
};
export type BotSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSessionSelect<ExtArgs> | null;
    omit?: Prisma.BotSessionOmit<ExtArgs> | null;
    where: Prisma.BotSessionWhereUniqueInput;
};
export type BotSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSessionSelect<ExtArgs> | null;
    omit?: Prisma.BotSessionOmit<ExtArgs> | null;
    where?: Prisma.BotSessionWhereInput;
    orderBy?: Prisma.BotSessionOrderByWithRelationInput | Prisma.BotSessionOrderByWithRelationInput[];
    cursor?: Prisma.BotSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BotSessionScalarFieldEnum | Prisma.BotSessionScalarFieldEnum[];
};
export type BotSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSessionSelect<ExtArgs> | null;
    omit?: Prisma.BotSessionOmit<ExtArgs> | null;
    where?: Prisma.BotSessionWhereInput;
    orderBy?: Prisma.BotSessionOrderByWithRelationInput | Prisma.BotSessionOrderByWithRelationInput[];
    cursor?: Prisma.BotSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BotSessionScalarFieldEnum | Prisma.BotSessionScalarFieldEnum[];
};
export type BotSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSessionSelect<ExtArgs> | null;
    omit?: Prisma.BotSessionOmit<ExtArgs> | null;
    where?: Prisma.BotSessionWhereInput;
    orderBy?: Prisma.BotSessionOrderByWithRelationInput | Prisma.BotSessionOrderByWithRelationInput[];
    cursor?: Prisma.BotSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BotSessionScalarFieldEnum | Prisma.BotSessionScalarFieldEnum[];
};
export type BotSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSessionSelect<ExtArgs> | null;
    omit?: Prisma.BotSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BotSessionCreateInput, Prisma.BotSessionUncheckedCreateInput>;
};
export type BotSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BotSessionCreateManyInput | Prisma.BotSessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BotSessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BotSessionOmit<ExtArgs> | null;
    data: Prisma.BotSessionCreateManyInput | Prisma.BotSessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BotSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSessionSelect<ExtArgs> | null;
    omit?: Prisma.BotSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BotSessionUpdateInput, Prisma.BotSessionUncheckedUpdateInput>;
    where: Prisma.BotSessionWhereUniqueInput;
};
export type BotSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BotSessionUpdateManyMutationInput, Prisma.BotSessionUncheckedUpdateManyInput>;
    where?: Prisma.BotSessionWhereInput;
    limit?: number;
};
export type BotSessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BotSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BotSessionUpdateManyMutationInput, Prisma.BotSessionUncheckedUpdateManyInput>;
    where?: Prisma.BotSessionWhereInput;
    limit?: number;
};
export type BotSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSessionSelect<ExtArgs> | null;
    omit?: Prisma.BotSessionOmit<ExtArgs> | null;
    where: Prisma.BotSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BotSessionCreateInput, Prisma.BotSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BotSessionUpdateInput, Prisma.BotSessionUncheckedUpdateInput>;
};
export type BotSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSessionSelect<ExtArgs> | null;
    omit?: Prisma.BotSessionOmit<ExtArgs> | null;
    where: Prisma.BotSessionWhereUniqueInput;
};
export type BotSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BotSessionWhereInput;
    limit?: number;
};
export type BotSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSessionSelect<ExtArgs> | null;
    omit?: Prisma.BotSessionOmit<ExtArgs> | null;
};
export {};

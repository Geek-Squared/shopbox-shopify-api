import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type OtpCodeModel = runtime.Types.Result.DefaultSelection<Prisma.$OtpCodePayload>;
export type AggregateOtpCode = {
    _count: OtpCodeCountAggregateOutputType | null;
    _avg: OtpCodeAvgAggregateOutputType | null;
    _sum: OtpCodeSumAggregateOutputType | null;
    _min: OtpCodeMinAggregateOutputType | null;
    _max: OtpCodeMaxAggregateOutputType | null;
};
export type OtpCodeAvgAggregateOutputType = {
    attempts: number | null;
};
export type OtpCodeSumAggregateOutputType = {
    attempts: number | null;
};
export type OtpCodeMinAggregateOutputType = {
    id: string | null;
    phoneNumber: string | null;
    code: string | null;
    purpose: $Enums.OtpPurpose | null;
    isUsed: boolean | null;
    attempts: number | null;
    expiresAt: Date | null;
    createdAt: Date | null;
};
export type OtpCodeMaxAggregateOutputType = {
    id: string | null;
    phoneNumber: string | null;
    code: string | null;
    purpose: $Enums.OtpPurpose | null;
    isUsed: boolean | null;
    attempts: number | null;
    expiresAt: Date | null;
    createdAt: Date | null;
};
export type OtpCodeCountAggregateOutputType = {
    id: number;
    phoneNumber: number;
    code: number;
    purpose: number;
    isUsed: number;
    attempts: number;
    expiresAt: number;
    createdAt: number;
    _all: number;
};
export type OtpCodeAvgAggregateInputType = {
    attempts?: true;
};
export type OtpCodeSumAggregateInputType = {
    attempts?: true;
};
export type OtpCodeMinAggregateInputType = {
    id?: true;
    phoneNumber?: true;
    code?: true;
    purpose?: true;
    isUsed?: true;
    attempts?: true;
    expiresAt?: true;
    createdAt?: true;
};
export type OtpCodeMaxAggregateInputType = {
    id?: true;
    phoneNumber?: true;
    code?: true;
    purpose?: true;
    isUsed?: true;
    attempts?: true;
    expiresAt?: true;
    createdAt?: true;
};
export type OtpCodeCountAggregateInputType = {
    id?: true;
    phoneNumber?: true;
    code?: true;
    purpose?: true;
    isUsed?: true;
    attempts?: true;
    expiresAt?: true;
    createdAt?: true;
    _all?: true;
};
export type OtpCodeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpCodeWhereInput;
    orderBy?: Prisma.OtpCodeOrderByWithRelationInput | Prisma.OtpCodeOrderByWithRelationInput[];
    cursor?: Prisma.OtpCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OtpCodeCountAggregateInputType;
    _avg?: OtpCodeAvgAggregateInputType;
    _sum?: OtpCodeSumAggregateInputType;
    _min?: OtpCodeMinAggregateInputType;
    _max?: OtpCodeMaxAggregateInputType;
};
export type GetOtpCodeAggregateType<T extends OtpCodeAggregateArgs> = {
    [P in keyof T & keyof AggregateOtpCode]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOtpCode[P]> : Prisma.GetScalarType<T[P], AggregateOtpCode[P]>;
};
export type OtpCodeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpCodeWhereInput;
    orderBy?: Prisma.OtpCodeOrderByWithAggregationInput | Prisma.OtpCodeOrderByWithAggregationInput[];
    by: Prisma.OtpCodeScalarFieldEnum[] | Prisma.OtpCodeScalarFieldEnum;
    having?: Prisma.OtpCodeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OtpCodeCountAggregateInputType | true;
    _avg?: OtpCodeAvgAggregateInputType;
    _sum?: OtpCodeSumAggregateInputType;
    _min?: OtpCodeMinAggregateInputType;
    _max?: OtpCodeMaxAggregateInputType;
};
export type OtpCodeGroupByOutputType = {
    id: string;
    phoneNumber: string;
    code: string;
    purpose: $Enums.OtpPurpose;
    isUsed: boolean;
    attempts: number;
    expiresAt: Date;
    createdAt: Date;
    _count: OtpCodeCountAggregateOutputType | null;
    _avg: OtpCodeAvgAggregateOutputType | null;
    _sum: OtpCodeSumAggregateOutputType | null;
    _min: OtpCodeMinAggregateOutputType | null;
    _max: OtpCodeMaxAggregateOutputType | null;
};
type GetOtpCodeGroupByPayload<T extends OtpCodeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OtpCodeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OtpCodeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OtpCodeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OtpCodeGroupByOutputType[P]>;
}>>;
export type OtpCodeWhereInput = {
    AND?: Prisma.OtpCodeWhereInput | Prisma.OtpCodeWhereInput[];
    OR?: Prisma.OtpCodeWhereInput[];
    NOT?: Prisma.OtpCodeWhereInput | Prisma.OtpCodeWhereInput[];
    id?: Prisma.StringFilter<"OtpCode"> | string;
    phoneNumber?: Prisma.StringFilter<"OtpCode"> | string;
    code?: Prisma.StringFilter<"OtpCode"> | string;
    purpose?: Prisma.EnumOtpPurposeFilter<"OtpCode"> | $Enums.OtpPurpose;
    isUsed?: Prisma.BoolFilter<"OtpCode"> | boolean;
    attempts?: Prisma.IntFilter<"OtpCode"> | number;
    expiresAt?: Prisma.DateTimeFilter<"OtpCode"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"OtpCode"> | Date | string;
};
export type OtpCodeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    isUsed?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OtpCodeWhereInput | Prisma.OtpCodeWhereInput[];
    OR?: Prisma.OtpCodeWhereInput[];
    NOT?: Prisma.OtpCodeWhereInput | Prisma.OtpCodeWhereInput[];
    phoneNumber?: Prisma.StringFilter<"OtpCode"> | string;
    code?: Prisma.StringFilter<"OtpCode"> | string;
    purpose?: Prisma.EnumOtpPurposeFilter<"OtpCode"> | $Enums.OtpPurpose;
    isUsed?: Prisma.BoolFilter<"OtpCode"> | boolean;
    attempts?: Prisma.IntFilter<"OtpCode"> | number;
    expiresAt?: Prisma.DateTimeFilter<"OtpCode"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"OtpCode"> | Date | string;
}, "id">;
export type OtpCodeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    isUsed?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.OtpCodeCountOrderByAggregateInput;
    _avg?: Prisma.OtpCodeAvgOrderByAggregateInput;
    _max?: Prisma.OtpCodeMaxOrderByAggregateInput;
    _min?: Prisma.OtpCodeMinOrderByAggregateInput;
    _sum?: Prisma.OtpCodeSumOrderByAggregateInput;
};
export type OtpCodeScalarWhereWithAggregatesInput = {
    AND?: Prisma.OtpCodeScalarWhereWithAggregatesInput | Prisma.OtpCodeScalarWhereWithAggregatesInput[];
    OR?: Prisma.OtpCodeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OtpCodeScalarWhereWithAggregatesInput | Prisma.OtpCodeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OtpCode"> | string;
    phoneNumber?: Prisma.StringWithAggregatesFilter<"OtpCode"> | string;
    code?: Prisma.StringWithAggregatesFilter<"OtpCode"> | string;
    purpose?: Prisma.EnumOtpPurposeWithAggregatesFilter<"OtpCode"> | $Enums.OtpPurpose;
    isUsed?: Prisma.BoolWithAggregatesFilter<"OtpCode"> | boolean;
    attempts?: Prisma.IntWithAggregatesFilter<"OtpCode"> | number;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"OtpCode"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OtpCode"> | Date | string;
};
export type OtpCodeCreateInput = {
    id?: string;
    phoneNumber: string;
    code: string;
    purpose: $Enums.OtpPurpose;
    isUsed?: boolean;
    attempts?: number;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type OtpCodeUncheckedCreateInput = {
    id?: string;
    phoneNumber: string;
    code: string;
    purpose: $Enums.OtpPurpose;
    isUsed?: boolean;
    attempts?: number;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type OtpCodeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose;
    isUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpCodeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose;
    isUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpCodeCreateManyInput = {
    id?: string;
    phoneNumber: string;
    code: string;
    purpose: $Enums.OtpPurpose;
    isUsed?: boolean;
    attempts?: number;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type OtpCodeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose;
    isUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpCodeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose;
    isUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpCodeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    isUsed?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpCodeAvgOrderByAggregateInput = {
    attempts?: Prisma.SortOrder;
};
export type OtpCodeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    isUsed?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpCodeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    isUsed?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpCodeSumOrderByAggregateInput = {
    attempts?: Prisma.SortOrder;
};
export type EnumOtpPurposeFieldUpdateOperationsInput = {
    set?: $Enums.OtpPurpose;
};
export type OtpCodeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phoneNumber?: boolean;
    code?: boolean;
    purpose?: boolean;
    isUsed?: boolean;
    attempts?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["otpCode"]>;
export type OtpCodeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phoneNumber?: boolean;
    code?: boolean;
    purpose?: boolean;
    isUsed?: boolean;
    attempts?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["otpCode"]>;
export type OtpCodeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phoneNumber?: boolean;
    code?: boolean;
    purpose?: boolean;
    isUsed?: boolean;
    attempts?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["otpCode"]>;
export type OtpCodeSelectScalar = {
    id?: boolean;
    phoneNumber?: boolean;
    code?: boolean;
    purpose?: boolean;
    isUsed?: boolean;
    attempts?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
};
export type OtpCodeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "phoneNumber" | "code" | "purpose" | "isUsed" | "attempts" | "expiresAt" | "createdAt", ExtArgs["result"]["otpCode"]>;
export type $OtpCodePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OtpCode";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        phoneNumber: string;
        code: string;
        purpose: $Enums.OtpPurpose;
        isUsed: boolean;
        attempts: number;
        expiresAt: Date;
        createdAt: Date;
    }, ExtArgs["result"]["otpCode"]>;
    composites: {};
};
export type OtpCodeGetPayload<S extends boolean | null | undefined | OtpCodeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OtpCodePayload, S>;
export type OtpCodeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OtpCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OtpCodeCountAggregateInputType | true;
};
export interface OtpCodeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OtpCode'];
        meta: {
            name: 'OtpCode';
        };
    };
    findUnique<T extends OtpCodeFindUniqueArgs>(args: Prisma.SelectSubset<T, OtpCodeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OtpCodeClient<runtime.Types.Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OtpCodeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OtpCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OtpCodeClient<runtime.Types.Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OtpCodeFindFirstArgs>(args?: Prisma.SelectSubset<T, OtpCodeFindFirstArgs<ExtArgs>>): Prisma.Prisma__OtpCodeClient<runtime.Types.Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OtpCodeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OtpCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OtpCodeClient<runtime.Types.Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OtpCodeFindManyArgs>(args?: Prisma.SelectSubset<T, OtpCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OtpCodeCreateArgs>(args: Prisma.SelectSubset<T, OtpCodeCreateArgs<ExtArgs>>): Prisma.Prisma__OtpCodeClient<runtime.Types.Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OtpCodeCreateManyArgs>(args?: Prisma.SelectSubset<T, OtpCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OtpCodeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OtpCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OtpCodeDeleteArgs>(args: Prisma.SelectSubset<T, OtpCodeDeleteArgs<ExtArgs>>): Prisma.Prisma__OtpCodeClient<runtime.Types.Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OtpCodeUpdateArgs>(args: Prisma.SelectSubset<T, OtpCodeUpdateArgs<ExtArgs>>): Prisma.Prisma__OtpCodeClient<runtime.Types.Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OtpCodeDeleteManyArgs>(args?: Prisma.SelectSubset<T, OtpCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OtpCodeUpdateManyArgs>(args: Prisma.SelectSubset<T, OtpCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OtpCodeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OtpCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OtpCodeUpsertArgs>(args: Prisma.SelectSubset<T, OtpCodeUpsertArgs<ExtArgs>>): Prisma.Prisma__OtpCodeClient<runtime.Types.Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OtpCodeCountArgs>(args?: Prisma.Subset<T, OtpCodeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OtpCodeCountAggregateOutputType> : number>;
    aggregate<T extends OtpCodeAggregateArgs>(args: Prisma.Subset<T, OtpCodeAggregateArgs>): Prisma.PrismaPromise<GetOtpCodeAggregateType<T>>;
    groupBy<T extends OtpCodeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OtpCodeGroupByArgs['orderBy'];
    } : {
        orderBy?: OtpCodeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OtpCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OtpCodeFieldRefs;
}
export interface Prisma__OtpCodeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OtpCodeFieldRefs {
    readonly id: Prisma.FieldRef<"OtpCode", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"OtpCode", 'String'>;
    readonly code: Prisma.FieldRef<"OtpCode", 'String'>;
    readonly purpose: Prisma.FieldRef<"OtpCode", 'OtpPurpose'>;
    readonly isUsed: Prisma.FieldRef<"OtpCode", 'Boolean'>;
    readonly attempts: Prisma.FieldRef<"OtpCode", 'Int'>;
    readonly expiresAt: Prisma.FieldRef<"OtpCode", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"OtpCode", 'DateTime'>;
}
export type OtpCodeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpCodeSelect<ExtArgs> | null;
    omit?: Prisma.OtpCodeOmit<ExtArgs> | null;
    where: Prisma.OtpCodeWhereUniqueInput;
};
export type OtpCodeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpCodeSelect<ExtArgs> | null;
    omit?: Prisma.OtpCodeOmit<ExtArgs> | null;
    where: Prisma.OtpCodeWhereUniqueInput;
};
export type OtpCodeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpCodeSelect<ExtArgs> | null;
    omit?: Prisma.OtpCodeOmit<ExtArgs> | null;
    where?: Prisma.OtpCodeWhereInput;
    orderBy?: Prisma.OtpCodeOrderByWithRelationInput | Prisma.OtpCodeOrderByWithRelationInput[];
    cursor?: Prisma.OtpCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpCodeScalarFieldEnum | Prisma.OtpCodeScalarFieldEnum[];
};
export type OtpCodeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpCodeSelect<ExtArgs> | null;
    omit?: Prisma.OtpCodeOmit<ExtArgs> | null;
    where?: Prisma.OtpCodeWhereInput;
    orderBy?: Prisma.OtpCodeOrderByWithRelationInput | Prisma.OtpCodeOrderByWithRelationInput[];
    cursor?: Prisma.OtpCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpCodeScalarFieldEnum | Prisma.OtpCodeScalarFieldEnum[];
};
export type OtpCodeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpCodeSelect<ExtArgs> | null;
    omit?: Prisma.OtpCodeOmit<ExtArgs> | null;
    where?: Prisma.OtpCodeWhereInput;
    orderBy?: Prisma.OtpCodeOrderByWithRelationInput | Prisma.OtpCodeOrderByWithRelationInput[];
    cursor?: Prisma.OtpCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpCodeScalarFieldEnum | Prisma.OtpCodeScalarFieldEnum[];
};
export type OtpCodeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpCodeSelect<ExtArgs> | null;
    omit?: Prisma.OtpCodeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OtpCodeCreateInput, Prisma.OtpCodeUncheckedCreateInput>;
};
export type OtpCodeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OtpCodeCreateManyInput | Prisma.OtpCodeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OtpCodeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpCodeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OtpCodeOmit<ExtArgs> | null;
    data: Prisma.OtpCodeCreateManyInput | Prisma.OtpCodeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OtpCodeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpCodeSelect<ExtArgs> | null;
    omit?: Prisma.OtpCodeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OtpCodeUpdateInput, Prisma.OtpCodeUncheckedUpdateInput>;
    where: Prisma.OtpCodeWhereUniqueInput;
};
export type OtpCodeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OtpCodeUpdateManyMutationInput, Prisma.OtpCodeUncheckedUpdateManyInput>;
    where?: Prisma.OtpCodeWhereInput;
    limit?: number;
};
export type OtpCodeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpCodeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OtpCodeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OtpCodeUpdateManyMutationInput, Prisma.OtpCodeUncheckedUpdateManyInput>;
    where?: Prisma.OtpCodeWhereInput;
    limit?: number;
};
export type OtpCodeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpCodeSelect<ExtArgs> | null;
    omit?: Prisma.OtpCodeOmit<ExtArgs> | null;
    where: Prisma.OtpCodeWhereUniqueInput;
    create: Prisma.XOR<Prisma.OtpCodeCreateInput, Prisma.OtpCodeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OtpCodeUpdateInput, Prisma.OtpCodeUncheckedUpdateInput>;
};
export type OtpCodeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpCodeSelect<ExtArgs> | null;
    omit?: Prisma.OtpCodeOmit<ExtArgs> | null;
    where: Prisma.OtpCodeWhereUniqueInput;
};
export type OtpCodeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpCodeWhereInput;
    limit?: number;
};
export type OtpCodeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpCodeSelect<ExtArgs> | null;
    omit?: Prisma.OtpCodeOmit<ExtArgs> | null;
};
export {};

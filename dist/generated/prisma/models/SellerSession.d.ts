import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SellerSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$SellerSessionPayload>;
export type AggregateSellerSession = {
    _count: SellerSessionCountAggregateOutputType | null;
    _min: SellerSessionMinAggregateOutputType | null;
    _max: SellerSessionMaxAggregateOutputType | null;
};
export type SellerSessionMinAggregateOutputType = {
    id: string | null;
    sellerId: string | null;
    refreshToken: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
};
export type SellerSessionMaxAggregateOutputType = {
    id: string | null;
    sellerId: string | null;
    refreshToken: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
};
export type SellerSessionCountAggregateOutputType = {
    id: number;
    sellerId: number;
    refreshToken: number;
    expiresAt: number;
    createdAt: number;
    _all: number;
};
export type SellerSessionMinAggregateInputType = {
    id?: true;
    sellerId?: true;
    refreshToken?: true;
    expiresAt?: true;
    createdAt?: true;
};
export type SellerSessionMaxAggregateInputType = {
    id?: true;
    sellerId?: true;
    refreshToken?: true;
    expiresAt?: true;
    createdAt?: true;
};
export type SellerSessionCountAggregateInputType = {
    id?: true;
    sellerId?: true;
    refreshToken?: true;
    expiresAt?: true;
    createdAt?: true;
    _all?: true;
};
export type SellerSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerSessionWhereInput;
    orderBy?: Prisma.SellerSessionOrderByWithRelationInput | Prisma.SellerSessionOrderByWithRelationInput[];
    cursor?: Prisma.SellerSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SellerSessionCountAggregateInputType;
    _min?: SellerSessionMinAggregateInputType;
    _max?: SellerSessionMaxAggregateInputType;
};
export type GetSellerSessionAggregateType<T extends SellerSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateSellerSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSellerSession[P]> : Prisma.GetScalarType<T[P], AggregateSellerSession[P]>;
};
export type SellerSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerSessionWhereInput;
    orderBy?: Prisma.SellerSessionOrderByWithAggregationInput | Prisma.SellerSessionOrderByWithAggregationInput[];
    by: Prisma.SellerSessionScalarFieldEnum[] | Prisma.SellerSessionScalarFieldEnum;
    having?: Prisma.SellerSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SellerSessionCountAggregateInputType | true;
    _min?: SellerSessionMinAggregateInputType;
    _max?: SellerSessionMaxAggregateInputType;
};
export type SellerSessionGroupByOutputType = {
    id: string;
    sellerId: string;
    refreshToken: string;
    expiresAt: Date;
    createdAt: Date;
    _count: SellerSessionCountAggregateOutputType | null;
    _min: SellerSessionMinAggregateOutputType | null;
    _max: SellerSessionMaxAggregateOutputType | null;
};
type GetSellerSessionGroupByPayload<T extends SellerSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SellerSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SellerSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SellerSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SellerSessionGroupByOutputType[P]>;
}>>;
export type SellerSessionWhereInput = {
    AND?: Prisma.SellerSessionWhereInput | Prisma.SellerSessionWhereInput[];
    OR?: Prisma.SellerSessionWhereInput[];
    NOT?: Prisma.SellerSessionWhereInput | Prisma.SellerSessionWhereInput[];
    id?: Prisma.StringFilter<"SellerSession"> | string;
    sellerId?: Prisma.StringFilter<"SellerSession"> | string;
    refreshToken?: Prisma.StringFilter<"SellerSession"> | string;
    expiresAt?: Prisma.DateTimeFilter<"SellerSession"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"SellerSession"> | Date | string;
    seller?: Prisma.XOR<Prisma.SellerScalarRelationFilter, Prisma.SellerWhereInput>;
};
export type SellerSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    seller?: Prisma.SellerOrderByWithRelationInput;
};
export type SellerSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    refreshToken?: string;
    AND?: Prisma.SellerSessionWhereInput | Prisma.SellerSessionWhereInput[];
    OR?: Prisma.SellerSessionWhereInput[];
    NOT?: Prisma.SellerSessionWhereInput | Prisma.SellerSessionWhereInput[];
    sellerId?: Prisma.StringFilter<"SellerSession"> | string;
    expiresAt?: Prisma.DateTimeFilter<"SellerSession"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"SellerSession"> | Date | string;
    seller?: Prisma.XOR<Prisma.SellerScalarRelationFilter, Prisma.SellerWhereInput>;
}, "id" | "refreshToken">;
export type SellerSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SellerSessionCountOrderByAggregateInput;
    _max?: Prisma.SellerSessionMaxOrderByAggregateInput;
    _min?: Prisma.SellerSessionMinOrderByAggregateInput;
};
export type SellerSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.SellerSessionScalarWhereWithAggregatesInput | Prisma.SellerSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.SellerSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SellerSessionScalarWhereWithAggregatesInput | Prisma.SellerSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SellerSession"> | string;
    sellerId?: Prisma.StringWithAggregatesFilter<"SellerSession"> | string;
    refreshToken?: Prisma.StringWithAggregatesFilter<"SellerSession"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"SellerSession"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SellerSession"> | Date | string;
};
export type SellerSessionCreateInput = {
    id?: string;
    refreshToken: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    seller: Prisma.SellerCreateNestedOneWithoutSessionsInput;
};
export type SellerSessionUncheckedCreateInput = {
    id?: string;
    sellerId: string;
    refreshToken: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type SellerSessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshToken?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seller?: Prisma.SellerUpdateOneRequiredWithoutSessionsNestedInput;
};
export type SellerSessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshToken?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerSessionCreateManyInput = {
    id?: string;
    sellerId: string;
    refreshToken: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type SellerSessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshToken?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerSessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshToken?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerSessionListRelationFilter = {
    every?: Prisma.SellerSessionWhereInput;
    some?: Prisma.SellerSessionWhereInput;
    none?: Prisma.SellerSessionWhereInput;
};
export type SellerSessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SellerSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SellerSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SellerSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SellerSessionCreateNestedManyWithoutSellerInput = {
    create?: Prisma.XOR<Prisma.SellerSessionCreateWithoutSellerInput, Prisma.SellerSessionUncheckedCreateWithoutSellerInput> | Prisma.SellerSessionCreateWithoutSellerInput[] | Prisma.SellerSessionUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.SellerSessionCreateOrConnectWithoutSellerInput | Prisma.SellerSessionCreateOrConnectWithoutSellerInput[];
    createMany?: Prisma.SellerSessionCreateManySellerInputEnvelope;
    connect?: Prisma.SellerSessionWhereUniqueInput | Prisma.SellerSessionWhereUniqueInput[];
};
export type SellerSessionUncheckedCreateNestedManyWithoutSellerInput = {
    create?: Prisma.XOR<Prisma.SellerSessionCreateWithoutSellerInput, Prisma.SellerSessionUncheckedCreateWithoutSellerInput> | Prisma.SellerSessionCreateWithoutSellerInput[] | Prisma.SellerSessionUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.SellerSessionCreateOrConnectWithoutSellerInput | Prisma.SellerSessionCreateOrConnectWithoutSellerInput[];
    createMany?: Prisma.SellerSessionCreateManySellerInputEnvelope;
    connect?: Prisma.SellerSessionWhereUniqueInput | Prisma.SellerSessionWhereUniqueInput[];
};
export type SellerSessionUpdateManyWithoutSellerNestedInput = {
    create?: Prisma.XOR<Prisma.SellerSessionCreateWithoutSellerInput, Prisma.SellerSessionUncheckedCreateWithoutSellerInput> | Prisma.SellerSessionCreateWithoutSellerInput[] | Prisma.SellerSessionUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.SellerSessionCreateOrConnectWithoutSellerInput | Prisma.SellerSessionCreateOrConnectWithoutSellerInput[];
    upsert?: Prisma.SellerSessionUpsertWithWhereUniqueWithoutSellerInput | Prisma.SellerSessionUpsertWithWhereUniqueWithoutSellerInput[];
    createMany?: Prisma.SellerSessionCreateManySellerInputEnvelope;
    set?: Prisma.SellerSessionWhereUniqueInput | Prisma.SellerSessionWhereUniqueInput[];
    disconnect?: Prisma.SellerSessionWhereUniqueInput | Prisma.SellerSessionWhereUniqueInput[];
    delete?: Prisma.SellerSessionWhereUniqueInput | Prisma.SellerSessionWhereUniqueInput[];
    connect?: Prisma.SellerSessionWhereUniqueInput | Prisma.SellerSessionWhereUniqueInput[];
    update?: Prisma.SellerSessionUpdateWithWhereUniqueWithoutSellerInput | Prisma.SellerSessionUpdateWithWhereUniqueWithoutSellerInput[];
    updateMany?: Prisma.SellerSessionUpdateManyWithWhereWithoutSellerInput | Prisma.SellerSessionUpdateManyWithWhereWithoutSellerInput[];
    deleteMany?: Prisma.SellerSessionScalarWhereInput | Prisma.SellerSessionScalarWhereInput[];
};
export type SellerSessionUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: Prisma.XOR<Prisma.SellerSessionCreateWithoutSellerInput, Prisma.SellerSessionUncheckedCreateWithoutSellerInput> | Prisma.SellerSessionCreateWithoutSellerInput[] | Prisma.SellerSessionUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.SellerSessionCreateOrConnectWithoutSellerInput | Prisma.SellerSessionCreateOrConnectWithoutSellerInput[];
    upsert?: Prisma.SellerSessionUpsertWithWhereUniqueWithoutSellerInput | Prisma.SellerSessionUpsertWithWhereUniqueWithoutSellerInput[];
    createMany?: Prisma.SellerSessionCreateManySellerInputEnvelope;
    set?: Prisma.SellerSessionWhereUniqueInput | Prisma.SellerSessionWhereUniqueInput[];
    disconnect?: Prisma.SellerSessionWhereUniqueInput | Prisma.SellerSessionWhereUniqueInput[];
    delete?: Prisma.SellerSessionWhereUniqueInput | Prisma.SellerSessionWhereUniqueInput[];
    connect?: Prisma.SellerSessionWhereUniqueInput | Prisma.SellerSessionWhereUniqueInput[];
    update?: Prisma.SellerSessionUpdateWithWhereUniqueWithoutSellerInput | Prisma.SellerSessionUpdateWithWhereUniqueWithoutSellerInput[];
    updateMany?: Prisma.SellerSessionUpdateManyWithWhereWithoutSellerInput | Prisma.SellerSessionUpdateManyWithWhereWithoutSellerInput[];
    deleteMany?: Prisma.SellerSessionScalarWhereInput | Prisma.SellerSessionScalarWhereInput[];
};
export type SellerSessionCreateWithoutSellerInput = {
    id?: string;
    refreshToken: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type SellerSessionUncheckedCreateWithoutSellerInput = {
    id?: string;
    refreshToken: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type SellerSessionCreateOrConnectWithoutSellerInput = {
    where: Prisma.SellerSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerSessionCreateWithoutSellerInput, Prisma.SellerSessionUncheckedCreateWithoutSellerInput>;
};
export type SellerSessionCreateManySellerInputEnvelope = {
    data: Prisma.SellerSessionCreateManySellerInput | Prisma.SellerSessionCreateManySellerInput[];
    skipDuplicates?: boolean;
};
export type SellerSessionUpsertWithWhereUniqueWithoutSellerInput = {
    where: Prisma.SellerSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SellerSessionUpdateWithoutSellerInput, Prisma.SellerSessionUncheckedUpdateWithoutSellerInput>;
    create: Prisma.XOR<Prisma.SellerSessionCreateWithoutSellerInput, Prisma.SellerSessionUncheckedCreateWithoutSellerInput>;
};
export type SellerSessionUpdateWithWhereUniqueWithoutSellerInput = {
    where: Prisma.SellerSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SellerSessionUpdateWithoutSellerInput, Prisma.SellerSessionUncheckedUpdateWithoutSellerInput>;
};
export type SellerSessionUpdateManyWithWhereWithoutSellerInput = {
    where: Prisma.SellerSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.SellerSessionUpdateManyMutationInput, Prisma.SellerSessionUncheckedUpdateManyWithoutSellerInput>;
};
export type SellerSessionScalarWhereInput = {
    AND?: Prisma.SellerSessionScalarWhereInput | Prisma.SellerSessionScalarWhereInput[];
    OR?: Prisma.SellerSessionScalarWhereInput[];
    NOT?: Prisma.SellerSessionScalarWhereInput | Prisma.SellerSessionScalarWhereInput[];
    id?: Prisma.StringFilter<"SellerSession"> | string;
    sellerId?: Prisma.StringFilter<"SellerSession"> | string;
    refreshToken?: Prisma.StringFilter<"SellerSession"> | string;
    expiresAt?: Prisma.DateTimeFilter<"SellerSession"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"SellerSession"> | Date | string;
};
export type SellerSessionCreateManySellerInput = {
    id?: string;
    refreshToken: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type SellerSessionUpdateWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshToken?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerSessionUncheckedUpdateWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshToken?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerSessionUncheckedUpdateManyWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshToken?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sellerId?: boolean;
    refreshToken?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sellerSession"]>;
export type SellerSessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sellerId?: boolean;
    refreshToken?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sellerSession"]>;
export type SellerSessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sellerId?: boolean;
    refreshToken?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sellerSession"]>;
export type SellerSessionSelectScalar = {
    id?: boolean;
    sellerId?: boolean;
    refreshToken?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
};
export type SellerSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sellerId" | "refreshToken" | "expiresAt" | "createdAt", ExtArgs["result"]["sellerSession"]>;
export type SellerSessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
};
export type SellerSessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
};
export type SellerSessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
};
export type $SellerSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SellerSession";
    objects: {
        seller: Prisma.$SellerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sellerId: string;
        refreshToken: string;
        expiresAt: Date;
        createdAt: Date;
    }, ExtArgs["result"]["sellerSession"]>;
    composites: {};
};
export type SellerSessionGetPayload<S extends boolean | null | undefined | SellerSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SellerSessionPayload, S>;
export type SellerSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SellerSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SellerSessionCountAggregateInputType | true;
};
export interface SellerSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SellerSession'];
        meta: {
            name: 'SellerSession';
        };
    };
    findUnique<T extends SellerSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, SellerSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SellerSessionClient<runtime.Types.Result.GetResult<Prisma.$SellerSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SellerSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SellerSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SellerSessionClient<runtime.Types.Result.GetResult<Prisma.$SellerSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SellerSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, SellerSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SellerSessionClient<runtime.Types.Result.GetResult<Prisma.$SellerSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SellerSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SellerSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SellerSessionClient<runtime.Types.Result.GetResult<Prisma.$SellerSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SellerSessionFindManyArgs>(args?: Prisma.SelectSubset<T, SellerSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SellerSessionCreateArgs>(args: Prisma.SelectSubset<T, SellerSessionCreateArgs<ExtArgs>>): Prisma.Prisma__SellerSessionClient<runtime.Types.Result.GetResult<Prisma.$SellerSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SellerSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, SellerSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SellerSessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SellerSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SellerSessionDeleteArgs>(args: Prisma.SelectSubset<T, SellerSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__SellerSessionClient<runtime.Types.Result.GetResult<Prisma.$SellerSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SellerSessionUpdateArgs>(args: Prisma.SelectSubset<T, SellerSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__SellerSessionClient<runtime.Types.Result.GetResult<Prisma.$SellerSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SellerSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SellerSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SellerSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, SellerSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SellerSessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SellerSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SellerSessionUpsertArgs>(args: Prisma.SelectSubset<T, SellerSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__SellerSessionClient<runtime.Types.Result.GetResult<Prisma.$SellerSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SellerSessionCountArgs>(args?: Prisma.Subset<T, SellerSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SellerSessionCountAggregateOutputType> : number>;
    aggregate<T extends SellerSessionAggregateArgs>(args: Prisma.Subset<T, SellerSessionAggregateArgs>): Prisma.PrismaPromise<GetSellerSessionAggregateType<T>>;
    groupBy<T extends SellerSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SellerSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: SellerSessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SellerSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SellerSessionFieldRefs;
}
export interface Prisma__SellerSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    seller<T extends Prisma.SellerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SellerDefaultArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SellerSessionFieldRefs {
    readonly id: Prisma.FieldRef<"SellerSession", 'String'>;
    readonly sellerId: Prisma.FieldRef<"SellerSession", 'String'>;
    readonly refreshToken: Prisma.FieldRef<"SellerSession", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"SellerSession", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"SellerSession", 'DateTime'>;
}
export type SellerSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSessionSelect<ExtArgs> | null;
    omit?: Prisma.SellerSessionOmit<ExtArgs> | null;
    include?: Prisma.SellerSessionInclude<ExtArgs> | null;
    where: Prisma.SellerSessionWhereUniqueInput;
};
export type SellerSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSessionSelect<ExtArgs> | null;
    omit?: Prisma.SellerSessionOmit<ExtArgs> | null;
    include?: Prisma.SellerSessionInclude<ExtArgs> | null;
    where: Prisma.SellerSessionWhereUniqueInput;
};
export type SellerSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSessionSelect<ExtArgs> | null;
    omit?: Prisma.SellerSessionOmit<ExtArgs> | null;
    include?: Prisma.SellerSessionInclude<ExtArgs> | null;
    where?: Prisma.SellerSessionWhereInput;
    orderBy?: Prisma.SellerSessionOrderByWithRelationInput | Prisma.SellerSessionOrderByWithRelationInput[];
    cursor?: Prisma.SellerSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerSessionScalarFieldEnum | Prisma.SellerSessionScalarFieldEnum[];
};
export type SellerSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSessionSelect<ExtArgs> | null;
    omit?: Prisma.SellerSessionOmit<ExtArgs> | null;
    include?: Prisma.SellerSessionInclude<ExtArgs> | null;
    where?: Prisma.SellerSessionWhereInput;
    orderBy?: Prisma.SellerSessionOrderByWithRelationInput | Prisma.SellerSessionOrderByWithRelationInput[];
    cursor?: Prisma.SellerSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerSessionScalarFieldEnum | Prisma.SellerSessionScalarFieldEnum[];
};
export type SellerSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSessionSelect<ExtArgs> | null;
    omit?: Prisma.SellerSessionOmit<ExtArgs> | null;
    include?: Prisma.SellerSessionInclude<ExtArgs> | null;
    where?: Prisma.SellerSessionWhereInput;
    orderBy?: Prisma.SellerSessionOrderByWithRelationInput | Prisma.SellerSessionOrderByWithRelationInput[];
    cursor?: Prisma.SellerSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerSessionScalarFieldEnum | Prisma.SellerSessionScalarFieldEnum[];
};
export type SellerSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSessionSelect<ExtArgs> | null;
    omit?: Prisma.SellerSessionOmit<ExtArgs> | null;
    include?: Prisma.SellerSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerSessionCreateInput, Prisma.SellerSessionUncheckedCreateInput>;
};
export type SellerSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SellerSessionCreateManyInput | Prisma.SellerSessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SellerSessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SellerSessionOmit<ExtArgs> | null;
    data: Prisma.SellerSessionCreateManyInput | Prisma.SellerSessionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SellerSessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SellerSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSessionSelect<ExtArgs> | null;
    omit?: Prisma.SellerSessionOmit<ExtArgs> | null;
    include?: Prisma.SellerSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerSessionUpdateInput, Prisma.SellerSessionUncheckedUpdateInput>;
    where: Prisma.SellerSessionWhereUniqueInput;
};
export type SellerSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SellerSessionUpdateManyMutationInput, Prisma.SellerSessionUncheckedUpdateManyInput>;
    where?: Prisma.SellerSessionWhereInput;
    limit?: number;
};
export type SellerSessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SellerSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerSessionUpdateManyMutationInput, Prisma.SellerSessionUncheckedUpdateManyInput>;
    where?: Prisma.SellerSessionWhereInput;
    limit?: number;
    include?: Prisma.SellerSessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SellerSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSessionSelect<ExtArgs> | null;
    omit?: Prisma.SellerSessionOmit<ExtArgs> | null;
    include?: Prisma.SellerSessionInclude<ExtArgs> | null;
    where: Prisma.SellerSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerSessionCreateInput, Prisma.SellerSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SellerSessionUpdateInput, Prisma.SellerSessionUncheckedUpdateInput>;
};
export type SellerSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSessionSelect<ExtArgs> | null;
    omit?: Prisma.SellerSessionOmit<ExtArgs> | null;
    include?: Prisma.SellerSessionInclude<ExtArgs> | null;
    where: Prisma.SellerSessionWhereUniqueInput;
};
export type SellerSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerSessionWhereInput;
    limit?: number;
};
export type SellerSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSessionSelect<ExtArgs> | null;
    omit?: Prisma.SellerSessionOmit<ExtArgs> | null;
    include?: Prisma.SellerSessionInclude<ExtArgs> | null;
};
export {};

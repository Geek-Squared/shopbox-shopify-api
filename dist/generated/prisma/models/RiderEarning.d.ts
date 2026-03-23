import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type RiderEarningModel = runtime.Types.Result.DefaultSelection<Prisma.$RiderEarningPayload>;
export type AggregateRiderEarning = {
    _count: RiderEarningCountAggregateOutputType | null;
    _avg: RiderEarningAvgAggregateOutputType | null;
    _sum: RiderEarningSumAggregateOutputType | null;
    _min: RiderEarningMinAggregateOutputType | null;
    _max: RiderEarningMaxAggregateOutputType | null;
};
export type RiderEarningAvgAggregateOutputType = {
    amountUsd: number | null;
};
export type RiderEarningSumAggregateOutputType = {
    amountUsd: number | null;
};
export type RiderEarningMinAggregateOutputType = {
    id: string | null;
    riderId: string | null;
    deliveryId: string | null;
    amountUsd: number | null;
    type: $Enums.EarningType | null;
    status: $Enums.EarningStatus | null;
    createdAt: Date | null;
};
export type RiderEarningMaxAggregateOutputType = {
    id: string | null;
    riderId: string | null;
    deliveryId: string | null;
    amountUsd: number | null;
    type: $Enums.EarningType | null;
    status: $Enums.EarningStatus | null;
    createdAt: Date | null;
};
export type RiderEarningCountAggregateOutputType = {
    id: number;
    riderId: number;
    deliveryId: number;
    amountUsd: number;
    type: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type RiderEarningAvgAggregateInputType = {
    amountUsd?: true;
};
export type RiderEarningSumAggregateInputType = {
    amountUsd?: true;
};
export type RiderEarningMinAggregateInputType = {
    id?: true;
    riderId?: true;
    deliveryId?: true;
    amountUsd?: true;
    type?: true;
    status?: true;
    createdAt?: true;
};
export type RiderEarningMaxAggregateInputType = {
    id?: true;
    riderId?: true;
    deliveryId?: true;
    amountUsd?: true;
    type?: true;
    status?: true;
    createdAt?: true;
};
export type RiderEarningCountAggregateInputType = {
    id?: true;
    riderId?: true;
    deliveryId?: true;
    amountUsd?: true;
    type?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type RiderEarningAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiderEarningWhereInput;
    orderBy?: Prisma.RiderEarningOrderByWithRelationInput | Prisma.RiderEarningOrderByWithRelationInput[];
    cursor?: Prisma.RiderEarningWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RiderEarningCountAggregateInputType;
    _avg?: RiderEarningAvgAggregateInputType;
    _sum?: RiderEarningSumAggregateInputType;
    _min?: RiderEarningMinAggregateInputType;
    _max?: RiderEarningMaxAggregateInputType;
};
export type GetRiderEarningAggregateType<T extends RiderEarningAggregateArgs> = {
    [P in keyof T & keyof AggregateRiderEarning]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRiderEarning[P]> : Prisma.GetScalarType<T[P], AggregateRiderEarning[P]>;
};
export type RiderEarningGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiderEarningWhereInput;
    orderBy?: Prisma.RiderEarningOrderByWithAggregationInput | Prisma.RiderEarningOrderByWithAggregationInput[];
    by: Prisma.RiderEarningScalarFieldEnum[] | Prisma.RiderEarningScalarFieldEnum;
    having?: Prisma.RiderEarningScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RiderEarningCountAggregateInputType | true;
    _avg?: RiderEarningAvgAggregateInputType;
    _sum?: RiderEarningSumAggregateInputType;
    _min?: RiderEarningMinAggregateInputType;
    _max?: RiderEarningMaxAggregateInputType;
};
export type RiderEarningGroupByOutputType = {
    id: string;
    riderId: string;
    deliveryId: string | null;
    amountUsd: number;
    type: $Enums.EarningType;
    status: $Enums.EarningStatus;
    createdAt: Date;
    _count: RiderEarningCountAggregateOutputType | null;
    _avg: RiderEarningAvgAggregateOutputType | null;
    _sum: RiderEarningSumAggregateOutputType | null;
    _min: RiderEarningMinAggregateOutputType | null;
    _max: RiderEarningMaxAggregateOutputType | null;
};
type GetRiderEarningGroupByPayload<T extends RiderEarningGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RiderEarningGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RiderEarningGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RiderEarningGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RiderEarningGroupByOutputType[P]>;
}>>;
export type RiderEarningWhereInput = {
    AND?: Prisma.RiderEarningWhereInput | Prisma.RiderEarningWhereInput[];
    OR?: Prisma.RiderEarningWhereInput[];
    NOT?: Prisma.RiderEarningWhereInput | Prisma.RiderEarningWhereInput[];
    id?: Prisma.StringFilter<"RiderEarning"> | string;
    riderId?: Prisma.StringFilter<"RiderEarning"> | string;
    deliveryId?: Prisma.StringNullableFilter<"RiderEarning"> | string | null;
    amountUsd?: Prisma.FloatFilter<"RiderEarning"> | number;
    type?: Prisma.EnumEarningTypeFilter<"RiderEarning"> | $Enums.EarningType;
    status?: Prisma.EnumEarningStatusFilter<"RiderEarning"> | $Enums.EarningStatus;
    createdAt?: Prisma.DateTimeFilter<"RiderEarning"> | Date | string;
    delivery?: Prisma.XOR<Prisma.DeliveryNullableScalarRelationFilter, Prisma.DeliveryWhereInput> | null;
    rider?: Prisma.XOR<Prisma.RiderScalarRelationFilter, Prisma.RiderWhereInput>;
};
export type RiderEarningOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    riderId?: Prisma.SortOrder;
    deliveryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    amountUsd?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    delivery?: Prisma.DeliveryOrderByWithRelationInput;
    rider?: Prisma.RiderOrderByWithRelationInput;
};
export type RiderEarningWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RiderEarningWhereInput | Prisma.RiderEarningWhereInput[];
    OR?: Prisma.RiderEarningWhereInput[];
    NOT?: Prisma.RiderEarningWhereInput | Prisma.RiderEarningWhereInput[];
    riderId?: Prisma.StringFilter<"RiderEarning"> | string;
    deliveryId?: Prisma.StringNullableFilter<"RiderEarning"> | string | null;
    amountUsd?: Prisma.FloatFilter<"RiderEarning"> | number;
    type?: Prisma.EnumEarningTypeFilter<"RiderEarning"> | $Enums.EarningType;
    status?: Prisma.EnumEarningStatusFilter<"RiderEarning"> | $Enums.EarningStatus;
    createdAt?: Prisma.DateTimeFilter<"RiderEarning"> | Date | string;
    delivery?: Prisma.XOR<Prisma.DeliveryNullableScalarRelationFilter, Prisma.DeliveryWhereInput> | null;
    rider?: Prisma.XOR<Prisma.RiderScalarRelationFilter, Prisma.RiderWhereInput>;
}, "id">;
export type RiderEarningOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    riderId?: Prisma.SortOrder;
    deliveryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    amountUsd?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RiderEarningCountOrderByAggregateInput;
    _avg?: Prisma.RiderEarningAvgOrderByAggregateInput;
    _max?: Prisma.RiderEarningMaxOrderByAggregateInput;
    _min?: Prisma.RiderEarningMinOrderByAggregateInput;
    _sum?: Prisma.RiderEarningSumOrderByAggregateInput;
};
export type RiderEarningScalarWhereWithAggregatesInput = {
    AND?: Prisma.RiderEarningScalarWhereWithAggregatesInput | Prisma.RiderEarningScalarWhereWithAggregatesInput[];
    OR?: Prisma.RiderEarningScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RiderEarningScalarWhereWithAggregatesInput | Prisma.RiderEarningScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RiderEarning"> | string;
    riderId?: Prisma.StringWithAggregatesFilter<"RiderEarning"> | string;
    deliveryId?: Prisma.StringNullableWithAggregatesFilter<"RiderEarning"> | string | null;
    amountUsd?: Prisma.FloatWithAggregatesFilter<"RiderEarning"> | number;
    type?: Prisma.EnumEarningTypeWithAggregatesFilter<"RiderEarning"> | $Enums.EarningType;
    status?: Prisma.EnumEarningStatusWithAggregatesFilter<"RiderEarning"> | $Enums.EarningStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RiderEarning"> | Date | string;
};
export type RiderEarningCreateInput = {
    id?: string;
    amountUsd: number;
    type: $Enums.EarningType;
    status?: $Enums.EarningStatus;
    createdAt?: Date | string;
    delivery?: Prisma.DeliveryCreateNestedOneWithoutEarningsInput;
    rider: Prisma.RiderCreateNestedOneWithoutEarningsInput;
};
export type RiderEarningUncheckedCreateInput = {
    id?: string;
    riderId: string;
    deliveryId?: string | null;
    amountUsd: number;
    type: $Enums.EarningType;
    status?: $Enums.EarningStatus;
    createdAt?: Date | string;
};
export type RiderEarningUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amountUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType;
    status?: Prisma.EnumEarningStatusFieldUpdateOperationsInput | $Enums.EarningStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivery?: Prisma.DeliveryUpdateOneWithoutEarningsNestedInput;
    rider?: Prisma.RiderUpdateOneRequiredWithoutEarningsNestedInput;
};
export type RiderEarningUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amountUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType;
    status?: Prisma.EnumEarningStatusFieldUpdateOperationsInput | $Enums.EarningStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiderEarningCreateManyInput = {
    id?: string;
    riderId: string;
    deliveryId?: string | null;
    amountUsd: number;
    type: $Enums.EarningType;
    status?: $Enums.EarningStatus;
    createdAt?: Date | string;
};
export type RiderEarningUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amountUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType;
    status?: Prisma.EnumEarningStatusFieldUpdateOperationsInput | $Enums.EarningStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiderEarningUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amountUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType;
    status?: Prisma.EnumEarningStatusFieldUpdateOperationsInput | $Enums.EarningStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiderEarningListRelationFilter = {
    every?: Prisma.RiderEarningWhereInput;
    some?: Prisma.RiderEarningWhereInput;
    none?: Prisma.RiderEarningWhereInput;
};
export type RiderEarningOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RiderEarningCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    riderId?: Prisma.SortOrder;
    deliveryId?: Prisma.SortOrder;
    amountUsd?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RiderEarningAvgOrderByAggregateInput = {
    amountUsd?: Prisma.SortOrder;
};
export type RiderEarningMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    riderId?: Prisma.SortOrder;
    deliveryId?: Prisma.SortOrder;
    amountUsd?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RiderEarningMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    riderId?: Prisma.SortOrder;
    deliveryId?: Prisma.SortOrder;
    amountUsd?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RiderEarningSumOrderByAggregateInput = {
    amountUsd?: Prisma.SortOrder;
};
export type RiderEarningCreateNestedManyWithoutRiderInput = {
    create?: Prisma.XOR<Prisma.RiderEarningCreateWithoutRiderInput, Prisma.RiderEarningUncheckedCreateWithoutRiderInput> | Prisma.RiderEarningCreateWithoutRiderInput[] | Prisma.RiderEarningUncheckedCreateWithoutRiderInput[];
    connectOrCreate?: Prisma.RiderEarningCreateOrConnectWithoutRiderInput | Prisma.RiderEarningCreateOrConnectWithoutRiderInput[];
    createMany?: Prisma.RiderEarningCreateManyRiderInputEnvelope;
    connect?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
};
export type RiderEarningUncheckedCreateNestedManyWithoutRiderInput = {
    create?: Prisma.XOR<Prisma.RiderEarningCreateWithoutRiderInput, Prisma.RiderEarningUncheckedCreateWithoutRiderInput> | Prisma.RiderEarningCreateWithoutRiderInput[] | Prisma.RiderEarningUncheckedCreateWithoutRiderInput[];
    connectOrCreate?: Prisma.RiderEarningCreateOrConnectWithoutRiderInput | Prisma.RiderEarningCreateOrConnectWithoutRiderInput[];
    createMany?: Prisma.RiderEarningCreateManyRiderInputEnvelope;
    connect?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
};
export type RiderEarningUpdateManyWithoutRiderNestedInput = {
    create?: Prisma.XOR<Prisma.RiderEarningCreateWithoutRiderInput, Prisma.RiderEarningUncheckedCreateWithoutRiderInput> | Prisma.RiderEarningCreateWithoutRiderInput[] | Prisma.RiderEarningUncheckedCreateWithoutRiderInput[];
    connectOrCreate?: Prisma.RiderEarningCreateOrConnectWithoutRiderInput | Prisma.RiderEarningCreateOrConnectWithoutRiderInput[];
    upsert?: Prisma.RiderEarningUpsertWithWhereUniqueWithoutRiderInput | Prisma.RiderEarningUpsertWithWhereUniqueWithoutRiderInput[];
    createMany?: Prisma.RiderEarningCreateManyRiderInputEnvelope;
    set?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
    disconnect?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
    delete?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
    connect?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
    update?: Prisma.RiderEarningUpdateWithWhereUniqueWithoutRiderInput | Prisma.RiderEarningUpdateWithWhereUniqueWithoutRiderInput[];
    updateMany?: Prisma.RiderEarningUpdateManyWithWhereWithoutRiderInput | Prisma.RiderEarningUpdateManyWithWhereWithoutRiderInput[];
    deleteMany?: Prisma.RiderEarningScalarWhereInput | Prisma.RiderEarningScalarWhereInput[];
};
export type RiderEarningUncheckedUpdateManyWithoutRiderNestedInput = {
    create?: Prisma.XOR<Prisma.RiderEarningCreateWithoutRiderInput, Prisma.RiderEarningUncheckedCreateWithoutRiderInput> | Prisma.RiderEarningCreateWithoutRiderInput[] | Prisma.RiderEarningUncheckedCreateWithoutRiderInput[];
    connectOrCreate?: Prisma.RiderEarningCreateOrConnectWithoutRiderInput | Prisma.RiderEarningCreateOrConnectWithoutRiderInput[];
    upsert?: Prisma.RiderEarningUpsertWithWhereUniqueWithoutRiderInput | Prisma.RiderEarningUpsertWithWhereUniqueWithoutRiderInput[];
    createMany?: Prisma.RiderEarningCreateManyRiderInputEnvelope;
    set?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
    disconnect?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
    delete?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
    connect?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
    update?: Prisma.RiderEarningUpdateWithWhereUniqueWithoutRiderInput | Prisma.RiderEarningUpdateWithWhereUniqueWithoutRiderInput[];
    updateMany?: Prisma.RiderEarningUpdateManyWithWhereWithoutRiderInput | Prisma.RiderEarningUpdateManyWithWhereWithoutRiderInput[];
    deleteMany?: Prisma.RiderEarningScalarWhereInput | Prisma.RiderEarningScalarWhereInput[];
};
export type RiderEarningCreateNestedManyWithoutDeliveryInput = {
    create?: Prisma.XOR<Prisma.RiderEarningCreateWithoutDeliveryInput, Prisma.RiderEarningUncheckedCreateWithoutDeliveryInput> | Prisma.RiderEarningCreateWithoutDeliveryInput[] | Prisma.RiderEarningUncheckedCreateWithoutDeliveryInput[];
    connectOrCreate?: Prisma.RiderEarningCreateOrConnectWithoutDeliveryInput | Prisma.RiderEarningCreateOrConnectWithoutDeliveryInput[];
    createMany?: Prisma.RiderEarningCreateManyDeliveryInputEnvelope;
    connect?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
};
export type RiderEarningUncheckedCreateNestedManyWithoutDeliveryInput = {
    create?: Prisma.XOR<Prisma.RiderEarningCreateWithoutDeliveryInput, Prisma.RiderEarningUncheckedCreateWithoutDeliveryInput> | Prisma.RiderEarningCreateWithoutDeliveryInput[] | Prisma.RiderEarningUncheckedCreateWithoutDeliveryInput[];
    connectOrCreate?: Prisma.RiderEarningCreateOrConnectWithoutDeliveryInput | Prisma.RiderEarningCreateOrConnectWithoutDeliveryInput[];
    createMany?: Prisma.RiderEarningCreateManyDeliveryInputEnvelope;
    connect?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
};
export type RiderEarningUpdateManyWithoutDeliveryNestedInput = {
    create?: Prisma.XOR<Prisma.RiderEarningCreateWithoutDeliveryInput, Prisma.RiderEarningUncheckedCreateWithoutDeliveryInput> | Prisma.RiderEarningCreateWithoutDeliveryInput[] | Prisma.RiderEarningUncheckedCreateWithoutDeliveryInput[];
    connectOrCreate?: Prisma.RiderEarningCreateOrConnectWithoutDeliveryInput | Prisma.RiderEarningCreateOrConnectWithoutDeliveryInput[];
    upsert?: Prisma.RiderEarningUpsertWithWhereUniqueWithoutDeliveryInput | Prisma.RiderEarningUpsertWithWhereUniqueWithoutDeliveryInput[];
    createMany?: Prisma.RiderEarningCreateManyDeliveryInputEnvelope;
    set?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
    disconnect?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
    delete?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
    connect?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
    update?: Prisma.RiderEarningUpdateWithWhereUniqueWithoutDeliveryInput | Prisma.RiderEarningUpdateWithWhereUniqueWithoutDeliveryInput[];
    updateMany?: Prisma.RiderEarningUpdateManyWithWhereWithoutDeliveryInput | Prisma.RiderEarningUpdateManyWithWhereWithoutDeliveryInput[];
    deleteMany?: Prisma.RiderEarningScalarWhereInput | Prisma.RiderEarningScalarWhereInput[];
};
export type RiderEarningUncheckedUpdateManyWithoutDeliveryNestedInput = {
    create?: Prisma.XOR<Prisma.RiderEarningCreateWithoutDeliveryInput, Prisma.RiderEarningUncheckedCreateWithoutDeliveryInput> | Prisma.RiderEarningCreateWithoutDeliveryInput[] | Prisma.RiderEarningUncheckedCreateWithoutDeliveryInput[];
    connectOrCreate?: Prisma.RiderEarningCreateOrConnectWithoutDeliveryInput | Prisma.RiderEarningCreateOrConnectWithoutDeliveryInput[];
    upsert?: Prisma.RiderEarningUpsertWithWhereUniqueWithoutDeliveryInput | Prisma.RiderEarningUpsertWithWhereUniqueWithoutDeliveryInput[];
    createMany?: Prisma.RiderEarningCreateManyDeliveryInputEnvelope;
    set?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
    disconnect?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
    delete?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
    connect?: Prisma.RiderEarningWhereUniqueInput | Prisma.RiderEarningWhereUniqueInput[];
    update?: Prisma.RiderEarningUpdateWithWhereUniqueWithoutDeliveryInput | Prisma.RiderEarningUpdateWithWhereUniqueWithoutDeliveryInput[];
    updateMany?: Prisma.RiderEarningUpdateManyWithWhereWithoutDeliveryInput | Prisma.RiderEarningUpdateManyWithWhereWithoutDeliveryInput[];
    deleteMany?: Prisma.RiderEarningScalarWhereInput | Prisma.RiderEarningScalarWhereInput[];
};
export type EnumEarningTypeFieldUpdateOperationsInput = {
    set?: $Enums.EarningType;
};
export type EnumEarningStatusFieldUpdateOperationsInput = {
    set?: $Enums.EarningStatus;
};
export type RiderEarningCreateWithoutRiderInput = {
    id?: string;
    amountUsd: number;
    type: $Enums.EarningType;
    status?: $Enums.EarningStatus;
    createdAt?: Date | string;
    delivery?: Prisma.DeliveryCreateNestedOneWithoutEarningsInput;
};
export type RiderEarningUncheckedCreateWithoutRiderInput = {
    id?: string;
    deliveryId?: string | null;
    amountUsd: number;
    type: $Enums.EarningType;
    status?: $Enums.EarningStatus;
    createdAt?: Date | string;
};
export type RiderEarningCreateOrConnectWithoutRiderInput = {
    where: Prisma.RiderEarningWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiderEarningCreateWithoutRiderInput, Prisma.RiderEarningUncheckedCreateWithoutRiderInput>;
};
export type RiderEarningCreateManyRiderInputEnvelope = {
    data: Prisma.RiderEarningCreateManyRiderInput | Prisma.RiderEarningCreateManyRiderInput[];
    skipDuplicates?: boolean;
};
export type RiderEarningUpsertWithWhereUniqueWithoutRiderInput = {
    where: Prisma.RiderEarningWhereUniqueInput;
    update: Prisma.XOR<Prisma.RiderEarningUpdateWithoutRiderInput, Prisma.RiderEarningUncheckedUpdateWithoutRiderInput>;
    create: Prisma.XOR<Prisma.RiderEarningCreateWithoutRiderInput, Prisma.RiderEarningUncheckedCreateWithoutRiderInput>;
};
export type RiderEarningUpdateWithWhereUniqueWithoutRiderInput = {
    where: Prisma.RiderEarningWhereUniqueInput;
    data: Prisma.XOR<Prisma.RiderEarningUpdateWithoutRiderInput, Prisma.RiderEarningUncheckedUpdateWithoutRiderInput>;
};
export type RiderEarningUpdateManyWithWhereWithoutRiderInput = {
    where: Prisma.RiderEarningScalarWhereInput;
    data: Prisma.XOR<Prisma.RiderEarningUpdateManyMutationInput, Prisma.RiderEarningUncheckedUpdateManyWithoutRiderInput>;
};
export type RiderEarningScalarWhereInput = {
    AND?: Prisma.RiderEarningScalarWhereInput | Prisma.RiderEarningScalarWhereInput[];
    OR?: Prisma.RiderEarningScalarWhereInput[];
    NOT?: Prisma.RiderEarningScalarWhereInput | Prisma.RiderEarningScalarWhereInput[];
    id?: Prisma.StringFilter<"RiderEarning"> | string;
    riderId?: Prisma.StringFilter<"RiderEarning"> | string;
    deliveryId?: Prisma.StringNullableFilter<"RiderEarning"> | string | null;
    amountUsd?: Prisma.FloatFilter<"RiderEarning"> | number;
    type?: Prisma.EnumEarningTypeFilter<"RiderEarning"> | $Enums.EarningType;
    status?: Prisma.EnumEarningStatusFilter<"RiderEarning"> | $Enums.EarningStatus;
    createdAt?: Prisma.DateTimeFilter<"RiderEarning"> | Date | string;
};
export type RiderEarningCreateWithoutDeliveryInput = {
    id?: string;
    amountUsd: number;
    type: $Enums.EarningType;
    status?: $Enums.EarningStatus;
    createdAt?: Date | string;
    rider: Prisma.RiderCreateNestedOneWithoutEarningsInput;
};
export type RiderEarningUncheckedCreateWithoutDeliveryInput = {
    id?: string;
    riderId: string;
    amountUsd: number;
    type: $Enums.EarningType;
    status?: $Enums.EarningStatus;
    createdAt?: Date | string;
};
export type RiderEarningCreateOrConnectWithoutDeliveryInput = {
    where: Prisma.RiderEarningWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiderEarningCreateWithoutDeliveryInput, Prisma.RiderEarningUncheckedCreateWithoutDeliveryInput>;
};
export type RiderEarningCreateManyDeliveryInputEnvelope = {
    data: Prisma.RiderEarningCreateManyDeliveryInput | Prisma.RiderEarningCreateManyDeliveryInput[];
    skipDuplicates?: boolean;
};
export type RiderEarningUpsertWithWhereUniqueWithoutDeliveryInput = {
    where: Prisma.RiderEarningWhereUniqueInput;
    update: Prisma.XOR<Prisma.RiderEarningUpdateWithoutDeliveryInput, Prisma.RiderEarningUncheckedUpdateWithoutDeliveryInput>;
    create: Prisma.XOR<Prisma.RiderEarningCreateWithoutDeliveryInput, Prisma.RiderEarningUncheckedCreateWithoutDeliveryInput>;
};
export type RiderEarningUpdateWithWhereUniqueWithoutDeliveryInput = {
    where: Prisma.RiderEarningWhereUniqueInput;
    data: Prisma.XOR<Prisma.RiderEarningUpdateWithoutDeliveryInput, Prisma.RiderEarningUncheckedUpdateWithoutDeliveryInput>;
};
export type RiderEarningUpdateManyWithWhereWithoutDeliveryInput = {
    where: Prisma.RiderEarningScalarWhereInput;
    data: Prisma.XOR<Prisma.RiderEarningUpdateManyMutationInput, Prisma.RiderEarningUncheckedUpdateManyWithoutDeliveryInput>;
};
export type RiderEarningCreateManyRiderInput = {
    id?: string;
    deliveryId?: string | null;
    amountUsd: number;
    type: $Enums.EarningType;
    status?: $Enums.EarningStatus;
    createdAt?: Date | string;
};
export type RiderEarningUpdateWithoutRiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amountUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType;
    status?: Prisma.EnumEarningStatusFieldUpdateOperationsInput | $Enums.EarningStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivery?: Prisma.DeliveryUpdateOneWithoutEarningsNestedInput;
};
export type RiderEarningUncheckedUpdateWithoutRiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amountUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType;
    status?: Prisma.EnumEarningStatusFieldUpdateOperationsInput | $Enums.EarningStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiderEarningUncheckedUpdateManyWithoutRiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amountUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType;
    status?: Prisma.EnumEarningStatusFieldUpdateOperationsInput | $Enums.EarningStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiderEarningCreateManyDeliveryInput = {
    id?: string;
    riderId: string;
    amountUsd: number;
    type: $Enums.EarningType;
    status?: $Enums.EarningStatus;
    createdAt?: Date | string;
};
export type RiderEarningUpdateWithoutDeliveryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amountUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType;
    status?: Prisma.EnumEarningStatusFieldUpdateOperationsInput | $Enums.EarningStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rider?: Prisma.RiderUpdateOneRequiredWithoutEarningsNestedInput;
};
export type RiderEarningUncheckedUpdateWithoutDeliveryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType;
    status?: Prisma.EnumEarningStatusFieldUpdateOperationsInput | $Enums.EarningStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiderEarningUncheckedUpdateManyWithoutDeliveryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    type?: Prisma.EnumEarningTypeFieldUpdateOperationsInput | $Enums.EarningType;
    status?: Prisma.EnumEarningStatusFieldUpdateOperationsInput | $Enums.EarningStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiderEarningSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    riderId?: boolean;
    deliveryId?: boolean;
    amountUsd?: boolean;
    type?: boolean;
    status?: boolean;
    createdAt?: boolean;
    delivery?: boolean | Prisma.RiderEarning$deliveryArgs<ExtArgs>;
    rider?: boolean | Prisma.RiderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["riderEarning"]>;
export type RiderEarningSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    riderId?: boolean;
    deliveryId?: boolean;
    amountUsd?: boolean;
    type?: boolean;
    status?: boolean;
    createdAt?: boolean;
    delivery?: boolean | Prisma.RiderEarning$deliveryArgs<ExtArgs>;
    rider?: boolean | Prisma.RiderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["riderEarning"]>;
export type RiderEarningSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    riderId?: boolean;
    deliveryId?: boolean;
    amountUsd?: boolean;
    type?: boolean;
    status?: boolean;
    createdAt?: boolean;
    delivery?: boolean | Prisma.RiderEarning$deliveryArgs<ExtArgs>;
    rider?: boolean | Prisma.RiderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["riderEarning"]>;
export type RiderEarningSelectScalar = {
    id?: boolean;
    riderId?: boolean;
    deliveryId?: boolean;
    amountUsd?: boolean;
    type?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type RiderEarningOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "riderId" | "deliveryId" | "amountUsd" | "type" | "status" | "createdAt", ExtArgs["result"]["riderEarning"]>;
export type RiderEarningInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    delivery?: boolean | Prisma.RiderEarning$deliveryArgs<ExtArgs>;
    rider?: boolean | Prisma.RiderDefaultArgs<ExtArgs>;
};
export type RiderEarningIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    delivery?: boolean | Prisma.RiderEarning$deliveryArgs<ExtArgs>;
    rider?: boolean | Prisma.RiderDefaultArgs<ExtArgs>;
};
export type RiderEarningIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    delivery?: boolean | Prisma.RiderEarning$deliveryArgs<ExtArgs>;
    rider?: boolean | Prisma.RiderDefaultArgs<ExtArgs>;
};
export type $RiderEarningPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RiderEarning";
    objects: {
        delivery: Prisma.$DeliveryPayload<ExtArgs> | null;
        rider: Prisma.$RiderPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        riderId: string;
        deliveryId: string | null;
        amountUsd: number;
        type: $Enums.EarningType;
        status: $Enums.EarningStatus;
        createdAt: Date;
    }, ExtArgs["result"]["riderEarning"]>;
    composites: {};
};
export type RiderEarningGetPayload<S extends boolean | null | undefined | RiderEarningDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RiderEarningPayload, S>;
export type RiderEarningCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RiderEarningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RiderEarningCountAggregateInputType | true;
};
export interface RiderEarningDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RiderEarning'];
        meta: {
            name: 'RiderEarning';
        };
    };
    findUnique<T extends RiderEarningFindUniqueArgs>(args: Prisma.SelectSubset<T, RiderEarningFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RiderEarningClient<runtime.Types.Result.GetResult<Prisma.$RiderEarningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RiderEarningFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RiderEarningFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RiderEarningClient<runtime.Types.Result.GetResult<Prisma.$RiderEarningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RiderEarningFindFirstArgs>(args?: Prisma.SelectSubset<T, RiderEarningFindFirstArgs<ExtArgs>>): Prisma.Prisma__RiderEarningClient<runtime.Types.Result.GetResult<Prisma.$RiderEarningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RiderEarningFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RiderEarningFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RiderEarningClient<runtime.Types.Result.GetResult<Prisma.$RiderEarningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RiderEarningFindManyArgs>(args?: Prisma.SelectSubset<T, RiderEarningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiderEarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RiderEarningCreateArgs>(args: Prisma.SelectSubset<T, RiderEarningCreateArgs<ExtArgs>>): Prisma.Prisma__RiderEarningClient<runtime.Types.Result.GetResult<Prisma.$RiderEarningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RiderEarningCreateManyArgs>(args?: Prisma.SelectSubset<T, RiderEarningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RiderEarningCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RiderEarningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiderEarningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RiderEarningDeleteArgs>(args: Prisma.SelectSubset<T, RiderEarningDeleteArgs<ExtArgs>>): Prisma.Prisma__RiderEarningClient<runtime.Types.Result.GetResult<Prisma.$RiderEarningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RiderEarningUpdateArgs>(args: Prisma.SelectSubset<T, RiderEarningUpdateArgs<ExtArgs>>): Prisma.Prisma__RiderEarningClient<runtime.Types.Result.GetResult<Prisma.$RiderEarningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RiderEarningDeleteManyArgs>(args?: Prisma.SelectSubset<T, RiderEarningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RiderEarningUpdateManyArgs>(args: Prisma.SelectSubset<T, RiderEarningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RiderEarningUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RiderEarningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiderEarningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RiderEarningUpsertArgs>(args: Prisma.SelectSubset<T, RiderEarningUpsertArgs<ExtArgs>>): Prisma.Prisma__RiderEarningClient<runtime.Types.Result.GetResult<Prisma.$RiderEarningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RiderEarningCountArgs>(args?: Prisma.Subset<T, RiderEarningCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RiderEarningCountAggregateOutputType> : number>;
    aggregate<T extends RiderEarningAggregateArgs>(args: Prisma.Subset<T, RiderEarningAggregateArgs>): Prisma.PrismaPromise<GetRiderEarningAggregateType<T>>;
    groupBy<T extends RiderEarningGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RiderEarningGroupByArgs['orderBy'];
    } : {
        orderBy?: RiderEarningGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RiderEarningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiderEarningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RiderEarningFieldRefs;
}
export interface Prisma__RiderEarningClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    delivery<T extends Prisma.RiderEarning$deliveryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RiderEarning$deliveryArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    rider<T extends Prisma.RiderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RiderDefaultArgs<ExtArgs>>): Prisma.Prisma__RiderClient<runtime.Types.Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RiderEarningFieldRefs {
    readonly id: Prisma.FieldRef<"RiderEarning", 'String'>;
    readonly riderId: Prisma.FieldRef<"RiderEarning", 'String'>;
    readonly deliveryId: Prisma.FieldRef<"RiderEarning", 'String'>;
    readonly amountUsd: Prisma.FieldRef<"RiderEarning", 'Float'>;
    readonly type: Prisma.FieldRef<"RiderEarning", 'EarningType'>;
    readonly status: Prisma.FieldRef<"RiderEarning", 'EarningStatus'>;
    readonly createdAt: Prisma.FieldRef<"RiderEarning", 'DateTime'>;
}
export type RiderEarningFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderEarningSelect<ExtArgs> | null;
    omit?: Prisma.RiderEarningOmit<ExtArgs> | null;
    include?: Prisma.RiderEarningInclude<ExtArgs> | null;
    where: Prisma.RiderEarningWhereUniqueInput;
};
export type RiderEarningFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderEarningSelect<ExtArgs> | null;
    omit?: Prisma.RiderEarningOmit<ExtArgs> | null;
    include?: Prisma.RiderEarningInclude<ExtArgs> | null;
    where: Prisma.RiderEarningWhereUniqueInput;
};
export type RiderEarningFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderEarningSelect<ExtArgs> | null;
    omit?: Prisma.RiderEarningOmit<ExtArgs> | null;
    include?: Prisma.RiderEarningInclude<ExtArgs> | null;
    where?: Prisma.RiderEarningWhereInput;
    orderBy?: Prisma.RiderEarningOrderByWithRelationInput | Prisma.RiderEarningOrderByWithRelationInput[];
    cursor?: Prisma.RiderEarningWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiderEarningScalarFieldEnum | Prisma.RiderEarningScalarFieldEnum[];
};
export type RiderEarningFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderEarningSelect<ExtArgs> | null;
    omit?: Prisma.RiderEarningOmit<ExtArgs> | null;
    include?: Prisma.RiderEarningInclude<ExtArgs> | null;
    where?: Prisma.RiderEarningWhereInput;
    orderBy?: Prisma.RiderEarningOrderByWithRelationInput | Prisma.RiderEarningOrderByWithRelationInput[];
    cursor?: Prisma.RiderEarningWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiderEarningScalarFieldEnum | Prisma.RiderEarningScalarFieldEnum[];
};
export type RiderEarningFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderEarningSelect<ExtArgs> | null;
    omit?: Prisma.RiderEarningOmit<ExtArgs> | null;
    include?: Prisma.RiderEarningInclude<ExtArgs> | null;
    where?: Prisma.RiderEarningWhereInput;
    orderBy?: Prisma.RiderEarningOrderByWithRelationInput | Prisma.RiderEarningOrderByWithRelationInput[];
    cursor?: Prisma.RiderEarningWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiderEarningScalarFieldEnum | Prisma.RiderEarningScalarFieldEnum[];
};
export type RiderEarningCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderEarningSelect<ExtArgs> | null;
    omit?: Prisma.RiderEarningOmit<ExtArgs> | null;
    include?: Prisma.RiderEarningInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiderEarningCreateInput, Prisma.RiderEarningUncheckedCreateInput>;
};
export type RiderEarningCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RiderEarningCreateManyInput | Prisma.RiderEarningCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RiderEarningCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderEarningSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RiderEarningOmit<ExtArgs> | null;
    data: Prisma.RiderEarningCreateManyInput | Prisma.RiderEarningCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RiderEarningIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RiderEarningUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderEarningSelect<ExtArgs> | null;
    omit?: Prisma.RiderEarningOmit<ExtArgs> | null;
    include?: Prisma.RiderEarningInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiderEarningUpdateInput, Prisma.RiderEarningUncheckedUpdateInput>;
    where: Prisma.RiderEarningWhereUniqueInput;
};
export type RiderEarningUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RiderEarningUpdateManyMutationInput, Prisma.RiderEarningUncheckedUpdateManyInput>;
    where?: Prisma.RiderEarningWhereInput;
    limit?: number;
};
export type RiderEarningUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderEarningSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RiderEarningOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiderEarningUpdateManyMutationInput, Prisma.RiderEarningUncheckedUpdateManyInput>;
    where?: Prisma.RiderEarningWhereInput;
    limit?: number;
    include?: Prisma.RiderEarningIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RiderEarningUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderEarningSelect<ExtArgs> | null;
    omit?: Prisma.RiderEarningOmit<ExtArgs> | null;
    include?: Prisma.RiderEarningInclude<ExtArgs> | null;
    where: Prisma.RiderEarningWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiderEarningCreateInput, Prisma.RiderEarningUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RiderEarningUpdateInput, Prisma.RiderEarningUncheckedUpdateInput>;
};
export type RiderEarningDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderEarningSelect<ExtArgs> | null;
    omit?: Prisma.RiderEarningOmit<ExtArgs> | null;
    include?: Prisma.RiderEarningInclude<ExtArgs> | null;
    where: Prisma.RiderEarningWhereUniqueInput;
};
export type RiderEarningDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiderEarningWhereInput;
    limit?: number;
};
export type RiderEarning$deliveryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where?: Prisma.DeliveryWhereInput;
};
export type RiderEarningDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderEarningSelect<ExtArgs> | null;
    omit?: Prisma.RiderEarningOmit<ExtArgs> | null;
    include?: Prisma.RiderEarningInclude<ExtArgs> | null;
};
export {};

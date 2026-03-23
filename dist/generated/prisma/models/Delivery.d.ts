import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type DeliveryModel = runtime.Types.Result.DefaultSelection<Prisma.$DeliveryPayload>;
export type AggregateDelivery = {
    _count: DeliveryCountAggregateOutputType | null;
    _avg: DeliveryAvgAggregateOutputType | null;
    _sum: DeliverySumAggregateOutputType | null;
    _min: DeliveryMinAggregateOutputType | null;
    _max: DeliveryMaxAggregateOutputType | null;
};
export type DeliveryAvgAggregateOutputType = {
    distanceKm: number | null;
    feeUsd: number | null;
    platformCut: number | null;
    riderPayout: number | null;
};
export type DeliverySumAggregateOutputType = {
    distanceKm: number | null;
    feeUsd: number | null;
    platformCut: number | null;
    riderPayout: number | null;
};
export type DeliveryMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    riderId: string | null;
    pickupAddress: string | null;
    dropoffAddress: string | null;
    distanceKm: number | null;
    feeUsd: number | null;
    platformCut: number | null;
    riderPayout: number | null;
    status: $Enums.DeliveryStatus | null;
    assignedAt: Date | null;
    pickedUpAt: Date | null;
    deliveredAt: Date | null;
    createdAt: Date | null;
};
export type DeliveryMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    riderId: string | null;
    pickupAddress: string | null;
    dropoffAddress: string | null;
    distanceKm: number | null;
    feeUsd: number | null;
    platformCut: number | null;
    riderPayout: number | null;
    status: $Enums.DeliveryStatus | null;
    assignedAt: Date | null;
    pickedUpAt: Date | null;
    deliveredAt: Date | null;
    createdAt: Date | null;
};
export type DeliveryCountAggregateOutputType = {
    id: number;
    orderId: number;
    riderId: number;
    pickupAddress: number;
    dropoffAddress: number;
    distanceKm: number;
    feeUsd: number;
    platformCut: number;
    riderPayout: number;
    status: number;
    assignedAt: number;
    pickedUpAt: number;
    deliveredAt: number;
    createdAt: number;
    _all: number;
};
export type DeliveryAvgAggregateInputType = {
    distanceKm?: true;
    feeUsd?: true;
    platformCut?: true;
    riderPayout?: true;
};
export type DeliverySumAggregateInputType = {
    distanceKm?: true;
    feeUsd?: true;
    platformCut?: true;
    riderPayout?: true;
};
export type DeliveryMinAggregateInputType = {
    id?: true;
    orderId?: true;
    riderId?: true;
    pickupAddress?: true;
    dropoffAddress?: true;
    distanceKm?: true;
    feeUsd?: true;
    platformCut?: true;
    riderPayout?: true;
    status?: true;
    assignedAt?: true;
    pickedUpAt?: true;
    deliveredAt?: true;
    createdAt?: true;
};
export type DeliveryMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    riderId?: true;
    pickupAddress?: true;
    dropoffAddress?: true;
    distanceKm?: true;
    feeUsd?: true;
    platformCut?: true;
    riderPayout?: true;
    status?: true;
    assignedAt?: true;
    pickedUpAt?: true;
    deliveredAt?: true;
    createdAt?: true;
};
export type DeliveryCountAggregateInputType = {
    id?: true;
    orderId?: true;
    riderId?: true;
    pickupAddress?: true;
    dropoffAddress?: true;
    distanceKm?: true;
    feeUsd?: true;
    platformCut?: true;
    riderPayout?: true;
    status?: true;
    assignedAt?: true;
    pickedUpAt?: true;
    deliveredAt?: true;
    createdAt?: true;
    _all?: true;
};
export type DeliveryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeliveryWhereInput;
    orderBy?: Prisma.DeliveryOrderByWithRelationInput | Prisma.DeliveryOrderByWithRelationInput[];
    cursor?: Prisma.DeliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DeliveryCountAggregateInputType;
    _avg?: DeliveryAvgAggregateInputType;
    _sum?: DeliverySumAggregateInputType;
    _min?: DeliveryMinAggregateInputType;
    _max?: DeliveryMaxAggregateInputType;
};
export type GetDeliveryAggregateType<T extends DeliveryAggregateArgs> = {
    [P in keyof T & keyof AggregateDelivery]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDelivery[P]> : Prisma.GetScalarType<T[P], AggregateDelivery[P]>;
};
export type DeliveryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeliveryWhereInput;
    orderBy?: Prisma.DeliveryOrderByWithAggregationInput | Prisma.DeliveryOrderByWithAggregationInput[];
    by: Prisma.DeliveryScalarFieldEnum[] | Prisma.DeliveryScalarFieldEnum;
    having?: Prisma.DeliveryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeliveryCountAggregateInputType | true;
    _avg?: DeliveryAvgAggregateInputType;
    _sum?: DeliverySumAggregateInputType;
    _min?: DeliveryMinAggregateInputType;
    _max?: DeliveryMaxAggregateInputType;
};
export type DeliveryGroupByOutputType = {
    id: string;
    orderId: string;
    riderId: string | null;
    pickupAddress: string;
    dropoffAddress: string;
    distanceKm: number | null;
    feeUsd: number;
    platformCut: number;
    riderPayout: number;
    status: $Enums.DeliveryStatus;
    assignedAt: Date | null;
    pickedUpAt: Date | null;
    deliveredAt: Date | null;
    createdAt: Date;
    _count: DeliveryCountAggregateOutputType | null;
    _avg: DeliveryAvgAggregateOutputType | null;
    _sum: DeliverySumAggregateOutputType | null;
    _min: DeliveryMinAggregateOutputType | null;
    _max: DeliveryMaxAggregateOutputType | null;
};
type GetDeliveryGroupByPayload<T extends DeliveryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeliveryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeliveryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeliveryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeliveryGroupByOutputType[P]>;
}>>;
export type DeliveryWhereInput = {
    AND?: Prisma.DeliveryWhereInput | Prisma.DeliveryWhereInput[];
    OR?: Prisma.DeliveryWhereInput[];
    NOT?: Prisma.DeliveryWhereInput | Prisma.DeliveryWhereInput[];
    id?: Prisma.StringFilter<"Delivery"> | string;
    orderId?: Prisma.StringFilter<"Delivery"> | string;
    riderId?: Prisma.StringNullableFilter<"Delivery"> | string | null;
    pickupAddress?: Prisma.StringFilter<"Delivery"> | string;
    dropoffAddress?: Prisma.StringFilter<"Delivery"> | string;
    distanceKm?: Prisma.FloatNullableFilter<"Delivery"> | number | null;
    feeUsd?: Prisma.FloatFilter<"Delivery"> | number;
    platformCut?: Prisma.FloatFilter<"Delivery"> | number;
    riderPayout?: Prisma.FloatFilter<"Delivery"> | number;
    status?: Prisma.EnumDeliveryStatusFilter<"Delivery"> | $Enums.DeliveryStatus;
    assignedAt?: Prisma.DateTimeNullableFilter<"Delivery"> | Date | string | null;
    pickedUpAt?: Prisma.DateTimeNullableFilter<"Delivery"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableFilter<"Delivery"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Delivery"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    rider?: Prisma.XOR<Prisma.RiderNullableScalarRelationFilter, Prisma.RiderWhereInput> | null;
    earnings?: Prisma.RiderEarningListRelationFilter;
};
export type DeliveryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    riderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pickupAddress?: Prisma.SortOrder;
    dropoffAddress?: Prisma.SortOrder;
    distanceKm?: Prisma.SortOrderInput | Prisma.SortOrder;
    feeUsd?: Prisma.SortOrder;
    platformCut?: Prisma.SortOrder;
    riderPayout?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    pickedUpAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
    rider?: Prisma.RiderOrderByWithRelationInput;
    earnings?: Prisma.RiderEarningOrderByRelationAggregateInput;
};
export type DeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderId?: string;
    AND?: Prisma.DeliveryWhereInput | Prisma.DeliveryWhereInput[];
    OR?: Prisma.DeliveryWhereInput[];
    NOT?: Prisma.DeliveryWhereInput | Prisma.DeliveryWhereInput[];
    riderId?: Prisma.StringNullableFilter<"Delivery"> | string | null;
    pickupAddress?: Prisma.StringFilter<"Delivery"> | string;
    dropoffAddress?: Prisma.StringFilter<"Delivery"> | string;
    distanceKm?: Prisma.FloatNullableFilter<"Delivery"> | number | null;
    feeUsd?: Prisma.FloatFilter<"Delivery"> | number;
    platformCut?: Prisma.FloatFilter<"Delivery"> | number;
    riderPayout?: Prisma.FloatFilter<"Delivery"> | number;
    status?: Prisma.EnumDeliveryStatusFilter<"Delivery"> | $Enums.DeliveryStatus;
    assignedAt?: Prisma.DateTimeNullableFilter<"Delivery"> | Date | string | null;
    pickedUpAt?: Prisma.DateTimeNullableFilter<"Delivery"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableFilter<"Delivery"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Delivery"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    rider?: Prisma.XOR<Prisma.RiderNullableScalarRelationFilter, Prisma.RiderWhereInput> | null;
    earnings?: Prisma.RiderEarningListRelationFilter;
}, "id" | "orderId">;
export type DeliveryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    riderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pickupAddress?: Prisma.SortOrder;
    dropoffAddress?: Prisma.SortOrder;
    distanceKm?: Prisma.SortOrderInput | Prisma.SortOrder;
    feeUsd?: Prisma.SortOrder;
    platformCut?: Prisma.SortOrder;
    riderPayout?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    pickedUpAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DeliveryCountOrderByAggregateInput;
    _avg?: Prisma.DeliveryAvgOrderByAggregateInput;
    _max?: Prisma.DeliveryMaxOrderByAggregateInput;
    _min?: Prisma.DeliveryMinOrderByAggregateInput;
    _sum?: Prisma.DeliverySumOrderByAggregateInput;
};
export type DeliveryScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeliveryScalarWhereWithAggregatesInput | Prisma.DeliveryScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeliveryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeliveryScalarWhereWithAggregatesInput | Prisma.DeliveryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Delivery"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"Delivery"> | string;
    riderId?: Prisma.StringNullableWithAggregatesFilter<"Delivery"> | string | null;
    pickupAddress?: Prisma.StringWithAggregatesFilter<"Delivery"> | string;
    dropoffAddress?: Prisma.StringWithAggregatesFilter<"Delivery"> | string;
    distanceKm?: Prisma.FloatNullableWithAggregatesFilter<"Delivery"> | number | null;
    feeUsd?: Prisma.FloatWithAggregatesFilter<"Delivery"> | number;
    platformCut?: Prisma.FloatWithAggregatesFilter<"Delivery"> | number;
    riderPayout?: Prisma.FloatWithAggregatesFilter<"Delivery"> | number;
    status?: Prisma.EnumDeliveryStatusWithAggregatesFilter<"Delivery"> | $Enums.DeliveryStatus;
    assignedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Delivery"> | Date | string | null;
    pickedUpAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Delivery"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Delivery"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Delivery"> | Date | string;
};
export type DeliveryCreateInput = {
    id?: string;
    pickupAddress: string;
    dropoffAddress: string;
    distanceKm?: number | null;
    feeUsd: number;
    platformCut: number;
    riderPayout: number;
    status?: $Enums.DeliveryStatus;
    assignedAt?: Date | string | null;
    pickedUpAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutDeliveryInput;
    rider?: Prisma.RiderCreateNestedOneWithoutDeliveriesInput;
    earnings?: Prisma.RiderEarningCreateNestedManyWithoutDeliveryInput;
};
export type DeliveryUncheckedCreateInput = {
    id?: string;
    orderId: string;
    riderId?: string | null;
    pickupAddress: string;
    dropoffAddress: string;
    distanceKm?: number | null;
    feeUsd: number;
    platformCut: number;
    riderPayout: number;
    status?: $Enums.DeliveryStatus;
    assignedAt?: Date | string | null;
    pickedUpAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    earnings?: Prisma.RiderEarningUncheckedCreateNestedManyWithoutDeliveryInput;
};
export type DeliveryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    dropoffAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    distanceKm?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feeUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformCut?: Prisma.FloatFieldUpdateOperationsInput | number;
    riderPayout?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pickedUpAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutDeliveryNestedInput;
    rider?: Prisma.RiderUpdateOneWithoutDeliveriesNestedInput;
    earnings?: Prisma.RiderEarningUpdateManyWithoutDeliveryNestedInput;
};
export type DeliveryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    dropoffAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    distanceKm?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feeUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformCut?: Prisma.FloatFieldUpdateOperationsInput | number;
    riderPayout?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pickedUpAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    earnings?: Prisma.RiderEarningUncheckedUpdateManyWithoutDeliveryNestedInput;
};
export type DeliveryCreateManyInput = {
    id?: string;
    orderId: string;
    riderId?: string | null;
    pickupAddress: string;
    dropoffAddress: string;
    distanceKm?: number | null;
    feeUsd: number;
    platformCut: number;
    riderPayout: number;
    status?: $Enums.DeliveryStatus;
    assignedAt?: Date | string | null;
    pickedUpAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
};
export type DeliveryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    dropoffAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    distanceKm?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feeUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformCut?: Prisma.FloatFieldUpdateOperationsInput | number;
    riderPayout?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pickedUpAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeliveryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    dropoffAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    distanceKm?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feeUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformCut?: Prisma.FloatFieldUpdateOperationsInput | number;
    riderPayout?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pickedUpAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeliveryNullableScalarRelationFilter = {
    is?: Prisma.DeliveryWhereInput | null;
    isNot?: Prisma.DeliveryWhereInput | null;
};
export type DeliveryListRelationFilter = {
    every?: Prisma.DeliveryWhereInput;
    some?: Prisma.DeliveryWhereInput;
    none?: Prisma.DeliveryWhereInput;
};
export type DeliveryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DeliveryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    riderId?: Prisma.SortOrder;
    pickupAddress?: Prisma.SortOrder;
    dropoffAddress?: Prisma.SortOrder;
    distanceKm?: Prisma.SortOrder;
    feeUsd?: Prisma.SortOrder;
    platformCut?: Prisma.SortOrder;
    riderPayout?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    pickedUpAt?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeliveryAvgOrderByAggregateInput = {
    distanceKm?: Prisma.SortOrder;
    feeUsd?: Prisma.SortOrder;
    platformCut?: Prisma.SortOrder;
    riderPayout?: Prisma.SortOrder;
};
export type DeliveryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    riderId?: Prisma.SortOrder;
    pickupAddress?: Prisma.SortOrder;
    dropoffAddress?: Prisma.SortOrder;
    distanceKm?: Prisma.SortOrder;
    feeUsd?: Prisma.SortOrder;
    platformCut?: Prisma.SortOrder;
    riderPayout?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    pickedUpAt?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeliveryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    riderId?: Prisma.SortOrder;
    pickupAddress?: Prisma.SortOrder;
    dropoffAddress?: Prisma.SortOrder;
    distanceKm?: Prisma.SortOrder;
    feeUsd?: Prisma.SortOrder;
    platformCut?: Prisma.SortOrder;
    riderPayout?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    pickedUpAt?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeliverySumOrderByAggregateInput = {
    distanceKm?: Prisma.SortOrder;
    feeUsd?: Prisma.SortOrder;
    platformCut?: Prisma.SortOrder;
    riderPayout?: Prisma.SortOrder;
};
export type DeliveryCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.DeliveryCreateWithoutOrderInput, Prisma.DeliveryUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.DeliveryCreateOrConnectWithoutOrderInput;
    connect?: Prisma.DeliveryWhereUniqueInput;
};
export type DeliveryUncheckedCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.DeliveryCreateWithoutOrderInput, Prisma.DeliveryUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.DeliveryCreateOrConnectWithoutOrderInput;
    connect?: Prisma.DeliveryWhereUniqueInput;
};
export type DeliveryUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.DeliveryCreateWithoutOrderInput, Prisma.DeliveryUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.DeliveryCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.DeliveryUpsertWithoutOrderInput;
    disconnect?: Prisma.DeliveryWhereInput | boolean;
    delete?: Prisma.DeliveryWhereInput | boolean;
    connect?: Prisma.DeliveryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DeliveryUpdateToOneWithWhereWithoutOrderInput, Prisma.DeliveryUpdateWithoutOrderInput>, Prisma.DeliveryUncheckedUpdateWithoutOrderInput>;
};
export type DeliveryUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.DeliveryCreateWithoutOrderInput, Prisma.DeliveryUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.DeliveryCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.DeliveryUpsertWithoutOrderInput;
    disconnect?: Prisma.DeliveryWhereInput | boolean;
    delete?: Prisma.DeliveryWhereInput | boolean;
    connect?: Prisma.DeliveryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DeliveryUpdateToOneWithWhereWithoutOrderInput, Prisma.DeliveryUpdateWithoutOrderInput>, Prisma.DeliveryUncheckedUpdateWithoutOrderInput>;
};
export type DeliveryCreateNestedManyWithoutRiderInput = {
    create?: Prisma.XOR<Prisma.DeliveryCreateWithoutRiderInput, Prisma.DeliveryUncheckedCreateWithoutRiderInput> | Prisma.DeliveryCreateWithoutRiderInput[] | Prisma.DeliveryUncheckedCreateWithoutRiderInput[];
    connectOrCreate?: Prisma.DeliveryCreateOrConnectWithoutRiderInput | Prisma.DeliveryCreateOrConnectWithoutRiderInput[];
    createMany?: Prisma.DeliveryCreateManyRiderInputEnvelope;
    connect?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
};
export type DeliveryUncheckedCreateNestedManyWithoutRiderInput = {
    create?: Prisma.XOR<Prisma.DeliveryCreateWithoutRiderInput, Prisma.DeliveryUncheckedCreateWithoutRiderInput> | Prisma.DeliveryCreateWithoutRiderInput[] | Prisma.DeliveryUncheckedCreateWithoutRiderInput[];
    connectOrCreate?: Prisma.DeliveryCreateOrConnectWithoutRiderInput | Prisma.DeliveryCreateOrConnectWithoutRiderInput[];
    createMany?: Prisma.DeliveryCreateManyRiderInputEnvelope;
    connect?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
};
export type DeliveryUpdateManyWithoutRiderNestedInput = {
    create?: Prisma.XOR<Prisma.DeliveryCreateWithoutRiderInput, Prisma.DeliveryUncheckedCreateWithoutRiderInput> | Prisma.DeliveryCreateWithoutRiderInput[] | Prisma.DeliveryUncheckedCreateWithoutRiderInput[];
    connectOrCreate?: Prisma.DeliveryCreateOrConnectWithoutRiderInput | Prisma.DeliveryCreateOrConnectWithoutRiderInput[];
    upsert?: Prisma.DeliveryUpsertWithWhereUniqueWithoutRiderInput | Prisma.DeliveryUpsertWithWhereUniqueWithoutRiderInput[];
    createMany?: Prisma.DeliveryCreateManyRiderInputEnvelope;
    set?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
    disconnect?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
    delete?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
    connect?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
    update?: Prisma.DeliveryUpdateWithWhereUniqueWithoutRiderInput | Prisma.DeliveryUpdateWithWhereUniqueWithoutRiderInput[];
    updateMany?: Prisma.DeliveryUpdateManyWithWhereWithoutRiderInput | Prisma.DeliveryUpdateManyWithWhereWithoutRiderInput[];
    deleteMany?: Prisma.DeliveryScalarWhereInput | Prisma.DeliveryScalarWhereInput[];
};
export type DeliveryUncheckedUpdateManyWithoutRiderNestedInput = {
    create?: Prisma.XOR<Prisma.DeliveryCreateWithoutRiderInput, Prisma.DeliveryUncheckedCreateWithoutRiderInput> | Prisma.DeliveryCreateWithoutRiderInput[] | Prisma.DeliveryUncheckedCreateWithoutRiderInput[];
    connectOrCreate?: Prisma.DeliveryCreateOrConnectWithoutRiderInput | Prisma.DeliveryCreateOrConnectWithoutRiderInput[];
    upsert?: Prisma.DeliveryUpsertWithWhereUniqueWithoutRiderInput | Prisma.DeliveryUpsertWithWhereUniqueWithoutRiderInput[];
    createMany?: Prisma.DeliveryCreateManyRiderInputEnvelope;
    set?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
    disconnect?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
    delete?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
    connect?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
    update?: Prisma.DeliveryUpdateWithWhereUniqueWithoutRiderInput | Prisma.DeliveryUpdateWithWhereUniqueWithoutRiderInput[];
    updateMany?: Prisma.DeliveryUpdateManyWithWhereWithoutRiderInput | Prisma.DeliveryUpdateManyWithWhereWithoutRiderInput[];
    deleteMany?: Prisma.DeliveryScalarWhereInput | Prisma.DeliveryScalarWhereInput[];
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumDeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DeliveryCreateNestedOneWithoutEarningsInput = {
    create?: Prisma.XOR<Prisma.DeliveryCreateWithoutEarningsInput, Prisma.DeliveryUncheckedCreateWithoutEarningsInput>;
    connectOrCreate?: Prisma.DeliveryCreateOrConnectWithoutEarningsInput;
    connect?: Prisma.DeliveryWhereUniqueInput;
};
export type DeliveryUpdateOneWithoutEarningsNestedInput = {
    create?: Prisma.XOR<Prisma.DeliveryCreateWithoutEarningsInput, Prisma.DeliveryUncheckedCreateWithoutEarningsInput>;
    connectOrCreate?: Prisma.DeliveryCreateOrConnectWithoutEarningsInput;
    upsert?: Prisma.DeliveryUpsertWithoutEarningsInput;
    disconnect?: Prisma.DeliveryWhereInput | boolean;
    delete?: Prisma.DeliveryWhereInput | boolean;
    connect?: Prisma.DeliveryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DeliveryUpdateToOneWithWhereWithoutEarningsInput, Prisma.DeliveryUpdateWithoutEarningsInput>, Prisma.DeliveryUncheckedUpdateWithoutEarningsInput>;
};
export type DeliveryCreateWithoutOrderInput = {
    id?: string;
    pickupAddress: string;
    dropoffAddress: string;
    distanceKm?: number | null;
    feeUsd: number;
    platformCut: number;
    riderPayout: number;
    status?: $Enums.DeliveryStatus;
    assignedAt?: Date | string | null;
    pickedUpAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    rider?: Prisma.RiderCreateNestedOneWithoutDeliveriesInput;
    earnings?: Prisma.RiderEarningCreateNestedManyWithoutDeliveryInput;
};
export type DeliveryUncheckedCreateWithoutOrderInput = {
    id?: string;
    riderId?: string | null;
    pickupAddress: string;
    dropoffAddress: string;
    distanceKm?: number | null;
    feeUsd: number;
    platformCut: number;
    riderPayout: number;
    status?: $Enums.DeliveryStatus;
    assignedAt?: Date | string | null;
    pickedUpAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    earnings?: Prisma.RiderEarningUncheckedCreateNestedManyWithoutDeliveryInput;
};
export type DeliveryCreateOrConnectWithoutOrderInput = {
    where: Prisma.DeliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeliveryCreateWithoutOrderInput, Prisma.DeliveryUncheckedCreateWithoutOrderInput>;
};
export type DeliveryUpsertWithoutOrderInput = {
    update: Prisma.XOR<Prisma.DeliveryUpdateWithoutOrderInput, Prisma.DeliveryUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.DeliveryCreateWithoutOrderInput, Prisma.DeliveryUncheckedCreateWithoutOrderInput>;
    where?: Prisma.DeliveryWhereInput;
};
export type DeliveryUpdateToOneWithWhereWithoutOrderInput = {
    where?: Prisma.DeliveryWhereInput;
    data: Prisma.XOR<Prisma.DeliveryUpdateWithoutOrderInput, Prisma.DeliveryUncheckedUpdateWithoutOrderInput>;
};
export type DeliveryUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    dropoffAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    distanceKm?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feeUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformCut?: Prisma.FloatFieldUpdateOperationsInput | number;
    riderPayout?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pickedUpAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rider?: Prisma.RiderUpdateOneWithoutDeliveriesNestedInput;
    earnings?: Prisma.RiderEarningUpdateManyWithoutDeliveryNestedInput;
};
export type DeliveryUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    dropoffAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    distanceKm?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feeUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformCut?: Prisma.FloatFieldUpdateOperationsInput | number;
    riderPayout?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pickedUpAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    earnings?: Prisma.RiderEarningUncheckedUpdateManyWithoutDeliveryNestedInput;
};
export type DeliveryCreateWithoutRiderInput = {
    id?: string;
    pickupAddress: string;
    dropoffAddress: string;
    distanceKm?: number | null;
    feeUsd: number;
    platformCut: number;
    riderPayout: number;
    status?: $Enums.DeliveryStatus;
    assignedAt?: Date | string | null;
    pickedUpAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutDeliveryInput;
    earnings?: Prisma.RiderEarningCreateNestedManyWithoutDeliveryInput;
};
export type DeliveryUncheckedCreateWithoutRiderInput = {
    id?: string;
    orderId: string;
    pickupAddress: string;
    dropoffAddress: string;
    distanceKm?: number | null;
    feeUsd: number;
    platformCut: number;
    riderPayout: number;
    status?: $Enums.DeliveryStatus;
    assignedAt?: Date | string | null;
    pickedUpAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    earnings?: Prisma.RiderEarningUncheckedCreateNestedManyWithoutDeliveryInput;
};
export type DeliveryCreateOrConnectWithoutRiderInput = {
    where: Prisma.DeliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeliveryCreateWithoutRiderInput, Prisma.DeliveryUncheckedCreateWithoutRiderInput>;
};
export type DeliveryCreateManyRiderInputEnvelope = {
    data: Prisma.DeliveryCreateManyRiderInput | Prisma.DeliveryCreateManyRiderInput[];
    skipDuplicates?: boolean;
};
export type DeliveryUpsertWithWhereUniqueWithoutRiderInput = {
    where: Prisma.DeliveryWhereUniqueInput;
    update: Prisma.XOR<Prisma.DeliveryUpdateWithoutRiderInput, Prisma.DeliveryUncheckedUpdateWithoutRiderInput>;
    create: Prisma.XOR<Prisma.DeliveryCreateWithoutRiderInput, Prisma.DeliveryUncheckedCreateWithoutRiderInput>;
};
export type DeliveryUpdateWithWhereUniqueWithoutRiderInput = {
    where: Prisma.DeliveryWhereUniqueInput;
    data: Prisma.XOR<Prisma.DeliveryUpdateWithoutRiderInput, Prisma.DeliveryUncheckedUpdateWithoutRiderInput>;
};
export type DeliveryUpdateManyWithWhereWithoutRiderInput = {
    where: Prisma.DeliveryScalarWhereInput;
    data: Prisma.XOR<Prisma.DeliveryUpdateManyMutationInput, Prisma.DeliveryUncheckedUpdateManyWithoutRiderInput>;
};
export type DeliveryScalarWhereInput = {
    AND?: Prisma.DeliveryScalarWhereInput | Prisma.DeliveryScalarWhereInput[];
    OR?: Prisma.DeliveryScalarWhereInput[];
    NOT?: Prisma.DeliveryScalarWhereInput | Prisma.DeliveryScalarWhereInput[];
    id?: Prisma.StringFilter<"Delivery"> | string;
    orderId?: Prisma.StringFilter<"Delivery"> | string;
    riderId?: Prisma.StringNullableFilter<"Delivery"> | string | null;
    pickupAddress?: Prisma.StringFilter<"Delivery"> | string;
    dropoffAddress?: Prisma.StringFilter<"Delivery"> | string;
    distanceKm?: Prisma.FloatNullableFilter<"Delivery"> | number | null;
    feeUsd?: Prisma.FloatFilter<"Delivery"> | number;
    platformCut?: Prisma.FloatFilter<"Delivery"> | number;
    riderPayout?: Prisma.FloatFilter<"Delivery"> | number;
    status?: Prisma.EnumDeliveryStatusFilter<"Delivery"> | $Enums.DeliveryStatus;
    assignedAt?: Prisma.DateTimeNullableFilter<"Delivery"> | Date | string | null;
    pickedUpAt?: Prisma.DateTimeNullableFilter<"Delivery"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableFilter<"Delivery"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Delivery"> | Date | string;
};
export type DeliveryCreateWithoutEarningsInput = {
    id?: string;
    pickupAddress: string;
    dropoffAddress: string;
    distanceKm?: number | null;
    feeUsd: number;
    platformCut: number;
    riderPayout: number;
    status?: $Enums.DeliveryStatus;
    assignedAt?: Date | string | null;
    pickedUpAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutDeliveryInput;
    rider?: Prisma.RiderCreateNestedOneWithoutDeliveriesInput;
};
export type DeliveryUncheckedCreateWithoutEarningsInput = {
    id?: string;
    orderId: string;
    riderId?: string | null;
    pickupAddress: string;
    dropoffAddress: string;
    distanceKm?: number | null;
    feeUsd: number;
    platformCut: number;
    riderPayout: number;
    status?: $Enums.DeliveryStatus;
    assignedAt?: Date | string | null;
    pickedUpAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
};
export type DeliveryCreateOrConnectWithoutEarningsInput = {
    where: Prisma.DeliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeliveryCreateWithoutEarningsInput, Prisma.DeliveryUncheckedCreateWithoutEarningsInput>;
};
export type DeliveryUpsertWithoutEarningsInput = {
    update: Prisma.XOR<Prisma.DeliveryUpdateWithoutEarningsInput, Prisma.DeliveryUncheckedUpdateWithoutEarningsInput>;
    create: Prisma.XOR<Prisma.DeliveryCreateWithoutEarningsInput, Prisma.DeliveryUncheckedCreateWithoutEarningsInput>;
    where?: Prisma.DeliveryWhereInput;
};
export type DeliveryUpdateToOneWithWhereWithoutEarningsInput = {
    where?: Prisma.DeliveryWhereInput;
    data: Prisma.XOR<Prisma.DeliveryUpdateWithoutEarningsInput, Prisma.DeliveryUncheckedUpdateWithoutEarningsInput>;
};
export type DeliveryUpdateWithoutEarningsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    dropoffAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    distanceKm?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feeUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformCut?: Prisma.FloatFieldUpdateOperationsInput | number;
    riderPayout?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pickedUpAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutDeliveryNestedInput;
    rider?: Prisma.RiderUpdateOneWithoutDeliveriesNestedInput;
};
export type DeliveryUncheckedUpdateWithoutEarningsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    dropoffAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    distanceKm?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feeUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformCut?: Prisma.FloatFieldUpdateOperationsInput | number;
    riderPayout?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pickedUpAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeliveryCreateManyRiderInput = {
    id?: string;
    orderId: string;
    pickupAddress: string;
    dropoffAddress: string;
    distanceKm?: number | null;
    feeUsd: number;
    platformCut: number;
    riderPayout: number;
    status?: $Enums.DeliveryStatus;
    assignedAt?: Date | string | null;
    pickedUpAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
};
export type DeliveryUpdateWithoutRiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    dropoffAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    distanceKm?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feeUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformCut?: Prisma.FloatFieldUpdateOperationsInput | number;
    riderPayout?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pickedUpAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutDeliveryNestedInput;
    earnings?: Prisma.RiderEarningUpdateManyWithoutDeliveryNestedInput;
};
export type DeliveryUncheckedUpdateWithoutRiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    dropoffAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    distanceKm?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feeUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformCut?: Prisma.FloatFieldUpdateOperationsInput | number;
    riderPayout?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pickedUpAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    earnings?: Prisma.RiderEarningUncheckedUpdateManyWithoutDeliveryNestedInput;
};
export type DeliveryUncheckedUpdateManyWithoutRiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    dropoffAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    distanceKm?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feeUsd?: Prisma.FloatFieldUpdateOperationsInput | number;
    platformCut?: Prisma.FloatFieldUpdateOperationsInput | number;
    riderPayout?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pickedUpAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeliveryCountOutputType = {
    earnings: number;
};
export type DeliveryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    earnings?: boolean | DeliveryCountOutputTypeCountEarningsArgs;
};
export type DeliveryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliveryCountOutputTypeSelect<ExtArgs> | null;
};
export type DeliveryCountOutputTypeCountEarningsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiderEarningWhereInput;
};
export type DeliverySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    riderId?: boolean;
    pickupAddress?: boolean;
    dropoffAddress?: boolean;
    distanceKm?: boolean;
    feeUsd?: boolean;
    platformCut?: boolean;
    riderPayout?: boolean;
    status?: boolean;
    assignedAt?: boolean;
    pickedUpAt?: boolean;
    deliveredAt?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    rider?: boolean | Prisma.Delivery$riderArgs<ExtArgs>;
    earnings?: boolean | Prisma.Delivery$earningsArgs<ExtArgs>;
    _count?: boolean | Prisma.DeliveryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["delivery"]>;
export type DeliverySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    riderId?: boolean;
    pickupAddress?: boolean;
    dropoffAddress?: boolean;
    distanceKm?: boolean;
    feeUsd?: boolean;
    platformCut?: boolean;
    riderPayout?: boolean;
    status?: boolean;
    assignedAt?: boolean;
    pickedUpAt?: boolean;
    deliveredAt?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    rider?: boolean | Prisma.Delivery$riderArgs<ExtArgs>;
}, ExtArgs["result"]["delivery"]>;
export type DeliverySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    riderId?: boolean;
    pickupAddress?: boolean;
    dropoffAddress?: boolean;
    distanceKm?: boolean;
    feeUsd?: boolean;
    platformCut?: boolean;
    riderPayout?: boolean;
    status?: boolean;
    assignedAt?: boolean;
    pickedUpAt?: boolean;
    deliveredAt?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    rider?: boolean | Prisma.Delivery$riderArgs<ExtArgs>;
}, ExtArgs["result"]["delivery"]>;
export type DeliverySelectScalar = {
    id?: boolean;
    orderId?: boolean;
    riderId?: boolean;
    pickupAddress?: boolean;
    dropoffAddress?: boolean;
    distanceKm?: boolean;
    feeUsd?: boolean;
    platformCut?: boolean;
    riderPayout?: boolean;
    status?: boolean;
    assignedAt?: boolean;
    pickedUpAt?: boolean;
    deliveredAt?: boolean;
    createdAt?: boolean;
};
export type DeliveryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "riderId" | "pickupAddress" | "dropoffAddress" | "distanceKm" | "feeUsd" | "platformCut" | "riderPayout" | "status" | "assignedAt" | "pickedUpAt" | "deliveredAt" | "createdAt", ExtArgs["result"]["delivery"]>;
export type DeliveryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    rider?: boolean | Prisma.Delivery$riderArgs<ExtArgs>;
    earnings?: boolean | Prisma.Delivery$earningsArgs<ExtArgs>;
    _count?: boolean | Prisma.DeliveryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DeliveryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    rider?: boolean | Prisma.Delivery$riderArgs<ExtArgs>;
};
export type DeliveryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    rider?: boolean | Prisma.Delivery$riderArgs<ExtArgs>;
};
export type $DeliveryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Delivery";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
        rider: Prisma.$RiderPayload<ExtArgs> | null;
        earnings: Prisma.$RiderEarningPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        riderId: string | null;
        pickupAddress: string;
        dropoffAddress: string;
        distanceKm: number | null;
        feeUsd: number;
        platformCut: number;
        riderPayout: number;
        status: $Enums.DeliveryStatus;
        assignedAt: Date | null;
        pickedUpAt: Date | null;
        deliveredAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["delivery"]>;
    composites: {};
};
export type DeliveryGetPayload<S extends boolean | null | undefined | DeliveryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DeliveryPayload, S>;
export type DeliveryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeliveryCountAggregateInputType | true;
};
export interface DeliveryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Delivery'];
        meta: {
            name: 'Delivery';
        };
    };
    findUnique<T extends DeliveryFindUniqueArgs>(args: Prisma.SelectSubset<T, DeliveryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DeliveryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DeliveryFindFirstArgs>(args?: Prisma.SelectSubset<T, DeliveryFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DeliveryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DeliveryFindManyArgs>(args?: Prisma.SelectSubset<T, DeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DeliveryCreateArgs>(args: Prisma.SelectSubset<T, DeliveryCreateArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DeliveryCreateManyArgs>(args?: Prisma.SelectSubset<T, DeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DeliveryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DeliveryDeleteArgs>(args: Prisma.SelectSubset<T, DeliveryDeleteArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DeliveryUpdateArgs>(args: Prisma.SelectSubset<T, DeliveryUpdateArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DeliveryDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DeliveryUpdateManyArgs>(args: Prisma.SelectSubset<T, DeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DeliveryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DeliveryUpsertArgs>(args: Prisma.SelectSubset<T, DeliveryUpsertArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DeliveryCountArgs>(args?: Prisma.Subset<T, DeliveryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeliveryCountAggregateOutputType> : number>;
    aggregate<T extends DeliveryAggregateArgs>(args: Prisma.Subset<T, DeliveryAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAggregateType<T>>;
    groupBy<T extends DeliveryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeliveryGroupByArgs['orderBy'];
    } : {
        orderBy?: DeliveryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DeliveryFieldRefs;
}
export interface Prisma__DeliveryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    rider<T extends Prisma.Delivery$riderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Delivery$riderArgs<ExtArgs>>): Prisma.Prisma__RiderClient<runtime.Types.Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    earnings<T extends Prisma.Delivery$earningsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Delivery$earningsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiderEarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DeliveryFieldRefs {
    readonly id: Prisma.FieldRef<"Delivery", 'String'>;
    readonly orderId: Prisma.FieldRef<"Delivery", 'String'>;
    readonly riderId: Prisma.FieldRef<"Delivery", 'String'>;
    readonly pickupAddress: Prisma.FieldRef<"Delivery", 'String'>;
    readonly dropoffAddress: Prisma.FieldRef<"Delivery", 'String'>;
    readonly distanceKm: Prisma.FieldRef<"Delivery", 'Float'>;
    readonly feeUsd: Prisma.FieldRef<"Delivery", 'Float'>;
    readonly platformCut: Prisma.FieldRef<"Delivery", 'Float'>;
    readonly riderPayout: Prisma.FieldRef<"Delivery", 'Float'>;
    readonly status: Prisma.FieldRef<"Delivery", 'DeliveryStatus'>;
    readonly assignedAt: Prisma.FieldRef<"Delivery", 'DateTime'>;
    readonly pickedUpAt: Prisma.FieldRef<"Delivery", 'DateTime'>;
    readonly deliveredAt: Prisma.FieldRef<"Delivery", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Delivery", 'DateTime'>;
}
export type DeliveryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where: Prisma.DeliveryWhereUniqueInput;
};
export type DeliveryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where: Prisma.DeliveryWhereUniqueInput;
};
export type DeliveryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where?: Prisma.DeliveryWhereInput;
    orderBy?: Prisma.DeliveryOrderByWithRelationInput | Prisma.DeliveryOrderByWithRelationInput[];
    cursor?: Prisma.DeliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeliveryScalarFieldEnum | Prisma.DeliveryScalarFieldEnum[];
};
export type DeliveryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where?: Prisma.DeliveryWhereInput;
    orderBy?: Prisma.DeliveryOrderByWithRelationInput | Prisma.DeliveryOrderByWithRelationInput[];
    cursor?: Prisma.DeliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeliveryScalarFieldEnum | Prisma.DeliveryScalarFieldEnum[];
};
export type DeliveryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where?: Prisma.DeliveryWhereInput;
    orderBy?: Prisma.DeliveryOrderByWithRelationInput | Prisma.DeliveryOrderByWithRelationInput[];
    cursor?: Prisma.DeliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeliveryScalarFieldEnum | Prisma.DeliveryScalarFieldEnum[];
};
export type DeliveryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeliveryCreateInput, Prisma.DeliveryUncheckedCreateInput>;
};
export type DeliveryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DeliveryCreateManyInput | Prisma.DeliveryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DeliveryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    data: Prisma.DeliveryCreateManyInput | Prisma.DeliveryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DeliveryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DeliveryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeliveryUpdateInput, Prisma.DeliveryUncheckedUpdateInput>;
    where: Prisma.DeliveryWhereUniqueInput;
};
export type DeliveryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DeliveryUpdateManyMutationInput, Prisma.DeliveryUncheckedUpdateManyInput>;
    where?: Prisma.DeliveryWhereInput;
    limit?: number;
};
export type DeliveryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeliveryUpdateManyMutationInput, Prisma.DeliveryUncheckedUpdateManyInput>;
    where?: Prisma.DeliveryWhereInput;
    limit?: number;
    include?: Prisma.DeliveryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DeliveryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where: Prisma.DeliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeliveryCreateInput, Prisma.DeliveryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DeliveryUpdateInput, Prisma.DeliveryUncheckedUpdateInput>;
};
export type DeliveryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where: Prisma.DeliveryWhereUniqueInput;
};
export type DeliveryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeliveryWhereInput;
    limit?: number;
};
export type Delivery$riderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderSelect<ExtArgs> | null;
    omit?: Prisma.RiderOmit<ExtArgs> | null;
    include?: Prisma.RiderInclude<ExtArgs> | null;
    where?: Prisma.RiderWhereInput;
};
export type Delivery$earningsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DeliveryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
};
export {};

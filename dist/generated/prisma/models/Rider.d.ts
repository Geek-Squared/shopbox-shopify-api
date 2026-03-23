import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type RiderModel = runtime.Types.Result.DefaultSelection<Prisma.$RiderPayload>;
export type AggregateRider = {
    _count: RiderCountAggregateOutputType | null;
    _avg: RiderAvgAggregateOutputType | null;
    _sum: RiderSumAggregateOutputType | null;
    _min: RiderMinAggregateOutputType | null;
    _max: RiderMaxAggregateOutputType | null;
};
export type RiderAvgAggregateOutputType = {
    rating: number | null;
    totalDeliveries: number | null;
};
export type RiderSumAggregateOutputType = {
    rating: number | null;
    totalDeliveries: number | null;
};
export type RiderMinAggregateOutputType = {
    id: string | null;
    phoneNumber: string | null;
    fullName: string | null;
    nationalId: string | null;
    city: string | null;
    vehicleType: $Enums.VehicleType | null;
    isVerified: boolean | null;
    isOnline: boolean | null;
    rating: number | null;
    totalDeliveries: number | null;
    createdAt: Date | null;
};
export type RiderMaxAggregateOutputType = {
    id: string | null;
    phoneNumber: string | null;
    fullName: string | null;
    nationalId: string | null;
    city: string | null;
    vehicleType: $Enums.VehicleType | null;
    isVerified: boolean | null;
    isOnline: boolean | null;
    rating: number | null;
    totalDeliveries: number | null;
    createdAt: Date | null;
};
export type RiderCountAggregateOutputType = {
    id: number;
    phoneNumber: number;
    fullName: number;
    nationalId: number;
    city: number;
    vehicleType: number;
    isVerified: number;
    isOnline: number;
    rating: number;
    totalDeliveries: number;
    createdAt: number;
    _all: number;
};
export type RiderAvgAggregateInputType = {
    rating?: true;
    totalDeliveries?: true;
};
export type RiderSumAggregateInputType = {
    rating?: true;
    totalDeliveries?: true;
};
export type RiderMinAggregateInputType = {
    id?: true;
    phoneNumber?: true;
    fullName?: true;
    nationalId?: true;
    city?: true;
    vehicleType?: true;
    isVerified?: true;
    isOnline?: true;
    rating?: true;
    totalDeliveries?: true;
    createdAt?: true;
};
export type RiderMaxAggregateInputType = {
    id?: true;
    phoneNumber?: true;
    fullName?: true;
    nationalId?: true;
    city?: true;
    vehicleType?: true;
    isVerified?: true;
    isOnline?: true;
    rating?: true;
    totalDeliveries?: true;
    createdAt?: true;
};
export type RiderCountAggregateInputType = {
    id?: true;
    phoneNumber?: true;
    fullName?: true;
    nationalId?: true;
    city?: true;
    vehicleType?: true;
    isVerified?: true;
    isOnline?: true;
    rating?: true;
    totalDeliveries?: true;
    createdAt?: true;
    _all?: true;
};
export type RiderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiderWhereInput;
    orderBy?: Prisma.RiderOrderByWithRelationInput | Prisma.RiderOrderByWithRelationInput[];
    cursor?: Prisma.RiderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RiderCountAggregateInputType;
    _avg?: RiderAvgAggregateInputType;
    _sum?: RiderSumAggregateInputType;
    _min?: RiderMinAggregateInputType;
    _max?: RiderMaxAggregateInputType;
};
export type GetRiderAggregateType<T extends RiderAggregateArgs> = {
    [P in keyof T & keyof AggregateRider]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRider[P]> : Prisma.GetScalarType<T[P], AggregateRider[P]>;
};
export type RiderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiderWhereInput;
    orderBy?: Prisma.RiderOrderByWithAggregationInput | Prisma.RiderOrderByWithAggregationInput[];
    by: Prisma.RiderScalarFieldEnum[] | Prisma.RiderScalarFieldEnum;
    having?: Prisma.RiderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RiderCountAggregateInputType | true;
    _avg?: RiderAvgAggregateInputType;
    _sum?: RiderSumAggregateInputType;
    _min?: RiderMinAggregateInputType;
    _max?: RiderMaxAggregateInputType;
};
export type RiderGroupByOutputType = {
    id: string;
    phoneNumber: string;
    fullName: string;
    nationalId: string;
    city: string;
    vehicleType: $Enums.VehicleType;
    isVerified: boolean;
    isOnline: boolean;
    rating: number;
    totalDeliveries: number;
    createdAt: Date;
    _count: RiderCountAggregateOutputType | null;
    _avg: RiderAvgAggregateOutputType | null;
    _sum: RiderSumAggregateOutputType | null;
    _min: RiderMinAggregateOutputType | null;
    _max: RiderMaxAggregateOutputType | null;
};
type GetRiderGroupByPayload<T extends RiderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RiderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RiderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RiderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RiderGroupByOutputType[P]>;
}>>;
export type RiderWhereInput = {
    AND?: Prisma.RiderWhereInput | Prisma.RiderWhereInput[];
    OR?: Prisma.RiderWhereInput[];
    NOT?: Prisma.RiderWhereInput | Prisma.RiderWhereInput[];
    id?: Prisma.StringFilter<"Rider"> | string;
    phoneNumber?: Prisma.StringFilter<"Rider"> | string;
    fullName?: Prisma.StringFilter<"Rider"> | string;
    nationalId?: Prisma.StringFilter<"Rider"> | string;
    city?: Prisma.StringFilter<"Rider"> | string;
    vehicleType?: Prisma.EnumVehicleTypeFilter<"Rider"> | $Enums.VehicleType;
    isVerified?: Prisma.BoolFilter<"Rider"> | boolean;
    isOnline?: Prisma.BoolFilter<"Rider"> | boolean;
    rating?: Prisma.FloatFilter<"Rider"> | number;
    totalDeliveries?: Prisma.IntFilter<"Rider"> | number;
    createdAt?: Prisma.DateTimeFilter<"Rider"> | Date | string;
    deliveries?: Prisma.DeliveryListRelationFilter;
    earnings?: Prisma.RiderEarningListRelationFilter;
};
export type RiderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    nationalId?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    vehicleType?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isOnline?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    totalDeliveries?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    deliveries?: Prisma.DeliveryOrderByRelationAggregateInput;
    earnings?: Prisma.RiderEarningOrderByRelationAggregateInput;
};
export type RiderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    phoneNumber?: string;
    nationalId?: string;
    AND?: Prisma.RiderWhereInput | Prisma.RiderWhereInput[];
    OR?: Prisma.RiderWhereInput[];
    NOT?: Prisma.RiderWhereInput | Prisma.RiderWhereInput[];
    fullName?: Prisma.StringFilter<"Rider"> | string;
    city?: Prisma.StringFilter<"Rider"> | string;
    vehicleType?: Prisma.EnumVehicleTypeFilter<"Rider"> | $Enums.VehicleType;
    isVerified?: Prisma.BoolFilter<"Rider"> | boolean;
    isOnline?: Prisma.BoolFilter<"Rider"> | boolean;
    rating?: Prisma.FloatFilter<"Rider"> | number;
    totalDeliveries?: Prisma.IntFilter<"Rider"> | number;
    createdAt?: Prisma.DateTimeFilter<"Rider"> | Date | string;
    deliveries?: Prisma.DeliveryListRelationFilter;
    earnings?: Prisma.RiderEarningListRelationFilter;
}, "id" | "phoneNumber" | "nationalId">;
export type RiderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    nationalId?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    vehicleType?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isOnline?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    totalDeliveries?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RiderCountOrderByAggregateInput;
    _avg?: Prisma.RiderAvgOrderByAggregateInput;
    _max?: Prisma.RiderMaxOrderByAggregateInput;
    _min?: Prisma.RiderMinOrderByAggregateInput;
    _sum?: Prisma.RiderSumOrderByAggregateInput;
};
export type RiderScalarWhereWithAggregatesInput = {
    AND?: Prisma.RiderScalarWhereWithAggregatesInput | Prisma.RiderScalarWhereWithAggregatesInput[];
    OR?: Prisma.RiderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RiderScalarWhereWithAggregatesInput | Prisma.RiderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Rider"> | string;
    phoneNumber?: Prisma.StringWithAggregatesFilter<"Rider"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"Rider"> | string;
    nationalId?: Prisma.StringWithAggregatesFilter<"Rider"> | string;
    city?: Prisma.StringWithAggregatesFilter<"Rider"> | string;
    vehicleType?: Prisma.EnumVehicleTypeWithAggregatesFilter<"Rider"> | $Enums.VehicleType;
    isVerified?: Prisma.BoolWithAggregatesFilter<"Rider"> | boolean;
    isOnline?: Prisma.BoolWithAggregatesFilter<"Rider"> | boolean;
    rating?: Prisma.FloatWithAggregatesFilter<"Rider"> | number;
    totalDeliveries?: Prisma.IntWithAggregatesFilter<"Rider"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Rider"> | Date | string;
};
export type RiderCreateInput = {
    id?: string;
    phoneNumber: string;
    fullName: string;
    nationalId: string;
    city: string;
    vehicleType: $Enums.VehicleType;
    isVerified?: boolean;
    isOnline?: boolean;
    rating?: number;
    totalDeliveries?: number;
    createdAt?: Date | string;
    deliveries?: Prisma.DeliveryCreateNestedManyWithoutRiderInput;
    earnings?: Prisma.RiderEarningCreateNestedManyWithoutRiderInput;
};
export type RiderUncheckedCreateInput = {
    id?: string;
    phoneNumber: string;
    fullName: string;
    nationalId: string;
    city: string;
    vehicleType: $Enums.VehicleType;
    isVerified?: boolean;
    isOnline?: boolean;
    rating?: number;
    totalDeliveries?: number;
    createdAt?: Date | string;
    deliveries?: Prisma.DeliveryUncheckedCreateNestedManyWithoutRiderInput;
    earnings?: Prisma.RiderEarningUncheckedCreateNestedManyWithoutRiderInput;
};
export type RiderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nationalId?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleType?: Prisma.EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalDeliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.DeliveryUpdateManyWithoutRiderNestedInput;
    earnings?: Prisma.RiderEarningUpdateManyWithoutRiderNestedInput;
};
export type RiderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nationalId?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleType?: Prisma.EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalDeliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.DeliveryUncheckedUpdateManyWithoutRiderNestedInput;
    earnings?: Prisma.RiderEarningUncheckedUpdateManyWithoutRiderNestedInput;
};
export type RiderCreateManyInput = {
    id?: string;
    phoneNumber: string;
    fullName: string;
    nationalId: string;
    city: string;
    vehicleType: $Enums.VehicleType;
    isVerified?: boolean;
    isOnline?: boolean;
    rating?: number;
    totalDeliveries?: number;
    createdAt?: Date | string;
};
export type RiderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nationalId?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleType?: Prisma.EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalDeliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nationalId?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleType?: Prisma.EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalDeliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    nationalId?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    vehicleType?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isOnline?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    totalDeliveries?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RiderAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
    totalDeliveries?: Prisma.SortOrder;
};
export type RiderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    nationalId?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    vehicleType?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isOnline?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    totalDeliveries?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RiderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    nationalId?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    vehicleType?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isOnline?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    totalDeliveries?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RiderSumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
    totalDeliveries?: Prisma.SortOrder;
};
export type RiderNullableScalarRelationFilter = {
    is?: Prisma.RiderWhereInput | null;
    isNot?: Prisma.RiderWhereInput | null;
};
export type RiderScalarRelationFilter = {
    is?: Prisma.RiderWhereInput;
    isNot?: Prisma.RiderWhereInput;
};
export type EnumVehicleTypeFieldUpdateOperationsInput = {
    set?: $Enums.VehicleType;
};
export type RiderCreateNestedOneWithoutDeliveriesInput = {
    create?: Prisma.XOR<Prisma.RiderCreateWithoutDeliveriesInput, Prisma.RiderUncheckedCreateWithoutDeliveriesInput>;
    connectOrCreate?: Prisma.RiderCreateOrConnectWithoutDeliveriesInput;
    connect?: Prisma.RiderWhereUniqueInput;
};
export type RiderUpdateOneWithoutDeliveriesNestedInput = {
    create?: Prisma.XOR<Prisma.RiderCreateWithoutDeliveriesInput, Prisma.RiderUncheckedCreateWithoutDeliveriesInput>;
    connectOrCreate?: Prisma.RiderCreateOrConnectWithoutDeliveriesInput;
    upsert?: Prisma.RiderUpsertWithoutDeliveriesInput;
    disconnect?: Prisma.RiderWhereInput | boolean;
    delete?: Prisma.RiderWhereInput | boolean;
    connect?: Prisma.RiderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RiderUpdateToOneWithWhereWithoutDeliveriesInput, Prisma.RiderUpdateWithoutDeliveriesInput>, Prisma.RiderUncheckedUpdateWithoutDeliveriesInput>;
};
export type RiderCreateNestedOneWithoutEarningsInput = {
    create?: Prisma.XOR<Prisma.RiderCreateWithoutEarningsInput, Prisma.RiderUncheckedCreateWithoutEarningsInput>;
    connectOrCreate?: Prisma.RiderCreateOrConnectWithoutEarningsInput;
    connect?: Prisma.RiderWhereUniqueInput;
};
export type RiderUpdateOneRequiredWithoutEarningsNestedInput = {
    create?: Prisma.XOR<Prisma.RiderCreateWithoutEarningsInput, Prisma.RiderUncheckedCreateWithoutEarningsInput>;
    connectOrCreate?: Prisma.RiderCreateOrConnectWithoutEarningsInput;
    upsert?: Prisma.RiderUpsertWithoutEarningsInput;
    connect?: Prisma.RiderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RiderUpdateToOneWithWhereWithoutEarningsInput, Prisma.RiderUpdateWithoutEarningsInput>, Prisma.RiderUncheckedUpdateWithoutEarningsInput>;
};
export type RiderCreateWithoutDeliveriesInput = {
    id?: string;
    phoneNumber: string;
    fullName: string;
    nationalId: string;
    city: string;
    vehicleType: $Enums.VehicleType;
    isVerified?: boolean;
    isOnline?: boolean;
    rating?: number;
    totalDeliveries?: number;
    createdAt?: Date | string;
    earnings?: Prisma.RiderEarningCreateNestedManyWithoutRiderInput;
};
export type RiderUncheckedCreateWithoutDeliveriesInput = {
    id?: string;
    phoneNumber: string;
    fullName: string;
    nationalId: string;
    city: string;
    vehicleType: $Enums.VehicleType;
    isVerified?: boolean;
    isOnline?: boolean;
    rating?: number;
    totalDeliveries?: number;
    createdAt?: Date | string;
    earnings?: Prisma.RiderEarningUncheckedCreateNestedManyWithoutRiderInput;
};
export type RiderCreateOrConnectWithoutDeliveriesInput = {
    where: Prisma.RiderWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiderCreateWithoutDeliveriesInput, Prisma.RiderUncheckedCreateWithoutDeliveriesInput>;
};
export type RiderUpsertWithoutDeliveriesInput = {
    update: Prisma.XOR<Prisma.RiderUpdateWithoutDeliveriesInput, Prisma.RiderUncheckedUpdateWithoutDeliveriesInput>;
    create: Prisma.XOR<Prisma.RiderCreateWithoutDeliveriesInput, Prisma.RiderUncheckedCreateWithoutDeliveriesInput>;
    where?: Prisma.RiderWhereInput;
};
export type RiderUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: Prisma.RiderWhereInput;
    data: Prisma.XOR<Prisma.RiderUpdateWithoutDeliveriesInput, Prisma.RiderUncheckedUpdateWithoutDeliveriesInput>;
};
export type RiderUpdateWithoutDeliveriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nationalId?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleType?: Prisma.EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalDeliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    earnings?: Prisma.RiderEarningUpdateManyWithoutRiderNestedInput;
};
export type RiderUncheckedUpdateWithoutDeliveriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nationalId?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleType?: Prisma.EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalDeliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    earnings?: Prisma.RiderEarningUncheckedUpdateManyWithoutRiderNestedInput;
};
export type RiderCreateWithoutEarningsInput = {
    id?: string;
    phoneNumber: string;
    fullName: string;
    nationalId: string;
    city: string;
    vehicleType: $Enums.VehicleType;
    isVerified?: boolean;
    isOnline?: boolean;
    rating?: number;
    totalDeliveries?: number;
    createdAt?: Date | string;
    deliveries?: Prisma.DeliveryCreateNestedManyWithoutRiderInput;
};
export type RiderUncheckedCreateWithoutEarningsInput = {
    id?: string;
    phoneNumber: string;
    fullName: string;
    nationalId: string;
    city: string;
    vehicleType: $Enums.VehicleType;
    isVerified?: boolean;
    isOnline?: boolean;
    rating?: number;
    totalDeliveries?: number;
    createdAt?: Date | string;
    deliveries?: Prisma.DeliveryUncheckedCreateNestedManyWithoutRiderInput;
};
export type RiderCreateOrConnectWithoutEarningsInput = {
    where: Prisma.RiderWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiderCreateWithoutEarningsInput, Prisma.RiderUncheckedCreateWithoutEarningsInput>;
};
export type RiderUpsertWithoutEarningsInput = {
    update: Prisma.XOR<Prisma.RiderUpdateWithoutEarningsInput, Prisma.RiderUncheckedUpdateWithoutEarningsInput>;
    create: Prisma.XOR<Prisma.RiderCreateWithoutEarningsInput, Prisma.RiderUncheckedCreateWithoutEarningsInput>;
    where?: Prisma.RiderWhereInput;
};
export type RiderUpdateToOneWithWhereWithoutEarningsInput = {
    where?: Prisma.RiderWhereInput;
    data: Prisma.XOR<Prisma.RiderUpdateWithoutEarningsInput, Prisma.RiderUncheckedUpdateWithoutEarningsInput>;
};
export type RiderUpdateWithoutEarningsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nationalId?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleType?: Prisma.EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalDeliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.DeliveryUpdateManyWithoutRiderNestedInput;
};
export type RiderUncheckedUpdateWithoutEarningsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nationalId?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleType?: Prisma.EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isOnline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalDeliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.DeliveryUncheckedUpdateManyWithoutRiderNestedInput;
};
export type RiderCountOutputType = {
    deliveries: number;
    earnings: number;
};
export type RiderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deliveries?: boolean | RiderCountOutputTypeCountDeliveriesArgs;
    earnings?: boolean | RiderCountOutputTypeCountEarningsArgs;
};
export type RiderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderCountOutputTypeSelect<ExtArgs> | null;
};
export type RiderCountOutputTypeCountDeliveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeliveryWhereInput;
};
export type RiderCountOutputTypeCountEarningsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiderEarningWhereInput;
};
export type RiderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phoneNumber?: boolean;
    fullName?: boolean;
    nationalId?: boolean;
    city?: boolean;
    vehicleType?: boolean;
    isVerified?: boolean;
    isOnline?: boolean;
    rating?: boolean;
    totalDeliveries?: boolean;
    createdAt?: boolean;
    deliveries?: boolean | Prisma.Rider$deliveriesArgs<ExtArgs>;
    earnings?: boolean | Prisma.Rider$earningsArgs<ExtArgs>;
    _count?: boolean | Prisma.RiderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rider"]>;
export type RiderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phoneNumber?: boolean;
    fullName?: boolean;
    nationalId?: boolean;
    city?: boolean;
    vehicleType?: boolean;
    isVerified?: boolean;
    isOnline?: boolean;
    rating?: boolean;
    totalDeliveries?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["rider"]>;
export type RiderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phoneNumber?: boolean;
    fullName?: boolean;
    nationalId?: boolean;
    city?: boolean;
    vehicleType?: boolean;
    isVerified?: boolean;
    isOnline?: boolean;
    rating?: boolean;
    totalDeliveries?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["rider"]>;
export type RiderSelectScalar = {
    id?: boolean;
    phoneNumber?: boolean;
    fullName?: boolean;
    nationalId?: boolean;
    city?: boolean;
    vehicleType?: boolean;
    isVerified?: boolean;
    isOnline?: boolean;
    rating?: boolean;
    totalDeliveries?: boolean;
    createdAt?: boolean;
};
export type RiderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "phoneNumber" | "fullName" | "nationalId" | "city" | "vehicleType" | "isVerified" | "isOnline" | "rating" | "totalDeliveries" | "createdAt", ExtArgs["result"]["rider"]>;
export type RiderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deliveries?: boolean | Prisma.Rider$deliveriesArgs<ExtArgs>;
    earnings?: boolean | Prisma.Rider$earningsArgs<ExtArgs>;
    _count?: boolean | Prisma.RiderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RiderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type RiderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $RiderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Rider";
    objects: {
        deliveries: Prisma.$DeliveryPayload<ExtArgs>[];
        earnings: Prisma.$RiderEarningPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        phoneNumber: string;
        fullName: string;
        nationalId: string;
        city: string;
        vehicleType: $Enums.VehicleType;
        isVerified: boolean;
        isOnline: boolean;
        rating: number;
        totalDeliveries: number;
        createdAt: Date;
    }, ExtArgs["result"]["rider"]>;
    composites: {};
};
export type RiderGetPayload<S extends boolean | null | undefined | RiderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RiderPayload, S>;
export type RiderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RiderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RiderCountAggregateInputType | true;
};
export interface RiderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Rider'];
        meta: {
            name: 'Rider';
        };
    };
    findUnique<T extends RiderFindUniqueArgs>(args: Prisma.SelectSubset<T, RiderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RiderClient<runtime.Types.Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RiderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RiderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RiderClient<runtime.Types.Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RiderFindFirstArgs>(args?: Prisma.SelectSubset<T, RiderFindFirstArgs<ExtArgs>>): Prisma.Prisma__RiderClient<runtime.Types.Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RiderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RiderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RiderClient<runtime.Types.Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RiderFindManyArgs>(args?: Prisma.SelectSubset<T, RiderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RiderCreateArgs>(args: Prisma.SelectSubset<T, RiderCreateArgs<ExtArgs>>): Prisma.Prisma__RiderClient<runtime.Types.Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RiderCreateManyArgs>(args?: Prisma.SelectSubset<T, RiderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RiderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RiderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RiderDeleteArgs>(args: Prisma.SelectSubset<T, RiderDeleteArgs<ExtArgs>>): Prisma.Prisma__RiderClient<runtime.Types.Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RiderUpdateArgs>(args: Prisma.SelectSubset<T, RiderUpdateArgs<ExtArgs>>): Prisma.Prisma__RiderClient<runtime.Types.Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RiderDeleteManyArgs>(args?: Prisma.SelectSubset<T, RiderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RiderUpdateManyArgs>(args: Prisma.SelectSubset<T, RiderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RiderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RiderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RiderUpsertArgs>(args: Prisma.SelectSubset<T, RiderUpsertArgs<ExtArgs>>): Prisma.Prisma__RiderClient<runtime.Types.Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RiderCountArgs>(args?: Prisma.Subset<T, RiderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RiderCountAggregateOutputType> : number>;
    aggregate<T extends RiderAggregateArgs>(args: Prisma.Subset<T, RiderAggregateArgs>): Prisma.PrismaPromise<GetRiderAggregateType<T>>;
    groupBy<T extends RiderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RiderGroupByArgs['orderBy'];
    } : {
        orderBy?: RiderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RiderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RiderFieldRefs;
}
export interface Prisma__RiderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    deliveries<T extends Prisma.Rider$deliveriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Rider$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    earnings<T extends Prisma.Rider$earningsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Rider$earningsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiderEarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RiderFieldRefs {
    readonly id: Prisma.FieldRef<"Rider", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"Rider", 'String'>;
    readonly fullName: Prisma.FieldRef<"Rider", 'String'>;
    readonly nationalId: Prisma.FieldRef<"Rider", 'String'>;
    readonly city: Prisma.FieldRef<"Rider", 'String'>;
    readonly vehicleType: Prisma.FieldRef<"Rider", 'VehicleType'>;
    readonly isVerified: Prisma.FieldRef<"Rider", 'Boolean'>;
    readonly isOnline: Prisma.FieldRef<"Rider", 'Boolean'>;
    readonly rating: Prisma.FieldRef<"Rider", 'Float'>;
    readonly totalDeliveries: Prisma.FieldRef<"Rider", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Rider", 'DateTime'>;
}
export type RiderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderSelect<ExtArgs> | null;
    omit?: Prisma.RiderOmit<ExtArgs> | null;
    include?: Prisma.RiderInclude<ExtArgs> | null;
    where: Prisma.RiderWhereUniqueInput;
};
export type RiderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderSelect<ExtArgs> | null;
    omit?: Prisma.RiderOmit<ExtArgs> | null;
    include?: Prisma.RiderInclude<ExtArgs> | null;
    where: Prisma.RiderWhereUniqueInput;
};
export type RiderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderSelect<ExtArgs> | null;
    omit?: Prisma.RiderOmit<ExtArgs> | null;
    include?: Prisma.RiderInclude<ExtArgs> | null;
    where?: Prisma.RiderWhereInput;
    orderBy?: Prisma.RiderOrderByWithRelationInput | Prisma.RiderOrderByWithRelationInput[];
    cursor?: Prisma.RiderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiderScalarFieldEnum | Prisma.RiderScalarFieldEnum[];
};
export type RiderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderSelect<ExtArgs> | null;
    omit?: Prisma.RiderOmit<ExtArgs> | null;
    include?: Prisma.RiderInclude<ExtArgs> | null;
    where?: Prisma.RiderWhereInput;
    orderBy?: Prisma.RiderOrderByWithRelationInput | Prisma.RiderOrderByWithRelationInput[];
    cursor?: Prisma.RiderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiderScalarFieldEnum | Prisma.RiderScalarFieldEnum[];
};
export type RiderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderSelect<ExtArgs> | null;
    omit?: Prisma.RiderOmit<ExtArgs> | null;
    include?: Prisma.RiderInclude<ExtArgs> | null;
    where?: Prisma.RiderWhereInput;
    orderBy?: Prisma.RiderOrderByWithRelationInput | Prisma.RiderOrderByWithRelationInput[];
    cursor?: Prisma.RiderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiderScalarFieldEnum | Prisma.RiderScalarFieldEnum[];
};
export type RiderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderSelect<ExtArgs> | null;
    omit?: Prisma.RiderOmit<ExtArgs> | null;
    include?: Prisma.RiderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiderCreateInput, Prisma.RiderUncheckedCreateInput>;
};
export type RiderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RiderCreateManyInput | Prisma.RiderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RiderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RiderOmit<ExtArgs> | null;
    data: Prisma.RiderCreateManyInput | Prisma.RiderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RiderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderSelect<ExtArgs> | null;
    omit?: Prisma.RiderOmit<ExtArgs> | null;
    include?: Prisma.RiderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiderUpdateInput, Prisma.RiderUncheckedUpdateInput>;
    where: Prisma.RiderWhereUniqueInput;
};
export type RiderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RiderUpdateManyMutationInput, Prisma.RiderUncheckedUpdateManyInput>;
    where?: Prisma.RiderWhereInput;
    limit?: number;
};
export type RiderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RiderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiderUpdateManyMutationInput, Prisma.RiderUncheckedUpdateManyInput>;
    where?: Prisma.RiderWhereInput;
    limit?: number;
};
export type RiderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderSelect<ExtArgs> | null;
    omit?: Prisma.RiderOmit<ExtArgs> | null;
    include?: Prisma.RiderInclude<ExtArgs> | null;
    where: Prisma.RiderWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiderCreateInput, Prisma.RiderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RiderUpdateInput, Prisma.RiderUncheckedUpdateInput>;
};
export type RiderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderSelect<ExtArgs> | null;
    omit?: Prisma.RiderOmit<ExtArgs> | null;
    include?: Prisma.RiderInclude<ExtArgs> | null;
    where: Prisma.RiderWhereUniqueInput;
};
export type RiderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiderWhereInput;
    limit?: number;
};
export type Rider$deliveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Rider$earningsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RiderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiderSelect<ExtArgs> | null;
    omit?: Prisma.RiderOmit<ExtArgs> | null;
    include?: Prisma.RiderInclude<ExtArgs> | null;
};
export {};

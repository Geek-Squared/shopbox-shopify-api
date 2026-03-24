import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SellerPluginModel = runtime.Types.Result.DefaultSelection<Prisma.$SellerPluginPayload>;
export type AggregateSellerPlugin = {
    _count: SellerPluginCountAggregateOutputType | null;
    _min: SellerPluginMinAggregateOutputType | null;
    _max: SellerPluginMaxAggregateOutputType | null;
};
export type SellerPluginMinAggregateOutputType = {
    id: string | null;
    sellerId: string | null;
    pluginId: string | null;
    isActive: boolean | null;
    installedAt: Date | null;
};
export type SellerPluginMaxAggregateOutputType = {
    id: string | null;
    sellerId: string | null;
    pluginId: string | null;
    isActive: boolean | null;
    installedAt: Date | null;
};
export type SellerPluginCountAggregateOutputType = {
    id: number;
    sellerId: number;
    pluginId: number;
    isActive: number;
    config: number;
    installedAt: number;
    _all: number;
};
export type SellerPluginMinAggregateInputType = {
    id?: true;
    sellerId?: true;
    pluginId?: true;
    isActive?: true;
    installedAt?: true;
};
export type SellerPluginMaxAggregateInputType = {
    id?: true;
    sellerId?: true;
    pluginId?: true;
    isActive?: true;
    installedAt?: true;
};
export type SellerPluginCountAggregateInputType = {
    id?: true;
    sellerId?: true;
    pluginId?: true;
    isActive?: true;
    config?: true;
    installedAt?: true;
    _all?: true;
};
export type SellerPluginAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerPluginWhereInput;
    orderBy?: Prisma.SellerPluginOrderByWithRelationInput | Prisma.SellerPluginOrderByWithRelationInput[];
    cursor?: Prisma.SellerPluginWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SellerPluginCountAggregateInputType;
    _min?: SellerPluginMinAggregateInputType;
    _max?: SellerPluginMaxAggregateInputType;
};
export type GetSellerPluginAggregateType<T extends SellerPluginAggregateArgs> = {
    [P in keyof T & keyof AggregateSellerPlugin]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSellerPlugin[P]> : Prisma.GetScalarType<T[P], AggregateSellerPlugin[P]>;
};
export type SellerPluginGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerPluginWhereInput;
    orderBy?: Prisma.SellerPluginOrderByWithAggregationInput | Prisma.SellerPluginOrderByWithAggregationInput[];
    by: Prisma.SellerPluginScalarFieldEnum[] | Prisma.SellerPluginScalarFieldEnum;
    having?: Prisma.SellerPluginScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SellerPluginCountAggregateInputType | true;
    _min?: SellerPluginMinAggregateInputType;
    _max?: SellerPluginMaxAggregateInputType;
};
export type SellerPluginGroupByOutputType = {
    id: string;
    sellerId: string;
    pluginId: string;
    isActive: boolean;
    config: runtime.JsonValue | null;
    installedAt: Date;
    _count: SellerPluginCountAggregateOutputType | null;
    _min: SellerPluginMinAggregateOutputType | null;
    _max: SellerPluginMaxAggregateOutputType | null;
};
type GetSellerPluginGroupByPayload<T extends SellerPluginGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SellerPluginGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SellerPluginGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SellerPluginGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SellerPluginGroupByOutputType[P]>;
}>>;
export type SellerPluginWhereInput = {
    AND?: Prisma.SellerPluginWhereInput | Prisma.SellerPluginWhereInput[];
    OR?: Prisma.SellerPluginWhereInput[];
    NOT?: Prisma.SellerPluginWhereInput | Prisma.SellerPluginWhereInput[];
    id?: Prisma.StringFilter<"SellerPlugin"> | string;
    sellerId?: Prisma.StringFilter<"SellerPlugin"> | string;
    pluginId?: Prisma.StringFilter<"SellerPlugin"> | string;
    isActive?: Prisma.BoolFilter<"SellerPlugin"> | boolean;
    config?: Prisma.JsonNullableFilter<"SellerPlugin">;
    installedAt?: Prisma.DateTimeFilter<"SellerPlugin"> | Date | string;
    plugin?: Prisma.XOR<Prisma.PluginScalarRelationFilter, Prisma.PluginWhereInput>;
    seller?: Prisma.XOR<Prisma.SellerScalarRelationFilter, Prisma.SellerWhereInput>;
};
export type SellerPluginOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    pluginId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    config?: Prisma.SortOrderInput | Prisma.SortOrder;
    installedAt?: Prisma.SortOrder;
    plugin?: Prisma.PluginOrderByWithRelationInput;
    seller?: Prisma.SellerOrderByWithRelationInput;
};
export type SellerPluginWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    sellerId_pluginId?: Prisma.SellerPluginSellerIdPluginIdCompoundUniqueInput;
    AND?: Prisma.SellerPluginWhereInput | Prisma.SellerPluginWhereInput[];
    OR?: Prisma.SellerPluginWhereInput[];
    NOT?: Prisma.SellerPluginWhereInput | Prisma.SellerPluginWhereInput[];
    sellerId?: Prisma.StringFilter<"SellerPlugin"> | string;
    pluginId?: Prisma.StringFilter<"SellerPlugin"> | string;
    isActive?: Prisma.BoolFilter<"SellerPlugin"> | boolean;
    config?: Prisma.JsonNullableFilter<"SellerPlugin">;
    installedAt?: Prisma.DateTimeFilter<"SellerPlugin"> | Date | string;
    plugin?: Prisma.XOR<Prisma.PluginScalarRelationFilter, Prisma.PluginWhereInput>;
    seller?: Prisma.XOR<Prisma.SellerScalarRelationFilter, Prisma.SellerWhereInput>;
}, "id" | "sellerId_pluginId">;
export type SellerPluginOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    pluginId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    config?: Prisma.SortOrderInput | Prisma.SortOrder;
    installedAt?: Prisma.SortOrder;
    _count?: Prisma.SellerPluginCountOrderByAggregateInput;
    _max?: Prisma.SellerPluginMaxOrderByAggregateInput;
    _min?: Prisma.SellerPluginMinOrderByAggregateInput;
};
export type SellerPluginScalarWhereWithAggregatesInput = {
    AND?: Prisma.SellerPluginScalarWhereWithAggregatesInput | Prisma.SellerPluginScalarWhereWithAggregatesInput[];
    OR?: Prisma.SellerPluginScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SellerPluginScalarWhereWithAggregatesInput | Prisma.SellerPluginScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SellerPlugin"> | string;
    sellerId?: Prisma.StringWithAggregatesFilter<"SellerPlugin"> | string;
    pluginId?: Prisma.StringWithAggregatesFilter<"SellerPlugin"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"SellerPlugin"> | boolean;
    config?: Prisma.JsonNullableWithAggregatesFilter<"SellerPlugin">;
    installedAt?: Prisma.DateTimeWithAggregatesFilter<"SellerPlugin"> | Date | string;
};
export type SellerPluginCreateInput = {
    id?: string;
    isActive?: boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Date | string;
    plugin: Prisma.PluginCreateNestedOneWithoutSellersInput;
    seller: Prisma.SellerCreateNestedOneWithoutPluginsInput;
};
export type SellerPluginUncheckedCreateInput = {
    id?: string;
    sellerId: string;
    pluginId: string;
    isActive?: boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Date | string;
};
export type SellerPluginUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    plugin?: Prisma.PluginUpdateOneRequiredWithoutSellersNestedInput;
    seller?: Prisma.SellerUpdateOneRequiredWithoutPluginsNestedInput;
};
export type SellerPluginUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pluginId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerPluginCreateManyInput = {
    id?: string;
    sellerId: string;
    pluginId: string;
    isActive?: boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Date | string;
};
export type SellerPluginUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerPluginUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pluginId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerPluginListRelationFilter = {
    every?: Prisma.SellerPluginWhereInput;
    some?: Prisma.SellerPluginWhereInput;
    none?: Prisma.SellerPluginWhereInput;
};
export type SellerPluginOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SellerPluginSellerIdPluginIdCompoundUniqueInput = {
    sellerId: string;
    pluginId: string;
};
export type SellerPluginCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    pluginId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    config?: Prisma.SortOrder;
    installedAt?: Prisma.SortOrder;
};
export type SellerPluginMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    pluginId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    installedAt?: Prisma.SortOrder;
};
export type SellerPluginMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    pluginId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    installedAt?: Prisma.SortOrder;
};
export type SellerPluginCreateNestedManyWithoutSellerInput = {
    create?: Prisma.XOR<Prisma.SellerPluginCreateWithoutSellerInput, Prisma.SellerPluginUncheckedCreateWithoutSellerInput> | Prisma.SellerPluginCreateWithoutSellerInput[] | Prisma.SellerPluginUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.SellerPluginCreateOrConnectWithoutSellerInput | Prisma.SellerPluginCreateOrConnectWithoutSellerInput[];
    createMany?: Prisma.SellerPluginCreateManySellerInputEnvelope;
    connect?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
};
export type SellerPluginUncheckedCreateNestedManyWithoutSellerInput = {
    create?: Prisma.XOR<Prisma.SellerPluginCreateWithoutSellerInput, Prisma.SellerPluginUncheckedCreateWithoutSellerInput> | Prisma.SellerPluginCreateWithoutSellerInput[] | Prisma.SellerPluginUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.SellerPluginCreateOrConnectWithoutSellerInput | Prisma.SellerPluginCreateOrConnectWithoutSellerInput[];
    createMany?: Prisma.SellerPluginCreateManySellerInputEnvelope;
    connect?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
};
export type SellerPluginUpdateManyWithoutSellerNestedInput = {
    create?: Prisma.XOR<Prisma.SellerPluginCreateWithoutSellerInput, Prisma.SellerPluginUncheckedCreateWithoutSellerInput> | Prisma.SellerPluginCreateWithoutSellerInput[] | Prisma.SellerPluginUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.SellerPluginCreateOrConnectWithoutSellerInput | Prisma.SellerPluginCreateOrConnectWithoutSellerInput[];
    upsert?: Prisma.SellerPluginUpsertWithWhereUniqueWithoutSellerInput | Prisma.SellerPluginUpsertWithWhereUniqueWithoutSellerInput[];
    createMany?: Prisma.SellerPluginCreateManySellerInputEnvelope;
    set?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
    disconnect?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
    delete?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
    connect?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
    update?: Prisma.SellerPluginUpdateWithWhereUniqueWithoutSellerInput | Prisma.SellerPluginUpdateWithWhereUniqueWithoutSellerInput[];
    updateMany?: Prisma.SellerPluginUpdateManyWithWhereWithoutSellerInput | Prisma.SellerPluginUpdateManyWithWhereWithoutSellerInput[];
    deleteMany?: Prisma.SellerPluginScalarWhereInput | Prisma.SellerPluginScalarWhereInput[];
};
export type SellerPluginUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: Prisma.XOR<Prisma.SellerPluginCreateWithoutSellerInput, Prisma.SellerPluginUncheckedCreateWithoutSellerInput> | Prisma.SellerPluginCreateWithoutSellerInput[] | Prisma.SellerPluginUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.SellerPluginCreateOrConnectWithoutSellerInput | Prisma.SellerPluginCreateOrConnectWithoutSellerInput[];
    upsert?: Prisma.SellerPluginUpsertWithWhereUniqueWithoutSellerInput | Prisma.SellerPluginUpsertWithWhereUniqueWithoutSellerInput[];
    createMany?: Prisma.SellerPluginCreateManySellerInputEnvelope;
    set?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
    disconnect?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
    delete?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
    connect?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
    update?: Prisma.SellerPluginUpdateWithWhereUniqueWithoutSellerInput | Prisma.SellerPluginUpdateWithWhereUniqueWithoutSellerInput[];
    updateMany?: Prisma.SellerPluginUpdateManyWithWhereWithoutSellerInput | Prisma.SellerPluginUpdateManyWithWhereWithoutSellerInput[];
    deleteMany?: Prisma.SellerPluginScalarWhereInput | Prisma.SellerPluginScalarWhereInput[];
};
export type SellerPluginCreateNestedManyWithoutPluginInput = {
    create?: Prisma.XOR<Prisma.SellerPluginCreateWithoutPluginInput, Prisma.SellerPluginUncheckedCreateWithoutPluginInput> | Prisma.SellerPluginCreateWithoutPluginInput[] | Prisma.SellerPluginUncheckedCreateWithoutPluginInput[];
    connectOrCreate?: Prisma.SellerPluginCreateOrConnectWithoutPluginInput | Prisma.SellerPluginCreateOrConnectWithoutPluginInput[];
    createMany?: Prisma.SellerPluginCreateManyPluginInputEnvelope;
    connect?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
};
export type SellerPluginUncheckedCreateNestedManyWithoutPluginInput = {
    create?: Prisma.XOR<Prisma.SellerPluginCreateWithoutPluginInput, Prisma.SellerPluginUncheckedCreateWithoutPluginInput> | Prisma.SellerPluginCreateWithoutPluginInput[] | Prisma.SellerPluginUncheckedCreateWithoutPluginInput[];
    connectOrCreate?: Prisma.SellerPluginCreateOrConnectWithoutPluginInput | Prisma.SellerPluginCreateOrConnectWithoutPluginInput[];
    createMany?: Prisma.SellerPluginCreateManyPluginInputEnvelope;
    connect?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
};
export type SellerPluginUpdateManyWithoutPluginNestedInput = {
    create?: Prisma.XOR<Prisma.SellerPluginCreateWithoutPluginInput, Prisma.SellerPluginUncheckedCreateWithoutPluginInput> | Prisma.SellerPluginCreateWithoutPluginInput[] | Prisma.SellerPluginUncheckedCreateWithoutPluginInput[];
    connectOrCreate?: Prisma.SellerPluginCreateOrConnectWithoutPluginInput | Prisma.SellerPluginCreateOrConnectWithoutPluginInput[];
    upsert?: Prisma.SellerPluginUpsertWithWhereUniqueWithoutPluginInput | Prisma.SellerPluginUpsertWithWhereUniqueWithoutPluginInput[];
    createMany?: Prisma.SellerPluginCreateManyPluginInputEnvelope;
    set?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
    disconnect?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
    delete?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
    connect?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
    update?: Prisma.SellerPluginUpdateWithWhereUniqueWithoutPluginInput | Prisma.SellerPluginUpdateWithWhereUniqueWithoutPluginInput[];
    updateMany?: Prisma.SellerPluginUpdateManyWithWhereWithoutPluginInput | Prisma.SellerPluginUpdateManyWithWhereWithoutPluginInput[];
    deleteMany?: Prisma.SellerPluginScalarWhereInput | Prisma.SellerPluginScalarWhereInput[];
};
export type SellerPluginUncheckedUpdateManyWithoutPluginNestedInput = {
    create?: Prisma.XOR<Prisma.SellerPluginCreateWithoutPluginInput, Prisma.SellerPluginUncheckedCreateWithoutPluginInput> | Prisma.SellerPluginCreateWithoutPluginInput[] | Prisma.SellerPluginUncheckedCreateWithoutPluginInput[];
    connectOrCreate?: Prisma.SellerPluginCreateOrConnectWithoutPluginInput | Prisma.SellerPluginCreateOrConnectWithoutPluginInput[];
    upsert?: Prisma.SellerPluginUpsertWithWhereUniqueWithoutPluginInput | Prisma.SellerPluginUpsertWithWhereUniqueWithoutPluginInput[];
    createMany?: Prisma.SellerPluginCreateManyPluginInputEnvelope;
    set?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
    disconnect?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
    delete?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
    connect?: Prisma.SellerPluginWhereUniqueInput | Prisma.SellerPluginWhereUniqueInput[];
    update?: Prisma.SellerPluginUpdateWithWhereUniqueWithoutPluginInput | Prisma.SellerPluginUpdateWithWhereUniqueWithoutPluginInput[];
    updateMany?: Prisma.SellerPluginUpdateManyWithWhereWithoutPluginInput | Prisma.SellerPluginUpdateManyWithWhereWithoutPluginInput[];
    deleteMany?: Prisma.SellerPluginScalarWhereInput | Prisma.SellerPluginScalarWhereInput[];
};
export type SellerPluginCreateWithoutSellerInput = {
    id?: string;
    isActive?: boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Date | string;
    plugin: Prisma.PluginCreateNestedOneWithoutSellersInput;
};
export type SellerPluginUncheckedCreateWithoutSellerInput = {
    id?: string;
    pluginId: string;
    isActive?: boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Date | string;
};
export type SellerPluginCreateOrConnectWithoutSellerInput = {
    where: Prisma.SellerPluginWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerPluginCreateWithoutSellerInput, Prisma.SellerPluginUncheckedCreateWithoutSellerInput>;
};
export type SellerPluginCreateManySellerInputEnvelope = {
    data: Prisma.SellerPluginCreateManySellerInput | Prisma.SellerPluginCreateManySellerInput[];
    skipDuplicates?: boolean;
};
export type SellerPluginUpsertWithWhereUniqueWithoutSellerInput = {
    where: Prisma.SellerPluginWhereUniqueInput;
    update: Prisma.XOR<Prisma.SellerPluginUpdateWithoutSellerInput, Prisma.SellerPluginUncheckedUpdateWithoutSellerInput>;
    create: Prisma.XOR<Prisma.SellerPluginCreateWithoutSellerInput, Prisma.SellerPluginUncheckedCreateWithoutSellerInput>;
};
export type SellerPluginUpdateWithWhereUniqueWithoutSellerInput = {
    where: Prisma.SellerPluginWhereUniqueInput;
    data: Prisma.XOR<Prisma.SellerPluginUpdateWithoutSellerInput, Prisma.SellerPluginUncheckedUpdateWithoutSellerInput>;
};
export type SellerPluginUpdateManyWithWhereWithoutSellerInput = {
    where: Prisma.SellerPluginScalarWhereInput;
    data: Prisma.XOR<Prisma.SellerPluginUpdateManyMutationInput, Prisma.SellerPluginUncheckedUpdateManyWithoutSellerInput>;
};
export type SellerPluginScalarWhereInput = {
    AND?: Prisma.SellerPluginScalarWhereInput | Prisma.SellerPluginScalarWhereInput[];
    OR?: Prisma.SellerPluginScalarWhereInput[];
    NOT?: Prisma.SellerPluginScalarWhereInput | Prisma.SellerPluginScalarWhereInput[];
    id?: Prisma.StringFilter<"SellerPlugin"> | string;
    sellerId?: Prisma.StringFilter<"SellerPlugin"> | string;
    pluginId?: Prisma.StringFilter<"SellerPlugin"> | string;
    isActive?: Prisma.BoolFilter<"SellerPlugin"> | boolean;
    config?: Prisma.JsonNullableFilter<"SellerPlugin">;
    installedAt?: Prisma.DateTimeFilter<"SellerPlugin"> | Date | string;
};
export type SellerPluginCreateWithoutPluginInput = {
    id?: string;
    isActive?: boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Date | string;
    seller: Prisma.SellerCreateNestedOneWithoutPluginsInput;
};
export type SellerPluginUncheckedCreateWithoutPluginInput = {
    id?: string;
    sellerId: string;
    isActive?: boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Date | string;
};
export type SellerPluginCreateOrConnectWithoutPluginInput = {
    where: Prisma.SellerPluginWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerPluginCreateWithoutPluginInput, Prisma.SellerPluginUncheckedCreateWithoutPluginInput>;
};
export type SellerPluginCreateManyPluginInputEnvelope = {
    data: Prisma.SellerPluginCreateManyPluginInput | Prisma.SellerPluginCreateManyPluginInput[];
    skipDuplicates?: boolean;
};
export type SellerPluginUpsertWithWhereUniqueWithoutPluginInput = {
    where: Prisma.SellerPluginWhereUniqueInput;
    update: Prisma.XOR<Prisma.SellerPluginUpdateWithoutPluginInput, Prisma.SellerPluginUncheckedUpdateWithoutPluginInput>;
    create: Prisma.XOR<Prisma.SellerPluginCreateWithoutPluginInput, Prisma.SellerPluginUncheckedCreateWithoutPluginInput>;
};
export type SellerPluginUpdateWithWhereUniqueWithoutPluginInput = {
    where: Prisma.SellerPluginWhereUniqueInput;
    data: Prisma.XOR<Prisma.SellerPluginUpdateWithoutPluginInput, Prisma.SellerPluginUncheckedUpdateWithoutPluginInput>;
};
export type SellerPluginUpdateManyWithWhereWithoutPluginInput = {
    where: Prisma.SellerPluginScalarWhereInput;
    data: Prisma.XOR<Prisma.SellerPluginUpdateManyMutationInput, Prisma.SellerPluginUncheckedUpdateManyWithoutPluginInput>;
};
export type SellerPluginCreateManySellerInput = {
    id?: string;
    pluginId: string;
    isActive?: boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Date | string;
};
export type SellerPluginUpdateWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    plugin?: Prisma.PluginUpdateOneRequiredWithoutSellersNestedInput;
};
export type SellerPluginUncheckedUpdateWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pluginId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerPluginUncheckedUpdateManyWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pluginId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerPluginCreateManyPluginInput = {
    id?: string;
    sellerId: string;
    isActive?: boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Date | string;
};
export type SellerPluginUpdateWithoutPluginInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seller?: Prisma.SellerUpdateOneRequiredWithoutPluginsNestedInput;
};
export type SellerPluginUncheckedUpdateWithoutPluginInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerPluginUncheckedUpdateManyWithoutPluginInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    config?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    installedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerPluginSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sellerId?: boolean;
    pluginId?: boolean;
    isActive?: boolean;
    config?: boolean;
    installedAt?: boolean;
    plugin?: boolean | Prisma.PluginDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sellerPlugin"]>;
export type SellerPluginSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sellerId?: boolean;
    pluginId?: boolean;
    isActive?: boolean;
    config?: boolean;
    installedAt?: boolean;
    plugin?: boolean | Prisma.PluginDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sellerPlugin"]>;
export type SellerPluginSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sellerId?: boolean;
    pluginId?: boolean;
    isActive?: boolean;
    config?: boolean;
    installedAt?: boolean;
    plugin?: boolean | Prisma.PluginDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sellerPlugin"]>;
export type SellerPluginSelectScalar = {
    id?: boolean;
    sellerId?: boolean;
    pluginId?: boolean;
    isActive?: boolean;
    config?: boolean;
    installedAt?: boolean;
};
export type SellerPluginOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sellerId" | "pluginId" | "isActive" | "config" | "installedAt", ExtArgs["result"]["sellerPlugin"]>;
export type SellerPluginInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    plugin?: boolean | Prisma.PluginDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
};
export type SellerPluginIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    plugin?: boolean | Prisma.PluginDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
};
export type SellerPluginIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    plugin?: boolean | Prisma.PluginDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
};
export type $SellerPluginPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SellerPlugin";
    objects: {
        plugin: Prisma.$PluginPayload<ExtArgs>;
        seller: Prisma.$SellerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sellerId: string;
        pluginId: string;
        isActive: boolean;
        config: runtime.JsonValue | null;
        installedAt: Date;
    }, ExtArgs["result"]["sellerPlugin"]>;
    composites: {};
};
export type SellerPluginGetPayload<S extends boolean | null | undefined | SellerPluginDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SellerPluginPayload, S>;
export type SellerPluginCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SellerPluginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SellerPluginCountAggregateInputType | true;
};
export interface SellerPluginDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SellerPlugin'];
        meta: {
            name: 'SellerPlugin';
        };
    };
    findUnique<T extends SellerPluginFindUniqueArgs>(args: Prisma.SelectSubset<T, SellerPluginFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SellerPluginClient<runtime.Types.Result.GetResult<Prisma.$SellerPluginPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SellerPluginFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SellerPluginFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SellerPluginClient<runtime.Types.Result.GetResult<Prisma.$SellerPluginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SellerPluginFindFirstArgs>(args?: Prisma.SelectSubset<T, SellerPluginFindFirstArgs<ExtArgs>>): Prisma.Prisma__SellerPluginClient<runtime.Types.Result.GetResult<Prisma.$SellerPluginPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SellerPluginFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SellerPluginFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SellerPluginClient<runtime.Types.Result.GetResult<Prisma.$SellerPluginPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SellerPluginFindManyArgs>(args?: Prisma.SelectSubset<T, SellerPluginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerPluginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SellerPluginCreateArgs>(args: Prisma.SelectSubset<T, SellerPluginCreateArgs<ExtArgs>>): Prisma.Prisma__SellerPluginClient<runtime.Types.Result.GetResult<Prisma.$SellerPluginPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SellerPluginCreateManyArgs>(args?: Prisma.SelectSubset<T, SellerPluginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SellerPluginCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SellerPluginCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerPluginPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SellerPluginDeleteArgs>(args: Prisma.SelectSubset<T, SellerPluginDeleteArgs<ExtArgs>>): Prisma.Prisma__SellerPluginClient<runtime.Types.Result.GetResult<Prisma.$SellerPluginPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SellerPluginUpdateArgs>(args: Prisma.SelectSubset<T, SellerPluginUpdateArgs<ExtArgs>>): Prisma.Prisma__SellerPluginClient<runtime.Types.Result.GetResult<Prisma.$SellerPluginPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SellerPluginDeleteManyArgs>(args?: Prisma.SelectSubset<T, SellerPluginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SellerPluginUpdateManyArgs>(args: Prisma.SelectSubset<T, SellerPluginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SellerPluginUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SellerPluginUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerPluginPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SellerPluginUpsertArgs>(args: Prisma.SelectSubset<T, SellerPluginUpsertArgs<ExtArgs>>): Prisma.Prisma__SellerPluginClient<runtime.Types.Result.GetResult<Prisma.$SellerPluginPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SellerPluginCountArgs>(args?: Prisma.Subset<T, SellerPluginCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SellerPluginCountAggregateOutputType> : number>;
    aggregate<T extends SellerPluginAggregateArgs>(args: Prisma.Subset<T, SellerPluginAggregateArgs>): Prisma.PrismaPromise<GetSellerPluginAggregateType<T>>;
    groupBy<T extends SellerPluginGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SellerPluginGroupByArgs['orderBy'];
    } : {
        orderBy?: SellerPluginGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SellerPluginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerPluginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SellerPluginFieldRefs;
}
export interface Prisma__SellerPluginClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    plugin<T extends Prisma.PluginDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PluginDefaultArgs<ExtArgs>>): Prisma.Prisma__PluginClient<runtime.Types.Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    seller<T extends Prisma.SellerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SellerDefaultArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SellerPluginFieldRefs {
    readonly id: Prisma.FieldRef<"SellerPlugin", 'String'>;
    readonly sellerId: Prisma.FieldRef<"SellerPlugin", 'String'>;
    readonly pluginId: Prisma.FieldRef<"SellerPlugin", 'String'>;
    readonly isActive: Prisma.FieldRef<"SellerPlugin", 'Boolean'>;
    readonly config: Prisma.FieldRef<"SellerPlugin", 'Json'>;
    readonly installedAt: Prisma.FieldRef<"SellerPlugin", 'DateTime'>;
}
export type SellerPluginFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerPluginSelect<ExtArgs> | null;
    omit?: Prisma.SellerPluginOmit<ExtArgs> | null;
    include?: Prisma.SellerPluginInclude<ExtArgs> | null;
    where: Prisma.SellerPluginWhereUniqueInput;
};
export type SellerPluginFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerPluginSelect<ExtArgs> | null;
    omit?: Prisma.SellerPluginOmit<ExtArgs> | null;
    include?: Prisma.SellerPluginInclude<ExtArgs> | null;
    where: Prisma.SellerPluginWhereUniqueInput;
};
export type SellerPluginFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerPluginSelect<ExtArgs> | null;
    omit?: Prisma.SellerPluginOmit<ExtArgs> | null;
    include?: Prisma.SellerPluginInclude<ExtArgs> | null;
    where?: Prisma.SellerPluginWhereInput;
    orderBy?: Prisma.SellerPluginOrderByWithRelationInput | Prisma.SellerPluginOrderByWithRelationInput[];
    cursor?: Prisma.SellerPluginWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerPluginScalarFieldEnum | Prisma.SellerPluginScalarFieldEnum[];
};
export type SellerPluginFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerPluginSelect<ExtArgs> | null;
    omit?: Prisma.SellerPluginOmit<ExtArgs> | null;
    include?: Prisma.SellerPluginInclude<ExtArgs> | null;
    where?: Prisma.SellerPluginWhereInput;
    orderBy?: Prisma.SellerPluginOrderByWithRelationInput | Prisma.SellerPluginOrderByWithRelationInput[];
    cursor?: Prisma.SellerPluginWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerPluginScalarFieldEnum | Prisma.SellerPluginScalarFieldEnum[];
};
export type SellerPluginFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerPluginSelect<ExtArgs> | null;
    omit?: Prisma.SellerPluginOmit<ExtArgs> | null;
    include?: Prisma.SellerPluginInclude<ExtArgs> | null;
    where?: Prisma.SellerPluginWhereInput;
    orderBy?: Prisma.SellerPluginOrderByWithRelationInput | Prisma.SellerPluginOrderByWithRelationInput[];
    cursor?: Prisma.SellerPluginWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerPluginScalarFieldEnum | Prisma.SellerPluginScalarFieldEnum[];
};
export type SellerPluginCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerPluginSelect<ExtArgs> | null;
    omit?: Prisma.SellerPluginOmit<ExtArgs> | null;
    include?: Prisma.SellerPluginInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerPluginCreateInput, Prisma.SellerPluginUncheckedCreateInput>;
};
export type SellerPluginCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SellerPluginCreateManyInput | Prisma.SellerPluginCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SellerPluginCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerPluginSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SellerPluginOmit<ExtArgs> | null;
    data: Prisma.SellerPluginCreateManyInput | Prisma.SellerPluginCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SellerPluginIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SellerPluginUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerPluginSelect<ExtArgs> | null;
    omit?: Prisma.SellerPluginOmit<ExtArgs> | null;
    include?: Prisma.SellerPluginInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerPluginUpdateInput, Prisma.SellerPluginUncheckedUpdateInput>;
    where: Prisma.SellerPluginWhereUniqueInput;
};
export type SellerPluginUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SellerPluginUpdateManyMutationInput, Prisma.SellerPluginUncheckedUpdateManyInput>;
    where?: Prisma.SellerPluginWhereInput;
    limit?: number;
};
export type SellerPluginUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerPluginSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SellerPluginOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerPluginUpdateManyMutationInput, Prisma.SellerPluginUncheckedUpdateManyInput>;
    where?: Prisma.SellerPluginWhereInput;
    limit?: number;
    include?: Prisma.SellerPluginIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SellerPluginUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerPluginSelect<ExtArgs> | null;
    omit?: Prisma.SellerPluginOmit<ExtArgs> | null;
    include?: Prisma.SellerPluginInclude<ExtArgs> | null;
    where: Prisma.SellerPluginWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerPluginCreateInput, Prisma.SellerPluginUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SellerPluginUpdateInput, Prisma.SellerPluginUncheckedUpdateInput>;
};
export type SellerPluginDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerPluginSelect<ExtArgs> | null;
    omit?: Prisma.SellerPluginOmit<ExtArgs> | null;
    include?: Prisma.SellerPluginInclude<ExtArgs> | null;
    where: Prisma.SellerPluginWhereUniqueInput;
};
export type SellerPluginDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerPluginWhereInput;
    limit?: number;
};
export type SellerPluginDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerPluginSelect<ExtArgs> | null;
    omit?: Prisma.SellerPluginOmit<ExtArgs> | null;
    include?: Prisma.SellerPluginInclude<ExtArgs> | null;
};
export {};

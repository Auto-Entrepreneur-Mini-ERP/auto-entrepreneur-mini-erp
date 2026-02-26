import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Service
 *
 */
export type ServiceModel = runtime.Types.Result.DefaultSelection<Prisma.$ServicePayload>;
export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null;
    _avg: ServiceAvgAggregateOutputType | null;
    _sum: ServiceSumAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
};
export type ServiceAvgAggregateOutputType = {
    hourlyRate: runtime.Decimal | null;
    fixedRate: runtime.Decimal | null;
    estimatedDuration: number | null;
};
export type ServiceSumAggregateOutputType = {
    hourlyRate: runtime.Decimal | null;
    fixedRate: runtime.Decimal | null;
    estimatedDuration: number | null;
};
export type ServiceMinAggregateOutputType = {
    id: string | null;
    itemId: string | null;
    hourlyRate: runtime.Decimal | null;
    fixedRate: runtime.Decimal | null;
    estimatedDuration: number | null;
    AutoEntrepreneurId: string | null;
};
export type ServiceMaxAggregateOutputType = {
    id: string | null;
    itemId: string | null;
    hourlyRate: runtime.Decimal | null;
    fixedRate: runtime.Decimal | null;
    estimatedDuration: number | null;
    AutoEntrepreneurId: string | null;
};
export type ServiceCountAggregateOutputType = {
    id: number;
    itemId: number;
    hourlyRate: number;
    fixedRate: number;
    estimatedDuration: number;
    AutoEntrepreneurId: number;
    _all: number;
};
export type ServiceAvgAggregateInputType = {
    hourlyRate?: true;
    fixedRate?: true;
    estimatedDuration?: true;
};
export type ServiceSumAggregateInputType = {
    hourlyRate?: true;
    fixedRate?: true;
    estimatedDuration?: true;
};
export type ServiceMinAggregateInputType = {
    id?: true;
    itemId?: true;
    hourlyRate?: true;
    fixedRate?: true;
    estimatedDuration?: true;
    AutoEntrepreneurId?: true;
};
export type ServiceMaxAggregateInputType = {
    id?: true;
    itemId?: true;
    hourlyRate?: true;
    fixedRate?: true;
    estimatedDuration?: true;
    AutoEntrepreneurId?: true;
};
export type ServiceCountAggregateInputType = {
    id?: true;
    itemId?: true;
    hourlyRate?: true;
    fixedRate?: true;
    estimatedDuration?: true;
    AutoEntrepreneurId?: true;
    _all?: true;
};
export type ServiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: Prisma.ServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Services to fetch.
     */
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType;
};
export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
    [P in keyof T & keyof AggregateService]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateService[P]> : Prisma.GetScalarType<T[P], AggregateService[P]>;
};
export type ServiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithAggregationInput | Prisma.ServiceOrderByWithAggregationInput[];
    by: Prisma.ServiceScalarFieldEnum[] | Prisma.ServiceScalarFieldEnum;
    having?: Prisma.ServiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServiceCountAggregateInputType | true;
    _avg?: ServiceAvgAggregateInputType;
    _sum?: ServiceSumAggregateInputType;
    _min?: ServiceMinAggregateInputType;
    _max?: ServiceMaxAggregateInputType;
};
export type ServiceGroupByOutputType = {
    id: string;
    itemId: string;
    hourlyRate: runtime.Decimal | null;
    fixedRate: runtime.Decimal | null;
    estimatedDuration: number | null;
    AutoEntrepreneurId: string;
    _count: ServiceCountAggregateOutputType | null;
    _avg: ServiceAvgAggregateOutputType | null;
    _sum: ServiceSumAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
};
type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ServiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ServiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ServiceGroupByOutputType[P]>;
}>>;
export type ServiceWhereInput = {
    AND?: Prisma.ServiceWhereInput | Prisma.ServiceWhereInput[];
    OR?: Prisma.ServiceWhereInput[];
    NOT?: Prisma.ServiceWhereInput | Prisma.ServiceWhereInput[];
    id?: Prisma.StringFilter<"Service"> | string;
    itemId?: Prisma.StringFilter<"Service"> | string;
    hourlyRate?: Prisma.DecimalNullableFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.DecimalNullableFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.IntNullableFilter<"Service"> | number | null;
    AutoEntrepreneurId?: Prisma.StringFilter<"Service"> | string;
    item?: Prisma.XOR<Prisma.ItemScalarRelationFilter, Prisma.ItemWhereInput>;
    AutoEntrepreneur?: Prisma.XOR<Prisma.AutoEntrepreneurScalarRelationFilter, Prisma.AutoEntrepreneurWhereInput>;
    invoiceLines?: Prisma.InvoiceLineListRelationFilter;
    quoteLines?: Prisma.QuoteLineListRelationFilter;
};
export type ServiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    hourlyRate?: Prisma.SortOrderInput | Prisma.SortOrder;
    fixedRate?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimatedDuration?: Prisma.SortOrderInput | Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    item?: Prisma.ItemOrderByWithRelationInput;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurOrderByWithRelationInput;
    invoiceLines?: Prisma.InvoiceLineOrderByRelationAggregateInput;
    quoteLines?: Prisma.QuoteLineOrderByRelationAggregateInput;
    _relevance?: Prisma.ServiceOrderByRelevanceInput;
};
export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    itemId?: string;
    AND?: Prisma.ServiceWhereInput | Prisma.ServiceWhereInput[];
    OR?: Prisma.ServiceWhereInput[];
    NOT?: Prisma.ServiceWhereInput | Prisma.ServiceWhereInput[];
    hourlyRate?: Prisma.DecimalNullableFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.DecimalNullableFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.IntNullableFilter<"Service"> | number | null;
    AutoEntrepreneurId?: Prisma.StringFilter<"Service"> | string;
    item?: Prisma.XOR<Prisma.ItemScalarRelationFilter, Prisma.ItemWhereInput>;
    AutoEntrepreneur?: Prisma.XOR<Prisma.AutoEntrepreneurScalarRelationFilter, Prisma.AutoEntrepreneurWhereInput>;
    invoiceLines?: Prisma.InvoiceLineListRelationFilter;
    quoteLines?: Prisma.QuoteLineListRelationFilter;
}, "id" | "itemId">;
export type ServiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    hourlyRate?: Prisma.SortOrderInput | Prisma.SortOrder;
    fixedRate?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimatedDuration?: Prisma.SortOrderInput | Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    _count?: Prisma.ServiceCountOrderByAggregateInput;
    _avg?: Prisma.ServiceAvgOrderByAggregateInput;
    _max?: Prisma.ServiceMaxOrderByAggregateInput;
    _min?: Prisma.ServiceMinOrderByAggregateInput;
    _sum?: Prisma.ServiceSumOrderByAggregateInput;
};
export type ServiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.ServiceScalarWhereWithAggregatesInput | Prisma.ServiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.ServiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ServiceScalarWhereWithAggregatesInput | Prisma.ServiceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Service"> | string;
    itemId?: Prisma.StringWithAggregatesFilter<"Service"> | string;
    hourlyRate?: Prisma.DecimalNullableWithAggregatesFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.DecimalNullableWithAggregatesFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.IntNullableWithAggregatesFilter<"Service"> | number | null;
    AutoEntrepreneurId?: Prisma.StringWithAggregatesFilter<"Service"> | string;
};
export type ServiceCreateInput = {
    id?: string;
    hourlyRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: number | null;
    item: Prisma.ItemCreateNestedOneWithoutServiceInput;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutServicesInput;
    invoiceLines?: Prisma.InvoiceLineCreateNestedManyWithoutServiceInput;
    quoteLines?: Prisma.QuoteLineCreateNestedManyWithoutServiceInput;
};
export type ServiceUncheckedCreateInput = {
    id?: string;
    itemId: string;
    hourlyRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: number | null;
    AutoEntrepreneurId: string;
    invoiceLines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutServiceInput;
    quoteLines?: Prisma.QuoteLineUncheckedCreateNestedManyWithoutServiceInput;
};
export type ServiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hourlyRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    item?: Prisma.ItemUpdateOneRequiredWithoutServiceNestedInput;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutServicesNestedInput;
    invoiceLines?: Prisma.InvoiceLineUpdateManyWithoutServiceNestedInput;
    quoteLines?: Prisma.QuoteLineUpdateManyWithoutServiceNestedInput;
};
export type ServiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    hourlyRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceLines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutServiceNestedInput;
    quoteLines?: Prisma.QuoteLineUncheckedUpdateManyWithoutServiceNestedInput;
};
export type ServiceCreateManyInput = {
    id?: string;
    itemId: string;
    hourlyRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: number | null;
    AutoEntrepreneurId: string;
};
export type ServiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hourlyRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type ServiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    hourlyRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ServiceListRelationFilter = {
    every?: Prisma.ServiceWhereInput;
    some?: Prisma.ServiceWhereInput;
    none?: Prisma.ServiceWhereInput;
};
export type ServiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ServiceNullableScalarRelationFilter = {
    is?: Prisma.ServiceWhereInput | null;
    isNot?: Prisma.ServiceWhereInput | null;
};
export type ServiceOrderByRelevanceInput = {
    fields: Prisma.ServiceOrderByRelevanceFieldEnum | Prisma.ServiceOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ServiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    hourlyRate?: Prisma.SortOrder;
    fixedRate?: Prisma.SortOrder;
    estimatedDuration?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
};
export type ServiceAvgOrderByAggregateInput = {
    hourlyRate?: Prisma.SortOrder;
    fixedRate?: Prisma.SortOrder;
    estimatedDuration?: Prisma.SortOrder;
};
export type ServiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    hourlyRate?: Prisma.SortOrder;
    fixedRate?: Prisma.SortOrder;
    estimatedDuration?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
};
export type ServiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    hourlyRate?: Prisma.SortOrder;
    fixedRate?: Prisma.SortOrder;
    estimatedDuration?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
};
export type ServiceSumOrderByAggregateInput = {
    hourlyRate?: Prisma.SortOrder;
    fixedRate?: Prisma.SortOrder;
    estimatedDuration?: Prisma.SortOrder;
};
export type ServiceCreateNestedManyWithoutAutoEntrepreneurInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutAutoEntrepreneurInput, Prisma.ServiceUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.ServiceCreateWithoutAutoEntrepreneurInput[] | Prisma.ServiceUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.ServiceCreateOrConnectWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.ServiceCreateManyAutoEntrepreneurInputEnvelope;
    connect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
};
export type ServiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutAutoEntrepreneurInput, Prisma.ServiceUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.ServiceCreateWithoutAutoEntrepreneurInput[] | Prisma.ServiceUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.ServiceCreateOrConnectWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.ServiceCreateManyAutoEntrepreneurInputEnvelope;
    connect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
};
export type ServiceUpdateManyWithoutAutoEntrepreneurNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutAutoEntrepreneurInput, Prisma.ServiceUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.ServiceCreateWithoutAutoEntrepreneurInput[] | Prisma.ServiceUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.ServiceCreateOrConnectWithoutAutoEntrepreneurInput[];
    upsert?: Prisma.ServiceUpsertWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.ServiceUpsertWithWhereUniqueWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.ServiceCreateManyAutoEntrepreneurInputEnvelope;
    set?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    disconnect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    delete?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    connect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    update?: Prisma.ServiceUpdateWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.ServiceUpdateWithWhereUniqueWithoutAutoEntrepreneurInput[];
    updateMany?: Prisma.ServiceUpdateManyWithWhereWithoutAutoEntrepreneurInput | Prisma.ServiceUpdateManyWithWhereWithoutAutoEntrepreneurInput[];
    deleteMany?: Prisma.ServiceScalarWhereInput | Prisma.ServiceScalarWhereInput[];
};
export type ServiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutAutoEntrepreneurInput, Prisma.ServiceUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.ServiceCreateWithoutAutoEntrepreneurInput[] | Prisma.ServiceUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.ServiceCreateOrConnectWithoutAutoEntrepreneurInput[];
    upsert?: Prisma.ServiceUpsertWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.ServiceUpsertWithWhereUniqueWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.ServiceCreateManyAutoEntrepreneurInputEnvelope;
    set?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    disconnect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    delete?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    connect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    update?: Prisma.ServiceUpdateWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.ServiceUpdateWithWhereUniqueWithoutAutoEntrepreneurInput[];
    updateMany?: Prisma.ServiceUpdateManyWithWhereWithoutAutoEntrepreneurInput | Prisma.ServiceUpdateManyWithWhereWithoutAutoEntrepreneurInput[];
    deleteMany?: Prisma.ServiceScalarWhereInput | Prisma.ServiceScalarWhereInput[];
};
export type ServiceCreateNestedOneWithoutItemInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutItemInput, Prisma.ServiceUncheckedCreateWithoutItemInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutItemInput;
    connect?: Prisma.ServiceWhereUniqueInput;
};
export type ServiceUncheckedCreateNestedOneWithoutItemInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutItemInput, Prisma.ServiceUncheckedCreateWithoutItemInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutItemInput;
    connect?: Prisma.ServiceWhereUniqueInput;
};
export type ServiceUpdateOneWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutItemInput, Prisma.ServiceUncheckedCreateWithoutItemInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutItemInput;
    upsert?: Prisma.ServiceUpsertWithoutItemInput;
    disconnect?: Prisma.ServiceWhereInput | boolean;
    delete?: Prisma.ServiceWhereInput | boolean;
    connect?: Prisma.ServiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServiceUpdateToOneWithWhereWithoutItemInput, Prisma.ServiceUpdateWithoutItemInput>, Prisma.ServiceUncheckedUpdateWithoutItemInput>;
};
export type ServiceUncheckedUpdateOneWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutItemInput, Prisma.ServiceUncheckedCreateWithoutItemInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutItemInput;
    upsert?: Prisma.ServiceUpsertWithoutItemInput;
    disconnect?: Prisma.ServiceWhereInput | boolean;
    delete?: Prisma.ServiceWhereInput | boolean;
    connect?: Prisma.ServiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServiceUpdateToOneWithWhereWithoutItemInput, Prisma.ServiceUpdateWithoutItemInput>, Prisma.ServiceUncheckedUpdateWithoutItemInput>;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ServiceCreateNestedOneWithoutInvoiceLinesInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutInvoiceLinesInput, Prisma.ServiceUncheckedCreateWithoutInvoiceLinesInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutInvoiceLinesInput;
    connect?: Prisma.ServiceWhereUniqueInput;
};
export type ServiceUpdateOneWithoutInvoiceLinesNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutInvoiceLinesInput, Prisma.ServiceUncheckedCreateWithoutInvoiceLinesInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutInvoiceLinesInput;
    upsert?: Prisma.ServiceUpsertWithoutInvoiceLinesInput;
    disconnect?: Prisma.ServiceWhereInput | boolean;
    delete?: Prisma.ServiceWhereInput | boolean;
    connect?: Prisma.ServiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServiceUpdateToOneWithWhereWithoutInvoiceLinesInput, Prisma.ServiceUpdateWithoutInvoiceLinesInput>, Prisma.ServiceUncheckedUpdateWithoutInvoiceLinesInput>;
};
export type ServiceCreateNestedOneWithoutQuoteLinesInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutQuoteLinesInput, Prisma.ServiceUncheckedCreateWithoutQuoteLinesInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutQuoteLinesInput;
    connect?: Prisma.ServiceWhereUniqueInput;
};
export type ServiceUpdateOneWithoutQuoteLinesNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutQuoteLinesInput, Prisma.ServiceUncheckedCreateWithoutQuoteLinesInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutQuoteLinesInput;
    upsert?: Prisma.ServiceUpsertWithoutQuoteLinesInput;
    disconnect?: Prisma.ServiceWhereInput | boolean;
    delete?: Prisma.ServiceWhereInput | boolean;
    connect?: Prisma.ServiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServiceUpdateToOneWithWhereWithoutQuoteLinesInput, Prisma.ServiceUpdateWithoutQuoteLinesInput>, Prisma.ServiceUncheckedUpdateWithoutQuoteLinesInput>;
};
export type ServiceCreateWithoutAutoEntrepreneurInput = {
    id?: string;
    hourlyRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: number | null;
    item: Prisma.ItemCreateNestedOneWithoutServiceInput;
    invoiceLines?: Prisma.InvoiceLineCreateNestedManyWithoutServiceInput;
    quoteLines?: Prisma.QuoteLineCreateNestedManyWithoutServiceInput;
};
export type ServiceUncheckedCreateWithoutAutoEntrepreneurInput = {
    id?: string;
    itemId: string;
    hourlyRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: number | null;
    invoiceLines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutServiceInput;
    quoteLines?: Prisma.QuoteLineUncheckedCreateNestedManyWithoutServiceInput;
};
export type ServiceCreateOrConnectWithoutAutoEntrepreneurInput = {
    where: Prisma.ServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutAutoEntrepreneurInput, Prisma.ServiceUncheckedCreateWithoutAutoEntrepreneurInput>;
};
export type ServiceCreateManyAutoEntrepreneurInputEnvelope = {
    data: Prisma.ServiceCreateManyAutoEntrepreneurInput | Prisma.ServiceCreateManyAutoEntrepreneurInput[];
    skipDuplicates?: boolean;
};
export type ServiceUpsertWithWhereUniqueWithoutAutoEntrepreneurInput = {
    where: Prisma.ServiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.ServiceUpdateWithoutAutoEntrepreneurInput, Prisma.ServiceUncheckedUpdateWithoutAutoEntrepreneurInput>;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutAutoEntrepreneurInput, Prisma.ServiceUncheckedCreateWithoutAutoEntrepreneurInput>;
};
export type ServiceUpdateWithWhereUniqueWithoutAutoEntrepreneurInput = {
    where: Prisma.ServiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.ServiceUpdateWithoutAutoEntrepreneurInput, Prisma.ServiceUncheckedUpdateWithoutAutoEntrepreneurInput>;
};
export type ServiceUpdateManyWithWhereWithoutAutoEntrepreneurInput = {
    where: Prisma.ServiceScalarWhereInput;
    data: Prisma.XOR<Prisma.ServiceUpdateManyMutationInput, Prisma.ServiceUncheckedUpdateManyWithoutAutoEntrepreneurInput>;
};
export type ServiceScalarWhereInput = {
    AND?: Prisma.ServiceScalarWhereInput | Prisma.ServiceScalarWhereInput[];
    OR?: Prisma.ServiceScalarWhereInput[];
    NOT?: Prisma.ServiceScalarWhereInput | Prisma.ServiceScalarWhereInput[];
    id?: Prisma.StringFilter<"Service"> | string;
    itemId?: Prisma.StringFilter<"Service"> | string;
    hourlyRate?: Prisma.DecimalNullableFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.DecimalNullableFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.IntNullableFilter<"Service"> | number | null;
    AutoEntrepreneurId?: Prisma.StringFilter<"Service"> | string;
};
export type ServiceCreateWithoutItemInput = {
    id?: string;
    hourlyRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: number | null;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutServicesInput;
    invoiceLines?: Prisma.InvoiceLineCreateNestedManyWithoutServiceInput;
    quoteLines?: Prisma.QuoteLineCreateNestedManyWithoutServiceInput;
};
export type ServiceUncheckedCreateWithoutItemInput = {
    id?: string;
    hourlyRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: number | null;
    AutoEntrepreneurId: string;
    invoiceLines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutServiceInput;
    quoteLines?: Prisma.QuoteLineUncheckedCreateNestedManyWithoutServiceInput;
};
export type ServiceCreateOrConnectWithoutItemInput = {
    where: Prisma.ServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutItemInput, Prisma.ServiceUncheckedCreateWithoutItemInput>;
};
export type ServiceUpsertWithoutItemInput = {
    update: Prisma.XOR<Prisma.ServiceUpdateWithoutItemInput, Prisma.ServiceUncheckedUpdateWithoutItemInput>;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutItemInput, Prisma.ServiceUncheckedCreateWithoutItemInput>;
    where?: Prisma.ServiceWhereInput;
};
export type ServiceUpdateToOneWithWhereWithoutItemInput = {
    where?: Prisma.ServiceWhereInput;
    data: Prisma.XOR<Prisma.ServiceUpdateWithoutItemInput, Prisma.ServiceUncheckedUpdateWithoutItemInput>;
};
export type ServiceUpdateWithoutItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hourlyRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutServicesNestedInput;
    invoiceLines?: Prisma.InvoiceLineUpdateManyWithoutServiceNestedInput;
    quoteLines?: Prisma.QuoteLineUpdateManyWithoutServiceNestedInput;
};
export type ServiceUncheckedUpdateWithoutItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hourlyRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceLines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutServiceNestedInput;
    quoteLines?: Prisma.QuoteLineUncheckedUpdateManyWithoutServiceNestedInput;
};
export type ServiceCreateWithoutInvoiceLinesInput = {
    id?: string;
    hourlyRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: number | null;
    item: Prisma.ItemCreateNestedOneWithoutServiceInput;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutServicesInput;
    quoteLines?: Prisma.QuoteLineCreateNestedManyWithoutServiceInput;
};
export type ServiceUncheckedCreateWithoutInvoiceLinesInput = {
    id?: string;
    itemId: string;
    hourlyRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: number | null;
    AutoEntrepreneurId: string;
    quoteLines?: Prisma.QuoteLineUncheckedCreateNestedManyWithoutServiceInput;
};
export type ServiceCreateOrConnectWithoutInvoiceLinesInput = {
    where: Prisma.ServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutInvoiceLinesInput, Prisma.ServiceUncheckedCreateWithoutInvoiceLinesInput>;
};
export type ServiceUpsertWithoutInvoiceLinesInput = {
    update: Prisma.XOR<Prisma.ServiceUpdateWithoutInvoiceLinesInput, Prisma.ServiceUncheckedUpdateWithoutInvoiceLinesInput>;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutInvoiceLinesInput, Prisma.ServiceUncheckedCreateWithoutInvoiceLinesInput>;
    where?: Prisma.ServiceWhereInput;
};
export type ServiceUpdateToOneWithWhereWithoutInvoiceLinesInput = {
    where?: Prisma.ServiceWhereInput;
    data: Prisma.XOR<Prisma.ServiceUpdateWithoutInvoiceLinesInput, Prisma.ServiceUncheckedUpdateWithoutInvoiceLinesInput>;
};
export type ServiceUpdateWithoutInvoiceLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hourlyRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    item?: Prisma.ItemUpdateOneRequiredWithoutServiceNestedInput;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutServicesNestedInput;
    quoteLines?: Prisma.QuoteLineUpdateManyWithoutServiceNestedInput;
};
export type ServiceUncheckedUpdateWithoutInvoiceLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    hourlyRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    quoteLines?: Prisma.QuoteLineUncheckedUpdateManyWithoutServiceNestedInput;
};
export type ServiceCreateWithoutQuoteLinesInput = {
    id?: string;
    hourlyRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: number | null;
    item: Prisma.ItemCreateNestedOneWithoutServiceInput;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutServicesInput;
    invoiceLines?: Prisma.InvoiceLineCreateNestedManyWithoutServiceInput;
};
export type ServiceUncheckedCreateWithoutQuoteLinesInput = {
    id?: string;
    itemId: string;
    hourlyRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: number | null;
    AutoEntrepreneurId: string;
    invoiceLines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutServiceInput;
};
export type ServiceCreateOrConnectWithoutQuoteLinesInput = {
    where: Prisma.ServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutQuoteLinesInput, Prisma.ServiceUncheckedCreateWithoutQuoteLinesInput>;
};
export type ServiceUpsertWithoutQuoteLinesInput = {
    update: Prisma.XOR<Prisma.ServiceUpdateWithoutQuoteLinesInput, Prisma.ServiceUncheckedUpdateWithoutQuoteLinesInput>;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutQuoteLinesInput, Prisma.ServiceUncheckedCreateWithoutQuoteLinesInput>;
    where?: Prisma.ServiceWhereInput;
};
export type ServiceUpdateToOneWithWhereWithoutQuoteLinesInput = {
    where?: Prisma.ServiceWhereInput;
    data: Prisma.XOR<Prisma.ServiceUpdateWithoutQuoteLinesInput, Prisma.ServiceUncheckedUpdateWithoutQuoteLinesInput>;
};
export type ServiceUpdateWithoutQuoteLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hourlyRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    item?: Prisma.ItemUpdateOneRequiredWithoutServiceNestedInput;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutServicesNestedInput;
    invoiceLines?: Prisma.InvoiceLineUpdateManyWithoutServiceNestedInput;
};
export type ServiceUncheckedUpdateWithoutQuoteLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    hourlyRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceLines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutServiceNestedInput;
};
export type ServiceCreateManyAutoEntrepreneurInput = {
    id?: string;
    itemId: string;
    hourlyRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: number | null;
};
export type ServiceUpdateWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hourlyRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    item?: Prisma.ItemUpdateOneRequiredWithoutServiceNestedInput;
    invoiceLines?: Prisma.InvoiceLineUpdateManyWithoutServiceNestedInput;
    quoteLines?: Prisma.QuoteLineUpdateManyWithoutServiceNestedInput;
};
export type ServiceUncheckedUpdateWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    hourlyRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    invoiceLines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutServiceNestedInput;
    quoteLines?: Prisma.QuoteLineUncheckedUpdateManyWithoutServiceNestedInput;
};
export type ServiceUncheckedUpdateManyWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    hourlyRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fixedRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedDuration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
/**
 * Count Type ServiceCountOutputType
 */
export type ServiceCountOutputType = {
    invoiceLines: number;
    quoteLines: number;
};
export type ServiceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoiceLines?: boolean | ServiceCountOutputTypeCountInvoiceLinesArgs;
    quoteLines?: boolean | ServiceCountOutputTypeCountQuoteLinesArgs;
};
/**
 * ServiceCountOutputType without action
 */
export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: Prisma.ServiceCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ServiceCountOutputType without action
 */
export type ServiceCountOutputTypeCountInvoiceLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceLineWhereInput;
};
/**
 * ServiceCountOutputType without action
 */
export type ServiceCountOutputTypeCountQuoteLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuoteLineWhereInput;
};
export type ServiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    itemId?: boolean;
    hourlyRate?: boolean;
    fixedRate?: boolean;
    estimatedDuration?: boolean;
    AutoEntrepreneurId?: boolean;
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
    AutoEntrepreneur?: boolean | Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>;
    invoiceLines?: boolean | Prisma.Service$invoiceLinesArgs<ExtArgs>;
    quoteLines?: boolean | Prisma.Service$quoteLinesArgs<ExtArgs>;
    _count?: boolean | Prisma.ServiceCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["service"]>;
export type ServiceSelectScalar = {
    id?: boolean;
    itemId?: boolean;
    hourlyRate?: boolean;
    fixedRate?: boolean;
    estimatedDuration?: boolean;
    AutoEntrepreneurId?: boolean;
};
export type ServiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "itemId" | "hourlyRate" | "fixedRate" | "estimatedDuration" | "AutoEntrepreneurId", ExtArgs["result"]["service"]>;
export type ServiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
    AutoEntrepreneur?: boolean | Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>;
    invoiceLines?: boolean | Prisma.Service$invoiceLinesArgs<ExtArgs>;
    quoteLines?: boolean | Prisma.Service$quoteLinesArgs<ExtArgs>;
    _count?: boolean | Prisma.ServiceCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ServicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Service";
    objects: {
        item: Prisma.$ItemPayload<ExtArgs>;
        AutoEntrepreneur: Prisma.$AutoEntrepreneurPayload<ExtArgs>;
        invoiceLines: Prisma.$InvoiceLinePayload<ExtArgs>[];
        quoteLines: Prisma.$QuoteLinePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        itemId: string;
        hourlyRate: runtime.Decimal | null;
        fixedRate: runtime.Decimal | null;
        estimatedDuration: number | null;
        AutoEntrepreneurId: string;
    }, ExtArgs["result"]["service"]>;
    composites: {};
};
export type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ServicePayload, S>;
export type ServiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServiceCountAggregateInputType | true;
};
export interface ServiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Service'];
        meta: {
            name: 'Service';
        };
    };
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: Prisma.SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: Prisma.SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     *
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ServiceFindManyArgs>(args?: Prisma.SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     *
     */
    create<T extends ServiceCreateArgs>(args: Prisma.SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ServiceCreateManyArgs>(args?: Prisma.SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     *
     */
    delete<T extends ServiceDeleteArgs>(args: Prisma.SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ServiceUpdateArgs>(args: Prisma.SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: Prisma.SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: Prisma.SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(args?: Prisma.Subset<T, ServiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ServiceCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Prisma.Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>;
    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ServiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ServiceGroupByArgs['orderBy'];
    } : {
        orderBy?: ServiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Service model
     */
    readonly fields: ServiceFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Service.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    item<T extends Prisma.ItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ItemDefaultArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    AutoEntrepreneur<T extends Prisma.AutoEntrepreneurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>>): Prisma.Prisma__AutoEntrepreneurClient<runtime.Types.Result.GetResult<Prisma.$AutoEntrepreneurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    invoiceLines<T extends Prisma.Service$invoiceLinesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Service$invoiceLinesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    quoteLines<T extends Prisma.Service$quoteLinesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Service$quoteLinesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuoteLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Service model
 */
export interface ServiceFieldRefs {
    readonly id: Prisma.FieldRef<"Service", 'String'>;
    readonly itemId: Prisma.FieldRef<"Service", 'String'>;
    readonly hourlyRate: Prisma.FieldRef<"Service", 'Decimal'>;
    readonly fixedRate: Prisma.FieldRef<"Service", 'Decimal'>;
    readonly estimatedDuration: Prisma.FieldRef<"Service", 'Int'>;
    readonly AutoEntrepreneurId: Prisma.FieldRef<"Service", 'String'>;
}
/**
 * Service findUnique
 */
export type ServiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Service to fetch.
     */
    where: Prisma.ServiceWhereUniqueInput;
};
/**
 * Service findUniqueOrThrow
 */
export type ServiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Service to fetch.
     */
    where: Prisma.ServiceWhereUniqueInput;
};
/**
 * Service findFirst
 */
export type ServiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Service to fetch.
     */
    where?: Prisma.ServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Services to fetch.
     */
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Services.
     */
    cursor?: Prisma.ServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Services.
     */
    distinct?: Prisma.ServiceScalarFieldEnum | Prisma.ServiceScalarFieldEnum[];
};
/**
 * Service findFirstOrThrow
 */
export type ServiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Service to fetch.
     */
    where?: Prisma.ServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Services to fetch.
     */
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Services.
     */
    cursor?: Prisma.ServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Services.
     */
    distinct?: Prisma.ServiceScalarFieldEnum | Prisma.ServiceScalarFieldEnum[];
};
/**
 * Service findMany
 */
export type ServiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Services to fetch.
     */
    where?: Prisma.ServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Services to fetch.
     */
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Services.
     */
    cursor?: Prisma.ServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Services.
     */
    skip?: number;
    distinct?: Prisma.ServiceScalarFieldEnum | Prisma.ServiceScalarFieldEnum[];
};
/**
 * Service create
 */
export type ServiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    /**
     * The data needed to create a Service.
     */
    data: Prisma.XOR<Prisma.ServiceCreateInput, Prisma.ServiceUncheckedCreateInput>;
};
/**
 * Service createMany
 */
export type ServiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: Prisma.ServiceCreateManyInput | Prisma.ServiceCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Service update
 */
export type ServiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    /**
     * The data needed to update a Service.
     */
    data: Prisma.XOR<Prisma.ServiceUpdateInput, Prisma.ServiceUncheckedUpdateInput>;
    /**
     * Choose, which Service to update.
     */
    where: Prisma.ServiceWhereUniqueInput;
};
/**
 * Service updateMany
 */
export type ServiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: Prisma.XOR<Prisma.ServiceUpdateManyMutationInput, Prisma.ServiceUncheckedUpdateManyInput>;
    /**
     * Filter which Services to update
     */
    where?: Prisma.ServiceWhereInput;
    /**
     * Limit how many Services to update.
     */
    limit?: number;
};
/**
 * Service upsert
 */
export type ServiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: Prisma.ServiceWhereUniqueInput;
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: Prisma.XOR<Prisma.ServiceCreateInput, Prisma.ServiceUncheckedCreateInput>;
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ServiceUpdateInput, Prisma.ServiceUncheckedUpdateInput>;
};
/**
 * Service delete
 */
export type ServiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    /**
     * Filter which Service to delete.
     */
    where: Prisma.ServiceWhereUniqueInput;
};
/**
 * Service deleteMany
 */
export type ServiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: Prisma.ServiceWhereInput;
    /**
     * Limit how many Services to delete.
     */
    limit?: number;
};
/**
 * Service.invoiceLines
 */
export type Service$invoiceLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceLine
     */
    select?: Prisma.InvoiceLineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvoiceLine
     */
    omit?: Prisma.InvoiceLineOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceLineInclude<ExtArgs> | null;
    where?: Prisma.InvoiceLineWhereInput;
    orderBy?: Prisma.InvoiceLineOrderByWithRelationInput | Prisma.InvoiceLineOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceLineScalarFieldEnum | Prisma.InvoiceLineScalarFieldEnum[];
};
/**
 * Service.quoteLines
 */
export type Service$quoteLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteLine
     */
    select?: Prisma.QuoteLineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuoteLine
     */
    omit?: Prisma.QuoteLineOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuoteLineInclude<ExtArgs> | null;
    where?: Prisma.QuoteLineWhereInput;
    orderBy?: Prisma.QuoteLineOrderByWithRelationInput | Prisma.QuoteLineOrderByWithRelationInput[];
    cursor?: Prisma.QuoteLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuoteLineScalarFieldEnum | Prisma.QuoteLineScalarFieldEnum[];
};
/**
 * Service without action
 */
export type ServiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Service.d.ts.map
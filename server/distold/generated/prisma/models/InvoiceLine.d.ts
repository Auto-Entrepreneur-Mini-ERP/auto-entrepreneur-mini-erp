import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model InvoiceLine
 *
 */
export type InvoiceLineModel = runtime.Types.Result.DefaultSelection<Prisma.$InvoiceLinePayload>;
export type AggregateInvoiceLine = {
    _count: InvoiceLineCountAggregateOutputType | null;
    _avg: InvoiceLineAvgAggregateOutputType | null;
    _sum: InvoiceLineSumAggregateOutputType | null;
    _min: InvoiceLineMinAggregateOutputType | null;
    _max: InvoiceLineMaxAggregateOutputType | null;
};
export type InvoiceLineAvgAggregateOutputType = {
    quantity: runtime.Decimal | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
    order: number | null;
};
export type InvoiceLineSumAggregateOutputType = {
    quantity: runtime.Decimal | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
    order: number | null;
};
export type InvoiceLineMinAggregateOutputType = {
    id: string | null;
    lineType: $Enums.LineType | null;
    description: string | null;
    quantity: runtime.Decimal | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
    order: number | null;
    invoiceId: string | null;
    productId: string | null;
    serviceId: string | null;
};
export type InvoiceLineMaxAggregateOutputType = {
    id: string | null;
    lineType: $Enums.LineType | null;
    description: string | null;
    quantity: runtime.Decimal | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
    order: number | null;
    invoiceId: string | null;
    productId: string | null;
    serviceId: string | null;
};
export type InvoiceLineCountAggregateOutputType = {
    id: number;
    lineType: number;
    description: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    order: number;
    invoiceId: number;
    productId: number;
    serviceId: number;
    _all: number;
};
export type InvoiceLineAvgAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    order?: true;
};
export type InvoiceLineSumAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    order?: true;
};
export type InvoiceLineMinAggregateInputType = {
    id?: true;
    lineType?: true;
    description?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    order?: true;
    invoiceId?: true;
    productId?: true;
    serviceId?: true;
};
export type InvoiceLineMaxAggregateInputType = {
    id?: true;
    lineType?: true;
    description?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    order?: true;
    invoiceId?: true;
    productId?: true;
    serviceId?: true;
};
export type InvoiceLineCountAggregateInputType = {
    id?: true;
    lineType?: true;
    description?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    order?: true;
    invoiceId?: true;
    productId?: true;
    serviceId?: true;
    _all?: true;
};
export type InvoiceLineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceLine to aggregate.
     */
    where?: Prisma.InvoiceLineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InvoiceLines to fetch.
     */
    orderBy?: Prisma.InvoiceLineOrderByWithRelationInput | Prisma.InvoiceLineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.InvoiceLineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InvoiceLines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InvoiceLines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned InvoiceLines
    **/
    _count?: true | InvoiceLineCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: InvoiceLineAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: InvoiceLineSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceLineMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceLineMaxAggregateInputType;
};
export type GetInvoiceLineAggregateType<T extends InvoiceLineAggregateArgs> = {
    [P in keyof T & keyof AggregateInvoiceLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvoiceLine[P]> : Prisma.GetScalarType<T[P], AggregateInvoiceLine[P]>;
};
export type InvoiceLineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceLineWhereInput;
    orderBy?: Prisma.InvoiceLineOrderByWithAggregationInput | Prisma.InvoiceLineOrderByWithAggregationInput[];
    by: Prisma.InvoiceLineScalarFieldEnum[] | Prisma.InvoiceLineScalarFieldEnum;
    having?: Prisma.InvoiceLineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvoiceLineCountAggregateInputType | true;
    _avg?: InvoiceLineAvgAggregateInputType;
    _sum?: InvoiceLineSumAggregateInputType;
    _min?: InvoiceLineMinAggregateInputType;
    _max?: InvoiceLineMaxAggregateInputType;
};
export type InvoiceLineGroupByOutputType = {
    id: string;
    lineType: $Enums.LineType;
    description: string | null;
    quantity: runtime.Decimal;
    unitPrice: runtime.Decimal;
    totalPrice: runtime.Decimal;
    order: number;
    invoiceId: string;
    productId: string | null;
    serviceId: string | null;
    _count: InvoiceLineCountAggregateOutputType | null;
    _avg: InvoiceLineAvgAggregateOutputType | null;
    _sum: InvoiceLineSumAggregateOutputType | null;
    _min: InvoiceLineMinAggregateOutputType | null;
    _max: InvoiceLineMaxAggregateOutputType | null;
};
type GetInvoiceLineGroupByPayload<T extends InvoiceLineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvoiceLineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvoiceLineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvoiceLineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvoiceLineGroupByOutputType[P]>;
}>>;
export type InvoiceLineWhereInput = {
    AND?: Prisma.InvoiceLineWhereInput | Prisma.InvoiceLineWhereInput[];
    OR?: Prisma.InvoiceLineWhereInput[];
    NOT?: Prisma.InvoiceLineWhereInput | Prisma.InvoiceLineWhereInput[];
    id?: Prisma.StringFilter<"InvoiceLine"> | string;
    lineType?: Prisma.EnumLineTypeFilter<"InvoiceLine"> | $Enums.LineType;
    description?: Prisma.StringNullableFilter<"InvoiceLine"> | string | null;
    quantity?: Prisma.DecimalFilter<"InvoiceLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFilter<"InvoiceLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"InvoiceLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFilter<"InvoiceLine"> | number;
    invoiceId?: Prisma.StringFilter<"InvoiceLine"> | string;
    productId?: Prisma.StringNullableFilter<"InvoiceLine"> | string | null;
    serviceId?: Prisma.StringNullableFilter<"InvoiceLine"> | string | null;
    invoice?: Prisma.XOR<Prisma.InvoiceScalarRelationFilter, Prisma.InvoiceWhereInput>;
    product?: Prisma.XOR<Prisma.ProductNullableScalarRelationFilter, Prisma.ProductWhereInput> | null;
    service?: Prisma.XOR<Prisma.ServiceNullableScalarRelationFilter, Prisma.ServiceWhereInput> | null;
};
export type InvoiceLineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lineType?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    productId?: Prisma.SortOrderInput | Prisma.SortOrder;
    serviceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    invoice?: Prisma.InvoiceOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
    service?: Prisma.ServiceOrderByWithRelationInput;
    _relevance?: Prisma.InvoiceLineOrderByRelevanceInput;
};
export type InvoiceLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InvoiceLineWhereInput | Prisma.InvoiceLineWhereInput[];
    OR?: Prisma.InvoiceLineWhereInput[];
    NOT?: Prisma.InvoiceLineWhereInput | Prisma.InvoiceLineWhereInput[];
    lineType?: Prisma.EnumLineTypeFilter<"InvoiceLine"> | $Enums.LineType;
    description?: Prisma.StringNullableFilter<"InvoiceLine"> | string | null;
    quantity?: Prisma.DecimalFilter<"InvoiceLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFilter<"InvoiceLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"InvoiceLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFilter<"InvoiceLine"> | number;
    invoiceId?: Prisma.StringFilter<"InvoiceLine"> | string;
    productId?: Prisma.StringNullableFilter<"InvoiceLine"> | string | null;
    serviceId?: Prisma.StringNullableFilter<"InvoiceLine"> | string | null;
    invoice?: Prisma.XOR<Prisma.InvoiceScalarRelationFilter, Prisma.InvoiceWhereInput>;
    product?: Prisma.XOR<Prisma.ProductNullableScalarRelationFilter, Prisma.ProductWhereInput> | null;
    service?: Prisma.XOR<Prisma.ServiceNullableScalarRelationFilter, Prisma.ServiceWhereInput> | null;
}, "id">;
export type InvoiceLineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lineType?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    productId?: Prisma.SortOrderInput | Prisma.SortOrder;
    serviceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.InvoiceLineCountOrderByAggregateInput;
    _avg?: Prisma.InvoiceLineAvgOrderByAggregateInput;
    _max?: Prisma.InvoiceLineMaxOrderByAggregateInput;
    _min?: Prisma.InvoiceLineMinOrderByAggregateInput;
    _sum?: Prisma.InvoiceLineSumOrderByAggregateInput;
};
export type InvoiceLineScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvoiceLineScalarWhereWithAggregatesInput | Prisma.InvoiceLineScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvoiceLineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvoiceLineScalarWhereWithAggregatesInput | Prisma.InvoiceLineScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"InvoiceLine"> | string;
    lineType?: Prisma.EnumLineTypeWithAggregatesFilter<"InvoiceLine"> | $Enums.LineType;
    description?: Prisma.StringNullableWithAggregatesFilter<"InvoiceLine"> | string | null;
    quantity?: Prisma.DecimalWithAggregatesFilter<"InvoiceLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalWithAggregatesFilter<"InvoiceLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalWithAggregatesFilter<"InvoiceLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntWithAggregatesFilter<"InvoiceLine"> | number;
    invoiceId?: Prisma.StringWithAggregatesFilter<"InvoiceLine"> | string;
    productId?: Prisma.StringNullableWithAggregatesFilter<"InvoiceLine"> | string | null;
    serviceId?: Prisma.StringNullableWithAggregatesFilter<"InvoiceLine"> | string | null;
};
export type InvoiceLineCreateInput = {
    id?: string;
    lineType: $Enums.LineType;
    description?: string | null;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    invoice: Prisma.InvoiceCreateNestedOneWithoutInvoiceLinesInput;
    product?: Prisma.ProductCreateNestedOneWithoutInvoiceLinesInput;
    service?: Prisma.ServiceCreateNestedOneWithoutInvoiceLinesInput;
};
export type InvoiceLineUncheckedCreateInput = {
    id?: string;
    lineType: $Enums.LineType;
    description?: string | null;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    invoiceId: string;
    productId?: string | null;
    serviceId?: string | null;
};
export type InvoiceLineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    invoice?: Prisma.InvoiceUpdateOneRequiredWithoutInvoiceLinesNestedInput;
    product?: Prisma.ProductUpdateOneWithoutInvoiceLinesNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutInvoiceLinesNestedInput;
};
export type InvoiceLineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvoiceLineCreateManyInput = {
    id?: string;
    lineType: $Enums.LineType;
    description?: string | null;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    invoiceId: string;
    productId?: string | null;
    serviceId?: string | null;
};
export type InvoiceLineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type InvoiceLineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvoiceLineListRelationFilter = {
    every?: Prisma.InvoiceLineWhereInput;
    some?: Prisma.InvoiceLineWhereInput;
    none?: Prisma.InvoiceLineWhereInput;
};
export type InvoiceLineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvoiceLineOrderByRelevanceInput = {
    fields: Prisma.InvoiceLineOrderByRelevanceFieldEnum | Prisma.InvoiceLineOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type InvoiceLineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lineType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
};
export type InvoiceLineAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
};
export type InvoiceLineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lineType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
};
export type InvoiceLineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lineType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
};
export type InvoiceLineSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
};
export type InvoiceLineCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.InvoiceLineCreateWithoutProductInput, Prisma.InvoiceLineUncheckedCreateWithoutProductInput> | Prisma.InvoiceLineCreateWithoutProductInput[] | Prisma.InvoiceLineUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.InvoiceLineCreateOrConnectWithoutProductInput | Prisma.InvoiceLineCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.InvoiceLineCreateManyProductInputEnvelope;
    connect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
};
export type InvoiceLineUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.InvoiceLineCreateWithoutProductInput, Prisma.InvoiceLineUncheckedCreateWithoutProductInput> | Prisma.InvoiceLineCreateWithoutProductInput[] | Prisma.InvoiceLineUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.InvoiceLineCreateOrConnectWithoutProductInput | Prisma.InvoiceLineCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.InvoiceLineCreateManyProductInputEnvelope;
    connect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
};
export type InvoiceLineUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceLineCreateWithoutProductInput, Prisma.InvoiceLineUncheckedCreateWithoutProductInput> | Prisma.InvoiceLineCreateWithoutProductInput[] | Prisma.InvoiceLineUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.InvoiceLineCreateOrConnectWithoutProductInput | Prisma.InvoiceLineCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.InvoiceLineUpsertWithWhereUniqueWithoutProductInput | Prisma.InvoiceLineUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.InvoiceLineCreateManyProductInputEnvelope;
    set?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    disconnect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    delete?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    connect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    update?: Prisma.InvoiceLineUpdateWithWhereUniqueWithoutProductInput | Prisma.InvoiceLineUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.InvoiceLineUpdateManyWithWhereWithoutProductInput | Prisma.InvoiceLineUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.InvoiceLineScalarWhereInput | Prisma.InvoiceLineScalarWhereInput[];
};
export type InvoiceLineUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceLineCreateWithoutProductInput, Prisma.InvoiceLineUncheckedCreateWithoutProductInput> | Prisma.InvoiceLineCreateWithoutProductInput[] | Prisma.InvoiceLineUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.InvoiceLineCreateOrConnectWithoutProductInput | Prisma.InvoiceLineCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.InvoiceLineUpsertWithWhereUniqueWithoutProductInput | Prisma.InvoiceLineUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.InvoiceLineCreateManyProductInputEnvelope;
    set?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    disconnect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    delete?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    connect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    update?: Prisma.InvoiceLineUpdateWithWhereUniqueWithoutProductInput | Prisma.InvoiceLineUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.InvoiceLineUpdateManyWithWhereWithoutProductInput | Prisma.InvoiceLineUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.InvoiceLineScalarWhereInput | Prisma.InvoiceLineScalarWhereInput[];
};
export type InvoiceLineCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.InvoiceLineCreateWithoutServiceInput, Prisma.InvoiceLineUncheckedCreateWithoutServiceInput> | Prisma.InvoiceLineCreateWithoutServiceInput[] | Prisma.InvoiceLineUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.InvoiceLineCreateOrConnectWithoutServiceInput | Prisma.InvoiceLineCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.InvoiceLineCreateManyServiceInputEnvelope;
    connect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
};
export type InvoiceLineUncheckedCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.InvoiceLineCreateWithoutServiceInput, Prisma.InvoiceLineUncheckedCreateWithoutServiceInput> | Prisma.InvoiceLineCreateWithoutServiceInput[] | Prisma.InvoiceLineUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.InvoiceLineCreateOrConnectWithoutServiceInput | Prisma.InvoiceLineCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.InvoiceLineCreateManyServiceInputEnvelope;
    connect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
};
export type InvoiceLineUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceLineCreateWithoutServiceInput, Prisma.InvoiceLineUncheckedCreateWithoutServiceInput> | Prisma.InvoiceLineCreateWithoutServiceInput[] | Prisma.InvoiceLineUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.InvoiceLineCreateOrConnectWithoutServiceInput | Prisma.InvoiceLineCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.InvoiceLineUpsertWithWhereUniqueWithoutServiceInput | Prisma.InvoiceLineUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.InvoiceLineCreateManyServiceInputEnvelope;
    set?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    disconnect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    delete?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    connect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    update?: Prisma.InvoiceLineUpdateWithWhereUniqueWithoutServiceInput | Prisma.InvoiceLineUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.InvoiceLineUpdateManyWithWhereWithoutServiceInput | Prisma.InvoiceLineUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.InvoiceLineScalarWhereInput | Prisma.InvoiceLineScalarWhereInput[];
};
export type InvoiceLineUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceLineCreateWithoutServiceInput, Prisma.InvoiceLineUncheckedCreateWithoutServiceInput> | Prisma.InvoiceLineCreateWithoutServiceInput[] | Prisma.InvoiceLineUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.InvoiceLineCreateOrConnectWithoutServiceInput | Prisma.InvoiceLineCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.InvoiceLineUpsertWithWhereUniqueWithoutServiceInput | Prisma.InvoiceLineUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.InvoiceLineCreateManyServiceInputEnvelope;
    set?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    disconnect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    delete?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    connect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    update?: Prisma.InvoiceLineUpdateWithWhereUniqueWithoutServiceInput | Prisma.InvoiceLineUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.InvoiceLineUpdateManyWithWhereWithoutServiceInput | Prisma.InvoiceLineUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.InvoiceLineScalarWhereInput | Prisma.InvoiceLineScalarWhereInput[];
};
export type InvoiceLineCreateNestedManyWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.InvoiceLineCreateWithoutInvoiceInput, Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput> | Prisma.InvoiceLineCreateWithoutInvoiceInput[] | Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.InvoiceLineCreateOrConnectWithoutInvoiceInput | Prisma.InvoiceLineCreateOrConnectWithoutInvoiceInput[];
    createMany?: Prisma.InvoiceLineCreateManyInvoiceInputEnvelope;
    connect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
};
export type InvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.InvoiceLineCreateWithoutInvoiceInput, Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput> | Prisma.InvoiceLineCreateWithoutInvoiceInput[] | Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.InvoiceLineCreateOrConnectWithoutInvoiceInput | Prisma.InvoiceLineCreateOrConnectWithoutInvoiceInput[];
    createMany?: Prisma.InvoiceLineCreateManyInvoiceInputEnvelope;
    connect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
};
export type InvoiceLineUpdateManyWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceLineCreateWithoutInvoiceInput, Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput> | Prisma.InvoiceLineCreateWithoutInvoiceInput[] | Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.InvoiceLineCreateOrConnectWithoutInvoiceInput | Prisma.InvoiceLineCreateOrConnectWithoutInvoiceInput[];
    upsert?: Prisma.InvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput | Prisma.InvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput[];
    createMany?: Prisma.InvoiceLineCreateManyInvoiceInputEnvelope;
    set?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    disconnect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    delete?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    connect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    update?: Prisma.InvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput | Prisma.InvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput[];
    updateMany?: Prisma.InvoiceLineUpdateManyWithWhereWithoutInvoiceInput | Prisma.InvoiceLineUpdateManyWithWhereWithoutInvoiceInput[];
    deleteMany?: Prisma.InvoiceLineScalarWhereInput | Prisma.InvoiceLineScalarWhereInput[];
};
export type InvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceLineCreateWithoutInvoiceInput, Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput> | Prisma.InvoiceLineCreateWithoutInvoiceInput[] | Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.InvoiceLineCreateOrConnectWithoutInvoiceInput | Prisma.InvoiceLineCreateOrConnectWithoutInvoiceInput[];
    upsert?: Prisma.InvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput | Prisma.InvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput[];
    createMany?: Prisma.InvoiceLineCreateManyInvoiceInputEnvelope;
    set?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    disconnect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    delete?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    connect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    update?: Prisma.InvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput | Prisma.InvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput[];
    updateMany?: Prisma.InvoiceLineUpdateManyWithWhereWithoutInvoiceInput | Prisma.InvoiceLineUpdateManyWithWhereWithoutInvoiceInput[];
    deleteMany?: Prisma.InvoiceLineScalarWhereInput | Prisma.InvoiceLineScalarWhereInput[];
};
export type EnumLineTypeFieldUpdateOperationsInput = {
    set?: $Enums.LineType;
};
export type InvoiceLineCreateWithoutProductInput = {
    id?: string;
    lineType: $Enums.LineType;
    description?: string | null;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    invoice: Prisma.InvoiceCreateNestedOneWithoutInvoiceLinesInput;
    service?: Prisma.ServiceCreateNestedOneWithoutInvoiceLinesInput;
};
export type InvoiceLineUncheckedCreateWithoutProductInput = {
    id?: string;
    lineType: $Enums.LineType;
    description?: string | null;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    invoiceId: string;
    serviceId?: string | null;
};
export type InvoiceLineCreateOrConnectWithoutProductInput = {
    where: Prisma.InvoiceLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceLineCreateWithoutProductInput, Prisma.InvoiceLineUncheckedCreateWithoutProductInput>;
};
export type InvoiceLineCreateManyProductInputEnvelope = {
    data: Prisma.InvoiceLineCreateManyProductInput | Prisma.InvoiceLineCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type InvoiceLineUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.InvoiceLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceLineUpdateWithoutProductInput, Prisma.InvoiceLineUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.InvoiceLineCreateWithoutProductInput, Prisma.InvoiceLineUncheckedCreateWithoutProductInput>;
};
export type InvoiceLineUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.InvoiceLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceLineUpdateWithoutProductInput, Prisma.InvoiceLineUncheckedUpdateWithoutProductInput>;
};
export type InvoiceLineUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.InvoiceLineScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceLineUpdateManyMutationInput, Prisma.InvoiceLineUncheckedUpdateManyWithoutProductInput>;
};
export type InvoiceLineScalarWhereInput = {
    AND?: Prisma.InvoiceLineScalarWhereInput | Prisma.InvoiceLineScalarWhereInput[];
    OR?: Prisma.InvoiceLineScalarWhereInput[];
    NOT?: Prisma.InvoiceLineScalarWhereInput | Prisma.InvoiceLineScalarWhereInput[];
    id?: Prisma.StringFilter<"InvoiceLine"> | string;
    lineType?: Prisma.EnumLineTypeFilter<"InvoiceLine"> | $Enums.LineType;
    description?: Prisma.StringNullableFilter<"InvoiceLine"> | string | null;
    quantity?: Prisma.DecimalFilter<"InvoiceLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFilter<"InvoiceLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"InvoiceLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFilter<"InvoiceLine"> | number;
    invoiceId?: Prisma.StringFilter<"InvoiceLine"> | string;
    productId?: Prisma.StringNullableFilter<"InvoiceLine"> | string | null;
    serviceId?: Prisma.StringNullableFilter<"InvoiceLine"> | string | null;
};
export type InvoiceLineCreateWithoutServiceInput = {
    id?: string;
    lineType: $Enums.LineType;
    description?: string | null;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    invoice: Prisma.InvoiceCreateNestedOneWithoutInvoiceLinesInput;
    product?: Prisma.ProductCreateNestedOneWithoutInvoiceLinesInput;
};
export type InvoiceLineUncheckedCreateWithoutServiceInput = {
    id?: string;
    lineType: $Enums.LineType;
    description?: string | null;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    invoiceId: string;
    productId?: string | null;
};
export type InvoiceLineCreateOrConnectWithoutServiceInput = {
    where: Prisma.InvoiceLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceLineCreateWithoutServiceInput, Prisma.InvoiceLineUncheckedCreateWithoutServiceInput>;
};
export type InvoiceLineCreateManyServiceInputEnvelope = {
    data: Prisma.InvoiceLineCreateManyServiceInput | Prisma.InvoiceLineCreateManyServiceInput[];
    skipDuplicates?: boolean;
};
export type InvoiceLineUpsertWithWhereUniqueWithoutServiceInput = {
    where: Prisma.InvoiceLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceLineUpdateWithoutServiceInput, Prisma.InvoiceLineUncheckedUpdateWithoutServiceInput>;
    create: Prisma.XOR<Prisma.InvoiceLineCreateWithoutServiceInput, Prisma.InvoiceLineUncheckedCreateWithoutServiceInput>;
};
export type InvoiceLineUpdateWithWhereUniqueWithoutServiceInput = {
    where: Prisma.InvoiceLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceLineUpdateWithoutServiceInput, Prisma.InvoiceLineUncheckedUpdateWithoutServiceInput>;
};
export type InvoiceLineUpdateManyWithWhereWithoutServiceInput = {
    where: Prisma.InvoiceLineScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceLineUpdateManyMutationInput, Prisma.InvoiceLineUncheckedUpdateManyWithoutServiceInput>;
};
export type InvoiceLineCreateWithoutInvoiceInput = {
    id?: string;
    lineType: $Enums.LineType;
    description?: string | null;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    product?: Prisma.ProductCreateNestedOneWithoutInvoiceLinesInput;
    service?: Prisma.ServiceCreateNestedOneWithoutInvoiceLinesInput;
};
export type InvoiceLineUncheckedCreateWithoutInvoiceInput = {
    id?: string;
    lineType: $Enums.LineType;
    description?: string | null;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    productId?: string | null;
    serviceId?: string | null;
};
export type InvoiceLineCreateOrConnectWithoutInvoiceInput = {
    where: Prisma.InvoiceLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceLineCreateWithoutInvoiceInput, Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput>;
};
export type InvoiceLineCreateManyInvoiceInputEnvelope = {
    data: Prisma.InvoiceLineCreateManyInvoiceInput | Prisma.InvoiceLineCreateManyInvoiceInput[];
    skipDuplicates?: boolean;
};
export type InvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: Prisma.InvoiceLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceLineUpdateWithoutInvoiceInput, Prisma.InvoiceLineUncheckedUpdateWithoutInvoiceInput>;
    create: Prisma.XOR<Prisma.InvoiceLineCreateWithoutInvoiceInput, Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput>;
};
export type InvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: Prisma.InvoiceLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceLineUpdateWithoutInvoiceInput, Prisma.InvoiceLineUncheckedUpdateWithoutInvoiceInput>;
};
export type InvoiceLineUpdateManyWithWhereWithoutInvoiceInput = {
    where: Prisma.InvoiceLineScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceLineUpdateManyMutationInput, Prisma.InvoiceLineUncheckedUpdateManyWithoutInvoiceInput>;
};
export type InvoiceLineCreateManyProductInput = {
    id?: string;
    lineType: $Enums.LineType;
    description?: string | null;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    invoiceId: string;
    serviceId?: string | null;
};
export type InvoiceLineUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    invoice?: Prisma.InvoiceUpdateOneRequiredWithoutInvoiceLinesNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutInvoiceLinesNestedInput;
};
export type InvoiceLineUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvoiceLineUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvoiceLineCreateManyServiceInput = {
    id?: string;
    lineType: $Enums.LineType;
    description?: string | null;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    invoiceId: string;
    productId?: string | null;
};
export type InvoiceLineUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    invoice?: Prisma.InvoiceUpdateOneRequiredWithoutInvoiceLinesNestedInput;
    product?: Prisma.ProductUpdateOneWithoutInvoiceLinesNestedInput;
};
export type InvoiceLineUncheckedUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvoiceLineUncheckedUpdateManyWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvoiceLineCreateManyInvoiceInput = {
    id?: string;
    lineType: $Enums.LineType;
    description?: string | null;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    productId?: string | null;
    serviceId?: string | null;
};
export type InvoiceLineUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    product?: Prisma.ProductUpdateOneWithoutInvoiceLinesNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutInvoiceLinesNestedInput;
};
export type InvoiceLineUncheckedUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvoiceLineUncheckedUpdateManyWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvoiceLineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lineType?: boolean;
    description?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    order?: boolean;
    invoiceId?: boolean;
    productId?: boolean;
    serviceId?: boolean;
    invoice?: boolean | Prisma.InvoiceDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.InvoiceLine$productArgs<ExtArgs>;
    service?: boolean | Prisma.InvoiceLine$serviceArgs<ExtArgs>;
}, ExtArgs["result"]["invoiceLine"]>;
export type InvoiceLineSelectScalar = {
    id?: boolean;
    lineType?: boolean;
    description?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    order?: boolean;
    invoiceId?: boolean;
    productId?: boolean;
    serviceId?: boolean;
};
export type InvoiceLineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lineType" | "description" | "quantity" | "unitPrice" | "totalPrice" | "order" | "invoiceId" | "productId" | "serviceId", ExtArgs["result"]["invoiceLine"]>;
export type InvoiceLineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoice?: boolean | Prisma.InvoiceDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.InvoiceLine$productArgs<ExtArgs>;
    service?: boolean | Prisma.InvoiceLine$serviceArgs<ExtArgs>;
};
export type $InvoiceLinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvoiceLine";
    objects: {
        invoice: Prisma.$InvoicePayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs> | null;
        service: Prisma.$ServicePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        lineType: $Enums.LineType;
        description: string | null;
        quantity: runtime.Decimal;
        unitPrice: runtime.Decimal;
        totalPrice: runtime.Decimal;
        order: number;
        invoiceId: string;
        productId: string | null;
        serviceId: string | null;
    }, ExtArgs["result"]["invoiceLine"]>;
    composites: {};
};
export type InvoiceLineGetPayload<S extends boolean | null | undefined | InvoiceLineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload, S>;
export type InvoiceLineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvoiceLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvoiceLineCountAggregateInputType | true;
};
export interface InvoiceLineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvoiceLine'];
        meta: {
            name: 'InvoiceLine';
        };
    };
    /**
     * Find zero or one InvoiceLine that matches the filter.
     * @param {InvoiceLineFindUniqueArgs} args - Arguments to find a InvoiceLine
     * @example
     * // Get one InvoiceLine
     * const invoiceLine = await prisma.invoiceLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceLineFindUniqueArgs>(args: Prisma.SelectSubset<T, InvoiceLineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one InvoiceLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceLineFindUniqueOrThrowArgs} args - Arguments to find a InvoiceLine
     * @example
     * // Get one InvoiceLine
     * const invoiceLine = await prisma.invoiceLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceLineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvoiceLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first InvoiceLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceLineFindFirstArgs} args - Arguments to find a InvoiceLine
     * @example
     * // Get one InvoiceLine
     * const invoiceLine = await prisma.invoiceLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceLineFindFirstArgs>(args?: Prisma.SelectSubset<T, InvoiceLineFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first InvoiceLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceLineFindFirstOrThrowArgs} args - Arguments to find a InvoiceLine
     * @example
     * // Get one InvoiceLine
     * const invoiceLine = await prisma.invoiceLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceLineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvoiceLineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more InvoiceLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceLines
     * const invoiceLines = await prisma.invoiceLine.findMany()
     *
     * // Get first 10 InvoiceLines
     * const invoiceLines = await prisma.invoiceLine.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const invoiceLineWithIdOnly = await prisma.invoiceLine.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InvoiceLineFindManyArgs>(args?: Prisma.SelectSubset<T, InvoiceLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a InvoiceLine.
     * @param {InvoiceLineCreateArgs} args - Arguments to create a InvoiceLine.
     * @example
     * // Create one InvoiceLine
     * const InvoiceLine = await prisma.invoiceLine.create({
     *   data: {
     *     // ... data to create a InvoiceLine
     *   }
     * })
     *
     */
    create<T extends InvoiceLineCreateArgs>(args: Prisma.SelectSubset<T, InvoiceLineCreateArgs<ExtArgs>>): Prisma.Prisma__InvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many InvoiceLines.
     * @param {InvoiceLineCreateManyArgs} args - Arguments to create many InvoiceLines.
     * @example
     * // Create many InvoiceLines
     * const invoiceLine = await prisma.invoiceLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InvoiceLineCreateManyArgs>(args?: Prisma.SelectSubset<T, InvoiceLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a InvoiceLine.
     * @param {InvoiceLineDeleteArgs} args - Arguments to delete one InvoiceLine.
     * @example
     * // Delete one InvoiceLine
     * const InvoiceLine = await prisma.invoiceLine.delete({
     *   where: {
     *     // ... filter to delete one InvoiceLine
     *   }
     * })
     *
     */
    delete<T extends InvoiceLineDeleteArgs>(args: Prisma.SelectSubset<T, InvoiceLineDeleteArgs<ExtArgs>>): Prisma.Prisma__InvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one InvoiceLine.
     * @param {InvoiceLineUpdateArgs} args - Arguments to update one InvoiceLine.
     * @example
     * // Update one InvoiceLine
     * const invoiceLine = await prisma.invoiceLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InvoiceLineUpdateArgs>(args: Prisma.SelectSubset<T, InvoiceLineUpdateArgs<ExtArgs>>): Prisma.Prisma__InvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more InvoiceLines.
     * @param {InvoiceLineDeleteManyArgs} args - Arguments to filter InvoiceLines to delete.
     * @example
     * // Delete a few InvoiceLines
     * const { count } = await prisma.invoiceLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InvoiceLineDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvoiceLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more InvoiceLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceLines
     * const invoiceLine = await prisma.invoiceLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InvoiceLineUpdateManyArgs>(args: Prisma.SelectSubset<T, InvoiceLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one InvoiceLine.
     * @param {InvoiceLineUpsertArgs} args - Arguments to update or create a InvoiceLine.
     * @example
     * // Update or create a InvoiceLine
     * const invoiceLine = await prisma.invoiceLine.upsert({
     *   create: {
     *     // ... data to create a InvoiceLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceLine we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceLineUpsertArgs>(args: Prisma.SelectSubset<T, InvoiceLineUpsertArgs<ExtArgs>>): Prisma.Prisma__InvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of InvoiceLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceLineCountArgs} args - Arguments to filter InvoiceLines to count.
     * @example
     * // Count the number of InvoiceLines
     * const count = await prisma.invoiceLine.count({
     *   where: {
     *     // ... the filter for the InvoiceLines we want to count
     *   }
     * })
    **/
    count<T extends InvoiceLineCountArgs>(args?: Prisma.Subset<T, InvoiceLineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvoiceLineCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a InvoiceLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceLineAggregateArgs>(args: Prisma.Subset<T, InvoiceLineAggregateArgs>): Prisma.PrismaPromise<GetInvoiceLineAggregateType<T>>;
    /**
     * Group by InvoiceLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceLineGroupByArgs} args - Group by arguments.
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
    groupBy<T extends InvoiceLineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvoiceLineGroupByArgs['orderBy'];
    } : {
        orderBy?: InvoiceLineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvoiceLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the InvoiceLine model
     */
    readonly fields: InvoiceLineFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for InvoiceLine.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__InvoiceLineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    invoice<T extends Prisma.InvoiceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvoiceDefaultArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.InvoiceLine$productArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvoiceLine$productArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    service<T extends Prisma.InvoiceLine$serviceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvoiceLine$serviceArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the InvoiceLine model
 */
export interface InvoiceLineFieldRefs {
    readonly id: Prisma.FieldRef<"InvoiceLine", 'String'>;
    readonly lineType: Prisma.FieldRef<"InvoiceLine", 'LineType'>;
    readonly description: Prisma.FieldRef<"InvoiceLine", 'String'>;
    readonly quantity: Prisma.FieldRef<"InvoiceLine", 'Decimal'>;
    readonly unitPrice: Prisma.FieldRef<"InvoiceLine", 'Decimal'>;
    readonly totalPrice: Prisma.FieldRef<"InvoiceLine", 'Decimal'>;
    readonly order: Prisma.FieldRef<"InvoiceLine", 'Int'>;
    readonly invoiceId: Prisma.FieldRef<"InvoiceLine", 'String'>;
    readonly productId: Prisma.FieldRef<"InvoiceLine", 'String'>;
    readonly serviceId: Prisma.FieldRef<"InvoiceLine", 'String'>;
}
/**
 * InvoiceLine findUnique
 */
export type InvoiceLineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which InvoiceLine to fetch.
     */
    where: Prisma.InvoiceLineWhereUniqueInput;
};
/**
 * InvoiceLine findUniqueOrThrow
 */
export type InvoiceLineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which InvoiceLine to fetch.
     */
    where: Prisma.InvoiceLineWhereUniqueInput;
};
/**
 * InvoiceLine findFirst
 */
export type InvoiceLineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which InvoiceLine to fetch.
     */
    where?: Prisma.InvoiceLineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InvoiceLines to fetch.
     */
    orderBy?: Prisma.InvoiceLineOrderByWithRelationInput | Prisma.InvoiceLineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for InvoiceLines.
     */
    cursor?: Prisma.InvoiceLineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InvoiceLines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InvoiceLines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of InvoiceLines.
     */
    distinct?: Prisma.InvoiceLineScalarFieldEnum | Prisma.InvoiceLineScalarFieldEnum[];
};
/**
 * InvoiceLine findFirstOrThrow
 */
export type InvoiceLineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which InvoiceLine to fetch.
     */
    where?: Prisma.InvoiceLineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InvoiceLines to fetch.
     */
    orderBy?: Prisma.InvoiceLineOrderByWithRelationInput | Prisma.InvoiceLineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for InvoiceLines.
     */
    cursor?: Prisma.InvoiceLineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InvoiceLines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InvoiceLines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of InvoiceLines.
     */
    distinct?: Prisma.InvoiceLineScalarFieldEnum | Prisma.InvoiceLineScalarFieldEnum[];
};
/**
 * InvoiceLine findMany
 */
export type InvoiceLineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which InvoiceLines to fetch.
     */
    where?: Prisma.InvoiceLineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InvoiceLines to fetch.
     */
    orderBy?: Prisma.InvoiceLineOrderByWithRelationInput | Prisma.InvoiceLineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing InvoiceLines.
     */
    cursor?: Prisma.InvoiceLineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InvoiceLines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InvoiceLines.
     */
    skip?: number;
    distinct?: Prisma.InvoiceLineScalarFieldEnum | Prisma.InvoiceLineScalarFieldEnum[];
};
/**
 * InvoiceLine create
 */
export type InvoiceLineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a InvoiceLine.
     */
    data: Prisma.XOR<Prisma.InvoiceLineCreateInput, Prisma.InvoiceLineUncheckedCreateInput>;
};
/**
 * InvoiceLine createMany
 */
export type InvoiceLineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceLines.
     */
    data: Prisma.InvoiceLineCreateManyInput | Prisma.InvoiceLineCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * InvoiceLine update
 */
export type InvoiceLineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a InvoiceLine.
     */
    data: Prisma.XOR<Prisma.InvoiceLineUpdateInput, Prisma.InvoiceLineUncheckedUpdateInput>;
    /**
     * Choose, which InvoiceLine to update.
     */
    where: Prisma.InvoiceLineWhereUniqueInput;
};
/**
 * InvoiceLine updateMany
 */
export type InvoiceLineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceLines.
     */
    data: Prisma.XOR<Prisma.InvoiceLineUpdateManyMutationInput, Prisma.InvoiceLineUncheckedUpdateManyInput>;
    /**
     * Filter which InvoiceLines to update
     */
    where?: Prisma.InvoiceLineWhereInput;
    /**
     * Limit how many InvoiceLines to update.
     */
    limit?: number;
};
/**
 * InvoiceLine upsert
 */
export type InvoiceLineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the InvoiceLine to update in case it exists.
     */
    where: Prisma.InvoiceLineWhereUniqueInput;
    /**
     * In case the InvoiceLine found by the `where` argument doesn't exist, create a new InvoiceLine with this data.
     */
    create: Prisma.XOR<Prisma.InvoiceLineCreateInput, Prisma.InvoiceLineUncheckedCreateInput>;
    /**
     * In case the InvoiceLine was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.InvoiceLineUpdateInput, Prisma.InvoiceLineUncheckedUpdateInput>;
};
/**
 * InvoiceLine delete
 */
export type InvoiceLineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which InvoiceLine to delete.
     */
    where: Prisma.InvoiceLineWhereUniqueInput;
};
/**
 * InvoiceLine deleteMany
 */
export type InvoiceLineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceLines to delete
     */
    where?: Prisma.InvoiceLineWhereInput;
    /**
     * Limit how many InvoiceLines to delete.
     */
    limit?: number;
};
/**
 * InvoiceLine.product
 */
export type InvoiceLine$productArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: Prisma.ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
};
/**
 * InvoiceLine.service
 */
export type InvoiceLine$serviceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ServiceWhereInput;
};
/**
 * InvoiceLine without action
 */
export type InvoiceLineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=InvoiceLine.d.ts.map
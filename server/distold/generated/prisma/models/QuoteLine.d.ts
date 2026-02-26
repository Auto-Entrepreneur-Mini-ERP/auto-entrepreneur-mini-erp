import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model QuoteLine
 *
 */
export type QuoteLineModel = runtime.Types.Result.DefaultSelection<Prisma.$QuoteLinePayload>;
export type AggregateQuoteLine = {
    _count: QuoteLineCountAggregateOutputType | null;
    _avg: QuoteLineAvgAggregateOutputType | null;
    _sum: QuoteLineSumAggregateOutputType | null;
    _min: QuoteLineMinAggregateOutputType | null;
    _max: QuoteLineMaxAggregateOutputType | null;
};
export type QuoteLineAvgAggregateOutputType = {
    quantity: runtime.Decimal | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
    order: number | null;
};
export type QuoteLineSumAggregateOutputType = {
    quantity: runtime.Decimal | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
    order: number | null;
};
export type QuoteLineMinAggregateOutputType = {
    id: string | null;
    lineType: $Enums.LineType | null;
    description: string | null;
    quantity: runtime.Decimal | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
    order: number | null;
    quoteId: string | null;
    productId: string | null;
    serviceId: string | null;
};
export type QuoteLineMaxAggregateOutputType = {
    id: string | null;
    lineType: $Enums.LineType | null;
    description: string | null;
    quantity: runtime.Decimal | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
    order: number | null;
    quoteId: string | null;
    productId: string | null;
    serviceId: string | null;
};
export type QuoteLineCountAggregateOutputType = {
    id: number;
    lineType: number;
    description: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    order: number;
    quoteId: number;
    productId: number;
    serviceId: number;
    _all: number;
};
export type QuoteLineAvgAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    order?: true;
};
export type QuoteLineSumAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    order?: true;
};
export type QuoteLineMinAggregateInputType = {
    id?: true;
    lineType?: true;
    description?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    order?: true;
    quoteId?: true;
    productId?: true;
    serviceId?: true;
};
export type QuoteLineMaxAggregateInputType = {
    id?: true;
    lineType?: true;
    description?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    order?: true;
    quoteId?: true;
    productId?: true;
    serviceId?: true;
};
export type QuoteLineCountAggregateInputType = {
    id?: true;
    lineType?: true;
    description?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    order?: true;
    quoteId?: true;
    productId?: true;
    serviceId?: true;
    _all?: true;
};
export type QuoteLineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteLine to aggregate.
     */
    where?: Prisma.QuoteLineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QuoteLines to fetch.
     */
    orderBy?: Prisma.QuoteLineOrderByWithRelationInput | Prisma.QuoteLineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.QuoteLineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QuoteLines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QuoteLines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned QuoteLines
    **/
    _count?: true | QuoteLineCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: QuoteLineAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: QuoteLineSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: QuoteLineMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: QuoteLineMaxAggregateInputType;
};
export type GetQuoteLineAggregateType<T extends QuoteLineAggregateArgs> = {
    [P in keyof T & keyof AggregateQuoteLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuoteLine[P]> : Prisma.GetScalarType<T[P], AggregateQuoteLine[P]>;
};
export type QuoteLineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuoteLineWhereInput;
    orderBy?: Prisma.QuoteLineOrderByWithAggregationInput | Prisma.QuoteLineOrderByWithAggregationInput[];
    by: Prisma.QuoteLineScalarFieldEnum[] | Prisma.QuoteLineScalarFieldEnum;
    having?: Prisma.QuoteLineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuoteLineCountAggregateInputType | true;
    _avg?: QuoteLineAvgAggregateInputType;
    _sum?: QuoteLineSumAggregateInputType;
    _min?: QuoteLineMinAggregateInputType;
    _max?: QuoteLineMaxAggregateInputType;
};
export type QuoteLineGroupByOutputType = {
    id: string;
    lineType: $Enums.LineType;
    description: string;
    quantity: runtime.Decimal;
    unitPrice: runtime.Decimal;
    totalPrice: runtime.Decimal;
    order: number;
    quoteId: string;
    productId: string | null;
    serviceId: string | null;
    _count: QuoteLineCountAggregateOutputType | null;
    _avg: QuoteLineAvgAggregateOutputType | null;
    _sum: QuoteLineSumAggregateOutputType | null;
    _min: QuoteLineMinAggregateOutputType | null;
    _max: QuoteLineMaxAggregateOutputType | null;
};
type GetQuoteLineGroupByPayload<T extends QuoteLineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuoteLineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuoteLineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuoteLineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuoteLineGroupByOutputType[P]>;
}>>;
export type QuoteLineWhereInput = {
    AND?: Prisma.QuoteLineWhereInput | Prisma.QuoteLineWhereInput[];
    OR?: Prisma.QuoteLineWhereInput[];
    NOT?: Prisma.QuoteLineWhereInput | Prisma.QuoteLineWhereInput[];
    id?: Prisma.StringFilter<"QuoteLine"> | string;
    lineType?: Prisma.EnumLineTypeFilter<"QuoteLine"> | $Enums.LineType;
    description?: Prisma.StringFilter<"QuoteLine"> | string;
    quantity?: Prisma.DecimalFilter<"QuoteLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFilter<"QuoteLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"QuoteLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFilter<"QuoteLine"> | number;
    quoteId?: Prisma.StringFilter<"QuoteLine"> | string;
    productId?: Prisma.StringNullableFilter<"QuoteLine"> | string | null;
    serviceId?: Prisma.StringNullableFilter<"QuoteLine"> | string | null;
    quote?: Prisma.XOR<Prisma.QuoteScalarRelationFilter, Prisma.QuoteWhereInput>;
    product?: Prisma.XOR<Prisma.ProductNullableScalarRelationFilter, Prisma.ProductWhereInput> | null;
    service?: Prisma.XOR<Prisma.ServiceNullableScalarRelationFilter, Prisma.ServiceWhereInput> | null;
};
export type QuoteLineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lineType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    quoteId?: Prisma.SortOrder;
    productId?: Prisma.SortOrderInput | Prisma.SortOrder;
    serviceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    quote?: Prisma.QuoteOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
    service?: Prisma.ServiceOrderByWithRelationInput;
    _relevance?: Prisma.QuoteLineOrderByRelevanceInput;
};
export type QuoteLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.QuoteLineWhereInput | Prisma.QuoteLineWhereInput[];
    OR?: Prisma.QuoteLineWhereInput[];
    NOT?: Prisma.QuoteLineWhereInput | Prisma.QuoteLineWhereInput[];
    lineType?: Prisma.EnumLineTypeFilter<"QuoteLine"> | $Enums.LineType;
    description?: Prisma.StringFilter<"QuoteLine"> | string;
    quantity?: Prisma.DecimalFilter<"QuoteLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFilter<"QuoteLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"QuoteLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFilter<"QuoteLine"> | number;
    quoteId?: Prisma.StringFilter<"QuoteLine"> | string;
    productId?: Prisma.StringNullableFilter<"QuoteLine"> | string | null;
    serviceId?: Prisma.StringNullableFilter<"QuoteLine"> | string | null;
    quote?: Prisma.XOR<Prisma.QuoteScalarRelationFilter, Prisma.QuoteWhereInput>;
    product?: Prisma.XOR<Prisma.ProductNullableScalarRelationFilter, Prisma.ProductWhereInput> | null;
    service?: Prisma.XOR<Prisma.ServiceNullableScalarRelationFilter, Prisma.ServiceWhereInput> | null;
}, "id">;
export type QuoteLineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lineType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    quoteId?: Prisma.SortOrder;
    productId?: Prisma.SortOrderInput | Prisma.SortOrder;
    serviceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.QuoteLineCountOrderByAggregateInput;
    _avg?: Prisma.QuoteLineAvgOrderByAggregateInput;
    _max?: Prisma.QuoteLineMaxOrderByAggregateInput;
    _min?: Prisma.QuoteLineMinOrderByAggregateInput;
    _sum?: Prisma.QuoteLineSumOrderByAggregateInput;
};
export type QuoteLineScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuoteLineScalarWhereWithAggregatesInput | Prisma.QuoteLineScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuoteLineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuoteLineScalarWhereWithAggregatesInput | Prisma.QuoteLineScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"QuoteLine"> | string;
    lineType?: Prisma.EnumLineTypeWithAggregatesFilter<"QuoteLine"> | $Enums.LineType;
    description?: Prisma.StringWithAggregatesFilter<"QuoteLine"> | string;
    quantity?: Prisma.DecimalWithAggregatesFilter<"QuoteLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalWithAggregatesFilter<"QuoteLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalWithAggregatesFilter<"QuoteLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntWithAggregatesFilter<"QuoteLine"> | number;
    quoteId?: Prisma.StringWithAggregatesFilter<"QuoteLine"> | string;
    productId?: Prisma.StringNullableWithAggregatesFilter<"QuoteLine"> | string | null;
    serviceId?: Prisma.StringNullableWithAggregatesFilter<"QuoteLine"> | string | null;
};
export type QuoteLineCreateInput = {
    id?: string;
    lineType: $Enums.LineType;
    description: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    quote: Prisma.QuoteCreateNestedOneWithoutQuoteLinesInput;
    product?: Prisma.ProductCreateNestedOneWithoutQuoteLinesInput;
    service?: Prisma.ServiceCreateNestedOneWithoutQuoteLinesInput;
};
export type QuoteLineUncheckedCreateInput = {
    id?: string;
    lineType: $Enums.LineType;
    description: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    quoteId: string;
    productId?: string | null;
    serviceId?: string | null;
};
export type QuoteLineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    quote?: Prisma.QuoteUpdateOneRequiredWithoutQuoteLinesNestedInput;
    product?: Prisma.ProductUpdateOneWithoutQuoteLinesNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutQuoteLinesNestedInput;
};
export type QuoteLineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    quoteId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type QuoteLineCreateManyInput = {
    id?: string;
    lineType: $Enums.LineType;
    description: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    quoteId: string;
    productId?: string | null;
    serviceId?: string | null;
};
export type QuoteLineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type QuoteLineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    quoteId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type QuoteLineListRelationFilter = {
    every?: Prisma.QuoteLineWhereInput;
    some?: Prisma.QuoteLineWhereInput;
    none?: Prisma.QuoteLineWhereInput;
};
export type QuoteLineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QuoteLineOrderByRelevanceInput = {
    fields: Prisma.QuoteLineOrderByRelevanceFieldEnum | Prisma.QuoteLineOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type QuoteLineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lineType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    quoteId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
};
export type QuoteLineAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
};
export type QuoteLineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lineType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    quoteId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
};
export type QuoteLineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lineType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    quoteId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
};
export type QuoteLineSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
};
export type QuoteLineCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.QuoteLineCreateWithoutProductInput, Prisma.QuoteLineUncheckedCreateWithoutProductInput> | Prisma.QuoteLineCreateWithoutProductInput[] | Prisma.QuoteLineUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.QuoteLineCreateOrConnectWithoutProductInput | Prisma.QuoteLineCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.QuoteLineCreateManyProductInputEnvelope;
    connect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
};
export type QuoteLineUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.QuoteLineCreateWithoutProductInput, Prisma.QuoteLineUncheckedCreateWithoutProductInput> | Prisma.QuoteLineCreateWithoutProductInput[] | Prisma.QuoteLineUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.QuoteLineCreateOrConnectWithoutProductInput | Prisma.QuoteLineCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.QuoteLineCreateManyProductInputEnvelope;
    connect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
};
export type QuoteLineUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.QuoteLineCreateWithoutProductInput, Prisma.QuoteLineUncheckedCreateWithoutProductInput> | Prisma.QuoteLineCreateWithoutProductInput[] | Prisma.QuoteLineUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.QuoteLineCreateOrConnectWithoutProductInput | Prisma.QuoteLineCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.QuoteLineUpsertWithWhereUniqueWithoutProductInput | Prisma.QuoteLineUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.QuoteLineCreateManyProductInputEnvelope;
    set?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    disconnect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    delete?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    connect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    update?: Prisma.QuoteLineUpdateWithWhereUniqueWithoutProductInput | Prisma.QuoteLineUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.QuoteLineUpdateManyWithWhereWithoutProductInput | Prisma.QuoteLineUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.QuoteLineScalarWhereInput | Prisma.QuoteLineScalarWhereInput[];
};
export type QuoteLineUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.QuoteLineCreateWithoutProductInput, Prisma.QuoteLineUncheckedCreateWithoutProductInput> | Prisma.QuoteLineCreateWithoutProductInput[] | Prisma.QuoteLineUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.QuoteLineCreateOrConnectWithoutProductInput | Prisma.QuoteLineCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.QuoteLineUpsertWithWhereUniqueWithoutProductInput | Prisma.QuoteLineUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.QuoteLineCreateManyProductInputEnvelope;
    set?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    disconnect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    delete?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    connect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    update?: Prisma.QuoteLineUpdateWithWhereUniqueWithoutProductInput | Prisma.QuoteLineUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.QuoteLineUpdateManyWithWhereWithoutProductInput | Prisma.QuoteLineUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.QuoteLineScalarWhereInput | Prisma.QuoteLineScalarWhereInput[];
};
export type QuoteLineCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.QuoteLineCreateWithoutServiceInput, Prisma.QuoteLineUncheckedCreateWithoutServiceInput> | Prisma.QuoteLineCreateWithoutServiceInput[] | Prisma.QuoteLineUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.QuoteLineCreateOrConnectWithoutServiceInput | Prisma.QuoteLineCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.QuoteLineCreateManyServiceInputEnvelope;
    connect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
};
export type QuoteLineUncheckedCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.QuoteLineCreateWithoutServiceInput, Prisma.QuoteLineUncheckedCreateWithoutServiceInput> | Prisma.QuoteLineCreateWithoutServiceInput[] | Prisma.QuoteLineUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.QuoteLineCreateOrConnectWithoutServiceInput | Prisma.QuoteLineCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.QuoteLineCreateManyServiceInputEnvelope;
    connect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
};
export type QuoteLineUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.QuoteLineCreateWithoutServiceInput, Prisma.QuoteLineUncheckedCreateWithoutServiceInput> | Prisma.QuoteLineCreateWithoutServiceInput[] | Prisma.QuoteLineUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.QuoteLineCreateOrConnectWithoutServiceInput | Prisma.QuoteLineCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.QuoteLineUpsertWithWhereUniqueWithoutServiceInput | Prisma.QuoteLineUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.QuoteLineCreateManyServiceInputEnvelope;
    set?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    disconnect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    delete?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    connect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    update?: Prisma.QuoteLineUpdateWithWhereUniqueWithoutServiceInput | Prisma.QuoteLineUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.QuoteLineUpdateManyWithWhereWithoutServiceInput | Prisma.QuoteLineUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.QuoteLineScalarWhereInput | Prisma.QuoteLineScalarWhereInput[];
};
export type QuoteLineUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.QuoteLineCreateWithoutServiceInput, Prisma.QuoteLineUncheckedCreateWithoutServiceInput> | Prisma.QuoteLineCreateWithoutServiceInput[] | Prisma.QuoteLineUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.QuoteLineCreateOrConnectWithoutServiceInput | Prisma.QuoteLineCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.QuoteLineUpsertWithWhereUniqueWithoutServiceInput | Prisma.QuoteLineUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.QuoteLineCreateManyServiceInputEnvelope;
    set?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    disconnect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    delete?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    connect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    update?: Prisma.QuoteLineUpdateWithWhereUniqueWithoutServiceInput | Prisma.QuoteLineUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.QuoteLineUpdateManyWithWhereWithoutServiceInput | Prisma.QuoteLineUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.QuoteLineScalarWhereInput | Prisma.QuoteLineScalarWhereInput[];
};
export type QuoteLineCreateNestedManyWithoutQuoteInput = {
    create?: Prisma.XOR<Prisma.QuoteLineCreateWithoutQuoteInput, Prisma.QuoteLineUncheckedCreateWithoutQuoteInput> | Prisma.QuoteLineCreateWithoutQuoteInput[] | Prisma.QuoteLineUncheckedCreateWithoutQuoteInput[];
    connectOrCreate?: Prisma.QuoteLineCreateOrConnectWithoutQuoteInput | Prisma.QuoteLineCreateOrConnectWithoutQuoteInput[];
    createMany?: Prisma.QuoteLineCreateManyQuoteInputEnvelope;
    connect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
};
export type QuoteLineUncheckedCreateNestedManyWithoutQuoteInput = {
    create?: Prisma.XOR<Prisma.QuoteLineCreateWithoutQuoteInput, Prisma.QuoteLineUncheckedCreateWithoutQuoteInput> | Prisma.QuoteLineCreateWithoutQuoteInput[] | Prisma.QuoteLineUncheckedCreateWithoutQuoteInput[];
    connectOrCreate?: Prisma.QuoteLineCreateOrConnectWithoutQuoteInput | Prisma.QuoteLineCreateOrConnectWithoutQuoteInput[];
    createMany?: Prisma.QuoteLineCreateManyQuoteInputEnvelope;
    connect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
};
export type QuoteLineUpdateManyWithoutQuoteNestedInput = {
    create?: Prisma.XOR<Prisma.QuoteLineCreateWithoutQuoteInput, Prisma.QuoteLineUncheckedCreateWithoutQuoteInput> | Prisma.QuoteLineCreateWithoutQuoteInput[] | Prisma.QuoteLineUncheckedCreateWithoutQuoteInput[];
    connectOrCreate?: Prisma.QuoteLineCreateOrConnectWithoutQuoteInput | Prisma.QuoteLineCreateOrConnectWithoutQuoteInput[];
    upsert?: Prisma.QuoteLineUpsertWithWhereUniqueWithoutQuoteInput | Prisma.QuoteLineUpsertWithWhereUniqueWithoutQuoteInput[];
    createMany?: Prisma.QuoteLineCreateManyQuoteInputEnvelope;
    set?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    disconnect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    delete?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    connect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    update?: Prisma.QuoteLineUpdateWithWhereUniqueWithoutQuoteInput | Prisma.QuoteLineUpdateWithWhereUniqueWithoutQuoteInput[];
    updateMany?: Prisma.QuoteLineUpdateManyWithWhereWithoutQuoteInput | Prisma.QuoteLineUpdateManyWithWhereWithoutQuoteInput[];
    deleteMany?: Prisma.QuoteLineScalarWhereInput | Prisma.QuoteLineScalarWhereInput[];
};
export type QuoteLineUncheckedUpdateManyWithoutQuoteNestedInput = {
    create?: Prisma.XOR<Prisma.QuoteLineCreateWithoutQuoteInput, Prisma.QuoteLineUncheckedCreateWithoutQuoteInput> | Prisma.QuoteLineCreateWithoutQuoteInput[] | Prisma.QuoteLineUncheckedCreateWithoutQuoteInput[];
    connectOrCreate?: Prisma.QuoteLineCreateOrConnectWithoutQuoteInput | Prisma.QuoteLineCreateOrConnectWithoutQuoteInput[];
    upsert?: Prisma.QuoteLineUpsertWithWhereUniqueWithoutQuoteInput | Prisma.QuoteLineUpsertWithWhereUniqueWithoutQuoteInput[];
    createMany?: Prisma.QuoteLineCreateManyQuoteInputEnvelope;
    set?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    disconnect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    delete?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    connect?: Prisma.QuoteLineWhereUniqueInput | Prisma.QuoteLineWhereUniqueInput[];
    update?: Prisma.QuoteLineUpdateWithWhereUniqueWithoutQuoteInput | Prisma.QuoteLineUpdateWithWhereUniqueWithoutQuoteInput[];
    updateMany?: Prisma.QuoteLineUpdateManyWithWhereWithoutQuoteInput | Prisma.QuoteLineUpdateManyWithWhereWithoutQuoteInput[];
    deleteMany?: Prisma.QuoteLineScalarWhereInput | Prisma.QuoteLineScalarWhereInput[];
};
export type QuoteLineCreateWithoutProductInput = {
    id?: string;
    lineType: $Enums.LineType;
    description: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    quote: Prisma.QuoteCreateNestedOneWithoutQuoteLinesInput;
    service?: Prisma.ServiceCreateNestedOneWithoutQuoteLinesInput;
};
export type QuoteLineUncheckedCreateWithoutProductInput = {
    id?: string;
    lineType: $Enums.LineType;
    description: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    quoteId: string;
    serviceId?: string | null;
};
export type QuoteLineCreateOrConnectWithoutProductInput = {
    where: Prisma.QuoteLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuoteLineCreateWithoutProductInput, Prisma.QuoteLineUncheckedCreateWithoutProductInput>;
};
export type QuoteLineCreateManyProductInputEnvelope = {
    data: Prisma.QuoteLineCreateManyProductInput | Prisma.QuoteLineCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type QuoteLineUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.QuoteLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuoteLineUpdateWithoutProductInput, Prisma.QuoteLineUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.QuoteLineCreateWithoutProductInput, Prisma.QuoteLineUncheckedCreateWithoutProductInput>;
};
export type QuoteLineUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.QuoteLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuoteLineUpdateWithoutProductInput, Prisma.QuoteLineUncheckedUpdateWithoutProductInput>;
};
export type QuoteLineUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.QuoteLineScalarWhereInput;
    data: Prisma.XOR<Prisma.QuoteLineUpdateManyMutationInput, Prisma.QuoteLineUncheckedUpdateManyWithoutProductInput>;
};
export type QuoteLineScalarWhereInput = {
    AND?: Prisma.QuoteLineScalarWhereInput | Prisma.QuoteLineScalarWhereInput[];
    OR?: Prisma.QuoteLineScalarWhereInput[];
    NOT?: Prisma.QuoteLineScalarWhereInput | Prisma.QuoteLineScalarWhereInput[];
    id?: Prisma.StringFilter<"QuoteLine"> | string;
    lineType?: Prisma.EnumLineTypeFilter<"QuoteLine"> | $Enums.LineType;
    description?: Prisma.StringFilter<"QuoteLine"> | string;
    quantity?: Prisma.DecimalFilter<"QuoteLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFilter<"QuoteLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"QuoteLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFilter<"QuoteLine"> | number;
    quoteId?: Prisma.StringFilter<"QuoteLine"> | string;
    productId?: Prisma.StringNullableFilter<"QuoteLine"> | string | null;
    serviceId?: Prisma.StringNullableFilter<"QuoteLine"> | string | null;
};
export type QuoteLineCreateWithoutServiceInput = {
    id?: string;
    lineType: $Enums.LineType;
    description: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    quote: Prisma.QuoteCreateNestedOneWithoutQuoteLinesInput;
    product?: Prisma.ProductCreateNestedOneWithoutQuoteLinesInput;
};
export type QuoteLineUncheckedCreateWithoutServiceInput = {
    id?: string;
    lineType: $Enums.LineType;
    description: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    quoteId: string;
    productId?: string | null;
};
export type QuoteLineCreateOrConnectWithoutServiceInput = {
    where: Prisma.QuoteLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuoteLineCreateWithoutServiceInput, Prisma.QuoteLineUncheckedCreateWithoutServiceInput>;
};
export type QuoteLineCreateManyServiceInputEnvelope = {
    data: Prisma.QuoteLineCreateManyServiceInput | Prisma.QuoteLineCreateManyServiceInput[];
    skipDuplicates?: boolean;
};
export type QuoteLineUpsertWithWhereUniqueWithoutServiceInput = {
    where: Prisma.QuoteLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuoteLineUpdateWithoutServiceInput, Prisma.QuoteLineUncheckedUpdateWithoutServiceInput>;
    create: Prisma.XOR<Prisma.QuoteLineCreateWithoutServiceInput, Prisma.QuoteLineUncheckedCreateWithoutServiceInput>;
};
export type QuoteLineUpdateWithWhereUniqueWithoutServiceInput = {
    where: Prisma.QuoteLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuoteLineUpdateWithoutServiceInput, Prisma.QuoteLineUncheckedUpdateWithoutServiceInput>;
};
export type QuoteLineUpdateManyWithWhereWithoutServiceInput = {
    where: Prisma.QuoteLineScalarWhereInput;
    data: Prisma.XOR<Prisma.QuoteLineUpdateManyMutationInput, Prisma.QuoteLineUncheckedUpdateManyWithoutServiceInput>;
};
export type QuoteLineCreateWithoutQuoteInput = {
    id?: string;
    lineType: $Enums.LineType;
    description: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    product?: Prisma.ProductCreateNestedOneWithoutQuoteLinesInput;
    service?: Prisma.ServiceCreateNestedOneWithoutQuoteLinesInput;
};
export type QuoteLineUncheckedCreateWithoutQuoteInput = {
    id?: string;
    lineType: $Enums.LineType;
    description: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    productId?: string | null;
    serviceId?: string | null;
};
export type QuoteLineCreateOrConnectWithoutQuoteInput = {
    where: Prisma.QuoteLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuoteLineCreateWithoutQuoteInput, Prisma.QuoteLineUncheckedCreateWithoutQuoteInput>;
};
export type QuoteLineCreateManyQuoteInputEnvelope = {
    data: Prisma.QuoteLineCreateManyQuoteInput | Prisma.QuoteLineCreateManyQuoteInput[];
    skipDuplicates?: boolean;
};
export type QuoteLineUpsertWithWhereUniqueWithoutQuoteInput = {
    where: Prisma.QuoteLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuoteLineUpdateWithoutQuoteInput, Prisma.QuoteLineUncheckedUpdateWithoutQuoteInput>;
    create: Prisma.XOR<Prisma.QuoteLineCreateWithoutQuoteInput, Prisma.QuoteLineUncheckedCreateWithoutQuoteInput>;
};
export type QuoteLineUpdateWithWhereUniqueWithoutQuoteInput = {
    where: Prisma.QuoteLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuoteLineUpdateWithoutQuoteInput, Prisma.QuoteLineUncheckedUpdateWithoutQuoteInput>;
};
export type QuoteLineUpdateManyWithWhereWithoutQuoteInput = {
    where: Prisma.QuoteLineScalarWhereInput;
    data: Prisma.XOR<Prisma.QuoteLineUpdateManyMutationInput, Prisma.QuoteLineUncheckedUpdateManyWithoutQuoteInput>;
};
export type QuoteLineCreateManyProductInput = {
    id?: string;
    lineType: $Enums.LineType;
    description: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    quoteId: string;
    serviceId?: string | null;
};
export type QuoteLineUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    quote?: Prisma.QuoteUpdateOneRequiredWithoutQuoteLinesNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutQuoteLinesNestedInput;
};
export type QuoteLineUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    quoteId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type QuoteLineUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    quoteId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type QuoteLineCreateManyServiceInput = {
    id?: string;
    lineType: $Enums.LineType;
    description: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    quoteId: string;
    productId?: string | null;
};
export type QuoteLineUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    quote?: Prisma.QuoteUpdateOneRequiredWithoutQuoteLinesNestedInput;
    product?: Prisma.ProductUpdateOneWithoutQuoteLinesNestedInput;
};
export type QuoteLineUncheckedUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    quoteId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type QuoteLineUncheckedUpdateManyWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    quoteId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type QuoteLineCreateManyQuoteInput = {
    id?: string;
    lineType: $Enums.LineType;
    description: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: number;
    productId?: string | null;
    serviceId?: string | null;
};
export type QuoteLineUpdateWithoutQuoteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    product?: Prisma.ProductUpdateOneWithoutQuoteLinesNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutQuoteLinesNestedInput;
};
export type QuoteLineUncheckedUpdateWithoutQuoteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type QuoteLineUncheckedUpdateManyWithoutQuoteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineType?: Prisma.EnumLineTypeFieldUpdateOperationsInput | $Enums.LineType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type QuoteLineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lineType?: boolean;
    description?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    order?: boolean;
    quoteId?: boolean;
    productId?: boolean;
    serviceId?: boolean;
    quote?: boolean | Prisma.QuoteDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.QuoteLine$productArgs<ExtArgs>;
    service?: boolean | Prisma.QuoteLine$serviceArgs<ExtArgs>;
}, ExtArgs["result"]["quoteLine"]>;
export type QuoteLineSelectScalar = {
    id?: boolean;
    lineType?: boolean;
    description?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    order?: boolean;
    quoteId?: boolean;
    productId?: boolean;
    serviceId?: boolean;
};
export type QuoteLineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lineType" | "description" | "quantity" | "unitPrice" | "totalPrice" | "order" | "quoteId" | "productId" | "serviceId", ExtArgs["result"]["quoteLine"]>;
export type QuoteLineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quote?: boolean | Prisma.QuoteDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.QuoteLine$productArgs<ExtArgs>;
    service?: boolean | Prisma.QuoteLine$serviceArgs<ExtArgs>;
};
export type $QuoteLinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "QuoteLine";
    objects: {
        quote: Prisma.$QuotePayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs> | null;
        service: Prisma.$ServicePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        lineType: $Enums.LineType;
        description: string;
        quantity: runtime.Decimal;
        unitPrice: runtime.Decimal;
        totalPrice: runtime.Decimal;
        order: number;
        quoteId: string;
        productId: string | null;
        serviceId: string | null;
    }, ExtArgs["result"]["quoteLine"]>;
    composites: {};
};
export type QuoteLineGetPayload<S extends boolean | null | undefined | QuoteLineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuoteLinePayload, S>;
export type QuoteLineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuoteLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuoteLineCountAggregateInputType | true;
};
export interface QuoteLineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['QuoteLine'];
        meta: {
            name: 'QuoteLine';
        };
    };
    /**
     * Find zero or one QuoteLine that matches the filter.
     * @param {QuoteLineFindUniqueArgs} args - Arguments to find a QuoteLine
     * @example
     * // Get one QuoteLine
     * const quoteLine = await prisma.quoteLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuoteLineFindUniqueArgs>(args: Prisma.SelectSubset<T, QuoteLineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuoteLineClient<runtime.Types.Result.GetResult<Prisma.$QuoteLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one QuoteLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuoteLineFindUniqueOrThrowArgs} args - Arguments to find a QuoteLine
     * @example
     * // Get one QuoteLine
     * const quoteLine = await prisma.quoteLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuoteLineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuoteLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuoteLineClient<runtime.Types.Result.GetResult<Prisma.$QuoteLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first QuoteLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteLineFindFirstArgs} args - Arguments to find a QuoteLine
     * @example
     * // Get one QuoteLine
     * const quoteLine = await prisma.quoteLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuoteLineFindFirstArgs>(args?: Prisma.SelectSubset<T, QuoteLineFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuoteLineClient<runtime.Types.Result.GetResult<Prisma.$QuoteLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first QuoteLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteLineFindFirstOrThrowArgs} args - Arguments to find a QuoteLine
     * @example
     * // Get one QuoteLine
     * const quoteLine = await prisma.quoteLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuoteLineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuoteLineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuoteLineClient<runtime.Types.Result.GetResult<Prisma.$QuoteLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more QuoteLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuoteLines
     * const quoteLines = await prisma.quoteLine.findMany()
     *
     * // Get first 10 QuoteLines
     * const quoteLines = await prisma.quoteLine.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const quoteLineWithIdOnly = await prisma.quoteLine.findMany({ select: { id: true } })
     *
     */
    findMany<T extends QuoteLineFindManyArgs>(args?: Prisma.SelectSubset<T, QuoteLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuoteLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a QuoteLine.
     * @param {QuoteLineCreateArgs} args - Arguments to create a QuoteLine.
     * @example
     * // Create one QuoteLine
     * const QuoteLine = await prisma.quoteLine.create({
     *   data: {
     *     // ... data to create a QuoteLine
     *   }
     * })
     *
     */
    create<T extends QuoteLineCreateArgs>(args: Prisma.SelectSubset<T, QuoteLineCreateArgs<ExtArgs>>): Prisma.Prisma__QuoteLineClient<runtime.Types.Result.GetResult<Prisma.$QuoteLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many QuoteLines.
     * @param {QuoteLineCreateManyArgs} args - Arguments to create many QuoteLines.
     * @example
     * // Create many QuoteLines
     * const quoteLine = await prisma.quoteLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends QuoteLineCreateManyArgs>(args?: Prisma.SelectSubset<T, QuoteLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a QuoteLine.
     * @param {QuoteLineDeleteArgs} args - Arguments to delete one QuoteLine.
     * @example
     * // Delete one QuoteLine
     * const QuoteLine = await prisma.quoteLine.delete({
     *   where: {
     *     // ... filter to delete one QuoteLine
     *   }
     * })
     *
     */
    delete<T extends QuoteLineDeleteArgs>(args: Prisma.SelectSubset<T, QuoteLineDeleteArgs<ExtArgs>>): Prisma.Prisma__QuoteLineClient<runtime.Types.Result.GetResult<Prisma.$QuoteLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one QuoteLine.
     * @param {QuoteLineUpdateArgs} args - Arguments to update one QuoteLine.
     * @example
     * // Update one QuoteLine
     * const quoteLine = await prisma.quoteLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends QuoteLineUpdateArgs>(args: Prisma.SelectSubset<T, QuoteLineUpdateArgs<ExtArgs>>): Prisma.Prisma__QuoteLineClient<runtime.Types.Result.GetResult<Prisma.$QuoteLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more QuoteLines.
     * @param {QuoteLineDeleteManyArgs} args - Arguments to filter QuoteLines to delete.
     * @example
     * // Delete a few QuoteLines
     * const { count } = await prisma.quoteLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends QuoteLineDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuoteLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more QuoteLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuoteLines
     * const quoteLine = await prisma.quoteLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends QuoteLineUpdateManyArgs>(args: Prisma.SelectSubset<T, QuoteLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one QuoteLine.
     * @param {QuoteLineUpsertArgs} args - Arguments to update or create a QuoteLine.
     * @example
     * // Update or create a QuoteLine
     * const quoteLine = await prisma.quoteLine.upsert({
     *   create: {
     *     // ... data to create a QuoteLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuoteLine we want to update
     *   }
     * })
     */
    upsert<T extends QuoteLineUpsertArgs>(args: Prisma.SelectSubset<T, QuoteLineUpsertArgs<ExtArgs>>): Prisma.Prisma__QuoteLineClient<runtime.Types.Result.GetResult<Prisma.$QuoteLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of QuoteLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteLineCountArgs} args - Arguments to filter QuoteLines to count.
     * @example
     * // Count the number of QuoteLines
     * const count = await prisma.quoteLine.count({
     *   where: {
     *     // ... the filter for the QuoteLines we want to count
     *   }
     * })
    **/
    count<T extends QuoteLineCountArgs>(args?: Prisma.Subset<T, QuoteLineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuoteLineCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a QuoteLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuoteLineAggregateArgs>(args: Prisma.Subset<T, QuoteLineAggregateArgs>): Prisma.PrismaPromise<GetQuoteLineAggregateType<T>>;
    /**
     * Group by QuoteLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteLineGroupByArgs} args - Group by arguments.
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
    groupBy<T extends QuoteLineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuoteLineGroupByArgs['orderBy'];
    } : {
        orderBy?: QuoteLineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuoteLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the QuoteLine model
     */
    readonly fields: QuoteLineFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for QuoteLine.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__QuoteLineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    quote<T extends Prisma.QuoteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuoteDefaultArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.QuoteLine$productArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuoteLine$productArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    service<T extends Prisma.QuoteLine$serviceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuoteLine$serviceArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the QuoteLine model
 */
export interface QuoteLineFieldRefs {
    readonly id: Prisma.FieldRef<"QuoteLine", 'String'>;
    readonly lineType: Prisma.FieldRef<"QuoteLine", 'LineType'>;
    readonly description: Prisma.FieldRef<"QuoteLine", 'String'>;
    readonly quantity: Prisma.FieldRef<"QuoteLine", 'Decimal'>;
    readonly unitPrice: Prisma.FieldRef<"QuoteLine", 'Decimal'>;
    readonly totalPrice: Prisma.FieldRef<"QuoteLine", 'Decimal'>;
    readonly order: Prisma.FieldRef<"QuoteLine", 'Int'>;
    readonly quoteId: Prisma.FieldRef<"QuoteLine", 'String'>;
    readonly productId: Prisma.FieldRef<"QuoteLine", 'String'>;
    readonly serviceId: Prisma.FieldRef<"QuoteLine", 'String'>;
}
/**
 * QuoteLine findUnique
 */
export type QuoteLineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which QuoteLine to fetch.
     */
    where: Prisma.QuoteLineWhereUniqueInput;
};
/**
 * QuoteLine findUniqueOrThrow
 */
export type QuoteLineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which QuoteLine to fetch.
     */
    where: Prisma.QuoteLineWhereUniqueInput;
};
/**
 * QuoteLine findFirst
 */
export type QuoteLineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which QuoteLine to fetch.
     */
    where?: Prisma.QuoteLineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QuoteLines to fetch.
     */
    orderBy?: Prisma.QuoteLineOrderByWithRelationInput | Prisma.QuoteLineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for QuoteLines.
     */
    cursor?: Prisma.QuoteLineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QuoteLines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QuoteLines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of QuoteLines.
     */
    distinct?: Prisma.QuoteLineScalarFieldEnum | Prisma.QuoteLineScalarFieldEnum[];
};
/**
 * QuoteLine findFirstOrThrow
 */
export type QuoteLineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which QuoteLine to fetch.
     */
    where?: Prisma.QuoteLineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QuoteLines to fetch.
     */
    orderBy?: Prisma.QuoteLineOrderByWithRelationInput | Prisma.QuoteLineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for QuoteLines.
     */
    cursor?: Prisma.QuoteLineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QuoteLines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QuoteLines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of QuoteLines.
     */
    distinct?: Prisma.QuoteLineScalarFieldEnum | Prisma.QuoteLineScalarFieldEnum[];
};
/**
 * QuoteLine findMany
 */
export type QuoteLineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which QuoteLines to fetch.
     */
    where?: Prisma.QuoteLineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QuoteLines to fetch.
     */
    orderBy?: Prisma.QuoteLineOrderByWithRelationInput | Prisma.QuoteLineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing QuoteLines.
     */
    cursor?: Prisma.QuoteLineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QuoteLines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QuoteLines.
     */
    skip?: number;
    distinct?: Prisma.QuoteLineScalarFieldEnum | Prisma.QuoteLineScalarFieldEnum[];
};
/**
 * QuoteLine create
 */
export type QuoteLineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a QuoteLine.
     */
    data: Prisma.XOR<Prisma.QuoteLineCreateInput, Prisma.QuoteLineUncheckedCreateInput>;
};
/**
 * QuoteLine createMany
 */
export type QuoteLineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuoteLines.
     */
    data: Prisma.QuoteLineCreateManyInput | Prisma.QuoteLineCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * QuoteLine update
 */
export type QuoteLineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a QuoteLine.
     */
    data: Prisma.XOR<Prisma.QuoteLineUpdateInput, Prisma.QuoteLineUncheckedUpdateInput>;
    /**
     * Choose, which QuoteLine to update.
     */
    where: Prisma.QuoteLineWhereUniqueInput;
};
/**
 * QuoteLine updateMany
 */
export type QuoteLineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update QuoteLines.
     */
    data: Prisma.XOR<Prisma.QuoteLineUpdateManyMutationInput, Prisma.QuoteLineUncheckedUpdateManyInput>;
    /**
     * Filter which QuoteLines to update
     */
    where?: Prisma.QuoteLineWhereInput;
    /**
     * Limit how many QuoteLines to update.
     */
    limit?: number;
};
/**
 * QuoteLine upsert
 */
export type QuoteLineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the QuoteLine to update in case it exists.
     */
    where: Prisma.QuoteLineWhereUniqueInput;
    /**
     * In case the QuoteLine found by the `where` argument doesn't exist, create a new QuoteLine with this data.
     */
    create: Prisma.XOR<Prisma.QuoteLineCreateInput, Prisma.QuoteLineUncheckedCreateInput>;
    /**
     * In case the QuoteLine was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.QuoteLineUpdateInput, Prisma.QuoteLineUncheckedUpdateInput>;
};
/**
 * QuoteLine delete
 */
export type QuoteLineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which QuoteLine to delete.
     */
    where: Prisma.QuoteLineWhereUniqueInput;
};
/**
 * QuoteLine deleteMany
 */
export type QuoteLineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteLines to delete
     */
    where?: Prisma.QuoteLineWhereInput;
    /**
     * Limit how many QuoteLines to delete.
     */
    limit?: number;
};
/**
 * QuoteLine.product
 */
export type QuoteLine$productArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * QuoteLine.service
 */
export type QuoteLine$serviceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * QuoteLine without action
 */
export type QuoteLineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=QuoteLine.d.ts.map
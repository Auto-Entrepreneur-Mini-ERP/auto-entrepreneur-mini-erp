import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Product
 *
 */
export type ProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPayload>;
export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type ProductAvgAggregateOutputType = {
    unitPrice: runtime.Decimal | null;
    stockQuantity: number | null;
    alertThreshold: number | null;
};
export type ProductSumAggregateOutputType = {
    unitPrice: runtime.Decimal | null;
    stockQuantity: number | null;
    alertThreshold: number | null;
};
export type ProductMinAggregateOutputType = {
    id: string | null;
    itemId: string | null;
    unitPrice: runtime.Decimal | null;
    reference: string | null;
    stockQuantity: number | null;
    alertThreshold: number | null;
    AutoEntrepreneurId: string | null;
};
export type ProductMaxAggregateOutputType = {
    id: string | null;
    itemId: string | null;
    unitPrice: runtime.Decimal | null;
    reference: string | null;
    stockQuantity: number | null;
    alertThreshold: number | null;
    AutoEntrepreneurId: string | null;
};
export type ProductCountAggregateOutputType = {
    id: number;
    itemId: number;
    unitPrice: number;
    reference: number;
    stockQuantity: number;
    alertThreshold: number;
    AutoEntrepreneurId: number;
    _all: number;
};
export type ProductAvgAggregateInputType = {
    unitPrice?: true;
    stockQuantity?: true;
    alertThreshold?: true;
};
export type ProductSumAggregateInputType = {
    unitPrice?: true;
    stockQuantity?: true;
    alertThreshold?: true;
};
export type ProductMinAggregateInputType = {
    id?: true;
    itemId?: true;
    unitPrice?: true;
    reference?: true;
    stockQuantity?: true;
    alertThreshold?: true;
    AutoEntrepreneurId?: true;
};
export type ProductMaxAggregateInputType = {
    id?: true;
    itemId?: true;
    unitPrice?: true;
    reference?: true;
    stockQuantity?: true;
    alertThreshold?: true;
    AutoEntrepreneurId?: true;
};
export type ProductCountAggregateInputType = {
    id?: true;
    itemId?: true;
    unitPrice?: true;
    reference?: true;
    stockQuantity?: true;
    alertThreshold?: true;
    AutoEntrepreneurId?: true;
    _all?: true;
};
export type ProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: Prisma.ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType;
};
export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct[P]> : Prisma.GetScalarType<T[P], AggregateProduct[P]>;
};
export type ProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithAggregationInput | Prisma.ProductOrderByWithAggregationInput[];
    by: Prisma.ProductScalarFieldEnum[] | Prisma.ProductScalarFieldEnum;
    having?: Prisma.ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type ProductGroupByOutputType = {
    id: string;
    itemId: string;
    unitPrice: runtime.Decimal;
    reference: string | null;
    stockQuantity: number;
    alertThreshold: number;
    AutoEntrepreneurId: string;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]>;
}>>;
export type ProductWhereInput = {
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    id?: Prisma.StringFilter<"Product"> | string;
    itemId?: Prisma.StringFilter<"Product"> | string;
    unitPrice?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: Prisma.StringNullableFilter<"Product"> | string | null;
    stockQuantity?: Prisma.IntFilter<"Product"> | number;
    alertThreshold?: Prisma.IntFilter<"Product"> | number;
    AutoEntrepreneurId?: Prisma.StringFilter<"Product"> | string;
    item?: Prisma.XOR<Prisma.ItemScalarRelationFilter, Prisma.ItemWhereInput>;
    AutoEntrepreneur?: Prisma.XOR<Prisma.AutoEntrepreneurScalarRelationFilter, Prisma.AutoEntrepreneurWhereInput>;
    invoiceLines?: Prisma.InvoiceLineListRelationFilter;
    quoteLines?: Prisma.QuoteLineListRelationFilter;
};
export type ProductOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    reference?: Prisma.SortOrderInput | Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    alertThreshold?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    item?: Prisma.ItemOrderByWithRelationInput;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurOrderByWithRelationInput;
    invoiceLines?: Prisma.InvoiceLineOrderByRelationAggregateInput;
    quoteLines?: Prisma.QuoteLineOrderByRelationAggregateInput;
    _relevance?: Prisma.ProductOrderByRelevanceInput;
};
export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    itemId?: string;
    reference?: string;
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    unitPrice?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stockQuantity?: Prisma.IntFilter<"Product"> | number;
    alertThreshold?: Prisma.IntFilter<"Product"> | number;
    AutoEntrepreneurId?: Prisma.StringFilter<"Product"> | string;
    item?: Prisma.XOR<Prisma.ItemScalarRelationFilter, Prisma.ItemWhereInput>;
    AutoEntrepreneur?: Prisma.XOR<Prisma.AutoEntrepreneurScalarRelationFilter, Prisma.AutoEntrepreneurWhereInput>;
    invoiceLines?: Prisma.InvoiceLineListRelationFilter;
    quoteLines?: Prisma.QuoteLineListRelationFilter;
}, "id" | "itemId" | "reference">;
export type ProductOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    reference?: Prisma.SortOrderInput | Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    alertThreshold?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    _count?: Prisma.ProductCountOrderByAggregateInput;
    _avg?: Prisma.ProductAvgOrderByAggregateInput;
    _max?: Prisma.ProductMaxOrderByAggregateInput;
    _min?: Prisma.ProductMinOrderByAggregateInput;
    _sum?: Prisma.ProductSumOrderByAggregateInput;
};
export type ProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    itemId?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    unitPrice?: Prisma.DecimalWithAggregatesFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    stockQuantity?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    alertThreshold?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    AutoEntrepreneurId?: Prisma.StringWithAggregatesFilter<"Product"> | string;
};
export type ProductCreateInput = {
    id?: string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: string | null;
    stockQuantity?: number;
    alertThreshold?: number;
    item: Prisma.ItemCreateNestedOneWithoutProductInput;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutProductsInput;
    invoiceLines?: Prisma.InvoiceLineCreateNestedManyWithoutProductInput;
    quoteLines?: Prisma.QuoteLineCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateInput = {
    id?: string;
    itemId: string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: string | null;
    stockQuantity?: number;
    alertThreshold?: number;
    AutoEntrepreneurId: string;
    invoiceLines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutProductInput;
    quoteLines?: Prisma.QuoteLineUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    alertThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
    item?: Prisma.ItemUpdateOneRequiredWithoutProductNestedInput;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutProductsNestedInput;
    invoiceLines?: Prisma.InvoiceLineUpdateManyWithoutProductNestedInput;
    quoteLines?: Prisma.QuoteLineUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    alertThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceLines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutProductNestedInput;
    quoteLines?: Prisma.QuoteLineUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManyInput = {
    id?: string;
    itemId: string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: string | null;
    stockQuantity?: number;
    alertThreshold?: number;
    AutoEntrepreneurId: string;
};
export type ProductUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    alertThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    alertThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProductListRelationFilter = {
    every?: Prisma.ProductWhereInput;
    some?: Prisma.ProductWhereInput;
    none?: Prisma.ProductWhereInput;
};
export type ProductOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductNullableScalarRelationFilter = {
    is?: Prisma.ProductWhereInput | null;
    isNot?: Prisma.ProductWhereInput | null;
};
export type ProductOrderByRelevanceInput = {
    fields: Prisma.ProductOrderByRelevanceFieldEnum | Prisma.ProductOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ProductCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    alertThreshold?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
};
export type ProductAvgOrderByAggregateInput = {
    unitPrice?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    alertThreshold?: Prisma.SortOrder;
};
export type ProductMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    alertThreshold?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
};
export type ProductMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    alertThreshold?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
};
export type ProductSumOrderByAggregateInput = {
    unitPrice?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    alertThreshold?: Prisma.SortOrder;
};
export type ProductCreateNestedManyWithoutAutoEntrepreneurInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutAutoEntrepreneurInput, Prisma.ProductUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.ProductCreateWithoutAutoEntrepreneurInput[] | Prisma.ProductUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.ProductCreateOrConnectWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.ProductCreateManyAutoEntrepreneurInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutAutoEntrepreneurInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutAutoEntrepreneurInput, Prisma.ProductUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.ProductCreateWithoutAutoEntrepreneurInput[] | Prisma.ProductUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.ProductCreateOrConnectWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.ProductCreateManyAutoEntrepreneurInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutAutoEntrepreneurNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutAutoEntrepreneurInput, Prisma.ProductUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.ProductCreateWithoutAutoEntrepreneurInput[] | Prisma.ProductUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.ProductCreateOrConnectWithoutAutoEntrepreneurInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.ProductUpsertWithWhereUniqueWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.ProductCreateManyAutoEntrepreneurInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.ProductUpdateWithWhereUniqueWithoutAutoEntrepreneurInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutAutoEntrepreneurInput | Prisma.ProductUpdateManyWithWhereWithoutAutoEntrepreneurInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutAutoEntrepreneurInput, Prisma.ProductUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.ProductCreateWithoutAutoEntrepreneurInput[] | Prisma.ProductUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.ProductCreateOrConnectWithoutAutoEntrepreneurInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.ProductUpsertWithWhereUniqueWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.ProductCreateManyAutoEntrepreneurInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.ProductUpdateWithWhereUniqueWithoutAutoEntrepreneurInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutAutoEntrepreneurInput | Prisma.ProductUpdateManyWithWhereWithoutAutoEntrepreneurInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductCreateNestedOneWithoutItemInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutItemInput, Prisma.ProductUncheckedCreateWithoutItemInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutItemInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUncheckedCreateNestedOneWithoutItemInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutItemInput, Prisma.ProductUncheckedCreateWithoutItemInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutItemInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutItemInput, Prisma.ProductUncheckedCreateWithoutItemInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutItemInput;
    upsert?: Prisma.ProductUpsertWithoutItemInput;
    disconnect?: Prisma.ProductWhereInput | boolean;
    delete?: Prisma.ProductWhereInput | boolean;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutItemInput, Prisma.ProductUpdateWithoutItemInput>, Prisma.ProductUncheckedUpdateWithoutItemInput>;
};
export type ProductUncheckedUpdateOneWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutItemInput, Prisma.ProductUncheckedCreateWithoutItemInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutItemInput;
    upsert?: Prisma.ProductUpsertWithoutItemInput;
    disconnect?: Prisma.ProductWhereInput | boolean;
    delete?: Prisma.ProductWhereInput | boolean;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutItemInput, Prisma.ProductUpdateWithoutItemInput>, Prisma.ProductUncheckedUpdateWithoutItemInput>;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ProductCreateNestedOneWithoutInvoiceLinesInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutInvoiceLinesInput, Prisma.ProductUncheckedCreateWithoutInvoiceLinesInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutInvoiceLinesInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneWithoutInvoiceLinesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutInvoiceLinesInput, Prisma.ProductUncheckedCreateWithoutInvoiceLinesInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutInvoiceLinesInput;
    upsert?: Prisma.ProductUpsertWithoutInvoiceLinesInput;
    disconnect?: Prisma.ProductWhereInput | boolean;
    delete?: Prisma.ProductWhereInput | boolean;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutInvoiceLinesInput, Prisma.ProductUpdateWithoutInvoiceLinesInput>, Prisma.ProductUncheckedUpdateWithoutInvoiceLinesInput>;
};
export type ProductCreateNestedOneWithoutQuoteLinesInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutQuoteLinesInput, Prisma.ProductUncheckedCreateWithoutQuoteLinesInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutQuoteLinesInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneWithoutQuoteLinesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutQuoteLinesInput, Prisma.ProductUncheckedCreateWithoutQuoteLinesInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutQuoteLinesInput;
    upsert?: Prisma.ProductUpsertWithoutQuoteLinesInput;
    disconnect?: Prisma.ProductWhereInput | boolean;
    delete?: Prisma.ProductWhereInput | boolean;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutQuoteLinesInput, Prisma.ProductUpdateWithoutQuoteLinesInput>, Prisma.ProductUncheckedUpdateWithoutQuoteLinesInput>;
};
export type ProductCreateWithoutAutoEntrepreneurInput = {
    id?: string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: string | null;
    stockQuantity?: number;
    alertThreshold?: number;
    item: Prisma.ItemCreateNestedOneWithoutProductInput;
    invoiceLines?: Prisma.InvoiceLineCreateNestedManyWithoutProductInput;
    quoteLines?: Prisma.QuoteLineCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutAutoEntrepreneurInput = {
    id?: string;
    itemId: string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: string | null;
    stockQuantity?: number;
    alertThreshold?: number;
    invoiceLines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutProductInput;
    quoteLines?: Prisma.QuoteLineUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutAutoEntrepreneurInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutAutoEntrepreneurInput, Prisma.ProductUncheckedCreateWithoutAutoEntrepreneurInput>;
};
export type ProductCreateManyAutoEntrepreneurInputEnvelope = {
    data: Prisma.ProductCreateManyAutoEntrepreneurInput | Prisma.ProductCreateManyAutoEntrepreneurInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutAutoEntrepreneurInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutAutoEntrepreneurInput, Prisma.ProductUncheckedUpdateWithoutAutoEntrepreneurInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutAutoEntrepreneurInput, Prisma.ProductUncheckedCreateWithoutAutoEntrepreneurInput>;
};
export type ProductUpdateWithWhereUniqueWithoutAutoEntrepreneurInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutAutoEntrepreneurInput, Prisma.ProductUncheckedUpdateWithoutAutoEntrepreneurInput>;
};
export type ProductUpdateManyWithWhereWithoutAutoEntrepreneurInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutAutoEntrepreneurInput>;
};
export type ProductScalarWhereInput = {
    AND?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    OR?: Prisma.ProductScalarWhereInput[];
    NOT?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    id?: Prisma.StringFilter<"Product"> | string;
    itemId?: Prisma.StringFilter<"Product"> | string;
    unitPrice?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: Prisma.StringNullableFilter<"Product"> | string | null;
    stockQuantity?: Prisma.IntFilter<"Product"> | number;
    alertThreshold?: Prisma.IntFilter<"Product"> | number;
    AutoEntrepreneurId?: Prisma.StringFilter<"Product"> | string;
};
export type ProductCreateWithoutItemInput = {
    id?: string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: string | null;
    stockQuantity?: number;
    alertThreshold?: number;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutProductsInput;
    invoiceLines?: Prisma.InvoiceLineCreateNestedManyWithoutProductInput;
    quoteLines?: Prisma.QuoteLineCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutItemInput = {
    id?: string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: string | null;
    stockQuantity?: number;
    alertThreshold?: number;
    AutoEntrepreneurId: string;
    invoiceLines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutProductInput;
    quoteLines?: Prisma.QuoteLineUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutItemInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutItemInput, Prisma.ProductUncheckedCreateWithoutItemInput>;
};
export type ProductUpsertWithoutItemInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutItemInput, Prisma.ProductUncheckedUpdateWithoutItemInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutItemInput, Prisma.ProductUncheckedCreateWithoutItemInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutItemInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutItemInput, Prisma.ProductUncheckedUpdateWithoutItemInput>;
};
export type ProductUpdateWithoutItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    alertThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutProductsNestedInput;
    invoiceLines?: Prisma.InvoiceLineUpdateManyWithoutProductNestedInput;
    quoteLines?: Prisma.QuoteLineUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    alertThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceLines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutProductNestedInput;
    quoteLines?: Prisma.QuoteLineUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutInvoiceLinesInput = {
    id?: string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: string | null;
    stockQuantity?: number;
    alertThreshold?: number;
    item: Prisma.ItemCreateNestedOneWithoutProductInput;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutProductsInput;
    quoteLines?: Prisma.QuoteLineCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutInvoiceLinesInput = {
    id?: string;
    itemId: string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: string | null;
    stockQuantity?: number;
    alertThreshold?: number;
    AutoEntrepreneurId: string;
    quoteLines?: Prisma.QuoteLineUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutInvoiceLinesInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutInvoiceLinesInput, Prisma.ProductUncheckedCreateWithoutInvoiceLinesInput>;
};
export type ProductUpsertWithoutInvoiceLinesInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutInvoiceLinesInput, Prisma.ProductUncheckedUpdateWithoutInvoiceLinesInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutInvoiceLinesInput, Prisma.ProductUncheckedCreateWithoutInvoiceLinesInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutInvoiceLinesInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutInvoiceLinesInput, Prisma.ProductUncheckedUpdateWithoutInvoiceLinesInput>;
};
export type ProductUpdateWithoutInvoiceLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    alertThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
    item?: Prisma.ItemUpdateOneRequiredWithoutProductNestedInput;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutProductsNestedInput;
    quoteLines?: Prisma.QuoteLineUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutInvoiceLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    alertThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    quoteLines?: Prisma.QuoteLineUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutQuoteLinesInput = {
    id?: string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: string | null;
    stockQuantity?: number;
    alertThreshold?: number;
    item: Prisma.ItemCreateNestedOneWithoutProductInput;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutProductsInput;
    invoiceLines?: Prisma.InvoiceLineCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutQuoteLinesInput = {
    id?: string;
    itemId: string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: string | null;
    stockQuantity?: number;
    alertThreshold?: number;
    AutoEntrepreneurId: string;
    invoiceLines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutQuoteLinesInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutQuoteLinesInput, Prisma.ProductUncheckedCreateWithoutQuoteLinesInput>;
};
export type ProductUpsertWithoutQuoteLinesInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutQuoteLinesInput, Prisma.ProductUncheckedUpdateWithoutQuoteLinesInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutQuoteLinesInput, Prisma.ProductUncheckedCreateWithoutQuoteLinesInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutQuoteLinesInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutQuoteLinesInput, Prisma.ProductUncheckedUpdateWithoutQuoteLinesInput>;
};
export type ProductUpdateWithoutQuoteLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    alertThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
    item?: Prisma.ItemUpdateOneRequiredWithoutProductNestedInput;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutProductsNestedInput;
    invoiceLines?: Prisma.InvoiceLineUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutQuoteLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    alertThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceLines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManyAutoEntrepreneurInput = {
    id?: string;
    itemId: string;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: string | null;
    stockQuantity?: number;
    alertThreshold?: number;
};
export type ProductUpdateWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    alertThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
    item?: Prisma.ItemUpdateOneRequiredWithoutProductNestedInput;
    invoiceLines?: Prisma.InvoiceLineUpdateManyWithoutProductNestedInput;
    quoteLines?: Prisma.QuoteLineUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    alertThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceLines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutProductNestedInput;
    quoteLines?: Prisma.QuoteLineUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    alertThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
};
/**
 * Count Type ProductCountOutputType
 */
export type ProductCountOutputType = {
    invoiceLines: number;
    quoteLines: number;
};
export type ProductCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoiceLines?: boolean | ProductCountOutputTypeCountInvoiceLinesArgs;
    quoteLines?: boolean | ProductCountOutputTypeCountQuoteLinesArgs;
};
/**
 * ProductCountOutputType without action
 */
export type ProductCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: Prisma.ProductCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProductCountOutputType without action
 */
export type ProductCountOutputTypeCountInvoiceLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceLineWhereInput;
};
/**
 * ProductCountOutputType without action
 */
export type ProductCountOutputTypeCountQuoteLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuoteLineWhereInput;
};
export type ProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    itemId?: boolean;
    unitPrice?: boolean;
    reference?: boolean;
    stockQuantity?: boolean;
    alertThreshold?: boolean;
    AutoEntrepreneurId?: boolean;
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
    AutoEntrepreneur?: boolean | Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>;
    invoiceLines?: boolean | Prisma.Product$invoiceLinesArgs<ExtArgs>;
    quoteLines?: boolean | Prisma.Product$quoteLinesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectScalar = {
    id?: boolean;
    itemId?: boolean;
    unitPrice?: boolean;
    reference?: boolean;
    stockQuantity?: boolean;
    alertThreshold?: boolean;
    AutoEntrepreneurId?: boolean;
};
export type ProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "itemId" | "unitPrice" | "reference" | "stockQuantity" | "alertThreshold" | "AutoEntrepreneurId", ExtArgs["result"]["product"]>;
export type ProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
    AutoEntrepreneur?: boolean | Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>;
    invoiceLines?: boolean | Prisma.Product$invoiceLinesArgs<ExtArgs>;
    quoteLines?: boolean | Prisma.Product$quoteLinesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Product";
    objects: {
        item: Prisma.$ItemPayload<ExtArgs>;
        AutoEntrepreneur: Prisma.$AutoEntrepreneurPayload<ExtArgs>;
        invoiceLines: Prisma.$InvoiceLinePayload<ExtArgs>[];
        quoteLines: Prisma.$QuoteLinePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        itemId: string;
        unitPrice: runtime.Decimal;
        reference: string | null;
        stockQuantity: number;
        alertThreshold: number;
        AutoEntrepreneurId: string;
    }, ExtArgs["result"]["product"]>;
    composites: {};
};
export type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPayload, S>;
export type ProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
};
export interface ProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Product'];
        meta: {
            name: 'Product';
        };
    };
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProductFindManyArgs>(args?: Prisma.SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     *
     */
    create<T extends ProductCreateArgs>(args: Prisma.SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     *
     */
    delete<T extends ProductDeleteArgs>(args: Prisma.SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductUpdateArgs>(args: Prisma.SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: Prisma.SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(args?: Prisma.Subset<T, ProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Prisma.Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>;
    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Product model
     */
    readonly fields: ProductFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Product.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    item<T extends Prisma.ItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ItemDefaultArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    AutoEntrepreneur<T extends Prisma.AutoEntrepreneurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>>): Prisma.Prisma__AutoEntrepreneurClient<runtime.Types.Result.GetResult<Prisma.$AutoEntrepreneurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    invoiceLines<T extends Prisma.Product$invoiceLinesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$invoiceLinesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    quoteLines<T extends Prisma.Product$quoteLinesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$quoteLinesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuoteLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Product model
 */
export interface ProductFieldRefs {
    readonly id: Prisma.FieldRef<"Product", 'String'>;
    readonly itemId: Prisma.FieldRef<"Product", 'String'>;
    readonly unitPrice: Prisma.FieldRef<"Product", 'Decimal'>;
    readonly reference: Prisma.FieldRef<"Product", 'String'>;
    readonly stockQuantity: Prisma.FieldRef<"Product", 'Int'>;
    readonly alertThreshold: Prisma.FieldRef<"Product", 'Int'>;
    readonly AutoEntrepreneurId: Prisma.FieldRef<"Product", 'String'>;
}
/**
 * Product findUnique
 */
export type ProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Product to fetch.
     */
    where: Prisma.ProductWhereUniqueInput;
};
/**
 * Product findUniqueOrThrow
 */
export type ProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Product to fetch.
     */
    where: Prisma.ProductWhereUniqueInput;
};
/**
 * Product findFirst
 */
export type ProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Product to fetch.
     */
    where?: Prisma.ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: Prisma.ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
/**
 * Product findFirstOrThrow
 */
export type ProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Product to fetch.
     */
    where?: Prisma.ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: Prisma.ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
/**
 * Product findMany
 */
export type ProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Products to fetch.
     */
    where?: Prisma.ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Products.
     */
    cursor?: Prisma.ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
/**
 * Product create
 */
export type ProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Product.
     */
    data: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
};
/**
 * Product createMany
 */
export type ProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Product update
 */
export type ProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Product.
     */
    data: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
    /**
     * Choose, which Product to update.
     */
    where: Prisma.ProductWhereUniqueInput;
};
/**
 * Product updateMany
 */
export type ProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    /**
     * Filter which Products to update
     */
    where?: Prisma.ProductWhereInput;
    /**
     * Limit how many Products to update.
     */
    limit?: number;
};
/**
 * Product upsert
 */
export type ProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: Prisma.ProductWhereUniqueInput;
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
};
/**
 * Product delete
 */
export type ProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Product to delete.
     */
    where: Prisma.ProductWhereUniqueInput;
};
/**
 * Product deleteMany
 */
export type ProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: Prisma.ProductWhereInput;
    /**
     * Limit how many Products to delete.
     */
    limit?: number;
};
/**
 * Product.invoiceLines
 */
export type Product$invoiceLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Product.quoteLines
 */
export type Product$quoteLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Product without action
 */
export type ProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Product.d.ts.map
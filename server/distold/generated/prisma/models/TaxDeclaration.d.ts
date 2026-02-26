import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model TaxDeclaration
 *
 */
export type TaxDeclarationModel = runtime.Types.Result.DefaultSelection<Prisma.$TaxDeclarationPayload>;
export type AggregateTaxDeclaration = {
    _count: TaxDeclarationCountAggregateOutputType | null;
    _avg: TaxDeclarationAvgAggregateOutputType | null;
    _sum: TaxDeclarationSumAggregateOutputType | null;
    _min: TaxDeclarationMinAggregateOutputType | null;
    _max: TaxDeclarationMaxAggregateOutputType | null;
};
export type TaxDeclarationAvgAggregateOutputType = {
    year: number | null;
    month: number | null;
    totalRevenue: runtime.Decimal | null;
    taxRate: number | null;
    taxAmount: runtime.Decimal | null;
};
export type TaxDeclarationSumAggregateOutputType = {
    year: number | null;
    month: number | null;
    totalRevenue: runtime.Decimal | null;
    taxRate: number | null;
    taxAmount: runtime.Decimal | null;
};
export type TaxDeclarationMinAggregateOutputType = {
    id: string | null;
    period: string | null;
    year: number | null;
    month: number | null;
    totalRevenue: runtime.Decimal | null;
    taxRate: number | null;
    taxAmount: runtime.Decimal | null;
    status: $Enums.DeclarationStatus | null;
    dueDate: Date | null;
    paymentDate: Date | null;
    pdfUrl: string | null;
    AutoEntrepreneurId: string | null;
    creationDate: Date | null;
};
export type TaxDeclarationMaxAggregateOutputType = {
    id: string | null;
    period: string | null;
    year: number | null;
    month: number | null;
    totalRevenue: runtime.Decimal | null;
    taxRate: number | null;
    taxAmount: runtime.Decimal | null;
    status: $Enums.DeclarationStatus | null;
    dueDate: Date | null;
    paymentDate: Date | null;
    pdfUrl: string | null;
    AutoEntrepreneurId: string | null;
    creationDate: Date | null;
};
export type TaxDeclarationCountAggregateOutputType = {
    id: number;
    period: number;
    year: number;
    month: number;
    totalRevenue: number;
    taxRate: number;
    taxAmount: number;
    status: number;
    dueDate: number;
    paymentDate: number;
    pdfUrl: number;
    AutoEntrepreneurId: number;
    creationDate: number;
    _all: number;
};
export type TaxDeclarationAvgAggregateInputType = {
    year?: true;
    month?: true;
    totalRevenue?: true;
    taxRate?: true;
    taxAmount?: true;
};
export type TaxDeclarationSumAggregateInputType = {
    year?: true;
    month?: true;
    totalRevenue?: true;
    taxRate?: true;
    taxAmount?: true;
};
export type TaxDeclarationMinAggregateInputType = {
    id?: true;
    period?: true;
    year?: true;
    month?: true;
    totalRevenue?: true;
    taxRate?: true;
    taxAmount?: true;
    status?: true;
    dueDate?: true;
    paymentDate?: true;
    pdfUrl?: true;
    AutoEntrepreneurId?: true;
    creationDate?: true;
};
export type TaxDeclarationMaxAggregateInputType = {
    id?: true;
    period?: true;
    year?: true;
    month?: true;
    totalRevenue?: true;
    taxRate?: true;
    taxAmount?: true;
    status?: true;
    dueDate?: true;
    paymentDate?: true;
    pdfUrl?: true;
    AutoEntrepreneurId?: true;
    creationDate?: true;
};
export type TaxDeclarationCountAggregateInputType = {
    id?: true;
    period?: true;
    year?: true;
    month?: true;
    totalRevenue?: true;
    taxRate?: true;
    taxAmount?: true;
    status?: true;
    dueDate?: true;
    paymentDate?: true;
    pdfUrl?: true;
    AutoEntrepreneurId?: true;
    creationDate?: true;
    _all?: true;
};
export type TaxDeclarationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TaxDeclaration to aggregate.
     */
    where?: Prisma.TaxDeclarationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaxDeclarations to fetch.
     */
    orderBy?: Prisma.TaxDeclarationOrderByWithRelationInput | Prisma.TaxDeclarationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TaxDeclarationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaxDeclarations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaxDeclarations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TaxDeclarations
    **/
    _count?: true | TaxDeclarationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TaxDeclarationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TaxDeclarationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TaxDeclarationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TaxDeclarationMaxAggregateInputType;
};
export type GetTaxDeclarationAggregateType<T extends TaxDeclarationAggregateArgs> = {
    [P in keyof T & keyof AggregateTaxDeclaration]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaxDeclaration[P]> : Prisma.GetScalarType<T[P], AggregateTaxDeclaration[P]>;
};
export type TaxDeclarationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxDeclarationWhereInput;
    orderBy?: Prisma.TaxDeclarationOrderByWithAggregationInput | Prisma.TaxDeclarationOrderByWithAggregationInput[];
    by: Prisma.TaxDeclarationScalarFieldEnum[] | Prisma.TaxDeclarationScalarFieldEnum;
    having?: Prisma.TaxDeclarationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaxDeclarationCountAggregateInputType | true;
    _avg?: TaxDeclarationAvgAggregateInputType;
    _sum?: TaxDeclarationSumAggregateInputType;
    _min?: TaxDeclarationMinAggregateInputType;
    _max?: TaxDeclarationMaxAggregateInputType;
};
export type TaxDeclarationGroupByOutputType = {
    id: string;
    period: string;
    year: number;
    month: number | null;
    totalRevenue: runtime.Decimal;
    taxRate: number;
    taxAmount: runtime.Decimal;
    status: $Enums.DeclarationStatus;
    dueDate: Date | null;
    paymentDate: Date | null;
    pdfUrl: string | null;
    AutoEntrepreneurId: string;
    creationDate: Date;
    _count: TaxDeclarationCountAggregateOutputType | null;
    _avg: TaxDeclarationAvgAggregateOutputType | null;
    _sum: TaxDeclarationSumAggregateOutputType | null;
    _min: TaxDeclarationMinAggregateOutputType | null;
    _max: TaxDeclarationMaxAggregateOutputType | null;
};
type GetTaxDeclarationGroupByPayload<T extends TaxDeclarationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaxDeclarationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaxDeclarationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaxDeclarationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaxDeclarationGroupByOutputType[P]>;
}>>;
export type TaxDeclarationWhereInput = {
    AND?: Prisma.TaxDeclarationWhereInput | Prisma.TaxDeclarationWhereInput[];
    OR?: Prisma.TaxDeclarationWhereInput[];
    NOT?: Prisma.TaxDeclarationWhereInput | Prisma.TaxDeclarationWhereInput[];
    id?: Prisma.StringFilter<"TaxDeclaration"> | string;
    period?: Prisma.StringFilter<"TaxDeclaration"> | string;
    year?: Prisma.IntFilter<"TaxDeclaration"> | number;
    month?: Prisma.IntNullableFilter<"TaxDeclaration"> | number | null;
    totalRevenue?: Prisma.DecimalFilter<"TaxDeclaration"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: Prisma.FloatFilter<"TaxDeclaration"> | number;
    taxAmount?: Prisma.DecimalFilter<"TaxDeclaration"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumDeclarationStatusFilter<"TaxDeclaration"> | $Enums.DeclarationStatus;
    dueDate?: Prisma.DateTimeNullableFilter<"TaxDeclaration"> | Date | string | null;
    paymentDate?: Prisma.DateTimeNullableFilter<"TaxDeclaration"> | Date | string | null;
    pdfUrl?: Prisma.StringNullableFilter<"TaxDeclaration"> | string | null;
    AutoEntrepreneurId?: Prisma.StringFilter<"TaxDeclaration"> | string;
    creationDate?: Prisma.DateTimeFilter<"TaxDeclaration"> | Date | string;
    AutoEntrepreneur?: Prisma.XOR<Prisma.AutoEntrepreneurScalarRelationFilter, Prisma.AutoEntrepreneurWhereInput>;
};
export type TaxDeclarationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    month?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalRevenue?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurOrderByWithRelationInput;
    _relevance?: Prisma.TaxDeclarationOrderByRelevanceInput;
};
export type TaxDeclarationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TaxDeclarationWhereInput | Prisma.TaxDeclarationWhereInput[];
    OR?: Prisma.TaxDeclarationWhereInput[];
    NOT?: Prisma.TaxDeclarationWhereInput | Prisma.TaxDeclarationWhereInput[];
    period?: Prisma.StringFilter<"TaxDeclaration"> | string;
    year?: Prisma.IntFilter<"TaxDeclaration"> | number;
    month?: Prisma.IntNullableFilter<"TaxDeclaration"> | number | null;
    totalRevenue?: Prisma.DecimalFilter<"TaxDeclaration"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: Prisma.FloatFilter<"TaxDeclaration"> | number;
    taxAmount?: Prisma.DecimalFilter<"TaxDeclaration"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumDeclarationStatusFilter<"TaxDeclaration"> | $Enums.DeclarationStatus;
    dueDate?: Prisma.DateTimeNullableFilter<"TaxDeclaration"> | Date | string | null;
    paymentDate?: Prisma.DateTimeNullableFilter<"TaxDeclaration"> | Date | string | null;
    pdfUrl?: Prisma.StringNullableFilter<"TaxDeclaration"> | string | null;
    AutoEntrepreneurId?: Prisma.StringFilter<"TaxDeclaration"> | string;
    creationDate?: Prisma.DateTimeFilter<"TaxDeclaration"> | Date | string;
    AutoEntrepreneur?: Prisma.XOR<Prisma.AutoEntrepreneurScalarRelationFilter, Prisma.AutoEntrepreneurWhereInput>;
}, "id">;
export type TaxDeclarationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    month?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalRevenue?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    _count?: Prisma.TaxDeclarationCountOrderByAggregateInput;
    _avg?: Prisma.TaxDeclarationAvgOrderByAggregateInput;
    _max?: Prisma.TaxDeclarationMaxOrderByAggregateInput;
    _min?: Prisma.TaxDeclarationMinOrderByAggregateInput;
    _sum?: Prisma.TaxDeclarationSumOrderByAggregateInput;
};
export type TaxDeclarationScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaxDeclarationScalarWhereWithAggregatesInput | Prisma.TaxDeclarationScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaxDeclarationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaxDeclarationScalarWhereWithAggregatesInput | Prisma.TaxDeclarationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TaxDeclaration"> | string;
    period?: Prisma.StringWithAggregatesFilter<"TaxDeclaration"> | string;
    year?: Prisma.IntWithAggregatesFilter<"TaxDeclaration"> | number;
    month?: Prisma.IntNullableWithAggregatesFilter<"TaxDeclaration"> | number | null;
    totalRevenue?: Prisma.DecimalWithAggregatesFilter<"TaxDeclaration"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: Prisma.FloatWithAggregatesFilter<"TaxDeclaration"> | number;
    taxAmount?: Prisma.DecimalWithAggregatesFilter<"TaxDeclaration"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumDeclarationStatusWithAggregatesFilter<"TaxDeclaration"> | $Enums.DeclarationStatus;
    dueDate?: Prisma.DateTimeNullableWithAggregatesFilter<"TaxDeclaration"> | Date | string | null;
    paymentDate?: Prisma.DateTimeNullableWithAggregatesFilter<"TaxDeclaration"> | Date | string | null;
    pdfUrl?: Prisma.StringNullableWithAggregatesFilter<"TaxDeclaration"> | string | null;
    AutoEntrepreneurId?: Prisma.StringWithAggregatesFilter<"TaxDeclaration"> | string;
    creationDate?: Prisma.DateTimeWithAggregatesFilter<"TaxDeclaration"> | Date | string;
};
export type TaxDeclarationCreateInput = {
    id?: string;
    period: string;
    year: number;
    month?: number | null;
    totalRevenue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: number;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.DeclarationStatus;
    dueDate?: Date | string | null;
    paymentDate?: Date | string | null;
    pdfUrl?: string | null;
    creationDate?: Date | string;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutTaxDeclarationsInput;
};
export type TaxDeclarationUncheckedCreateInput = {
    id?: string;
    period: string;
    year: number;
    month?: number | null;
    totalRevenue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: number;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.DeclarationStatus;
    dueDate?: Date | string | null;
    paymentDate?: Date | string | null;
    pdfUrl?: string | null;
    AutoEntrepreneurId: string;
    creationDate?: Date | string;
};
export type TaxDeclarationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalRevenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumDeclarationStatusFieldUpdateOperationsInput | $Enums.DeclarationStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paymentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutTaxDeclarationsNestedInput;
};
export type TaxDeclarationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalRevenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumDeclarationStatusFieldUpdateOperationsInput | $Enums.DeclarationStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paymentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxDeclarationCreateManyInput = {
    id?: string;
    period: string;
    year: number;
    month?: number | null;
    totalRevenue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: number;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.DeclarationStatus;
    dueDate?: Date | string | null;
    paymentDate?: Date | string | null;
    pdfUrl?: string | null;
    AutoEntrepreneurId: string;
    creationDate?: Date | string;
};
export type TaxDeclarationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalRevenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumDeclarationStatusFieldUpdateOperationsInput | $Enums.DeclarationStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paymentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxDeclarationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalRevenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumDeclarationStatusFieldUpdateOperationsInput | $Enums.DeclarationStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paymentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxDeclarationListRelationFilter = {
    every?: Prisma.TaxDeclarationWhereInput;
    some?: Prisma.TaxDeclarationWhereInput;
    none?: Prisma.TaxDeclarationWhereInput;
};
export type TaxDeclarationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaxDeclarationOrderByRelevanceInput = {
    fields: Prisma.TaxDeclarationOrderByRelevanceFieldEnum | Prisma.TaxDeclarationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type TaxDeclarationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    totalRevenue?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    paymentDate?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
};
export type TaxDeclarationAvgOrderByAggregateInput = {
    year?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    totalRevenue?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
};
export type TaxDeclarationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    totalRevenue?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    paymentDate?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
};
export type TaxDeclarationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    totalRevenue?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    paymentDate?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
};
export type TaxDeclarationSumOrderByAggregateInput = {
    year?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    totalRevenue?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
};
export type TaxDeclarationCreateNestedManyWithoutAutoEntrepreneurInput = {
    create?: Prisma.XOR<Prisma.TaxDeclarationCreateWithoutAutoEntrepreneurInput, Prisma.TaxDeclarationUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.TaxDeclarationCreateWithoutAutoEntrepreneurInput[] | Prisma.TaxDeclarationUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.TaxDeclarationCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.TaxDeclarationCreateOrConnectWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.TaxDeclarationCreateManyAutoEntrepreneurInputEnvelope;
    connect?: Prisma.TaxDeclarationWhereUniqueInput | Prisma.TaxDeclarationWhereUniqueInput[];
};
export type TaxDeclarationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput = {
    create?: Prisma.XOR<Prisma.TaxDeclarationCreateWithoutAutoEntrepreneurInput, Prisma.TaxDeclarationUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.TaxDeclarationCreateWithoutAutoEntrepreneurInput[] | Prisma.TaxDeclarationUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.TaxDeclarationCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.TaxDeclarationCreateOrConnectWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.TaxDeclarationCreateManyAutoEntrepreneurInputEnvelope;
    connect?: Prisma.TaxDeclarationWhereUniqueInput | Prisma.TaxDeclarationWhereUniqueInput[];
};
export type TaxDeclarationUpdateManyWithoutAutoEntrepreneurNestedInput = {
    create?: Prisma.XOR<Prisma.TaxDeclarationCreateWithoutAutoEntrepreneurInput, Prisma.TaxDeclarationUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.TaxDeclarationCreateWithoutAutoEntrepreneurInput[] | Prisma.TaxDeclarationUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.TaxDeclarationCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.TaxDeclarationCreateOrConnectWithoutAutoEntrepreneurInput[];
    upsert?: Prisma.TaxDeclarationUpsertWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.TaxDeclarationUpsertWithWhereUniqueWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.TaxDeclarationCreateManyAutoEntrepreneurInputEnvelope;
    set?: Prisma.TaxDeclarationWhereUniqueInput | Prisma.TaxDeclarationWhereUniqueInput[];
    disconnect?: Prisma.TaxDeclarationWhereUniqueInput | Prisma.TaxDeclarationWhereUniqueInput[];
    delete?: Prisma.TaxDeclarationWhereUniqueInput | Prisma.TaxDeclarationWhereUniqueInput[];
    connect?: Prisma.TaxDeclarationWhereUniqueInput | Prisma.TaxDeclarationWhereUniqueInput[];
    update?: Prisma.TaxDeclarationUpdateWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.TaxDeclarationUpdateWithWhereUniqueWithoutAutoEntrepreneurInput[];
    updateMany?: Prisma.TaxDeclarationUpdateManyWithWhereWithoutAutoEntrepreneurInput | Prisma.TaxDeclarationUpdateManyWithWhereWithoutAutoEntrepreneurInput[];
    deleteMany?: Prisma.TaxDeclarationScalarWhereInput | Prisma.TaxDeclarationScalarWhereInput[];
};
export type TaxDeclarationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput = {
    create?: Prisma.XOR<Prisma.TaxDeclarationCreateWithoutAutoEntrepreneurInput, Prisma.TaxDeclarationUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.TaxDeclarationCreateWithoutAutoEntrepreneurInput[] | Prisma.TaxDeclarationUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.TaxDeclarationCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.TaxDeclarationCreateOrConnectWithoutAutoEntrepreneurInput[];
    upsert?: Prisma.TaxDeclarationUpsertWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.TaxDeclarationUpsertWithWhereUniqueWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.TaxDeclarationCreateManyAutoEntrepreneurInputEnvelope;
    set?: Prisma.TaxDeclarationWhereUniqueInput | Prisma.TaxDeclarationWhereUniqueInput[];
    disconnect?: Prisma.TaxDeclarationWhereUniqueInput | Prisma.TaxDeclarationWhereUniqueInput[];
    delete?: Prisma.TaxDeclarationWhereUniqueInput | Prisma.TaxDeclarationWhereUniqueInput[];
    connect?: Prisma.TaxDeclarationWhereUniqueInput | Prisma.TaxDeclarationWhereUniqueInput[];
    update?: Prisma.TaxDeclarationUpdateWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.TaxDeclarationUpdateWithWhereUniqueWithoutAutoEntrepreneurInput[];
    updateMany?: Prisma.TaxDeclarationUpdateManyWithWhereWithoutAutoEntrepreneurInput | Prisma.TaxDeclarationUpdateManyWithWhereWithoutAutoEntrepreneurInput[];
    deleteMany?: Prisma.TaxDeclarationScalarWhereInput | Prisma.TaxDeclarationScalarWhereInput[];
};
export type EnumDeclarationStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeclarationStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type TaxDeclarationCreateWithoutAutoEntrepreneurInput = {
    id?: string;
    period: string;
    year: number;
    month?: number | null;
    totalRevenue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: number;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.DeclarationStatus;
    dueDate?: Date | string | null;
    paymentDate?: Date | string | null;
    pdfUrl?: string | null;
    creationDate?: Date | string;
};
export type TaxDeclarationUncheckedCreateWithoutAutoEntrepreneurInput = {
    id?: string;
    period: string;
    year: number;
    month?: number | null;
    totalRevenue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: number;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.DeclarationStatus;
    dueDate?: Date | string | null;
    paymentDate?: Date | string | null;
    pdfUrl?: string | null;
    creationDate?: Date | string;
};
export type TaxDeclarationCreateOrConnectWithoutAutoEntrepreneurInput = {
    where: Prisma.TaxDeclarationWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxDeclarationCreateWithoutAutoEntrepreneurInput, Prisma.TaxDeclarationUncheckedCreateWithoutAutoEntrepreneurInput>;
};
export type TaxDeclarationCreateManyAutoEntrepreneurInputEnvelope = {
    data: Prisma.TaxDeclarationCreateManyAutoEntrepreneurInput | Prisma.TaxDeclarationCreateManyAutoEntrepreneurInput[];
    skipDuplicates?: boolean;
};
export type TaxDeclarationUpsertWithWhereUniqueWithoutAutoEntrepreneurInput = {
    where: Prisma.TaxDeclarationWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaxDeclarationUpdateWithoutAutoEntrepreneurInput, Prisma.TaxDeclarationUncheckedUpdateWithoutAutoEntrepreneurInput>;
    create: Prisma.XOR<Prisma.TaxDeclarationCreateWithoutAutoEntrepreneurInput, Prisma.TaxDeclarationUncheckedCreateWithoutAutoEntrepreneurInput>;
};
export type TaxDeclarationUpdateWithWhereUniqueWithoutAutoEntrepreneurInput = {
    where: Prisma.TaxDeclarationWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaxDeclarationUpdateWithoutAutoEntrepreneurInput, Prisma.TaxDeclarationUncheckedUpdateWithoutAutoEntrepreneurInput>;
};
export type TaxDeclarationUpdateManyWithWhereWithoutAutoEntrepreneurInput = {
    where: Prisma.TaxDeclarationScalarWhereInput;
    data: Prisma.XOR<Prisma.TaxDeclarationUpdateManyMutationInput, Prisma.TaxDeclarationUncheckedUpdateManyWithoutAutoEntrepreneurInput>;
};
export type TaxDeclarationScalarWhereInput = {
    AND?: Prisma.TaxDeclarationScalarWhereInput | Prisma.TaxDeclarationScalarWhereInput[];
    OR?: Prisma.TaxDeclarationScalarWhereInput[];
    NOT?: Prisma.TaxDeclarationScalarWhereInput | Prisma.TaxDeclarationScalarWhereInput[];
    id?: Prisma.StringFilter<"TaxDeclaration"> | string;
    period?: Prisma.StringFilter<"TaxDeclaration"> | string;
    year?: Prisma.IntFilter<"TaxDeclaration"> | number;
    month?: Prisma.IntNullableFilter<"TaxDeclaration"> | number | null;
    totalRevenue?: Prisma.DecimalFilter<"TaxDeclaration"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: Prisma.FloatFilter<"TaxDeclaration"> | number;
    taxAmount?: Prisma.DecimalFilter<"TaxDeclaration"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumDeclarationStatusFilter<"TaxDeclaration"> | $Enums.DeclarationStatus;
    dueDate?: Prisma.DateTimeNullableFilter<"TaxDeclaration"> | Date | string | null;
    paymentDate?: Prisma.DateTimeNullableFilter<"TaxDeclaration"> | Date | string | null;
    pdfUrl?: Prisma.StringNullableFilter<"TaxDeclaration"> | string | null;
    AutoEntrepreneurId?: Prisma.StringFilter<"TaxDeclaration"> | string;
    creationDate?: Prisma.DateTimeFilter<"TaxDeclaration"> | Date | string;
};
export type TaxDeclarationCreateManyAutoEntrepreneurInput = {
    id?: string;
    period: string;
    year: number;
    month?: number | null;
    totalRevenue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: number;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.DeclarationStatus;
    dueDate?: Date | string | null;
    paymentDate?: Date | string | null;
    pdfUrl?: string | null;
    creationDate?: Date | string;
};
export type TaxDeclarationUpdateWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalRevenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumDeclarationStatusFieldUpdateOperationsInput | $Enums.DeclarationStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paymentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxDeclarationUncheckedUpdateWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalRevenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumDeclarationStatusFieldUpdateOperationsInput | $Enums.DeclarationStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paymentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxDeclarationUncheckedUpdateManyWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalRevenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumDeclarationStatusFieldUpdateOperationsInput | $Enums.DeclarationStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paymentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxDeclarationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    period?: boolean;
    year?: boolean;
    month?: boolean;
    totalRevenue?: boolean;
    taxRate?: boolean;
    taxAmount?: boolean;
    status?: boolean;
    dueDate?: boolean;
    paymentDate?: boolean;
    pdfUrl?: boolean;
    AutoEntrepreneurId?: boolean;
    creationDate?: boolean;
    AutoEntrepreneur?: boolean | Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taxDeclaration"]>;
export type TaxDeclarationSelectScalar = {
    id?: boolean;
    period?: boolean;
    year?: boolean;
    month?: boolean;
    totalRevenue?: boolean;
    taxRate?: boolean;
    taxAmount?: boolean;
    status?: boolean;
    dueDate?: boolean;
    paymentDate?: boolean;
    pdfUrl?: boolean;
    AutoEntrepreneurId?: boolean;
    creationDate?: boolean;
};
export type TaxDeclarationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "period" | "year" | "month" | "totalRevenue" | "taxRate" | "taxAmount" | "status" | "dueDate" | "paymentDate" | "pdfUrl" | "AutoEntrepreneurId" | "creationDate", ExtArgs["result"]["taxDeclaration"]>;
export type TaxDeclarationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    AutoEntrepreneur?: boolean | Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>;
};
export type $TaxDeclarationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaxDeclaration";
    objects: {
        AutoEntrepreneur: Prisma.$AutoEntrepreneurPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        period: string;
        year: number;
        month: number | null;
        totalRevenue: runtime.Decimal;
        taxRate: number;
        taxAmount: runtime.Decimal;
        status: $Enums.DeclarationStatus;
        dueDate: Date | null;
        paymentDate: Date | null;
        pdfUrl: string | null;
        AutoEntrepreneurId: string;
        creationDate: Date;
    }, ExtArgs["result"]["taxDeclaration"]>;
    composites: {};
};
export type TaxDeclarationGetPayload<S extends boolean | null | undefined | TaxDeclarationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaxDeclarationPayload, S>;
export type TaxDeclarationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaxDeclarationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaxDeclarationCountAggregateInputType | true;
};
export interface TaxDeclarationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaxDeclaration'];
        meta: {
            name: 'TaxDeclaration';
        };
    };
    /**
     * Find zero or one TaxDeclaration that matches the filter.
     * @param {TaxDeclarationFindUniqueArgs} args - Arguments to find a TaxDeclaration
     * @example
     * // Get one TaxDeclaration
     * const taxDeclaration = await prisma.taxDeclaration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxDeclarationFindUniqueArgs>(args: Prisma.SelectSubset<T, TaxDeclarationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaxDeclarationClient<runtime.Types.Result.GetResult<Prisma.$TaxDeclarationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TaxDeclaration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxDeclarationFindUniqueOrThrowArgs} args - Arguments to find a TaxDeclaration
     * @example
     * // Get one TaxDeclaration
     * const taxDeclaration = await prisma.taxDeclaration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxDeclarationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaxDeclarationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxDeclarationClient<runtime.Types.Result.GetResult<Prisma.$TaxDeclarationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TaxDeclaration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxDeclarationFindFirstArgs} args - Arguments to find a TaxDeclaration
     * @example
     * // Get one TaxDeclaration
     * const taxDeclaration = await prisma.taxDeclaration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxDeclarationFindFirstArgs>(args?: Prisma.SelectSubset<T, TaxDeclarationFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaxDeclarationClient<runtime.Types.Result.GetResult<Prisma.$TaxDeclarationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TaxDeclaration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxDeclarationFindFirstOrThrowArgs} args - Arguments to find a TaxDeclaration
     * @example
     * // Get one TaxDeclaration
     * const taxDeclaration = await prisma.taxDeclaration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxDeclarationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaxDeclarationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxDeclarationClient<runtime.Types.Result.GetResult<Prisma.$TaxDeclarationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TaxDeclarations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxDeclarationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaxDeclarations
     * const taxDeclarations = await prisma.taxDeclaration.findMany()
     *
     * // Get first 10 TaxDeclarations
     * const taxDeclarations = await prisma.taxDeclaration.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const taxDeclarationWithIdOnly = await prisma.taxDeclaration.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TaxDeclarationFindManyArgs>(args?: Prisma.SelectSubset<T, TaxDeclarationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxDeclarationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TaxDeclaration.
     * @param {TaxDeclarationCreateArgs} args - Arguments to create a TaxDeclaration.
     * @example
     * // Create one TaxDeclaration
     * const TaxDeclaration = await prisma.taxDeclaration.create({
     *   data: {
     *     // ... data to create a TaxDeclaration
     *   }
     * })
     *
     */
    create<T extends TaxDeclarationCreateArgs>(args: Prisma.SelectSubset<T, TaxDeclarationCreateArgs<ExtArgs>>): Prisma.Prisma__TaxDeclarationClient<runtime.Types.Result.GetResult<Prisma.$TaxDeclarationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TaxDeclarations.
     * @param {TaxDeclarationCreateManyArgs} args - Arguments to create many TaxDeclarations.
     * @example
     * // Create many TaxDeclarations
     * const taxDeclaration = await prisma.taxDeclaration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TaxDeclarationCreateManyArgs>(args?: Prisma.SelectSubset<T, TaxDeclarationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a TaxDeclaration.
     * @param {TaxDeclarationDeleteArgs} args - Arguments to delete one TaxDeclaration.
     * @example
     * // Delete one TaxDeclaration
     * const TaxDeclaration = await prisma.taxDeclaration.delete({
     *   where: {
     *     // ... filter to delete one TaxDeclaration
     *   }
     * })
     *
     */
    delete<T extends TaxDeclarationDeleteArgs>(args: Prisma.SelectSubset<T, TaxDeclarationDeleteArgs<ExtArgs>>): Prisma.Prisma__TaxDeclarationClient<runtime.Types.Result.GetResult<Prisma.$TaxDeclarationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TaxDeclaration.
     * @param {TaxDeclarationUpdateArgs} args - Arguments to update one TaxDeclaration.
     * @example
     * // Update one TaxDeclaration
     * const taxDeclaration = await prisma.taxDeclaration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TaxDeclarationUpdateArgs>(args: Prisma.SelectSubset<T, TaxDeclarationUpdateArgs<ExtArgs>>): Prisma.Prisma__TaxDeclarationClient<runtime.Types.Result.GetResult<Prisma.$TaxDeclarationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TaxDeclarations.
     * @param {TaxDeclarationDeleteManyArgs} args - Arguments to filter TaxDeclarations to delete.
     * @example
     * // Delete a few TaxDeclarations
     * const { count } = await prisma.taxDeclaration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TaxDeclarationDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaxDeclarationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TaxDeclarations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxDeclarationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaxDeclarations
     * const taxDeclaration = await prisma.taxDeclaration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TaxDeclarationUpdateManyArgs>(args: Prisma.SelectSubset<T, TaxDeclarationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one TaxDeclaration.
     * @param {TaxDeclarationUpsertArgs} args - Arguments to update or create a TaxDeclaration.
     * @example
     * // Update or create a TaxDeclaration
     * const taxDeclaration = await prisma.taxDeclaration.upsert({
     *   create: {
     *     // ... data to create a TaxDeclaration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaxDeclaration we want to update
     *   }
     * })
     */
    upsert<T extends TaxDeclarationUpsertArgs>(args: Prisma.SelectSubset<T, TaxDeclarationUpsertArgs<ExtArgs>>): Prisma.Prisma__TaxDeclarationClient<runtime.Types.Result.GetResult<Prisma.$TaxDeclarationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TaxDeclarations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxDeclarationCountArgs} args - Arguments to filter TaxDeclarations to count.
     * @example
     * // Count the number of TaxDeclarations
     * const count = await prisma.taxDeclaration.count({
     *   where: {
     *     // ... the filter for the TaxDeclarations we want to count
     *   }
     * })
    **/
    count<T extends TaxDeclarationCountArgs>(args?: Prisma.Subset<T, TaxDeclarationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaxDeclarationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TaxDeclaration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxDeclarationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaxDeclarationAggregateArgs>(args: Prisma.Subset<T, TaxDeclarationAggregateArgs>): Prisma.PrismaPromise<GetTaxDeclarationAggregateType<T>>;
    /**
     * Group by TaxDeclaration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxDeclarationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TaxDeclarationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaxDeclarationGroupByArgs['orderBy'];
    } : {
        orderBy?: TaxDeclarationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaxDeclarationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxDeclarationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TaxDeclaration model
     */
    readonly fields: TaxDeclarationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TaxDeclaration.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TaxDeclarationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    AutoEntrepreneur<T extends Prisma.AutoEntrepreneurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>>): Prisma.Prisma__AutoEntrepreneurClient<runtime.Types.Result.GetResult<Prisma.$AutoEntrepreneurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the TaxDeclaration model
 */
export interface TaxDeclarationFieldRefs {
    readonly id: Prisma.FieldRef<"TaxDeclaration", 'String'>;
    readonly period: Prisma.FieldRef<"TaxDeclaration", 'String'>;
    readonly year: Prisma.FieldRef<"TaxDeclaration", 'Int'>;
    readonly month: Prisma.FieldRef<"TaxDeclaration", 'Int'>;
    readonly totalRevenue: Prisma.FieldRef<"TaxDeclaration", 'Decimal'>;
    readonly taxRate: Prisma.FieldRef<"TaxDeclaration", 'Float'>;
    readonly taxAmount: Prisma.FieldRef<"TaxDeclaration", 'Decimal'>;
    readonly status: Prisma.FieldRef<"TaxDeclaration", 'DeclarationStatus'>;
    readonly dueDate: Prisma.FieldRef<"TaxDeclaration", 'DateTime'>;
    readonly paymentDate: Prisma.FieldRef<"TaxDeclaration", 'DateTime'>;
    readonly pdfUrl: Prisma.FieldRef<"TaxDeclaration", 'String'>;
    readonly AutoEntrepreneurId: Prisma.FieldRef<"TaxDeclaration", 'String'>;
    readonly creationDate: Prisma.FieldRef<"TaxDeclaration", 'DateTime'>;
}
/**
 * TaxDeclaration findUnique
 */
export type TaxDeclarationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxDeclaration
     */
    select?: Prisma.TaxDeclarationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxDeclaration
     */
    omit?: Prisma.TaxDeclarationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxDeclarationInclude<ExtArgs> | null;
    /**
     * Filter, which TaxDeclaration to fetch.
     */
    where: Prisma.TaxDeclarationWhereUniqueInput;
};
/**
 * TaxDeclaration findUniqueOrThrow
 */
export type TaxDeclarationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxDeclaration
     */
    select?: Prisma.TaxDeclarationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxDeclaration
     */
    omit?: Prisma.TaxDeclarationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxDeclarationInclude<ExtArgs> | null;
    /**
     * Filter, which TaxDeclaration to fetch.
     */
    where: Prisma.TaxDeclarationWhereUniqueInput;
};
/**
 * TaxDeclaration findFirst
 */
export type TaxDeclarationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxDeclaration
     */
    select?: Prisma.TaxDeclarationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxDeclaration
     */
    omit?: Prisma.TaxDeclarationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxDeclarationInclude<ExtArgs> | null;
    /**
     * Filter, which TaxDeclaration to fetch.
     */
    where?: Prisma.TaxDeclarationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaxDeclarations to fetch.
     */
    orderBy?: Prisma.TaxDeclarationOrderByWithRelationInput | Prisma.TaxDeclarationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TaxDeclarations.
     */
    cursor?: Prisma.TaxDeclarationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaxDeclarations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaxDeclarations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TaxDeclarations.
     */
    distinct?: Prisma.TaxDeclarationScalarFieldEnum | Prisma.TaxDeclarationScalarFieldEnum[];
};
/**
 * TaxDeclaration findFirstOrThrow
 */
export type TaxDeclarationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxDeclaration
     */
    select?: Prisma.TaxDeclarationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxDeclaration
     */
    omit?: Prisma.TaxDeclarationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxDeclarationInclude<ExtArgs> | null;
    /**
     * Filter, which TaxDeclaration to fetch.
     */
    where?: Prisma.TaxDeclarationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaxDeclarations to fetch.
     */
    orderBy?: Prisma.TaxDeclarationOrderByWithRelationInput | Prisma.TaxDeclarationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TaxDeclarations.
     */
    cursor?: Prisma.TaxDeclarationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaxDeclarations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaxDeclarations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TaxDeclarations.
     */
    distinct?: Prisma.TaxDeclarationScalarFieldEnum | Prisma.TaxDeclarationScalarFieldEnum[];
};
/**
 * TaxDeclaration findMany
 */
export type TaxDeclarationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxDeclaration
     */
    select?: Prisma.TaxDeclarationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxDeclaration
     */
    omit?: Prisma.TaxDeclarationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxDeclarationInclude<ExtArgs> | null;
    /**
     * Filter, which TaxDeclarations to fetch.
     */
    where?: Prisma.TaxDeclarationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaxDeclarations to fetch.
     */
    orderBy?: Prisma.TaxDeclarationOrderByWithRelationInput | Prisma.TaxDeclarationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TaxDeclarations.
     */
    cursor?: Prisma.TaxDeclarationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaxDeclarations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaxDeclarations.
     */
    skip?: number;
    distinct?: Prisma.TaxDeclarationScalarFieldEnum | Prisma.TaxDeclarationScalarFieldEnum[];
};
/**
 * TaxDeclaration create
 */
export type TaxDeclarationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxDeclaration
     */
    select?: Prisma.TaxDeclarationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxDeclaration
     */
    omit?: Prisma.TaxDeclarationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxDeclarationInclude<ExtArgs> | null;
    /**
     * The data needed to create a TaxDeclaration.
     */
    data: Prisma.XOR<Prisma.TaxDeclarationCreateInput, Prisma.TaxDeclarationUncheckedCreateInput>;
};
/**
 * TaxDeclaration createMany
 */
export type TaxDeclarationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaxDeclarations.
     */
    data: Prisma.TaxDeclarationCreateManyInput | Prisma.TaxDeclarationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TaxDeclaration update
 */
export type TaxDeclarationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxDeclaration
     */
    select?: Prisma.TaxDeclarationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxDeclaration
     */
    omit?: Prisma.TaxDeclarationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxDeclarationInclude<ExtArgs> | null;
    /**
     * The data needed to update a TaxDeclaration.
     */
    data: Prisma.XOR<Prisma.TaxDeclarationUpdateInput, Prisma.TaxDeclarationUncheckedUpdateInput>;
    /**
     * Choose, which TaxDeclaration to update.
     */
    where: Prisma.TaxDeclarationWhereUniqueInput;
};
/**
 * TaxDeclaration updateMany
 */
export type TaxDeclarationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TaxDeclarations.
     */
    data: Prisma.XOR<Prisma.TaxDeclarationUpdateManyMutationInput, Prisma.TaxDeclarationUncheckedUpdateManyInput>;
    /**
     * Filter which TaxDeclarations to update
     */
    where?: Prisma.TaxDeclarationWhereInput;
    /**
     * Limit how many TaxDeclarations to update.
     */
    limit?: number;
};
/**
 * TaxDeclaration upsert
 */
export type TaxDeclarationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxDeclaration
     */
    select?: Prisma.TaxDeclarationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxDeclaration
     */
    omit?: Prisma.TaxDeclarationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxDeclarationInclude<ExtArgs> | null;
    /**
     * The filter to search for the TaxDeclaration to update in case it exists.
     */
    where: Prisma.TaxDeclarationWhereUniqueInput;
    /**
     * In case the TaxDeclaration found by the `where` argument doesn't exist, create a new TaxDeclaration with this data.
     */
    create: Prisma.XOR<Prisma.TaxDeclarationCreateInput, Prisma.TaxDeclarationUncheckedCreateInput>;
    /**
     * In case the TaxDeclaration was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TaxDeclarationUpdateInput, Prisma.TaxDeclarationUncheckedUpdateInput>;
};
/**
 * TaxDeclaration delete
 */
export type TaxDeclarationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxDeclaration
     */
    select?: Prisma.TaxDeclarationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxDeclaration
     */
    omit?: Prisma.TaxDeclarationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxDeclarationInclude<ExtArgs> | null;
    /**
     * Filter which TaxDeclaration to delete.
     */
    where: Prisma.TaxDeclarationWhereUniqueInput;
};
/**
 * TaxDeclaration deleteMany
 */
export type TaxDeclarationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TaxDeclarations to delete
     */
    where?: Prisma.TaxDeclarationWhereInput;
    /**
     * Limit how many TaxDeclarations to delete.
     */
    limit?: number;
};
/**
 * TaxDeclaration without action
 */
export type TaxDeclarationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxDeclaration
     */
    select?: Prisma.TaxDeclarationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaxDeclaration
     */
    omit?: Prisma.TaxDeclarationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaxDeclarationInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=TaxDeclaration.d.ts.map
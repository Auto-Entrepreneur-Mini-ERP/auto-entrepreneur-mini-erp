import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AutoEntrepreneur
 *
 */
export type AutoEntrepreneurModel = runtime.Types.Result.DefaultSelection<Prisma.$AutoEntrepreneurPayload>;
export type AggregateAutoEntrepreneur = {
    _count: AutoEntrepreneurCountAggregateOutputType | null;
    _avg: AutoEntrepreneurAvgAggregateOutputType | null;
    _sum: AutoEntrepreneurSumAggregateOutputType | null;
    _min: AutoEntrepreneurMinAggregateOutputType | null;
    _max: AutoEntrepreneurMaxAggregateOutputType | null;
};
export type AutoEntrepreneurAvgAggregateOutputType = {
    taxRate: number | null;
    passwordResetTokenExpiration: number | null;
};
export type AutoEntrepreneurSumAggregateOutputType = {
    taxRate: number | null;
    passwordResetTokenExpiration: bigint | null;
};
export type AutoEntrepreneurMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    password: string | null;
    businessName: string | null;
    activityType: $Enums.ActivityType | null;
    taxRate: number | null;
    ice: string | null;
    logo: string | null;
    creationDate: Date | null;
    updateDate: Date | null;
    passwordResetToken: string | null;
    passwordResetTokenExpiration: bigint | null;
};
export type AutoEntrepreneurMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    password: string | null;
    businessName: string | null;
    activityType: $Enums.ActivityType | null;
    taxRate: number | null;
    ice: string | null;
    logo: string | null;
    creationDate: Date | null;
    updateDate: Date | null;
    passwordResetToken: string | null;
    passwordResetTokenExpiration: bigint | null;
};
export type AutoEntrepreneurCountAggregateOutputType = {
    id: number;
    userId: number;
    password: number;
    businessName: number;
    activityType: number;
    taxRate: number;
    ice: number;
    logo: number;
    creationDate: number;
    updateDate: number;
    passwordResetToken: number;
    passwordResetTokenExpiration: number;
    _all: number;
};
export type AutoEntrepreneurAvgAggregateInputType = {
    taxRate?: true;
    passwordResetTokenExpiration?: true;
};
export type AutoEntrepreneurSumAggregateInputType = {
    taxRate?: true;
    passwordResetTokenExpiration?: true;
};
export type AutoEntrepreneurMinAggregateInputType = {
    id?: true;
    userId?: true;
    password?: true;
    businessName?: true;
    activityType?: true;
    taxRate?: true;
    ice?: true;
    logo?: true;
    creationDate?: true;
    updateDate?: true;
    passwordResetToken?: true;
    passwordResetTokenExpiration?: true;
};
export type AutoEntrepreneurMaxAggregateInputType = {
    id?: true;
    userId?: true;
    password?: true;
    businessName?: true;
    activityType?: true;
    taxRate?: true;
    ice?: true;
    logo?: true;
    creationDate?: true;
    updateDate?: true;
    passwordResetToken?: true;
    passwordResetTokenExpiration?: true;
};
export type AutoEntrepreneurCountAggregateInputType = {
    id?: true;
    userId?: true;
    password?: true;
    businessName?: true;
    activityType?: true;
    taxRate?: true;
    ice?: true;
    logo?: true;
    creationDate?: true;
    updateDate?: true;
    passwordResetToken?: true;
    passwordResetTokenExpiration?: true;
    _all?: true;
};
export type AutoEntrepreneurAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AutoEntrepreneur to aggregate.
     */
    where?: Prisma.AutoEntrepreneurWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AutoEntrepreneurs to fetch.
     */
    orderBy?: Prisma.AutoEntrepreneurOrderByWithRelationInput | Prisma.AutoEntrepreneurOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AutoEntrepreneurWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AutoEntrepreneurs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AutoEntrepreneurs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AutoEntrepreneurs
    **/
    _count?: true | AutoEntrepreneurCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AutoEntrepreneurAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AutoEntrepreneurSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AutoEntrepreneurMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AutoEntrepreneurMaxAggregateInputType;
};
export type GetAutoEntrepreneurAggregateType<T extends AutoEntrepreneurAggregateArgs> = {
    [P in keyof T & keyof AggregateAutoEntrepreneur]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAutoEntrepreneur[P]> : Prisma.GetScalarType<T[P], AggregateAutoEntrepreneur[P]>;
};
export type AutoEntrepreneurGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AutoEntrepreneurWhereInput;
    orderBy?: Prisma.AutoEntrepreneurOrderByWithAggregationInput | Prisma.AutoEntrepreneurOrderByWithAggregationInput[];
    by: Prisma.AutoEntrepreneurScalarFieldEnum[] | Prisma.AutoEntrepreneurScalarFieldEnum;
    having?: Prisma.AutoEntrepreneurScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AutoEntrepreneurCountAggregateInputType | true;
    _avg?: AutoEntrepreneurAvgAggregateInputType;
    _sum?: AutoEntrepreneurSumAggregateInputType;
    _min?: AutoEntrepreneurMinAggregateInputType;
    _max?: AutoEntrepreneurMaxAggregateInputType;
};
export type AutoEntrepreneurGroupByOutputType = {
    id: string;
    userId: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate: number;
    ice: string;
    logo: string | null;
    creationDate: Date;
    updateDate: Date;
    passwordResetToken: string | null;
    passwordResetTokenExpiration: bigint | null;
    _count: AutoEntrepreneurCountAggregateOutputType | null;
    _avg: AutoEntrepreneurAvgAggregateOutputType | null;
    _sum: AutoEntrepreneurSumAggregateOutputType | null;
    _min: AutoEntrepreneurMinAggregateOutputType | null;
    _max: AutoEntrepreneurMaxAggregateOutputType | null;
};
type GetAutoEntrepreneurGroupByPayload<T extends AutoEntrepreneurGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AutoEntrepreneurGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AutoEntrepreneurGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AutoEntrepreneurGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AutoEntrepreneurGroupByOutputType[P]>;
}>>;
export type AutoEntrepreneurWhereInput = {
    AND?: Prisma.AutoEntrepreneurWhereInput | Prisma.AutoEntrepreneurWhereInput[];
    OR?: Prisma.AutoEntrepreneurWhereInput[];
    NOT?: Prisma.AutoEntrepreneurWhereInput | Prisma.AutoEntrepreneurWhereInput[];
    id?: Prisma.StringFilter<"AutoEntrepreneur"> | string;
    userId?: Prisma.StringFilter<"AutoEntrepreneur"> | string;
    password?: Prisma.StringFilter<"AutoEntrepreneur"> | string;
    businessName?: Prisma.StringFilter<"AutoEntrepreneur"> | string;
    activityType?: Prisma.EnumActivityTypeFilter<"AutoEntrepreneur"> | $Enums.ActivityType;
    taxRate?: Prisma.FloatFilter<"AutoEntrepreneur"> | number;
    ice?: Prisma.StringFilter<"AutoEntrepreneur"> | string;
    logo?: Prisma.StringNullableFilter<"AutoEntrepreneur"> | string | null;
    creationDate?: Prisma.DateTimeFilter<"AutoEntrepreneur"> | Date | string;
    updateDate?: Prisma.DateTimeFilter<"AutoEntrepreneur"> | Date | string;
    passwordResetToken?: Prisma.StringNullableFilter<"AutoEntrepreneur"> | string | null;
    passwordResetTokenExpiration?: Prisma.BigIntNullableFilter<"AutoEntrepreneur"> | bigint | number | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    customers?: Prisma.CustomerListRelationFilter;
    products?: Prisma.ProductListRelationFilter;
    services?: Prisma.ServiceListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
    quotes?: Prisma.QuoteListRelationFilter;
    payments?: Prisma.PaymentListRelationFilter;
    expenses?: Prisma.ExpenseListRelationFilter;
    documents?: Prisma.DocumentListRelationFilter;
    taxDeclarations?: Prisma.TaxDeclarationListRelationFilter;
    contributions?: Prisma.ContributionListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
};
export type AutoEntrepreneurOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    businessName?: Prisma.SortOrder;
    activityType?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    ice?: Prisma.SortOrder;
    logo?: Prisma.SortOrderInput | Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    updateDate?: Prisma.SortOrder;
    passwordResetToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordResetTokenExpiration?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    customers?: Prisma.CustomerOrderByRelationAggregateInput;
    products?: Prisma.ProductOrderByRelationAggregateInput;
    services?: Prisma.ServiceOrderByRelationAggregateInput;
    invoices?: Prisma.InvoiceOrderByRelationAggregateInput;
    quotes?: Prisma.QuoteOrderByRelationAggregateInput;
    payments?: Prisma.PaymentOrderByRelationAggregateInput;
    expenses?: Prisma.ExpenseOrderByRelationAggregateInput;
    documents?: Prisma.DocumentOrderByRelationAggregateInput;
    taxDeclarations?: Prisma.TaxDeclarationOrderByRelationAggregateInput;
    contributions?: Prisma.ContributionOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    _relevance?: Prisma.AutoEntrepreneurOrderByRelevanceInput;
};
export type AutoEntrepreneurWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    ice?: string;
    AND?: Prisma.AutoEntrepreneurWhereInput | Prisma.AutoEntrepreneurWhereInput[];
    OR?: Prisma.AutoEntrepreneurWhereInput[];
    NOT?: Prisma.AutoEntrepreneurWhereInput | Prisma.AutoEntrepreneurWhereInput[];
    password?: Prisma.StringFilter<"AutoEntrepreneur"> | string;
    businessName?: Prisma.StringFilter<"AutoEntrepreneur"> | string;
    activityType?: Prisma.EnumActivityTypeFilter<"AutoEntrepreneur"> | $Enums.ActivityType;
    taxRate?: Prisma.FloatFilter<"AutoEntrepreneur"> | number;
    logo?: Prisma.StringNullableFilter<"AutoEntrepreneur"> | string | null;
    creationDate?: Prisma.DateTimeFilter<"AutoEntrepreneur"> | Date | string;
    updateDate?: Prisma.DateTimeFilter<"AutoEntrepreneur"> | Date | string;
    passwordResetToken?: Prisma.StringNullableFilter<"AutoEntrepreneur"> | string | null;
    passwordResetTokenExpiration?: Prisma.BigIntNullableFilter<"AutoEntrepreneur"> | bigint | number | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    customers?: Prisma.CustomerListRelationFilter;
    products?: Prisma.ProductListRelationFilter;
    services?: Prisma.ServiceListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
    quotes?: Prisma.QuoteListRelationFilter;
    payments?: Prisma.PaymentListRelationFilter;
    expenses?: Prisma.ExpenseListRelationFilter;
    documents?: Prisma.DocumentListRelationFilter;
    taxDeclarations?: Prisma.TaxDeclarationListRelationFilter;
    contributions?: Prisma.ContributionListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
}, "id" | "userId" | "ice">;
export type AutoEntrepreneurOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    businessName?: Prisma.SortOrder;
    activityType?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    ice?: Prisma.SortOrder;
    logo?: Prisma.SortOrderInput | Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    updateDate?: Prisma.SortOrder;
    passwordResetToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordResetTokenExpiration?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AutoEntrepreneurCountOrderByAggregateInput;
    _avg?: Prisma.AutoEntrepreneurAvgOrderByAggregateInput;
    _max?: Prisma.AutoEntrepreneurMaxOrderByAggregateInput;
    _min?: Prisma.AutoEntrepreneurMinOrderByAggregateInput;
    _sum?: Prisma.AutoEntrepreneurSumOrderByAggregateInput;
};
export type AutoEntrepreneurScalarWhereWithAggregatesInput = {
    AND?: Prisma.AutoEntrepreneurScalarWhereWithAggregatesInput | Prisma.AutoEntrepreneurScalarWhereWithAggregatesInput[];
    OR?: Prisma.AutoEntrepreneurScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AutoEntrepreneurScalarWhereWithAggregatesInput | Prisma.AutoEntrepreneurScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AutoEntrepreneur"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"AutoEntrepreneur"> | string;
    password?: Prisma.StringWithAggregatesFilter<"AutoEntrepreneur"> | string;
    businessName?: Prisma.StringWithAggregatesFilter<"AutoEntrepreneur"> | string;
    activityType?: Prisma.EnumActivityTypeWithAggregatesFilter<"AutoEntrepreneur"> | $Enums.ActivityType;
    taxRate?: Prisma.FloatWithAggregatesFilter<"AutoEntrepreneur"> | number;
    ice?: Prisma.StringWithAggregatesFilter<"AutoEntrepreneur"> | string;
    logo?: Prisma.StringNullableWithAggregatesFilter<"AutoEntrepreneur"> | string | null;
    creationDate?: Prisma.DateTimeWithAggregatesFilter<"AutoEntrepreneur"> | Date | string;
    updateDate?: Prisma.DateTimeWithAggregatesFilter<"AutoEntrepreneur"> | Date | string;
    passwordResetToken?: Prisma.StringNullableWithAggregatesFilter<"AutoEntrepreneur"> | string | null;
    passwordResetTokenExpiration?: Prisma.BigIntNullableWithAggregatesFilter<"AutoEntrepreneur"> | bigint | number | null;
};
export type AutoEntrepreneurCreateInput = {
    id?: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    user: Prisma.UserCreateNestedOneWithoutAutoEntrepreneurInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurUncheckedCreateInput = {
    id?: string;
    userId: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    user?: Prisma.UserUpdateOneRequiredWithoutAutoEntrepreneurNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurCreateManyInput = {
    id?: string;
    userId: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
};
export type AutoEntrepreneurUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type AutoEntrepreneurUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type AutoEntrepreneurNullableScalarRelationFilter = {
    is?: Prisma.AutoEntrepreneurWhereInput | null;
    isNot?: Prisma.AutoEntrepreneurWhereInput | null;
};
export type AutoEntrepreneurOrderByRelevanceInput = {
    fields: Prisma.AutoEntrepreneurOrderByRelevanceFieldEnum | Prisma.AutoEntrepreneurOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AutoEntrepreneurCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    businessName?: Prisma.SortOrder;
    activityType?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    ice?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    updateDate?: Prisma.SortOrder;
    passwordResetToken?: Prisma.SortOrder;
    passwordResetTokenExpiration?: Prisma.SortOrder;
};
export type AutoEntrepreneurAvgOrderByAggregateInput = {
    taxRate?: Prisma.SortOrder;
    passwordResetTokenExpiration?: Prisma.SortOrder;
};
export type AutoEntrepreneurMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    businessName?: Prisma.SortOrder;
    activityType?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    ice?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    updateDate?: Prisma.SortOrder;
    passwordResetToken?: Prisma.SortOrder;
    passwordResetTokenExpiration?: Prisma.SortOrder;
};
export type AutoEntrepreneurMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    businessName?: Prisma.SortOrder;
    activityType?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    ice?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    updateDate?: Prisma.SortOrder;
    passwordResetToken?: Prisma.SortOrder;
    passwordResetTokenExpiration?: Prisma.SortOrder;
};
export type AutoEntrepreneurSumOrderByAggregateInput = {
    taxRate?: Prisma.SortOrder;
    passwordResetTokenExpiration?: Prisma.SortOrder;
};
export type AutoEntrepreneurScalarRelationFilter = {
    is?: Prisma.AutoEntrepreneurWhereInput;
    isNot?: Prisma.AutoEntrepreneurWhereInput;
};
export type AutoEntrepreneurCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutUserInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutUserInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
};
export type AutoEntrepreneurUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutUserInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutUserInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
};
export type AutoEntrepreneurUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutUserInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutUserInput;
    upsert?: Prisma.AutoEntrepreneurUpsertWithoutUserInput;
    disconnect?: Prisma.AutoEntrepreneurWhereInput | boolean;
    delete?: Prisma.AutoEntrepreneurWhereInput | boolean;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AutoEntrepreneurUpdateToOneWithWhereWithoutUserInput, Prisma.AutoEntrepreneurUpdateWithoutUserInput>, Prisma.AutoEntrepreneurUncheckedUpdateWithoutUserInput>;
};
export type AutoEntrepreneurUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutUserInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutUserInput;
    upsert?: Prisma.AutoEntrepreneurUpsertWithoutUserInput;
    disconnect?: Prisma.AutoEntrepreneurWhereInput | boolean;
    delete?: Prisma.AutoEntrepreneurWhereInput | boolean;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AutoEntrepreneurUpdateToOneWithWhereWithoutUserInput, Prisma.AutoEntrepreneurUpdateWithoutUserInput>, Prisma.AutoEntrepreneurUncheckedUpdateWithoutUserInput>;
};
export type EnumActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityType;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type AutoEntrepreneurCreateNestedOneWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutCustomersInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutCustomersInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutCustomersInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
};
export type AutoEntrepreneurUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutCustomersInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutCustomersInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutCustomersInput;
    upsert?: Prisma.AutoEntrepreneurUpsertWithoutCustomersInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AutoEntrepreneurUpdateToOneWithWhereWithoutCustomersInput, Prisma.AutoEntrepreneurUpdateWithoutCustomersInput>, Prisma.AutoEntrepreneurUncheckedUpdateWithoutCustomersInput>;
};
export type AutoEntrepreneurCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutProductsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutProductsInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
};
export type AutoEntrepreneurUpdateOneRequiredWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutProductsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.AutoEntrepreneurUpsertWithoutProductsInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AutoEntrepreneurUpdateToOneWithWhereWithoutProductsInput, Prisma.AutoEntrepreneurUpdateWithoutProductsInput>, Prisma.AutoEntrepreneurUncheckedUpdateWithoutProductsInput>;
};
export type AutoEntrepreneurCreateNestedOneWithoutServicesInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutServicesInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutServicesInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutServicesInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
};
export type AutoEntrepreneurUpdateOneRequiredWithoutServicesNestedInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutServicesInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutServicesInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutServicesInput;
    upsert?: Prisma.AutoEntrepreneurUpsertWithoutServicesInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AutoEntrepreneurUpdateToOneWithWhereWithoutServicesInput, Prisma.AutoEntrepreneurUpdateWithoutServicesInput>, Prisma.AutoEntrepreneurUncheckedUpdateWithoutServicesInput>;
};
export type AutoEntrepreneurCreateNestedOneWithoutInvoicesInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutInvoicesInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutInvoicesInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
};
export type AutoEntrepreneurUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutInvoicesInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutInvoicesInput;
    upsert?: Prisma.AutoEntrepreneurUpsertWithoutInvoicesInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AutoEntrepreneurUpdateToOneWithWhereWithoutInvoicesInput, Prisma.AutoEntrepreneurUpdateWithoutInvoicesInput>, Prisma.AutoEntrepreneurUncheckedUpdateWithoutInvoicesInput>;
};
export type AutoEntrepreneurCreateNestedOneWithoutQuotesInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutQuotesInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutQuotesInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutQuotesInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
};
export type AutoEntrepreneurUpdateOneRequiredWithoutQuotesNestedInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutQuotesInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutQuotesInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutQuotesInput;
    upsert?: Prisma.AutoEntrepreneurUpsertWithoutQuotesInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AutoEntrepreneurUpdateToOneWithWhereWithoutQuotesInput, Prisma.AutoEntrepreneurUpdateWithoutQuotesInput>, Prisma.AutoEntrepreneurUncheckedUpdateWithoutQuotesInput>;
};
export type AutoEntrepreneurCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutPaymentsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
};
export type AutoEntrepreneurUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutPaymentsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.AutoEntrepreneurUpsertWithoutPaymentsInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AutoEntrepreneurUpdateToOneWithWhereWithoutPaymentsInput, Prisma.AutoEntrepreneurUpdateWithoutPaymentsInput>, Prisma.AutoEntrepreneurUncheckedUpdateWithoutPaymentsInput>;
};
export type AutoEntrepreneurCreateNestedOneWithoutExpensesInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutExpensesInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutExpensesInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutExpensesInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
};
export type AutoEntrepreneurUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutExpensesInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutExpensesInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutExpensesInput;
    upsert?: Prisma.AutoEntrepreneurUpsertWithoutExpensesInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AutoEntrepreneurUpdateToOneWithWhereWithoutExpensesInput, Prisma.AutoEntrepreneurUpdateWithoutExpensesInput>, Prisma.AutoEntrepreneurUncheckedUpdateWithoutExpensesInput>;
};
export type AutoEntrepreneurCreateNestedOneWithoutDocumentsInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutDocumentsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutDocumentsInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
};
export type AutoEntrepreneurUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutDocumentsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutDocumentsInput;
    upsert?: Prisma.AutoEntrepreneurUpsertWithoutDocumentsInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AutoEntrepreneurUpdateToOneWithWhereWithoutDocumentsInput, Prisma.AutoEntrepreneurUpdateWithoutDocumentsInput>, Prisma.AutoEntrepreneurUncheckedUpdateWithoutDocumentsInput>;
};
export type AutoEntrepreneurCreateNestedOneWithoutTaxDeclarationsInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutTaxDeclarationsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutTaxDeclarationsInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutTaxDeclarationsInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
};
export type AutoEntrepreneurUpdateOneRequiredWithoutTaxDeclarationsNestedInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutTaxDeclarationsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutTaxDeclarationsInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutTaxDeclarationsInput;
    upsert?: Prisma.AutoEntrepreneurUpsertWithoutTaxDeclarationsInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AutoEntrepreneurUpdateToOneWithWhereWithoutTaxDeclarationsInput, Prisma.AutoEntrepreneurUpdateWithoutTaxDeclarationsInput>, Prisma.AutoEntrepreneurUncheckedUpdateWithoutTaxDeclarationsInput>;
};
export type AutoEntrepreneurCreateNestedOneWithoutContributionsInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutContributionsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutContributionsInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutContributionsInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
};
export type AutoEntrepreneurUpdateOneRequiredWithoutContributionsNestedInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutContributionsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutContributionsInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutContributionsInput;
    upsert?: Prisma.AutoEntrepreneurUpsertWithoutContributionsInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AutoEntrepreneurUpdateToOneWithWhereWithoutContributionsInput, Prisma.AutoEntrepreneurUpdateWithoutContributionsInput>, Prisma.AutoEntrepreneurUncheckedUpdateWithoutContributionsInput>;
};
export type AutoEntrepreneurCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutNotificationsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
};
export type AutoEntrepreneurUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutNotificationsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.AutoEntrepreneurCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.AutoEntrepreneurUpsertWithoutNotificationsInput;
    connect?: Prisma.AutoEntrepreneurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AutoEntrepreneurUpdateToOneWithWhereWithoutNotificationsInput, Prisma.AutoEntrepreneurUpdateWithoutNotificationsInput>, Prisma.AutoEntrepreneurUncheckedUpdateWithoutNotificationsInput>;
};
export type AutoEntrepreneurCreateWithoutUserInput = {
    id?: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    customers?: Prisma.CustomerCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurUncheckedCreateWithoutUserInput = {
    id?: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurCreateOrConnectWithoutUserInput = {
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutUserInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutUserInput>;
};
export type AutoEntrepreneurUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutUserInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutUserInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutUserInput>;
    where?: Prisma.AutoEntrepreneurWhereInput;
};
export type AutoEntrepreneurUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.AutoEntrepreneurWhereInput;
    data: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutUserInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutUserInput>;
};
export type AutoEntrepreneurUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customers?: Prisma.CustomerUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurCreateWithoutCustomersInput = {
    id?: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    user: Prisma.UserCreateNestedOneWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurUncheckedCreateWithoutCustomersInput = {
    id?: string;
    userId: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurCreateOrConnectWithoutCustomersInput = {
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutCustomersInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutCustomersInput>;
};
export type AutoEntrepreneurUpsertWithoutCustomersInput = {
    update: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutCustomersInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutCustomersInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutCustomersInput>;
    where?: Prisma.AutoEntrepreneurWhereInput;
};
export type AutoEntrepreneurUpdateToOneWithWhereWithoutCustomersInput = {
    where?: Prisma.AutoEntrepreneurWhereInput;
    data: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutCustomersInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutCustomersInput>;
};
export type AutoEntrepreneurUpdateWithoutCustomersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    user?: Prisma.UserUpdateOneRequiredWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurUncheckedUpdateWithoutCustomersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    products?: Prisma.ProductUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurCreateWithoutProductsInput = {
    id?: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    user: Prisma.UserCreateNestedOneWithoutAutoEntrepreneurInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurUncheckedCreateWithoutProductsInput = {
    id?: string;
    userId: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurCreateOrConnectWithoutProductsInput = {
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutProductsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutProductsInput>;
};
export type AutoEntrepreneurUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutProductsInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutProductsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutProductsInput>;
    where?: Prisma.AutoEntrepreneurWhereInput;
};
export type AutoEntrepreneurUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.AutoEntrepreneurWhereInput;
    data: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutProductsInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutProductsInput>;
};
export type AutoEntrepreneurUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    user?: Prisma.UserUpdateOneRequiredWithoutAutoEntrepreneurNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurUncheckedUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurCreateWithoutServicesInput = {
    id?: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    user: Prisma.UserCreateNestedOneWithoutAutoEntrepreneurInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurUncheckedCreateWithoutServicesInput = {
    id?: string;
    userId: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurCreateOrConnectWithoutServicesInput = {
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutServicesInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutServicesInput>;
};
export type AutoEntrepreneurUpsertWithoutServicesInput = {
    update: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutServicesInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutServicesInput>;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutServicesInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutServicesInput>;
    where?: Prisma.AutoEntrepreneurWhereInput;
};
export type AutoEntrepreneurUpdateToOneWithWhereWithoutServicesInput = {
    where?: Prisma.AutoEntrepreneurWhereInput;
    data: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutServicesInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutServicesInput>;
};
export type AutoEntrepreneurUpdateWithoutServicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    user?: Prisma.UserUpdateOneRequiredWithoutAutoEntrepreneurNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurUncheckedUpdateWithoutServicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurCreateWithoutInvoicesInput = {
    id?: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    user: Prisma.UserCreateNestedOneWithoutAutoEntrepreneurInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurUncheckedCreateWithoutInvoicesInput = {
    id?: string;
    userId: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurCreateOrConnectWithoutInvoicesInput = {
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutInvoicesInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutInvoicesInput>;
};
export type AutoEntrepreneurUpsertWithoutInvoicesInput = {
    update: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutInvoicesInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutInvoicesInput>;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutInvoicesInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutInvoicesInput>;
    where?: Prisma.AutoEntrepreneurWhereInput;
};
export type AutoEntrepreneurUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: Prisma.AutoEntrepreneurWhereInput;
    data: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutInvoicesInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutInvoicesInput>;
};
export type AutoEntrepreneurUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    user?: Prisma.UserUpdateOneRequiredWithoutAutoEntrepreneurNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurUncheckedUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurCreateWithoutQuotesInput = {
    id?: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    user: Prisma.UserCreateNestedOneWithoutAutoEntrepreneurInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurUncheckedCreateWithoutQuotesInput = {
    id?: string;
    userId: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurCreateOrConnectWithoutQuotesInput = {
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutQuotesInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutQuotesInput>;
};
export type AutoEntrepreneurUpsertWithoutQuotesInput = {
    update: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutQuotesInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutQuotesInput>;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutQuotesInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutQuotesInput>;
    where?: Prisma.AutoEntrepreneurWhereInput;
};
export type AutoEntrepreneurUpdateToOneWithWhereWithoutQuotesInput = {
    where?: Prisma.AutoEntrepreneurWhereInput;
    data: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutQuotesInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutQuotesInput>;
};
export type AutoEntrepreneurUpdateWithoutQuotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    user?: Prisma.UserUpdateOneRequiredWithoutAutoEntrepreneurNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurUncheckedUpdateWithoutQuotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurCreateWithoutPaymentsInput = {
    id?: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    user: Prisma.UserCreateNestedOneWithoutAutoEntrepreneurInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    userId: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutPaymentsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutPaymentsInput>;
};
export type AutoEntrepreneurUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutPaymentsInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutPaymentsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.AutoEntrepreneurWhereInput;
};
export type AutoEntrepreneurUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.AutoEntrepreneurWhereInput;
    data: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutPaymentsInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutPaymentsInput>;
};
export type AutoEntrepreneurUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    user?: Prisma.UserUpdateOneRequiredWithoutAutoEntrepreneurNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurCreateWithoutExpensesInput = {
    id?: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    user: Prisma.UserCreateNestedOneWithoutAutoEntrepreneurInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurUncheckedCreateWithoutExpensesInput = {
    id?: string;
    userId: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurCreateOrConnectWithoutExpensesInput = {
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutExpensesInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutExpensesInput>;
};
export type AutoEntrepreneurUpsertWithoutExpensesInput = {
    update: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutExpensesInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutExpensesInput>;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutExpensesInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutExpensesInput>;
    where?: Prisma.AutoEntrepreneurWhereInput;
};
export type AutoEntrepreneurUpdateToOneWithWhereWithoutExpensesInput = {
    where?: Prisma.AutoEntrepreneurWhereInput;
    data: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutExpensesInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutExpensesInput>;
};
export type AutoEntrepreneurUpdateWithoutExpensesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    user?: Prisma.UserUpdateOneRequiredWithoutAutoEntrepreneurNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurUncheckedUpdateWithoutExpensesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurCreateWithoutDocumentsInput = {
    id?: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    user: Prisma.UserCreateNestedOneWithoutAutoEntrepreneurInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurUncheckedCreateWithoutDocumentsInput = {
    id?: string;
    userId: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurCreateOrConnectWithoutDocumentsInput = {
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutDocumentsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutDocumentsInput>;
};
export type AutoEntrepreneurUpsertWithoutDocumentsInput = {
    update: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutDocumentsInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutDocumentsInput>;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutDocumentsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutDocumentsInput>;
    where?: Prisma.AutoEntrepreneurWhereInput;
};
export type AutoEntrepreneurUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: Prisma.AutoEntrepreneurWhereInput;
    data: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutDocumentsInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutDocumentsInput>;
};
export type AutoEntrepreneurUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    user?: Prisma.UserUpdateOneRequiredWithoutAutoEntrepreneurNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurUncheckedUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurCreateWithoutTaxDeclarationsInput = {
    id?: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    user: Prisma.UserCreateNestedOneWithoutAutoEntrepreneurInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurUncheckedCreateWithoutTaxDeclarationsInput = {
    id?: string;
    userId: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurCreateOrConnectWithoutTaxDeclarationsInput = {
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutTaxDeclarationsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutTaxDeclarationsInput>;
};
export type AutoEntrepreneurUpsertWithoutTaxDeclarationsInput = {
    update: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutTaxDeclarationsInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutTaxDeclarationsInput>;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutTaxDeclarationsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutTaxDeclarationsInput>;
    where?: Prisma.AutoEntrepreneurWhereInput;
};
export type AutoEntrepreneurUpdateToOneWithWhereWithoutTaxDeclarationsInput = {
    where?: Prisma.AutoEntrepreneurWhereInput;
    data: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutTaxDeclarationsInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutTaxDeclarationsInput>;
};
export type AutoEntrepreneurUpdateWithoutTaxDeclarationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    user?: Prisma.UserUpdateOneRequiredWithoutAutoEntrepreneurNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurUncheckedUpdateWithoutTaxDeclarationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurCreateWithoutContributionsInput = {
    id?: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    user: Prisma.UserCreateNestedOneWithoutAutoEntrepreneurInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurUncheckedCreateWithoutContributionsInput = {
    id?: string;
    userId: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurCreateOrConnectWithoutContributionsInput = {
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutContributionsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutContributionsInput>;
};
export type AutoEntrepreneurUpsertWithoutContributionsInput = {
    update: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutContributionsInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutContributionsInput>;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutContributionsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutContributionsInput>;
    where?: Prisma.AutoEntrepreneurWhereInput;
};
export type AutoEntrepreneurUpdateToOneWithWhereWithoutContributionsInput = {
    where?: Prisma.AutoEntrepreneurWhereInput;
    data: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutContributionsInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutContributionsInput>;
};
export type AutoEntrepreneurUpdateWithoutContributionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    user?: Prisma.UserUpdateOneRequiredWithoutAutoEntrepreneurNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurUncheckedUpdateWithoutContributionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurCreateWithoutNotificationsInput = {
    id?: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    user: Prisma.UserCreateNestedOneWithoutAutoEntrepreneurInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    userId: string;
    password: string;
    businessName: string;
    activityType: $Enums.ActivityType;
    taxRate?: number;
    ice: string;
    logo?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    passwordResetToken?: string | null;
    passwordResetTokenExpiration?: bigint | number | null;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    quotes?: Prisma.QuoteUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
    contributions?: Prisma.ContributionUncheckedCreateNestedManyWithoutAutoEntrepreneurInput;
};
export type AutoEntrepreneurCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutNotificationsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutNotificationsInput>;
};
export type AutoEntrepreneurUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutNotificationsInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateWithoutNotificationsInput, Prisma.AutoEntrepreneurUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.AutoEntrepreneurWhereInput;
};
export type AutoEntrepreneurUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.AutoEntrepreneurWhereInput;
    data: Prisma.XOR<Prisma.AutoEntrepreneurUpdateWithoutNotificationsInput, Prisma.AutoEntrepreneurUncheckedUpdateWithoutNotificationsInput>;
};
export type AutoEntrepreneurUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    user?: Prisma.UserUpdateOneRequiredWithoutAutoEntrepreneurNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUpdateManyWithoutAutoEntrepreneurNestedInput;
};
export type AutoEntrepreneurUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    businessName?: Prisma.StringFieldUpdateOperationsInput | string;
    activityType?: Prisma.EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType;
    taxRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    ice?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetTokenExpiration?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    quotes?: Prisma.QuoteUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    taxDeclarations?: Prisma.TaxDeclarationUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
    contributions?: Prisma.ContributionUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput;
};
/**
 * Count Type AutoEntrepreneurCountOutputType
 */
export type AutoEntrepreneurCountOutputType = {
    customers: number;
    products: number;
    services: number;
    invoices: number;
    quotes: number;
    payments: number;
    expenses: number;
    documents: number;
    taxDeclarations: number;
    contributions: number;
    notifications: number;
};
export type AutoEntrepreneurCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customers?: boolean | AutoEntrepreneurCountOutputTypeCountCustomersArgs;
    products?: boolean | AutoEntrepreneurCountOutputTypeCountProductsArgs;
    services?: boolean | AutoEntrepreneurCountOutputTypeCountServicesArgs;
    invoices?: boolean | AutoEntrepreneurCountOutputTypeCountInvoicesArgs;
    quotes?: boolean | AutoEntrepreneurCountOutputTypeCountQuotesArgs;
    payments?: boolean | AutoEntrepreneurCountOutputTypeCountPaymentsArgs;
    expenses?: boolean | AutoEntrepreneurCountOutputTypeCountExpensesArgs;
    documents?: boolean | AutoEntrepreneurCountOutputTypeCountDocumentsArgs;
    taxDeclarations?: boolean | AutoEntrepreneurCountOutputTypeCountTaxDeclarationsArgs;
    contributions?: boolean | AutoEntrepreneurCountOutputTypeCountContributionsArgs;
    notifications?: boolean | AutoEntrepreneurCountOutputTypeCountNotificationsArgs;
};
/**
 * AutoEntrepreneurCountOutputType without action
 */
export type AutoEntrepreneurCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoEntrepreneurCountOutputType
     */
    select?: Prisma.AutoEntrepreneurCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AutoEntrepreneurCountOutputType without action
 */
export type AutoEntrepreneurCountOutputTypeCountCustomersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
};
/**
 * AutoEntrepreneurCountOutputType without action
 */
export type AutoEntrepreneurCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
/**
 * AutoEntrepreneurCountOutputType without action
 */
export type AutoEntrepreneurCountOutputTypeCountServicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceWhereInput;
};
/**
 * AutoEntrepreneurCountOutputType without action
 */
export type AutoEntrepreneurCountOutputTypeCountInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
};
/**
 * AutoEntrepreneurCountOutputType without action
 */
export type AutoEntrepreneurCountOutputTypeCountQuotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuoteWhereInput;
};
/**
 * AutoEntrepreneurCountOutputType without action
 */
export type AutoEntrepreneurCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
};
/**
 * AutoEntrepreneurCountOutputType without action
 */
export type AutoEntrepreneurCountOutputTypeCountExpensesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseWhereInput;
};
/**
 * AutoEntrepreneurCountOutputType without action
 */
export type AutoEntrepreneurCountOutputTypeCountDocumentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
};
/**
 * AutoEntrepreneurCountOutputType without action
 */
export type AutoEntrepreneurCountOutputTypeCountTaxDeclarationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxDeclarationWhereInput;
};
/**
 * AutoEntrepreneurCountOutputType without action
 */
export type AutoEntrepreneurCountOutputTypeCountContributionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContributionWhereInput;
};
/**
 * AutoEntrepreneurCountOutputType without action
 */
export type AutoEntrepreneurCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type AutoEntrepreneurSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    password?: boolean;
    businessName?: boolean;
    activityType?: boolean;
    taxRate?: boolean;
    ice?: boolean;
    logo?: boolean;
    creationDate?: boolean;
    updateDate?: boolean;
    passwordResetToken?: boolean;
    passwordResetTokenExpiration?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    customers?: boolean | Prisma.AutoEntrepreneur$customersArgs<ExtArgs>;
    products?: boolean | Prisma.AutoEntrepreneur$productsArgs<ExtArgs>;
    services?: boolean | Prisma.AutoEntrepreneur$servicesArgs<ExtArgs>;
    invoices?: boolean | Prisma.AutoEntrepreneur$invoicesArgs<ExtArgs>;
    quotes?: boolean | Prisma.AutoEntrepreneur$quotesArgs<ExtArgs>;
    payments?: boolean | Prisma.AutoEntrepreneur$paymentsArgs<ExtArgs>;
    expenses?: boolean | Prisma.AutoEntrepreneur$expensesArgs<ExtArgs>;
    documents?: boolean | Prisma.AutoEntrepreneur$documentsArgs<ExtArgs>;
    taxDeclarations?: boolean | Prisma.AutoEntrepreneur$taxDeclarationsArgs<ExtArgs>;
    contributions?: boolean | Prisma.AutoEntrepreneur$contributionsArgs<ExtArgs>;
    notifications?: boolean | Prisma.AutoEntrepreneur$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.AutoEntrepreneurCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["autoEntrepreneur"]>;
export type AutoEntrepreneurSelectScalar = {
    id?: boolean;
    userId?: boolean;
    password?: boolean;
    businessName?: boolean;
    activityType?: boolean;
    taxRate?: boolean;
    ice?: boolean;
    logo?: boolean;
    creationDate?: boolean;
    updateDate?: boolean;
    passwordResetToken?: boolean;
    passwordResetTokenExpiration?: boolean;
};
export type AutoEntrepreneurOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "password" | "businessName" | "activityType" | "taxRate" | "ice" | "logo" | "creationDate" | "updateDate" | "passwordResetToken" | "passwordResetTokenExpiration", ExtArgs["result"]["autoEntrepreneur"]>;
export type AutoEntrepreneurInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    customers?: boolean | Prisma.AutoEntrepreneur$customersArgs<ExtArgs>;
    products?: boolean | Prisma.AutoEntrepreneur$productsArgs<ExtArgs>;
    services?: boolean | Prisma.AutoEntrepreneur$servicesArgs<ExtArgs>;
    invoices?: boolean | Prisma.AutoEntrepreneur$invoicesArgs<ExtArgs>;
    quotes?: boolean | Prisma.AutoEntrepreneur$quotesArgs<ExtArgs>;
    payments?: boolean | Prisma.AutoEntrepreneur$paymentsArgs<ExtArgs>;
    expenses?: boolean | Prisma.AutoEntrepreneur$expensesArgs<ExtArgs>;
    documents?: boolean | Prisma.AutoEntrepreneur$documentsArgs<ExtArgs>;
    taxDeclarations?: boolean | Prisma.AutoEntrepreneur$taxDeclarationsArgs<ExtArgs>;
    contributions?: boolean | Prisma.AutoEntrepreneur$contributionsArgs<ExtArgs>;
    notifications?: boolean | Prisma.AutoEntrepreneur$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.AutoEntrepreneurCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $AutoEntrepreneurPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AutoEntrepreneur";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        customers: Prisma.$CustomerPayload<ExtArgs>[];
        products: Prisma.$ProductPayload<ExtArgs>[];
        services: Prisma.$ServicePayload<ExtArgs>[];
        invoices: Prisma.$InvoicePayload<ExtArgs>[];
        quotes: Prisma.$QuotePayload<ExtArgs>[];
        payments: Prisma.$PaymentPayload<ExtArgs>[];
        expenses: Prisma.$ExpensePayload<ExtArgs>[];
        documents: Prisma.$DocumentPayload<ExtArgs>[];
        taxDeclarations: Prisma.$TaxDeclarationPayload<ExtArgs>[];
        contributions: Prisma.$ContributionPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        password: string;
        businessName: string;
        activityType: $Enums.ActivityType;
        taxRate: number;
        ice: string;
        logo: string | null;
        creationDate: Date;
        updateDate: Date;
        passwordResetToken: string | null;
        passwordResetTokenExpiration: bigint | null;
    }, ExtArgs["result"]["autoEntrepreneur"]>;
    composites: {};
};
export type AutoEntrepreneurGetPayload<S extends boolean | null | undefined | AutoEntrepreneurDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AutoEntrepreneurPayload, S>;
export type AutoEntrepreneurCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AutoEntrepreneurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AutoEntrepreneurCountAggregateInputType | true;
};
export interface AutoEntrepreneurDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AutoEntrepreneur'];
        meta: {
            name: 'AutoEntrepreneur';
        };
    };
    /**
     * Find zero or one AutoEntrepreneur that matches the filter.
     * @param {AutoEntrepreneurFindUniqueArgs} args - Arguments to find a AutoEntrepreneur
     * @example
     * // Get one AutoEntrepreneur
     * const autoEntrepreneur = await prisma.autoEntrepreneur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutoEntrepreneurFindUniqueArgs>(args: Prisma.SelectSubset<T, AutoEntrepreneurFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AutoEntrepreneurClient<runtime.Types.Result.GetResult<Prisma.$AutoEntrepreneurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AutoEntrepreneur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutoEntrepreneurFindUniqueOrThrowArgs} args - Arguments to find a AutoEntrepreneur
     * @example
     * // Get one AutoEntrepreneur
     * const autoEntrepreneur = await prisma.autoEntrepreneur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutoEntrepreneurFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AutoEntrepreneurFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AutoEntrepreneurClient<runtime.Types.Result.GetResult<Prisma.$AutoEntrepreneurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AutoEntrepreneur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoEntrepreneurFindFirstArgs} args - Arguments to find a AutoEntrepreneur
     * @example
     * // Get one AutoEntrepreneur
     * const autoEntrepreneur = await prisma.autoEntrepreneur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutoEntrepreneurFindFirstArgs>(args?: Prisma.SelectSubset<T, AutoEntrepreneurFindFirstArgs<ExtArgs>>): Prisma.Prisma__AutoEntrepreneurClient<runtime.Types.Result.GetResult<Prisma.$AutoEntrepreneurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AutoEntrepreneur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoEntrepreneurFindFirstOrThrowArgs} args - Arguments to find a AutoEntrepreneur
     * @example
     * // Get one AutoEntrepreneur
     * const autoEntrepreneur = await prisma.autoEntrepreneur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutoEntrepreneurFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AutoEntrepreneurFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AutoEntrepreneurClient<runtime.Types.Result.GetResult<Prisma.$AutoEntrepreneurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AutoEntrepreneurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoEntrepreneurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AutoEntrepreneurs
     * const autoEntrepreneurs = await prisma.autoEntrepreneur.findMany()
     *
     * // Get first 10 AutoEntrepreneurs
     * const autoEntrepreneurs = await prisma.autoEntrepreneur.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const autoEntrepreneurWithIdOnly = await prisma.autoEntrepreneur.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AutoEntrepreneurFindManyArgs>(args?: Prisma.SelectSubset<T, AutoEntrepreneurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AutoEntrepreneurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AutoEntrepreneur.
     * @param {AutoEntrepreneurCreateArgs} args - Arguments to create a AutoEntrepreneur.
     * @example
     * // Create one AutoEntrepreneur
     * const AutoEntrepreneur = await prisma.autoEntrepreneur.create({
     *   data: {
     *     // ... data to create a AutoEntrepreneur
     *   }
     * })
     *
     */
    create<T extends AutoEntrepreneurCreateArgs>(args: Prisma.SelectSubset<T, AutoEntrepreneurCreateArgs<ExtArgs>>): Prisma.Prisma__AutoEntrepreneurClient<runtime.Types.Result.GetResult<Prisma.$AutoEntrepreneurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AutoEntrepreneurs.
     * @param {AutoEntrepreneurCreateManyArgs} args - Arguments to create many AutoEntrepreneurs.
     * @example
     * // Create many AutoEntrepreneurs
     * const autoEntrepreneur = await prisma.autoEntrepreneur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AutoEntrepreneurCreateManyArgs>(args?: Prisma.SelectSubset<T, AutoEntrepreneurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a AutoEntrepreneur.
     * @param {AutoEntrepreneurDeleteArgs} args - Arguments to delete one AutoEntrepreneur.
     * @example
     * // Delete one AutoEntrepreneur
     * const AutoEntrepreneur = await prisma.autoEntrepreneur.delete({
     *   where: {
     *     // ... filter to delete one AutoEntrepreneur
     *   }
     * })
     *
     */
    delete<T extends AutoEntrepreneurDeleteArgs>(args: Prisma.SelectSubset<T, AutoEntrepreneurDeleteArgs<ExtArgs>>): Prisma.Prisma__AutoEntrepreneurClient<runtime.Types.Result.GetResult<Prisma.$AutoEntrepreneurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AutoEntrepreneur.
     * @param {AutoEntrepreneurUpdateArgs} args - Arguments to update one AutoEntrepreneur.
     * @example
     * // Update one AutoEntrepreneur
     * const autoEntrepreneur = await prisma.autoEntrepreneur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AutoEntrepreneurUpdateArgs>(args: Prisma.SelectSubset<T, AutoEntrepreneurUpdateArgs<ExtArgs>>): Prisma.Prisma__AutoEntrepreneurClient<runtime.Types.Result.GetResult<Prisma.$AutoEntrepreneurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AutoEntrepreneurs.
     * @param {AutoEntrepreneurDeleteManyArgs} args - Arguments to filter AutoEntrepreneurs to delete.
     * @example
     * // Delete a few AutoEntrepreneurs
     * const { count } = await prisma.autoEntrepreneur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AutoEntrepreneurDeleteManyArgs>(args?: Prisma.SelectSubset<T, AutoEntrepreneurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AutoEntrepreneurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoEntrepreneurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AutoEntrepreneurs
     * const autoEntrepreneur = await prisma.autoEntrepreneur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AutoEntrepreneurUpdateManyArgs>(args: Prisma.SelectSubset<T, AutoEntrepreneurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one AutoEntrepreneur.
     * @param {AutoEntrepreneurUpsertArgs} args - Arguments to update or create a AutoEntrepreneur.
     * @example
     * // Update or create a AutoEntrepreneur
     * const autoEntrepreneur = await prisma.autoEntrepreneur.upsert({
     *   create: {
     *     // ... data to create a AutoEntrepreneur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AutoEntrepreneur we want to update
     *   }
     * })
     */
    upsert<T extends AutoEntrepreneurUpsertArgs>(args: Prisma.SelectSubset<T, AutoEntrepreneurUpsertArgs<ExtArgs>>): Prisma.Prisma__AutoEntrepreneurClient<runtime.Types.Result.GetResult<Prisma.$AutoEntrepreneurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AutoEntrepreneurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoEntrepreneurCountArgs} args - Arguments to filter AutoEntrepreneurs to count.
     * @example
     * // Count the number of AutoEntrepreneurs
     * const count = await prisma.autoEntrepreneur.count({
     *   where: {
     *     // ... the filter for the AutoEntrepreneurs we want to count
     *   }
     * })
    **/
    count<T extends AutoEntrepreneurCountArgs>(args?: Prisma.Subset<T, AutoEntrepreneurCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AutoEntrepreneurCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AutoEntrepreneur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoEntrepreneurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutoEntrepreneurAggregateArgs>(args: Prisma.Subset<T, AutoEntrepreneurAggregateArgs>): Prisma.PrismaPromise<GetAutoEntrepreneurAggregateType<T>>;
    /**
     * Group by AutoEntrepreneur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoEntrepreneurGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AutoEntrepreneurGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AutoEntrepreneurGroupByArgs['orderBy'];
    } : {
        orderBy?: AutoEntrepreneurGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AutoEntrepreneurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutoEntrepreneurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AutoEntrepreneur model
     */
    readonly fields: AutoEntrepreneurFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AutoEntrepreneur.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AutoEntrepreneurClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customers<T extends Prisma.AutoEntrepreneur$customersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneur$customersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    products<T extends Prisma.AutoEntrepreneur$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneur$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    services<T extends Prisma.AutoEntrepreneur$servicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneur$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invoices<T extends Prisma.AutoEntrepreneur$invoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneur$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    quotes<T extends Prisma.AutoEntrepreneur$quotesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneur$quotesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    payments<T extends Prisma.AutoEntrepreneur$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneur$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    expenses<T extends Prisma.AutoEntrepreneur$expensesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneur$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    documents<T extends Prisma.AutoEntrepreneur$documentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneur$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    taxDeclarations<T extends Prisma.AutoEntrepreneur$taxDeclarationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneur$taxDeclarationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxDeclarationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    contributions<T extends Prisma.AutoEntrepreneur$contributionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneur$contributionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.AutoEntrepreneur$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneur$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the AutoEntrepreneur model
 */
export interface AutoEntrepreneurFieldRefs {
    readonly id: Prisma.FieldRef<"AutoEntrepreneur", 'String'>;
    readonly userId: Prisma.FieldRef<"AutoEntrepreneur", 'String'>;
    readonly password: Prisma.FieldRef<"AutoEntrepreneur", 'String'>;
    readonly businessName: Prisma.FieldRef<"AutoEntrepreneur", 'String'>;
    readonly activityType: Prisma.FieldRef<"AutoEntrepreneur", 'ActivityType'>;
    readonly taxRate: Prisma.FieldRef<"AutoEntrepreneur", 'Float'>;
    readonly ice: Prisma.FieldRef<"AutoEntrepreneur", 'String'>;
    readonly logo: Prisma.FieldRef<"AutoEntrepreneur", 'String'>;
    readonly creationDate: Prisma.FieldRef<"AutoEntrepreneur", 'DateTime'>;
    readonly updateDate: Prisma.FieldRef<"AutoEntrepreneur", 'DateTime'>;
    readonly passwordResetToken: Prisma.FieldRef<"AutoEntrepreneur", 'String'>;
    readonly passwordResetTokenExpiration: Prisma.FieldRef<"AutoEntrepreneur", 'BigInt'>;
}
/**
 * AutoEntrepreneur findUnique
 */
export type AutoEntrepreneurFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoEntrepreneur
     */
    select?: Prisma.AutoEntrepreneurSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AutoEntrepreneur
     */
    omit?: Prisma.AutoEntrepreneurOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AutoEntrepreneurInclude<ExtArgs> | null;
    /**
     * Filter, which AutoEntrepreneur to fetch.
     */
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
};
/**
 * AutoEntrepreneur findUniqueOrThrow
 */
export type AutoEntrepreneurFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoEntrepreneur
     */
    select?: Prisma.AutoEntrepreneurSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AutoEntrepreneur
     */
    omit?: Prisma.AutoEntrepreneurOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AutoEntrepreneurInclude<ExtArgs> | null;
    /**
     * Filter, which AutoEntrepreneur to fetch.
     */
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
};
/**
 * AutoEntrepreneur findFirst
 */
export type AutoEntrepreneurFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoEntrepreneur
     */
    select?: Prisma.AutoEntrepreneurSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AutoEntrepreneur
     */
    omit?: Prisma.AutoEntrepreneurOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AutoEntrepreneurInclude<ExtArgs> | null;
    /**
     * Filter, which AutoEntrepreneur to fetch.
     */
    where?: Prisma.AutoEntrepreneurWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AutoEntrepreneurs to fetch.
     */
    orderBy?: Prisma.AutoEntrepreneurOrderByWithRelationInput | Prisma.AutoEntrepreneurOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AutoEntrepreneurs.
     */
    cursor?: Prisma.AutoEntrepreneurWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AutoEntrepreneurs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AutoEntrepreneurs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AutoEntrepreneurs.
     */
    distinct?: Prisma.AutoEntrepreneurScalarFieldEnum | Prisma.AutoEntrepreneurScalarFieldEnum[];
};
/**
 * AutoEntrepreneur findFirstOrThrow
 */
export type AutoEntrepreneurFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoEntrepreneur
     */
    select?: Prisma.AutoEntrepreneurSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AutoEntrepreneur
     */
    omit?: Prisma.AutoEntrepreneurOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AutoEntrepreneurInclude<ExtArgs> | null;
    /**
     * Filter, which AutoEntrepreneur to fetch.
     */
    where?: Prisma.AutoEntrepreneurWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AutoEntrepreneurs to fetch.
     */
    orderBy?: Prisma.AutoEntrepreneurOrderByWithRelationInput | Prisma.AutoEntrepreneurOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AutoEntrepreneurs.
     */
    cursor?: Prisma.AutoEntrepreneurWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AutoEntrepreneurs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AutoEntrepreneurs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AutoEntrepreneurs.
     */
    distinct?: Prisma.AutoEntrepreneurScalarFieldEnum | Prisma.AutoEntrepreneurScalarFieldEnum[];
};
/**
 * AutoEntrepreneur findMany
 */
export type AutoEntrepreneurFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoEntrepreneur
     */
    select?: Prisma.AutoEntrepreneurSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AutoEntrepreneur
     */
    omit?: Prisma.AutoEntrepreneurOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AutoEntrepreneurInclude<ExtArgs> | null;
    /**
     * Filter, which AutoEntrepreneurs to fetch.
     */
    where?: Prisma.AutoEntrepreneurWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AutoEntrepreneurs to fetch.
     */
    orderBy?: Prisma.AutoEntrepreneurOrderByWithRelationInput | Prisma.AutoEntrepreneurOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AutoEntrepreneurs.
     */
    cursor?: Prisma.AutoEntrepreneurWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AutoEntrepreneurs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AutoEntrepreneurs.
     */
    skip?: number;
    distinct?: Prisma.AutoEntrepreneurScalarFieldEnum | Prisma.AutoEntrepreneurScalarFieldEnum[];
};
/**
 * AutoEntrepreneur create
 */
export type AutoEntrepreneurCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoEntrepreneur
     */
    select?: Prisma.AutoEntrepreneurSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AutoEntrepreneur
     */
    omit?: Prisma.AutoEntrepreneurOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AutoEntrepreneurInclude<ExtArgs> | null;
    /**
     * The data needed to create a AutoEntrepreneur.
     */
    data: Prisma.XOR<Prisma.AutoEntrepreneurCreateInput, Prisma.AutoEntrepreneurUncheckedCreateInput>;
};
/**
 * AutoEntrepreneur createMany
 */
export type AutoEntrepreneurCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AutoEntrepreneurs.
     */
    data: Prisma.AutoEntrepreneurCreateManyInput | Prisma.AutoEntrepreneurCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AutoEntrepreneur update
 */
export type AutoEntrepreneurUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoEntrepreneur
     */
    select?: Prisma.AutoEntrepreneurSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AutoEntrepreneur
     */
    omit?: Prisma.AutoEntrepreneurOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AutoEntrepreneurInclude<ExtArgs> | null;
    /**
     * The data needed to update a AutoEntrepreneur.
     */
    data: Prisma.XOR<Prisma.AutoEntrepreneurUpdateInput, Prisma.AutoEntrepreneurUncheckedUpdateInput>;
    /**
     * Choose, which AutoEntrepreneur to update.
     */
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
};
/**
 * AutoEntrepreneur updateMany
 */
export type AutoEntrepreneurUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AutoEntrepreneurs.
     */
    data: Prisma.XOR<Prisma.AutoEntrepreneurUpdateManyMutationInput, Prisma.AutoEntrepreneurUncheckedUpdateManyInput>;
    /**
     * Filter which AutoEntrepreneurs to update
     */
    where?: Prisma.AutoEntrepreneurWhereInput;
    /**
     * Limit how many AutoEntrepreneurs to update.
     */
    limit?: number;
};
/**
 * AutoEntrepreneur upsert
 */
export type AutoEntrepreneurUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoEntrepreneur
     */
    select?: Prisma.AutoEntrepreneurSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AutoEntrepreneur
     */
    omit?: Prisma.AutoEntrepreneurOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AutoEntrepreneurInclude<ExtArgs> | null;
    /**
     * The filter to search for the AutoEntrepreneur to update in case it exists.
     */
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
    /**
     * In case the AutoEntrepreneur found by the `where` argument doesn't exist, create a new AutoEntrepreneur with this data.
     */
    create: Prisma.XOR<Prisma.AutoEntrepreneurCreateInput, Prisma.AutoEntrepreneurUncheckedCreateInput>;
    /**
     * In case the AutoEntrepreneur was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AutoEntrepreneurUpdateInput, Prisma.AutoEntrepreneurUncheckedUpdateInput>;
};
/**
 * AutoEntrepreneur delete
 */
export type AutoEntrepreneurDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoEntrepreneur
     */
    select?: Prisma.AutoEntrepreneurSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AutoEntrepreneur
     */
    omit?: Prisma.AutoEntrepreneurOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AutoEntrepreneurInclude<ExtArgs> | null;
    /**
     * Filter which AutoEntrepreneur to delete.
     */
    where: Prisma.AutoEntrepreneurWhereUniqueInput;
};
/**
 * AutoEntrepreneur deleteMany
 */
export type AutoEntrepreneurDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AutoEntrepreneurs to delete
     */
    where?: Prisma.AutoEntrepreneurWhereInput;
    /**
     * Limit how many AutoEntrepreneurs to delete.
     */
    limit?: number;
};
/**
 * AutoEntrepreneur.customers
 */
export type AutoEntrepreneur$customersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Customer
     */
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
/**
 * AutoEntrepreneur.products
 */
export type AutoEntrepreneur$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
/**
 * AutoEntrepreneur.services
 */
export type AutoEntrepreneur$servicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    cursor?: Prisma.ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServiceScalarFieldEnum | Prisma.ServiceScalarFieldEnum[];
};
/**
 * AutoEntrepreneur.invoices
 */
export type AutoEntrepreneur$invoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
/**
 * AutoEntrepreneur.quotes
 */
export type AutoEntrepreneur$quotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: Prisma.QuoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Quote
     */
    omit?: Prisma.QuoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuoteInclude<ExtArgs> | null;
    where?: Prisma.QuoteWhereInput;
    orderBy?: Prisma.QuoteOrderByWithRelationInput | Prisma.QuoteOrderByWithRelationInput[];
    cursor?: Prisma.QuoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuoteScalarFieldEnum | Prisma.QuoteScalarFieldEnum[];
};
/**
 * AutoEntrepreneur.payments
 */
export type AutoEntrepreneur$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
/**
 * AutoEntrepreneur.expenses
 */
export type AutoEntrepreneur$expensesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expense
     */
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where?: Prisma.ExpenseWhereInput;
    orderBy?: Prisma.ExpenseOrderByWithRelationInput | Prisma.ExpenseOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseScalarFieldEnum | Prisma.ExpenseScalarFieldEnum[];
};
/**
 * AutoEntrepreneur.documents
 */
export type AutoEntrepreneur$documentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Document
     */
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
/**
 * AutoEntrepreneur.taxDeclarations
 */
export type AutoEntrepreneur$taxDeclarationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.TaxDeclarationWhereInput;
    orderBy?: Prisma.TaxDeclarationOrderByWithRelationInput | Prisma.TaxDeclarationOrderByWithRelationInput[];
    cursor?: Prisma.TaxDeclarationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxDeclarationScalarFieldEnum | Prisma.TaxDeclarationScalarFieldEnum[];
};
/**
 * AutoEntrepreneur.contributions
 */
export type AutoEntrepreneur$contributionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: Prisma.ContributionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Contribution
     */
    omit?: Prisma.ContributionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContributionInclude<ExtArgs> | null;
    where?: Prisma.ContributionWhereInput;
    orderBy?: Prisma.ContributionOrderByWithRelationInput | Prisma.ContributionOrderByWithRelationInput[];
    cursor?: Prisma.ContributionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContributionScalarFieldEnum | Prisma.ContributionScalarFieldEnum[];
};
/**
 * AutoEntrepreneur.notifications
 */
export type AutoEntrepreneur$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * AutoEntrepreneur without action
 */
export type AutoEntrepreneurDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoEntrepreneur
     */
    select?: Prisma.AutoEntrepreneurSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AutoEntrepreneur
     */
    omit?: Prisma.AutoEntrepreneurOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AutoEntrepreneurInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=AutoEntrepreneur.d.ts.map
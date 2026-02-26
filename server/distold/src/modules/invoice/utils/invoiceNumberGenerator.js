export const invoiceNumberGenerator = (oldNumber) => {
    const year = new Date().getFullYear();
    if (!oldNumber)
        return 'FACT-' + year + '-1';
    const num = oldNumber.split('-');
    const newNum = parseInt(num[2]) + 1;
    const invoiceNum = num[0] + '-' + num[1] + '-' + newNum;
    return invoiceNum;
};
//# sourceMappingURL=invoiceNumberGenerator.js.map
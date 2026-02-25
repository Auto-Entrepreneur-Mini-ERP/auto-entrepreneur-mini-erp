export const quoteNumberGenerator = (oldNumber: string | null) => {
    const year = new Date().getFullYear();
    if(!oldNumber) return 'DEVIS-'+year+'-1'

    const num = oldNumber.split('-');
    const newNum = parseInt(num[2] as string) + 1;
    const quoteNumber = num[0] + '-' + num[1] + '-' + newNum;

    return quoteNumber;
};
export const paymentNumberGenerator = (oldNumber: string | null) => {
    const year = new Date().getFullYear();
    if(!oldNumber) return 'PAY-'+year+'-1'

    const num = oldNumber.split('-');
    const newNum = parseInt(num[2] as string) + 1;
    const invoiceNum = num[0] + '-' + num[1] + '-' + newNum;

    return invoiceNum;
};
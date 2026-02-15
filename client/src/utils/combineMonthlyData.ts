const months = [
    "Jan", "Fév", "Mar", "Avr",
    "Mai", "Jun", "Jul", "Aoû",
    "Sep", "Oct", "Nov", "Déc"
];

export function combineMonthlyData(
    revenues: Array<{ index: number; amount: number }> = [],
    expenses: Array<{ index: number; amount: number }> = []
) {

    const monthlyData: Array<{ month: string; revenues: number; expenses: number }> = [];
    months.map((month, i) => {
        const index = i + 1;

        const revenueItem = revenues.find(r => r.index === index);
        const expenseItem = expenses.find(e => e.index === index);

        monthlyData.push({
            month,
            revenues: revenueItem ? revenueItem.amount : 0,
            expenses: expenseItem ? expenseItem.amount : 0,
        });
    }
    );
    return monthlyData;
}

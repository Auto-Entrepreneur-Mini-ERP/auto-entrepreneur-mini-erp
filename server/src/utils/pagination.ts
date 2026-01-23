
export const paginationIndex = (page: number, limit: number) => {
    return (page - 1) * limit;
};
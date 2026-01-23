
const paginationIndex = (page: number, limit: number) => {
    return (page - 1) * limit;
};

export const pagination = {
    paginationIndex,
};
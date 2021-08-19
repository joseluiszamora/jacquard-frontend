module.exports =  {

    getPagingData : (data, page, limit) => {
        const { count: totalItems, rows: rows } = data;
        const currentPage = page ? +page : 0;
        const totalPages = Math.ceil(totalItems / limit);
      
        return { totalItems, totalPages, currentPage, rows };
    },
    
    getPagination : (page, size) => {
        const limit = size ? +size : 10;
        const offset = page ? (page - 1) * limit : 1;
      
        return { limit, offset };
    }

}
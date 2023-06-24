import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ cardPerPage, totalCard, setCurrentPage }) => {

    const pageCount = Math.ceil((totalCard?.length) / cardPerPage);

    const handlePageClick = (data) => { setCurrentPage(data.selected + 1); }

    return (
        <nav className='mb-20 lg:mb-0' aria-label="Page navigation example">
            <ReactPaginate
                previousLabel={'Back'}
                nextLabel={'Forward'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item hidden md:block'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item hidden md:block'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </nav>
    );
};

export default Pagination;

// ?_page=
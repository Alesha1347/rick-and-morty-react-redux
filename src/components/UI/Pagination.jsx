import ReactPaginate from 'react-paginate';

export function MyPagination( {count, currentPage, changePage} ) {


  return (
    <>
      <ReactPaginate
        className='paginate'
        breakLabel="..."
        nextLabel="&#10095;"
        onPageChange={changePage}
        pageRangeDisplayed={5}
        pageCount={count}
        previousLabel="&#10094;"
        renderOnZeroPageCount={null}
        activeClassName="active__page"
        pageClassName="page"
        previousClassName="prev__page"
        nextClassName="next__page"
        forcePage={currentPage - 1}
      />
    </>
  );
}
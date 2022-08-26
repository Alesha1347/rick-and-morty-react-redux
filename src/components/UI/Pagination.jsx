import Pagination from 'react-bootstrap/Pagination';

export function MyPagination({count, currentPage, changePage}){
    
let items = [];
for (let number = 1; number <= count; number++) {
  items.push(
    <Pagination.Item 
    onClick={() => changePage(number)} 
    key={number} 
    active={number === currentPage}
    >
      {number}
    </Pagination.Item>,
  );
}
    return (
        <div className='paginate'>
    <Pagination>{items}</Pagination>
        </div>
    )
}
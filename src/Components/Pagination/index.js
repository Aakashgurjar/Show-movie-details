

import React from "react"
import ReactPaginate from "react-paginate";
import './style.css';

// use react-paginate to show the all pages in the bottom of the page 


const PaginationComponent = (props)  =>  {

    const {maxnum, activenum, handleClick} = props
    const forcePageActive = parseInt(activenum) - 1;

    const handlePageClick = (e)=>{

        console.log('pagination compo', e.selected)
        let pageNo = parseInt(e.selected) + 1
        // console.log("page no is " , pageNo );  // show current page no 
        handleClick(pageNo);
        window.scrollTo(0, 0)
    }
      
    
    return(
        <>
            <div className="paginationWap">

                <ReactPaginate

                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={maxnum}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                    renderOnZeroPageCount={null}
                    forcePage={forcePageActive}
                
                />
            </div>
        </>
    )
}

export  default PaginationComponent;
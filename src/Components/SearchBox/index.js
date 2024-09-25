
import React from 'react';
import './style.css';


const SearchBarCardComponents = ({searchValue, setSearchValue, typeValue, setTypeValue, filterData})=>{
    
    const changeSearchHandle = (e)=>{
        setSearchValue(e.target.value)
    }
    const chagneValueHandler = (e)=>{
        console.log(e.target.value)
        setTypeValue(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        filterData()
    }

    return (
        
        <>
            <div className='searchBox'>
                <div className="container">
                    <h6>Type movie or tv show name to find it</h6>
                    
                    <div className='checkBoxSec'>
                    
                        <label htmlFor="tvFind" className='label_1'>
                            <input type="radio" value="tv" onChange={chagneValueHandler} checked={typeValue === 'tv' ? true : false} name="findSeriesType" id="tvFind" />
                            <span>Tv </span>
                        </label>
                        <label htmlFor="seriesFind" className='label_2'>
                            <input type="radio" value="movie" onChange={chagneValueHandler} checked={typeValue === 'movie' ? true : false} name="findSeriesType" id="seriesFind" />
                            <span>Movies </span>
                        </label>
                        
                    </div>


                    <form   onSubmit={handleSubmit} >
                        
                        <input type="search"
                        value={searchValue} 
                        onChange={changeSearchHandle} 
                        placeholder="Search for a movie or tv show...." />

                        <input type="submit"  value="Search" />

                    </form>

                </div>
            </div>
        </>
    )
}

export default SearchBarCardComponents;








// .searchInput {
//     display: flex;
//     align-items: center;
//     width: 100%;
//     input {
//         width: calc(100% - 100px);
//         height: 50px;
//         background-color: white;
//         outline: 0;
//         border: 0;
//         border-radius: 30px 0 0 30px;
//         padding: 0 15px;
//         font-size: 14px;
//         @include md {
//             width: calc(100% - 150px);
//             height: 60px;
//             font-size: 20px;
//             padding: 0 30px;
//         }
//     }



//     button {
//         width: 100px;
//         height: 50px;
//         background: var(--gradient);
//         color: white;
//         outline: 0;
//         border: 0;
//         border-radius: 0 30px 30px 0;
//         font-size: 16px;
//         cursor: pointer;
//         @include md {
//             width: 150px;
//             height: 60px;
//             font-size: 18px;
//         }
//     }
import  React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import CardMoviesComponents from '../../Components/CardMovies';
import PaginationComponent from '../../Components/Pagination';
import { useParams } from 'react-router-dom';

import './style.css'
import Alpha from '../../Components/Alpha/Alpha';
import Spinner from '../../Components/Spinner/Spinner';

const  HomeContainer = (  ) => {


    const [content, setContent] = useState([]);  // create an array 
    const [pageno, setPageno] = useState(1);
    const [paginationno, setPaginationno] = useState(0);   // set total pages
    // const { type } = useParams();

    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;   // process.env is a global obj. use by default
    // console.log( "API key is :" , API_KEY );


    const GetDataTrending = async () => {

        const  {data}  = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`)
        console.log( "data.results for home gfhgfgfhg is : " , data.results );
        setContent(data.results);
        setPaginationno(data.total_pages);  // find total pages 

    }

    useEffect(()=>{
       // eslint-disable-next-line
        GetDataTrending();
        
    }, [])

    const handleClick = (number) => {
        console.log("number is " , number );
        setPageno(number);
    }

    useEffect(()=>{

        // eslint-disable-next-line
        GetDataTrending();
      
    }, [pageno])    


    return (


        <div>
            <Alpha currentpage={pageno} />
            {/* <Alpha /> */}

        <main className='homePage'>

            <Container>
                <Row>
                    <Col className='col-12'>
                        <section>
                            <h1 className='txtCenter'>Welcome.</h1>
                            <h3 className='txtCenter'>Millions of movies, TV shows and people to discover. Explore now. </h3>
                        </section>
                    </Col>
                    
                    {
                        content && content.length > 0 ? content.map((item, index)=>{
                            return (<CardMoviesComponents key={index} data={item} /> ) 

                        }) : 
                        <Spinner />
                        // 'Loading ....'
                    }


                {
                    paginationno && paginationno > 1 ? <PaginationComponent maxnum={paginationno} activenum={pageno} handleClick={handleClick}/> : ''
                }
                    
                </Row>
            </Container>
            
        </main>

         </div>
    )


}
export default HomeContainer;

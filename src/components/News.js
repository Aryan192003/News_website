

import React, { useEffect,useState } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    
        //document.title = `${this.capitalize(props.categories)}-NewsMonkeyS`
    

        const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.categories}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedata = await data.json();
        props.setProgress(70);
        setArticles(parsedata.articles)
        setTotalResults(parsedata.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalize(props.categories)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])

    // const handleNextPage = async () => {
    //     if (!(page + 1 > Math.ceil(totalResults / 20))) {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=business&apiKey=c8b592990fd14a989eab9f5dd360f019&page=${page + 1}&pageSize=${props.pageSize}`;
    //         this.setState({ loading: true })
    //         let data = await fetch(url);
    //         let parsedata = await data.json();

    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parsedata.articles,
    //             loading: false
    //         })
    //     }
    // }

    // const handlePrevPage = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=business&apiKey=c8b592990fd14a989eab9f5dd360f019&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    //     this.setState({ loading: true })
    //     let data = await fetch(url);
    //     let parsedata = await data.json();

    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedata.articles,
    //         loading: false
    //     })
    // }

    const fetchData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.categories}&apiKey=c8b592990fd14a989eab9f5dd360f019&page=${page+1}&pageSize=${props.pageSize}`; 
        
       setPage(page+1)
       
        let data = await fetch(url);
        let parsedata = await data.json();
        
        setArticles(articles.concat(parsedata.articles))
        setTotalResults(parsedata.totalResults)
        
      }


        return (
            <>
                <h1 className="text-center " style={{margin: '35px 0px',marginTop: '65px'}}>Top Headlines on {capitalize(props.categories)} category</h1>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                    <div className="row">
                    {articles.map((elements) => {
                        return <div className="col-md-4" key={elements.url}>
                            <NewsItem title={elements.title} description={elements.description} imageUrl={elements.urlToImage} newsUrl={elements.url} author={elements.author} date={elements.publishedAt} source={elements.source.name} />
                        </div>
                    })}


                </div>
                </div>
                </InfiniteScroll>
                
            </>
        )
    
}

News.defaultProps = {
    country: 'in',
    pageSize: 5,
    categories: 'general'
}
News.PropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    categories: PropTypes.string,
}


export default News

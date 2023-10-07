import React from 'react'

const NewsItem =(props) => {
  
    let {title,description,imageUrl,newsUrl,author,date,source}= props;
    return (
      <div className='my-3'>
       <div className="card" >
        <div style={{display:'flex', justifyContent:'flex-end', position: 'absolute', right: '0'}}>
       <span class="badge rounded-pill bg-danger" style={{zIndex:'1'}}>{source}</span>
       </div>
  <img src={!imageUrl?"https://www.reuters.com/resizer/S3d6w4PFQb8ZABkbvszKzlxwrqY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/THFRJDWFVRPMFDYBRVI2TFBH7U.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"> <small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
</div>
    )
  
}

export default NewsItem

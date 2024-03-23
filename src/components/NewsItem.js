import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    const categoryColors = {
     'sports': 'primary',
     'general': 'secondary',
     'science': 'dark',
     'health': 'danger',
     'technology': 'success',
     'entertainment': 'warning',
     'business': 'info'
   };
    let { title, description, imageUrl, newsUrl, author, date, source, category } = this.props;
    const badgeColorClass = categoryColors[category];
    return (
      <div className='my-3'>
        <div className="card " style={{ width: "18rem" }}>
          <img src={!imageUrl ? "https://c.ndtvimg.com/2023-06/ftr76vck_india-population_625x300_29_June_23.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${badgeColorClass}`} style={{zIndex:'1'}} >
              {source}</span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="bg-dark text-white">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <div className="d-flex align-items-center justify-content-center vh-6">
              <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

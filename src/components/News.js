import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  OnPreClick = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4db44da849824945b692d2d857c60f4e&page=${this.state.page - 1}&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  OnNextClick = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4db44da849824945b692d2d857c60f4e&page=${this.state.page + 1}&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4db44da849824945b692d2d857c60f4e&page=1&pageSize=15"
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsHunt - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
          </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick = {this.OnPreClick}>&larr; Previous</button>
        <button disabled = {this.state.page+1>Math.ceil(this.state.totalResults/15)} type="button" className="btn btn-dark" onClick = {this.OnNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News

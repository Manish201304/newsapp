import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4db44da849824945b692d2d857c60f4e"
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
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
      </div>
    )
  }
}

export default News

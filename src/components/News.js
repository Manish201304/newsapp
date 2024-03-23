import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "entertainment"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  captilizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    console.log("hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.captilizeFirstLetter(this.props.category)} - News_Hunts`;
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6b47bfdcee0248d78f569371dde461b9&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  OnPreClick = async()=>{
    this.updateNews()
    this.setState({page: this.state.page - 1})
  }

  OnNextClick = async()=>{
    this.updateNews()
    this.setState({page: this.state.page + 1})
  }

  async componentDidMount(){
    this.updateNews()
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsHunt - Top {this.captilizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name} category = {this.props.category}/>
          </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick = {this.OnPreClick}>&larr; Previous</button>
        <button disabled = {this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick = {this.OnNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News

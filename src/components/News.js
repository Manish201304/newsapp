import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
     "source":{"id":"news-com-au","name":"News.com.au"},
     "author":null,"title":"Serious concerns after sickening incident","description":"Victorian cricketer Will Pucovski has been forced to retire hurt after copping a sickening blow to the helmet during the Sheffield Shield match against Tasmania in Hobart.","url":"https://www.news.com.au/sport/cricket/victorias-will-pucovski-retires-hurt-after-sickening-blow-in-sheffield-shield-match/news-story/992d85abb42b7c1a5555095aaacd4338","urlToImage":"https://content.api.news/v3/images/bin/eecb73fed5529b3eb7f1629b0303bccf","publishedAt":"2024-03-03T04:30:00Z","content":"Victorian cricketer Will Pucovski has been forced to retire hurt after copping a sickening blow to the helmet during the Sheffield Shield match against Tasmania in Hobart.\r\nWhile facing Tigers fast b… [+2892 chars]"},

     {"source":{"id":"australian-financial-review","name":"Australian Financial Review"},"author":"Aaron Weinman","title":"Macquarie, Julius Baer struggle over $US455m venture investment in India’s Byju’s","description":"Macquarie launched an investment effort named after Indian cricketer Virat Kohli into Byju Raveendran’s online education tech company.","url":"http://www.afr.com/companies/financial-services/swiss-bank-accuses-macquarie-of-distorting-valuations-for-higher-fees-20240229-p5f8u9","urlToImage":"https://static.ffx.io/images/$zoom_0.2648%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_96/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/a3886ffa49d7ca1aa4579e3254dc597c148a854c","publishedAt":"2024-03-03T00:02:19Z","content":"In his letter to Macquarie in January, obtained by The Australian Financial Review, Julius Baers Mr Bonzon said requests for updates were often unanswered or sparing, while information about audit ti… [+4085 chars]"},
     
     {"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com","description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg","publishedAt":"2020-04-27T11:41:47Z","content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"},
     
     {"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com","description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg","publishedAt":"2020-03-30T15:26:05Z","content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"}
    
  ]
  constructor(){
    super();
    console.log("hello I am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsHunt - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title.slice(0,40)} description={element.description.slice(0,80)} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
          </div>
          })}
        </div>
      </div>
    )
  }
}

export default News

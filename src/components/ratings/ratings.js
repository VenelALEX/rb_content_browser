/*
author:       Alexander BRENNER
description:  WingBrowser - Small Content browser web application
date:         03/05/22
filename:     ratings.js
*/

import './ratings.scss';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'
import {withRouter} from "../withRouter/withRouter"

const testdata = [
  {
      "id": "AADFN31398UHU9D8M8HI",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "1363270372082-1037323375",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-27V5NWTQN2111",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-28G5V4BA11W11",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-28G5VB2KN1W11",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AAGISFQ7SJ7TTUIZRTB2",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "1381417050664-1078849627",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1YGPYXJC92112",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1T83QSW3N2112",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1J68FMWAW1W14",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AADFN31398UHU9D8M8HI",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "1363270372082-1037323375",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-27V5NWTQN2111",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-28G5V4BA11W11",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-28G5VB2KN1W11",
      "rating": 4,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AAGISFQ7SJ7TTUIZRTB2",
      "rating": 3,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "1381417050664-1078849627",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1YGPYXJC92112",
      "rating": 4,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1T83QSW3N2112",
      "rating": 3,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1J68FMWAW1W14",
      "rating": 2,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AADFN31398UHU9D8M8HI",
      "rating": 1,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "1363270372082-1037323375",
      "rating": 2,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-27V5NWTQN2111",
      "rating": 4,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-28G5V4BA11W11",
      "rating": 2,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-28G5VB2KN1W11",
      "rating": 4,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AAGISFQ7SJ7TTUIZRTB2",
      "rating": 2,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "1381417050664-1078849627",
      "rating": 3,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1YGPYXJC92112",
      "rating": 1,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1T83QSW3N2112",
      "rating": 2,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1J68FMWAW1W14",
      "rating": 3,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AADFN31398UHU9D8M8HI",
      "rating": 4,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "1363270372082-1037323375",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-27V5NWTQN2111",
      "rating": 1,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-28G5V4BA11W11",
      "rating": 1,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-28G5VB2KN1W11",
      "rating": 1,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AAGISFQ7SJ7TTUIZRTB2",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "1381417050664-1078849627",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1YGPYXJC92112",
      "rating": 2,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1T83QSW3N2112",
      "rating": 4,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1J68FMWAW1W14",
      "rating": 4,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AADFN31398UHU9D8M8HI",
      "rating": 2,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "1363270372082-1037323375",
      "rating": 2,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-27V5NWTQN2111",
      "rating": 1,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-28G5V4BA11W11",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-28G5VB2KN1W11",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AAGISFQ7SJ7TTUIZRTB2",
      "rating": 2,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "1381417050664-1078849627",
      "rating": 3,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1YGPYXJC92112",
      "rating": 1,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1T83QSW3N2112",
      "rating": 2,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1J68FMWAW1W14",
      "rating": 3,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AADFN31398UHU9D8M8HI",
      "rating": 3,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "1363270372082-1037323375",
      "rating": 2,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-27V5NWTQN2111",
      "rating": 1,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-28G5V4BA11W11",
      "rating": 1,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-28G5VB2KN1W11",
      "rating": 4,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AAGISFQ7SJ7TTUIZRTB2",
      "rating": 4,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "1381417050664-1078849627",
      "rating": 5,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1YGPYXJC92112",
      "rating": 1,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1T83QSW3N2112",
      "rating": 2,
      "user_id": "a.reinhardbrenner@gmail.com"
  },
  {
      "id": "AA-1J68FMWAW1W14",
      "rating": 3,
      "user_id": "a.reinhardbrenner@gmail.com"
  }
]

var video_db = [ 
  {
    
    "id": "AADFN31398UHU9D8M8HI",
    "mediaType": "video",
    "title": "Festive Film - Prank Moment - 16:9",
    "topic": "Formula 1",
    "length": "00:00:41",
    "contentUrl": "https://cs.liiift.io/v1/RBMN/pd/2/9W/V1/4Y/6P/15/13/FO-29WV14Y6P1513.mp4/a:h/FO-29WV14Y6P1513_proxy_hd_720.mp4?ht=exp=1676592000+hmac=ae04a66c85bd71325c12107673fbf859",
    "previewUrl": "https://img.liiift.io/v1/RBMN/FO-29WV14VVE1511.jpg/a:h/im/FO-29WV14VVE1511_reference_keyframe.jpg?ht=exp=1676592000+hmac=4db788c13df77d2829ac8f7584e87ec1"
  },
  {
    "id": "1363270372082-1037323375",
    "mediaType": "video",
    "title": "Funny Moments",
    "description": "Spectators at the first ever Red Bull Soapbox Race in Oman saw an amazing amount of creativity coupled with lots of energy as they witnessed everything from unicorns and flying carpets to coffee machines race down Bausher Sand Dunes in the quest for fame and glory. Thousands of people lined the street throughout the day to cheer the craziest \u2018road race\u2019 the nation has ever seen!\r\nThe team titled \u2018No Flying Yoke\u2019 claimed the top podium spot and with it an all-expense paid trip to the Formula 1 Grand Prix in Abu Dhabi along with an exclusive paddock walk to experience the F1 garage and the chance to meet the Red Bull Racing Team.",
    "topic": "Soapbox Racing",
    "length": "00:01:24",
    "contentUrl": "https://cs.liiift.io/v1/RBMN/pd/1/E7/RW/RY/6W/25/11/FO-1E7RWRY6W2511.mp4/a:h/FO-1E7RWRY6W2511_proxy_hd_720.mp4?ht=exp=1676592000+hmac=5c1136cf1af632be1cf3061f6cb899d0",
    "previewUrl": "https://img.liiift.io/v1/RBMN/FO-1YPTE8CY15N11.jpg/a:h/im/FO-1YPTE8CY15N11_reference_keyframe.jpg?ht=exp=1676592000+hmac=e2cf88108dc7bf72176a16d59859b725"
  },
  {
    "id": "AA-27V5NWTQN2111",
    "mediaType": "video",
    "title": "Action Clip (Dirty)",
    "topic": "Mountainbike Enduro",
    "length": "00:03:06",
    "contentUrl": "https://cs.liiift.io/v1/RBMN/pd/2/9W/US/4R/4X/15/13/FO-29WUS4R4X1513.mp4/a:h/FO-29WUS4R4X1513_proxy_hd_720.mp4?ht=exp=1676592000+hmac=24f741177329cb905e73ab5092d0de60",
    "previewUrl": "https://img.liiift.io/v1/RBMN/FO-29WUS4MMA1511.jpg/a:h/im/FO-29WUS4MMA1511_reference_keyframe.jpg?ht=exp=1676592000+hmac=9a9b16bf0f970c6b25c1f6be094bafe8"
  },
  {
    "id": "AA-28G5V4BA11W11",
    "mediaType": "video",
    "title": "RBMH Publishing Imagevideo - Carpe Diem TVC",
    "length": "00:00:30",
    "contentUrl": "https://cs.liiift.io/v1/RBMN/pd/2/9D/RS/4E/8P/15/13/FO-29DRS4E8P1513.mp4/a:h/FO-29DRS4E8P1513_proxy_hd_720.mp4?ht=exp=1676592000+hmac=fd3d9680f7e5f706b3a823cc2dc13d28",
    "previewUrl": "https://img.liiift.io/v1/RBMN/FO-29DRS4BX21511.jpg/a:h/im/FO-29DRS4BX21511_reference_keyframe.jpg?ht=exp=1676592000+hmac=c60d4f54181554c062e9838795b51f88"
  },
  {
    "id": "AA-28G5VB2KN1W11",
    "mediaType": "video",
    "title": "RBMH Publishing Imagevideo - Carpe Diem TVC",
    "length": "00:00:30",
    "contentUrl": "https://cs.liiift.io/v1/RBMN/pd/2/9D/RY/SJ/UT/15/13/FO-29DRYSJUT1513.mp4/a:h/FO-29DRYSJUT1513_proxy_hd_720.mp4?ht=exp=1676592000+hmac=b3dc9afdf4661c9453fcf2d2374a3694",
    "previewUrl": "https://img.liiift.io/v1/RBMN/FO-29DRYSQYX1511.jpg/a:h/im/FO-29DRYSQYX1511_reference_keyframe.jpg?ht=exp=1676592000+hmac=db3e56cb3456939d1fb6deddee293494"
  },
  {
    "id": "AAGISFQ7SJ7TTUIZRTB2",
    "mediaType": "video",
    "title": "Red Bull Homerun Lyze vs SNB",
    "topic": "Skiing",
    "length": "00:00:18",
    "contentUrl": "https://cs.liiift.io/v1/RBMN/pd/2/A7/MA/K1/Z6/11/14/FO-2A7MAK1Z61114.mp4/a:h/FO-2A7MAK1Z61114_proxy_hd_720.mp4?ht=exp=1676592000+hmac=f35e05598b741b39f903b6ceae575b31",
    "previewUrl": "https://img.liiift.io/v1/RBMN/FO-2A7MAJZ5E1111.jpg/a:h/im/FO-2A7MAJZ5E1111_reference_keyframe.jpg?ht=exp=1676592000+hmac=4cc895405cf511510d3ef009b844eb94"
  },
  {
    "id": "1381417050664-1078849627",
    "mediaType": "video",
    "title": "POV Winner",
    "description": "For the first time, this unique, non-motorised racing event challenged  both experienced  and amateurs racers in Argentina. Fourty teams were chosen to be part of the crazy competition that take place in Corrientes Avenue,  the heart of Buenos Aires.",
    "topic": "Sport Various",
    "length": "00:01:16",
    "contentUrl": "https://cs.liiift.io/v1/RBMN/pd/1/EA/8X/X7/31/25/11/FO-1EA8XX7312511.mp4/a:h/FO-1EA8XX7312511_proxy_hd_720.mp4?ht=exp=1676592000+hmac=97aceb7302fae8e36a06e2d53aefb8dd",
    "previewUrl": "https://img.liiift.io/v1/RBMN/FO-1YPS43B555N11.jpg/a:h/im/FO-1YPS43B555N11_reference_keyframe.jpg?ht=exp=1676592000+hmac=f20bacd4e62912057a7b4b8100ce4911"
  },
  {
    "id": "AA-1YGPYXJC92112",
    "mediaType": "video",
    "title": "Serial Program",
    "topic": "Freeskiing Big Mountain/Freeride",
    "length": "00:04:35",
    "contentUrl": "https://cs.liiift.io/v1/RBMN/pd/2/1K/BX/WN/WW/BH/11/FO-21KBXWNWWBH11.mp4/a:h/FO-21KBXWNWWBH11_proxy_hd_720.mp4?ht=exp=1676592000+hmac=ae4663b1f9369e782d90755b8f4fd928",
    "previewUrl": "https://img.liiift.io/v1/RBMN/FO-21KC4U495BH11.jpg/a:h/im/FO-21KC4U495BH11_reference_keyframe.jpg?ht=exp=1676592000+hmac=7bcb004b2f88b6047509bdad03fe2588"
  },
  {
    "id": "AA-1T83QSW3N2112",
    "mediaType": "video",
    "title": "Clip",
    "length": "00:02:31",
    "contentUrl": "https://cs.liiift.io/v1/RBMN/pd/1/T8/3R/NY/NS/21/11/FO-1T83RNYNS2111.mp4/a:h/FO-1T83RNYNS2111_proxy_hd_720.mp4?ht=exp=1676592000+hmac=ed6f71ceda2448ea211e97a863902a14",
    "previewUrl": "https://img.liiift.io/v1/RBMN/FO-1YR1VDHXN5N11.jpg/a:h/im/FO-1YR1VDHXN5N11_reference_keyframe.jpg?ht=exp=1676592000+hmac=03fc0790239b30ff21188988020f3d2d"
  },
  {
    "id": "AA-1J68FMWAW1W14",
    "mediaType": "video",
    "title": "POLDARK EXPRESS",
    "description": "The legendary Red Bull Soapbox Race arrived back in London for 2015 at Alexandra Palace where 65 teams oozed courage and conviction to compete in the iconic event. \r\n\r\nWatch this clip of one of our featured teams as they take on the iconic track, and get judged on their speed, creativity and showmanship.",
    "topic": "Soapbox Racing",
    "length": "00:01:46",
    "contentUrl": "https://cs.liiift.io/v1/RBMN/pd/1/J8/VC/RG/KW/1W/11/FO-1J8VCRGKW1W11.mp4/a:h/FO-1J8VCRGKW1W11_proxy_hd_720.mp4?ht=exp=1676592000+hmac=b11a18aad2ae05ac67283ef4a7f8b24e",
    "previewUrl": "https://img.liiift.io/v1/RBMN/FO-1YNS51ECW5N11.jpg/a:h/im/FO-1YNS51ECW5N11_reference_keyframe.jpg?ht=exp=1676592000+hmac=22efed8d9aa64fbd99d5f7361b341ac2"
  }
]

class Ratings extends React.Component {

  constructor(props){
    super(props)
    this.state = {ratings: []}
  }

  componentDidMount(){
    this.loadRatings();
  }

  loadRatings(){
    var ratings_arr = [];
    var ratings_all = [];

    for(var i=0; i < testdata.length; i++){
      if(!ratings_arr.includes(testdata[i].id)){
        var ratings_count = 0;
        var ratings_sum = 0;
        for(var j=0; j < testdata.length; j++){
          if(testdata[i].id == testdata[j].id){
            ratings_count += 1;
            ratings_sum += testdata[j].rating
          }
        }
        ratings_arr.push(testdata[i].id);
        var single_ratings = {id: testdata[i].id, rating: ratings_sum/ratings_count, title: "", topic: "", contentUrl: ""}
        ratings_all.push(single_ratings);
      }
    }
    let sortedData = ratings_all.slice().sort((a, b) => b.rating - a.rating);
    sortedData = sortedData.slice(0, 10)

    this.loadContentData(sortedData);
  }

  loadContentData(sortedData){
    for(var i=0; i < sortedData.length; i++){
      for(var j=0; j < video_db.length; j++){
        if(video_db[j].id == sortedData[i].id){
          sortedData[j].title = video_db[j].title;
          sortedData[j].topic = video_db[j].topic;
          sortedData[j].contentUrl = video_db[j].contentUrl;
        }
      }
    }

    this.setState({ratings: sortedData})
  }

  render(){
    return (
      <div className="ratings-wrap">
          <Container>
            <div className="ratings-mask-wrap">
              <h1 className="wb-headline">Trending</h1>
              <ListGroup as="ol" numbered>
                {
                  this.state.ratings.map((element, index) => {
                      return(
                        <ListGroup.Item
                          as="li"
                          className="d-flex justify-content-between align-items-start"
                          variant={index % 2 != 0 ? "secondary" : ""}
                          key={index}
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">
                              <a className="wb-rating-link" href={element.contentUrl}>{element.title}</a>
                            </div>
                            <span>{element.topic}</span>
                          </div>
                          <Badge className="primary wb-pill" pill>
                            {Math.round(element.rating*10)/10}
                          </Badge>
                        </ListGroup.Item>  
                            )    
                        
                  })
                }         
                </ListGroup>
              </div>
            </Container>
      </div>
    );
  }
}

export default withRouter(Ratings);

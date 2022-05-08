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
import db from '../../firebase-config.js'
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { SpinnerCircular } from 'spinners-react';


class Ratings extends React.Component {

  constructor(props){
    super(props)
    this.state = {ratings: [], isLoaded: false}
  }

  componentDidMount(){
    this.loadRatings();
  }

  async loadRatings(){

    var col = await getDocs(collection(db, 'ratings'))
    var newCol = col.docs.map((doc) => doc.data());

    var ratings_arr = [];
    var ratings_all = [];

    for(var i=0; i < newCol.length; i++){
      if(!ratings_arr.includes(newCol[i].content_id)){
        var ratings_count = 0;
        var ratings_sum = 0;
        for(var j=0; j < newCol.length; j++){
          if(newCol[i].content_id === newCol[j].content_id){
            ratings_count += 1;
            ratings_sum += newCol[j].rating
          }
        }
        ratings_arr.push(newCol[i].content_id);
        var single_ratings = {id: newCol[i].content_id, rating: ratings_sum/ratings_count, title: "", topic: "", contentUrl: ""}
        ratings_all.push(single_ratings);
      }
    }
    let sortedData = ratings_all.slice().sort((a, b) => b.rating - a.rating);
    sortedData = sortedData.slice(0, 10)

    this.loadContentData(sortedData);
  }

  async loadContentData(sortedData){
    for(var i=0; i < sortedData.length; i++){
      var q = query(collection(db, "wb_content"), where("id", "==", sortedData[i].id));
      var querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        var data = doc.data()
        sortedData[i].title = data.title;
        sortedData[i].topic = data.topic;
        sortedData[i].contentUrl = data.contentUrl;
      });
    }
    this.setState({ratings: sortedData, isLoaded: true})
  }

  render(){
    if(!this.state.isLoaded){
      return(<div className="base-wrap-loading">
        <SpinnerCircular color="#E21B4D" size="100" speed="150"/>
      </div>);
    }else{
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
                            variant={index % 2 !== 0 ? "secondary" : ""}
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
}

export default withRouter(Ratings);

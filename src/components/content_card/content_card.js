/*
author:       Alexander BRENNER
description:  WingBrowser - Small Content browser web application
date:         03/05/22
filename:     base.js
*/

import './content_card.scss';
import React from 'react';
import Badge from 'react-bootstrap/Badge'
import ReactPlayer from 'react-player'
import StarRatings from 'react-star-ratings';
import db from '../../firebase-config.js'
import { collection, addDoc, updateDoc, getDocs, where, query } from "firebase/firestore"; 


class ContentCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {id: props.id, mediaType: props.mediaType, title: props.title, topic: props.topic, description: props.description,
                  contentUrl: props.contentUrl, previewUrl: props.previewUrl, rating: props.rating}
    this.changeRating = this.changeRating.bind(this);
    }

  async changeRating( newRating, name ) {
    var email_s = sessionStorage.getItem("Email")

    var modeUpdate = 0;

    var q = query(collection(db, "ratings"), where("user_id", "==", sessionStorage.getItem("Email")), where("content_id", "==", name));
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      updateDoc(doc.ref, {
        rating: newRating
      })
      modeUpdate = 1;
    });
    
    if(modeUpdate){
      this.setState({rating: newRating})
      return;
    }else{
      await addDoc(collection(db, "ratings"), {
        content_id: name,
        rating: newRating,
        user_id: email_s
      });
      this.setState({rating: newRating})
    }
  }

  render(){
    return (
      <div className="content-card" data-aos="fade-up">
        <ReactPlayer width="100%" height="200px" light={this.state.previewUrl} url={this.state.contentUrl} controls={true}/>
        <h5 className="wb_content_title">{this.state.title}</h5>
        <Badge className="primary wb-pill" pill>
        {this.state.topic}
                </Badge>
        <p>{this.state.description}</p>

        <div className="ratings-container">
          My Rating: 
          <StarRatings
          rating={this.state.rating}
          starHoverColor="#ffd400"
          starRatedColor="#ffd400"
          changeRating={this.changeRating}
          numberOfStars={5}
          starDimension="25px"
          name={this.state.id}
          />
        </div>
      </div>
    );
  }
}

export default ContentCard;

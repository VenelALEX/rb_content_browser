/*
author:       Alexander BRENNER
description:  WingBrowser - Small Content browser web application
date:         03/05/22
filename:     base.js
*/

import './content_card.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Badge from 'react-bootstrap/Badge'
import ReactPlayer from 'react-player'
import StarRatings from 'react-star-ratings';
import db from '../../firebase-config.js'
import { collection, addDoc } from "firebase/firestore"; 


class ContentCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {id: props.id, mediaType: props.mediaType, title: props.title, topic: props.topic, description: props.description,
                  contentUrl: props.contentUrl, previewUrl: props.previewUrl}
  }

  async changeRating( newRating, name ) {
    var email_s = sessionStorage.getItem("Email")
    
    await addDoc(collection(db, "ratings"), {
      content_id: name,
      rating: newRating,
      user_id: email_s

    });
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
          <StarRatings
          rating={this.state.rating}
          starHoverColor="#ffd400"
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

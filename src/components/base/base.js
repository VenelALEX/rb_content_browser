/*
author:       Alexander BRENNER
description:  WingBrowser - Small Content browser web application
date:         03/05/22
filename:     base.js
*/

import './base.scss';
import React from 'react';
import db from '../../firebase-config.js'
import { getDocs, collection } from 'firebase/firestore'
import ContentCard from '../content_card/content_card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SpinnerCircular } from 'spinners-react';
import {withRouter} from "../withRouter/withRouter"

class Base extends React.Component {

  constructor(props){
    super(props);
    this.state = { content : [], isLoading: true, loggedIn: false};
  }

  componentDidMount(){
    this.loadContentFromDb();
  }

  async loadContentFromDb(){

    var col = await getDocs(collection(db, 'wb_content'))
    var newCol = col.docs.map((doc) => doc.data());

    this.setState({content: newCol, isLoading: false});
    
  }

  render(){
    if(this.state.isLoading){
      return(
      <div className="base-wrap-loading">
        <SpinnerCircular color="#E21B4D" size="100" speed="150"/>
      </div>)
    }else{
      return (
        <div className="base-wrap">
          <Container>
            <Row md={3} xs={1}>
          {
            this.state.content.map((element, index) => {
                return(
                  <Col>
                    <ContentCard key={index}
                      id={element.id} 
                      mediaType={element.mediaType} 
                      title={element.title} 
                      topic={element.topic} 
                      description={element.description} 
                      contentUrl={element.contentUrl} 
                      previewUrl={element.previewUrl} />
                    </Col>   
                      )    
                   
            })
          }
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default withRouter(Base);

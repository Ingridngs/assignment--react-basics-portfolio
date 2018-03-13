import React, { Component } from 'react';
import MainSummary from "./Summary"
import MainContact from "./ContactInfo"
import MainHeader from "./Header"

class Content extends Component {
  render() {
    return (
    	      <div className="portfolio-content">
               <MainHeader/>
               <MainSummary/>
               <MainContact/>
               	
             </div>
    );
  }
}

export default Content;

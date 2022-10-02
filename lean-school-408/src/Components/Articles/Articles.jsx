import React from 'react'
import "./Articles.css"
import LagreArticleGallery from './LagreArticleGallery';
import SmallArticleGallery from './SmallArticleGallery';
import { Label } from "../StyledComponents/Label";

const Articles = () => {
  return (
    <div>
      <div className="dense-container">
        <div className="large-articles">
          <LagreArticleGallery/>
        </div>
        <div className="medium-articles">
          <div>
            <img
              style={{ height: "120%", width:"100%"  }}
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_1024,q_90,f_auto,dpr_auto/v1662729938/ergnjjf7wh3uzlqyz8nm.jpg"
              alt=""
            />
          </div>
          <div>
            <h3>
              EXPLODING CLAY WITH NATHALEE PAOLINELLI
            </h3>
          </div>
          <Label style={{marginLeft:"-10%"}}> Culture | Sep 13</Label>
        </div>
        <div className="small-articles">
         <SmallArticleGallery/>
        </div>
      </div>
    </div>
  );
}

export default Articles

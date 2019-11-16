import React, { useState } from "react";
import { withMedia } from "react-media-query-hoc";

import * as Colors from "../../../config/colorConfig";
import * as Font from "../../../config/fontConfig";
import { fsc } from "../../../assets/fontControlHelper";

const FoodCards = props => {
  const { media, Data } = props;
  const [hover, setHover] = useState(false);

  const _handleHover = e => {
    setHover(!hover);
    const ID=document.getElementById(e.target.id)

    if (hover === true) {
      ID.style.transform = "scale(1)";
    } else {
      ID.style.transform = "scale(1.2)";
    }
  };

  return (
    <div className="container py-3 ">
      
      <div className="row">
        {Data.map((v, k) => (
          <div className='col-lg-4 col-md-6 p-4' key={k}>            
          <div className="card shadow" style={{ width: '100%',height:media.mobile?'100%':300 }}>
            <div
              style={{
                overflow: "hidden",
                height: media.mobile ? "100%" : "70%"
              }}
            >
              <img
                src={process.env.PUBLIC_URL + `${v.image}`}
                id={v.food_id}
                onMouseLeave={id => _handleHover(id)}
                onMouseOver={id => _handleHover(id)}
                className="card-img-top"
                style={{
                  transition: ".5s",
                  filter:'contrast(120%)',
                  
                }}
                alt="rooms"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{v.food_name}</h5>
              <div className="card-text" >
                <span className='w-100'>{v.food_name}</span><br/>
                <span>{v.size}</span><br/>
                <span style={{color:Colors.textBlack,fontWeight:'bold', fontSize:fsc(media,25)}}>{v.price} ks</span>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withMedia(FoodCards);

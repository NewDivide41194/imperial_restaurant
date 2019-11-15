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
    if (hover === true) {
      document.getElementById(e.target.id).style.transform = "scale(1)";
    } else {
      document.getElementById(e.target.id).style.transform = "scale(1.2)";
    }
  };
  return (
    <div className="container text-left py-3">
      <div className="d-flex flex-column align-items-center">
        <span
          style={{
            fontSize: fsc(media, 35),
            fontFamily: Font.bodyTitle,
            fontWeight: "bold"
          }}
        ></span>
        {/* file seprate */}
      </div>

      <div className="d-flex flex-row flex-wrap">
        {Data.map((v, k) => (
          <div className="col-lg-4 col-md-4 col-sm-6 p-3" key={k}>
            <div
              className="d-flex flex-column bg-light w-100"
              style={{ transition: "1s" }}
            >
              <div
                className="w-100"
                style={{
                  overflow: "hidden",
                  height: media.mobile
                    ? "140px"
                    : media.tablet
                    ? "130px"
                    : "190px"
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + `${v.image}`}
                  id={v.food_id}
                  onMouseLeave={id => _handleHover(id)}
                  onMouseOver={id => _handleHover(id)}
                  className="w-100"
                  style={{
                    transition: "1s"
                  }}
                  alt="rooms"
                />
              </div>
              <div className="d-flex flex-column px-3 py-3">
                <span
                  style={{
                    color: Colors.textBlack,
                    fontSize: fsc(media, 20),
                    fontWeight: "bold"
                  }}
                >
                  {v.food_name}
                </span>
                <span
                  style={{
                    color: Colors.textBlack,
                    fontSize: fsc(media, 14)
                  }}
                >
                  {v.size}
                </span>
                <span
                  style={{
                    color: Colors.textBlack,
                    fontSize: fsc(media, 30),
                    fontWeight: "bold"
                  }}
                >
                  $ {v.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withMedia(FoodCards);

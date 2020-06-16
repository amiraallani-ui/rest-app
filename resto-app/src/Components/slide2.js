import React, { Component } from "react";
import "./slide2.css";
export default class Slide2 extends Component {
  render() {
    return (
      <div className="gif-Container">
        <h2>Comment ça marche?</h2>
        <div className="gif">
          <div>
            <img
              width="auto"
              height="250"
              src="https://res.cloudinary.com/eatzy/image/upload/wszdp3zfhcuf1iyddhda.gif"
              alt=""
            ></img>
            <p>Choisissez vos plats</p>
            <p>variés et équilibrés</p>
          </div>
          <div>
            <img
              width="auto"
              height="250"
              src="https://66.media.tumblr.com/999adf4ab872bdc3571e9d0c46fc6d05/tumblr_mqtm3elxjx1rkbbjjo1_1280.gifv"
            ></img>
            <p> On vous livre</p>
            <p>chez vous</p>
          </div>
          <div>
            <img
              width="auto"
              height="250"
              src="https://res.cloudinary.com/eatzy/image/upload/ztez36ydl1grgzhybffl.gif"
              alt=""
            ></img>
            <p>Recevez votre box</p>
            <p>Degustez nos délices</p>
          </div>
          <div>
            <img
              width="auto"
              height="250"
              src="https://res.cloudinary.com/eatzy/image/upload/i29zjszypzm4axjjckwv.gif"
              alt=""
            ></img>
            <p>Modifiez ou arrêtez</p>
            <p>sans engagement</p>
          </div>
        </div>
      </div>
    );
  }
}

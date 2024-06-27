import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image  from "./aero-image/testimor1-64x64_64x64.png";

function second() {
  return (
    <div className="second-bg-img">
      <Carousel>
        <Carousel.Item style={{height: "80vh", backgroundColor: "transparent"}}>
          <Carousel.Caption className="h-100 p-3">
            <img src={image} alt="" style={{marginTop:"15%"}} />
            <h3 style={{marginTop:"5%"}}>NATHANAEL JAWORSKI</h3>
            <p style={{marginTop:"5%"}}>Mauris blandit, metus a venenatis lacinia, felis enim
              tincident est, condimentum vulputate orci augue eu metus. Fusce
              dictum, nisi et semper ultricies, felis tortor blandit odio,
              egestas consequet pur...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height: "80vh", backgroundColor: "transparent"}}>
          <Carousel.Caption className="h-100 p-3">
          <img src={image} alt="" style={{marginTop:"15%"}} />
            <h3>REBECKA FILSON</h3>
            <p>Mauris blandit, metus a venenatis lacinia, felis enim
              tincident est, condimentum vulputate orci augue eu metus. Fusce
              dictum, nisi et semper ultricies, felis tortor blandit odio,
              egestas consequet pur...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default second;

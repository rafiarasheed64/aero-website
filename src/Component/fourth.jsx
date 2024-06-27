import React, { Container, Row, Col } from "react-bootstrap";
import { BiRightArrowCircle } from "react-icons/bi";
// import Image from "./aero-image/";
function fourth() {
  return (
    <div>
      <Container fluid className="h-auto first">
        <Row >
          <Col xl={6} lg={6} md={12} sm={12} className="p-0 mt-2">
            <div className="w-100 h-100 position-relative ">
              <img
                className="w-100 h-100"
                src="https://aero-theme.myshopify.com/cdn/shop/files/img1-bottom-aero1.jpg?v=1613507033"
                alt=""
              />
            <div className="h-100 w-100 position-absolute top-0 start-0 content-div p-2 text-center">
              <h5 className="text-light mt-1 txtt1">NEW ARRIVALS</h5>
              <h2 className="text-warning mt-1 txtt2">GOOD HELP & GUARD</h2>
              <p className="text-light mt-1 txtt3">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequet, vel illum dolore eu feugiat nulla
                facilisis at vero eros
              </p>
              <button className="btnn mt-0 bg-light p-2 rounded-pill border-0">
                VEIW COLLECTION <BiRightArrowCircle className="fs-2" />
              </button>
            </div>
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} className="p-0 mt-2">
            <div className="w-100 position-relative">
              <img
                className="img-fluid w-100 h-100"
                src={
                  "https://aero-theme.myshopify.com/cdn/shop/files/img2-bottom-aero1.jpg?v=1613507033"
                }
                alt=""
              />
              <div className="position-absolute top-0 start-0 content-div p-2 text-center">
                <h5 className="text-light mt-1 txtt1">BESTSELLER PRODUCTS</h5>
                <h2 className="text-warning mt-1 txtt2">TOP 10 VEHICLES OFF WEEK</h2>
                <p className="text-light mt-1 txtt3">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequet, vel illum dolore eu feugiat
                  nulla facilisis at vero eros
                </p>
                <button className="btnn mt-0 bg-light p-1 rounded-pill border-0">
                  VEIW COLLECTION <BiRightArrowCircle className="fs-2" />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default fourth;

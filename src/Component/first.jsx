// import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "./aero-image/img1.png";
import image1 from "./aero-image/img2.png";
import {
  BiStar,
  BiCart,
  BiSolidStar,
  BiHeart,
  BiBarChart,
  BiBullseye,
} from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function first() {
  return (
    <div>
      <Container fluid className="first con pt-4">
        <Row className="h-100 d-flex flex-column justify-content-center align-items-center ">
          <Col
            sm={12}
            className="  d-flex justify-content-center align-items-center "
          >
            <h1 className="text-light">WELCOME TO</h1>
          </Col>
          <Col
            sm={12}
            className="  d-flex justify-content-center align-items-center "
          >
            <h2 className="text-light">AERO CAR STORE</h2>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col sm={12} md={6}>
            <div className="w-100 h-100 ">
              <img src={image} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col sm={12} md={6} className=" d-flex flex-column gap-2 ">
            <div>
              <h3 className="text">MEET OUR</h3>
              <h3 className="text2">CAR CLUB SINCE 1892</h3>
              <p className="text3">CUSTOME AND CLUB</p>
            </div>
            <div>
              <p className="para">
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam littera gothica,
                quam nunc putamus parum claram, anteposuerit litterarum formas
                humanitatis per seacula quarta decima et quinta decima.
              </p>
            </div>
            <div>
              <p className="para">
                Eodem modo typi, qui nunc nobis videntur parum clari, fiant
                sollemnes in futurum.
              </p>
            </div>
            <div>
              <h3 className="text4">JOHN DOE - CEO AERO</h3>
            </div>
            <div>
              <img src={image1} alt="" className="img-fluid" />
            </div>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col sm={12} md={6} lg={4} xl={4} className="position-relative ">
            <div className="w-100 h-100">
              <img
                className="img-fluid w-100 h-100"
                src="https://aero-theme.myshopify.com/cdn/shop/files/img1-top-aero1.jpg?v=1613507033"
                alt=""
              />
            </div>
            <div className="content-div position-absolute top-0 start-0">
              <h4 className="text-light txt1">NEW COLLECTION</h4>
              <h4 className="text-warning txt2">NEW TRENDING 2017-2018</h4>
              <h5 className="text-light txt3">SALE UPTO 20% OFF</h5>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} xl={4} className="position-relative mt-4 ">
            <div className="w-100 h-100  d-flex justify-content-center align-items-center">
              <img
                className="img-fluid w-100 h-100"
                src="https://aero-theme.myshopify.com/cdn/shop/files/img2-top-aero1.jpg?v=1613507033"
                alt=""
              />
            </div>
            <div
              sm={12}
              md={4}
              className="content-div position-absolute top-0 start-0 text-align-center"
            >
              <h4 className="text-light txt1">HONDA MOTORCYCLES</h4>
              <h4 className="text-warning txt2">RED SALE ENDS APRIL 30</h4>
              <h5 className="text-light txt3">SALE UPTO 20% OFF</h5>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} xl={4} className="position-relative mt-4 ">
            <div className="w-100 h-100  d-flex justify-content-start align-items-center">
              <img
                className="img-fluid w-100 h-100"
                src="https://aero-theme.myshopify.com/cdn/shop/files/img3-top-aero1.jpg?v=1613507033"
                alt=""
              />
            </div>
            <div
              sm={12}
              md={4}
              className="content-div position-absolute top-0 start-0 text-align-center"
            >
              <h4 className="text-light txt1">BEST LOW PRICE</h4>
              <h4 className="text-warning txt2">HIGH PERFORMANCE</h4>
              <h5 className="text-light txt3">SALE UPTO 20% OFF</h5>
            </div>
          </Col>
        </Row>
        <Row className="d-flex flex-column">
          <Col className=" d-flex justify-content-center  align-items-center gap-3">
            <h1 className="fs-3 text-light d-flex align-items-center mt-3">
              <BiSolidStar className="fs-5" /> FEATURED PRODUCTS{" "}
              <BiSolidStar className="fs-5" />
            </h1>
          </Col>
          <Col className="d-flex justify-content-center  align-items-center">
            <p className="text4">
              Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum.
            </p>
          </Col>
        </Row>
        <Row className="bg-wanring">
          <Col sm={12} md={6} xl={4}>
            <Card className="crd" style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="//aero-theme.myshopify.com/cdn/shop/products/1-600x600_400x400_crop_center.jpg?v=1519628616"
                className="img-1"
              />
              <Card.Img
                variant="top"
                src="https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_500x500_crop_center.jpg?v=1519628616"
                className="img-2"
              />
              <div className="icon-div">
                <BiHeart />
                <BiBarChart />
                <BiBullseye />
              </div>
              <Card.Body>
                <div>
                  <BiSolidStar style={{ color: "yellow" }} />
                  <BiSolidStar style={{ color: "yellow" }} />
                  <BiSolidStar style={{ color: "yellow" }} />
                  <BiSolidStar style={{ color: "yellow" }} />
                  <BiSolidStar style={{ color: "yellow" }} />
                  <span>1 reveiw</span>
                </div>
                <Card.Title className="text5">
                  AOPO DESIGNS WOOLRICH KLETTERSACK
                </Card.Title>
                <Card.Text className="text6">
                  Born to be worn. Clip on the worlds most wearable music player
                  and take up to 240 songs with you anywhere. Choose from five
                  colors including four new hues to...
                </Card.Text>
                <Card.Text className="text7">$150.00</Card.Text>
                <Button variant="primary" className="btn">
                  <BiCart /> Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Card className="crd" style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_500x500_crop_center.jpg?v=1519628616"
                className="img-1"
              />
              <Card.Img
                variant="top"
                src="https://aero-theme.myshopify.com/cdn/shop/products/4-600x600_ceb87a56-6b62-4a7c-a226-3ca7edddbc07_400x400_crop_center.jpg?v=1519629452"
                className="img-2"
              />
              <div className="icon-div">
                <BiHeart />
                <BiBarChart />
                <BiBullseye />
              </div>
              <Card.Body>
                <div>
                  <BiSolidStar style={{ color: "yellow" }} />
                  <BiSolidStar style={{ color: "yellow" }} />
                  <BiSolidStar style={{ color: "yellow" }} />
                  <BiSolidStar style={{ color: "yellow" }} />
                  <BiStar style={{ color: "yellow" }} />
                  <span>1 reveiw</span>
                </div>
                <Card.Title className="text5">
                  BOPO DESIGNS WOOLRICH KLETTERSACK
                </Card.Title>
                <Card.Text className="text6">
                  Born to be worn. Clip on the worlds most wearable music player
                  and take up to 240 songs with you anywhere. Choose from five
                  colors including four new hues to...
                </Card.Text>
                <Card.Text className="text7">$150.00</Card.Text>
                <Button variant="primary" className="btn">
                  <BiCart /> Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Card className="crd" style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://aero-theme.myshopify.com/cdn/shop/products/5-600x600_6bffe399-97df-4b21-9769-1ce9cd38e92b_500x500_crop_center.jpg?v=1519628755"
                className="img-1"
              />
              <Card.Img
                variant="top"
                src="https://aero-theme.myshopify.com/cdn/shop/products/7-600x600_56fa81c7-04c4-4294-b4b1-626b96689bbe_500x500_crop_center.jpg?v=1519628755"
                className="img-2"
              />
              <div className="icon-div">
                <BiHeart />
                <BiBarChart />
                <BiBullseye />
              </div>
              <Card.Body>
                <div>
                  <BiStar style={{ color: "yellow" }} />
                  <BiStar style={{ color: "yellow" }} />
                  <BiStar style={{ color: "yellow" }} />
                  <BiStar style={{ color: "yellow" }} />
                  <BiStar style={{ color: "yellow" }} />
                  <span>No reveiw</span>
                </div>
                <Card.Title className="text5">
                  COPO DESIGNS WOOLRICH KLETTERSACK
                </Card.Title>
                <Card.Text className="text6">
                  Born to be worn. Clip on the worlds most wearable music player
                  and take up to 240 songs with you anywhere. Choose from five
                  colors including four new hues to...
                </Card.Text>
                <Card.Text className="text7">$150.00</Card.Text>
                <Button variant="primary" className="btn">
                  <BiCart /> Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default first;

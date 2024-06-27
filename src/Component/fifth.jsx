import React,{ Container,Row, Col } from "react-bootstrap";
import {BiSolidStar} from "react-icons/bi"
function fifth (){
    return(
        <div className="first w-100">
            <Container className="w-100 d-flex flex-column align-items-center p-0">
            <h1 className="fs-3 text-light d-flex align-items-center mt-5">
          <BiSolidStar className="fs-5 "/> LATEST BLOG POST <BiSolidStar className="fs-5"/>
        </h1>
        <p className="text4">
          Claritas est etiam processus dynamicus, qui sequitur mutationem
          consuetudium lectorum.
        </p>
        <Row>
            <Col md={12} lg={6} sm={12} className="d-flex flex-wrap">
            <Col md={6} sm={12} >
            <img className="img-fluid w-100 h-100" src="https://aero-theme.myshopify.com/cdn/shop/articles/post1-270x334_b462aee1-714d-4ba8-866a-acba7f09ca18.jpg?v=1629927100" alt="" />
            </Col>
            <Col md={6} sm={12} className="text-center p-3">
            <h4 className="text-danger">25<span className="fs-5">/AUG</span></h4>
            <h4 className="text5">LADIPISCING ERAT LLENTESQUE PELLENTESQUE...</h4>
            <p className="text6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, praesentium eligendi. Tempore fugit, labore ea voluptates quo quaerat quisquam neque blanditiis hic est iusto sint quod odit cum velit delectus!</p>\
            <button className="btn1">READ MORE</button>
            </Col>
            </Col>
            <Col md={12} lg={6} sm={12} className="d-flex flex-wrap mt-4">
            <Col md={6} sm={12}>
            <img className="img-fluid w-100 h-100" src="https://aero-theme.myshopify.com/cdn/shop/articles/post1-270x334_b462aee1-714d-4ba8-866a-acba7f09ca18.jpg?v=1629927100" alt="" />
            </Col>
            <Col md={6} sm={12} className="text-center p-1">
            <h4 className="text-danger">25<span className="fs-5">/AUG</span></h4>
            <h4 className="text5">LADIPISCING ERAT LLENTESQUE PELLENTESQUE...</h4>
            <p className="text6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, praesentium eligendi. Tempore fugit, labore ea voluptates quo quaerat quisquam neque blanditiis hic est iusto sint quod odit cum velit delectus!</p>\
            <button className="btn1">READ MORE</button>
            </Col>
            </Col>
        </Row>
            </Container>

        </div>
    )
}
export default fifth

import {Container,Row ,Col} from "react-bootstrap";
import image from "./aero-image/logo-aero1.png"
import image1 from "./aero-image/payment.png"
import {BiLocationPlus, BiPhone, BiMailSend , BiLogoFacebook, BiLogoTwitter, BiLogoInstagram , BiLogoPinterest, BiLogoGmail } from "react-icons/bi"

function footer (){
    return(
        <div>
            <Container fluid  className="footer-img p-2">
                <Row className="m-5 border-bottom-2 d-flex justify-content-between">
                    <Col xl={3} md={6} sm={12} className="mt-2">
                    <img src={image} alt="" />
                    <p className="text6">We are a team of designers and developers who creates high quality premium Shopify themes.</p>
                    <Row className="d-flex align-items-center">
                        <span className="text-light"><BiLocationPlus className="text-danger"/> Address :No 40 Baria Sreet 133/2, NewYork, USA.</span>
                    </Row>
                    <Row className="d-flex align-items-center">
                        <span className="text-light"><BiPhone className="text-danger"/> Phone :(012) 800 456 789</span>
                    </Row>
                    <Row className="d-flex align-items-center">
                        <span className="text-light"><BiMailSend className="text-danger"/> Email :support@masstechnologist</span>
                    </Row>

                    </Col>
                    <Col xl={2} md={6} sm={12} className="brdr mt-2">
                        <h5 className="text-light">MAIN MENU</h5>
                        <ul className="list-unstyled">
                            <li className="text5">Home</li>
                            <li className="text5">Shop</li>
                            <li className="text5">Featured</li>
                            <li className="text5">Layouts</li>
                            <li className="text5">Pages</li>
                        </ul>
                    </Col>
                    <Col xl={2} md={6} sm={12} className="brdr mt-2">
                        <h5 className="text-light">MAIN MENU</h5>
                        <ul className="list-unstyled">
                            <li className="text5">Home</li>
                            <li className="text5">Shop</li>
                            <li className="text5">Featured</li>
                            <li className="text5">Layouts</li>
                            <li className="text5">Pages</li>
                        </ul>
                    </Col>
                    <Col xl={2} md={6} sm={12} className="brdr mt-2">
                        <h5 className="text-light">MAIN MENU</h5>
                        <ul className="list-unstyled">
                            <li className="text5">Home</li>
                            <li className="text5">Shop</li>
                            <li className="text5">Featured</li>
                            <li className="text5">Layouts</li>
                            <li className="text5">Pages</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="m-5 d-flex justify-content-between">
                    <Col xl={4} md={12}>
                    <p className="text6">Copyright © 2022 <span className="text5"> Aero Shopify Theme</span> All Rights Reserved</p>
                    </Col>
                    <Col xl={3} md={3} className="d-flex justify-content-around mt-3align-item-center">
                    <BiLogoFacebook className="text5"/>
                    <BiLogoPinterest className="text5"/>
                    <BiLogoGmail className="text5"/>
                    <BiLogoPinterest className="text5"/>
                    <BiLogoInstagram className="text5"/>
                    </Col>
                    <Col xl={3} md={12} className="mt-3">
                    <img style={{width: "auto"}} src={image1} alt="" className="img-fluid" />
                    </Col>
                </Row>

            </Container>


        </div>
    )
}
export default footer

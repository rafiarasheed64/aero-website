import {Container, Row, Col} from "react-bootstrap";
import {BiCart, BiHeart, BiSolidStar, BiStar, BiBarChart, BiBullseye, BiCaretRight  } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function third (){
    return(
        <div className="first p-3" >
            <Container className=" d-flex flex-column align-items-center">
            <h1 className="fs-3 text-light d-flex align-items-center">
          <BiSolidStar className="fs-5"/> OUR PRODUCTS <BiSolidStar className="fs-5"/>
        </h1>
        <p className="text4">
          Claritas est etiam processus dynamicus, qui sequitur mutationem
          consuetudium lectorum.
        </p>
          <ul className="text-light d-flex justify-content-between align-items-center list-unstyled">
            <li>WHEELS</li>
            <BiCaretRight/>
            <li>SOUNDS</li>
            <BiCaretRight/>
            <li>FEATURED</li>
            <BiCaretRight/>
            <li>HOME</li>
          </ul>
          <Row className="mt-3 flex-wrap">
            <Col xl={3} md={6} sm={12} className="HOME-PAGE WHEELS FEATURED ACTIVE-CARD">
            <Card className="crd" style={{ position: "relative" }}>
      <Card.Img variant="top" src="https://aero-theme.myshopify.com/cdn/shop/products/10-600x600_a19d3308-c9ac-40fa-ae8e-853a378e0592_500x500_crop_center.jpg?v=1519629467"/>
      <Card.Img className="img-2" variant="top" src="https://aero-theme.myshopify.com/cdn/shop/products/14-600x600_d4f6d321-f84e-4b64-8856-d6f46623dc3b_300x300_crop_center.jpg?v=1519629467" />
      <div className="icon-div">
        <BiHeart/>
        <BiBarChart/>
        <BiBullseye/>
      </div>
      <Card.Body>
      <div>
            <BiStar style={{color: "yellow"}}/>
            <BiStar style={{color: "yellow"}}/>
            <BiStar style={{color: "yellow"}}/>
            <BiStar style={{color: "yellow"}}/>
            <BiStar style={{color: "yellow"}}/>            
            <span>No reveiw</span>
        </div>
        <Card.Title className="text05">AOPO DESIGNS WOOLRICH KLETTERSACK</Card.Title>
        <Card.Text className="mt-3">
          <span className="bg-warning p-1">-33%</span><span className="text-danger">$100.00</span> <span className="dis">$150.00 <div className="greyline"></div></span>
        </Card.Text>
        <Button variant="primary" className="btn"><BiCart/>  Add To Cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col xl={3} md={6} sm={12} className="HOME-PAGE WHEELS ACTIVE-CARD">
            <Card className="crd" style={{ position: "relative" }}>
      <Card.Img variant="top" src="https://aero-theme.myshopify.com/cdn/shop/products/9-600x600_500x500_crop_center.jpg?v=1519628866"/>
      <Card.Img className="img-2" variant="top" src="https://aero-theme.myshopify.com/cdn/shop/products/18-600x600_300x300_crop_center.jpg?v=1519628874" />
      <div className="icon-div">
        <BiHeart/>
        <BiBarChart/>
        <BiBullseye/>
      </div>
      <Card.Body>
      <div>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>            
            <span>1 reveiw</span>
        </div>
        <Card.Title className="text05">AOPO DESIGNS WOOLRICH KLETTERSACK</Card.Title>
        <Card.Text className="mt-3">
          <span className="bg-warning p-1">-33%</span><span className="text-danger">$100.00</span> <span className="dis">$150.00 <div className="greyline"></div></span>
        </Card.Text>
        <Button variant="primary" className="btn"><BiCart/>  Add To Cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col xl={3} md={6} sm={12} className="HOME-PAGE WHEELS FEATURED ACTIVE-CARD">
            <Card className="crd" style={{ position: "relative" }}>
      <Card.Img variant="top" src="https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_83ea478c-bb3f-4036-a783-7b481e2f1315_500x500_crop_center.jpg?v=1519629452"/>
      <Card.Img className="img-2" variant="top" src="https://aero-theme.myshopify.com/cdn/shop/products/4-600x600_ceb87a56-6b62-4a7c-a226-3ca7edddbc07_400x400_crop_center.jpg?v=1519629452" />
      <div className="icon-div">
        <BiHeart/>
        <BiBarChart/>
        <BiBullseye/>
      </div>
      <Card.Body>
      <div>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiStar style={{color: "yellow"}}/>            
            <span>1 reveiw</span>
        </div>
        <Card.Title className="text05">AOPO DESIGNS WOOLRICH KLETTERSACK</Card.Title>
        <Card.Text className="mt-3">
          <span className="text-danger">$100.00</span>
        </Card.Text>
        <Button variant="primary" className="btn"><BiCart/>  Add To Cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col xl={3} md={6} sm={12} className="HOME-PAGE WHEELS ACTIVE-CARD">
            <Card className="crd" style={{ position: "relative" }}>
      <Card.Img variant="top" src="https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_500x500_crop_center.jpg?v=1519628616"/>
      <Card.Img variant="top" className="img-2" src="https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_83ea478c-bb3f-4036-a783-7b481e2f1315_500x500_crop_center.jpg?v=1519629452"/>
      
      <div className="icon-div">
        <BiHeart/>
        <BiBarChart/>
        <BiBullseye/>
      </div>
      <Card.Body>
      <div>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>            
            <span>1 reveiw</span>
        </div>
        <Card.Title className="text05">AOPO DESIGNS WOOLRICH KLETTERSACK</Card.Title>
        <Card.Text className="mt-3">
      <span className="text-danger">$100.00</span>
        </Card.Text>
        <Button variant="primary" className="btn"><BiCart/>  Add To Cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col xl={3} md={6} sm={12} className="HOME-PAGE SOUNDS FEATURED ACTIVE-CARD">
            <Card className="crd" style={{ position: "relative" }}>
      <Card.Img variant="top" src="https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_500x500_crop_center.jpg?v=1519628616"/>
      <Card.Img variant="top" className="img-2" src="https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_83ea478c-bb3f-4036-a783-7b481e2f1315_500x500_crop_center.jpg?v=1519629452"/>
      
      <div className="icon-div">
        <BiHeart/>
        <BiBarChart/>
        <BiBullseye/>
      </div>
      <Card.Body>
      <div>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>            
            <span>1 reveiw</span>
        </div>
        <Card.Title className="text05">AOPO DESIGNS WOOLRICH KLETTERSACK</Card.Title>
        <Card.Text className="mt-3">
      <span className="text-danger">$100.00</span>
        </Card.Text>
        <Button variant="primary" className="btn"><BiCart/>  Add To Cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col xl={3} md={6} sm={12} className="HOME-PAGE SOUNDS ACTIVE-CARD">
            <Card className="crd" style={{ position: "relative" }}>
      <Card.Img variant="top" src="https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_500x500_crop_center.jpg?v=1519628616"/>
      <Card.Img variant="top" className="img-2" src="https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_83ea478c-bb3f-4036-a783-7b481e2f1315_500x500_crop_center.jpg?v=1519629452"/>
      
      <div className="icon-div">
        <BiHeart/>
        <BiBarChart/>
        <BiBullseye/>
      </div>
      <Card.Body>
      <div>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>            
            <span>1 reveiw</span>
        </div>
        <Card.Title className="text05">AOPO DESIGNS WOOLRICH KLETTERSACK</Card.Title>
        <Card.Text className="mt-3">
      <span className="text-danger">$100.00</span>
        </Card.Text>
        <Button variant="primary" className="btn"><BiCart/>  Add To Cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col xl={3} md={6} sm={12} className="HOME-PAGE SOUNDS FEATURED ACTIVE-CARD">
            <Card className="crd" style={{ position: "relative" }}>
      <Card.Img variant="top" src="https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_500x500_crop_center.jpg?v=1519628616"/>
      <Card.Img variant="top" className="img-2" src="https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_83ea478c-bb3f-4036-a783-7b481e2f1315_500x500_crop_center.jpg?v=1519629452"/>
      
      <div className="icon-div">
        <BiHeart/>
        <BiBarChart/>
        <BiBullseye/>
      </div>
      <Card.Body>
      <div>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>            
            <span>1 reveiw</span>
        </div>
        <Card.Title className="text05">AOPO DESIGNS WOOLRICH KLETTERSACK</Card.Title>
        <Card.Text className="mt-3">
      <span className="text-danger">$100.00</span>
        </Card.Text>
        <Button variant="primary" className="btn"><BiCart/>  Add To Cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col xl={3} md={6} sm={12} className="HOME-PAGE SOUNDS ACTIVE-CARD">
            <Card className="crd" style={{ position: "relative" }}>
      <Card.Img variant="top" src="https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_500x500_crop_center.jpg?v=1519628616"/>
      <Card.Img variant="top" className="img-2" src="https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_83ea478c-bb3f-4036-a783-7b481e2f1315_500x500_crop_center.jpg?v=1519629452"/>
      
      <div className="icon-div">
        <BiHeart/>
        <BiBarChart/>
        <BiBullseye/>
      </div>
      <Card.Body>
      <div>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>
            <BiSolidStar style={{color: "yellow"}}/>            
            <span>1 reveiw</span>
        </div>
        <Card.Title className="text05">AOPO DESIGNS WOOLRICH KLETTERSACK</Card.Title>
        <Card.Text className="mt-3">
      <span className="text-danger">$100.00</span>
        </Card.Text>
        <Button variant="primary" className="btn"><BiCart/>  Add To Cart</Button>
      </Card.Body>
    </Card>
            </Col>
          </Row>
            </Container>
        </div>
    )
}
export default third
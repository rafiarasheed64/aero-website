
import React from "react"
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";

import image from "./aero-image/logo-aero1.png"
import {BiSearch,BiGrid, BiCart} from "react-icons/bi"
// import {BiGrid} from "react-icons/bi"
// import {BiCart} from "react-icons/bi"




function navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark p-3">
  <div class="container-fluid w-100">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <img src={image} alt="" />
    <div className="bg-info" class="collapse navbar-collapse w-50" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li class="nav-item dropdown">
          <a  class="nav-link text-light dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            HOME
          </a>
          <ul class="dropdown-menu fs-5 p-LTR p-3" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item p-2" href="#">HOME 1</a></li>
            <li><a class="dropdown-item p-2" href="#">HOME 2</a></li>
            <li><a class="dropdown-item p-2" href="#">HOME 3</a></li>
            <li><a class="dropdown-item p-2" href="#">HOME 4</a></li>
            <li><a class="dropdown-item p-2" href="#">HOME 5</a></li>
            <li><a class="dropdown-item p-2" href="#">HOME FASHION</a></li>
            <li><a class="dropdown-item p-2" href="#">HOME FASHION LIGHT</a></li>
            <li><a class="dropdown-item p-2" href="#">HOME JEWELLERY LIGHT</a></li>
            <li><a class="dropdown-item p-2" href="#">HOME JEWELLERY DARK</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SHOP
          </a>
          <ul class="dropdown-menu border border-dark border-5" aria-labelledby="navbarDropdownMenuLink">
            <div className="d-flex fs-4 p-2">
            <div className="p-LTR p-4">
            <li><a class="dropdown-item  fw-bold" href="#">WHEELS</a></li>
            <li><a class="dropdown-item p-2" href="#">Home</a></li>
            <li><a class="dropdown-item p-2" href="#">Shop</a></li>
            <li><a class="dropdown-item p-2" href="#">Featured</a></li>
            <li><a class="dropdown-item p-2" href="#">Layouts</a></li>
            <li><a class="dropdown-item p-2" href="#">Pages</a></li>
            </div>
            <div className="p-LTR p-4">
            <li><a class="dropdown-item p-2 fw-bold" href="#">DECORATION</a></li>
            <li><a class="dropdown-item p-2" href="#">Home</a></li>
            <li><a class="dropdown-item p-2" href="#">Shop</a></li>
            <li><a class="dropdown-item p-2" href="#">Featured</a></li>
            <li><a class="dropdown-item p-2" href="#">Layouts</a></li>
            <li><a class="dropdown-item p-2" href="#">Pages</a></li>
            </div>
            <div className="p-LTR p-4">
            <li><a class="dropdown-item p-2 fw-bold" href="#">ACCESSORIES</a></li>
            <li><a class="dropdown-item p-2" href="#">Home</a></li>
            <li><a class="dropdown-item p-2" href="#">Shop</a></li>
            <li><a class="dropdown-item p-2" href="#">Featured</a></li>
            <li><a class="dropdown-item p-2" href="#">Layouts</a></li>
            <li><a class="dropdown-item p-2" href="#">Pages</a></li>
            </div>
            <div className="p-LTR p-4">
            <li><a class="dropdown-item p-2 fw-bold" href="#">ENGINE</a></li>
            <li><a class="dropdown-item p-2" href="#">Home</a></li>
            <li><a class="dropdown-item p-2" href="#">Shop</a></li>
            <li><a class="dropdown-item p-2" href="#">Featured</a></li>
            <li><a class="dropdown-item p-2" href="#">Layouts</a></li>
            <li><a class="dropdown-item p-2" href="#">Pages</a></li>
            </div>
            </div>



          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            FEATURED
          </a>
          <ul class="dropdown-menu fs-5 p-LTR p-3" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item p-2" href="#">Action</a></li>
            <li><a class="dropdown-item p-2" href="#">Another action</a></li>
            <li><a class="dropdown-item p-2" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LAYOUTS
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PAGES
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="text-light border-danger w-25 d-flex justify-content-around fs-5" >
      <BiSearch className="icn"/>
      <BiGrid className="icn"/>
      <BiCart className="icn"/>
    </div>

  </div>
</nav>


{/* <Container fluid >
                <Row className="rows">
                    <Col xs={2} sm={2} md={2} lg={2} className=" border border-danger d-flex ps-2 align-items-center">
                        <img src={image} className="w-75 ps-5" alt="" />
                    </Col>
                    <Col xs={7} sm={7} md={7} lg={7} className=" border border-danger">
                        <ul className="w-100 h-100 border border-danger d-none d-xxl-flex d-xl-flex d-lg-none d-md-none d-sm-none   d-flex justify-content-center align-items-center gap-3 list-unstyled">
                            <Col xs={12} sm={12} md={2} lg={2} className="border border-danger d-flex">
                                <DropdownButton id="dropdown-basic-button" title="HOME">
                                    <Dropdown.Item>
                                    <li><a class="dropdown-item" href="#">HOME 1</a></li>
//             <li><a class="dropdown-item" href="#">HOME 2</a></li>
//             <li><a class="dropdown-item" href="#">HOME 3</a></li>
//             <li><a class="dropdown-item" href="#">HOME 4</a></li>
//             <li><a class="dropdown-item" href="#">HOME 5</a></li>
//             <li><a class="dropdown-item" href="#">HOME FASHION</a></li>
//             <li><a class="dropdown-item" href="#">HOME FASHION LIGHT</a></li>
//             <li><a class="dropdown-item" href="#">HOME JEWELLERY LIGHT</a></li>
//             <li><a class="dropdown-item" href="#">HOME JEWELLERY DARK</a></li>
                                    </Dropdown.Item>
                                    
                                </DropdownButton>
                            </Col>
                            <Col xs={12} sm={12} md={2} lg={2} className="border border-danger">
                                <DropdownButton id="dropdown-basic-button" title="SHOP">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                            <Col xs={12} sm={12} md={2} lg={2} className="border border-danger">
                                <DropdownButton id="dropdown-basic-button" title="FEATURED">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                            <Col xs={12} sm={12} md={2} lg={2} className="border border-danger">
                                <DropdownButton id="dropdown-basic-button" title="LAYOUT">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                            <Col xs={12} sm={12} md={2} lg={2} className="border border-danger">
                                <DropdownButton id="dropdown-basic-button" title="PAGES">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                        </ul>
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3} className=" border border-danger d-flex justify-content-center align-items-center gap-4 fs-5 text-light">
                        <BiSearch />
                        <BiGrid />
                        <BiCart />
                    </Col>
                </Row>
            </Container> */}
            </div>

    )
}
export default navbar
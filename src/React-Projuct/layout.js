import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { HomePage } from './HomePage';
import { MdGroups } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { MdPersonAddAlt1 } from "react-icons/md";

const Dashboard = () => {
  return (
    <Container fluid>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="mb-4">
        <Navbar.Brand href="#home">Windmill</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex mx-auto">
          <div className="search" style={{backgroundColor:"lightgrey"}}>
          <i className="bi bi-search fs-3 mx-2"></i>
          </div>
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
          </Form>
          <Nav>
            <Nav.Link href="#link">
            <i className="bi bi-moon-fill mx-3 fs-3" style={{color:"blueviolet"}}></i>
            <i className="bi bi-bell-fill fs-3" style={{color:"blueviolet"}}></i>
            </Nav.Link>
            <Nav.Link href="#profile">
              <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-circle" />
            </Nav.Link>
            <Button style={{background:"blueviolet",border:"blueviolet",height:"50px"}} className="ms-3 px-4 ">
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row>
        {/* Sidebar */}
        <Col md={2} className="bg-light sidebar h-100">
          <Nav className="flex-column">
            <Nav.Link href="#dashboard" className='text-dark fw-bolder'>
              <i className="bi bi-house-door text-dark px-4"></i> Dashboard
            </Nav.Link>
            <Nav.Link href="#forms" className='text-dark fw-bolder'>
              <i className="bi bi-pencil-square text-dark px-4"></i> Forms
            </Nav.Link>
            <Nav.Link href="#cards" className='text-dark fw-bolder'>
              <i className="bi bi-card-text text-dark px-4"></i> Cards
            </Nav.Link>
            <Nav.Link href="#charts" className='text-dark fw-bolder'>
              <i className="bi bi-bar-chart-line text-dark px-4"></i> Charts
            </Nav.Link>
            <Nav.Link href="#buttons" className='text-dark fw-bolder'>
              <i className="bi bi-square text-dark px-4"></i> Buttons
            </Nav.Link>
            <Nav.Link href="#modals" className='text-dark fw-bolder'>
              <i className="bi bi-box-arrow-in-right text-dark px-4"></i> Modals
            </Nav.Link>
            <Nav.Link href="#tables" className='text-dark fw-bolder'>
              <i className="bi bi-table text-dark px-4"></i> Tables
            </Nav.Link>
            <Nav.Link href="#pages" className='text-dark fw-bolder'>
              <i className="bi bi-file-earmark text-dark px-4"></i> Pages
            </Nav.Link>
            <Button style={{ marginLeft:'20px'}} className="mt-3 w-50 addbtn">
            <MdPersonAddAlt1 /> Create
            </Button>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={10} className="px-4">
          <h2 className="my-4">Dashboard</h2>
          
          <Card className="mb-4">
            <Card.Body className="d-flex justify-content-between align-items-center" style={{background:"blueviolet"}}>
              <Button style={{background:"blueviolet" , border:"blueviolet"}}> <i className="bi bi-star-fill"></i> Star this project on GitHub</Button>
              <Button style={{background:"blueviolet" , border:"blueviolet"}}>View more</Button>
            </Card.Body>
          </Card>

          <Row className="mb-4">
            <Col md={3}>
              <Card className="text-center">
                <Card.Body className='d-flex justify-content-center align-items-center'>
                  <div className='fs-3 rounded-circle group' style={{height:"50px",width:'50px'}}>
                  <MdGroups/>
                  </div>
                  <div>
                  <Card.Title>Total clients</Card.Title>
                  <Card.Text className='fs-4'>
                     6389
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center">
              <Card.Body className='d-flex justify-content-center align-items-center'>
                  <div className=' fs-3 rounded-circle ' style={{height:"50px",width:'50px'}}>
                  <FaMoneyCheckDollar />
                  </div>
                  <div>
                  <Card.Title>Account balance</Card.Title>
                  <Card.Text className='fs-4'>
                     $ 46,760.89
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center">
              <Card.Body className='d-flex justify-content-center align-items-center'>
                  <div className='fs-3 rounded-circle cart' style={{height:"50px",width:'50px'}}>
                  <FaShoppingCart />
                  </div>
                  <div>
                  <Card.Title>New Sales</Card.Title>
                  <Card.Text className='fs-4'>
                     376
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center">
              <Card.Body className='d-flex justify-content-center align-items-center'>
                  <div className='fs-3 rounded-circle profile' style={{height:"50px",width:'50px'}}>
                  <FaIdCard />
                  </div>
                  <div>
                  <Card.Title>Pending contacts</Card.Title>
                  <Card.Text className='fs-4'>
                     35
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          
          <HomePage/>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

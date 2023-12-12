import React from 'react'
import './Footer.css'
import logo from '../../assets/images/eco-logo.png'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' className='mb-4'>
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1 className='text-white'>Multimart</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestiae quibusdam quas recusandae aliquid placeat consectetur assumenda cum magni saepe.
            </p>
          </Col>
          <Col lg='3' className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0' >
                  <Link to={'#'} >Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0' >
                  <Link to={'#'} >Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0' >
                  <Link to={'#'} >Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0' >
                  <Link to={'#'} >Smart Watchs</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2' className='mb-4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0' >
                  <Link to={'/shop'} >Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0' >
                  <Link to={'/cart'} >Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0' >
                  <Link to={'/login'} >Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0' >
                  <Link to={'#'} >Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2' >
                  <span><i className='ri-map-pin-line'></i></span>
                  <p>Farg'ona viloyati</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2' >
                  <span><i className='ri-phone-line'></i></span>
                  <p>+998 91 693 76 23</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2' >
                  <span><i className='ri-mail-line'></i></span>
                  <p>nuriddinovrashidxon2002@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footer__copyright">Copyright {year} developed by Nuriddinov Rashidxon . All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
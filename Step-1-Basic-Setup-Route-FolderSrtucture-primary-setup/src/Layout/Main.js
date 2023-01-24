import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Outlet } from 'react-router-dom'
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
   return (
      <div>
         <Header></Header>
         <Container>
            <Row>
               <Col lg="2" className='d-none d-lg-block'>
                  <LeftSideNav></LeftSideNav>
               </Col>
               <Col lg="7">
                  <Outlet></Outlet>
               </Col>
               <Col lg="3">
                  <RightSideNav></RightSideNav>
               </Col>
            </Row>
         </Container>
         <Footer></Footer>

      </div>
   );
};

export default Main;
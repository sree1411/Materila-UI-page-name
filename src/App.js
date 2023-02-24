import React , { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddUser from './components/_layouts/AddUser';
import TopBar from "./components/_layouts/TopBar"
import BottonBar from "./components/_layouts/BottonBar"
import UpdateUser from './components/_layouts/UpdateUser';
import Informationtable from './components/_layouts/Informationtable';




export default function App() {


 const [refresh , setRefresh] = useState(true);

 const [userDetails , setUserDetails] = useState({});


  return (
    <>
      

   <TopBar/>
   <div className='gap'> 



   <Container>
     <Row>
        <Col xs={12} md={5}>
          <AddUser  refresh={refresh} setRefresh={setRefresh} />
        </Col>
        <Col xs={12} md={6}>
        <UpdateUser userDetails={ userDetails }/>
        </Col>
        <Col xs={12} md={12}>
          <Informationtable  refresh={refresh}  setUserDetails={ setUserDetails }/>
        </Col>

      </Row>

      </Container>



   </div>
   <BottonBar/>

  </>
  )
}

import React from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap'; 
import Input from '../../components/UI/Input';

/**
* @author
* @function Signup
**/

export const Signup = (props) => {
  return(
    <Layout>
      <Container>
        <Row style={{marginTop: '75px'}}>
          <Col md={{span:6, offset: 3}}>
            <Form>
              <Row>
                <Col>
                  <Input 
                  label = "First Name"
                  placeholder = "First Name"
                  value=""
                  type="text"
                  onChange={() => {}}
                  />
                </Col>
                <Col md={{span:6}}>
                <Input 
                  label = "Last Name"
                  placeholder = "Last Name"
                  value=""
                  type="text"
                  onChange={() => {}}
                  />
                </Col>
               </Row>
               <Input 
                  label = "Email"
                  placeholder = "Email"
                  value=""
                  type="text"
                  onChange={() => {}}
                  />
                <Input 
                  label = "Password"
                  placeholder = "Type-in your Password"
                  value=""
                  type="text"
                  onChange={() => {}}
                  />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
   )

 }

 export default Signup
import React from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI/Input';

/**
* @author
* @function Signin
**/

export const Signin = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{marginTop: '75px'}}>
          <Col md={{span:6, offset: 3}}>
            <Form>
            <Input 
                  label = "Email"
                  placeholder = "Email"
                  value=""
                  type="text"
                  onChange={() => {}}
                  />
              <Input 
                  label = "Password"
                  placeholder = "Password"
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

export default Signin
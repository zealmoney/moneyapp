import React, { useReducer, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Container, Form, Grid, Header, Input, Modal, Segment, TextArea } from 'semantic-ui-react';
import { NavbarDesktop } from '../desktop/NavbarDesktop';
import { Footer } from './Footer';

export const Contact = () => {

  const send = useRef("form");

  const sendEmail = (e) => {

    emailjs
      .sendForm('service_0yg1q1q', 'template_hwidnvc', send.current, {
        publicKey: 'z0oC3V4leS1UTpslF',
      })
      .then(
        () => {
          dispatch({type: 'open', size: 'tiny'})
        },
        (error) => {
          alert('FAILED...' +  error.text);
        },
      );
  };

  function modalReducer(state, action){
    switch(action.type){
        case 'open':
            return {open: true, size: action.size}
        case 'close': 
            return {open: false}
        default:
            return new Error('unsupported action')
    }
}

const [state, dispatch] = useReducer(modalReducer, 
    {
        open: false, size: undefined
    })

    const {open, size} = state

  return (
    <>
    <NavbarDesktop />
    <Segment vertical style={{padding: '5em 0em'}}>
        <Container>
            <Grid textAlign='center'>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h1' content='Contact Us' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column style={{maxWidth: 600}}>
                        <Segment size='huge' raised style={{padding: '2em 2em'}}>
                          <Form size='huge' id="form">
                            <Form.Field style={{textAlign: 'left'}}>
                              <label>Name</label>
                              <Form.Input 
                                type='text' 
                                name='user_name' 
                                fluid 
                              />
                            </Form.Field>
                            <Form.Field style={{textAlign: 'left'}}>
                              <label>Email</label>
                              <Form.Input 
                                type='text' 
                                name='user_email' 
                                fluid 
                              />
                            </Form.Field> 
                            <Form.Field style={{textAlign: 'left'}}>
                              <label>Name</label>
                              <Form.TextArea 
                                name='message' 
                                fluid 
                              />
                            </Form.Field> 
                            <Form.Field> 
                              <Button 
                                color='green' 
                                size='huge'
                                onClick={() => sendEmail()}
                              >
                                Submit
                              </Button>    
                            </Form.Field>                        
                          </Form>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
          <Modal
            open={open}
            size={size}
          >
            <Modal.Header style={{textAlign: 'center'}}>
              Message Sent!!
            </Modal.Header>
            <Modal.Content>
              <Grid textAlign="center">
                <Grid.Row>
                  <Grid.Column>
                    <Header 
                      as='h3'
                      content='Your Message has been sent to the admin.'
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                      Someone will get back to you as soon as possible.
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Button
                      color="green"
                      onClick={() => dispatch({type: 'close'})}
                    >
                      OK
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Content>
          </Modal>
    </Segment>
    <Footer />
    </>
  );
};
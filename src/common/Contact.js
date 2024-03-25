import React, { useReducer, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Container, Form, Grid, Header, Input, Modal, Segment, TextArea } from 'semantic-ui-react';
import { NavbarDesktop } from '../desktop/NavbarDesktop';

export const Contact = () => {

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0yg1q1q', 'template_hwidnvc', form.current, {
        publicKey: 'z0oC3V4leS1UTpslF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <NavbarDesktop />
    <Segment vertical style={{padding: '4em 0em'}}>
        <Container>
            <Grid textAlign='center'>
                <Grid.Row>
                    <Grid.Column style={{padding: '2em 0em'}}>
                        <Header as='h1' content='Contact Us' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column style={{maxWidth: 600}}>
                        <Segment size='huge' raised>
                        <form ref={form} onSubmit={sendEmail}>
                            <Grid>
                              <Grid.Row>
                                <Grid.Column>
                                  <Input placeholder='Name' type='text' name='user_name' fluid />
                                </Grid.Column>
                              </Grid.Row>
                              <Grid.Row>
                                <Grid.Column>
                                  <Input placeholder='Email' type='email' name='user_email' fluid />
                                </Grid.Column>
                              </Grid.Row>
                              <Grid.Row>
                                <Grid.Column>
                                  <TextArea placeholder='Message' name='message' style={{width: '100%'}} />
                                </Grid.Column>
                              </Grid.Row>
                              <Grid.Row>
                                <Grid.Column>
                                  <Button 
                                    type='submit' 
                                    color='green' 
                                    size='huge'
                                    onClick={() => dispatch({type: 'open', size: 'tiny'})}
                                  >
                                    Submit
                                  </Button>
                                </Grid.Column>
                              </Grid.Row>
                            </Grid>
                        </form>
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
    </>
  );
};
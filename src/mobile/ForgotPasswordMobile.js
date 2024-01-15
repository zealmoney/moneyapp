import { Button, Container, Form, Grid, Header, Segment } from "semantic-ui-react"
import { AuthenticationHeader } from "../common/AuthenticationHeader"
import { Link } from "react-router-dom"

export const ForgotPasswordMobile = () => {

    return(
        <>
            <AuthenticationHeader />
            <Segment vertical style={{padding: '2em 1em'}}>
                <Container>
                <Grid textAlign="center">
                    <Grid.Row>
                        <Grid.Column style={{maxWidth: 600}}>
                            <Segment vertical>
                                <Header textAlign="left" as='h2' style={{wordSpacing: '0.1em'}}>
                                    Change Your Password
                                </Header>
                                <p style={{textAlign: 'left'}}>
                                    We'll send instructions on how to change your password
                                    to the email you enter below. 
                                </p>
                                <Form size="huge">
                                    <Form.Field style={{textAlign: 'left'}}>
                                        <label>
                                            Email Address
                                        </label>
                                        <Form.Input 
                                            fluid
                                            placeholder='youremail@domain.com'
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Button color="green" fluid size="huge">
                                            Continue
                                        </Button>
                                    </Form.Field>
                                    <Form.Field>
                                        <Link to={'/signin'} style={{fontWeight: 'bold'}}>Sign In</Link>
                                    </Form.Field> 
                                    <Form.Field>
                                        <Link style={{fontWeight: 'bold'}}>Get Help</Link>
                                    </Form.Field>       
                                </Form>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>                
                </Grid>
                </Container>
            </Segment>
        </>
    )
}
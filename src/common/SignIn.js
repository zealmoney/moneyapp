import { Button, Container, Form, Grid, Header, Menu, Segment } from "semantic-ui-react"
import { AuthenticationHeader } from "./AuthenticationHeader"
import { Link } from "react-router-dom"

export const SignIn = () => {

    return(
        <>
            <AuthenticationHeader />
            <Segment vertical style={{padding: '4em 2em'}}>
                <Container>
                <Grid textAlign="center" stackable>
                    <Grid.Row>
                        <Grid.Column style={{maxWidth: 600}}>
                            <Segment vertical>
                                <Header textAlign="left" as='h1' style={{wordSpacing: '0.1em'}}>
                                    Sign In with Money App
                                </Header>
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
                                    <Form.Field style={{textAlign: 'left'}}>
                                        <label>
                                            Password
                                        </label>
                                        <Form.Input 
                                            fluid
                                            icon='eye'
                                            iconPosition="right"
                                            type="password"
                                        />
                                    </Form.Field> 
                                    <Form.Field>
                                        <Button color="green" fluid size="huge">
                                            Sign In
                                        </Button>
                                    </Form.Field>
                                    <Form.Field>
                                        <span>
                                            <Link>Forgot Password</Link>
                                        </span>
                                    </Form.Field> 
                                    <Form.Field>
                                        <span>
                                            Don't have an Account? &nbsp; 
                                            <Link style={{textDecorationLine: 'none'}} to={'/register'}>Register</Link>
                                        </span>
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
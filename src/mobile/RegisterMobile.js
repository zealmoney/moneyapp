import { Button, Form, Grid, Header, Segment } from "semantic-ui-react"
import { AuthenticationHeader } from "../common/AuthenticationHeader"
import { Link } from "react-router-dom"

export const RegisterMobile = () => {

    return(
        <>
            <AuthenticationHeader />
            <Segment vertical style={{padding: '2em 1em'}}>
                <Grid textAlign="center" stackable>
                    <Grid.Row>
                        <Grid.Column style={{maxWidth: 600}}>
                            <Segment vertical>
                                <Header textAlign="left" as='h2' style={{wordSpacing: '0.1em'}}>
                                    Sign Up with Money App
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
                                    <Form.Field style={{textAlign: 'left'}}>
                                        <label>
                                            Confirm Password
                                        </label>
                                        <Form.Input 
                                            fluid
                                            type="password"
                                        />
                                    </Form.Field> 
                                    <Form.Field>
                                        <Button color="green" fluid size="huge">
                                            Sign Up
                                        </Button>
                                    </Form.Field>
                                    <Form.Field>
                                        <span>
                                            Already have an Account? &nbsp;
                                            <Link style={{textDecorationLine: 'none'}} to={'/signin'}>Sign In</Link>
                                        </span>
                                    </Form.Field>        
                                </Form>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>                
                </Grid>
            </Segment>
        </>
    )
}
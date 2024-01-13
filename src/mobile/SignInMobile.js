import { Button, Form, Grid, Header, Segment } from "semantic-ui-react"
import { AuthenticationHeader } from "../common/AuthenticationHeader"

export const SignInMobile = () => {

    return(
        <>
            <AuthenticationHeader />
            <Segment vertical style={{padding: '2em 1em'}}>
                <Grid textAlign="center">
                    <Grid.Row>
                        <Grid.Column style={{maxWidth: 600}}>
                            <Segment vertical>
                                <Header textAlign="left" as='h2' style={{wordSpacing: '0.1em'}}>
                                    Sign In with Money App
                                </Header>
                                <Form size="huge">
                                    <Form.Field style={{textAlign: 'left'}}>
                                        <label>
                                            Email Address
                                        </label>
                                        <Form.Input 
                                            fluid
                                            icon='user'
                                            iconPosition="left"
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
                                </Form>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>                
                </Grid>
            </Segment>
        </>
    )
}
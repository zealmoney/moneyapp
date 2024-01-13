import { Button, Container, Form, Grid, Header, Menu, Segment } from "semantic-ui-react"
import { AuthenticationHeader } from "./AuthenticationHeader"

export const SignIn = () => {

    return(
        <>
            <AuthenticationHeader />
            <Segment size="massive" vertical style={{padding: '4em 2em'}}>
                <Container>
                <Grid textAlign="center" stackable>
                    <Grid.Row>
                        <Grid.Column style={{maxWidth: 600}}>
                            <Segment vertical>
                                <Header textAlign="left" as='h1' style={{wordSpacing: '0.1em'}}>
                                    Sign In with Money App
                                </Header>
                                <Form size="massive">
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
                                            icon='lock'
                                            iconPosition="left"
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
                </Container>
            </Segment>
        </>
    )
}
import { Button, Form, Grid, Header, Menu, Segment } from "semantic-ui-react"

export const SignIn = () => {

    return(
        <>
            <Grid textAlign="center" verticalAlign="middle" style={{height: '100vh'}}>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' color="green">
                        Sign In with Money App
                    </Header>
                    <Form size="large">
                        <Segment stacked>
                            <Form.Input 
                                fluid
                                icon='user'
                                iconPosition="left"
                                placeholder='Email Address'
                            />
                            <Form.Input 
                                fluid
                                icon='lock'
                                iconPosition="left"
                                placeholder='Password'
                                type="password"
                            />
                            <Button color="green" fluid size="large">
                                Sign In
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>                
            </Grid>
        </>
    )
}
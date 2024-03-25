import { Button, Container, Grid, Header, Segment } from "semantic-ui-react"
import { AuthenticationHeader } from "./AuthenticationHeader"
import { useNavigate } from "react-router-dom"

export const EmailActivation = () => {

    const navigate = useNavigate()

    return(
        <>
            <AuthenticationHeader />
            <Segment vertical style={{padding: '6em 2em'}}>
                <Container>
                    <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column style={{maxWidth: 600}}>
                                <Segment size="huge">
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Header as='h1' content='Verification Successful!!!' />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Header 
                                                    as='h3' 
                                                    content='Please click the button below to sign in '
                                                />       
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Button 
                                                    color="green"
                                                    onClick={() => navigate('/signin')}
                                                >
                                                    Sign In Here
                                                </Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>    
                                </Segment>
                                </Grid.Column>
                            </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}
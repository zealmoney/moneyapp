import { Button, Container, Grid, Header, Icon, Segment } from "semantic-ui-react"
import { AuthenticationHeader } from "./AuthenticationHeader"

export const VerificationSuccessful = () => {

    return(
        <>
            <AuthenticationHeader />
            <Segment
                vertical
            >
                <Container>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column>
                                <Icon 
                                    name="check circle outline"
                                    color="green"
                                    size="massive"
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Header 
                                    as="h2"
                                    content="Your verification has been successful"
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Button
                                    size="big"
                                    color="green"
                                >
                                    Continue
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}
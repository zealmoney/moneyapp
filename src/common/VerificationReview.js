import { Button, Container, Grid, Header, Icon, Segment } from "semantic-ui-react"
import { AuthenticationHeader } from "./AuthenticationHeader"

export const VerificationReview = () => {

    return(
        <>
            <AuthenticationHeader />
            <Segment
                vertical
                style={{
                    marginTop: 30
                }}
            >
                <Container>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column>
                                <Icon 
                                    name="hourglass outline"
                                    color="green"
                                    size="massive"
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Header 
                                    as="h2"
                                    content="Your verification is under review, you will be notified when review is completed"
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
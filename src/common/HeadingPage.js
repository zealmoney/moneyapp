import { Button, Container, Grid, Header, Image, Segment } from "semantic-ui-react"

export const HeadingPage = () => {
    
    return(
        <>
            <Segment vertical style={{padding: '8em 0em', backgroundColor: '#F6F6F6', maxHeight: 400}}>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column verticalAlign="middle" textAlign="center" width={8}>
                                <Header as='h1' content='Worry-free transfers for you and your loved ones' />
                                <Button circular color="green">
                                    Learn More
                                </Button>
                            </Grid.Column>
                            <Grid.Column verticalAlign="middle" width={8}>
                                <Image src='/heading_images/image1.webp' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}
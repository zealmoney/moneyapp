import { Button, Container, Grid, Header, Image, Segment } from "semantic-ui-react"

export const HeadingPageMobile = () => {

    return(
        <>
            <Segment vertical style={{backgroundColor: '#F6F6F6', marginTop: '6em', padding: '4em 0em'}}>
                <Container>
                    <Grid verticalAlign="middle">
                        <Grid.Row>
                            <Grid.Column textAlign="center">
                                <Header style={{fontSize: '2.5em'}}>
                                    Worry-free transfers<br/> for you and your<br/> loved ones
                                </Header>
                                <Button circular size="huge" color="green">
                                    Learn More
                                </Button>
                            </Grid.Column>
                            {/*<Grid.Column width={8}>
                                <Image src='/heading_images/image1.webp' />
                            </Grid.Column>*/}
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Image src='/heading_images/image1.webp' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}
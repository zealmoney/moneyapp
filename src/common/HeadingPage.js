import { Button, Container, Grid, Header, Icon, Image, Segment } from "semantic-ui-react"

export const HeadingPage = () => {
    
    return(
        <>
            <Segment 
                vertical
                tertiary
                inverted
                secondary
                color="green"
                style={{marginTop: '3.5em'}}
            >
                <Container>
                    <Grid verticalAlign="middle">
                        <Grid.Row>
                            <Grid.Column textAlign="center" width={8}>
                                <Header
                                    style={{fontSize: '3.2em'}} 
                                    content='Money Transfer That Is Easy And Reliable' 
                                />
                                <Button circular size="huge" color="green">
                                    Learn More
                                </Button>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                {/*<Image src='/heading_images/exchange3.png' rounded/>*/}
                                <Segment
                                    size="massive"
                                    raised
                                    tertiary
                                    inverted
                                    secondary
                                    color="green"
                                    textAlign="center"
                                >  
                                    <Icon 
                                        inverted 
                                        name="money bill alternate outline" 
                                        circular 
                                        color="green" 
                                        size="massive"
                                    />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}
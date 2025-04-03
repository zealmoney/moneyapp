import { Button, Container, Grid, Header, Icon, Image, Segment } from "semantic-ui-react"

export const HeadingPage = () => {
    
    return(
        <>
            <Segment 
                vertical
                style={{backgroundColor: '#E5E4E2', marginTop: '3.5em'}}
            >
                <Container>
                    <Grid verticalAlign="middle">
                        <Grid.Row>
                            <Grid.Column textAlign="center" width={8}>
                                <Header
                                    style={{fontSize: '3.2em'}} 
                                    content='Money Transfer That Is Easy And Reliable' 
                                />
                                <Button 
                                    circular size="huge" 
                                    color="green"    
                                >
                                    Learn More
                                </Button>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Image src='/heading_images/exchange4.png' rounded/>    
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}
import { Container, Grid, Header, Rating, Segment } from "semantic-ui-react"

export const CustomersMobile = () => {

    return(
        <>
            <Segment vertical size="massive" style={{padding: '2em 0em'}}>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column textAlign="center">
                                <Header as='h1' content='What our Customers are saying' />
                            </Grid.Column>  
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment 
                                    textAlign="center"
                                    raised
                                    tertiary 
                                    secondary 
                                    inverted 
                                    color="green"
                                    style={{padding: '2em 2em'}}
                                >
                                    <Header content='Adam Smith' />
                                    <Rating icon="star" defaultRating={4} maxRating={5} />
                                    <p style={{textAlign: 'left'}}>
                                        Exceptionally easy application to use. 
                                        Affordable rate and convenient arrangement 
                                        for recepient! Also, very good exchange rate!
                                    </p>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment 
                                    textAlign="center" 
                                    raised
                                    tertiary 
                                    secondary 
                                    inverted 
                                    color="green"
                                    style={{padding: '2em 2em'}}
                                >
                                    <Header content='Adam Smith' />
                                    <Rating icon="star" defaultRating={2} maxRating={5} />
                                    <p style={{textAlign: 'left'}}>
                                        Exceptionally easy application to use. 
                                        Affordable rate and convenient arrangement 
                                        for recepient! Also, very good exchange rate!
                                    </p>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment 
                                    textAlign="center" 
                                    raised
                                    tertiary 
                                    secondary 
                                    inverted 
                                    color="green"
                                    style={{padding: '2em 2em'}}
                                >
                                    <Header content='Adam Smith' />
                                    <Rating icon="star" defaultRating={2} maxRating={5} />
                                    <p style={{textAlign: 'left'}}>
                                        Exceptionally easy application to use. 
                                        Affordable rate and convenient arrangement 
                                        for recepient! Also, very good exchange rate!
                                    </p>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment 
                                    textAlign="center" 
                                    raised
                                    tertiary 
                                    secondary 
                                    inverted 
                                    color="green"
                                    style={{padding: '2em 2em'}}
                                >
                                    <Header content='Adam Smith' />
                                    <Rating icon="star" defaultRating={2} maxRating={5} />
                                    <p style={{textAlign: 'left'}}>
                                        Exceptionally easy application to use. 
                                        Affordable rate and convenient arrangement 
                                        for recepient! Also, very good exchange rate!
                                    </p>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}
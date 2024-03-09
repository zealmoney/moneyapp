import { Card, Container, Grid, Header, Rating, Segment } from "semantic-ui-react"

export const Customers = () => {

    return(
        <>
            <Segment vertical size="massive" style={{padding: '4em 0em'}}>
                <Container>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column textAlign="center">
                                <Header as='h1' content='What Our Customers Are Saying' />
                            </Grid.Column>  
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Segment 
                                    raised 
                                    tertiary 
                                    secondary 
                                    inverted 
                                    color="green"
                                    style={{padding: '2em 2em'}}
                                >
                                    <Header content='Adam Smith' />
                                    <Rating icon="star" defaultRating={4} maxRating={5} />
                                    <p>
                                        Exceptionally easy application to use. 
                                        Affordable rate and convenient arrangement 
                                        for recepient! Also, very good exchange rate!
                                    </p>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Segment 
                                    raised 
                                    tertiary 
                                    secondary 
                                    inverted 
                                    color="green"
                                    style={{padding: '2em 2em'}}
                                >
                                    <Header content='Adam Smith' />
                                    <Rating icon="star" defaultRating={3} maxRating={5} />
                                    <p>
                                        Exceptionally easy application to use. 
                                        Affordable rate and convenient arrangement 
                                        for recepient! Also, very good exchange rate!
                                    </p>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Segment 
                                    raised 
                                    tertiary 
                                    secondary 
                                    inverted 
                                    color="green"
                                    style={{padding: '2em 2em'}}
                                >
                                    <Header content='Adam Smith' />
                                    <Rating icon="star" defaultRating={2} maxRating={5} />
                                    <p>
                                        Exceptionally easy application to use. 
                                        Affordable rate and convenient arrangement 
                                        for recepient! Also, very good exchange rate!
                                    </p>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Segment 
                                    raised 
                                    tertiary 
                                    secondary 
                                    inverted 
                                    color="green"
                                    style={{padding: '2em 2em'}}
                                >
                                    <Header content='Adam Smith' />
                                    <Rating icon="star" defaultRating={5} maxRating={5} />
                                    <p>
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
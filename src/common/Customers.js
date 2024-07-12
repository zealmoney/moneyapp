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
                                    <Header content='Adedotun Adebayo' />
                                    <Rating icon="star" defaultRating={5} maxRating={5} />
                                    <p>
                                        MoneyApp is very easy to use, I was able to send money to my 
                                        brother in Nigeria and he confirmed that he received the money in his
                                        bank account almost immediately.
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
                                    <Header content='Selassie Hadzide' />
                                    <Rating icon="star" defaultRating={5} maxRating={5} />
                                    <p>
                                        With MoneyApp I can send money to friends and families in any part of 
                                        the world. I have used the app on several occasions to send money abroad, 
                                        it's very fast and reliable. 
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
                                    <Header content='Estrella Moreno' />
                                    <Rating icon="star" defaultRating={5} maxRating={5} />
                                    <p>
                                        Sending money with MoneyApp is fascinating and comes with several incentives. 
                                        I remember receiving a $10 bonus after sending money for the first time 
                                        with the app.
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
                                    <Header content='Katie Monsen' />
                                    <Rating icon="star" defaultRating={5} maxRating={5} />
                                    <p>
                                        MoneyApp exchange rate is the best compared to their competitors.
                                        I will definitely be using this app again and also recommend it 
                                        to friends and family.
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
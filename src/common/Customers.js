import { Card, Container, Grid, Header, Rating, Segment } from "semantic-ui-react"

export const Customers = () => {

    return(
        <>
            <Segment vertical size="massive">
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column textAlign="center">
                                <Header as='h1' content='What our Customers are saying' />
                            </Grid.Column>  
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Segment circular raised inverted color="green">
                                    <Header content='Adam Smith' />
                                    <Rating icon="star" maxRating={3} />
                                    <p>
                                        Exceptionally easy application to use. 
                                        Affordable rate and convenient arrangement 
                                        for recepient! Also, very good exchange rate!
                                    </p>


                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={4}></Grid.Column>
                            <Grid.Column width={4}></Grid.Column>
                            <Grid.Column width={4}></Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}
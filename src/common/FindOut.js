import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react"

export const FindOut = () => {

    return(
        <>
            <Segment vertical size="massive" style={{padding: '4em 0em'}}>
                <Container>
                    <Grid textAlign="center" stackable>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h1' textAlign="center" content='Why Money App preffered' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Grid>
                                    <Grid.Column 
                                        computer={4} 
                                        mobile={8} 
                                        textAlign="center"
                                        style={{maxHeight: 400}}
                                    >
                                    <Segment
                                        tertiary
                                        raised
                                        inverted
                                        secondary
                                        color="green"
                                    >
                                        <Header as='h3' icon>
                                            <Icon 
                                                circular 
                                                inverted
                                                color="green"
                                                name="gift"
                                            />
                                            Special Offers
                                            <Header as='h5' inverted 
                                                content='We give special offers to all our
                                                existing and new customers'
                                            />
                                        </Header>
                                    </Segment>
                                    </Grid.Column>
                                    <Grid.Column computer={4} mobile={8} textAlign="center">
                                    <Segment
                                        tertiary
                                        raised
                                        inverted
                                        secondary
                                        color="green"
                                    >
                                        <Header as='h3' icon>
                                            <Icon 
                                                circular 
                                                inverted
                                                color="green"
                                                name="money"
                                            />
                                            On-Time Delivery
                                            <Header as='h5' inverted 
                                                content='We deliver money on time and to the 
                                                right destination'
                                            />
                                        </Header>
                                    </Segment>
                                    </Grid.Column>
                                    <Grid.Column computer={4} mobile={8} textAlign="center">
                                    <Segment
                                        tertiary
                                        raised
                                        inverted
                                        secondary
                                        color="green"
                                    >
                                        <Header as='h3' icon>
                                            <Icon 
                                                circular 
                                                inverted
                                                color="green"
                                                name="calendar check"
                                            />
                                            Track Your Transfers
                                            <Header as='h5' inverted 
                                                content="We provide a reliable way to track the 
                                                progress of your transfers"
                                            />
                                        </Header>
                                    </Segment>
                                    </Grid.Column>
                                    <Grid.Column computer={4} mobile={8} textAlign="center">
                                    <Segment
                                        tertiary
                                        raised
                                        inverted
                                        secondary
                                        color="green"
                                    >
                                        <Header as='h3' icon>
                                            <Icon 
                                                circular 
                                                inverted
                                                color="green"
                                                name="percent"
                                            />
                                            Competitive Rates
                                            <Header as='h5' inverted 
                                                content="Our rates are better compared to our competitors"
                                            />
                                        </Header>
                                    </Segment>
                                    </Grid.Column> 
                                </Grid>
                            </Grid.Column>
                            
                        </Grid.Row>
                    </Grid>
                </Container>    
            </Segment>
        </>
    )
}
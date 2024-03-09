import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react"

export const FindOut = () => {

    return(
        <>
            <Segment vertical size="massive" style={{padding: '4em 0em'}}>
                <Container>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h1' textAlign="center" content='Why Money App Is Preffered To Others' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Grid stackable>
                                    <Grid.Column 
                                        textAlign="center"
                                        width={4}
                                    >
                                    <Segment
                                        tertiary
                                        raised
                                        inverted
                                        secondary
                                        color="green"
                                        style={{minHeight: 200}}
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
                                                content='We give special offers to all our customers'
                                            />
                                        </Header>
                                    </Segment>
                                    </Grid.Column>
                                    <Grid.Column 
                                        textAlign="center"
                                        width={4}
                                    >
                                    <Segment
                                        tertiary
                                        raised
                                        inverted
                                        secondary
                                        color="green"
                                        style={{minHeight: 200}}
                                    >
                                        <Header as='h3' icon>
                                            <Icon 
                                                circular 
                                                inverted
                                                color="green"
                                                name="money"
                                            />
                                            Fast Delivery
                                            <Header as='h5' inverted 
                                                content='We deliver money on time and to the 
                                                right destination'
                                            />
                                        </Header>
                                    </Segment>
                                    </Grid.Column>
                                    <Grid.Column 
                                        textAlign="center"
                                        width={4}
                                    >
                                    <Segment
                                        tertiary
                                        raised
                                        inverted
                                        secondary
                                        color="green"
                                        style={{minHeight: 200}}
                                    >
                                        <Header as='h3' icon>
                                            <Icon 
                                                circular 
                                                inverted
                                                color="green"
                                                name="calendar check"
                                            />
                                            Trackable Transfers
                                            <Header as='h5' inverted 
                                                content="We provide a reliable way to track the 
                                                progress of your transfers"
                                            />
                                        </Header>
                                    </Segment>
                                    </Grid.Column>
                                    <Grid.Column 
                                        textAlign="center"
                                        width={4}
                                    >
                                    <Segment
                                        tertiary
                                        raised
                                        inverted
                                        secondary
                                        color="green"
                                        style={{minHeight: 200}}
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
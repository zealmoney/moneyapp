import { Grid, Header, Icon, Segment } from "semantic-ui-react"

export const FindOutMobile = () => {

    return(
        <>
            <Segment vertical size="massive" style={{padding: '2em 0em'}}>
                
                <Grid textAlign="center" stackable>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h1' textAlign="center" content='Find Out Why More People Use Money App' />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                            <Grid.Column>
                                <Grid>
                                    <Grid.Column  
                                        textAlign="center"
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
                                    <Grid.Column textAlign="center">
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
                                            Timely Delivery
                                            <Header as='h5' inverted 
                                                content='We deliver money on time and to the 
                                                right destination'
                                            />
                                        </Header>
                                    </Segment>
                                    </Grid.Column>
                                    <Grid.Column textAlign="center">
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
                                            Trackable Transfers
                                            <Header as='h5' inverted 
                                                content="We provide a reliable way to track the 
                                                progress of your transfers"
                                            />
                                        </Header>
                                    </Segment>
                                    </Grid.Column>
                                    <Grid.Column textAlign="center">
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
            </Segment>
        </>
    )
}
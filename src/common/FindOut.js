import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react"

export const FindOut = () => {

    return(
        <>
            <Segment vertical size="massive" style={{padding: '4em 0em'}}>
                
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h1' textAlign="center" content='Find Out Why More People Use Money App' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign="center" width={4}>
                                <Icon inverted color="green" size="big" name="list" />
                                <Header as='h1' content='Peace of mind' />
                                <Header 
                                    as='h3' 
                                    content='You and your loved ones can track your transfer every step of the way.' 
                                />
                            </Grid.Column>
                            <Grid.Column textAlign="center" width={4}>
                                <Icon inverted color="green" size="big" name="money" />
                                <Header as='h1' content='Great Value' />
                                <Header 
                                    as='h3' 
                                    content='More money makes it home thanks to our great rates, special offers, and no hidden fees.' 
                                />
                            </Grid.Column>
                            <Grid.Column textAlign="center" width={4}>
                                <Icon inverted color="green" size="big" name="check circle" />
                                <Header as='h1' content='Delivery Time Guaranteed' />
                                <Header 
                                    as='h3' 
                                    content='You can trust that transfers will be delivered on time or we’ll refund your fees.' 
                                />
                            </Grid.Column>
                            
                        </Grid.Row>
                    </Grid>
                
            </Segment>
        </>
    )
}
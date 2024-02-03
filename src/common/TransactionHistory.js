import { Container, Divider, Flag, Grid, Header, Segment } from "semantic-ui-react"
import { TransactionNavbar } from "./TransactionNavbar"
import { useState } from "react"

const countries = [
    { name: 'Nigeria', countryCode: 'ng'},
    { name: 'Ghana', countryCode: 'gh' },
]

 export const TransactionHistory = () => {

    //const flagRenderer = (item) => 
        //<Flag name={item.countryCode} />

    return(
        <>
            <TransactionNavbar />
            <Segment vertical style={{padding: '4em 0em'}}>
                <Container>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column style={{maxWidth: 600}}>
                                <Header as='h3' content='Transactions' />
                                <Segment style={{padding: '2em 2em'}}>
                                    <Grid textAlign="left">
                                        <Grid.Row>
                                            <Grid.Column width={12}>
                                                To: Akeem Adebayo <br/>
                                                Date: Jan 29, 2024 @ 1.15pm<br/>
                                                <Flag name="ng" /> - Bank Deposit <br/>
                                                Completed
                                            </Grid.Column>
                                            <Grid.Column textAlign="right" width={4}>
                                                $140 USD
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Divider />
                                        <Grid.Row>
                                            <Grid.Column width={12}>
                                                To: Selazie Akufor <br/>
                                                Date: Jan 29, 2024 @ 2.15pm<br/>
                                                <Flag name="gh" /> - Bank Deposit <br/>
                                                Completed
                                            </Grid.Column>
                                            <Grid.Column textAlign="right" width={4}>
                                                $120 USD
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}
import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react"
import { TransactionNavbar } from "./TransactionNavbar"
import { Footer } from "./Footer"
import { useGetCardDetailsQuery } from "../features/api/apiSlice"
import { SideMenu } from "./SideMenu"

export const PaymentCard = () => {

    const {data: cards, isSuccess} = useGetCardDetailsQuery()
    let cardDetails
    let count = 0
    if(isSuccess){
        let card = cards.find(e => e.email === sessionStorage.getItem('userId'))
        if(card){
            cardDetails = cards.map((c) => {
                if(c.email === sessionStorage.getItem('userId')){
                    const cardNumber = c.cardNumber
                    const expiration = c.expiration
                    const address = c.streetAd  + ' ' + c.apartment + ' ' + c.b_city + ' ' + c.b_region + ' ' + c.zipcode
                    ++count
                    return(
                        <Grid.Row>
                        <Grid.Column style={{maxWidth: 600}}>
                            <Segment raised style={{padding: '2em 2em'}}>
                                <Header icon as='h3'>
                                    <Icon name="credit card" circular inverted color="green" />
                                </Header>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={8} textAlign="left">
                                            <Header as='h3' content='Card No:' />
                                        </Grid.Column>
                                        <Grid.Column width={8} textAlign="right">
                                            <Header as='h4' content={cardNumber} />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={8} textAlign="left">
                                            <Header as='h3' content='Exp. Date:' />
                                        </Grid.Column>
                                        <Grid.Column width={8} textAlign="right">
                                                        <Header as='h4' content={expiration} />
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column width={8} textAlign="left">
                                                        <Header as='h3' content='Billing Address:' />
                                                </Grid.Column>
                                                <Grid.Column width={8} textAlign="right">
                                                    <Header as='h4' content={address} />
                                                </Grid.Column>
                                            </Grid.Row>
                            </Grid>
                        </Segment>
                    </Grid.Column>
                    </Grid.Row>
                    )
                }
            })
        }
    }
    if(count > 0){
        return(
            <>
                <TransactionNavbar />
                <Segment vertical style={{padding: '4em 0em'}}>
                    <Container>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={6}>
                                    <SideMenu />
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column textAlign="center">
                                                <Header as='h1' content='Payment Methods' />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Grid textAlign="center">
                                                    {cardDetails}
                                                </Grid>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
                <Footer />
            </>
        )
    }else{
        return(
            <>
                <TransactionNavbar />
                <Segment vertical style={{padding: '4em 0em 23em'}}>
                    <Container>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={6}>
                                    <SideMenu />
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <Header textAlign="center" as='h1' content='Payment Methods' />
                                    <Segment 
                                        tertiary raised 
                                        inverted color="green" secondary
                                        style={{padding: '2em 2em'}}
                                    >
                                        <Grid textAlign="center">
                                            <Header
                                               as='h3' 
                                               icon
                                               inverted
                                            >
                                                 <Icon name="credit card" circular inverted color="green" />
                                                No payment method on file yet
                                            </Header>
                                        </Grid>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
                <Footer />
            </>
        )
    }
}
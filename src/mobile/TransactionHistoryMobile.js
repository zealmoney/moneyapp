import { Container, Divider, Flag, Grid, Header, Icon, Segment } from "semantic-ui-react"
import { useState } from "react"
import { useGetTransactionsQuery } from "../features/api/apiSlice"
import { TransactionNavbarMobile } from "./TransactionNavbarMobile"
import { Footer } from "../common/Footer"
import Moment from "react-moment"
import moment from "moment"

const countries = [
    { name: 'Nigeria', countryCode: 'ng'},
    { name: 'Ghana', countryCode: 'gh' },
]

 export const TransactionHistoryMobile = () => {

   const {data: transactions, isSuccess} = useGetTransactionsQuery()

   let transaction
   let count = 0
   if(isSuccess){
        transaction = transactions.map((trans) => {
        
            if(trans.senderEmail === sessionStorage.getItem('userId')){
                return(
                    <>
                        <Grid.Row>
                            <Grid.Column width={12}>
                                To: {trans.fname + ' ' + trans.lname} <br/>
                                Date: {moment(trans.trans_date).format("MMMM Do YYYY")} <br/>
                                <Flag name={trans.currencyReceived} />  {trans.deliveryBank ? 'Bank Deposit' : 'Cash Pick Up'} <br/>
                                Completed
                            </Grid.Column>
                            <Grid.Column textAlign="right" width={4} style={{fontWeight: 'bold'}}>
                                ${trans.moneySent}
                            </Grid.Column>
                        </Grid.Row>
                        <Divider />
                        {++count}
                    </>
                )
            }
        }) 
    }

    if(count > 0){
    return(
        <>
            <TransactionNavbarMobile />
            <Segment vertical style={{padding: '4em 2em 10em'}}>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column style={{maxWidth: 600}}>
                                <Header as='h3' content='Transactions' />
                                <Segment 
                                    raised
                                    style={{padding: '2em 2em'}}
                                >
                                    <Grid textAlign="left">
                                        {transaction}
                                    </Grid>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </Segment>
            <Footer />
        </>
    )
    }else{
        return(
            <>
                <TransactionNavbarMobile />
                <Segment vertical style={{padding: '5em 0em 15em'}}>
                    <Container>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column style={{maxWidth: 600}}>
                                    <Header as='h1' content='Transactions' />
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
                                                 <Icon name="money" circular inverted color="green" />
                                                No Transactions to be displayed
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
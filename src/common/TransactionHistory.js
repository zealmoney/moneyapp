import { Container, Divider, Flag, Grid, Header, Icon, Segment } from "semantic-ui-react"
import { TransactionNavbar } from "./TransactionNavbar"
import { useState } from "react"
import { Footer } from "./Footer"
import { useGetTransactionsQuery } from "../features/api/apiSlice"

const countries = [
    { name: 'Nigeria', countryCode: 'ng'},
    { name: 'Ghana', countryCode: 'gh' },
]

 export const TransactionHistory = () => {

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
                                Date: {trans.trans_date}<br/>
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
            <TransactionNavbar />
            <Segment vertical style={{padding: '4em 0em 20em'}}>
                <Container>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column style={{maxWidth: 600}}>
                                <Header as='h1' content='Transactions' />
                                <Segment style={{padding: '2em 2em'}}>
                                    <Grid textAlign="left">
                                        {transaction}
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
    }else{
        return(
            <>
                <TransactionNavbar />
                <Segment vertical style={{padding: '8em 0em 25em'}}>
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
import { Container, Divider, Flag, Grid, Header, Segment } from "semantic-ui-react"
import { useState } from "react"
import { useGetTransactionsQuery } from "../features/api/apiSlice"
import { TransactionNavbarMobile } from "./TransactionNavbarMobile"
import { Footer } from "../common/Footer"

const countries = [
    { name: 'Nigeria', countryCode: 'ng'},
    { name: 'Ghana', countryCode: 'gh' },
]

 export const TransactionHistoryMobile = () => {

   const {data: transactions, isSuccess} = useGetTransactionsQuery()

   let transaction
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
                    </>
                )
            }
        }) 
    }

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
}
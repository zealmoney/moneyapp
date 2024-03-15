import { Button, Container, Divider, Flag, Grid, Header, Modal, Segment } from "semantic-ui-react"
import { useDispatch, useSelector } from "react-redux"
import { useAddTransactionMutation, useGetUsersQuery } from "../features/api/apiSlice"
import { useReducer, useState } from "react"
import { Footer } from "../common/Footer"
import { TransactionNavbarMobile } from "./TransactionNavbarMobile"

export const TransactionSummaryMobile = () => {

    function modalReducer(state, action){
        switch(action.type){
            case 'open':
                return {open: true, size: action.size}
            case 'close': 
                return {open: false}
            default:
                return new Error('unsupported action')
        }
    }

    const [state, dispatch] = useReducer(modalReducer, 
        {
            open: false, size: undefined
        })

        const {open, size} = state

        const closeModal = () => {
            dispatch({type: 'close'})
        }

    const [readyToSend, setReadyToSend] = useState(false)

    const senderEmail = sessionStorage.getItem('userId')

    const moneySent = useSelector((state) => state.transactions.moneySent)
    const moneyReceived = useSelector((state) => state.transactions.moneyReceived)
    const currencySent = useSelector((state) => state.transactions.currencySent)
    const currencyReceived = useSelector((state) => state.transactions.currencyReceived)
    const fee = useSelector((state) => state.transactions.fee)
    const total = useSelector((state) => state.transactions.total)

    const deliveryBank = useSelector((state)=> state.transactions.deliveryBank)
    const deliveryCash = useSelector((state)=> state.transactions.deliveryCash)
    const zenith = useSelector((state)=> state.transactions.zenith)
    const gtb = useSelector((state)=> state.transactions.gtb)
    const polaris = useSelector((state)=> state.transactions.polaris)

    const accountNumber = useSelector((state) => state.transactions.accountNumber)
    const retypeAccountNumber = useSelector((state) => state.transactions.retypeAccountNumber)
    const checking = useSelector((state) => state.transactions.checking)
    const savings = useSelector((state) => state.transactions.savings)

    const fname = useSelector((state) => state.transactions.fname)
    const mname = useSelector((state) => state.transactions.mname)
    const lname = useSelector((state) => state.transactions.lname)
    const slname = useSelector((state) => state.transactions.slname)
    const country = useSelector((state) => state.transactions.country)
    const email = useSelector((state) => state.transactions.email)
    const street = useSelector((state) => state.transactions.street)
    const street2 = useSelector((state) => state.transactions.street2)
    const region = useSelector((state) => state.transactions.region)
    const city = useSelector((state) => state.transactions.city)
    const postal = useSelector((state) => state.transactions.postal)

    const cardNumber = useSelector((state) => state.transactions.cardNumber)
    const expiration = useSelector((state) => state.transactions.expiration)
    const securityCode = useSelector((state) => state.transactions.securityCode)
    const b_fname = useSelector((state) => state.transactions.b_fname)
    const nickname = useSelector((state) => state.transactions.nickname)
    const streetAd = useSelector((state) => state.transactions.streetAd)
    const apartment = useSelector((state) => state.transactions.apartment)
    const b_city = useSelector((state) => state.transactions.b_city)
    const b_region = useSelector((state) => state.transactions.b_region)
    const zipcode = useSelector((state) => state.transactions.zipcode)

    const [loading, setLoading] = useState(false)

    const {data: users, isSuccess} = useGetUsersQuery()
    let firstname, lastname, phone, u_email
    if(isSuccess){
        const user = users.find(u => u.email === sessionStorage.getItem('userId'))
        if(user){
            firstname = user.fname
            lastname = user.lname
            phone = user.phone
            u_email = user. email
        }
    }

    const clickReadyToSend = () => {
        setReadyToSend(true)
        dispatch({type: 'close'})
    }

    const [sendTransaction, {isLoading}] = useAddTransactionMutation()
    //const saveTransaction = [moneySent, moneyReceived, currencySent, currencyReceived, fee, total].every(Boolean) && !isLoading

    const sendMoneyClick = async() => {
           // if(saveTransaction){
                dispatch({type: 'close'})
                //if(readyToSend){
                    setLoading(true)
                    try {
                        await sendTransaction({
                            moneySent, moneyReceived, currencySent, currencyReceived, fee, total,
                            deliveryBank, deliveryCash, zenith, gtb, polaris,
                            accountNumber, retypeAccountNumber, checking, savings,
                            fname, mname, lname, slname, country, email, street, street2, region, city, postal,
                            cardNumber, expiration, securityCode, b_fname, nickname, streetAd, apartment, b_city,
                            b_region, zipcode, senderEmail
                        }).unwrap()
                        setLoading(false)
                    } catch (error) {
                    console.error('An error has occured', error) 
                    }
                //}
                
            //}
        
    }


    return(
        <>
            <TransactionNavbarMobile />
            <Segment vertical style={{padding: '4em 2em'}}>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h1' content='Transaction Summary' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column style={{maxWidth: 600}}>
                                <Segment raised>
                                    <Grid textAlign="left">
                                        <Grid.Row>
                                            <Grid.Column textAlign="center">
                                                <Header as='h3' content="Transaction Details" inverted color="green" />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header content='Amount to be sent' />
                                            </Grid.Column>
                                            <Grid.Column textAlign="right" width={8}>${moneySent}</Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header content='Amount to be received' />
                                            </Grid.Column>
                                            <Grid.Column textAlign="right" width={8}>{moneyReceived}</Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header content='Fee' />
                                            </Grid.Column>
                                            <Grid.Column textAlign="right" width={8}>${fee}</Grid.Column>
                                        </Grid.Row>
                                        <Divider />
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header content='Total' />
                                            </Grid.Column>
                                            <Grid.Column textAlign="right" width={8}>${total}</Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                                <Segment raised>
                                    <Grid textAlign="left">
                                        <Grid.Row>
                                            <Grid.Column textAlign="center">
                                                <Header as='h3' content="Delivery Details" inverted color="green" />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header content='Delivery Method' />
                                            </Grid.Column>
                                            <Grid.Column width={8} textAlign="right">
                                                {deliveryBank ? 'Bank Deposit' : ''}
                                                {deliveryCash ? 'Cash Pickup' : ''}
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header content='Bank' />
                                            </Grid.Column>
                                            <Grid.Column width={8} textAlign="right">
                                                {zenith ? 'Zenith Bank' : ''}
                                                {gtb ? 'Guaranty Trust Bank' : ''}
                                                {polaris ? 'Polaris Bank' : ''}
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                                <Segment raised>
                                    <Grid textAlign="left">
                                        <Grid.Row>
                                            <Grid.Column textAlign="center">
                                                <Header as='h3' content="Recepient Account Details" inverted color="green" />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header content="Recepient's Account Number" />
                                            </Grid.Column>
                                            <Grid.Column width={8} textAlign="right">{accountNumber}</Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header content="Account Type" />
                                            </Grid.Column>
                                            <Grid.Column width={8} textAlign="right">
                                                {checking ? 'Checking' : ''}
                                                {savings ? 'Savings' : ''}
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                                <Segment raised>
                                    <Grid textAlign="left">
                                        <Grid.Row>
                                            <Grid.Column textAlign="center">
                                                <Header as='h3' content="Recepient Details" inverted color="green" />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header content="Recepient's Name" />
                                            </Grid.Column>
                                            <Grid.Column textAlign="right" width={8}>
                                                {fname + ' ' + lname}
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header content="City" />
                                            </Grid.Column>
                                            <Grid.Column textAlign="right" width={8}>
                                                {city}
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                                <Segment raised>
                                    <Grid textAlign="left">
                                        <Grid.Row>
                                            <Grid.Column textAlign="center">
                                                <Header as='h3' content="Sender's Details" inverted color="green" />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header content="Sender's Name" />
                                            </Grid.Column>
                                            <Grid.Column textAlign="right" width={8}>
                                                {firstname + ' ' + lastname}
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header content="Phone Number" />
                                            </Grid.Column>
                                            <Grid.Column textAlign="right" width={8}>
                                                {phone}
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header content="Email" />
                                            </Grid.Column>
                                            <Grid.Column textAlign="right" width={8}>
                                                {email}
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                                <Segment raised>
                                    <Grid textAlign="left">
                                        <Grid.Row>
                                            <Grid.Column textAlign="center">
                                                <Header as='h3' content="Payment Details" inverted color="green" />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header content="Card Number" />
                                            </Grid.Column>
                                            <Grid.Column textAlign="right" width={8}>
                                                {cardNumber}
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header content="Billing Address" />
                                            </Grid.Column>
                                            <Grid.Column textAlign="right" width={8}>
                                                {streetAd + ' ' + apartment + ' ' + b_city + ' ' + b_region + ' ' + zipcode}
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Button 
                                    circular 
                                    color="green" 
                                    size="massive"
                                    loading={loading}
                                    onClick={() => dispatch({type: 'open', size: 'mini'})}
                                >
                                    Send Money
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                <Modal
                    open={open}
                    size={size}
                >
                    <Modal.Header style={{textAlign: 'center'}}>
                        Transaction Summary
                    </Modal.Header>
                    <Modal.Content>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column>
                                    <Header 
                                        as='h3'
                                        content='Please make sure all informations provided are correct.'
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    Are you sure you want to proceed?
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Button
                                        color="youtube"
                                        onClick={() => dispatch({type: 'close'})}
                                    >
                                        NO
                                    </Button>
                                    <Button
                                        color="green"
                                        onClick={() => sendMoneyClick()}
                                    >
                                        YES
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Modal.Content>
                </Modal>
            </Segment>
            <Footer />
        </>
    )
}
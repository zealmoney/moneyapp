import { Button, Container, Divider, Dropdown, Flag, Form, Grid, Header, Input, Label, Message, Radio, Segment } from "semantic-ui-react"
import { useReducer, useState } from "react"
import { useGetRatesQuery } from "../features/api/apiSlice"
import { parseInt } from "lodash"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateTransaction } from "../features/api/transactionSlice"
import { TransactionNavbarMobile } from "./TransactionNavbarMobile"
import { Footer } from "../common/Footer"

const countryOptions = [
    { key: 'ng', value: 'ng', flag: 'ng', text: 'NGN'},
    { key: 'ng', value: 'us', flag: 'ng', text: 'NGN-USD'},
    { key: 'gh', value: 'gh', flag: 'gh', text: 'GHS'},
]

const countryOptions2 = [
    { key: 'us', value: 'us', flag: 'us', text: 'USD'},
    { key: 'gb', value: 'gb', flag: 'gb', text: 'GBP'},
    { key: 'au', value: 'au', flag: 'au', text: 'AUD'},
    { key: 'ca', value: 'ca', flag: 'ca', text: 'CAD'},
    
]

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

export const TransactionComponentMobile = () => {

    const [countryName, setCountryName] = useState('')
    const [country, setCountry] = useState('')

    const [moneySent, setMoneySent] = useState('')
    const [moneyReceived, setMoneyReceived] = useState()
    const [currencySent, setCurrencySent] = useState('')
    const [currencyReceived, setCurrencyReceived] = useState('')
    const [deliverySpeed, setDeliverySpeed] = useState('')
    const [fee, setFee] = useState(0.00)
    const [total, setTotal] = useState(0.00)
    const [loading, setLoading] = useState(false)

    const [msg, setMsg] = useState(false)
    const [msg1, setMsg1] = useState(false)
    const [msg2, setMsg2] = useState(false)

    const [moneySentError, setMoneySentError] = useState(false)
    const [moneyReceivedError, setMoneyReceivedError] = useState(false)

    const handleMoneySentChange = e => {
        setMoneySent(e.target.value)
        setMsg1(false)
    }

    const navigate = useNavigate()

    const {data: rates, isSuccess} = useGetRatesQuery()

    const dispatch_reducer = useDispatch()


    const [state, dispatch] = useReducer(modalReducer, 
        {
            open: false, size: undefined
        })

        const {
            open, size
        } = state

        const closeModal = () => {
            dispatch({type: 'close'})
        }

        let total_amount = 0

        const calculateCurrency = (value) => {
            setCountryName(value)
            const currency = rates.find(r => r.countrycode === value)
            if(currency){
                setMoneyReceived(moneySent * currency.rate)
                setFee(currency.fee)
                total_amount = parseInt(moneySent) + parseInt(currency.fee)
                setTotal(total_amount)

            }
        }

        const transactionClick = () => {
            if(country === ''){
                setMsg(true)
            }else if(moneySent === ''){
                setMsg1(true)
            }else if(countryName === ''){
                setMsg2(true)
            }else if(country !== '' && moneySent !== '' && countryName !== ''){
                setLoading(true)
                dispatch_reducer(updateTransaction(
                    moneySent, 
                    moneyReceived, 
                    country,
                    countryName,
                    fee, 
                    total
                ))
                setTimeout(() => {                   
                    setLoading(false)
                    navigate('/delivery')
                    //navigate('/transactionsummary')
                }, 300)
            }
        }

    return(
        <>
            <TransactionNavbarMobile />
            <Segment vertical style={{padding: '4em 1em'}}>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column style={{maxWidth: 600}}>
                                <Header as='h1' content='Send money to...?' />
                                <Segment style={{padding: '2em 0.5em'}}>
                                    {
                                        msg ?
                                        <Message 
                                            style={{textAlign: 'left'}}
                                            error
                                            header='Currency selection error'
                                            list={['Please select a currency to send']}
                                        /> : ''
                                    }
                                    {
                                        msg1 ?
                                        <Message 
                                            style={{textAlign: 'left'}}
                                            error
                                            header='Money Sent Error '
                                            list={['Please select an amount to be sent']}
                                        /> : ''
                                    }
                                    {
                                        msg2 ?
                                        <Message 
                                            style={{textAlign: 'left'}}
                                            error
                                            header='Currency selection error'
                                            list={['Please select a currency to be received']}
                                        /> : ''
                                    }
                                    <Form size="small">
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>You Send</label>
                                            <Input 
                                                type="text"
                                                labelPosition="right" 
                                                error={moneySentError}   
                                            >
                                                <Label basic><Flag name={country} /></Label>
                                                <Input 
                                                    placeholder='0.00'
                                                    value={moneySent}
                                                    
                                                    onChange={handleMoneySentChange}
                                                />
                                                <Label basic>
                                                    <Dropdown 
                                                        placeholder="Cur"
                                                        options={countryOptions2}
                                                        fluid
                                                        onChange={(e, {value}) => {
                                                            setCountry(value)
                                                            setMsg(false)
                                                        }}
                                                    />
                                                </Label>
                                            </Input>
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>They Receive</label>
                                            <Input 
                                                type="text"                              
                                                labelPosition="right"   
                                            >
                                                <Label basic><Flag name={countryName} /></Label>
                                                <Input
                                                    placeholder='0.00'
                                                    value={moneyReceived}
                                                    error={moneyReceivedError}
                                                />
                                                <Label basic>
                                                    <Dropdown 
                                                        placeholder="Cur"
                                                        options={countryOptions}
                                                        fluid
                                                        onChange={(e, {value}) => {
                                                            calculateCurrency(value.toString())
                                                            setMsg2(false)
                                                        }}
                                                    />
                                                </Label>
                                            </Input>
                                        </Form.Field>
                                    </Form>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign="left" style={{maxWidth: 600}}>
                                <span style={{textAlign: "center"}}>
                                    {}
                                </span>
                                <Message
                                    onClick={() => dispatch({type: 'open', size: 'tiny'})}
                                >
                                    <Message.Content>
                                        Fee
                                        <span style={{float: 'right'}}>{fee}</span>
                                        <Divider />
                                        Total
                                        <span style={{float: 'right'}}>{total}</span>
                                    </Message.Content>
                                </Message>
                                <Button 
                                    fluid 
                                    size="huge" 
                                    color="green"
                                    loading={loading}
                                    onClick={() => transactionClick()}
                                >
                                    Continue
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </Segment>
            <Footer />
        </>
    )
}
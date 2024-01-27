import { Button, Container, Divider, Dropdown, Flag, Form, Grid, Header, Input, Label, Message, Radio, Segment } from "semantic-ui-react"
import { TransactionNavbar } from "./TransactionNavbar"
import { useReducer, useState } from "react"
import { TransactionModal } from "./TransactionModal"

const countryOptions = [
    { key: 'ng', value: 'ng', flag: 'ng', text: 'NGN'},
    { key: 'ng', value: 'ng', flag: 'ng', text: 'NGN-USD'},
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

export const TransactionComponent = () => {

    const [countryName, setCountryName] = useState('')
    const [country, setCountry] = useState('')

    const [moneySent, setMoneySent] = useState(0.00)
    const [moneyReceived, setMoneyReceived] = useState(0.00)
    const [currencySent, setCurrencySent] = useState('')
    const [currencyReceived, setCurrencyReceived] = useState('')
    const [deliverySpeed, setDeliverySpeed] = useState('')
    const [fee, setFee] = useState('4.00')
    const [total, setTotal] = useState('0.00')

    const handleMoneySentChange = e => setMoneySent(e.target.value)


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

        const calculateCurrency = (value) => {
            setCountryName(value)
            setMoneyReceived(1000)
            setTotal(moneySent + fee)
        }

    return(
        <>
            <TransactionNavbar />
            <Segment vertical style={{marginTop: '0em'}}>
                <Container>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column style={{maxWidth: 600}}>
                                <Segment style={{padding: '4em 2em'}}>
                                    <Form size="huge">
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>You Send</label>
                                            <Input 
                                                type="text"
                                                placeholder='0.00'
                                                labelPosition="right"    
                                            >
                                                <Label basic><Flag name={country} /></Label>
                                                <input 
                                                    onChange={handleMoneySentChange}
                                                />
                                                <Label basic>
                                                    <Dropdown 
                                                        placeholder="Cur"
                                                        options={countryOptions2}
                                                        fluid
                                                        onChange={(e, {value}) => setCountry(value.toString())}
                                                    />
                                                </Label>
                                            </Input>
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>They Receive</label>
                                            <Input 
                                                type="text"
                                                placeholder='0.00'
                                                labelPosition="right"    
                                            >
                                                <Label basic><Flag name={countryName} /></Label>
                                                <input 
                                                    value={moneyReceived}
                                                />
                                                <Label basic>
                                                    <Dropdown 
                                                        placeholder="Cur"
                                                        options={countryOptions}
                                                        fluid
                                                        onChange={(e, {value}) => calculateCurrency(value.toString())}
                                                    />
                                                </Label>
                                            </Input>
                                        </Form.Field>
                                    </Form>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column style={{maxWidth: 600}}>
                                <Segment>
                                    <Header as='h2' content='Delivery speed' textAlign="left" />
                                    <Form size="huge">
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <Radio toggle label='Express, 1 USD = 852.02 NGN' />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <Radio toggle label='Economy, 1 USD = 852.02 NGN' />
                                        </Form.Field>
                                        
                                    </Form>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign="left" style={{maxWidth: 600}}>
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
                                <Button fluid size="huge" color="green">
                                    Continue
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                <TransactionModal 
                    open={open}
                    size={size}
                    close={closeModal}
                />
            </Segment>
        </>
    )
}
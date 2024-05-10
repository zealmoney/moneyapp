import { Breadcrumb, Button, Container, Dropdown, Flag, Form, Grid, Header, Icon, Image, Input, Label, List, Radio, Segment } from "semantic-ui-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateBank, updateDelivery } from "../features/api/transactionSlice"
import { useGetBankInfoQuery } from "../features/api/apiSlice"
import { TransactionNavbarMobile } from "./TransactionNavbarMobile"
import { Footer } from "../common/Footer"

const countryOptions = [
    { key: 'ng', value: 'ng', flag: 'ng', text: 'NGN'},
    { key: 'ng', value: 'ng', flag: 'ng', text: 'NGN-USD'},
    { key: 'gh', value: 'gh', flag: 'gh', text: 'GHS'},
]

export const DeliveryMethodMobile = () => {

    const [deliveryBank, setDeliveryBank] = useState(false)
    const [deliveryCash, setDeliveryCash] = useState(false)

    const [bank, setBank] = useState(false)

    const [bankName, setBankName] = useState('')

    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(true)

    const navigate = useNavigate()
    const dispatch_reducer = useDispatch()

    const handleBankChange = ({target}) => {
        setDisabled(false)
        setBank(true)
        setBankName(target.name)
    }

    const {data: bankinfo, isSuccess} = useGetBankInfoQuery()
    let bank_name
    if(isSuccess){
        bank_name = bankinfo.map((bank) => (
            <List.Item>
                <input
                    type='radio'
                    name="bank"
                    id="bank"
                    onChange={handleBankChange}
                /> &nbsp; &nbsp; &nbsp;
                <span>{bank.bank_name}</span>                
                <List.Content floated="right">
                    <Image size="mini" src={bank.bank_image} />
                </List.Content>
            </List.Item>
        ))
    }

    const handleDeliveryChangeBank = () => {
        setDeliveryBank(true)
        
    }
    const handleDeliveryChangeCash = () => {
        setDeliveryCash(true)
        
    } 

    const resetDelivery = () => {
        setDeliveryBank(false)
        setDeliveryCash(false)
        setDisabled(true)
        setBank(false)
    }

    const deliveryClick = () => {
        setLoading(true)
        dispatch_reducer(updateBank(deliveryBank, deliveryCash, bankName))
        setTimeout(() => {
            navigate('/accountinfo')
            
        }, 300)  
    }

    if(deliveryCash === false && deliveryBank === false){
        return(
            <>
                <TransactionNavbarMobile />
                <Segment vertical style={{padding: '4em 1em'}}>
                    <Container>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column>
                                    <Header as='h1' content='Select a delivery method' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign="left" style={{maxWidth: 600}}>
                                    <Segment style={{padding: '2em 0.5em'}}>
                                        <Form size="small">
                                            <Form.Group widths="equal">
                                            <Form.Field style={{textAlign: 'left'}}>
                                                <input  
                                                    type="radio"
                                                    value={deliveryCash}
                                                    onChange={handleDeliveryChangeCash} 
                                                /> &nbsp;&nbsp;&nbsp;
                                                <span>
                                                    <label>Cash Pickup</label>
                                                </span>
                                            </Form.Field>
                                            <Form.Field style={{textAlign: 'left'}}>
                                                <input 
                                                    type="radio" 
                                                    value={deliveryBank}
                                                    onChange={handleDeliveryChangeBank} 
                                                /> &nbsp;&nbsp;&nbsp;
                                                <span>
                                                    <label>Bank Deposit</label>
                                                </span>
                                            </Form.Field>
                                            </Form.Group>
                                            
                                        </Form>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
                <Footer />
            </>
        )
    }else if((deliveryCash === true || deliveryBank === true)){
        return(
            <>
                <TransactionNavbarMobile />
                <Segment vertical style={{padding: '6em 0em'}}>
                    <Container>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column textAlign="left">
                                    <Link onClick={() => resetDelivery()}>
                                        <Icon  name="long arrow alternate left" />
                                        Back
                                    </Link>
                                    <Header textAlign="center" as='h1' content='Delivery method' />
                                    
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign="left" style={{maxWidth: 600}}>
                                    <Segment style={{padding: '2em 2em'}}>
                                        
                                        {
                                        deliveryCash === true ? 
                                        <Header as='h5' icon='checkmark' content='Cash Pickup' color="green" />:
                                        <Header as='h5' icon='checkmark' content='Bank Deposit' color="green"  />
                                        }
                                        <Header textAlign="center" as='h3' content='Available Banks' />
                                        <List verticalAlign="middle" celled size="huge">
                                            {bank_name}
                                        </List>
                                        <Button 
                                            color="green"
                                            size="huge"
                                            fluid
                                            loading={loading}
                                            disabled={disabled}
                                            onClick={() => deliveryClick()}
                                        >
                                            Continue
                                        </Button>
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
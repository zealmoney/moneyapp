import { Breadcrumb, Button, Container, Dropdown, Flag, Form, Grid, Header, Icon, Image, Input, Label, List, Radio, Segment } from "semantic-ui-react"
import { TransactionNavbar } from "./TransactionNavbar"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateBank, updateDelivery } from "../features/api/transactionSlice"
import { Footer } from "./Footer"

const countryOptions = [
    { key: 'ng', value: 'ng', flag: 'ng', text: 'NGN'},
    { key: 'ng', value: 'ng', flag: 'ng', text: 'NGN-USD'},
    { key: 'gh', value: 'gh', flag: 'gh', text: 'GHS'},
]

export const DeliveryMethod = () => {

    const [deliveryBank, setDeliveryBank] = useState(false)
    const [deliveryCash, setDeliveryCash] = useState(false)

    const [zenith, setZenith] = useState(false)
    const [gtb, setGtb] = useState(false)
    const [polaris, setPolaris] = useState(false)

    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(true)

    const navigate = useNavigate()
    const dispatch_reducer = useDispatch()

    const handleDeliveryChangeBank = () => {
        setDeliveryBank(true)
        
    }
    const handleDeliveryChangeCash = () => {
        setDeliveryCash(true)
        
    } 

    const handleZenithChange = () => {
        setDisabled(false)
        setZenith(true)
        setGtb(false)
        setPolaris(false)
    }

    const handleGtbChange = () => {
        setDisabled(false)
        setGtb(true)
        setZenith(false)
        setPolaris(false)
    }

    const handlePolarisChange = () => {
        setDisabled(false)
        setPolaris(true)
        setZenith(false)
        setGtb(false)
    }

    const resetDelivery = () => {
        setDeliveryBank(false)
        setDeliveryCash(false)
    }

    const deliveryClick = () => {
        setLoading(true)
        dispatch_reducer(updateBank(deliveryBank, deliveryCash, zenith, gtb, polaris))
        setTimeout(() => {
            navigate('/accountinfo')
            //navigate('/transactionsummary')
        }, 300)    
    }

    if(deliveryCash === false && deliveryBank === false){
        return(
            <>
                <TransactionNavbar />
                <Segment vertical style={{padding: '4em 0em 24em'}}>
                    <Container>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column>
                                    <Header as='h1' content='Select a delivery method' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign="left" style={{maxWidth: 600}}>
                                    <Segment style={{padding: '4em 2em'}}>
                                        <Form size="huge">
                                            <Form.Group widths="equal">
                                            <Form.Field>
                                                <input  
                                                    type="radio"
                                                    value={deliveryCash}
                                                    onChange={handleDeliveryChangeCash} 
                                                /> &nbsp;&nbsp;&nbsp;
                                                <span>Cash Pickup</span>
                                            </Form.Field>
                                            <Form.Field style={{textAlign: 'right'}}>
                                                <input 
                                                    type="radio" 
                                                    value={deliveryBank}
                                                    onChange={handleDeliveryChangeBank} 
                                                /> &nbsp;&nbsp;&nbsp;
                                                <span>Bank Deposit</span>
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
                <TransactionNavbar />
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
                                            <List.Item>
                                                <input
                                                    type='radio'
                                                    name="bank" 
                                                    onChange={handleZenithChange}   
                                                /> &nbsp; &nbsp; &nbsp;
                                                <span>Zenith Bank</span>              
                                                <List.Content floated="right">
                                                    <Image size="mini" src='/images/zenith_bank.png' />
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <input
                                                    type='radio'
                                                    name="bank"
                                                    onChange={handleGtbChange}
                                                /> &nbsp; &nbsp; &nbsp;
                                                <span>Guaranty Trust Bank</span>                
                                                <List.Content floated="right">
                                                    <Image size="mini" src='/images/guaranty_trust_bank.png' />
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <input 
                                                    type='radio'
                                                    name="bank"
                                                    onChange={handlePolarisChange}
                                                />  &nbsp; &nbsp; &nbsp;  
                                                <span>Polaris Bank</span>             
                                                <List.Content floated="right">
                                                    <Image size="mini" src='/images/polaris_bank.png' />
                                                </List.Content>
                                            </List.Item>
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
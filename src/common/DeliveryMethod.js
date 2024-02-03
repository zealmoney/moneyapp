import { Breadcrumb, Button, Container, Dropdown, Flag, Form, Grid, Header, Icon, Image, Input, Label, List, Radio, Segment } from "semantic-ui-react"
import { TransactionNavbar } from "./TransactionNavbar"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

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
        setTimeout(() => {
            navigate('/accountinfo')
        }, 300)    
    }

    if(deliveryCash === false && deliveryBank === false){
        return(
            <>
                <TransactionNavbar />
                <Segment vertical>
                    <Container>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column>
                                    <Header as='h4' content='Select a delivery method' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign="left" style={{maxWidth: 600}}>
                                    <Segment>
                                        <Form>
                                            <Form.Field>
                                                <Radio 
                                                    toggle 
                                                    label='Cash Pickup' 
                                                    value={deliveryCash}
                                                    onChange={handleDeliveryChangeCash} 
                                                />
                                                <Radio 
                                                    toggle 
                                                    label='Bank Deposit' 
                                                    style={{float: 'right'}} 
                                                    value={deliveryBank}
                                                    onChange={handleDeliveryChangeBank} 
                                                />
                                            </Form.Field>
                                        </Form>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </>
        )
    }else if((deliveryCash === true || deliveryBank === true)){
        return(
            <>
                <TransactionNavbar />
                <Segment vertical>
                    <Container>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column textAlign="left">
                                    <Link onClick={() => resetDelivery()}>
                                        <Icon  name="long arrow alternate left" />
                                        Back
                                    </Link>
                                    <Header textAlign="center" as='h4' content='Delivery method' />
                                    
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign="left" style={{maxWidth: 600}}>
                                    <Segment>
                                        
                                        {
                                        deliveryCash === true ? 
                                        <Header as='h6' icon='checkmark' content='Cash Pickup' color="green" />:
                                        <Header as='h6' icon='checkmark' content='Bank Deposit' color="green"  />
                                        }
                                        <Header textAlign="center" as='h5' content='Available Banks' />
                                        <List verticalAlign="middle" celled>
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
            </>
        )
    }
    
}
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

    const [accountNumber, setAccountNumber] = useState('')
    const [retypeAccountNumber, setretypeAccountNumber] = useState('')
    const [loading, setLoading] = useState(false)

    const [accountNumberError, setAccountNumberError] = useState(false)
    const [retypeAccountNumberError, setretypeAccountNumberError] = useState(false)

    const [recepientsInfo, setRecepientsInfo] = useState(false)

    const [country, setCountry] = useState('')

    const handleAccountNumberChange = e => setAccountNumber(e.target.value)
    const handleretypeAccountNumberChange = e => setretypeAccountNumber(e.target.value)


    const handleDeliveryChangeBank = () => {
        setDeliveryBank(true)
        setZenith(false)
        setGtb(false)
        setPolaris(false)
        setRecepientsInfo(false)
        sessionStorage.setItem('deliverybank', deliveryBank)
    }
    const handleDeliveryChangeCash = () => {
        setDeliveryCash(true)
        setZenith(false)
        setGtb(false)
        setPolaris(false)
        setRecepientsInfo(false)
        sessionStorage.setItem('deliverycash', deliveryCash)
    } 

    const handleZenithChange = () => {
        setDeliveryBank(false)
        setDeliveryCash(false)
        setZenith(true)
        setRecepientsInfo(false)
        sessionStorage.setItem('zenith', zenith)
    }
    const handleGtbChange = () =>{
        setDeliveryBank(false)
        setDeliveryCash(false)
        setGtb(true)
        setRecepientsInfo(false)
        sessionStorage.setItem('gtb', gtb)
    } 
    const handlePolarisChange = () => {
        setDeliveryBank(false)
        setDeliveryCash(false)
        setPolaris(true)
        setRecepientsInfo(false)
        sessionStorage.setItem('polaris', polaris)
    }

    const resetDelivery = () => {
        setDeliveryBank(false)
        setDeliveryCash(false)
    }

    const deliveryClick = () => {
        if(accountNumber === ''){
            setAccountNumberError({content: 'Empty Fields'})
        }else if(retypeAccountNumber === ''){
            setretypeAccountNumberError({content: 'Empty Fields'})
        }else if(accountNumber !== retypeAccountNumber){
            setAccountNumberError({content: 'Account numbers does not match'})
        }else{
            setLoading(true)
            setTimeout(() => {
                setRecepientsInfo(true)
                setDeliveryBank(false)
                setDeliveryCash(false)
                setZenith(false)
                setGtb(false)
                setPolaris(false)
                setLoading(false)
            }, 300)   
        }
        
    }

    const navigate = useNavigate()

    if(deliveryCash === false && deliveryBank === false && zenith === false && gtb === false && polaris === false && recepientsInfo === false){
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
                                <Grid.Column textAlign="left" style={{maxWidth: 400}}>
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
                                            <Form.Field style={{textAlign: 'center'}}>
                                                <Button color="green">
                                                    Continue
                                                </Button>
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
    }else if((deliveryCash === true || deliveryBank === true) && (zenith === false && gtb === false && polaris === false) && (recepientsInfo === false)){
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
                                <Grid.Column textAlign="left" style={{maxWidth: 400}}>
                                    <Segment>
                                        
                                        {
                                        deliveryCash === true ? 
                                        <Header as='h6' icon='checkmark' content='Cash Pickup' color="green" />:
                                        <Header as='h6' icon='checkmark' content='Bank Deposit' color="green"  />
                                        }
                                        <Header textAlign="center" as='h5' content='Available Banks' />
                                        <List verticalAlign="middle" celled>
                                            <List.Item>
                                                <Radio 
                                                    label='Zenith Bank'
                                                    value={zenith} 
                                                    onChange={() => handleZenithChange()}
                                                />                 
                                                <List.Content floated="right">
                                                    <Image size="mini" src='/images/zenith_bank.png' />
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <Radio 
                                                    label='Guaranty Trust Bank' 
                                                    value={gtb}
                                                    onChange={() => handleGtbChange()}
                                                />                 
                                                <List.Content floated="right">
                                                    <Image size="mini" src='/images/guaranty_trust_bank.png' />
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <Radio 
                                                    label='Polaris Bank'
                                                    value={polaris}
                                                    onChange={() => handlePolarisChange()} 
                                                />                 
                                                <List.Content floated="right">
                                                    <Image size="mini" src='/images/polaris_bank.png' />
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </>
        )
    }else if((zenith === true || gtb === true || polaris === true) && (deliveryCash === false && deliveryBank === false) && (recepientsInfo === false)){
        return(
            <>
                <TransactionNavbar />
                <Segment vertical>
                    <Container>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column style={{maxWidth: 400}}>
                                    <Segment>
                                        <Header as='h4' content='Account Information' />
                                        <Form>
                                            <Header textAlign="left" as='h4' content='Account Type' />
                                            <Form.Field style={{textAlign: 'left'}}>                                                
                                                <input type="radio"  name="acctype" /> &nbsp;&nbsp;&nbsp;
                                                <span><label>Checking</label></span>                                               
                                            </Form.Field>
                                            <Form.Field style={{textAlign: 'left'}}>
                                                <input type="radio" name="acctype" /> &nbsp;&nbsp;&nbsp;
                                                <span><label>Savings</label></span>
                                            </Form.Field>
                                            <Form.Field style={{textAlign: 'left'}}>
                                                <label>Account Number</label>
                                                <Form.Input 
                                                    value={accountNumber}
                                                    error={accountNumberError}
                                                    onChange={handleAccountNumberChange}
                                                    onClick={() => setAccountNumberError(false)}
                                                />
                                            </Form.Field>
                                            <Form.Field style={{textAlign: 'left'}}>
                                                <label>Re-type Account Number</label>
                                                <Form.Input 
                                                    value={retypeAccountNumber}
                                                    error={retypeAccountNumberError}
                                                    onChange={handleretypeAccountNumberChange}
                                                    onClick={() => setretypeAccountNumberError(false)}
                                                />
                                            </Form.Field>
                                            <Form.Field>
                                                <Button 
                                                    color="green" 
                                                    fluid
                                                    loading={loading}
                                                    onClick={() => deliveryClick()}
                                                >
                                                    Continue
                                                </Button>
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
    }else if((recepientsInfo === true) && (deliveryBank === false && deliveryCash === false) && (zenith === false && gtb === false && polaris === false)){
        return(
            <>
                <TransactionNavbar />
                <Segment vertical>
                    <Container>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column style={{maxWidth: 450}}>
                                    <Segment>
                                        <Header as='h3' content="Recepient's Information" />
                                        <span>
                                            Enter the recepient's information as it appears on 
                                            official identification.
                                        </span>
                                        <Form>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>First Name</label>
                                            <Form.Input />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>Middle Name(Optional)</label>
                                            <Form.Input />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>Last Name</label>
                                            <Form.Input />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>Second Last Name(Optional)</label>
                                            <Form.Input />
                                        </Form.Field>
                                        <Form.Field>
                                            <Input>
                                            <Label basic>
                                                <Dropdown 
                                                    options={countryOptions}
                                                    fluid
                                                    onChange={(e, {value}) => setCountry(value.toString())}
                                                />
                                            </Label>
                                            <input />
                                            </Input>
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>Email</label>
                                            <Form.Input />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>Street 1</label>
                                            <Form.Input />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>Street 2</label>
                                            <Form.Input />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>State/Province/Region</label>
                                            <Form.Input />
                                        </Form.Field>
                                        <Form.Group widths='equal'>
                                            <Form.Field style={{textAlign: 'left'}}>
                                                <label>City</label>
                                                <Form.Input />
                                            </Form.Field>
                                            <Form.Field style={{textAlign: 'left'}}>
                                                <label>Postal Code</label>
                                                <Form.Input />
                                            </Form.Field>
                                        </Form.Group>
                                        <Form.Field>
                                            <Button color="green" fluid>
                                                Continue
                                            </Button>
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
    }
}
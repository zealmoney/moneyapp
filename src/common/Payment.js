import { Button, Container, Form, Grid, Header, Icon, List, Message, Segment } from "semantic-ui-react"
import { TransactionNavbar } from "./TransactionNavbar"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updatePayment } from "../features/api/transactionSlice"

export const Payment = () => {

    const [showForm, setShowForm] = useState(false)

    const [cardNumber, setCardNumber] = useState('')
    const [expiration, setExpiration] = useState('')
    const [securityCode, setSecurityCode] = useState('')
    const [b_fname, setFname] = useState('')
    const [nickname, setNickname]= useState('')
    const [streetAd, setStreetAd]= useState('')
    const [apartment, setApartment]= useState('')
    const [b_city, setCity]= useState('')
    const [b_region, setRegion]= useState('')
    const [zipcode, setZipcode]= useState('')

    const [loading, setLoading] = useState(false)

    const [cardNumberError, setCardNumberError] = useState(false)
    const [expirationError, setExpirationError] = useState(false)
    const [securityCodeError, setSecurityCodeError] = useState(false)
    const [fnameError, setFnameError] = useState(false)
    const [nicknameError, setNicknameError]= useState(false)
    const [streetAdError, setStreetAdError]= useState(false)
    const [apartmentError, setApartmentError]= useState(false)
    const [cityError, setCityError]= useState(false)
    const [regionError, setRegionError]= useState(false)
    const [zipcodeError, setZipcodeError]= useState(false)

    const handleCardNumberChange = e => setCardNumber(e.target.value)
    const handleExpirationChange = e => setExpiration(e.target.value)
    const handleSecurityCodeChange = e => setSecurityCode(e.target.value)
    const handleFnameChange = e => setFname(e.target.value)
    const handleNicknameChange = e => setNickname(e.target.value)
    const handleStreetAdChange = e => setStreetAd(e.target.value)
    const handleApartmentChange = e => setApartment(e.target.value)
    const handleCityChange = e => setCity(e.target.value)
    const handleRegionChange = e => setRegion(e.target.value)
    const handleZipcodeChange = e => setZipcode(e.target.value)

    const dispatch_reducer = useDispatch()
    const navigate = useNavigate()

    const paymentClick = () => {
        if(cardNumber === ''){
            setCardNumberError({content: 'Empty Fields'})
        }else if(expiration === ''){
            setExpirationError({content: 'Empty Fields'})
        }else if(securityCode === ''){
            setSecurityCodeError({content: 'Empty Fields'})
        }else if(b_fname === ''){
            setFnameError({content: 'Empty Fields'})
        }else if(nickname === ''){
            setNicknameError({content: 'Empty Fields'})
        }else if(streetAd === ''){
            setStreetAdError({content: 'Empty Fields'})
        }else if(b_city === ''){
            setCityError({content: 'Empty Fields'})
        }else if(b_region === ''){
            setRegionError({content: 'Empty Fields'})
        }else if(zipcode === ''){
            setZipcodeError({content: 'Empty Fields'})
        }else if(
            cardNumber !== '' && expiration !== '' && 
            securityCode !== '' && b_fname !== '' &&
            nickname !== '' && streetAd !== '' && b_city !== '' &&
            b_region !== '' && zipcode !== ''
        ){
            setLoading(true)
            dispatch_reducer(updatePayment(
                cardNumber, expiration, securityCode, b_fname,
                nickname, streetAd, apartment, b_city, b_region,
                zipcode
            ))
            navigate('/transactionsummary')
        }
    }

    if(showForm === false){
        return(
            <>
                <TransactionNavbar />
                <Segment vertical style={{padding: '4em 0em'}}>
                    <Container>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column>
                                    <Header as='h1' content='Payment Method' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column style={{maxWidth: 600}}>
                                    <Segment style={{padding: '2em 2em', textAlign: 'left'}}>
                                        <List size="huge" link>
                                            <List.Item 
                                                as='a'
                                                onClick={() => setShowForm(true)}
                                            >
                                                <List.Icon name="credit card" inverted color="green" />
                                                <List.Content>
                                                    <List.Header>
                                                        Add a new card
                                                    </List.Header>
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
    }else if(showForm){
        return(
            <>
                <TransactionNavbar />
                <Segment vertical style={{padding: '4em 0em'}}>
                    <Container>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column textAlign="left">
                                    <Link onClick={() => setShowForm(false)}>
                                        <Icon size="large" name="long arrow alternate left" />
                                        Back
                                    </Link>                    
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header as='h1' content='Pay with card' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column style={{maxWidth: 650}}>
                                    <Segment style={{padding: '2em 2em', textAlign: 'left'}}>
                                        <Message color="green" size="huge">
                                            <Message.Content style={{color: 'black'}}>
                                                Debit cards have no extra fees.
                                                Credit cards have an extra 3% fee.
                                            </Message.Content>
                                        </Message>
                                        <Form size="huge">
                                            <Form.Field>
                                                <label> Card Number</label>
                                                <Form.Input 
                                                    value={cardNumber}
                                                    error={cardNumberError}
                                                    onChange={handleCardNumberChange}
                                                    onClick={() => setCardNumberError(false)}
                                                />
                                            </Form.Field>
                                            <Form.Group widths="equal">
                                                <Form.Field>
                                                    <label>Expiration Date</label>
                                                    <Form.Input 
                                                        value={expiration}
                                                        error={expirationError}
                                                        onChange={handleExpirationChange}
                                                        onClick={() => setExpirationError(false)}
                                                    />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Security Code</label>
                                                    <Form.Input 
                                                        icon='credit card' 
                                                        iconPosition="right" 
                                                        value={securityCode}
                                                        error={securityCodeError}
                                                        onChange={handleSecurityCodeChange}
                                                        onClick={() => setSecurityCodeError(false)}
                                                    />
                                                </Form.Field>
                                            </Form.Group>
                                            <Form.Field>
                                                <label>Name as it appears on card</label>
                                                <Form.Input 
                                                    value={b_fname}
                                                    error={fnameError}
                                                    onChange={handleFnameChange}
                                                    onClick={() => setFnameError(false)}
                                                />
                                            </Form.Field>
                                            <Form.Field>
                                                <label>Card Nickname (Optional)</label>
                                                <Form.Input 
                                                    value={nickname}
                                                    error={nicknameError}
                                                    onChange={handleNicknameChange}
                                                    onClick={() => setNicknameError(false)}
                                                />
                                            </Form.Field>
                                            <Header textAlign="center" as='h2' content='Billing Address' />
                                            {/*<input type="radio" />*/}
                                            <Form.Field>
                                                <label>Street Address</label>
                                                <Form.Input 
                                                    value={streetAd}
                                                    error={streetAdError}
                                                    onChange={handleStreetAdChange}
                                                    onClick={() => setStreetAdError(false)}
                                                />
                                            </Form.Field>
                                            <Form.Field>
                                                <label>Apartment, suit, unit, etc. (Optional)</label>
                                                <Form.Input 
                                                    value={apartment}
                                                    error={apartmentError}
                                                    onChange={handleApartmentChange}
                                                    onClick={() => setApartmentError(false)}
                                                />
                                            </Form.Field>
                                            <Form.Field>
                                                <label>City</label>
                                                <Form.Input 
                                                    value={b_city}
                                                    error={cityError}
                                                    onChange={handleCityChange}
                                                    onClick={() => setCityError(false)}
                                                />
                                            </Form.Field>
                                            <Form.Field>
                                                <label>State</label>
                                                <Form.Input 
                                                    value={b_region}
                                                    error={regionError}
                                                    onChange={handleRegionChange}
                                                    onClick={() => setRegionError(false)}
                                                />                                           
                                            </Form.Field>
                                            <Form.Field>
                                                <label>Zip Code</label>
                                                <Form.Input 
                                                    value={zipcode}
                                                    error={zipcodeError}
                                                    onChange={handleZipcodeChange}
                                                    onClick={() => setZipcodeError(false)}
                                                />
                                            </Form.Field>
                                            
                                        </Form>
                                    </Segment>
                                        <Message color="green" size="large" >
                                                <Message.Content style={{color: 'black'}}>
                                                    Your card will not be charged until you confirm all the informations 
                                                    provided are correct.
                                                </Message.Content>
                                            </Message>
                                        <Button 
                                            color="green"
                                            size="huge"
                                            loading={loading}
                                            fluid
                                            onClick={() => paymentClick()}
                                        >
                                            Continue
                                        </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </>
        )
    }
    
}
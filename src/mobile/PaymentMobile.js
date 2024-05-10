import { Button, Container, Form, Grid, Header, Icon, List, Message, Segment } from "semantic-ui-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updatePayment } from "../features/api/transactionSlice"
import Cards  from "react-credit-cards-2"
import "react-credit-cards-2/dist/es/styles-compiled.css"
import { clearNumber } from "./utils"
import Payment from "payment"
import { useCardDetailsMutation, useGetCardDetailsQuery } from "../features/api/apiSlice"
import { TransactionNavbarMobile } from "./TransactionNavbarMobile"
import { Footer } from "../common/Footer"

export const PaymentMobile = () => {

    const [showForm, setShowForm] = useState(false)

    const [cardNumber, setCardNumber] = useState('')
    const [expiration, setExpiration] = useState("")
    const [securityCode, setSecurityCode] = useState('')
    const [b_fname, setFname] = useState('')
    const [nickname, setNickname]= useState('none')
    const [streetAd, setStreetAd]= useState('')
    const [apartment, setApartment]= useState('none')
    const [b_city, setCity]= useState('')
    const [b_region, setRegion]= useState('')
    const [zipcode, setZipcode]= useState('')
    const [email, setEmail] = useState(sessionStorage.getItem('userId'))

    const [focused, setFocused] = useState('')

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

    const handleCardNumberChange = e => 
        {
            const clearValue = clearNumber(e.target.value)
            const issuer = Payment.fns.cardType(e.target.value)
            switch(issuer){
                case "amex": 
                    setCardNumber(`${clearValue.slice(0,4)} ${clearValue.slice(4,10)} ${clearValue.slice(10,15)}`) 
                    break;
                case "diners":
                    setCardNumber(`${clearValue.slice(0,4)} ${clearValue.slice(4,10)} ${clearValue.slice(10,14)}`)
                    break
                default:
                    setCardNumber(`${clearValue.slice(0,4)} ${clearValue.slice(4,8)} ${clearValue.slice(8,12)} ${clearValue.slice(12,19)}`)
            }
        }
    const handleExpirationChange = e => 
        {
            const clearValue = clearNumber(e.target.value)
            setExpiration(clearValue)
            if(expiration.length >= 2){
                setExpiration(`${clearValue.slice(0,2)}/${clearValue.slice(2,4)}`)
            }
        }
    const handleSecurityCodeChange = (e, allValues = {}) => 
        {
            const clearValue = clearNumber(e.target.value)
            let maxLength = 4
            if(allValues.number){
                const issuer = Payment.fns.cardType(allValues.number)
                maxLength = issuer === "amex" ? 4 : 3
            }
            setSecurityCode(clearValue.slice(0, maxLength))
        }
    const handleFnameChange = e => setFname(e.target.value)
    const handleNicknameChange = e => setNickname(e.target.value)
    const handleStreetAdChange = e => setStreetAd(e.target.value)
    const handleApartmentChange = e => setApartment(e.target.value)
    const handleCityChange = e => setCity(e.target.value)
    const handleRegionChange = e => setRegion(e.target.value)
    const handleZipcodeChange = e => setZipcode(e.target.value)

    const dispatch_reducer = useDispatch()
    const navigate = useNavigate()

    const [updateCardDetails, {isLoading}] = useCardDetailsMutation()
    const saveCardDetails = [cardNumber, expiration, securityCode, b_fname, nickname, 
        streetAd, apartment, b_city, b_region, zipcode, email].every(Boolean) && !isLoading

    const clickCard = (cn, exp, fn, nn, str, apt, ct, rg, zp) => {
        setCardNumber(cn)
        setExpiration(exp)
        setFname(fn)
        setNickname(nn)
        setStreetAd(str)
        setApartment(apt)
        setCity(ct)
        setRegion(rg)
        setZipcode(zp)
        setShowForm(true)
    }

    const {data: cards, isSuccess} = useGetCardDetailsQuery()
    let cardDetails
    if(isSuccess){
        let card = cards.find(e => e.email === sessionStorage.getItem('userId'))
        if(card){
            cardDetails = cards.map((c) => {
                if(c.email === sessionStorage.getItem('userId')){
                    return(
                        <Segment style={{padding: '2em 2em', textAlign: 'left'}}>
                            <List size="huge" link>
                                <List.Item 
                                    as='a'
                                    onClick={() => clickCard(
                                        c.cardNumber, c.expiration, c.b_fname,
                                        c.nickname, c.streetAd, c.apartment, c.b_city,
                                        c.b_region, c.zipcode
                                    )}
                                >
                                    <List.Icon name="credit card" inverted color="green" />
                                        <List.Content>
                                            <List.Header>
                                                {c.b_fname}
                                            </List.Header>
                                            {c.cardNumber}
                                        </List.Content>
                                </List.Item>
                            </List>
                        </Segment>
                    )
                }
            })
        }
    }

    const paymentClick = async () => {
        if(cardNumber === ''){
            setCardNumberError({content: 'Empty Fields'})
        }else if(expiration === ''){
            setExpirationError({content: 'Empty Fields'})
        }else if(securityCode === ''){
            setSecurityCodeError({content: 'Empty Fields'})
        }else if(b_fname === ''){
            setFnameError({content: 'Empty Fields'})
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
             streetAd !== '' && b_city !== '' &&
            b_region !== '' && zipcode !== ''
        ){
            let card = cards.find(c => c.cardNumber === cardNumber)
            if(card){
                setLoading(true)
                dispatch_reducer(updatePayment(
                    cardNumber, expiration, securityCode, b_fname,
                    nickname, streetAd, apartment, b_city, b_region,
                    zipcode, email
                ))
                navigate('/transactionsummary')
            }else{
                if(saveCardDetails){
                    setLoading(true)
                    try {
                    await updateCardDetails({
                        cardNumber, expiration, securityCode, b_fname, nickname,
                        streetAd, apartment, b_city, b_region, zipcode, email
                    }).unwrap() 
                    dispatch_reducer(updatePayment(
                        cardNumber, expiration, securityCode, b_fname,
                        nickname, streetAd, apartment, b_city, b_region,
                        zipcode, email
                    ))
                    navigate('/transactionsummary')
                    } catch (error) {
                        console.log('An error has occured', error)
                    }
                }
            }
        }
    }

    if(showForm === false){
        return(
            <>
                <TransactionNavbarMobile />
                <Segment vertical style={{padding: '4em 1em'}}>
                    <Container>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column>
                                    <Header as='h1' content='Payment Method' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column style={{maxWidth: 600}}>
                                    {cardDetails}
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
                <Footer />
            </>
        )
    }else if(showForm){

        const handleInputFocus = ({ target }) => {
            alert(target.name)
        };

        return(
            <>
                <TransactionNavbarMobile />
                <Segment vertical style={{padding: '4em 1em'}}>
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
                                        <Cards 
                                            number={cardNumber}
                                            expiry={expiration}
                                            cvc={securityCode}
                                            name={b_fname}
                                            focused={focused}
                                        />
                                        <Form size="huge">
                                            <Form.Field>
                                                <label> Card Number</label>
                                                <Form.Input
                                                    type="tel"
                                                    name="cardNumber"
                                                    placeholder='Card No:'
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
                                                        name="expiration"
                                                        type="tel"
                                                        placeholder='MM/YY'
                                                        value={expiration}
                                                        error={expirationError}
                                                        onChange={handleExpirationChange}
                                                        onClick={() => setExpirationError(false)}
                                                    />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Security Code</label>
                                                    <Form.Input 
                                                        type="tel"
                                                        name="securityCode"
                                                        placeholder='CVC'
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
                                                    type="text" 
                                                    name="b_fname"
                                                    value={b_fname}
                                                    error={fnameError}
                                                    onChange={handleFnameChange}
                                                    onClick={() => setFnameError(false)}
                                                />
                                            </Form.Field>
                                            <Form.Field>
                                                <label>Card Nickname (Optional)</label>
                                                <Form.Input 
                                                    error={nicknameError}
                                                    onChange={handleNicknameChange}
                                                    onClick={() => setNicknameError(false)}
                                                />
                                            </Form.Field>
                                            <Header textAlign="center" as='h2' content='Billing Address' />
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
                <Footer />
            </>
        )
    }
    
}
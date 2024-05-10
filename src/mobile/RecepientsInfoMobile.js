import { Button, Container, Dropdown, Form, Grid, Header, Input, Label, Segment, Select } from "semantic-ui-react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateRecepientsInfo } from "../features/api/transactionSlice"
import { useNavigate } from "react-router-dom"
import { TransactionNavbarMobile } from "./TransactionNavbarMobile"
import { Footer } from "../common/Footer"

const countryOptions = [
    { key: 'ng', value: 'ng', flag: 'ng', text: 'NGN'},
    { key: 'ng', value: 'ng', flag: 'ng', text: 'NGN-USD'},
    { key: 'gh', value: 'gh', flag: 'gh', text: 'GHS'},
]

export const RecepientsInfoMobile = () => {

    const firstname = useSelector((state) => state.transactions.fname)
    const middlename = useSelector((state) => state.transactions.mname)
    const lastname = useSelector((state) => state.transactions.lname)
    const s_lastname = useSelector((state) => state.transactions.slname)
    const r_country = useSelector((state) => state.transactions.country)
    const r_email = useSelector((state) => state.transactions.email)
    const r_street = useSelector((state) => state.transactions.street)
    const r_street2 = useSelector((state) => state.transactions.street2)
    const r_region = useSelector((state) => state.transactions.region)
    const r_city = useSelector((state) => state.transactions.city)
    const r_postal = useSelector((state) => state.transactions.postal)

    const [fname, setFname] = useState(firstname)
    const [mname, setMname] = useState('none')
    const [lname, setLname] = useState(lastname)
    const [slname, setSlname] = useState('none')
    const [country, setCountry] = useState(r_country)
    const [email, setEmail] = useState(r_email)
    const [street, setStreet] = useState(r_street)
    const [street2, setStreet2] = useState('none')
    const [region, setRegion] = useState(r_region)
    const [city, setCity] = useState(r_city)
    const [postal, setPostal] = useState(r_postal)

    const [loading, setLoading] = useState(false)

    const [fnameError, setFnameError] = useState(false)
    const [mnameError, setMnameError] = useState(false)
    const [lnameError, setLnameError] = useState(false)
    const [slnameError, setSlnameError] = useState(false)
    const [countryError, setCountryError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [streetError, setStreetError] = useState(false)
    const [street2Error, setStreet2Error] = useState(false)
    const [regionError, setRegionError] = useState(false)
    const [cityError, setCityError] = useState(false)
    const [postalError, setPostalError] = useState(false)

    const handleFnameChange = e => setFname(e.target.value)
    const handleMnameChange = e => setMname(e.target.value)
    const handleLnameChange = e => setLname(e.target.value)
    const handleSlnameChange = e => setSlname(e.target.value)
    const handleEmailChange = e => setEmail(e.target.value)
    const handleStreetChange = e => setStreet(e.target.value)
    const handleStreet2Change = e => setStreet2(e.target.value)
    const handleRegionChange = e => setRegion(e.target.value)
    const handleCityChange = e => setCity(e.target.value)
    const handlePostalChange = e => setPostal(e.target.value)

    const navigate = useNavigate()

    const dispatch_reducer =useDispatch()

    const RecepientInfoClick = () => {
        if(fname === ''){
            setFnameError({content: 'Empty Fields'})
        }else if(lname === ''){
            setLnameError({content: 'Empty Fields'})
        }else if(country === ''){
            setCountryError({content: 'Please Select a Country'})
        }else if(email === ''){
            setEmailError({content: 'Empty Fields'})
        }else if(street === ''){
            setStreetError({content: 'Empty Fields'})
        }else if(region === ''){
            setRegionError({content: 'Empty Fields'})
        }else if(city === ''){
            setCityError({content: 'Empty Fields'})
        }else if(postal === ''){
            setPostalError({content: 'Empty Fields'})
        }else if(
            fname !== '' &&
            lname !== '' &&
            country !== '' &&
            email !== '' &&
            street !== '' &&
            region !== '' &&
            city !== '' &&
            postal !== ''
        ){
            setLoading(true)
            dispatch_reducer(updateRecepientsInfo(
                fname, mname, lname, slname, country, email, street, street2,
                region, city, postal 
            ))
            navigate('/payment')
        }
    }


    return(
        <>
            <TransactionNavbarMobile />
                <Segment vertical style={{padding: '4em 1em'}}>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column style={{maxWidth: 600}}>
                                    <Header as='h1' content="Recepient's Information" />
                                    <Header 
                                        inverted
                                        color="green"
                                        as='h4'
                                        content="Enter the recepient's information as it appears on 
                                        official identification."
                                    />
                                    <Segment style={{padding: '2em 2em'}}>
                                        <Form size="huge">
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>First Name</label>
                                            <Form.Input 
                                                value={fname}
                                                error={fnameError}
                                                onChange={handleFnameChange}
                                                onClick={() => setFnameError(false)}

                                            />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>Middle Name(Optional)</label>
                                            <Form.Input 
                                                error={mnameError}
                                                onChange={handleMnameChange}
                                                onClick={() => setMnameError(false)}
                                            />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>Last Name</label>
                                            <Form.Input 
                                                value={lname}
                                                error={lnameError}
                                                onChange={handleLnameChange}
                                                onClick={() => setLnameError(false)}
                                            />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>Second Last Name(Optional)</label>
                                            <Form.Input 
                                                error={slnameError}
                                                onChange={handleSlnameChange}
                                                onClick={() => setSlnameError(false)}
                                            />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                                {/*<Dropdown 
                                                    options={countryOptions}
                                                    fluid
                                                    onChange={(e, {value}) => setCountry(value.toString())}
                                                    error={countryError}
                                                />*/}
                                                <label>Country</label>
                                                <Select 
                                                    placeholder="Select your country"
                                                    options={countryOptions}
                                                    onChange={(e, {value}) => setCountry(value.toString())}
                                                    error={countryError}
                                                />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>Email</label>
                                            <Form.Input 
                                                value={email}
                                                error={emailError}
                                                onChange={handleEmailChange}
                                                onClick={() => setEmailError(false)}
                                            />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>Street 1</label>
                                            <Form.Input 
                                                value={street}
                                                error={streetError}
                                                onChange={handleStreetChange}
                                                onClick={() => setStreetError(false)}
                                            />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>Street 2</label>
                                            <Form.Input 
                                                error={street2Error}
                                                onChange={handleStreet2Change}
                                                onClick={() => setStreet2Error(false)}
                                            />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>State/Province/Region</label>
                                            <Form.Input 
                                                value={region}
                                                error={regionError}
                                                onChange={handleRegionChange}
                                                onClick={() => setRegionError(false)}
                                            />
                                        </Form.Field>
                                            <Form.Field style={{textAlign: 'left'}}>
                                                <label>City</label>
                                                <Form.Input 
                                                    value={city}
                                                    error={cityError}
                                                    onChange={handleCityChange}
                                                    onClick={() => setCityError(false)}
                                                />
                                            </Form.Field>
                                            <Form.Field style={{textAlign: 'left'}}>
                                                <label>Postal Code</label>
                                                <Form.Input 
                                                    value={postal}
                                                    error={postalError}
                                                    onChange={handlePostalChange}
                                                    onClick={() => setPostalError(false)}
                                                />
                                            </Form.Field>

                                        <Form.Field>
                                            <Button 
                                                color="green" 
                                                size="huge"
                                                fluid
                                                loading={loading}
                                                onClick={() => RecepientInfoClick()}
                                            >
                                                Continue
                                            </Button>
                                        </Form.Field>
                                    </Form>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                </Segment>
                <Footer />
        </>
    )
}
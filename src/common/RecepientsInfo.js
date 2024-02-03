import { Button, Container, Dropdown, Form, Grid, Header, Input, Label, Segment } from "semantic-ui-react"
import { TransactionNavbar } from "./TransactionNavbar"
import { useState } from "react"

const countryOptions = [
    { key: 'ng', value: 'ng', flag: 'ng', text: 'NGN'},
    { key: 'ng', value: 'ng', flag: 'ng', text: 'NGN-USD'},
    { key: 'gh', value: 'gh', flag: 'gh', text: 'GHS'},
]

export const RecepientsInfo = () => {

    const [fname, setFname] = useState('')
    const [mname, setMname] = useState('')
    const [lname, setLname] = useState('')
    const [slname, setSlname] = useState('')
    const [country, setCountry] = useState()
    const [email, setEmail] = useState('')
    const [street, setStreet] = useState('')
    const [street2, setStreet2] = useState('')
    const [region, setRegion] = useState('')
    const [city, setCity] = useState('')
    const [postal, setPostal] = useState('')

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

    const RecepientInfoClick = () => {
        if(fname === ''){
            fnameError({content: 'Empty Fields'})
        }else if(lname === ''){
            lnameError({content: 'Empty Fields'})
        }else if(country === ''){
            countryError({content: 'Please Select a Country'})
        }else if(email === ''){
            emailError({content: 'Empty Fields'})
        }else if(street === ''){
            streetError({content: 'Empty Fields'})
        }else if(street2 === ''){
            street2Error({content: 'Empty Fields'})
        }else if(region === ''){
            regionError({content: 'Empty Fields'})
        }else if(city === ''){
            cityError({content: 'Empty Fields'})
        }else if(postal === ''){
            postalError({content: 'Empty Fields'})
        }else if(
            fname !== '' &&
            lname !== '' &&
            country !== '' &&
            email !== '' &&
            street !== '' &&
            street2 !== '' &&
            region !== '' &&
            city !== '' &&
            postal !== ''
        ){
            setLoading(true)
        }
    }


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
                                                value={mname}
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
                                                value={slname}
                                                error={slnameError}
                                                onChange={handleSlnameChange}
                                                onClick={() => setSlnameError(false)}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <Input
                                                error={handleCountryError}
                                            >
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
                                                value={street2}
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
                                        <Form.Group widths='equal'>
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
                                        </Form.Group>
                                        <Form.Field>
                                            <Button 
                                                color="green" 
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
                    </Container>
                </Segment>
        </>
    )
}
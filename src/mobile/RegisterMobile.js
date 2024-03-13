import { Button, Form, Grid, Header, Segment } from "semantic-ui-react"
import { AuthenticationHeader } from "../common/AuthenticationHeader"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useGetUsersQuery, useRegisterMutation } from "../features/api/apiSlice"
import EmailValidator from 'email-validator'

export const RegisterMobile = () => {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [fnameError, setFnameError] = useState(false)
    const [lnameError, setLnameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [dobError, setDobError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)

    const [loading, setLoading] = useState(false)

    const handleFnameChange = e => setFname(e.target.value)
    const handleLnameChange = e => setLname(e.target.value)
    const handlePhoneChange = e => setPhone(e.target.value)
    const handleEmailChange = e => setEmail(e.target.value)
    const handleDobChange = e => setDob(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)
    const handleConfirmPasswordChange = e => setConfirmPassword(e.target.value)

    const {data: users, isSuccess} = useGetUsersQuery()
    let count = 0
    if(isSuccess){
        const user = users.find(u => u.email === email)
        if(user){
            ++count
        }
    }

    const [addUser, {isLoading}] = useRegisterMutation()
    const saveUser = [fname, lname, phone, email, dob, password].every(Boolean) && !isLoading

    const registerBtn = async () => {
        if(fname === ''){
            setFnameError({content: 'Empty fields'})
        }else if(lname === ''){
            setLnameError({content: 'Empty Fields'})
        }else if(phone === ''){
            setPhoneError({content: 'Empty Fields'})
        }else if(email === ''){
            setEmailError({content: 'Empty Fields'})
        }else if(dob === ''){
            setDobError({content: 'Empty Fields'})
        }else if(password === ''){
            setPasswordError({content: 'Empty fields'})
        }else if(confirmPassword === ''){
            setConfirmPasswordError({content: 'Empty fields'})
        }else if(password !== confirmPassword){
            setConfirmPasswordError({content: 'Passwords do not match'})
        }else if(count > 0){
            setEmailError({content: 'Email already exists'})
        }else if(!EmailValidator.validate(email)){
            setEmailError({content: 'Email is not valid'})
        }
        else if(fname !== '' && lname !== '' && phone !== '' && email !== '' && dob !== '' && password !== '' && confirmPassword !== ''){
            setLoading(true)
            if(saveUser){    
                try {
                    await addUser({fname, lname, phone, email, dob, password}).unwrap()
                    setFname('')
                    setLname('')
                    setPhone('')
                    setEmail('')
                    setDob('')
                    setPassword('')
                    setConfirmPassword('')
                    setLoading(false)
                } catch (error) {
                    console.log('An error has occured', error)
                }
            }
        }
    }

    return(
        <>
            <AuthenticationHeader />
            <Segment vertical style={{padding: '2em 2em'}}>
                <Grid textAlign="center">
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h2' style={{wordSpacing: '0.1em'}}>
                                Sign Up with Money App
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={{maxWidth: 600}}>
                            <Segment
                                raised
                                style={{padding: '2em 2em'}}
                            >
                                <Form size="huge">
                                    <Form.Field style={{textAlign: 'left'}}>
                                        <label>
                                            First Name
                                        </label>
                                        <Form.Input 
                                            fluid
                                            value={fname}
                                            error={fnameError}
                                            onChange={handleFnameChange}
                                        />
                                    </Form.Field> 
                                    <Form.Field style={{textAlign: 'left'}}>
                                        <label>
                                            Last Name
                                        </label>
                                        <Form.Input 
                                            fluid
                                            value={lname}
                                            error={lnameError}
                                            onChange={handleLnameChange}
                                        />
                                    </Form.Field>
                                    <Form.Field style={{textAlign: 'left'}}>
                                        <label>
                                            Phone No:
                                        </label>
                                        <Form.Input 
                                            fluid
                                            value={phone}
                                            error={phoneError}
                                            onChange={handlePhoneChange}
                                        />
                                    </Form.Field>  
                                    <Form.Field style={{textAlign: 'left'}}>
                                        <label>
                                            Email Address
                                        </label>
                                        <Form.Input 
                                            fluid
                                            placeholder='youremail@domain.com'
                                            value={email}
                                            error={emailError}
                                            onChange={handleEmailChange}
                                        />
                                    </Form.Field> 
                                    <Form.Field style={{textAlign: 'left'}}>
                                        <label>
                                            Date Of Birth
                                        </label>
                                        <Form.Input
                                            type="date" 
                                            fluid
                                            placeholder='Enter your address'
                                            value={dob}
                                            error={dobError}
                                            onChange={handleDobChange}
                                        />
                                    </Form.Field>
                                    <Form.Field style={{textAlign: 'left'}}>
                                        <label>
                                            Password
                                        </label>
                                        <Form.Input 
                                            fluid
                                            icon='eye'
                                            iconPosition="right"
                                            type="password"
                                            value={password}
                                            error={passwordError}
                                            onChange={handlePasswordChange}
                                        />
                                    </Form.Field> 
                                    <Form.Field style={{textAlign: 'left'}}>
                                        <label>
                                            Confirm Password
                                        </label>
                                        <Form.Input 
                                            fluid
                                            type="password"
                                            value={confirmPassword}
                                            error={confirmPasswordError}
                                            onChange={handleConfirmPasswordChange}
                                        />
                                    </Form.Field> 
                                    <Form.Field>
                                        <Button 
                                            color="green" 
                                            fluid 
                                            size="huge"
                                            onClick={() => registerBtn()}
                                            loading={loading}
                                        >
                                            Sign Up
                                        </Button>
                                    </Form.Field>
                                    <Form.Field>
                                        <span>
                                            Already have an Account? &nbsp;
                                            <Link style={{textDecorationLine: 'none'}} to={'/signin'}>Sign In</Link>
                                        </span>
                                    </Form.Field>        
                                </Form>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>                
                </Grid>
            </Segment>
        </>
    )
}
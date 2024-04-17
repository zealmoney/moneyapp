import { Link } from "react-router-dom"
import { Button, Container, Form, Grid, Header, Icon, Input, Modal, Segment } from "semantic-ui-react"
import { AuthenticationHeader } from "./AuthenticationHeader"
import { useReducer, useRef, useState } from "react"
import { useGetUsersQuery, useRegisterMutation } from "../features/api/apiSlice"
import EmailValidator from 'email-validator'
import emailjs from '@emailjs/browser'

export const Register = () => {

    const send = useRef("form");

    const sendEmail = (e) => {

        emailjs
        .sendForm('service_0yg1q1q', 'template_pbszqyf', send.current, {
            publicKey: 'z0oC3V4leS1UTpslF',
        })
        .then(
            () => {
                dispatch({type: 'open', size: 'tiny'});
            },
            (error) => {
                alert('FAILED...' +  error.text);
            },
        );
    };

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
    
      const [state, dispatch] = useReducer(modalReducer, 
        {
            open: false, size: undefined
        })
    
        const {open, size} = state 

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

    const [passwordType, setPasswordType] = useState("password")
    const [confirmPasswordType, setConfirmPasswordType] = useState("password")

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

    const togglePassword = () => {
        if(passwordType === "password"){
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const togglePassword2 = () => {
        if(confirmPasswordType === "password"){
            setConfirmPasswordType("text")
            return;
        }
        setConfirmPasswordType("password")
    }

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
                    sendEmail()
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
            <Segment vertical style={{padding: '6em 2em'}}>
                <Container>
                <Grid textAlign="center" stackable>
                    <Grid.Row>
                        <Grid.Column>
                            <Header textAlign="center" as='h1' style={{wordSpacing: '0.1em'}}>
                                Sign Up with Money App
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={{maxWidth: 600}}>
                            <Segment 
                                raised
                                style={{padding: '4em 4em'}}
                                size="huge"
                            >
                                <Form size="huge" id="form">
                                    <Form.Field style={{textAlign: 'left'}}>
                                        <label>
                                            First Name
                                        </label>
                                        <Form.Input 
                                            fluid
                                            name='user_name'
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
                                            name='user_email'
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
                                        <Input
                                            fluid
                                            label={
                                                <Button
                                                    icon
                                                    basic
                                                >
                                                    <Icon 
                                                        name={passwordType === "password" ? "eye slash" : "eye"}
                                                        onClick={togglePassword} 
                                                    />
                                                </Button>
                                            }
                                            labelPosition="right"
                                            type={passwordType}
                                            value={password}
                                            error={passwordError}
                                            onChange={handlePasswordChange}
                                        />
                                    </Form.Field> 
                                    <Form.Field style={{textAlign: 'left'}}>
                                        <label>
                                            Confirm Password
                                        </label>
                                        <Input
                                            fluid
                                            label={
                                                <Button
                                                    icon
                                                    basic
                                                >
                                                    <Icon 
                                                        name={confirmPasswordType === "password" ? "eye slash" : "eye"}
                                                        onClick={togglePassword2} 
                                                    />
                                                </Button>
                                            }
                                            labelPosition="right"
                                            type={confirmPasswordType}
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
                </Container>
                <Modal
                    open={open}
                    size={size}
                >
                    <Modal.Header style={{textAlign: 'center'}}>
                        Registration Successful!!
                    </Modal.Header>
                    <Modal.Content>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column>
                                    <Header 
                                        as='h3'
                                        content='Thank You for registering with MoneyApp.'
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    A link has been sent to your email for verification.
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Button
                                        color="green"
                                        onClick={() => dispatch({type: 'close'})}
                                    >
                                        OK
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Modal.Content>
                </Modal>
            </Segment>
        </>
    )
}
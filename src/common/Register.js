import { Link } from "react-router-dom"
import { Button, Container, Form, Grid, Header, Icon, Input, Segment } from "semantic-ui-react"
import { AuthenticationHeader } from "./AuthenticationHeader"
import { useRef, useState } from "react"
import { useGetUsersQuery, useRegisterMutation } from "../features/api/apiSlice"
import EmailValidator from 'email-validator'
import emailjs from '@emailjs/browser'

export const Register = () => {

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


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_0yg1q1q', 'template_pbszqyf', form.current, {
            publicKey: 'z0oC3V4leS1UTpslF',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
  };

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
                                <form ref={form} onSubmit={sendEmail}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column textAlign="left">
                                                <label>First Name</label>
                                                <Input 
                                                    placeholder='First Name'
                                                    type='text' 
                                                    name='user_name'
                                                    fluid
                                                    value={fname}
                                                    error={fnameError}
                                                    onChange={handleFnameChange}
                                                />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column textAlign="left">
                                                <label>Last Name</label>
                                                <Input 
                                                    placeholder='Last Name'
                                                    fluid
                                                    value={lname}
                                                    error={lnameError}
                                                    onChange={handleLnameChange}
                                                />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column textAlign="left">
                                                <label>Phone No:</label>
                                                <Input 
                                                    placeholder='Phone No'
                                                    fluid
                                                    value={phone}
                                                    error={phoneError}
                                                    onChange={handlePhoneChange}
                                                />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column textAlign="left">
                                                <label>Email Address</label>
                                                <Input 
                                                    placeholder='youremail@domain.com'
                                                    type='email' 
                                                    name='user_email'
                                                    fluid
                                                    value={email}
                                                    error={emailError}
                                                    onChange={handleEmailChange}
                                                />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column textAlign="left">
                                                <label>Date of Birth</label>
                                                <Input 
                                                    type="date"
                                                    placeholder='DOB'
                                                    fluid
                                                    value={dob}
                                                    error={dobError}
                                                    onChange={handleDobChange}
                                                />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column textAlign="left">
                                                <label>Password</label>
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
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column textAlign="left">
                                                <label>Confirm Password</label>
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
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Button 
                                                    color="green" 
                                                    fluid 
                                                    size="huge"
                                                    onClick={() => registerBtn()}
                                                    loading={loading}
                                                >
                                                    Sign Up
                                                </Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <span>
                                                    Already have an Account? &nbsp;
                                                    <Link style={{textDecorationLine: 'none'}} to={'/signin'}>Sign In</Link>
                                                </span>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>      
                                </form>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>                
                </Grid>
                </Container>
            </Segment>
        </>
    )
}
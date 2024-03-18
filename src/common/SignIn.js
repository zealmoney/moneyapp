import { Button, ButtonOr, Container, Form, Grid, Header, Icon, Input, Menu, Segment } from "semantic-ui-react"
import { AuthenticationHeader } from "./AuthenticationHeader"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useGetUsersQuery } from "../features/api/apiSlice"
import EmailValidator from 'email-validator'

export const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verify, setVerify] = useState()
    const [loading, setLoading] = useState(false)

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const handleEmailChange = e => setEmail(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)

    const [passwordType, setPasswordType] = useState("password")

    const navigate = useNavigate()

    const {data: users, isSuccess} = useGetUsersQuery()
    let count_email = 0
    let count_user = 0
    let email_verify = 0
    if(isSuccess){
        const user = users.find(u => u.email === email)
        if(user){
            ++count_email
            if(user.verify === 1){
                ++email_verify
            }
            users.map((usr) => {
                if(usr.email === email && usr.password === password && usr.verify === 1){
                    ++count_user
                }
            })
        }
    }

    const togglePassword = () => {
        if(passwordType === "password"){
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const signInClick = () => {
        if(email === ''){
            setEmailError({content: 'Empty Fields'})
        }else if(password === ''){
            setPasswordError({content: 'Empty Fields'})
        }else if(!EmailValidator.validate(email)){
            setEmailError({content: 'Invalid Email'})
        }else if(count_email === 0){
            setEmailError({content: 'Email does not exist'})
        }else if(email_verify === 0){
            setEmailError({content: 'Email not verified'})
        }
        else if(count_user === 0){
            setPasswordError({content: 'Wrong password entered'})
        }
        else if(count_user > 0){
            setLoading(true)
            setTimeout(() => {
                sessionStorage.setItem('userId', email)
                navigate('/profile')
            }, 300)
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
                                Sign In with Money App
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>                    
                        <Grid.Column style={{maxWidth: 600}}>
                            <Segment
                                raised
                                style={{padding: '4em 4em'}}
                            >
                                <Form size="huge">
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
                                            onClick={() => setEmailError(false)}
                                        />
                                    </Form.Field> 
                                    <Form.Field style={{textAlign: 'left'}}>
                                        <label>
                                            Password
                                        </label>
                                        <Input
                                            fluid
                                            label={
                                                <Icon
                                                    name={passwordType === "password" ? "eye slash" : "eye"}
                                                    onClick={togglePassword} 
                                                    content='show'
                                                />
                                            }
                                            labelPosition="right"
                                            type={passwordType}
                                            value={password}
                                            error={passwordError}
                                            onChange={handlePasswordChange}
                                            onClick={() => setPasswordError(false)}
                                        />
                                    </Form.Field> 
                                    <Form.Field>
                                        <Button 
                                            color="green" 
                                            fluid 
                                            size="huge"
                                            loading={loading}
                                            onClick={() => signInClick()}
                                        >
                                            Sign In
                                        </Button>
                                    </Form.Field>
                                    <Form.Field>
                                        <span>
                                            <Link to={'/forgot'}>Forgot Password</Link>
                                        </span>
                                    </Form.Field> 
                                    <Form.Field>
                                        <span>
                                            Don't have an Account? &nbsp; 
                                            <Link style={{textDecorationLine: 'none'}} to={'/register'}>Register</Link>
                                        </span>
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
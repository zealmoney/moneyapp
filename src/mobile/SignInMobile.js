import { Button, Form, Grid, Header, Segment } from "semantic-ui-react"
import { AuthenticationHeader } from "../common/AuthenticationHeader"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useGetUsersQuery } from "../features/api/apiSlice"
import EmailValidator from 'email-validator'

export const SignInMobile = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verify, setVerify] = useState()
    const [loading, setLoading] = useState(false)

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const handleEmailChange = e => setEmail(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)

    const navigate = useNavigate()

    const {data: users, isSuccess} = useGetUsersQuery()
    let count_email = 0
    let count_user = 0
    let email_verify = 0
    let fname = ''
    if(isSuccess){
        const user = users.find(u => u.email === email)
        if(user){
            fname = user.fname
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
                sessionStorage.setItem('fname', fname)
                navigate('/profile')
            }, 300)
        }
    }

    return(
        <>
            <AuthenticationHeader />
            <Segment vertical style={{padding: '1em 1em'}}>
                <Grid textAlign="center">
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h2' style={{wordSpacing: '0.1em'}}>
                                Sign In with Money App
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
                                        <Form.Input 
                                            fluid
                                            icon='eye'
                                            iconPosition="right"
                                            type="password"
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
            </Segment>
        </>
    )
}
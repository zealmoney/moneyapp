import { Button, Container, Form, Grid, Header, Menu, Modal, Segment } from "semantic-ui-react"
import { useNavigate } from "react-router-dom"
import { useReducer, useState } from "react"
import { useGetUsersQuery, useUpdatePasswordMutation } from "../features/api/apiSlice"
import { TransactionNavbarMobile } from "./TransactionNavbarMobile"
import { Footer } from "../common/Footer"

const initialState = {
    open: false,
    size: undefined
}

function modalReducer(state, action){
    switch(action.type){
        case 'open':
            return {open: true, size: action.size}
        case 'close':
            return {open: false}
        default: 
            return new Error("Undefined action")
    }
}

export const ChangePasswordMobile = () => {

    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [oldPasswordError, setOldPasswordError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)

    const [state, dispatch] = useReducer(modalReducer, initialState)
    const {open, size} = state

    const [loading, setLoading] = useState(false)

    const handleOldPasswordChange = e => setOldPassword(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)
    const handleConfirmPasswordChange = e => setConfirmPassword(e.target.value)

    const [updatePassword, {isLoading}] = useUpdatePasswordMutation()
    const savePassword = [password].every(Boolean) && !isLoading

    const {data: users, isSuccess} = useGetUsersQuery()
    let userId
    let checkOldPassword
    if(isSuccess){
        let user = users.find(e => e.email === sessionStorage.getItem('userId'))
        if(user){
            userId = user.id
            checkOldPassword = user.password
        }
    }

    const navigate = useNavigate()

    const ChangePassword = async () => {
        if(oldPassword === ''){
            setOldPasswordError({content: 'Empty Fields'})
        }else if(password === ''){
            setPasswordError({content: 'Empty Fields'})
        }else if(confirmPassword === ''){
            setConfirmPasswordError({content: 'Empty Fields'})
        }else if(password !== confirmPassword){
            setConfirmPasswordError({content: 'Passwords do not match'})
        }else if(checkOldPassword !== oldPassword){
            setOldPasswordError({content: 'Wrong current password entered'})
        }else{
            if(savePassword){
                setLoading(true)
                try {
                    await updatePassword({id: userId, password})
                    setLoading(false)
                    dispatch({type: 'open', size: 'mini'})
                } catch (error) {
                    console.log('An error has occured', error)
                }
            }
        }
    }

    const btnClick = () => {
        dispatch({type: 'close'})
        navigate('/signin')
    }

    return(
        <>
            <TransactionNavbarMobile />
            <Segment vertical style={{padding: '4em 0em 12em'}}>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment style={{padding: '2em 2em'}}>
                                    <Header as='h2' content='Change Password' textAlign="center" />
                                    <Form size="large">
                                        <Form.Field>
                                            <label>Current Password</label>
                                            <Form.Input 
                                                type="password"
                                                value={oldPassword}
                                                error={oldPasswordError}
                                                onClick={() => setOldPasswordError(false)}
                                                onChange={handleOldPasswordChange}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>New Password</label>
                                            <Form.Input 
                                                type="password"
                                                value={password}
                                                error={passwordError}
                                                onClick={() => setPasswordError(false)}
                                                onChange={handlePasswordChange}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Confirm New Password</label>
                                            <Form.Input 
                                                type="password"
                                                value={confirmPassword}
                                                error={confirmPasswordError}
                                                onClick={() => setConfirmPasswordError(false)}
                                                onChange={handleConfirmPasswordChange}
                                            />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'right'}}>
                                            <Button 
                                                color="green" 
                                                size="large"
                                                loading={loading}
                                                onClick={() => ChangePassword()}
                                            >
                                                Save
                                            </Button>
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
                    <Modal.Header>
                        Password Change
                    </Modal.Header>
                    <Modal.Content>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column>
                                    <Header content='Password change successful!!' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Button
                                        color="green"
                                        size="large"
                                        onClick={() => btnClick()}
                                    >
                                        Ok
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Modal.Content>
                </Modal>
            </Segment>
            <Footer />
        </>
    )
}
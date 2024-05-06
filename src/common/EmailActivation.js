import { Button, Container, Grid, Header, Modal, Segment } from "semantic-ui-react"
import { AuthenticationHeader } from "./AuthenticationHeader"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useReducer, useState } from "react"
import { useGetUsersQuery, useValidateEmailMutation } from "../features/api/apiSlice"

const initialState = {
    open: false,
    size: undefined
}

function emailReducer(state, action){
    switch(action.type){
        case 'open': 
            return {open: true, size: action.size}
        case 'close': 
            return {open: false}
        default:
            return new Error('undefined support...')
    }
}

export const EmailActivation = () => {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const params = useParams()

    const [state, dispatch] = useReducer(emailReducer, initialState)
    const {open, size} = state

    const {data: users, isSuccess} = useGetUsersQuery()
    let verify
    let id
    if(isSuccess){
        const user = users.find((u) => u.email === params.email_id)
        if(user){
           id = user.id
           verify = 1
        }
    }

    const [verifyUser, {isLoading}] = useValidateEmailMutation()
    const verifyItem = [verify].every(Boolean) && !isLoading

    const verifyClick = async () => {
        if(verifyItem){
            try {
                setLoading(true)
                await verifyUser({id: id, verify})
                setLoading(false)
                dispatch({type: 'open', size: 'mini'})
            } catch (error) {
                console.log('An error has occured', error)  
            }
        }
    }

    const verifyComplete = () => {
        dispatch({type: 'close'})
        navigate("/signin")
    }

    return(
        <>
            <AuthenticationHeader />
            <Segment vertical style={{padding: '6em 2em'}}>
                <Container>
                    <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column style={{maxWidth: 600}}>
                                <Segment size="huge">
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Header as='h1' content='Complete Verification' />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Header 
                                                    as='h3' 
                                                    content='Please click the button below to complete the verification process'
                                                />       
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Button 
                                                    color="green"
                                                    loading={loading}
                                                    onClick={() => verifyClick()}
                                                >
                                                    Verify Now
                                                </Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>    
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
                        Verification Notice
                    </Modal.Header>
                    <Modal.Content>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column>
                                    <Header 
                                        as='h1'
                                        content='Verification Complete.'
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Button
                                        color="green"
                                        onClick={() => verifyComplete()}
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
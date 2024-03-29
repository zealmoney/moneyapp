import { Button, Container, Grid, Header, Segment } from "semantic-ui-react"
import { AuthenticationHeader } from "./AuthenticationHeader"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useGetUsersQuery, useValidateEmailMutation } from "../features/api/apiSlice"

export const EmailActivation = () => {

    const navigate = useNavigate()

    const params = useParams()

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
                await verifyUser({id: id, verify})
                alert('Success')
            } catch (error) {
                console.log('An error has occured', error)  
            }
        }
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
            </Segment>
        </>
    )
}
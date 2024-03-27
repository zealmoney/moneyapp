import { Button, Container, Grid, Header, Segment } from "semantic-ui-react"
import { AuthenticationHeader } from "./AuthenticationHeader"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useGetUsersQuery } from "../features/api/apiSlice"

export const EmailActivation = () => {

    const [id, setId] = useState()

    const navigate = useNavigate()

    const params = useParams()

    const {data: users, isSuccess} = useGetUsersQuery()
    let user
    if(isSuccess){
        user = users.find((u) => u.email === params.email_id)
        if(user){
            alert('User Exists')
        }
    }

    const verifyClick = () => {

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
                                                    Sign In Here
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
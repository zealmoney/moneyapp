import { Container, Grid, Header, Radio, Segment } from "semantic-ui-react"
import { useGetUsersQuery, useUpdateEmailCheckedMutation } from "../features/api/apiSlice"
import { useEffect, useState } from "react"
import { getRegisteredUsers } from "../client/api"
import { TransactionNavbarMobile } from "./TransactionNavbarMobile"
import { Footer } from "../common/Footer"

export const NotificationsMobile = () => {

    const [users, setUsers] = useState([])

    const [email_checked, setEmail_checked] = useState()
    const [text_checked, setText_checked] = useState()

    let email_notification
    let text_notification

    let id

    useEffect(() => {
        getUsers()
        getEmailNotification()
        getTextNotification()
    })

    const getUsers = () => {
        getRegisteredUsers().get("/")
         .then((res) => setUsers(res.data))
          .catch(console.log('An error has occured'))
    }

    const getEmailNotification = () => {
        const user = users.find(e => e.email === sessionStorage.getItem('userId'))
        if(user){
            email_notification = user.email_notification
            id = user.id
            if(email_notification === "0"){
                setEmail_checked(false)
            }else if(email_notification === "1"){
                setEmail_checked(true)
            }
        }
    }

    const getTextNotification = () => {
        const user = users.find(e => e.email === sessionStorage.getItem('userId'))
        if(user){
            text_notification = user.text_notification
            id = user.id
            if(text_notification === "0"){
                setText_checked(false)
            }else if(text_notification === "1"){
                setText_checked(true)
            }
        }
    }

    const emailChange = () => {
       if(email_notification === "0"){
        email_notification = "1"
        let item = {email_notification}
        getRegisteredUsers().patch(`/${id}/`, item)
       }else if(email_notification === "1"){
        email_notification = "0"
        let item = {email_notification}
        getRegisteredUsers().patch(`/${id}/`, item)
       }
    }

    const textChange = () => {
        if(text_notification === "0"){
         text_notification = "1"
         let item = {text_notification}
         getRegisteredUsers().patch(`/${id}/`, item)
        }else if(text_notification === "1"){
         text_notification = "0"
         let item = {text_notification}
         getRegisteredUsers().patch(`/${id}/`, item)
        }
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
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Header as='h1' content='Notifications' textAlign="center" />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Header as='h2' content='Marketing' />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header as='h4' content='Email Notification Status' />
                                            </Grid.Column>
                                            <Grid.Column width={8} textAlign="right">
                                                <Radio 
                                                    toggle
                                                    checked={email_checked}
                                                    onChange={emailChange}
                                                />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header as='h4' content='Text Messages' />
                                            </Grid.Column>
                                            <Grid.Column width={8} textAlign="right">
                                                <Radio 
                                                    toggle
                                                    checked={text_checked}
                                                    onChange={textChange}
                                                />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <span>
                                                    Msg & data rates may apply. Msg frequency is recurring. 
                                                    Reply HELP for help or STOP to cancel.
                                                </span>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
            <Footer />
        </>
    )
}
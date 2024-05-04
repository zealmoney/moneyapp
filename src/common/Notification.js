import { Container, Grid, Header, Radio, Segment } from "semantic-ui-react"
import { TransactionNavbar } from "./TransactionNavbar"
import { SideMenu } from "./SideMenu"
import { Footer } from "./Footer"
import { useGetUsersQuery, useUpdateEmailCheckedMutation } from "../features/api/apiSlice"
import { useState } from "react"

export const Notifications = () => {  

    const {data: users, isSuccess} = useGetUsersQuery()
    let userId
    let email_notify
    let email_label
    let text_notify
    let text_label
    if(isSuccess){
        let user = users.find(u => u.email === sessionStorage.getItem('userId'))
        if(user){
            userId = user.id
            email_notify = user.email_notification
            text_notify = user.text_notification
            if(email_notify){
                email_label = "YES"
            }else if(email_notify === false){
                email_label = "NO"
            }else if(text_notify){
                text_label = "YES"
            }else if(text_notify === false){
                text_label = "NO"
            }
        }
    }

    const [email_notification, setEmailChecked] = useState(email_notify)
    const [text_notification, setTextChecked] = useState(email_notify)

    const [emailLabel, setEmailLabel] = useState(email_label)
    const [textLabel, setTextLabel] = useState(text_label)

    const [changeEmail, {isLoading}] = useUpdateEmailCheckedMutation()
    const saveEmail = [email_notification, text_notification].every(Boolean) && !isLoading

    const getEmailChecked = (checked) => {
                    if(checked){
                        setEmailLabel("YES")
                        email_notify = true
                        setEmailChecked(email_notify)
                        changeEmail({id: userId, email_notification})
                    }else{
                        setEmailLabel("NO")
                        email_notify = false
                        setEmailChecked(email_notify)
                        changeEmail({id: userId, email_notification})
                    }         
    }

    const getTextChecked = (checked) => {
        if(checked){
            setTextLabel("YES")
            text_notify = true
            changeEmail({id: userId, text_notification})
        }else{
            setTextLabel("NO")
            text_notify = false
            changeEmail({id: userId, text_notification})
    }
}


    return(
        <>
            <TransactionNavbar />
            <Segment vertical style={{padding: '4em 0em'}}>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <SideMenu />
                            </Grid.Column>
                            <Grid.Column width={10}>
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
                                                    label={emailLabel}
                                                    checked={email_notification}
                                                    onChange={(e, {checked}) => {setEmailChecked(checked); getEmailChecked(checked)}}
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
                                                    label={textLabel} 
                                                    checked={text_notification} 
                                                    onChange={(e, {checked}) => {setTextChecked(checked); getTextChecked(checked)}}
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
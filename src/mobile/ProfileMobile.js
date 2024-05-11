import { Container, Divider, Grid, Header, Icon, List, Segment } from "semantic-ui-react"
import { useGetUsersQuery } from "../features/api/apiSlice"
import { Footer } from "../common/Footer"
import { TransactionNavbarMobile } from "./TransactionNavbarMobile"

export const ProfileMobile = () => {

    const {data: users, isSuccess} = useGetUsersQuery()
    let fname, lname, phone, email, dob
    if(isSuccess){
        const user = users.find(u => u.email === sessionStorage.getItem('userId'))
        if(user){
            fname = user.fname
            lname = user.lname
            phone = user.phone
            email = user.email
            dob = user.dob
        }
    }

    return(
        <>
            <TransactionNavbarMobile />
            <Segment vertical style={{padding: '1em 1em'}}>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h1' content='Personal Information' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column style={{maxWidth: 600}}>
                                <Segment>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Segment tertiary raised inverted color="green" secondary>
                                                    <Header icon as='h3'>
                                                        <Icon name="user" circular inverted color="green" />
                                                        {fname} {lname}
                                                    </Header>
                                                </Segment>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Segment tertiary raised inverted color="green" secondary>
                                                    <Header icon as='h3'>
                                                        <Icon name="phone" circular inverted color="green" />
                                                        {phone}
                                                    </Header>
                                                </Segment>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Segment tertiary raised inverted color="green" secondary>
                                                    <Header icon as='h3'>
                                                        <Icon name="mail" circular inverted color="green" />
                                                        {email}
                                                    </Header>
                                                </Segment>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Segment tertiary raised inverted color="green" secondary>
                                                    <Header icon as='h3'>
                                                        <Icon name="calendar" circular inverted color="green" />
                                                        {dob}
                                                    </Header>
                                                </Segment>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </Segment>
            <Footer />
        </>
    )
}
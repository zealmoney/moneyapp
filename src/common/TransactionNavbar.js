import { useNavigate } from "react-router-dom"
import { Container, Dropdown, Menu, Segment } from "semantic-ui-react"

export const TransactionNavbar = () => {

    const navigate = useNavigate()

    const signOut = () => {
        sessionStorage.removeItem('userId')
        navigate('/')
    }

    return(
        <>
            <Segment vertical>
                <Menu
                    size="huge"
                    secondary                    
                >
                    <Container>
                        <Menu.Item
                            as='a'
                            inverted
                            style={{fontFamily: 'AGRESSIVE', fontWeight: 'bold', fontSize: '20px'}}
                            onClick={() => navigate('/')}
                        >
                            MONEY APP
                        </Menu.Item>
                        <Menu.Item
                            as='a'
                            onClick={() => navigate('/profile')}
                        >
                            Profile
                        </Menu.Item>
                        <Menu.Item
                            as='a'
                            onClick={() => navigate('/transaction')}
                        >
                            Send Money
                        </Menu.Item>
                        <Menu.Item 
                            as='a'
                            onClick={() => navigate('/transactionhistory')}
                        >
                            Transaction History
                        </Menu.Item>
                        <Menu.Item position="right">
                            <Dropdown 
                                text={sessionStorage.getItem('userId')} 
                                fluid
                            >
                                <Dropdown.Menu>
                                    <Dropdown.Item 
                                        icon='setting' 
                                        text='Settings' 
                                        onClick={() => navigate('/settings/changepassword')}
                                    />
                                    {/*<Dropdown.Item 
                                        icon='credit card' 
                                        text='Payment Methods'
                                        onClick={() => navigate('/paymentcard')} 
                                    />*/}
                                    <Dropdown.Item icon='help circle' text='Get Help' />
                                    <Dropdown.Item 
                                        icon='sign-out' 
                                        text='Sign Out'
                                        onClick={() => signOut()}
                                    />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>
                    </Container>
                </Menu>
            </Segment>
        </>
    )
}
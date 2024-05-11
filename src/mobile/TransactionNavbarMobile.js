import { useNavigate } from "react-router-dom"
import { Container, Dropdown, DropdownMenu, Icon, Menu, Segment } from "semantic-ui-react"

export const TransactionNavbarMobile = () => {

    const navigate = useNavigate()

    const signOut = () => {
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('fname')
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
                        <Menu.Item>
                            <Dropdown 
                                text={sessionStorage.getItem('fname')}
                                inline
                            >
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        as='a'
                                        onClick={() => navigate('/profile')}
                                    >
                                        <Icon name="user" />
                                        Profile
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        as='a'
                                        onClick={() => navigate('/transaction')}
                                    >
                                        <Icon name="money" />
                                        Send Money
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        as='a'
                                        onClick={() => navigate('/transactionhistory')}
                                    >
                                        <Icon name="suitcase" />
                                        Transaction History
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Icon name="setting" />
                                        Settings
                                        <Dropdown>
                                            <Dropdown.Menu>
                                                <Dropdown.Item
                                                    as='a' 
                                                    onClick={() => navigate('/settings/changepassword')}
                                                >
                                                    Change Password
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Dropdown.Item>
                                    <Dropdown.Item icon='help circle' text='Get Help' />
                                    <Dropdown.Item 
                                        icon='sign-out' 
                                        text='Sign Out'
                                        onClick={() => signOut()}
                                    />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>
                        <Menu.Item
                            as='a'
                            inverted
                            style={{fontFamily: 'AGRESSIVE', fontWeight: 'bold', fontSize: '20px'}}
                            onClick={() => navigate('/')}
                        >
                            MONEY APP
                        </Menu.Item>
                    </Container>
                </Menu>
            </Segment>
        </>
    )
}
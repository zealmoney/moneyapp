import { useNavigate } from "react-router-dom"
import { Container, Dropdown, Icon, Menu, Segment } from "semantic-ui-react"

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
                        <Menu.Item
                            as='a'
                            inverted
                            style={{fontFamily: 'AGRESSIVE', fontWeight: 'bold', fontSize: '20px'}}
                            onClick={() => navigate('/')}
                        >
                            MONEY APP
                        </Menu.Item>
                        {/*<Menu.Item
                            as='a'
                            onClick={() => navigate('/profile')}
                        >
                            Profile
                        </Menu.Item>*/}
                        {/*<Menu.Item
                            as='a'
                            onClick={() => navigate('/transaction')}
                        >
                            Send Money
                        </Menu.Item>*/}
                        {/*<Menu.Item 
                            as='a'
                            onClick={() => navigate('/transactionhistory')}
                        >
                            Transaction History
                        </Menu.Item>*/}
                        <Menu.Item>
                            <Dropdown 
                                text={sessionStorage.getItem('fname')} 
                                fluid
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
                                    <Dropdown.Item icon='setting' text='Settings' />
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
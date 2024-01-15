import { useNavigate } from "react-router-dom"
import { Container, Dropdown, Menu, Segment } from "semantic-ui-react"

export const TransactionNavbar = () => {

    const navigate = useNavigate()

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
                        <Menu.Item active>
                            Send Money
                        </Menu.Item>
                        <Menu.Item>
                            Transfer History
                        </Menu.Item>
                        <Menu.Item position="right">
                            <Dropdown text="John Doe" fluid>
                                <Dropdown.Menu>
                                    <Dropdown.Item icon='setting' text='Settings' />
                                    <Dropdown.Item icon='help circle' text='Get Help' />
                                    <Dropdown.Item icon='sign-out' text='Sign Out' />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>
                    </Container>
                </Menu>
            </Segment>
        </>
    )
}
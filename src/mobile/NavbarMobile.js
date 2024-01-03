import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Container, Icon, Menu, Segment, Sidebar } from "semantic-ui-react"

export const NavbarMobile = () => {
    const [sidebarOpened, setSidebarOpened] = useState()
    const navigate = useNavigate()
    return(
        <>
            {/*
            <Sidebar
                visible={sidebarOpened}
                as={Menu}
                animation="overlay"
                inverted
                vertical
                style={{
                    backgroundColor: 'teal',
                    maxHeight: 400
                }}
                onHide={() => setSidebarOpened(false)}
            >
                <Menu.Item as='a'>
                    <span><Icon name="sign in alternate" />Login</span>
                </Menu.Item>
                <Menu.Item as='a'>
                    <span><Icon name="signup" />Register</span>
                </Menu.Item>
            </Sidebar>
            */
            }
            <Sidebar.Pusher>
                <Segment vertical>
                    <Menu size="small" secondary>
                        <Container>
                            <Menu.Item style={{fontFamily: 'AGRESSIVE', fontWeight: 'bold', fontSize: '12px'}}>
                                MONEY APP
                            </Menu.Item>
                            {/*<Menu.Item style={{color: '#fff'}} position="right" onClick={() => setSidebarOpened(true)}>
                                <Icon size="big" name="sidebar" />
                            </Menu.Item>*/}
                            <Menu.Item position='right'>
                                <Button size='mini' circular color='green'>
                                    <Icon name='sign in alternate' />
                                    Sign In
                                </Button>
                                &nbsp; &nbsp;
                                <Button size='mini' circular color='green'>
                                    <Icon name="signup" />
                                    Register
                                </Button> 
                            </Menu.Item>
                        </Container>
                    </Menu>
                </Segment>
            </Sidebar.Pusher>
        </>
    )
}
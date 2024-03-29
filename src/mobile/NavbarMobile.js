import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Container, Icon, Menu, Segment, Sidebar } from "semantic-ui-react"

export const NavbarMobile = () => {
    const [sidebarOpened, setSidebarOpened] = useState()
    const navigate = useNavigate()
    return(
        <>
                    <Menu 
                        size="large" 
                        secondary 
                        fixed="top"
                        style={{minHeight: 60, backgroundColor: '#fff'}}
                    >
                            <Menu.Item style={{fontFamily: 'AGRESSIVE', fontWeight: 'bold', fontSize: '14px'}}>
                                MONEY APP
                            </Menu.Item>
                            {/*<Menu.Item style={{color: '#fff'}} position="right" onClick={() => setSidebarOpened(true)}>
                                <Icon size="big" name="sidebar" />
                            </Menu.Item>*/}
                            <Menu.Item position='right'>
                                <Button 
                                    size='mini' 
                                    circular 
                                    color='green'
                                    onClick={() => navigate('/signin')}
                                >
                                    Sign In
                                </Button>
                                &nbsp; &nbsp;
                                <Button 
                                    size='mini' 
                                    circular 
                                    color='green'
                                    onClick={() => navigate('/register')}
                                >
                                    Sign Up
                                </Button> 
                            </Menu.Item>
                    </Menu>
        </>
    )
}
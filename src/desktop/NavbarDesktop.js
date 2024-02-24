import 'semantic-ui-css/semantic.min.css'
import '../AGRESSIVE.otf'
import { Button, Container, Dropdown, Header, Icon, Menu, Segment } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

export const NavbarDesktop = () => {

    const navigate = useNavigate()

    const signOut = () => {
        sessionStorage.removeItem('userId')
        navigate('/')
    }


    if(sessionStorage.getItem('userId') === null){
        return(
            <Segment vertical secondary>
                <Menu 
                    size='huge'
                    secondary
                    fixed='top'
                    style={{minHeight: 80, backgroundColor: '#fff'}}
                    
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
                        <Menu.Item position='right'>
                            <Button 
                                size='mini' 
                                circular color='green'
                                onClick={() => navigate('/signin')}
                            >
                                <Icon name='sign in alternate' />
                                Sign In
                            </Button> 
                        </Menu.Item>
                        <Menu.Item>
                            <Button 
                                size='mini' 
                                circular 
                                color='green'
                                onClick={() => navigate('/register')}
                            >
                                <Icon name="signup" />
                                Register
                            </Button> 
                        </Menu.Item>
                    </Container>
                </Menu>
            </Segment>
        )
    }else{
        return(
            <Segment vertical secondary>
                <Menu 
                    size='huge'
                    secondary
                    fixed='top'
                    style={{minHeight: 80, backgroundColor: '#fff'}}
                    
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
                            position='right'
                            as='a'
                            onClick={() => navigate('/profile')}
                        >
                            Profile
                        </Menu.Item>
                        <Menu.Item>
                            <Dropdown 
                                text={sessionStorage.getItem('userId')} 
                                fluid
                            >
                                <Dropdown.Menu>
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
        )
    }
}

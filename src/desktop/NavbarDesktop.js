import 'semantic-ui-css/semantic.min.css'
import '../AGRESSIVE.otf'
import { Button, Container, Header, Icon, Menu, Segment } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

export const NavbarDesktop = () => {

    const navigate = useNavigate()

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
                        <Button size='mini' circular color='green'>
                            <Icon name="signup" />
                            Register
                        </Button> 
                    </Menu.Item>
                </Container>
            </Menu>
        </Segment>
    )
}

import { useNavigate } from "react-router-dom"
import { Header, Menu } from "semantic-ui-react"

export const SideMenu = () => {

    const navigate = useNavigate()

    return(
        <>
            <Header as="h1" content='Settings' />
            <Menu vertical size="massive" secondary>
                <Menu.Item
                    name="Change Password"
                    onClick={() => navigate('/settings/changepassword')}
                />
                <Menu.Item 
                    name="Notifications"
                    onClick={() => navigate('/profile')}
                />
                <Menu.Item 
                    name="Recepients"
                    onClick={() => navigate('/settings/recepients')}
                />
                <Menu.Item 
                    name="Payment Methods"
                    onClick={() => navigate('/settings/paymentcard')}
                />
                <Menu.Item 
                    name="Privacy Policy"
                    onClick={() => navigate('/settings/policy')}
                />
                <Menu.Item 
                    name="User Agreement"
                    onClick={() => navigate('/paymentcard')}
                />
            </Menu>
        </>
    )
}
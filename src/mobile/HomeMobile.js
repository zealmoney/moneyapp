import { Sidebar } from "semantic-ui-react"
import { NavbarMobile } from "./NavbarMobile"
import { Footer } from "../common/Footer"

export const HomeMobile = () => {
    return(
        <>
            <Sidebar.Pushable>
                <NavbarMobile />
                <br/><br/><br/><br/>
                <Footer />
            </Sidebar.Pushable>
        </>
    )
}
import { Sidebar } from "semantic-ui-react"
import { NavbarMobile } from "./NavbarMobile"

export const HomeMobile = () => {
    return(
        <>
            <Sidebar.Pushable>
                <NavbarMobile />
            </Sidebar.Pushable>
        </>
    )
}
import { Sidebar } from "semantic-ui-react"
import { NavbarMobile } from "./NavbarMobile"
import { Footer } from "../common/Footer"
import { HeadingPageMobile } from "./HeadingPageMobile"

export const HomeMobile = () => {
    return(
        <>
            <NavbarMobile />
            <HeadingPageMobile />
            <Footer />
        </>
    )
}
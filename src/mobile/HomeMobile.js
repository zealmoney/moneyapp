import { Sidebar } from "semantic-ui-react"
import { NavbarMobile } from "./NavbarMobile"
import { Footer } from "../common/Footer"
import { HeadingPageMobile } from "./HeadingPageMobile"
import { FindOutMobile } from "./FindOutMobile"
import { CustomersMobile } from "./CustomersMobile"

export const HomeMobile = () => {
    return(
        <>
            <NavbarMobile />
            <HeadingPageMobile />
            <FindOutMobile />
            <CustomersMobile />
            <Footer />
        </>
    )
}
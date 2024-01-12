import { Sidebar } from "semantic-ui-react"
import { NavbarMobile } from "./NavbarMobile"
import { Footer } from "../common/Footer"
import { HeadingPageMobile } from "./HeadingPageMobile"
import { FindOutMobile } from "./FindOutMobile"
import { CustomersMobile } from "./CustomersMobile"
import { CashPayoutMobile } from "./CashPayoutMobile"

export const HomeMobile = () => {
    return(
        <>
            <NavbarMobile />
            <HeadingPageMobile />
            <FindOutMobile />
            <CashPayoutMobile />
            <CustomersMobile />
            <Footer />
        </>
    )
}
import { Sidebar } from "semantic-ui-react"
import { NavbarMobile } from "./NavbarMobile"
import { Footer } from "../common/Footer"
import { HeadingPageMobile } from "./HeadingPageMobile"
import { CustomersMobile } from "./CustomersMobile"
import { CashPayoutMobile } from "./CashPayoutMobile"
import { FindOut } from "../common/FindOut"

export const HomeMobile = () => {
    return(
        <>
            <NavbarMobile />
            <HeadingPageMobile />
            <FindOut />
            <CashPayoutMobile />
            <CustomersMobile />
            <Footer />
        </>
    )
}
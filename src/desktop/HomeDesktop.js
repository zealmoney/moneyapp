import { FindOut } from "../common/FindOut"
import { Footer } from "../common/Footer"
import { HeadingPage } from "../common/HeadingPage"
import { NavbarDesktop } from "./NavbarDesktop"

export const HomeDesktop = () => {
    return(
        <>
            <NavbarDesktop />
            <HeadingPage />
            <FindOut />
            <Footer />
        </>
    )
}
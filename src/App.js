import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createMedia } from "@artsy/fresnel";
import { HomeDesktop } from "./desktop/HomeDesktop";
import { HomeMobile } from "./mobile/HomeMobile";
import { SignIn } from "./common/SignIn";
import { SignInMobile } from "./mobile/SignInMobile";
import { Register } from "./common/Register";
import { RegisterMobile } from "./mobile/RegisterMobile";

const { MediaContextProvider, Media} = createMedia({
  breakpoints: {
    mobile: 0, 
    tablet: 768,
    desktop: 1024
  }
})

function App() {
  return (
    <MediaContextProvider>
      <Media at="mobile">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomeMobile />} />
            <Route path="/signin" element={<SignInMobile />} />
            <Route path="/register" element={<RegisterMobile />} />
          </Routes>
        </BrowserRouter>
      </Media>
      <Media greaterThan="mobile">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomeDesktop />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Media>
    </MediaContextProvider>
  );
}

export default App;

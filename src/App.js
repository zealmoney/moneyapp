import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createMedia } from "@artsy/fresnel";
import { HomeDesktop } from "./desktop/HomeDesktop";
import { HomeMobile } from "./mobile/HomeMobile";

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
            <Route index element={<HomeDesktop />} />
          </Routes>
        </BrowserRouter>
      </Media>
      <Media greaterThan="mobile">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomeDesktop />} />
          </Routes>
        </BrowserRouter>
      </Media>
    </MediaContextProvider>
  );
}

export default App;

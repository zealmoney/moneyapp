import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createMedia } from "@artsy/fresnel";
import { HomeDesktop } from "./desktop/HomeDesktop";
import { HomeMobile } from "./mobile/HomeMobile";
import { SignIn } from "./common/SignIn";
import { SignInMobile } from "./mobile/SignInMobile";
import { Register } from "./common/Register";
import { RegisterMobile } from "./mobile/RegisterMobile";
import { ForgotPassword } from "./common/ForgotPassword";
import { ForgotPasswordMobile } from "./mobile/ForgotPasswordMobile";
import { TransactionComponent } from "./common/TransactionComponent";
import { DeliveryMethod } from "./common/DeliveryMethod";
import { Profile } from "./common/Profile";
import { TransactionHistory } from "./common/TransactionHistory";
import { AccountInfo } from "./common/AccountInfo";
import { RecepientsInfo } from "./common/RecepientsInfo";
import { TransactionSummary } from "./common/TransactionSummary";
import { Payment } from "./common/Payment";
import { ProfileMobile } from "./mobile/ProfileMobile";
import { TransactionComponentMobile } from "./mobile/TransactionComponentMobile";

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
            <Route path="/forgot" element={<ForgotPasswordMobile />} />
            <Route path="/profile" element={<ProfileMobile />} />
            <Route path="/transaction" element={<TransactionComponentMobile />} />
          </Routes>
        </BrowserRouter>
      </Media>
      <Media greaterThan="mobile">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomeDesktop />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/transaction" element={<TransactionComponent />} />
            <Route path="/delivery" element={<DeliveryMethod />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/transactionhistory" element={<TransactionHistory />} />
            <Route path="/accountinfo" element={<AccountInfo />} />
            <Route path="/recepientsinfo" element={<RecepientsInfo />} />
            <Route path="/transactionsummary" element={<TransactionSummary />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </BrowserRouter>
      </Media>
    </MediaContextProvider>
  );
}

export default App;

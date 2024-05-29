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
import { PaymentMethod } from "./common/PaymentMethod";
import { ProfileMobile } from "./mobile/ProfileMobile";
import { TransactionComponentMobile } from "./mobile/TransactionComponentMobile";
import { DeliveryMethodMobile } from "./mobile/DeliveryMethodMobile";
import { AccountInfoMobile } from "./mobile/AccountInfoMobile";
import { RecepientsInfoMobile } from "./mobile/RecepientsInfoMobile";
import { PaymentMobile } from "./mobile/PaymentMobile";
import { TransactionSummaryMobile } from "./mobile/TransactionSummaryMobile";
import { TransactionHistoryMobile } from "./mobile/TransactionHistoryMobile";
import { Contact } from "./common/Contact";
import { EmailActivation } from "./common/EmailActivation";
import { PaymentCard } from "./common/PaymentCard";
import { ChangePassword } from "./common/ChangePassword";
import { Recepients } from "./common/Recepients";
import { PrivacyPolicy } from "./common/PrivacyPolicy";
import { Notifications } from "./common/Notification";
import { ChangePasswordMobile } from "./mobile/ChangePasswordMobile";
import { NotificationsMobile } from "./mobile/NotificationMobile";
import { RecepientsMobile } from "./mobile/RecepientsMobile";
import { PaymentCardMobile } from "./mobile/PaymentCardMobile";
import { PrivacyPolicyMobile } from "./mobile/PrivacyPolicyMobile";
import { About } from "./common/About";
import { Privacy } from "./common/Privacy";

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
            <Route path="/delivery" element={<DeliveryMethodMobile />} />
            <Route path="/accountinfo" element={<AccountInfoMobile />} />
            <Route path="/recepientsinfo" element={<RecepientsInfoMobile />} />
            <Route path="/payment" element={<PaymentMobile />} />
            <Route path="/transactionsummary" element={<TransactionSummaryMobile />} />
            <Route path="/transactionhistory" element={<TransactionHistoryMobile />} />
            <Route path="/settings/changepassword" element={<ChangePasswordMobile />} />
            <Route path="/settings/notifications" element={<NotificationsMobile />} />
            <Route path="/settings/recepients" element={<RecepientsMobile />} />
            <Route path="/settings/paymentcard" element={<PaymentCardMobile />} />
            <Route path="/settings/policy" element={<PrivacyPolicyMobile />} />
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
            <Route path="/payment" element={<PaymentMethod />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/verify/:email_id" element={<EmailActivation />} />
            <Route path="/settings/paymentcard" element={<PaymentCard />} />
            <Route path="/settings/changepassword" element={<ChangePassword />} />
            <Route path="/settings/recepients" element={<Recepients />} />
            <Route path="/settings/policy" element={<PrivacyPolicy />} />
            <Route path="/settings/notifications" element={<Notifications />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </BrowserRouter>
      </Media>
    </MediaContextProvider>
  );
}

export default App;

import Header from "../components/common/Header";
import Signup from "./SignupPage"
import LoginPage from "../pages/LoginPage"

function HomePage() {
  return (
    <div>
      <Header />
      <Signup />
      <LoginPage />
    </div>
  )
}

export default HomePage;
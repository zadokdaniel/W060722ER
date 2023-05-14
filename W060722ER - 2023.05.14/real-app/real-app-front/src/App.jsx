import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import SignOut from "./components/signout";
import SignUpBiz from "./components/signupBiz";
import MyCards from "./components/myCards";
import ProtectedRoute from "./components/common/protectedRoute";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="sign-up-biz"
            element={<SignUpBiz redirect="/my-cards" />}
          />
          <Route path="sign-up" element={<SignUp redirect="/sign-in" />} />
          <Route path="sign-in" element={<SignIn redirect="/" />} />
          <Route path="sign-out" element={<SignOut redirect="/" />} />
          <Route
            path="my-cards"
            element={
              <ProtectedRoute onlyBiz>
                <MyCards />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/signup";

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
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

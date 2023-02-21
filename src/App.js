import { Home } from "pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "styles/common.css";
import { Header } from "components/header";
import { Navbar } from "components/navbar";
import { Body } from "components/body";
import { Footer } from "components/footer";

function App() {
    return (
        <Router>
            <Header />
            <Navbar />
            <Body>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </Body>
            <Footer />
        </Router>
    );
}

export default App;

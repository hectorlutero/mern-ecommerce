import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import CartScreen from "./screens/CartScreen.js";
import LoginScreen from "./screens/LoginScreen.js";

const App = () => {
  return (
    <Router className="App">
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart">
              <Route path=":id" element={<CartScreen />} />
              <Route path="" element={<CartScreen />} />
            </Route>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

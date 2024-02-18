import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from "./pages/Home/HomePage"
import ProductPage from "./pages/ProductPage.js/ProductPage"
import ProductPageSingle from './pages/ProductPageSingle/ProductPageSingle';

// Components
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="pages">
          <Header/>
            <Routes>
              <Route
                path=""
                element={<Home/>}
              />
              <Route
                path="/product"
                element={<ProductPage/>}
              />
              <Route
                path='/product/:id'
                element={<ProductPageSingle/>}
              />
              <Route
                path="/about"
                element={<AboutPage/>}
              />
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
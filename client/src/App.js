import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from "./pages/Home/Home"

// Components
import Header from './components/Header/Header';

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
                path="/login"
                element={<Home/>}
              />
              <Route
                path="signup"
                element={<Home/>}
              />
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
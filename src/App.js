
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextUtils from './components/TextUtils';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import UseEffect from './components/UseEffect';

function App() {
  return (
    <>  <Router>
      <Navbar title="TextUtil App"></Navbar>
      <div className='container my-3'>

        {/* <AboutUs ></AboutUs> 
        <TextUtils ></TextUtils> */}
        <Routes>
          <Route
            exact
            path="/"
            element={<AboutUs />}
          ></Route>
           <Route
            exact  
            path="/AboutUs"
            element={<AboutUs />}
          ></Route>
          <Route
            exact
            path="/TextUtils"
            element={<TextUtils />}
          ></Route>
              <Route
            exact
            path="/UseEffect"
            element={<UseEffect />}
          ></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

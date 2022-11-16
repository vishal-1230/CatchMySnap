import {Route, Routes} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import LoginSignup from './components/LoginSignup/LoginSignup';
import InstaSearch from './components/Search/InstaSearch/InstaSearch';
import {Search} from './components/Search/Search.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/insta' element={<InstaSearch />} />
      </Routes>
      {/* <Routes> */}
        {/* <Route path="/" exact element={<Main />} /> */}
        {/* <Route path="/search" exact element={<Search />} /> */}
        {/* <Route path="/checkout" exact element={<Mytrip />} /> */}
        {/* <Route path="/final" exact element={<Final />} /> */}
        {/* <Route path="/payment" exact element={<Payment />} /> */}
        {/* <Route path="/checkout" exact element={<Mytrip />} /> */}
    </div>
  );
}

export default App;
import {Route, Routes} from 'react-router-dom'
import {Main} from './components/Homepage/Main'
import {Search} from './components/Search/Search.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/search' element={<Search />} />
      </Routes>
      {/* <Routes> */}
        {/* <Route path="/" exact element={<Main />} /> */}
        {/* <Route path="/search" exact element={<Search />} /> */}
        {/* <Route path="/checkout" exact element={<Mytrip />} /> */}
        {/* <Route path="/final" exact element={<Final />} /> */}
        {/* <Route path="/payment" exact element={<Payment />} /> */}
        {/* <Route path="/checkout" exact element={<Mytrip />} /> */}
      </Routes>
    </div>
  );
}

export default App;
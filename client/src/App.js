import {Route, Routes} from 'react-router-dom'
import {Main} from './components/Homepage/Main'

function App() {
  return (
    <div className="App">
      <Main />
      {/* <Routes> */}
        {/* <Route path="/" exact element={<Main />} /> */}
        {/* <Route path="/search" exact element={<Search />} /> */}
        {/* <Route path="/checkout" exact element={<Mytrip />} /> */}
        {/* <Route path="/final" exact element={<Final />} /> */}
        {/* <Route path="/payment" exact element={<Payment />} /> */}
        {/* <Route path="/checkout" exact element={<Mytrip />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;

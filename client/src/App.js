import Home from './components/Home';
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

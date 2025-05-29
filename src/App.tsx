import "primeicons/primeicons.css";
import './styles/global.css';

import Paths from "./routes/Paths"
import { Providers } from "./contexts";

function App() {

  return (
    <>
      <Providers>
        <Paths />
      </Providers>
    </>
  )
}

export default App

import { Pages } from "./components/Main";
import GlobalState from "./providers/GlobalState";

function App() {
  return (
    <GlobalState>
      <Pages/>
    </GlobalState>
  )
}

export default App;

import { Main } from '../components/Main/index.js'
import GlobalState from '../Providers/GlobalState.js'
import '../styles/global.scss'


function MyApp() {
  return <>
    <GlobalState>
      <Main/>
    </GlobalState>
  </>
}

export default MyApp

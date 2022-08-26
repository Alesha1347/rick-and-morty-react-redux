import {Header} from './pages/Header'
import {Main} from './pages/Main'
import {Footer} from './pages/Footer'

import {ContextProvider} from './store/context'

function App() {
  return (
    <>
      <Header/>
        <ContextProvider>
          <Main/>
        </ContextProvider>
      <Footer/>
    </>
  );
}

export default App;

import {Header} from './pages/Header'
import {Main} from './pages/Main'
import {Footer} from './pages/Footer'

import {ContextProvider} from './store/context'

function App() {
  return (
    <div className='wrapper'>
      <Header/>
        <ContextProvider>
          <Main/>
        </ContextProvider>
      <Footer/>
    </div>
  );
}

export default App;

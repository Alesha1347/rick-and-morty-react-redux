import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import {Header} from './pages/Header'
import {Main} from './pages/Main'
import {Footer} from './pages/Footer'
import { Favourites } from './pages/Favourites'
import { CharacterPage } from './pages/CharacterPage'


function App() {
  return (
    <Router>
    <div className='wrapper'>
        <Header/>
          <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/favourites' element={<Favourites/>}/>
          <Route path='/character/:id' element={<CharacterPage/>}/>
          </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;

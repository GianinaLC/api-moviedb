import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home/Homepage';
import Notfoundpage from './pages/404/Notfoundpage';
import Navbar from './components/containers/Navbar';
import MovieDetailContainer from './components/containers/MovieDetailContainer';

function App() {

    return (
        <>
            <Navbar />
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Homepage />} />
                        <Route path='/detail/:id' element={<MovieDetailContainer />} />
                        <Route path='*' element={<Notfoundpage />} />
                    </Routes>
                </Router>
        </>
  )
}

export default App

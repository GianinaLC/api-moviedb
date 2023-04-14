import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import MovieDetail from './components/containers/MovieDetail';
import Homepage from './pages/home/Homepage';
import { ContextProvider } from './context/Context';
import Notfoundpage from './pages/404/Notfoundpage';
import Navbar from './components/containers/Navbar';
import MovieDetailContainer from './components/containers/MovieDetailContainer';

function App() {

    return (
        <>
            <Navbar />
            <ContextProvider>
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Homepage />} />
                        <Route path='/detail/:id' element={<MovieDetailContainer />} />
                        <Route path='*' element={<Notfoundpage />} />
                    </Routes>
                </Router>
            </ContextProvider>
        </>
  )
}

export default App

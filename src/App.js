import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Booking from './pages/Booking';
import {Route, Routes } from 'react-router-dom';
import BookingListPage from './pages/BookingListPage';

function App() {
  return (
    <>
        <Routes>
          <Route element={<Navbar />}>
            <Route path='/' element={<BookingListPage />}></Route>
            <Route path='/booking/:id' element={<Booking />}></Route>
          </Route>
        </Routes>

    </>
  );
}

export default App;

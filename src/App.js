import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Booking from './pages/Booking';
import { Route, Routes } from 'react-router-dom';
import BookingListPage from './pages/BookingListPage';
import Form from './pages/Form';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import 'devextreme/dist/css/dx.light.css';
import './dx-styles.css'

const theme = createTheme({
  typography: {
    fontSize: 12.5,
    fontFamily: [
      "Poppins",
      "Roboto",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Seogoe UI Symbol",
    ].join(','),
  },
})


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Navbar />}>
            <Route path='/' element={<BookingListPage />}></Route>
            <Route path='/form' element={<Form />}></Route>
            <Route path='/booking/:id' element={<Booking />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

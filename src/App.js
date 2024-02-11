import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Form from './pages/Form';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import 'devextreme/dist/css/dx.light.css';
import './dx-styles.css'
import Demo from './pages/Demo';

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
            <Route path='/' element={<Form />}></Route>
            <Route path='/demo' element={<Demo />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

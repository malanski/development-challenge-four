import './App.scss';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './components/responsive';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

// import { PatientRegister } from './components/PatientRegister';



// Navigation
import { Home } from './pages/home'
import { Register } from './pages/register'
import { ViewPatients } from './pages/viewPatients'
import { EditPatient } from './pages/editPatient';

function App() {
  return (

    <div className="App">
      <HashRouter>
        <ThemeProvider theme={theme}>
          <Header component={ Header } exact />

          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/viewPatients' element={<ViewPatients />} />
              <Route path='/editPatient' element={<EditPatient />} />
            </Routes>
          </main>


          <Footer component={Footer} exact />
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;

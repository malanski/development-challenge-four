import './App.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { PatientRegister } from './components/PatientRegister';
import { ThemeProvider } from '@mui/material';
import { theme } from './components/responsive';

function App() {
  return (
    
    <div className="App">
    <ThemeProvider theme={theme}>
    <Header component={Header} exact />
      <PatientRegister component={PatientRegister} exact />
      <Footer component={Footer} exact />
    </ThemeProvider>
      

    </div>
  );
}

export default App;

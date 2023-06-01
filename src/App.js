import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import { MainNavigation } from './components/MainNavigation';
import Footer from './components/Footer';
import { AuthWrapper } from './context/auth.context';



function App() {
   return (
    <>

     
      <BrowserRouter>
        <AuthWrapper>
        <ToastContainer/>
          <Header/>
          <main>
            <MainNavigation/>
          </main>
          <Footer/>
          </AuthWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;

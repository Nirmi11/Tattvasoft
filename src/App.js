import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthWrapper } from './context/auth.context';
import Header from './components/Header';
import { MainNavigation } from './components/MainNavigation';
import Footer from './components/Footer';



function App() {
  return (
    <>

      <ToastContainer />
      <BrowserRouter>
        <AuthWrapper>
          <Header />
          <main>
            <MainNavigation />
          </main>
          <Footer />
        </AuthWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;

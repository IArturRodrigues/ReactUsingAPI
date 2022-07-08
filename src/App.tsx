import Banner from '@components/Banner';
import Footer from '@components/Footer';
import NavBar from '@components/NavBar';
import { BrowserRouter } from 'react-router-dom';

import Router from './App.routes';

function App () {
   return (
      <BrowserRouter>
         <NavBar />
         <Banner />
         <Router />
         <Footer />
      </BrowserRouter>
   );
}

export default App;

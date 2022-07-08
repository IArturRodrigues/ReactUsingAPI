import { Outlet } from 'react-router-dom';

import Banner from '@components/Banner';
import Footer from '@components/Footer';
import NavBar from '@components/NavBar';

function Default (): JSX.Element {
   return (
      <>
         <NavBar />
         <Banner />
         <Outlet />
         <Footer />
      </>
   );
}

export default Default;

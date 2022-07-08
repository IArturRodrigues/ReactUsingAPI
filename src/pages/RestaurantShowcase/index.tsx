import NavBar from '@components/NavBar';
import Banner from '@components/Banner';
import RestaurantList from '@components/RestaurantsList';
import Footer from '@components/Footer';

function RestaurantShowcase (): JSX.Element {
   return (
      <>
         <NavBar />
         <Banner/>
         <RestaurantList />
         <Footer />
      </>
   );
}

export default RestaurantShowcase;

import RestaurantList from '@components/RestaurantsList';
import { Home } from '@pages';
import { Routes, Route } from 'react-router-dom';

function Router (): JSX.Element {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/restaurantes' element={<RestaurantList />} />
      </Routes>
   );
}

export default Router;

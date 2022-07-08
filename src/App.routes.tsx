import RestaurantList from '@components/RestaurantsList';
import { AdminFormRestaurant, AdminRestaurant, Home } from '@pages';
import { Routes, Route } from 'react-router-dom';

function Router (): JSX.Element {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/restaurantes' element={<RestaurantList />} />
         <Route path='/admin' >
            <Route path='restaurantes' element={<AdminRestaurant />} />
            <Route path='restaurantes/novo' element={<AdminFormRestaurant />} />
            <Route path='restaurantes/:id' element={<AdminFormRestaurant />} />
         </Route>
      </Routes>
   );
}

export default Router;

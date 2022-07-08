import { Routes, Route } from 'react-router-dom';

import { AdminBasePage, AdminFood, AdminFormFood, AdminFormRestaurant, AdminRestaurant, Default, Home } from '@pages';

import RestaurantList from '@components/RestaurantsList';

function Router (): JSX.Element {
   return (
      <Routes>
         <Route path='/' element={<Default />}>
            <Route index element={<Home />} />
            <Route path='/restaurantes' element={<RestaurantList />} />
         </Route>
         <Route path='/admin' element={<AdminBasePage />}>
            <Route path='restaurantes' element={<AdminRestaurant />} />
            <Route path='restaurantes/novo' element={<AdminFormRestaurant />} />
            <Route path='restaurantes/:id' element={<AdminFormRestaurant />} />
            <Route path='pratos' element={<AdminFood />} />
            <Route path='pratos/novo' element={<AdminFormFood />} />
            <Route path='pratos/:id' element={<AdminFormFood />} />
         </Route>
      </Routes>
   );
}

export default Router;

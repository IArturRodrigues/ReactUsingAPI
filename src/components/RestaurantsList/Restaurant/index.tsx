import { useEffect, useState } from 'react';

import http from '@http';

import { IFood, IRestaurant } from '@interfaces/IRestaurant';

import Food from '../Food';

import { Restaurant as SRestaurant } from './Restaurant';

interface RestaurantProps {
   children?: React.ReactNode;
   restaurant: IRestaurant;
}

function Restaurant ({ restaurant }: RestaurantProps): JSX.Element {
   const [foods, setFoods] = useState<IFood[]>();

   useEffect(() => {
      const fetchData = async () => {
         const response = await http.get<IFood[]>(`v1/restaurantes/${restaurant.id}/pratos/`);
         setFoods(response.data);
      };
      fetchData();
   }, [restaurant.id]);

   return (
      <SRestaurant>
         <SRestaurant.Title>
            <h2>{restaurant.nome}</h2>
         </SRestaurant.Title>
         <div>
            {foods?.map(food => <Food food={food} key={food.id} />)}
         </div>
      </SRestaurant>
   );
}

export default Restaurant;

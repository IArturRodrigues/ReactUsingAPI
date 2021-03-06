import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import http from '@http';

import { IRestaurant } from '@interfaces/IRestaurant';

function AdminRestaurant (): JSX.Element {
   const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await http.get<IRestaurant[]>('v2/restaurantes/');
            setRestaurants(response.data);
         } catch (err) {
            console.error(err);
         }
      };
      fetchData();
   }, []);

   async function deleteRestaurant (restaurantId: number) {
      await http.delete(`v2/${restaurantId}/`);
      const newRestaurantList = restaurants.filter(restaurant => restaurant.id !== restaurantId);
      setRestaurants([...newRestaurantList]);
      // setRestaurants(newRestaurantList);
   }

   return (
      <TableContainer component={Paper} >
         <Table>
            <TableHead>
               <TableRow>
                  <TableCell>
                     Nome
                  </TableCell>
                  <TableCell>
                     Editar
                  </TableCell>
                  <TableCell>
                     Excluir
                  </TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {restaurants.map(restaurant => (
                  <TableRow key={restaurant.id}>
                     <TableCell>
                        {restaurant.nome}
                     </TableCell>
                     <TableCell>
                        [ <Link to={`/admin/restaurantes/${restaurant.id}`}> editar </Link> ]
                     </TableCell>
                     <TableCell>
                        <Button
                           variant="outlined"
                           color="error"
                           onClick={() => deleteRestaurant(restaurant.id)}
                        >
                           EXCLUIR
                        </Button>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}

export default AdminRestaurant;

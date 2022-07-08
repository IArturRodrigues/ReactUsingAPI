import { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

import { IRestaurant } from '@interfaces/IRestaurant';

function AdminRestaurant (): JSX.Element {
   const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get<IRestaurant[]>('http://localhost:8000/api/v2/restaurantes/');
            setRestaurants(response.data);
         } catch (err) {
            console.error(err);
         }
      };
      fetchData();
   }, []);

   return (
      <TableContainer component={Paper} >
         <Table>
            <TableHead>
               <TableRow>
                  <TableCell>
                     Nome
                  </TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {restaurants.map(restaurant => (
                  <TableRow key={restaurant.id}>
                     <TableCell>
                        {restaurant.nome}
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}

export default AdminRestaurant;

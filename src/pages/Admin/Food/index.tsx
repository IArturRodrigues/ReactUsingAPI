import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import http from '@http';

import { IFood } from '@interfaces/IRestaurant';

function AdminFood (): JSX.Element {
   const [foods, setFoods] = useState<IFood[]>([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await http.get<IFood[]>('v2/pratos/');
            setFoods(response.data);
         } catch (err) {
            console.error(err);
         }
      };
      fetchData();
   }, []);

   async function deleteFood (foodId: number) {
      await http.delete(`v2/${foodId}/`);
      const newFoodList = foods.filter(food => food.id !== foodId);
      setFoods([...newFoodList]);
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
                     Tag
                  </TableCell>
                  <TableCell>
                     Imagem
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
               {foods.map(food => (
                  <TableRow key={food.id}>
                     <TableCell>
                        {food.nome}
                     </TableCell>
                     <TableCell>
                        [ <a href={food.imagem} target="_blank" rel="noreferrer">ver imagem</a> ]
                     </TableCell>
                     <TableCell>
                        [ <Link to={`/admin/pratos/${food.id}`}> editar </Link> ]
                     </TableCell>
                     <TableCell>
                        <Button
                           variant="outlined"
                           color="error"
                           onClick={() => deleteFood(food.id)}
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

export default AdminFood;

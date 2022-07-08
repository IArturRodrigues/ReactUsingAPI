import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';

import http from '@http';

import { IRestaurant } from '@interfaces/IRestaurant';

function FormRestaurant (): JSX.Element {
   const [restaurantName, setRestaurantName] = useState('');
   const params = useParams();

   useEffect(() => {
      const getRestaurant = async () => {
         if (params.id) {
            const response = await http.get<IRestaurant>(`v2/restaurantes/${params.id}/`);
            setRestaurantName(response.data.nome);
         }
      };

      getRestaurant();
   }, [params]);

   function onSubmitForm (event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      if (params.id) {
         http.put(`v2/restaurantes/${params.id}/`, {
            nome: restaurantName
         });
         alert('Restaurante atualizado com sucesso');
         return;
      }

      http.post('v2/restaurantes/', {
         nome: restaurantName
      });
      alert('Restaurante cadastrado com sucesso');
   }

   return (
      <>
         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }} >
            <Typography component='h1' variant='h6' >Formulário de Restaurantes</Typography>
            <Box component='form' sx={{ width: '100%' }} onSubmit={onSubmitForm} >
               <TextField
                  id='standard-basic'
                  label='Nome do restaurante'
                  variant='standard'
                  value={restaurantName}
                  onChange={e => setRestaurantName(e.target.value)}
                  fullWidth
                  required
               />
               <Button sx={{ marginTop: 1 }} type='submit' variant='outlined' fullWidth >Salvar</Button>
            </Box>
         </Box>
      </>
   );
}

export default FormRestaurant;

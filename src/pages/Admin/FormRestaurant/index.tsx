import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

import { IRestaurant } from '@interfaces/IRestaurant';

function FormRestaurant (): JSX.Element {
   const [restaurantName, setRestaurantName] = useState('');
   const params = useParams();

   useEffect(() => {
      const getRestaurant = async () => {
         if (params.id) {
            const response = await axios.get<IRestaurant>(`http://localhost:8000/api/v2/restaurantes/${params.id}/`);
            setRestaurantName(response.data.nome);
         }
      };

      getRestaurant();
   }, [params]);

   function onSubmitForm (event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      if (params.id) {
         axios.put(`http://localhost:8000/api/v2/restaurantes/${params.id}/`, {
            nome: restaurantName
         });
         alert('Restaurante atualizado com sucesso');
         return;
      }

      axios.post('http://localhost:8000/api/v2/restaurantes/', {
         nome: restaurantName
      });
      alert('Restaurante cadastrado com sucesso');
   }

   return (
      <form onSubmit={onSubmitForm} >
         <TextField
            id='standard-basic'
            label='Nome do restaurante'
            variant='standard'
            value={restaurantName}
            onChange={e => setRestaurantName(e.target.value)}
         />
         <Button type="submit" variant='outlined'></Button>
      </form>
   );
}

export default FormRestaurant;

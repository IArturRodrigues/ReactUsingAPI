import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

function FormRestaurant (): JSX.Element {
   const [restaurantName, setRestaurantName] = useState('');

   function onSubmitForm (event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
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

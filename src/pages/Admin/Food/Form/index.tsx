import { useState, useEffect } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import http from '@http';

import { IFood, IRestaurant, ITag } from '@interfaces/IRestaurant';
import { Method } from 'axios';

function FormFood (): JSX.Element {
   const { id } = useParams();

   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [tag, setTag] = useState('');
   const [tags, setTags] = useState<ITag[]>([]);
   const [restaurant, setRestaurant] = useState<string>('');
   const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
   const [image, setImage] = useState<File | null>(null);

   useEffect(() => {
      const fetchData = async () => {
         const tagsResponse = await http.get< { tags: ITag[] } >('v2/tags/');
         const restaurantsResponse = await http.get<IRestaurant[]>('v2/restaurantes/');
         setTags(tagsResponse.data.tags);
         setRestaurants(restaurantsResponse.data);
         if (id) {
            const response = await http.get<IFood>(`v2/pratos/${id}`);
            setName(response.data.nome);
            setDescription(response.data.descricao);
         }
      };
      fetchData();
   }, []);

   function selectFile (event: React.ChangeEvent<HTMLInputElement>) {
      if (event.target.files?.length) {
         setImage(event.target.files[0]);
         return;
      }
      setImage(null);
   }

   async function onSubmitForm (event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      let url = 'v2/pratos/';
      let method: Method = 'POST';
      try {
         if (id) {
            url += `${id}/`;
            method = 'PUT';
         }

         const formData = new FormData();
         // 1o parâmetro nome pedido na API
         // 2o parâmetro valor para o campo
         formData.append('nome', name);
         formData.append('descricao', description);
         formData.append('tag', tag);
         formData.append('restaurante', restaurant);
         if (image) {
            formData.append('imagem', image);
         }
         await http.request({
            url,
            method,
            headers: {
               'Content-Type': 'multipart/form-data'
            },
            data: formData
         });
         alert('prato cadastrado com sucesso');
         setName('');
         setDescription('');
         setTag('');
         setRestaurant('');
      } catch (err) {
         console.error(err);
      }
   }

   return (
      <>
         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }} >
            <Typography component='h1' variant='h6' >Formulário de Pratos</Typography>
            <Box component='form' sx={{ width: '100%' }} onSubmit={onSubmitForm} >
               <TextField
                  id='standard-basic'
                  label='Nome do prato'
                  variant='standard'
                  margin='dense'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  fullWidth
                  required
               />
               <TextField
                  id='standard-basic'
                  label='Descrição do prato'
                  variant='standard'
                  margin='dense'
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  fullWidth
                  required
               />
               <FormControl margin='dense' fullWidth>
                  <InputLabel id='select-tag'>Tag</InputLabel>
                  <Select labelId='select-tag' value={tag} onChange={e => setTag(e.target.value)}>
                     {tags.map(tag => (
                        <MenuItem key={tag.id} value={tag.value}>
                           {tag.value}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
               <FormControl margin='dense' fullWidth>
                  <InputLabel id='select-restaurant'>Restaurante</InputLabel>
                  <Select labelId='select-restaurant' value={restaurant} onChange={e => setRestaurant(e.target.value)}>
                     {restaurants.map(restaurant => (
                        <MenuItem key={restaurant.id} value={restaurant.id}>
                           {restaurant.nome}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
               <input type="file" onChange={selectFile} />
               <Button sx={{ marginTop: 1 }} type='submit' variant='outlined' fullWidth >Salvar</Button>
            </Box>
         </Box>
      </>
   );
}

export default FormFood;

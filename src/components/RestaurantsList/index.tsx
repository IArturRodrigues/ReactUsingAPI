import React, { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import { IRestaurant } from '@interfaces/IRestaurant';

import Restaurant from './Restaurant';

import { RestaurantList as SRestaurantList } from './RestaurantList';
import { IPagination } from '@interfaces/IPagination';

interface ISearchParams {
   ordening?: string;
   search?: string;
}

function RestaurantList (): JSX.Element {
   const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
   const [nextPage, setNextPage] = useState<string>('');
   const [search, setSearch] = useState<string>('');

   async function fetchData (options: AxiosRequestConfig = {}) {
      try {
         const response = await axios.get<IPagination<IRestaurant>>('http://localhost:8000/api/v1/restaurates/', options);
         console.log(response);

         setRestaurants(response.data.results);
         setNextPage(response.data.next);
      } catch (err) {
         console.error(err);
      }
   };

   function searchFor (event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const options = { params: {} as ISearchParams };
      if (search) {
         options.params.search = search;
      }
      fetchData(options);
   }

   useEffect(() => {
      fetchData();
      // fetchData().catch(console.error);
   }, []);

   async function seeMore () {
      try {
         const response = await axios.get<IPagination<IRestaurant>>(nextPage);
         setRestaurants([...restaurants, ...response.data.results]);
         setNextPage(response.data.next);
      } catch (err) {
         console.error(err);
      }
   }

   return (
      <SRestaurantList>
         <h1>Os restaurantes mais <em>bacanas</em>!</h1>
         <form onSubmit={searchFor}>
            <input
               type="text"
               value={search}
               onChange={e => setSearch(e.target.value)}
            />
            <button type="submit">buscar</button>
         </form>
         {restaurants?.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id} />)}
         {nextPage && <button onClick={seeMore}>Ver mais</button>}
      </SRestaurantList>
   );
}

export default RestaurantList;

// function HomeWork () {
//    const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
//    const [nextPage, setNextPage] = useState<string>('');
//    const [previousPage, setPreviousPage] = useState<string>('');
   
//    async function fetchData (url: string) {
//       try {
//          const response = await axios.get<IPagination<IRestaurant>>(url);
//          // console.log(response);
//          setRestaurants(response.data.results);
//          setNextPage(response.data.next);
//          setPreviousPage(response.data.previous);
//       } catch (err) {
//          console.error(err);
//       }
//    }
   
//    useEffect(() => {
//       fetchData('http://localhost:8000/api/v1/restaurates/');
//       // fetchData().catch(console.error);
//    }, []);
   
//    return (
//       <SRestaurantList>
//          <h1>Os restaurantes mais <em>bacanas</em>!</h1>
//          {restaurants?.map(item => <Restaurant restaurant={item} key={item.id} />)}
//          {<button onClick={() => fetchData(previousPage)} disabled={!previousPage}>
//             Página Anterior
//          </button>}
//          {<button onClick={() => fetchData(nextPage)} disabled={!nextPage}>
//             Próxima página
//          </button>}
//       </SRestaurantList>
//    );
// }

// const restaurants: IRestaurant[] = [
//    {
//       id: 1,
//       nome: 'Lyllys Cafe',
//       pratos: [
//          {
//             id: 1,
//             descricao: 'Lasanha à Bolonhesa',
//             imagem: 'https://receitassaborosa.com/wp-content/uploads/2019/12/Lasanha-com-Molho-a-Bolonhesa.jpg',
//             nome: 'Lasanha',
//             restaurante: 1,
//             tag: 'Italiana'
//          },
//          {
//             id: 2,
//             descricao: 'Strogonoff de Frango à brasileira',
//             imagem: 'https://img.itdg.com.br/images/recipes/000/002/462/332854/332854_original.jpg',
//             nome: 'Strogonoff',
//             restaurante: 1,
//             tag: 'Russa'
//          },
//          {
//             id: 3,
//             descricao: 'Empadão de Frango',
//             imagem: 'https://t1.uc.ltmcdn.com/pt/images/5/7/1/img_como_fazer_empadao_de_frango_27175_600.jpg',
//             nome: 'Empadão de Frango',
//             restaurante: 1,
//             tag: 'Portuguesa'
//          }
//       ]
//    },
//    {
//       id: 2,
//       nome: 'Sugiro Sushi',
//       pratos: [
//          {
//             id: 1,
//             descricao: 'Combinado de 8 peças',
//             imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg',
//             nome: 'Sushi',
//             restaurante: 1,
//             tag: 'Japonesa'
//          },
//          {
//             id: 2,
//             descricao: 'Sashimi de Salmão',
//             imagem: 'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2009/04/sashimi_facil.jpg',
//             nome: 'Sashimi',
//             restaurante: 1,
//             tag: 'Japonesa'
//          }
//       ]
//    },
//    {
//       id: 3,
//       nome: 'Cantina da Escola',
//       pratos: [
//          {
//             id: 1,
//             descricao: 'Salgado de queijo com presunto',
//             imagem: 'https://img.itdg.com.br/tdg/images/recipes/000/102/312/279767/279767_original.jpg',
//             nome: 'Quejunto',
//             restaurante: 1,
//             tag: 'Lanche'
//          },
//          {
//             id: 2,
//             descricao: 'Coxinha de Frango',
//             imagem: 'https://t1.rg.ltmcdn.com/pt/posts/1/9/1/coxinha_simples_191_600.jpg',
//             nome: 'Coxinha',
//             restaurante: 1,
//             tag: 'Lanche'
//          },
//          {
//             id: 3,
//             descricao: 'Risole de Palmito',
//             imagem: 'https://img.itdg.com.br/tdg/images/recipes/000/005/116/323871/323871_original.jpg',
//             nome: 'Risole',
//             restaurante: 1,
//             tag: 'Lanche'
//          }
//       ]
//    }
// ];

import { Link } from 'react-router-dom';

import { MiniBanners, Categories, Links } from './Home';

function Home (): JSX.Element {
   return (
      <>
         <MiniBanners>
            <img src="/imgs/cozinhar_01.jpg" alt="Um prato conceitual" />
            <MiniBanners.CentralCard>
               <h2>A melhor rede de restaurantes!</h2>
               <div>
                  <p>seja um parceiro agora:</p>
                  <p>ligue para <a href="callto:99999999999">(99) 99999-9999</a></p>
               </div>
            </MiniBanners.CentralCard>
            <img src="/imgs/cozinhar_02.jpg" alt="Um hambúrguer desconstruído" />
         </MiniBanners>
         <Categories>
            <Categories.FoodType>
               <img src="/imgs/cafedamanha.png" alt="Café da manhã" />
               <h4>Café da manhã</h4>
            </Categories.FoodType>
            <Categories.FoodType>
               <img src="/imgs/almoco.png" alt="Almoço" />
               <h4>Almoço</h4>
            </Categories.FoodType>
            <Categories.FoodType>
               <img src="/imgs/jantar.png" alt="Jantar" />
               <h4>Jantar</h4>
            </Categories.FoodType>
            <Categories.FoodType>
               <img src="/imgs/sobremesa.png" alt="Sobremesas" />
               <h4>Sobremesas</h4>
            </Categories.FoodType>
         </Categories>
         <Links>
            <h3>Conheça os melhores restaurantes</h3>
            <p>Clique <Link to='/restaurantes' >aqui</Link></p>
         </Links>
      </>
   );
}

export default Home;

import { IFood } from '@interfaces/IRestaurant';

import { Food as SFood, Container, Content } from './Food';

interface FoodProps {
   children?: React.ReactNode;
   food: IFood;
}

function Food ({ food }: FoodProps): JSX.Element {
   return (
      <SFood>
         <Container>
            <div>
               <Container.TwistEffect>
                  <img src={food.imagem} alt={food.descricao} />
               </Container.TwistEffect>
            </div>
         </Container>
         <Content>
            <h3>{food.nome}</h3>
            <Content.Tag>
               {food.tag}
            </Content.Tag>
            <div>
               {food.descricao}
            </div>
         </Content>
      </SFood>
   );
}

export default Food;

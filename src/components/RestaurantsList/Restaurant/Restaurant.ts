import styled, { StyledComponent } from 'styled-components';

type IRestaurant = StyledComponent<'section', any, {}, never> & {
   Title: StyledComponent<'div', any, {}, never>;
   SeeMore: StyledComponent<'div', any, {}, never>;
}

const Restaurant = styled.section`
   margin-top: 2rem;
   background-color: #f2f6ff;
   padding: 30px;
` as IRestaurant;

Restaurant.Title = styled.div`
   font-size: 28px;
   font-weight: 500;
   letter-spacing: 0;
   line-height: 1.5em;
   padding-bottom: 15px;
   position: relative;
   width: auto;
   box-sizing: border-box;
   display: inline-block;

   h2 {
      margin: 0;
      width: auto;

      &:before {
         content: "";
         position: absolute;
         left: 0;
         bottom: 0;
         height: 5px;
         width: 55px;
         background-color: #111;
      }

      &:after {
         content: "";
         position: absolute;
         left: 0;
         bottom: 2px;
         height: 1px;
         width: 100%;
         max-width: 100%;
         background-color: #333;
      }
   }
`;

Restaurant.SeeMore = styled.div`
   border-radius: 28px;
   color: #000;
   display: inline-block;
   background: #FFF;
   padding: 10px 20px;
   text-decoration: none;
   font-weight: 500;
   border-color: #000;
   cursor: pointer;
   text-transform: uppercase;
   border-style: solid;
   &:hover {
      color: #FFF;
      background: #f2745f;
      border-color: #f2745f;
   }
`;

export { Restaurant };

import styled, { StyledComponent } from 'styled-components';

type IMiniBanners = StyledComponent<'div', any, {}, never> & {
   CentralCard: StyledComponent<'div', any, {}, never>;
}

type ICategories = StyledComponent<'div', any, {}, never> & {
   FoodType: StyledComponent<'div', any, {}, never>;
}

const MiniBanners = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   margin: 2rem 0;

   img {
      max-height: 185px;
   }
` as IMiniBanners;

MiniBanners.CentralCard = styled.div`
   background-color: #f2745f;
   text-align: center;
   padding: 1.875rem;
   color: #FFF;

   h2 {
      max-width: 70%;
      display: inline-block;
   }

   a {
      text-decoration: none;
      color: #631406;
      font-weight: bold;
   }
`;

const Categories = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-evenly;
` as ICategories;

Categories.FoodType = styled.div`
   text-align: center;

   img {
      max-width: 100%;
      overflow: hidden;
      border: 10px solid #eaf0ff;
      border-radius: 50%;
   }

   h4 {
      margin-top: 1.25rem;
      font-size: 1.375rem;
      color: #121212;
      font-weight: 600;
      margin-bottom: 0px;
   }
`;

const Links = styled.div`
   text-align: center;
   margin: 2.5rem 0;
`;

export { MiniBanners, Categories, Links };

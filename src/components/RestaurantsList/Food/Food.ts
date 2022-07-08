import styled, { StyledComponent } from 'styled-components';

type IContainer = StyledComponent<'div', any, {}, never> & {
   TwistEffect: StyledComponent<'div', any, {}, never>;
}

type IContent = StyledComponent<'div', any, {}, never> & {
   Tag: StyledComponent<'div', any, {}, never>;
}

const Food = styled.div`
   display: inline-block;
   width: 15rem;
   text-align: center;
   margin-right: .5rem;
`;

const Container = styled.div`
   height: 14.375rem;
   width: 12.5rem;
   overflow: hidden;
   border-radius: 0px 0px 20px 20px;
   display: inline-block;

   img {
      transform: skew(0deg, -13deg);
      height: 15.625rem;
      margin: -2.1875rem 0px 0px -4.375rem;
   }
` as IContainer;

Container.TwistEffect = styled.div`
   display: inline-block;
   border-radius: 20px;
   overflow: hidden;
   padding: 0px;
   transform: skew(0deg, 13deg);
   font-size: 0px;
   margin: 1.875rem 0px 0px 0px;
   background: #c8c2c2;
   height: 15.625rem;
   width: 12.5rem;
`;

const Content = styled.div`
   box-shadow: 0px 0px .625rem 0px rgba(0, 0, 0, 0.2);
   padding: 7.5rem 1.25rem 1.25rem 1.25rem;
   border-radius: 20px;
   background: #fff;
   margin: -7.5rem 0px 0px 0px;
   line-height: 1.1875rem;
   font-size: .875rem;
   text-align: left;

   h3 {
      margin: 1.25rem 0px .625rem 0px;
      font-size: 1.125rem;
   }
` as IContent;

Content.Tag = styled.div`
   background: #f2745f;
   display: inline-block;
   padding: 0.75rem 1rem;
   margin: 1rem 0;
   border-radius: 50px;
   color: #fff;
   font-weight: bold;
`;

export { Food, Container, Content };

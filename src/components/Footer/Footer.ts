import styled from 'styled-components';

const Footer = styled.footer`
   margin-top: 2.5rem;
   background-color: #363e50;
   color: #fff;
   display: flex;
   justify-content: space-evenly;
   flex-wrap: wrap;
   align-items: center;
`;

const SocialIcons = styled.ul`
   padding: 0;

   li {
      display: inline-block;
      margin: 0px .3125rem;

      i {
         width: 2.25rem;
         height: 2.25rem;
         display: inline-block;
         text-align: center;
         line-height: 2.25rem !important;
         background-color: #fff;
         border-radius: 50%;
         color: #363e50;
         transition: all 0.5s;
      }
   }
`;

export { Footer, SocialIcons };

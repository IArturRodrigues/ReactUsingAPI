import styled from 'styled-components';

export const Link = styled.nav`
   text-align: center;

   ul {
      padding: 0;

      li {
         list-style: none;
         display: inline-block;
         margin: 0 .5rem;

         &::after {
               content: "";
               display: block;
               width: 0;
               height: 2px;
               background: #000;
               transition: width 0.3s;
         }

         &:hover::after {
            width: 100%;

            //transition: width .3s;
         }

         a {
            text-decoration: none;
            font-size: 1.5rem;

            &:visited {
               color: #000;
            }
         }
      }
   }
`;

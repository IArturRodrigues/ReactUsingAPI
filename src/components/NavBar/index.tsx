import { Link } from 'react-router-dom';

import { Link as SLink } from './NavBar';

function NavBar (): JSX.Element {
   return (
      <SLink>
         <ul>
            <li>
               <Link to='/' >Home</Link>
            </li>
            <li>
               <Link to='/restaurantes' >Restaurantes</Link>
            </li>
         </ul>
      </SLink>
   );
}

export default NavBar;

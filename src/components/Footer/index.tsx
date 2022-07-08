import { FacebookLogo, TwitterLogo, LinkedinLogo, Rss, DribbbleLogo } from 'phosphor-react';

import { Footer as SFooter, SocialIcons } from './Footer';

function Footer (): JSX.Element {
   return (
      <SFooter>
         <div>
            <p>Copyright &copy; {new Date().getFullYear()} AIFood</p>
         </div>
         <div>
            <SocialIcons>
               <li><i><FacebookLogo size='2.25rem' /></i></li>
               <li><i><TwitterLogo size='2.25rem' /></i></li>
               <li><i><LinkedinLogo size='2.25rem' /></i></li>
               <li><i><Rss size='2.25rem' /></i></li>
               <li><i><DribbbleLogo size='2.25rem' /></i></li>
            </SocialIcons>
         </div>
         <div>
            <p>Uma alegria <em>a cada prato</em></p>
         </div>
      </SFooter>
   );
}

export default Footer;

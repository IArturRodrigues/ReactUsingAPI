import { Banner as SBanner } from './Banner';

function Banner (): JSX.Element {
   return (
      <SBanner>
         <SBanner.Container>
            <SBanner.Title>AIFood</SBanner.Title>
            <p>Felicidade em cada prato.</p>
         </SBanner.Container>
      </SBanner>
   );
}

export default Banner;

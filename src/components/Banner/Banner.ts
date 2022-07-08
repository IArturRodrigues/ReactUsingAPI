import styled, { StyledComponent } from 'styled-components';

type IBanner = StyledComponent<'section', any, {}, never> & {
   Container: StyledComponent<'div', any, {}, never>;
   Title: StyledComponent<'h1', any, {}, never>;
}

const Banner = styled.section`
   height: 50vh;
   background: linear-gradient(rgba(240, 240, 240, 0.144), rgba(255, 255, 255, 0.336)), url("https://i.postimg.cc/wT3TQS3V/header-image2.jpg");
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
` as IBanner;

Banner.Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100%;
   font-size: 1.6rem;
`;

Banner.Title = styled.h1`
   text-transform: uppercase;
   margin: 0;
`;

export { Banner };

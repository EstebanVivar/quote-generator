import styled from 'styled-components';

const DynamicBackground = styled.div`
    background:linear-gradient(to right,#000046,#0ec5fd);
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
  height: 100vh;
  width: 100vw;

  @keyframes gradient {
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 50% 100%;
    }
    100%{
        background-position: 0% 50%;
    }
  } 
`;

export default DynamicBackground;
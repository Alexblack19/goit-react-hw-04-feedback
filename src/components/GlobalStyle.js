import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import 'modern-normalize';
import backgroundImage from '../image/coffe.webp';

export const GlobalStyle = createGlobalStyle`  
body {  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  background-image: url(${backgroundImage});  
  background-position: 50% 50%;  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h2,
h3, 
p {
  margin-top: 0px;
  margin-bottom: 0px;
}

ul {  
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
  list-style: none;
}  
`;

export const Container = styled.div`
  max-width: 540px;
  height: 350px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  background-image: radial-gradient(
    circle at 50% 50%,
    #ffe1aa 0,
    #ffd4a7 16.67%,
    #ffc7a2 33.33%,
    #f2b99d 50%,
    #e1ac97 66.67%,
    #d1a092 83.33%,
    #c2968d 100%
  );
  box-shadow: 5px 5px 5px 0px rgba(179, 179, 179, 1);
`;

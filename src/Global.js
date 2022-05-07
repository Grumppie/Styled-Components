import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root {
  --primary: #bb5d00;
  --secondary: #da6d00;
  --white: #fff;
  --hover-white: #e5e5e5;
  --hover-shadow: #80808072;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f2f4f8;
}

.btn{
  color: white;
  border: none;
  background-color: var(--primary);
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
}

`

export default GlobalStyles
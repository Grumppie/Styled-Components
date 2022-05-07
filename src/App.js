// import BasicTitle from "./compnents/BasicTitle"
// import { BasicButton, HipsterButton } from "./compnents/Buttons"
// import ComplexTitle from "./compnents/ComplexTitle";
// import Card from "./compnents/Card";
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './Global'
import { useState } from 'react';

const BaseTheme = {
  color: '#000',
  background: '#fff',
}
const DarkTheme = {
  color: '#fff',
  background: '#000',
}

const Conatainer = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`

function App() {
  const [Theme, setTheme] = useState(BaseTheme)

  const toggleTheme = () => {
    setTheme((Theme === BaseTheme) ? DarkTheme : BaseTheme)
  }

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Conatainer>
          <h1>hey there</h1>
          <button className="btn" onClick={toggleTheme}>Change Theme</button>
        </Conatainer>
      </ThemeProvider>
      {/* <Card /> */}
    </div>
  );
}

export default App;

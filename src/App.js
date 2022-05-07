// import BasicTitle from "./compnents/BasicTitle"
// import { BasicButton, HipsterButton } from "./compnents/Buttons"
// import ComplexTitle from "./compnents/ComplexTitle";
// import Card from "./compnents/Card";
// import { useState } from 'react';
// import styled, { ThemeProvider } from 'styled-components';
// import Loading from './compnents/Loading'
import GlobalStyles from './Global'
import { HipsterButton } from './compnents/Buttons'


// const BaseTheme = {
//   color: '#000',
//   background: '#fff',
// }
// const DarkTheme = {
//   color: '#fff',
//   background: '#000',
// }

// const Conatainer = styled.div`
//   padding: 2rem;
//   color: ${(props) => props.theme.color};
//   background: ${(props) => props.theme.background};
// `

function App() {
  // const [Theme, setTheme] = useState(BaseTheme)

  // const toggleTheme = () => {
  //   setTheme((Theme === BaseTheme) ? DarkTheme : BaseTheme)
  // }

  return (
    <div className="App">
      <GlobalStyles />
      <HipsterButton as="a" href="https://github.com/">
        hey there
      </HipsterButton>
      <HipsterButton>
        hey there
      </HipsterButton>
      <HipsterButton large>
        hey there
      </HipsterButton>
      <div>
        <h2>noting really unique</h2>
      </div>
      {/* <Card /> */}
      {/* <Loading /> */}
    </div>
  );
}

export default App;

      // <ThemeProvider theme={Theme}>
      //   <GlobalStyles />
      //   <Conatainer>
      //     <h1>hey there</h1>
      //     <button className="btn" onClick={toggleTheme}>Change Theme</button>
      //   </Conatainer>
      // </ThemeProvider>
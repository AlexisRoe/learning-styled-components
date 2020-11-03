import styled, { keyframes, ThemeProvider } from 'styled-components/macro';
import { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import logoPink from './logo_pink.svg';
import logoWhite from './logo_white.svg';

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  text-align: center;

  button {
    background: none;
    color: ${(props) => props.theme.color};
    border: none;
    cursor: pointer;
    outline: none;
  }

  header {
    background-color: ${(props) => props.theme.background};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${(props) => props.theme.color};
  }

  header img {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    header img {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`;

const Link = styled.a`
  color: ${(props) => props.theme.color};
`;

const white = {
  background: 'white',
  color: '#ff69b4',
  src: logoPink,
};

const pink = {
  background: '#ff69b4',
  color: 'white',
  src: logoWhite,
};

function App() {
  const [theme, setTheme] = useState(white);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <header>
          <button
            type="button"
            onClick={() => setTheme(theme === pink ? white : pink)}
          >
            Change Colour
          </button>
          <img src={theme.src} alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </header>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

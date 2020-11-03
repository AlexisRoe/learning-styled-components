# Learning styled Components

This is a project from the 5 week of "Neue Fische" Bootcamp.

## Styled Components

[Homepage: styled components](https://styled-components.com/)

        import styled from 'styled-components/macro';

        const Button = styled.button`
        /* Adapt the colors based on primary prop */
        background: ${props => props.primary ? "palevioletred" : "white"};
        color: ${props => props.primary ? "white" : "palevioletred"};
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
        display: block;
        `;

        const TomatoButton = styled(Button)`
        color: tomato;
        border-color: tomato;
        `;

        render(
        <div>
            <Button>Normal Button</Button>
            <Button as="a" href="/">Link with Button styles</Button>
            <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>
        </div>
        );

## Themegenerator

[Documentation: Theming](https://styled-components.com/docs/advanced#theming)

    import styled, { keyframes, ThemeProvider } from 'styled-components/macro';

    // Define our button, but with the use of props.theme this time
    const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;

    /* Color the border and text with theme.main */
    color: ${props => props.theme.main};
    border: 2px solid ${props => props.theme.main};
    `;

    // We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
    Button.defaultProps = {
    theme: {
        main: "palevioletred"
    }
    }

    // Define what props.theme will look like
    const theme = {
    main: "mediumseagreen"
    };

    render(
    <div>
        <Button>Normal</Button>

        <ThemeProvider theme={theme}>
        <Button>Themed</Button>
        </ThemeProvider>
    </div>
    );

also allowing easily switching it with useState

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

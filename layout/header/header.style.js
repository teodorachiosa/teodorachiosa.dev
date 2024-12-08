const css = String.raw;
const tCHeaderStyle = new CSSStyleSheet();

tCHeaderStyle.replaceSync(css`
    header {
        display: flex;
        justify-content: space-between;

        .logo {
            display: flex;
            flex-direction: column;
            line-height: 1;

            .top-line {
                text-transform: lowercase;
                font-family: 'Philosopher', sans-serif;
                font-size: 2em;
                letter-spacing: 0.04em;
            }

            .bottom-line {
                text-transform: uppercase;
                font-size: 1em;
                letter-spacing: 0.3em;
            }
        }
    }
`);
export default tCHeaderStyle;

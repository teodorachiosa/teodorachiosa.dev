const css = String.raw;
const tCFooterStyle = new CSSStyleSheet();

tCFooterStyle.replaceSync(css`
    ul {
        display: flex;
        flex-wrap: wrap;
        column-gap: 2.5rem;
        row-gap: 1.1rem;
        padding: 0;
        list-style: none;

        li {
            a.link {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.5rem;
                color: var(--body);
                font-size: 1.1rem;
                transition: all 0.3s ease-in-out;
                text-decoration: underline 0.2rem transparent;
                text-underline-offset: 0.8rem;

                .icon {
                    display: flex;
                }

                .text {
                    margin-left: 0.6rem;
                }

                &:hover,
                &:focus-visible {
                    text-decoration-color: color-mix(
                        in hsl,
                        var(--background),
                        var(--body) 25%
                    );
                    text-underline-offset: 0.4rem;
                }
            }
        }
    }
`);
export default tCFooterStyle;

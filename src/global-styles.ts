import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, #root, body {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: var(--vh, 100vh);
        background-color: ${(props) => props.theme.darkTheme.bg};
        color: ${(props) => props.theme.darkTheme.fg};
    }
`;

const colors = {
  lightPrimary: "#d9d9d9",
  lightsecondary: "#8c8c8c",
  middle: "#595959",
  darkPrimary: "#0d0d0d",
  darkSecondary: "#404040",
};

export const theme = {
  lightTheme: {
    bg: colors.lightPrimary,
    fg: colors.darkPrimary,
  },
  darkTheme: {
    bg: colors.darkPrimary,
    fg: colors.lightPrimary,
  },
};

export interface Theme {
  bg: string;
  fg: string;
}

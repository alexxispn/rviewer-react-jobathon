export const COLORS = {
    white: 'hsl(0deg 0% 100%)',
    black: 'hsl(0deg 0% 0%)',
    offblack: 'hsl(0deg,0%,10%)',
    gray: {
        100: 'hsl(40deg 12% 95%)',
        300: 'hsl(35deg 8% 80%)',
        500: 'hsl(30deg 4% 60%)',
        700: 'hsl(28deg 5% 40%)',
        900: 'hsl(24deg 6% 16%)',
    },
    primary: 'hsl(224deg 30% 40%)',
    secondary: 'hsl(180deg 34% 37%)',
    urgent: 'hsl(1deg,71%,45%)',
    urgentLight: 'hsl(2deg,62%,31%)',
};

export const WEIGHTS = {
    normal: 400,
    medium: 550,
    bold: 700,
};

export const BREAKPOINTS = {
    tabletMin: 550,
    laptopMin: 1100,
    desktopMin: 1500,
};

export const QUERIES = {
    tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
    laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
    desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
    tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const FAMILIES = {
    serif: '"Crimson Pro", Georgia, serif',
    sansSerif:
        '"Helvetica Neue", Helvetica, "Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", sans-serif',
    logo: 'Chomsky',
};

export const MOVIES_PER_PAGE = 10;
export const API_URL = `https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json`



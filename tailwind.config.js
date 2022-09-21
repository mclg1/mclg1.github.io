const colors = require("./tailwind.colors.js");

module.exports = {
    purge: {
        content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.js"],

        // These options are passed through directly to PurgeCSS
        options: {
            blocklist: [/^debug-/],
            keyframes: true,
            fontFace: true,
        },
    },
    presets: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",

            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            green: colors.green,
            red: colors.red,
            yellow: colors.amber,
            blue: colors.blue,
            purple: colors.violet,
            pink: colors.pink,
        },
        spacing: {
            px: "1px",
            0: "0px",
            2: "0.5rem",
            4: "1rem",
            6: "1.5rem",
            8: "2rem",
            10: "2.5rem",
            12: "3rem",
            14: "3.5rem",
            16: "4rem",
            24: "6rem",
            32: "8rem",
            46: "12rem",
            64: "16rem",
        },
        backgroundColor: (theme) => theme("colors"),
        backgroundPosition: {},
        backgroundSize: {},
        borderColor: {},
        borderOpacity: {},
        borderRadius: {
            DEFAULT: "0.25rem",
        },
        borderWidth: {
            DEFAULT: "1px",
        },
        boxShadow: {
            DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            image: "0 0.5em 2em 0 rgba(0, 0, 0, 0.25), 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.5)",
            card: "0 0.25em 1em 0 rgba(0, 0, 0, 0.25), 0 0.125em 0.25em 0 rgba(0, 0, 0, 0.5)",
            none: "none",
        },
        container: {},
        cursor: {
            auto: "auto",
            default: "default",
            pointer: "pointer",
        },
        divideColor: {},
        divideOpacity: {},
        divideWidth: {},
        fill: { current: "currentColor" },
        flex: {
            1: "1 1 0%",
            auto: "1 1 auto",
            initial: "0 1 auto",
            none: "none",
        },
        flexGrow: {
            0: "0",
            DEFAULT: "1",
        },
        flexShrink: {
            0: "0",
            DEFAULT: "1",
        },
        fontFamily: {
            sans: ["Fira Code", "monospace", '"Helvetica Neue"', "Arial", "sans-serif"],
            serif: ["Fira Code", "monospace", '"Times New Roman"', "Times", "serif"],
            mono: ["monospace"],
        },
        fontSize: {
            xs: ["0.75rem", { lineHeight: "1rem" }],
            sm: ["0.875rem", { lineHeight: "1.25rem" }],
            base: ["1rem", { lineHeight: "1.5rem" }],
            lg: ["1.125rem", { lineHeight: "1.75rem" }],
            xl: ["1.25rem", { lineHeight: "1.75rem" }],
            "2xl": ["1.5rem", { lineHeight: "2rem" }],
            "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
            "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
            "6xl": ["3.75rem", { lineHeight: "1" }],
            "8xl": ["6rem", { lineHeight: "1" }],
        },
        fontWeight: {
            light: "200",
            normal: "400",
            bold: "600",
        },
        gap: (theme) => theme('spacing'),
        gradientColorStops: {},
        gridAutoColumns: {
          auto: 'auto',
          min: 'min-content',
          max: 'max-content',
          fr: 'minmax(0, 1fr)',
        },
        gridAutoRows: {
          auto: 'auto',
          min: 'min-content',
          max: 'max-content',
          fr: 'minmax(0, 1fr)',
        },
        gridColumn: {
          auto: 'auto',
          'span-1': 'span 1 / span 1',
          'span-2': 'span 2 / span 2',
          'span-3': 'span 3 / span 3',
          'span-4': 'span 4 / span 4',
          'span-5': 'span 5 / span 5',
          'span-6': 'span 6 / span 6',
          'span-7': 'span 7 / span 7',
          'span-8': 'span 8 / span 8',
          'span-9': 'span 9 / span 9',
          'span-10': 'span 10 / span 10',
          'span-11': 'span 11 / span 11',
          'span-12': 'span 12 / span 12',
          'span-full': '1 / -1',
        },
        gridColumnEnd: {
          auto: 'auto',
          1: '1',
          2: '2',
          3: '3',
          4: '4',
          5: '5',
          6: '6',
          7: '7',
          8: '8',
          9: '9',
          10: '10',
          11: '11',
          12: '12',
          13: '13',
        },
        gridColumnStart: {
          auto: 'auto',
          1: '1',
          2: '2',
          3: '3',
          4: '4',
          5: '5',
          6: '6',
          7: '7',
          8: '8',
          9: '9',
          10: '10',
          11: '11',
          12: '12',
          13: '13',
        },
        gridRow: {
          auto: 'auto',
          'span-1': 'span 1 / span 1',
          'span-2': 'span 2 / span 2',
          'span-3': 'span 3 / span 3',
          'span-4': 'span 4 / span 4',
          'span-5': 'span 5 / span 5',
          'span-6': 'span 6 / span 6',
          'span-full': '1 / -1',
        },
        gridRowStart: {
          auto: 'auto',
          1: '1',
          2: '2',
          3: '3',
          4: '4',
          5: '5',
          6: '6',
          7: '7',
        },
        gridRowEnd: {
          auto: 'auto',
          1: '1',
          2: '2',
          3: '3',
          4: '4',
          5: '5',
          6: '6',
          7: '7',
        },
        gridTemplateColumns: {
          none: 'none',
          1: 'repeat(1, minmax(0, 1fr))',
          2: 'repeat(2, minmax(0, 1fr))',
          3: 'repeat(3, minmax(0, 1fr))',
          4: 'repeat(4, minmax(0, 1fr))',
          5: 'repeat(5, minmax(0, 1fr))',
          6: 'repeat(6, minmax(0, 1fr))',
          7: 'repeat(7, minmax(0, 1fr))',
          8: 'repeat(8, minmax(0, 1fr))',
          9: 'repeat(9, minmax(0, 1fr))',
          10: 'repeat(10, minmax(0, 1fr))',
          11: 'repeat(11, minmax(0, 1fr))',
          12: 'repeat(12, minmax(0, 1fr))',
        },
        gridTemplateRows: {
          none: 'none',
          1: 'repeat(1, minmax(0, 1fr))',
          2: 'repeat(2, minmax(0, 1fr))',
          3: 'repeat(3, minmax(0, 1fr))',
          4: 'repeat(4, minmax(0, 1fr))',
          5: 'repeat(5, minmax(0, 1fr))',
          6: 'repeat(6, minmax(0, 1fr))',
        },
        height: (theme) => ({
            ...theme("spacing"),
            auto: "auto",
            full: "100%",
            screen: "100vh",
        }),
        inset: {},
        letterSpacing: {
            tight: "-0.025em",
            normal: "0em",
        },
        lineHeight: {
            none: "1",
            tight: "1.25",
            snug: "1.375",
            normal: "1.5",
            relaxed: "1.625",
            loose: "2",
        },
        listStyleType: {
            none: "none",
        },
        margin: {
            auto: "auto",
        },
        maxHeight: {
            full: "100%",
            screen: "100vh",
        },
        maxWidth: (theme, { breakpoints }) => ({
          none: 'none',
          0: '0rem',
          xs: '20rem',
          sm: '24rem',
          md: '28rem',
          lg: '32rem',
          xl: '36rem',
          '2xl': '42rem',
          '3xl': '48rem',
          '4xl': '56rem',
          '5xl': '64rem',
          '6xl': '72rem',
          '7xl': '80rem',
          full: '100%',
          min: 'min-content',
          max: 'max-content',
          prose: '65ch',
          ...breakpoints(theme('screens')),
        }),
        minHeight: {
            0: "0px",
            full: "100%",
            screen: "100vh",
        },
        minWidth: {
            0: "0px",
            full: "100%",
            min: "min-content",
            max: "max-content",
        },
        objectPosition: {
            bottom: "bottom",
            center: "center",
            left: "left",
            "left-bottom": "left bottom",
            "left-top": "left top",
            right: "right",
            "right-bottom": "right bottom",
            "right-top": "right top",
            top: "top",
        },
        opacity: {
            0: "0",
            50: "0.5",
            100: "1",
        },
        order: {
            first: "-9999",
            last: "9999",
            none: "0",
            1: "1",
        },
        outline: {
            none: ["2px solid transparent", "2px"],
        },
        padding: (theme) => theme("spacing"),
        placeholderColor: {},
        placeholderOpacity: {},
        ringColor: (theme) => ({
            DEFAULT: theme("colors.blue.500", "#3b82f6"),
        }),
        ringOffsetColor: {},
        ringOffsetWidth: {},
        ringOpacity: {
            DEFAULT: "0.5",
        },
        ringWidth: {
            DEFAULT: "3px",
        },
        rotate: {},
        scale: {},
        skew: {},
        space: (theme) => ({
            ...theme("spacing"),
        }),
        stroke: {
            current: "currentColor",
        },
        strokeWidth: {
            0: "0",
            1: "1",
            2: "2",
        },
        textColor: (theme) => theme("colors"),
        textOpacity: {},
        transformOrigin: {
            center: "center",
            top: "top",
            "top-right": "top right",
            right: "right",
            "bottom-right": "bottom right",
            bottom: "bottom",
            "bottom-left": "bottom left",
            left: "left",
            "top-left": "top left",
        },
        transitionDelay: {
            DEFAULT: "0ms",
        },
        transitionDuration: {
            DEFAULT: "150ms",
            500: "500ms",
        },
        transitionProperty: {
            none: "none",
            all: "all",
            DEFAULT: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        },
        transitionTimingFunction: {
            DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        },
        translate: {},
        width: (theme) => ({
            ...theme("spacing"),
            auto: "auto",
            full: "100%",
            screen: "100vw",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            min: "min-content",
            max: "max-content",
        }),
        zIndex: {
            auto: "auto",
        },
    },
    variantOrder: [
        "first",
        "last",
        "odd",
        "even",
        "visited",
        "checked",
        "group-hover",
        "group-focus",
        "focus-within",
        "hover",
        "focus",
        "focus-visible",
        "active",
        "disabled",
    ],
    variants: {
        display: ["responsive"],
        flex: ["responsive"],
        flexDirection: ["responsive"],
        flexGrow: ["responsive"],
        flexShrink: ["responsive"],
        flexWrap: ["responsive"],
        fontSize: ["responsive"],
        gap: ["responsive"],
        grid: ["responsive"],
        gridColumn: ["responsive"],
        justifyItems: ["responsive"],
        overflow: ["responsive"],
        opacity: ["hover"],
        space: ["responsive"],
        padding: ["responsive"],
    },
    plugins: [],
};

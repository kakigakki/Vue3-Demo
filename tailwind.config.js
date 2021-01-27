const plugin = require("tailwindcss/plugin");

const checkedSiblingPlugin = plugin(function({ addVariant, e }) {
    addVariant("checked-sibling", ({ container }) => {
        container.walkRules((rule) => {
            rule.selector = `:checked + .checked-sibling\\:${rule.selector.slice(1)}`;
        });
    });
});

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                'c1': '32rem',
                "15": "3.75rem"
            }
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            'c1': '1.2rem'
        },
        borderWidth: {
            DEFAULT: '1px',
            '0': '0',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '6': '6px',
            '8': '8px',
        }
    },
    variants: {
        extend: {
            backgroundColor: ['checked'],
            borderColor: ['checked'],
            textDecoration: ["checked-sibling"]
        },
    },
    plugins: [checkedSiblingPlugin],
}
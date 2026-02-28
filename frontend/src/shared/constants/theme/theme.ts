import { createTheme } from '@mantine/core'
import components from './overrides'

export const theme = createTheme({
    components,
    cursorType: 'pointer',
    fontFamily: 'Inter, sans-serif',
    fontFamilyMonospace: 'Fira Mono, monospace',
    breakpoints: { xs: '25em', sm: '30em', md: '48em', lg: '64em', xl: '80em', '2xl': '96em', '3xl': '120em', '4xl': '160em' },
    scale: 1,
    fontSmoothing: true,
    focusRing: 'never',
    white: '#ffffff',
    black: '#000000',
    colors: {
        dark: [
            '#FFFFFF', '#8E8E93', '#8E8E93', '#48484A', '#3A3A3C',
            '#2C2C2E', '#1C1C1E', '#121214', '#0A0A0B', '#000000'
        ],
        blue: [
            '#E0EFFF', '#B3D8FF', '#80C1FF', '#4DA9FF', '#1A92FF',
            '#0070F0', // 5 - твой синий акцент
            '#0060CE', '#0051AC', '#00418A', '#003169'
        ]
    },
    primaryShade: 5,
    primaryColor: 'blue',
    autoContrast: true,
    luminanceThreshold: 0.3,
    headings: {
        fontFamily: 'Inter, sans-serif',
        fontWeight: '700'
    },
    defaultRadius: 'md'
})
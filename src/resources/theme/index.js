import { extendTheme } from '@chakra-ui/react'

const colors = {
    colors: {
        error: '#F42F2F',
        success: 'rgba(78, 187, 135, 1)',
        primary: '#6400D0',
        secondary: '#31FF7D',
        gray: '#F1E3FF',
        purple: '#7604F1',
        bg: '#fff',
        black: '#010309',

        text: '#000',
        textSecondary: '#686C7B',
        textGra: '#7F8088',
        purpleCircle: '#6400D0',
        greenCircle: '#31FF7D',
        messageColor: '#888682',
        bankCount: '#686C7B',
    },
}
const text = {
    title: {
        fontFamily: 'Lexend Deca',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '48px',
        lineHeight: '60px'
    }
}

export const theme = extendTheme({
    colors, components: {}, fonts: {
        heading: `'Lexend Deca', sans-serif`,
        body: `'Lexend Deca', sans-serif`,
    },
})
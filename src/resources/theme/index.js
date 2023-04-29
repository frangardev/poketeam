import { extendTheme } from '@chakra-ui/react'

const colors = {
    colors: {
        error: '#EB8888',
        success: '5AD5C5',
        primary: '#F7B3E4',
        secondary: '#FFF',
        while: '#FFF',
        gray: '#F1E3FF',
        purple: '#7604F1',
        bg: '#FFFDF6',
        black: '#000',
        text: '#575862',
        pink: '#F7B3E4',
        orange: '#FDD1B4',
        blue: '#D6F5FC',
        yellow: '#FFEB99',
        textColor: '#575862',
        green: '#E3EFC9',
    },
}
const Text = {
    baseStyle: {
        fontStyle: 'normal',
        color: 'colors.text'
    },
    variants: {
        title: {
            fontWeight: '600',
            fontSize: '48px',
            lineHeight: '60px',
        },
        subTitle: {
            fontWeight: '300',
            fontSize: '24px',
            lineHeight: '30px',
        }
    }
}
const Button = {
    baseStyle: {
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '1rem',
        borderRadius: '33px',
        color: 'colors.black',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08)'
    },
    variants: {
        primary: {
            bg: 'colors.primary',
        },
        secondary: {
            bg: 'colors.secondary',
        }
    }
}

export const theme = extendTheme({
    colors, components: { Button, Text }, fonts: {
        heading: `'Lexend Deca', sans-serif`,
        body: `'Lexend Deca', sans-serif`,
    },
})
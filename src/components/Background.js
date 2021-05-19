import React from 'react'
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
    backgroundContainer: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
    },
    starsContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    star: {
        position: 'absolute',
        left: ({ idx }) => idx ? `${100 / 30 * idx}%` : '',
        top: ({ rand }) => rand ? `-10%` : '',
        width: '1px',
        height: '50px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(128,128,128,0.3) 0%, rgba(105,105,105,0.3) 60%)',
        filter: 'drop-shadow(0 0 4px #D6D6D6)',
        animation: ({ rand }) => `$tail 15s ease-in-out infinite, $falling 15s ease-in-out infinite`,
        animationDelay: ({ rand }) => `${Math.random() * 20}s`,
        transform: 'rotateZ(45deg)'
    },
    '@keyframes tail': {
        '0%': {
            height: 0
        },
        '30%': {
            height: '200px'
        },
        '100%': {
            height: 0
        }
    },
    '@keyframes falling': {
        '0%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(120vh)' }
    }
})
const Star = (props) => {
    const classes = useStyles(props)
    return (
        <div className={classes.star} />
    )
}

const Background = (props) => {
    const classes = useStyles(props)

    return (
        <div className={classes.backgroundContainer}>
            <div className={classes.starsContainer}>
                {[...Array(30)].map((_, idx) => <Star key={`${idx}-backgroundLineKey`} rand={Math.random()} idx={idx} />)}
            </div>
        </div>
    )
}
export default Background
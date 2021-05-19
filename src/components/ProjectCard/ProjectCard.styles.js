import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    cardContainer: {
        marginBottom: '0',
    },
    overlay: {
        transition: 'background-color 0.5s ease-out 0.4s',
        display: 'flex',
        padding: 0,
        '&:hover $cardBody': {
            visibility: 'visible',
            padding: '1rem',
            animation:
                props => props.isHorizontal ?
                    '$changeSizeHorizontal 0.5s forwards' :
                    '$changeSizeVertical 0.5s forwards',
        },
        '&:hover $cardBodyContent': {
            animation: '$showBodyContent 1s',
            visibility: 'visible',
            opacity: 1
        },

    },
    '@keyframes showBodyContent': {
        '0%, 30%': {
            visibility: 'hidden',
            opacity: 0,
        },
        '100%': {
            visibility: 'visible',
            opacity: 1
        }
    },
    '@keyframes changeSizeHorizontal': {
        '0%': {
            width: 0,
            height: '100%',
        },
        '100%': {
            height: '100%',
            width: '100%'
        }
    },
    '@keyframes changeSizeVertical': {
        '0%': {
            height: 0,
            width: '100%'
        },
        '100%': {
            height: '100%',
            width: '100%'
        }
    },
    '@keyframes resetHorizontal': {
        from: {
            height: '100%',
            width: '100%'
        },
        to: {
            height: '100%',
            width: 0
        }
    },
    '@keyframes resetVertical': {
        from: {
            height: '100%',
            width: '100%'
        },
        to: {
            height: 0,
            width: '100%'
        }
    },
    cardBody: {
        display: 'flex',
        alignItems: 'center',
        visibility: 'hidden',
        backgroundColor: 'rgba(1, 46, 64, 0.9)',
        transition: 'width 0s, height 0s, opacity 1s, visibility 0.4s, padding 0.5s',
        justifyContent: 'center',
        animation: props =>
            props.isHorizontal ?
                '$resetHorizontal 0.5s forwards' :
                '$resetVertical 0.5s forwards',

    },
    cardBodyContent: {
        height: '60%',
        width: '100%',
        color: '#FFFFFF',
        visibility: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        opacity: 0
    },
    cardLinks: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    mainLink: {
        cursor: 'pointer',
        color: 'rgba(1,46,64,1)',
        backgroundColor: '#f0f1f2',
        fontSize: '1.8rem',
        borderRadius: '2rem',
        padding: '0.5rem 1rem',
        transition: 'transform 0.2s',
        '&:hover': {
            transform: 'translateY(-5%)',
            background: 'linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%)',
            backgroundSize: '200% 200%',
            animation: '$animateBackground ease-in-out 5s infinite'
        }
    },
    '@keyframes animateBackground': {
        '0%': {
            backgroundPosition: '0% 0%'
        },
        '25%': {
            backgroundPosition: '100% 0%'
        },
        '50%': {
            backgroundPosition: '200% 0%'
        },
        '75%': {
            backgroundPosition: '100% 0%'
        },
        '100%': {
            backgroundPosition: '0% 0%'
        }
    },
    link: {
        color: '#FFFFFF',
        cursor: 'pointer',
        display:'flex',
        '& span':{
            marginLeft:'0.5rem'
        },
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    buttonMore: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: 'rgba(1, 46, 64, 0.6)',
        color: '#FFFFFF',
        cursor: 'pointer',
    },

})
import { createUseStyles } from 'react-jss'
const useGlobalStyles = createUseStyles({

    container: {
        height: '100vh',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    '@media (max-width: 768px)': {
        container: {
            height: 'auto',
            margin: '10% 0 '
        }
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '5%'
    },
    column: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        height: '100%'
    }

})
export { useGlobalStyles }
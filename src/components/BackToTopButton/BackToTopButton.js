import React from 'react'
import { createUseStyles } from 'react-jss'
import { scroller } from 'react-scroll'
import { ArrowUpCircleFill } from '@styled-icons/bootstrap/ArrowUpCircleFill'
const useStyles = createUseStyles({
    backToTopButton: {
        visibility: props => props.hidden === 'initial' ? 'hidden' : 'visible',
        position: 'fixed',
        bottom: '0',
        right: '0',
        marginBottom: '1rem',
        marginRight: '1rem',
        opacity: '0.6',
        animation: props => props.hidden ? '$fadeDown 0.5s forwards' : '$fadeUp 0.5s forwards',
        zIndex: 6
    },
    '@keyframes fadeUp': {
        from: { transform: 'translateY(200%)' },
        to: { transform: 'translateY(0)' }
    },
    '@keyframes fadeDown': {
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(200%)' }
    },
})
const BackToTopButton = ({ hidden }) => {
    const classes = useStyles({ hidden })
    return (
        <div className={classes.backToTopButton} onClick={() => scroller.scrollTo('Landing', { smooth: true })}>
            <ArrowUpCircleFill size='4rem' />
        </div>
    )
}
export default BackToTopButton
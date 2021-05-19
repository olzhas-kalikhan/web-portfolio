
import React, { useCallback, useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { scroller } from 'react-scroll'
import BackToTopButton from 'components/BackToTopButton/BackToTopButton';
import SocialLinks from './SocailLinks/SocialLinks'
import { openLinkInNewTab } from 'utilities/linkHelpers';
const useStyles = createUseStyles({

    navbarContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        padding: '1rem 0',
        position: 'fixed',
        backgroundColor: '#F0F1F2',
        zIndex: 3,
        boxShadow: '0 1px 4px rgba(150,150,150), 0 2px 4px rgba(180,180,180) ',
        transform: props => props.showNav ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.5s',
        '@media (max-width: 768px)': {
            display: 'none'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: '100%',
        }
    },

    navbar: {
        width: 'min(100%, 1280px)',
        padding: '0 10rem',
        display: 'flex',
        justifyContent: 'space-between'
    },
    '@keyframes showNav': {
        to: { transform: 'translateY(0)' }
    },
    link: {
        cursor: 'pointer',
        padding: '0.2rem 0.5rem',
        borderRadius: '2rem',
        transition: 'box-shadow 0.2s ease-in-out',
        '&:hover': {
            color: '#000',

            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px'
        },
    },
    contactLinks: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '15%',
    }
})

const NavBar = () => {
    const [showNav, setShowNav] = useState(true)
    const [hideBackToTopButton, setHideBackToTopButton] = useState('initial')
    const [scrollY, setScrollY] = useState(window.scrollY)
    const classes = useStyles({ showNav })
    const handleScroll = useCallback((event) => {
        const window = event.currentTarget;
        setHideBackToTopButton(window.scrollY === 0)
        setShowNav(scrollY > window.scrollY)
        setScrollY(window.scrollY)
    }, [scrollY])
    const handleMouseEnter = () => {
        setShowNav(true)
    }
    const handleMouseLeave = () => {
        setShowNav(false)
    }
    const scrollToView = (element) => {
        scroller.scrollTo(element, { smooth: true })
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])
    return (
        <>
            <div className={classes.navbarContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className={classes.navbar}>
                    <h5 className={classes.link} onClick={() => scrollToView('Portfolio')}>Portfolio</h5>
                    <h5 className={classes.link} onClick={() => scrollToView('Contacts')}>Contact Me</h5>
                    <h5 className={classes.link} onClick={() => openLinkInNewTab('https://drive.google.com/file/d/1UhO-ov4GBa1tp-HuDCtuQ3S0CT8qCj7q/view?usp=sharing')} >Resume</h5>
                    <SocialLinks width='15%' />
                </div>
            </div >
            <BackToTopButton hidden={hideBackToTopButton} />
        </>

    )
}
export default NavBar
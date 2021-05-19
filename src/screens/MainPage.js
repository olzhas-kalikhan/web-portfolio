import React from 'react'
import { createUseStyles } from 'react-jss'
import LandingView from './LandingView'
import PortfolioView from './PortfolioView'
import { Element } from 'react-scroll'
import Contacts from './Contacts/Contacts'

const useStyles = createUseStyles({
    mainContainer: {
        margin: 'auto',
        width: 'min(100%, 1280px)',
    }
})

const MainPage = () => {
    const classes = useStyles()
    return (
        <div className={classes.mainContainer}>
            <Element name='Landing'><LandingView /></Element>
            <Element name='Portfolio'><PortfolioView /></Element>
            <Element name='Contacts'><Contacts /></Element>
        </div>
    )
}
export default MainPage
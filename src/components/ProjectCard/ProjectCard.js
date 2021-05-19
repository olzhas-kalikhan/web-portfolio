import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Github, BoxArrowInUpRight } from '@styled-icons/bootstrap'
import { useStyles } from './ProjectCard.styles'
import { openLinkInNewTab } from 'utilities/linkHelpers'
const getMouseDirection = (event) => {
    let rect = event.target.getBoundingClientRect()
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top
    let width = rect.width
    let height = rect.height
    let side, coef = width / height
    if (x < width / 2 && x < (coef) * y && x < (coef) * -y + width) side = 'left'
    else if (x > width / 2 && x > (coef) * y && x > (coef) * -y + width) side = 'right'
    else if (y < height / 2 && y < (1 / coef) * x && (1 / coef) * -x + height) side = 'top'
    else side = 'bottom'
    return side
}
const isHorizontal = (side) => {
    if (side === 'left' || side === 'right') return true
    return false
}
const getAlignment = (side) => {
    let style = {}
    if (side === 'left') style['justifyContent'] = 'flex-start'
    if (side === 'right') style['justifyContent'] = 'flex-end'
    if (side === 'top') style['alignItems'] = 'flex-start'
    if (side === 'bottom') style['alignItems'] = 'flex-end'
    return style
}
const ProjectCard = ({ title, websiteScreens, github, demo, setPreviewData }) => {

    const [cardStyle, setCardStyle] = useState({})
    const [bodyStyle, setBodyStyle] = useState({})
    const classes = useStyles({ isHorizontal: bodyStyle })
    const handleMouseEnter = (event) => {
        let side = getMouseDirection(event);
        setCardStyle(getAlignment(side))
        setBodyStyle(isHorizontal(side))

    }
    const handleMouseLeave = (event) => {
        let side = getMouseDirection(event);
        setCardStyle(getAlignment(side))
        setBodyStyle(isHorizontal(side))
    }

    return (
        <Card
            className={classes.cardContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Card.Img variant='top' src={websiteScreens[0].default} />
            <Card.ImgOverlay className={classes.overlay} style={cardStyle}>
                {
                    <div className={classes.cardBody}>
                        <div className={classes.cardBodyContent}>
                            <h2
                                className={classes.mainLink}
                                onClick={setPreviewData}
                            >
                                {title}
                            </h2>
                            <div className={classes.cardLinks}>
                                <h5
                                    className={classes.link}
                                    onClick={() => openLinkInNewTab(demo)}
                                >
                                    <BoxArrowInUpRight size="1.4rem" color='#FFF' />
                                    <span>View Demo</span>
                                </h5>
                                <h5
                                    className={classes.link}
                                    onClick={() => openLinkInNewTab(github)}
                                >
                                    <Github size='1.4rem' color='#FFF' />
                                    <span>Source Code</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                }

            </Card.ImgOverlay>
        </Card >
    )
}
export default ProjectCard
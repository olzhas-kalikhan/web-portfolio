import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { createUseStyles } from 'react-jss'
import { useGlobalStyles } from 'theme/globalStyles'
import ProfileImage from '../prof-IMG.jpg'
const useStyles = createUseStyles({
    profileImage: {
        margin: '0 auto',
        borderRadius: '50%',
        width: '80%',
    },
    column: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
})



const LandingView = () => {
    const classes = useStyles()
    const globalClasses = useGlobalStyles()
    return (
        <Container className={globalClasses.container} fluid>
            <Row>
                <Col md={6} xs={12} className={classes.column}>
                    <div className={globalClasses.centerContent}>
                        <h1>Olzhas Kalikhan</h1>
                        <h3>Hi, my name is Olzhas and<br /> I am a Junior Web Developer</h3>
                        <h5>Full Stack development</h5>
                        <h5>HTML | CSS | JavaScript</h5>
                        <h5>ReactJS</h5>
                        <h5>NodeJS</h5>
                    </div>
                </Col>
                <Col className={classes.column} md={{ span: 6, order: 'last' }} xs={{ span: '12', order: 'first' }} >
                    <img alt='Profile' className={classes.profileImage} src={ProfileImage} />
                </Col>
            </Row >
        </Container>
    )
}
export default LandingView
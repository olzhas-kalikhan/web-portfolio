import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useGlobalStyles } from 'theme/globalStyles'
import MessageForm from './MessageForm'
import { createUseStyles } from 'react-jss'
import SocialLinks from 'components/SocailLinks/SocialLinks'
const useStyles = createUseStyles({
    socialLinks: {
        display: 'flex',
        justifyContent: 'space-around',
        '@media (max-width: 425px)': {
            flexDirection: 'column',
            marginLeft: '30%'
        },
    },

})
const Contacts = () => {
    const classes = useStyles()
    const globalClasses = useGlobalStyles()
    return (
        <Container className={globalClasses.container} fluid>
            <Row>
                <Col xs={12} className={globalClasses.header}><h3>Contact Me</h3></Col>
                <Col xs={12}>
                    <MessageForm />
                </Col>
                <Col xs={12} className={globalClasses.header}><h3>Or use links below</h3></Col>
                <Col xs={12} className={classes.socialLinks}>
                    <SocialLinks width='50%' displayTitles />
                </Col>
            </Row>
        </Container>
    )
}
export default Contacts
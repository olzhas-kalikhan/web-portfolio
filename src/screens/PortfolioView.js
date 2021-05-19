import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProjectCard from 'components/ProjectCard/ProjectCard'
import { projectList } from './Portfolio/projectList'
import { useGlobalStyles } from 'theme/globalStyles'
import ProjectPreview from 'components/ProjectPreview/ProjectPreview'

const PortfolioView = () => {
    const [previewData, setPreviewData] = useState(null)
    const globalClasses = useGlobalStyles()
    return (
        <Container className={globalClasses.container} fluid>
            <Row noGutters>
                <Col xs={12} className={globalClasses.header}><h3>Portfolio</h3></Col>
                {
                    projectList.map((project, i) => (
                        <Col key={`${i}-projectID`} md={4} xs={12}><ProjectCard {...project} setPreviewData={() => setPreviewData(project)} /></Col>
                    ))
                }
            </Row>
            <ProjectPreview hide={() => setPreviewData(null)} data={previewData} />
        </Container>
    )
}
export default PortfolioView
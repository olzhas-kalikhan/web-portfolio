import React, { useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { XCircle } from '@styled-icons/bootstrap/XCircle'

const useStyles = createUseStyles({
    ProjectPreveiwContainer: {
        visibility: props => props.visible ? 'visible' : 'hidden',
        position: 'fixed',
        right: '0',
        top: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(100,100,100, 0.8)',
        zIndex: 10,
        transition: 'visibility 0.5s'

    },
    ProjectPreview: {
        color: '#FFFFFF',
        width: '60%',
        height: '100%',
        backgroundColor: 'rgba(1, 46, 64, 0.9)',
        float: 'right',
        animationName: props => props.visible ? '$slidein' : '$slideout',
        animationDuration: '0.5s',
    },
    '@keyframes slidein': {
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0)' },
    },
    '@keyframes slideout': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(100%)' },
    },

    PreviewHeader: {

        padding: '1rem 4rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(1, 46, 64, 0.95)',
        height: '10%',
    },
    PreviewBody: {
        width: '90%',
        margin: 'auto',
        overflowY: 'scroll',
        height: '90%',
    },
    image: {
        margin: '1rem 0',
        boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
    }
})

const ProjectPreview = ({ data, hide }) => {

    const classes = useStyles({ visible: data !== null })
    useEffect(() => {
        document.body.style.overflow = data !== null ? 'hidden' : 'scroll'
    }, [data])
    return (
        <div className={classes.ProjectPreveiwContainer} onClick={hide}>
            < div className={classes.ProjectPreview} onClick={(e) => e.stopPropagation()}>
                {data !== null &&
                    <>
                        <div className={classes.PreviewHeader}>
                            <h2>{data.title}</h2>
                            <XCircle size='2rem' onClick={hide} />
                        </div>
                        <div className={classes.PreviewBody}>
                            {data.websiteScreens && data.websiteScreens.slice(1).map((screen, i) =>
                                <div key={`${i}-${data.screenDescriptions[i]}`}>
                                    <h3>{data.screenDescriptions[i]}</h3>
                                    <img alt={data.screenDescriptions[i]} className={classes.image} src={screen.default} />
                                </div>
                            )}
                        </div>
                    </>
                }
            </div>
        </div>
    )


}
export default ProjectPreview
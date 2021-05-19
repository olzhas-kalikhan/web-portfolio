import { createUseStyles } from "react-jss"
import { Linkedin } from '@styled-icons/bootstrap/Linkedin'
import { Github } from '@styled-icons/bootstrap/Github'
import { Facebook } from '@styled-icons/bootstrap/Facebook'
import { openLinkInNewTab } from "utilities/linkHelpers"
const linkList = [
    {
        title: 'Github',
        Icon: Github,
        link: "https://github.com/olzhas-kalikhan",
        color: '#333'
    },
    {
        title: 'LinkedIn',
        Icon: Linkedin,
        link: "https://www.linkedin.com/in/olzhas-kalikhan/",
        color: '#0e76a8',
        style: { borderRadius: '50% ' }
    },
    {
        title: 'Facebook',
        Icon: Facebook,
        link: "https://www.facebook.com/olzhas.kalikhan/",
        color: '#3b5998'
    },
]


const useStyles = createUseStyles({
    linksContainer: {
        display: 'flex',
        flexDirection: props => props.vertical ? 'column' : 'row',
        justifyContent: 'space-between',
        width: props => props.width,
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '0 0.5rem',
        transition: 'box-shadow 0.3s ease-in-out',
        borderRadius: '2rem',
        '&:hover': {
            color: '#000',
            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
        }
    },
    title: {
        marginBlock: 0,
        marginLeft: '0.5rem'
    }
})

const SocialLinks = (props) => {
    const classes = useStyles(props)
    return (
        <div className={classes.linksContainer}>
            {linkList.map(({ title, Icon, link, color, style }, i) =>
                <div
                    key={`${i}-socialLink`}
                    className={classes.link}
                    onClick={() => openLinkInNewTab(link)}
                >
                    <Icon
                        color={color}
                        size='1.4rem'
                        style={style && style}
                    />
                    {props.displayTitles && <h3 className={classes.title}>{title}</h3>}
                </div>
            )}
        </div>
    )
}
export default SocialLinks
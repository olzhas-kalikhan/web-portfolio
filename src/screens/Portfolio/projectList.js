import { importAll } from 'utilities/linkHelpers'
export const projectList = [
    {
        title: 'Web Portfolio',
        websiteScreens: importAll(require.context('img/Portfolio', false, /\.(png|JPE?G|svg)$/)),
        screenDescriptions: ['Landing Page', 'Projects Overview', 'Contact me page', 'Project Preview'],
        github: 'https://github.com/olzhas-kalikhan/olzhas-kalikhan.github.io',
        demo: 'https://olzhas-kalikhan.github.io/',
    },
    {
        title: 'Social Media App',
        websiteScreens: importAll(require.context('img/Smedia', false, /\.(png|JPE?G|svg)$/)),
        screenDescriptions: ['Preview', 'Sign In page', 'Sign Up page', 'Home page', 'Profile page', 'Photo Upload'],
        github: 'https://github.com/olzhas-kalikhan/social-media-app',
        demo: 'https://smedia-app.herokuapp.com/',
    },
    {
        title: 'Chat App',
        websiteScreens: importAll(require.context('img/PeppermintChat', false, /\.(png|JPE?G|svg)$/)),
        screenDescriptions: ['Login page', 'SignUp page', 'Chat view: original text', 'Chat view: translated text', 'Contact Search', 'Emotes'],
        github: 'https://github.com/hatchways/team-peppermint',
        demo: 'https://peppermint-chat.herokuapp.com',
    },
    {
        title: 'Speer assignment',
        websiteScreens: importAll(require.context('img/Expcon', false, /\.(png|JPE?G|svg)$/)),
        screenDescriptions: ['Landing page', 'Sound Page', 'Canvas Untouched', 'Canvas Cleared (by user)'],
        github: 'https://github.com/olzhas-kalikhan/speerio-frontend',
        demo: 'https://expcon-assignment.netlify.app/',
    },
    {
        title: 'Weather Forecast',
        websiteScreens: importAll(require.context('img/WeatherForecast', false, /\.(png|JPE?G|svg)$/)),
        screenDescriptions: ['Location Search', 'Weather Forecast view'],
        github: 'https://github.com/olzhas-kalikhan/weather-forecast-app',
        demo: 'https://weather-forecast-olzh.netlify.app/',
    },
    {
        title: 'Card Component',
        websiteScreens: importAll(require.context('img/CardComponent', false, /\.(png|JPE?G|svg)$/)),
        screenDescriptions: ['Card Component: frontend mentor challenge'],
        github: 'https://github.com/olzhas-kalikhan/card-component',
        demo: '#',
    },
]
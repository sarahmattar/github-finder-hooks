# github-finder-hooks

This is an application that queries the GitHub API and displays search results and information about individual users such as their username, profile picture, followers, and repositories. It is a tutorial app from Brad Traversy's UDEMY course, [Modern React Front to Back](https://www.udemy.com/course/modern-react-front-to-back/).

Brad walked us through a step by step refactor of the [github-finder-props-state](https://github.com/sarahmattar/github-finder-props-state) version of the app, taking us from fetching data via a standard API call to GitHub, to creating an entire context for our API calls. It was an apples to apples refactor of props and state to hooks and context, which gave me a solid foundation on which to evaluate and compare the two. The final version is deployed on Netlify [here](https://practical-yalow-85010e.netlify.com/). 

### Technologies and APIs Used

GitHub API - querying GitHub users, user information, and repositories. 

Create-React-App - a simple setup for scaffolding a React client. 

FontAwesome - a library of icons passed in as props and then embedded with [@FortAwesome's](https://github.com/@fortawesome) `<FontAwesomeIcon/>` component. 

Netlify - a cloud based platform for app and website hosting. 

### Installation Instructions

This project uses Yarn for package management. To install dependencies, please run `yarn install`. 

To launch the app in development mode , please run `yarn dev`. 

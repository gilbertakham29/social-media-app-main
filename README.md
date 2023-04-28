# Build and Deploy a Full Stack Social Media App 

## Packages used
- react-firebase-hooks
- react-router-dom
- react-hook-form

## Features to add
1. Email verification
2. Being able to follow other users (and customize home feed based on followed users)
3. Firebase Auth Security Rules (to secure write access)
4. Responsive Design (for mobile)
5. Change all "Loading..." text indicators to more aesthetic skeletons
6. Use a library like "react-query" to optimize and reduce reads with cache (e.g. changing pages causes all avatar images to refresh)
7. Use count() and Firebase indexes to reduce billed read counts (instead of using fetching all documents and using Javascript's Array.length to count number of likes, comments, posts, etc)
8. Possibly move to NextJS (but NextJS 13 is a huge mess right now)
9. Better protected routes: Make use of the "next=?" prop
10. Better storage validation and optimization (using serverless functions to compress and upload profile picture files)
11. Auth optimization: Store user to localStorage to reduce auth user loading time
12. Deploying to Hostinger: Remember .env vars

- Deploy to Vercel - https://social-media-app-main.vercel.app/register


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!





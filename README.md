Problem Statement

Stocks page

1. Display a table listing the symbol, name and category for each instrument Provide a search box that fuzzy searches 
the symbol and name and filters the list of stocks shown in the table

2. On clicking any symbol, user must be redirected to quotes page for that symbol (see below)

3. For this page, load data from /instruments API (see 'Input API Details' section below)


Quotes page
1. For the selected instrument, show the list of quotes

2. The quotes must be sort-able by timestamp ascending or descending

Used Libraries

1. Fontawesome for the svg icons
2. React router to render the route /quotes/:symbol


In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


Potential Improvements:
1. Extracting the error boundaries for the generic errors in Stocks and Quotes page
2. Adding the Sass preprocessor for maintaining, scaling and increase the readability of the css framework of the application. Using BEM methodology is good option
3. Extracting the router config for the root component for the router scalability

## Distrelec Technical Test - Front End Engineer

## Constuct An Improved Version Of A Carousel Component 

Using the JSON data source provided we would like you to construct a new and improved version of the 'Related Products' carousel component. An example of this component can be found here:
 
https://www.distrelec.biz/en/arduino-mkr-wifi-1010-arduino-abx00023/p/30117212 - Add this product to your cart and navigate to the cart page. Here you will find the related products carousel at the bottom of the page.

## Essential Requirements
* Clean, Semantic HTML5 - Must Validate Using A Validation Service Such As - https://validator.w3.org/
* Use SASS As A CSS Pre-Processor
* Responsive Using The Mobile First Approach
* Publish To A GitHub / BitBucket Repository With Regular Commits
* All Source Code Should Be In The ./src Folder With Only The Production Code Built Into ./dist

## Desirable Requirements
* Use Of BEM To Structure CSS
* Use Of A Task Runner Such As Gulp Or Grunt - You Should Use This For Compiling, Linting And Minifying CSS / JS
* Use Of Vue.js or similar framework to build the data call and slider functionality


## Project specification
It has been built using the command npx create-react-app. In order to run this app, please install the npm package first. It uses react-testing-library for creating snapshot tests. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### `npm test`

Launches the test runner in the interactive watch mode.\



## Space to grow
Given the limited time, this project could have been improved by taking out the logic from the component "Slider" and passing it into its own utilify folder where the functions could be called. Definitely, it would then have a set of functional tests to ensure the logic works as expected. In order to avoid the use of any UI frameworks, the "Shop now" button doesn't look at it's best and could have been visually and functionally improved. Definitely, the slider could be improved by creating a loop of infinite slides, therefore avoiding the white space that is currently on desktop version and working on the bisual aspects of the carousel according to the whole website's theme. Sass styling file would need to have jest tests too. 

Instructions for getting Bootstrap to compile to bundle

Install bootstrap through npm
`npm i bootstrap`
Install bootstrap dependencies jquery and popper.js through npm
`npm i jquery popper.js`
Install loaders etc
`npm install sass-loader sass webpack --save-dev`
`npm install --save-dev postcss-loader postcss`
`npm i autoprefixer`
Include bootstrap's JS in entry point (index.js)
`import 'bootstrap'`

# Create custom scss file if you want to override bootstraps variables

    # custom.scss
    # //custom rules here

# Import custom file into main scss file, followed by bootstrap

    # index.scss
    # @import "custom";
    # @import "~bootstrap/scss/bootstrap";

Set up webpack.config.js similar to what is found [here](https://getbootstrap.com/docs/4.0/getting-started/webpack/)
\*\*\* IMPORTANT
having the plugins key under the postcss-loader options throws errors and fails compilation. removing it for now works fine.
Putting this configuration into postcss.config.js with the following works to the same effect (i think)
`module.exports = { plugins: [ require('autoprefixer') ] }`

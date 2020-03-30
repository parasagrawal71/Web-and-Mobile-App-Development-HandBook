Q) What is the --save option for npm install?   
A) As of npm 5.0.0, installed modules are added as a dependency by default, so the --save option is no longer needed.   

Before version 5, NPM simply installed a package under node_modules by default. When you were trying to install dependencies for your app/module, you would need to first install them, and then add them (along with the appropriate version number) to the dependencies section of your package.json.   

The --save option instructed NPM to include the package inside of the dependencies section of your package.json automatically, thus saving you an additional step.   

https://stackoverflow.com/questions/19578796/what-is-the-save-option-for-npm-install 

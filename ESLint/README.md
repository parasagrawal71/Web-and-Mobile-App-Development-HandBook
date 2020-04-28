This folder contains "Notes" for ESLint.   


There are two files .eslintrc.json and .prettierrc.   
Update the new rules in eslintrc and prettierrc files with time to get consistent code styling, etc.   
Also, Update the dependencies to be installed in the command below.   

FOLLOW this:-   
Install required dev dependencies:-   
// npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier   
// npx install-peerdeps --dev eslint-config-airbnb   
Then, copy .eslintrc.json and .prettierrc files from this ESLint root folder to the project root folder.   
Add .eslintignore file to the project root folder to ignore files from ESLinting.   
Add "lint": "eslint ./ --fix" under scripts in package.json file(Now, Run 'yarn lint' in root folder to fix ESLint errors and warnings).   

To Add husky, "npm install husky --save-dev" in the root folder.   
Add following in the package.json file to run Linting before commit everytime:-   
<pre>
"husky": {
    "hooks": {
      "pre-commit": "yarn lint"
    }
  },
</pre>

To add eslint globally, use command "npm i -g eslint"(But don't use this, we are using everything locally).   
To get rid of:- ESLint couldn't find the config "airbnb" to extend from, Run "yarn install or yarn"    
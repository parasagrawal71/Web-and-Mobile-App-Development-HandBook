__METHOD 1 :-__
1. Create a file .env in the project root folder where .gitignore, etc files resides.   
2. Add NODE_PATH=src/ in .env file created.   
3. Now, use like this,   
import Button from "components/Button";   
4. Restart the application using yarn start or npm run start. It will work now.   

NOTE:-   
1. __Don't name any folder inside src which is already a package name inside node_modules__.   
For example, redux since it is a package name inside node_modules if installed.   
2. ESLint is throwing errors:-   
Unable to resolve path to module 'components/header/Header'. eslint(import/no-unresolved)   
Also sometimes, components/Button` import should occur before import of `../../components/header/Header` eslint(import/order)   


Add following code in your .eslintrc.json file to solve eslint errors:-   
<pre>
"settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
 },
</pre>

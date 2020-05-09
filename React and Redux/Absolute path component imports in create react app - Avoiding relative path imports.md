__METHOD 1 :-__   
1. Add jsconfig.json file in project root folder where .gitignore, etc files resides.   
2. Add following code in jsconfig file:-   
<pre>
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
</pre>
3. Use like this, import Header from "components/header/Header";   
4. Add following code in your .eslintrc.json file to solve eslint errors:-   
<pre>
"settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
 },
</pre>
Reference Link:- https://medium.com/hackernoon/absolute-imports-with-create-react-app-4c6cfb66c35d (Use Incognito mode if not visible)   




__METHOD 2 :-__   
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

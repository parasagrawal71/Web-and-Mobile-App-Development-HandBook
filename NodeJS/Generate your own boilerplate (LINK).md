https://dev.to/leopold/generate-your-web-app-boilerplate-like-create-react-app-does-301p
Few corrections in the above link:-
1. Keep name in package.json as "create-node-api-app" and same for boilerplate name

2. Create bin/createNodejsApp.js file

   Get createNodejsApp.js file from node-express-boilerplate

3. Add following line in package.json 
  "bin": "bin/createNodejsApp.js"

4. Publish project
   npm publish --access public

   Before publishing
   npm login
   Reference:- https://zellwk.com/blog/publish-to-npm/ 

5. Unpublish if required
   npm unpublish -f <package-name>

6. cd ~
   npx create-node-api-app <new-project-name>

   create-node-api-app is the name in package json 

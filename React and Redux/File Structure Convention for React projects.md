Folder/File Structure Convention that I follow(Modify and Improve it with time):-   
<pre>
project-root-folder
└── src
    ├── index.js
    ├── index.css // This contains all font supports(@font-faces)
    ├── components
    │   └── componentName
    │		├── components
    │		│	├── ComponentName.js
    │		│	├── ComponentName.css
    │		│	├── ComponentName.test.js
    │		│	└── ComponentName.scss
    │       ├── ComponentName.js
    │       ├── ComponentName.css
    │       ├── ComponentName.test.js
    │       └── ComponentName.scss
    │ 
    ├── subComponents // These components are such components that very genric such as button, popup(it imports button), toast, searchBox, etc.
    │   └── componentName
    │       ├── ComponentName.js
    │       ├── ComponentName.css
    │       ├── ComponentName.test.js
    │       └── ComponentName.scss
    │
    ├── pages
    │	├── app
    │	│   ├── App.js
    │	│   ├── App.css
    │	│   └── App.test.js
    │   └── [pageName]Page
    │	    ├── [PageName]Page.js
    │	    ├── [PageName]Page.css
    │       ├── [PageName]Page.test.js
    │       └── [PageName]Page.scss
    │
    ├── services/apis
    │   ├── handleError.js
    │   ├── httpConstants.js
    │   └── apiProviderName.js or specificName.js [eg, usersApi.js]
    │
    ├── redux  
    │   ├── actions
    │   │   ├── index.js
    │	│   └── types.js
    │   ├── reducers
    │   │   ├── index.js
    │   │   └── specificReducerName.js [eg, authReducer.js]
    │	└── globalHook
    │		├── index.js
    │		└── actions.js
    │
    ├── contexts
    │   └── SpecificContext.js [eg, LanguageContext.js]
    │
    ├── routes
    │   ├── history.js
    │   ├── Routes.js
    │   └── RouteWrapper.js
    │
    │
    ├── utils // This is a folder full of helper functions that are used globally.
    │   ├── commonStyles
    │   │   ├── colors.scss
    │   │   ├── flex.scss (Use mixins inside)
    │   │   └── specificStylesGroupName.css
    │   ├── constants
    │   │   ├── clientUrl.js           
    │   │   └── specificConstantsGroupName.js
    │	├── functions
    │   │   ├── index.js
    │   │   └── specificFunctionsGroupName.js   
    │   ├── queries
    |   │   └── index.js 
    │
    │
    ├── assets    
    │   ├── fonts   
    │   ├── icons 
    │   ├── jpg // This contains jpg/jpeg file format. 
    │   ├── jsons
    │   ├── png
    │   ├── svg  
    │   ├── [anyAssest]
    |   │   
    │


​	
 ├──  └──  │
</pre>

__Some Points to keep in mind:-__
 * Capitalize Component names, Page names and App files.   
 * Function names should start with lowercase letter.   

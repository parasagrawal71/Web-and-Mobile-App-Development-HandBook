Folder/File Structure Convention that I follow(Modify and Improve it with time):-   
<pre>
project-root-folder
└── src
    ├── index.js
    ├── index.css // This contains all font supports(@font-faces)
    ├── components
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
    │   └── pageName
    │	    ├── PageName.js
    │	    ├── PageName.css
    │       ├── PageName.test.js
    │       └── PageName.scss
    │
    ├── services/apis
    │   ├── handleError.js
    │   ├── httpConstants.js
    │   └── apiProviderName.js
    │
    ├── redux  
    │   ├── actions
    │   │   ├── index.js
    │	│   └── types.js
    │   └── reducers
    │       ├── index.js
    │       └── specificReducerName.js [eg, authReducer.js]
    │
    ├── utils // This is a folder full of helper functions that are used globally.
    │   ├── constants
    │   │   ├── index.js           
    │   │   └── specificConstantsGroupName.js
    │	├── functions
    │   │   ├── index.js
    │   │   └── specificFunctionsGroupName.js
    │   ├── commonStyles
    │   │   ├── index.css
    │   │   ├── flex.css
    │   │   └── specificStylesGroupName.css
    │   ├── colors
    |   │   └── index.js   
    │   ├── queries
    |   │   └── index.js 
    │   
    │
    ├── contexts
    │   └── SpecificContext.js [eg, LanguageContext.js]
    │
    ├── assets    
    │   ├── fonts 
    │   ├── jsons
    │   ├── png 
    │   ├── jpg // This contains jpg/jpeg file format.
    │   ├── svg   
    │   ├── icons  
    │   ├── [anyAssest]
    |   │   
    │


​	
 ├──  └──  │
</pre>

__Some Points to keep in mind:-__
 * Capitalize Component names, Page names and App files.   
 * Function names should start with lowercase letter.   

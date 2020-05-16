Folder/File Structure Convention that I follow(Modify and Improve it with time):-   
<pre>
project-root-folder
└── src
    ├── index.js
    ├── components
    │   └── componentName
    │       ├── ComponentName.js
    │       ├── ComponentName.css
    │       ├── ComponentName.test.js
    │       └── ComponentName.scss
    │ 
    ├── pages/screens
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
    ├── utils/helpers // This is a folder full of helper functions that are used globally.
    │   └── functions.js
    │
    ├── contexts
    │   └── SpecificContext.js [eg, LanguageContext.js]
    │
    ├── assets
    │   ├── constants
    │   │   ├── index.js           
    │   │   └── specificConstantsGroupName.js
    │   ├── fonts 
    │   ├── jsons
    │   ├── img // This contains png, jpg, etc file formats except svg.
    │   ├── svg   
    │   ├── icons     
    │   ├── commonStyles
    │   │   ├── flex.css
    │   │   └── index.css
    │   ├── colors
    |   │   └── index.js
    │   ├── queries
    |   │   └── index.js    
    │   ├── [anyAssest]
    |   │   └── index.js  
    │

​	
 ├──  └──  │
</pre>

__Some Points to keep in mind:-__
 * Capitalize Component names, Page names and App files.   
 * Function names should start with lowercase letter.   

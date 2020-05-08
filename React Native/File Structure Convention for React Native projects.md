Folder/File Structure Convention that I follow(Modify and Improve it with time):-   
<pre>
project-root-folder
└── src
    ├── index.js
    ├── components
    │   └── componentName
    │       ├── ComponentName.js
    │       └── ComponentNameStyles.js
    │ 
    ├── pages/screens
    │	├── app
    │	│   ├── App.js
    │	│   ├── App.css
    │	│   └── App.test.js
    │   └── pageName
    │	    ├── PageName.js
    │	    └── PageNameStyles.js
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
    │   └── index.js
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
    │   │   └── index.js
    │   ├── colors
    |   │   └── index.js
    │   ├── queries
    |   │   └── index.js    
    │   ├── [anyAssest]
    |   │   └── index.js  
    │

	
 ├──  └──  │
</pre>

__Some Points to keep in mind:-__
 * Capitalize Component names, Page names and App files.   
 * Function names should start with lowercase letter.   

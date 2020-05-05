Folder Structure Convention that I want to follow:-(Modify and Improve it with time)   
<pre>
project-root-folder
└── src
    ├── index.js
    ├── components
    │   └── componentName
    │       ├── componentName.js
    │       ├── componentNameStyles.css
    │       ├── componentNameTest.js
    │       └── componentNameStyles.scss
    │ 
    ├── pages/screens
    │	├── App
    │	│   ├── App.js
    │	│   ├── App.css
    │	│   └── App.test.js
    │   └── pageName
    │	    ├── pageName.js
    │	    ├── pageNameStyles.css
    │       ├── pageNameTest.js
    │       └── pageNameStyles.scss
    │
    ├── services/apis
    │   └── apiProviderName.js
    │
    ├── actions
    │   ├── index.js
    │   └── types.js
    │
    ├── reducers
    │   ├── index.js
    │   └── specificReducerName.js [eg, authReducer.js]
    │
    ├── utils/helpers // This is a folder full of helper functions that are used globally.
    │   └── index.js
    │
    ├── assets
    │   ├── constants
    │   │   ├── index.js           
    │   │   └── specificConstantsGroupName.js
    │   │
    │   └── images
    │

	
 ├──  └──  │
</pre>

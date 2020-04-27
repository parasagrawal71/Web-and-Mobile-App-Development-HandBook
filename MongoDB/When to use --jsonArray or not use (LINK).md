https://stackoverflow.com/questions/40524173/mongodb-import-error-failed-error-reading-separator-after-document-1-bad-js   


Since you included the option --jsonArray, you must provide an array: [{"a":"b"}].   
If you provide a single document, do not use the option --jsonArray.   
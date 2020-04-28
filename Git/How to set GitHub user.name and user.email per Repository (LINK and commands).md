https://crunchify.com/how-to-set-github-user-name-and-user-email-per-repository-different-config-for-different-repository/   

* The command "git config --list" will list the settings. There you should also find user.name and user.email.   
(This lists the global settings even I have changed email by using following command it's showing same email as earlier. Though email is changed in .git/config file).   

* Execute commands:   
git config user.email "email@domain.com"   
git config user.name "Name Surname"  
 
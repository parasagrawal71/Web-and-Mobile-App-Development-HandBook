__Branching Model that I follow:-__   
* The main branches:-   
	- master   
		- protected, Noone can commit & push in master even I cannot commit. Only Merging of any branch into master is possible.   
		- Merge only develop to master, for convention sake. Release and Hotfix branch can be merged into master.     
		- I can only directly merge any branch into master and Others have to raise a PR, that I will approve after reviewing.    
	- develop   
		- protected, Noone can commit & push in develop even I cannot commit. Only Merging of any branch into develop is possible.        
		- I can only directly merge any branch into develop and Others have to raise a PR, that I will approve after reviewing.   

* Supporting branches:-   
	- Feature branches   
		- May branch off from: develop   
		- Must merge back into: develop   
		- Branch naming convention: anything except master, develop, release-*, hotfix-*, or bugfix-*   
		- Must be aggregrated under feature/   
	- Release branches   
		- May branch off from: develop   
		- Must merge back into: develop and master   
		- Branch naming convention: release-*   
		- Must be aggregrated under release/   
	- Hotfix branches   
		- May branch off from: master   
		- Must merge back into: develop and master   
		- Branch naming convention: hotfix-*   
		- Must be aggregrated under hotfix/   
	- Bugfix branches   
		- May branch off from: develop   
		- Must merge back into: develop   
		- Branch naming convention: bugfix-*   
		- Must be aggregrated under bugfix/   
	- Merge branches   
		- Any two branches to be merged   
		- Branch naming convention: branch1-and-branch2   
		- Must be aggregrated under merge/   

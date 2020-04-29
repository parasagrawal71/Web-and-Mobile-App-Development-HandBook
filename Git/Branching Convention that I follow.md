__Branching Model that I follow:-__   
* The main branches:-   
	- master(protected, I can only commit & push in this branch and merge any branch into master)   
	- develop(protected, I can only commit & push in this branch and merge any branch into develop after review)   

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

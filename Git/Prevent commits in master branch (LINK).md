https://stackoverflow.com/questions/40462111/git-prevent-commits-in-master-branch   


To enable a hook script, put a file in the hooks subdirectory of your .git directory that is named appropriately (without any extension) and is executable.   
The type of script is file in Windows.   

Add following code in pre-commit file(with no extension) in .git/hooks directory:-   
<pre>
#!/bin/sh

branch="$(git rev-parse --abbrev-ref HEAD)"

if [ "$branch" = "master" ]; then
  echo "You can't commit directly to master branch"
  exit 1
fi
</pre>

Does it work locally only?
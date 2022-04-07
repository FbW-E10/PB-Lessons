# Github branches workflow
![enter image description here](https://gaboesquivel.com/img/2018/05/github-flow.png) 
### Develop a feature

We develop our features in branches.

This way we can make sure, our work is isolated from the work of others. So we actually do not change the main project right away when we do changes.


#### Pull Requests, Merging & Merge Conflicts

Once we finish our branch, we commit our changes, push the branch upwards and create a so called "Pull Request" on GitHub. 
![enter image description here](https://opensource.com/sites/default/files/uploads/compare-and-pull-request-button.png)
GitHub checks then automatically if that branch could be integrated into the "mainline" of our project (=> the "main" branch - earlier called "master" branch)

In case GitHub detects NO conflicts with the existing project code, it will allow us to merge our feature directly into the main branch. And then the feature became part of the project code. 
![enter image description here](https://docs.github.com/assets/cb-13037/images/help/pull_requests/pullrequest-mergebutton.png)
In case GitHub detects conflicts, it will NOT allow the automatic merging of the branch. For good reasons. It prevents accidental overwriting of others peoples work this way.

The typical scenarios where this happens: Two people have made changes on the same files - at approximately the same lines! Git is smart and can often detect if you made changes at different parts of a file. Then it will smartly merge these file changes together and there will not be a conflict. 

But if you did changes at the same code block(s), if will have a conflict. It doesn't know which change of which person to choose... 

In that case you have to resolve the conflicts manually. I suggest you use the online editor of GitHub in case you are unused to resolve conflicts from the terminal. GitHub supports solving merge conflicts actually quite nicely (see instructions in section "Bring branches together" below)

When people do NOT do changes on the same files, by splitting their work thoughtfully, conflicts typically rarely happen. So it is a good practice to organize our work in a way, that we touch same files rarely (but sometimes it can hardly be avoided, e.g. if all team members include their new components into App.js)

#### Branch creation

Okay. Let's start by creating a branch for our new feature.

First we make sure, we start off with our branch from the LATEST stable version of our project. Which always should be found in the master branch.

```
git checkout main // always start your branch from the latest main
git fetch // make sure you have the latest version of main
git pull // in case master has updates
git checkout -b yourMassiveNewFeature main // create a new branch for your feature
// now code your stuff on the branch in vscode
```

#### Branch pushing

Once you're done with your branch and tested if everything works, you can bring it online

```
git branch // making sure you are still on your branch and not on main
git status // make sure you do not accidentally add something that you do not wanted to add 
git add . // or git add <dirname / filename> for every dir / file to have full control on adding
git commit -m "I did this and that here, yeah"
git push // copy the line that is created and execute it on the terminal
```

### Bring branches together

After we pushed our branch to the GitHub repository, we can now try to integrate it into our main project line.


- Go to the GitHub repo
  - it should tell you right away that your branch was pushed

- Click the button "Compare & Pull request" for your branch
  - alternative: go to the uploaded branch and hit "Create pull request"

- Check if it says "Able to merge" 
  - if so: Create pull request and...
  - merge right away!

- If you receive "Conflicts - cannot merge" 
  - create the pull request anyway!

- In the created Pull request you now should see a section "Conflicts" instead of "Merge"
  - Check the conflicts listed by clicking the "Resolve conflicts" button
  - You now get into an online editor to resolve the conflicting code blocks 
  - On the left side you see all conflicting files. Click through them one by one
  - Resolve the conflicts line by line in the online editor
  - At the end: Mark conflicted as resolved by clicking the "Resolved" button
  - Repeat the steps for every file
  - Once all files are done
    - Click the "Commit merge" button 
    - this will now update your pushed branch so it has no conflicts anymore with master

- In case you do not know which changes to take...
  - Make a comment in the pull request to start a discussion
  - Ideally: Resolve the issues in the team together, in case of any doubts
    - Or: Slack just person that you are "conflicting with" (hopefully just in code ;-))

- All conflicts resolved
  - Now after you done "Commit merge" in the editor, you will get back to the pull request
  - You should be able to merge the branch now into main
  - The green button "Merge" should appear
  - Perform the merge

DONE! Congratulations!


#### Update local main

Go into your terminal and update your local main, so it has the remote changes:
```
git checkout main
git pull
```

Finished.


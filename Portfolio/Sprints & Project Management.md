<p align="center">
  <img width="474" height="296" src="https://user-images.githubusercontent.com/61804643/114400744-2f8d7280-9b9a-11eb-8926-b2f2b3ef0d0f.jpg">
</p>   

#### Sprints & Project Management 

At the onset of this project the team was investigating various socially important campaigns or messages that could be promoted using a single page app.  During this period extensive use was made of Microsoft Teams as a useful focal point for group meetings. 
Initially ideas where logged in an simple  [ideas text](https://github.com/aaronsharma/SEGP/blob/ideas/ideaList.txt) file on the **ideas branch** of the github repo.   At the same time an  **admin branch** was created to hold records of [meetings ](https://github.com/aaronsharma/SEGP/blob/admin/meetingsLog.txt)
meetings etc, as this was felt to be a good way to keep creative and business aspects apart and easier to manage.
Later Google Sheets was employed to create a pros and cons list for each idea - the advantage Google Sheets gave us was that it was easy to share and edit, and was more private than the university based Microsoft Teams account.
At this stage some early paper-prototypes were developed to look at the potential of some designs.  

![prevWorkMontage](https://user-images.githubusercontent.com/61804643/114706696-3397cc80-9d21-11eb-84c2-3ce0b27e39da.jpg)
<p align="center">
  Picture: Google sheets document and early paper-prototype designs for ideas that were not developed
</p>

In retrospect maybe too much time was spent on this part of the process.  In part this was caused by the small size of the project team, and the difficulty in everybody being available at the same time for discussions.  Whilst the project ideas and concepts were progressing on line (see the ideas branch etc), it was the decision making process that was letting us down.
Eventually it was agreed that a majority decision taken by people at meetings would be implemented, as waiting for a full concensus was causing delay.  

However every member of the group agreed on the Glacier View project as the one to implement.  Whilst it is true that other ideas had generated some excitement from the lecturers/TAs e.g. Breathable, the team decided to take a pragmatic viewpoint.
Some ideas could be discounted just from the Pros and Cons [document](https://github.com/aaronsharma/SEGP/blob/ideas/Team%2016%20Pros%20and%20Cons%20-%20Sheet1(2).pdf).  Others had their champions, eg Local Music and the Homeless Sim.  Ultimately the decision process had to take in the following factors:
- The size of the team.  With four people the workload distribution was going to be fairly heavy.
- The creation of the team, as part of the unit system, meant that we had no self-identifying coders.
- Geographically we were widespread - not everybody was at Bristol.

We therefore took the view that is was better to create a basic project that was self-contained and fairly small in scope, yet could have a big impact.  It was also an idea that once the basic version was working, lended itself to further adaptation and development.  As our confidence and ability gew so to could the scope.

The other ideas, e.g. Breathable were more complex, involving maps, gps positioning, communications etc, any one of which could bog down a small team.   Glacier View built on the workshops that we had been taught as part of the unit, and therefore felt that we could reach a prototype stage sooner, and from thereon in we could develop the look, feel and capabilities of it.

#### Communications

Of greatest impact, caused by the Covid restrictions in force throughout the country, was the geographical spread of the team members.  Communicatios were good, but having everybody available at the same time did prove somewhat harder.  In the previous pre-Covid year, Nathan had been part of the same unit.  Then communications were greatly enhanced and easier - you would see team members almost daily, could discuss elements of the projects in beaks between lectures, and when it came to sprints and brainstorming, we would book rooms within the university so we had a focal point where we could all meet and work together. Arguably this made the whole process easier.

In lieu of this we had to exploit as fully as possible the online alternatives.
The group made most use of Microsoft Teams, as this was povided by the university and made an easy to use central meeting place. However as the Teams environment was available to view for anyone on the unit, we did not use that for sending files.  Here email was the priority, with the files also being stored on the Github. As previously discussed we had an Admin and Ideas branches on the repo for these purposes.
Email was preferable as it was direct and wouldn't involve each team member needing to git pull.

Where documents needed joint access, as previously mentioned, Google Sheets and Docs were used, with the final versions being stored on the repo.

For more immediate interaction, the team initially used Discord as a means for communication.  It has the advantage of working on mobile platforms and informing the user that there was a message. It had also been popular with this years' cohort as a means of quickly disseminating information. Unfortunately this proved to be its downfall, as the daily quantity of notificatons prooved too much.  This lead us to the final system employed, a facebook messenger group.  Private and with more manageable notifications this proved to be more successful in getting fast and urgent communications across.

- Group working methods used (for instance did your team choose a  particular style of agile? what communication channels did you use?)
- Discussion of team roles (specialisation is ok!). A summary of  individual contributions (note: this is for reference, your team will  all receive the same grade!).
- Documentation of your sprints, including both high level overview,  timeline, and selected highlights that were critical points in the  project (remember to show the users stories implemented in each sprint). We expect a summary of meeting logs (including for instance apologies  for absence etc)

#### Git Hub

We evolved a mixture of fairly sophisticated and yet careful use of the git repo.

<p align="center">
  <img height="333" src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/gitpic.jpg">
</p>  
<p align="center">
  Picture: the github repo as of April 2021
</p>

  

The sophistication came from the creation of:
- **Admin branch** which would handle the project administration side of things, meeting logs, briefings etc
- **Ideas branch** where ideas and concepts could be explored

Neither of these branches would be merged in to anything else, but stand in isolation as in the real world they'd be company level branches, totally removed from any client facing branches.

The careful side is evidenced from each member of the team having their own branch to develop within - and from there to push/merge onto the develop branch.

From there it was a standard pattern of having a build branch for the penultimate step before launching the current working version to main.

It should be noted the **main branch** also holds the project report and the supporting portfolio folder, which contains the contents you are now reading.

When it came to **continuous development** there was some confusion in the group at first. At first it was not certain if the main branch was supposed to contain the project that was being developed in the unit worksheets - and if so, whose project it should be (as we were all working on our own individual projects as part of the unit at that time). Initially, by default, we had the project that Aaron, who created the initial commit/repo was working on.
Further confusion resulted from the fact that each member was at various stages in the worksheets, and so might undo something another member had worked on.  
Once we realised that the repo was supposed to have a continuous version that the client could see, we pushed a not fully working version on to Develop - and later replaced that with a version that met the worksheet criteria.
It may be that the taught element of the unit needs to push more attention on the continuous development aspect, and to offer guidance on how to work on the same taught elements within one repo.

From this confusion however, Shiruo developed the majority of the front end within her branch, with Fenner running the backend development in parallel within his branch. It was then envisaged that these would be merged in Develop before looking at moving to Main.

- Team use of Git, how your team used continuous integration / continuous deployment. Streamlining of workflow throughout.

- Team use of Git, how your team used continuous integration / continuous deployment. Streamlining of workflow throughout.

#### 


## Back to:

## [System Integration & UX](https://github.com/aaronsharma/SEGP/blob/main/Portfolio/System%20Integration%20%26%20UX.md)


## Forward to:

## [Evaluation & Conclusion](https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Evaluation%20%26%20Conclusion.md)

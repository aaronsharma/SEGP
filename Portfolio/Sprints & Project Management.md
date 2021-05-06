
#### Sprints & Project Management 

[1. Introduction to Project Management](#1-introduction-to-project-management)

[2. Sprints](#2-sprints)
the use of User stories in sprints, with a discussion on documentation, timeline and selected highlights

[3. Stretch Goals](#3-stretch-goals)
how the sprints would have developed over a longer time-scale

[4. Communications](#4-communications)
the use of communication channels during Covid

[5. Team Roles](#5-team-roles)
summary of how the project was broken down

[6. Working Methods](6-working-methods)
use of agile

[7. Git Hub](#7-git-hub)
how we devised and implemented a git hub structure


#### 1. Introduction to Project Management

At the onset of this project the team was investigating various socially important campaigns or messages that could be promoted using a single page app.  During this period extensive use was made of Microsoft Teams as a useful focal point for group meetings. 
Initially ideas where logged in an simple  [ideas text](https://github.com/aaronsharma/SEGP/blob/ideas/ideaList.txt) file on the **ideas branch** of the github repo.   At the same time an  **admin branch** was created to hold records of [meetings ](https://github.com/aaronsharma/SEGP/blob/admin/meetingsLog.txt)
 etc, as this was felt to be a good way to keep creative and business aspects apart and easier to manage.
Later Google Sheets was employed to create a pros and cons list for each idea - the advantage Google Sheets gave us was that it was easy to share and edit, and was more private than the university based Microsoft Teams account.
At this stage some early paper-prototypes were developed to look at the potential of some designs.  

![prevWorkMontage](https://user-images.githubusercontent.com/61804643/114706696-3397cc80-9d21-11eb-84c2-3ce0b27e39da.jpg)
<p align="center">
  Picture: Google sheets document and early paper-prototype designs for ideas that were not developed
</p>

In retrospect maybe too much time was spent on this part of the process.  In part this was caused by the small size of the project team, and the difficulty in everybody being available at the same time for discussions.  Whilst the project ideas and concepts were progressing on line (see the ideas branch etc), it was the decision making process that was letting us down.
Eventually it was agreed that a majority decision taken by people at meetings would be implemented, as waiting for a full consensus  was causing delay.  

However every member of the group agreed on the Glacier View project as the one to implement.  Whilst it is true that other ideas had generated some excitement from the lecturers/TAs e.g. Breathable, the team decided to take a pragmatic viewpoint.
Some ideas could be discounted just from the Pros and Cons [document](https://github.com/aaronsharma/SEGP/blob/ideas/Team%2016%20Pros%20and%20Cons%20-%20Sheet1(2).pdf).  Others had their champions, eg Local Music and the Homeless Sim.  Ultimately the decision process had to take in the following factors:
- The size of the team.  With four people the workload distribution was going to be fairly heavy.
- The creation of the team, as part of the unit system, meant that we had no self-identifying coders.
- Geographically we were widespread - not everybody was at Bristol.

We therefore took the view that is was better to create a basic project that was self-contained and fairly small in scope, yet could have a big impact.  It was also an idea that once the basic version was working, lent itself to further adaptation and development.  As our confidence and ability grew so to could the scope.

The other ideas, e.g. Breathable were more complex, involving maps, GPS positioning, communications etc, any one of which could bog down a small team.   Glacier View built on the workshops that we had been taught as part of the unit, and therefore felt that we could reach a prototype stage sooner, and from thereon in we could develop the look, feel and capabilities of it.

#### 2. Sprints

We planned our development around our four main user stories, each adding a further element that should appeal to that user type.
<p align="center">
  <img  src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/project%20development%20plan.png">
  </p>
  <p align="center">
  Image: Break down of the four planned development stages, showing how each builds on the other
  </p>


The **initial sprint** was for Daniel, the environmental scientist who just wanted a fun way to get his message across. This is the type of user who doesn't want to be pushy, or just wants to do their bit.
<p align="center">
  <img width="474" height="296" src="https://user-images.githubusercontent.com/61804643/114400683-1edcfc80-9b9a-11eb-8a4f-2057cc993592.jpg">
  </p>

This sprint was first pushed on 9th - 14th April, ahead of a meeting with the TAs.
It incorporates feedback from the paper prototypes, and a basic front and back end, that will not track usage over time.
Unfortunately it was not fully completed within that sprint period.

The **second sprint** of 24th April saw the team group together on Teams and through direct communications. At this point the front end and back end where intergrated into the same project, but communications between them were not functioning, so a further sprint was arranged for the 28th April.

The **third sprint** of 28th April saw the hooking up of the front and back end, for a working proof of concept, which gives us a solid foundation upon which to build. Unfortunately due to side-effects from the AstraZeneca vaccine Nathan was unable to attend. 

#### 3. Stretch Goals

With small team being stretched, it is perhaps better to look at stretch goals - or **future sprints.** These would have targetted the other user stories.
The **first stretch** goal was for Hannah.
<p align="center">
  <img width="474" height="296" src="https://user-images.githubusercontent.com/61804643/114400440-dd4c5180-9b99-11eb-903b-b5e60f705dee.jpg">
</p>

Here we have a user who is interested in how their lifestyle impacts on the planet, and would like feedback on how to improve on this. This user would want an account, and to track their usage over time. For such a user we augment the power usage matrix, so that it if certain numbers are reached with individual devices, then lifestyle coaching messages will be triggered.
<p align="center">
  <img width="590" src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/trigger%20table.png">
</p>  
<p align="center">
   Table: Possible trigger scores to activate lifestyle messages for Hannah
  </p>



These would be stored in the database, and over time we would increase the total number of possible trigger messages so that the user isn't always seeing the same one or two things.

The **second stretch** would be for David.  This is the type of user who wants a lot of data served up to them in useful packages.
<p align="center">
  <img width="474" height="296" src="https://user-images.githubusercontent.com/61804643/114400575-040a8800-9b9a-11eb-8bef-4da19288ec15.jpg">
</p>
Using the previous example given for Dave, that is :

Dave has 2 cups of tea per day (3 X 2.5 = 7.5) He’s coding Java for 10 hours a day on his laptop (1 X 10 = 10); Unwinds by watching tv for an hour (1 x 2 = 2)

We would break this down by group.  One such possibility is shown in the table below, alongside the collated data and one way of displaying the data.


<p align="center">
  <img src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/dave_data.png">
</p>  
<p align="center">
  Table: Dave's example as broken down into groups
  </p>

<p align="center">
  <img src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/dave_pie.png">
</p>  
<p align="center">
  Graphic: an example of how Dave might want to see his daily data displayed
  </p>

Collating the data into groups would further enhance Hannah's user story, as now we could compare lifestyle elements as well as individual devices. By contrasting for example the totals across her day we might be able to nudge her towards choices that would lower the overall power usage.  However that would involve more devices and group types than we currently have within our system and would be a fairly substantial addition to any algorithm so has not yet been fully conceptualised

For Dave however, we can use time to improve the quality of his data. We could use line charts to show the  weekly, monthly and even annual changes to his consumption.
We could even track the trend and say that if he continued like this he would save X on power.  Indeed if everyone was like him the country could save X power.

Whilst we could continue with the power metric here, this user may also be interested in **monetizing** the data. By allowing the data base to track the cost per unit of electricity we can calculate what his bill could be - and also the amount he would save over a year.


The **final stretch** goal, for someone who likes to consider themselves alpha, but is absolutely not Jay-Cee, would be a simple chart that ranks users who opted in, by the amount of power they have saved.
<p align="center">
  <img width="474" height="296" src="https://user-images.githubusercontent.com/61804643/114400744-2f8d7280-9b9a-11eb-8926-b2f2b3ef0d0f.jpg">
</p>   
This adds the final gamification element - the high (in this case, low) score - which enables users to compare themselves against everybody else.

These stretches would have taken us from a simple daily usage app, to one that tracked usage, offered lifestyle advice, gave greater analysis and breakdown of usage wit henhanced advice, looked at financial aspects and finally allowed you to play against other users.

These extra elements would have been accessible by pressing buttons - so that users not interested in those experiences did not have to see them.

#### 4. Communications

Of greatest impact, caused by the Covid restrictions in force throughout the country, was the geographical spread of the team members.  Communications were good, but having everybody available at the same time did prove somewhat harder.  In the previous pre-Covid year, Nathan had been part of the same unit.  Then communications were greatly enhanced and easier - you would see team members almost daily, could discuss elements of the projects in beaks between lectures, and when it came to sprints and brainstorming, we would book rooms within the university so we had a focal point where we could all meet and work together. Arguably this made the whole process easier.

In lieu of this we had to exploit as fully as possible the online alternatives.
The group made most use of Microsoft Teams, as this was provided by the university and made an easy to use central meeting place. However as the Teams environment was available to view for anyone on the unit, we did not use that for sending files.  Here email was the priority, with the files also being stored on the Github. As previously discussed we had an Admin and Ideas branches on the repo for these purposes.
Email was preferable as it was direct and wouldn't involve each team member needing to git pull.

Where documents needed joint access, as previously mentioned, Google Sheets and Docs were used, with the final versions being stored on the repo.

For more immediate interaction, the team initially used Discord as a means for communication.  It has the advantage of working on mobile platforms and informing the user that there was a message. It had also been popular with this years' cohort as a means of quickly disseminating information. Unfortunately this proved to be its downfall, as the daily quantity of notifications proved too much.  This lead us to the final system employed, a facebook messenger group.  Private and with more manageable notifications this proved to be more successful in getting fast and urgent communications across.

**D1 Group working methods used (for instance did your team choose a  particular style of agile? what communication channels did you use?)**

**D2 Discussion of team roles (specialisation is ok!). A summary of  individual contributions (note: this is for reference, your team will  all receive the same grade!).**
#### 5 .Team Roles

With a small team it was essential that the project was broken down into manageable sections, so a degree of specialisation was required. However, every member had input across the board, because by it's very nature, the project was somewhat holistic with every element feeding off and contributing to, other aspects.
Broadly speaking however the roles within the teams were:

- **Aaron: role**
- **Fenner: role**
- **Nathan: Project management**
Nathan created the admin and ideas ranches to keep those elements separate from client facing branches. Part of this was an early adoption of a [meetings ](https://github.com/aaronsharma/SEGP/blob/admin/meetingsLog.txt) log. Management mainly consisted on keeping everybody informed of decisions and plans and attempting a schedule.
He also took lead on research, algorithm design, writing and creating multi-media images/videos etc.
- **Shiruo: Front-end development**
Shiruo was responsible for front-end development. The first part was the preliminary design and development of front-end. The second part was modifing the front-end interface and components function according to the requirements of project leader and back-end developer in the middle of project. The final work was to help the combination of front and back end codes.

**D3 Documentation of your sprints, including both high level overview,  timeline, and selected highlights that were critical points in the  project (remember to show the users stories implemented in each sprint). We expect a summary of meeting logs (including for instance apologies  for absence etc)**

#### 6. Working Methods
**D1 Group working methods used (for instance did your team choose a  particular style of agile? what communication channels did you use?)**

#### 7. Git Hub

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



#### 


## Back to:

## [System Integration & UX](https://github.com/aaronsharma/SEGP/blob/main/Portfolio/System%20Integration%20%26%20UX.md)


## Forward to:

## [Evaluation & Conclusion](https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Evaluation%20%26%20Conclusion.md)

## Evaluation 

[1. Evaluation of designs](#1-evaluation-of-designs)

[2. Unit testing and Functional testing.](#2-unit-testing-and-functional-testing)

[3. User acceptance testing](#3-user-acceptance-testing)

#### Conclusion

[4. Reflections on Working Practices](#4-reflections-on-working-practices)

[5. Reflective discussion of the success of the project](#5-reflective-discussion-of-the-success-of-the-project)

[6. Discussion of Social and Ethical implications](#6-discussion-of-social-and-ethical-implications)

[7. Discussion of future work](#7-discussion-of-future-work)







#### 1. Evaluation of designs

The design of the app is a constant ongoing process, which has not yet evolved into a final locked version.
Currently there are two principal points in which the design was evaluated, during paper-prototyping and with user acceptance testing (discussed in more details below). However throughout the entire development cycle, there would be tweaks and changes to the design. Whilst sometimes this took us away from the initial design (e.g. horizontal graph design) that was usually to accommodate faster development which in turn raised more design options and sometimes problems (See user acceptance).
As discussed more fully in the [System design - UX](https://github.com/aaronsharma/SEGP/blob/main/Portfolio/System%20Integration%20%26%20UX.md#ux-design) section, the paper prototypes started with a [power-point style](https://github.com/aaronsharma/SEGP/blob/develop/TidyUp/paper%20prototype.odp) design that was tested by team members and their friends and family. At this stage it was more about solodifying the concept amongst the team, but user feedback (e.g. dislike of drop down menus) lead us to develop a more tactile prototype:
<p align="center">
<img src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/Paper_Prototype%20pt1.gif" alt="paper prototype pt 1">
</p>
<p align="center">
  <i>
  Animation: Later paper prototype being tested 
  </i>
</p>

Feed back from this then fed in to simplifying the app design. It could be argued that in a normal environment we should have developed the faster, tactile prototype much sooner in the process, and from that developed a power-point presentation. However for a remote working and distanced team, the power-point enable us to lock in on the core ideas and designs in a way that the tactile design may have hampered.

The User acceptance feedback, as discussed in detail below, in turn brings on new issues in the design that need to be resolved. Technical issues and delays in determining the project idea, meant what was delivered for User acceptance was a much less refined prototype than we would have liked. This version should be really seen as a Beta, or even, a later prototype design. Ideally we would have rolled the feedback from the evaluation and gone through at least one more design iteration, before delivery.
The evaluation itself was on a laptop, so in some respects that technological requirement hampers the value of the process - but if seen as a Beta/additional prototype stage, it was in fact very valuable as it identifies and fixes some core user confusion in the current model.


#### 2. Unit testing and Functional testing

For back-end/Database testing we have included a route at localhost:3000/user where a get request will show all User objects in the database. Using Postman or an alternative piece of software one is also able to add a User by sending a Post request. Using the route /user/:userId where Id is the Id of the specific User object one is able to update, delete or get a specific user using a patch, delete or get request respectively. This was only included to test saving, updating and deleting data in the database and would be removed on full deployment.

<p align="center">
  <img  src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/Postman.JPG">
</p>

#### 3. User acceptance testing

Given the Covid restrictions and the time scale, we couldn’t push the app out as far as we would have liked with regards to user testing and acceptance. Amongst those who did try our demo of the app, there was a general positive response, although as previously discussed, this could in part be because of familiarity between the users and the project team.

One bit of feedback that we did manage to address was to do with the layout when inputting power usage. Our original design had a list of devices on the left for the user to select and a box in the middle to input usage, only once each device had been input the glacier would show on the right. However as remarked by one user this could be made a lot simpler by only showing one device at a time and having the user input their score before moving on to the next device. This way no device gets missed and the screen is less cluttered. This design would also work better for mobile users where horizontal screen space is limited. 

Another interesting aspect that was brought up, was that the initial display of the glacier was confusing.  This was because we used the 20-deviceTotal = result formula so that the glacier could shrink or grow if the user used more or less electricity than the average.  We therefore set the initial state as 0 (20 – 20 which is the average score) which is where the confusion arose as a large power usage would result in the bar chart growing into the negative where in reality you can’t have a negative glacier.

To correct this, we considered changing the equation to previous total +(20-deviceTotal), with the previous total defaulting to a positive integer on the first run, i.e. 20. That would mean that the glacier would start on 20, and then be affected by the users electricity consumption.  

For example Daniel starts on 20, and uses 10 units of power.  His glacier grows by 10 to 30 (20 +(20-10).  Next time Daniel logs in his initial glacier size would then be 30 and depending on his usage would shrink or grow again. Encouraging users to keep coming back and growing their glaciers or to come back with better results and buck the trend of their shrinking glacier. For now however we are still using 20 - device total for our demo, which shows how the result would look if the user score is 8, so the glacier would grow by 12 compared to the average.

Indeed, one of the lecturers was keen on seeing a total transformation over time, and this modification from user feedback fits that bill. Unfortunately, it would need some way of changing scale, and would only apply to users who choose to create an account.  To avoid this confusion over the graphical display for non-account holders, we may have to abandon the graph method entirely (as discussed in future developments).




## Conclusion

#### 4. Reflections on Working Practices

From the outset this group has had two fundamental issues, the small size of the team, and its limited technical depth. Saying that however, we feel that we dreamt big, and our aspirations were sized to match.

Whilst we ultimately had to focus the scope of the chosen project to one that from the outside looked manageable, it can be seen from the planned sprints and stretch goals that this was still a project that we were going to push as hard and as far as possible.

The impact of Covid has previously been discussed within the Project Management section, and to recap here: it limited meetings and group sprint sessions. With electronic communications we were limited to whether or not someone had read the message, and then could they action the message or meet at the time etc.  Comparing this to free movement on the campus, chance meetings, quick chats over coffee breaks etc, it becomes apparent that for group work, with a group that had never met or interacted before, the Covid restrictions were severely damaging.

Looking beyond this, the **technological challenge** was also maybe seriously underestimated.  Not so much the coding, or building of the elements, but of cross-compatibility.
At times during the first and second sprint we had issues with the docker system on the git repo working for some but not others. Indeed this project had a front end designed on Mac, a back end designed on Windows, with Ubuntu also being used by one of the team.  In retrospect this should have been examined beforehand.  One solution that immediately springs to mind is the use of the **Alpine Linux** OS. Given that the taught component of this course had Alpine as the heart of the docker deployment system, and given that we had to install Alpine on a Virtual Machine for the Software Tools Unit - there was an opportunity for everybody to use their VM Alpine to do all the coding on this project.  That should have led to 100% compatibility, which given issues with node.js modules could have given more time on developing the project rather than troubleshooting as to why it was not working.

As to management, with a team of four, any top down management style could be counter-productive. Instead we tried to built a spirit of comradery and unity by regular meetings, making sure everybody had a say in matters, and by holding sprints at the same time - enabling us to reach out and help one another. It was also possible for each of us to explore elements of the project that we were interested in, whether it be front end, back end, design, algorithms etc.
The lack of numbers however did hamper the depth we could bring  to bare on these challenging aspects. Ideally with a larger group there would be a chance for more than one person to work on front and back end, thereby creating mini-teams who could discuss and spark ideas off of each other, as well as provide more than one approach to any problem. For us, with no self-identifying coder who could maybe be astride one or more of the technical aspects, this meant that those who undertook roles pretty quickly became the groups de facto expert in those fields. Therefore any other group member, whilst being able to look and work on these aspects, couldn't necessarily bring the same knowledge to the issue. A slightly larger team would have offset this, and maybe helped lessen the pressure that individuals felt working in relative technical (if not actual) isolation. We ended up with specialists when we maybe suffered from a lack of a general practitioner.


Our team also identified the most efficient way for us to work together, given that we were a smaller group; by utilising the Agile methodology. We decided the most efficient way would be; instead of pipelining the workflow section by section, to tackle the project from all angles. This would prevent any delays from occuring, by giving us the freedom to work on different things at the same time; preventing any 'clogging up'. To help us do achieve this, we created a Kanban board inspired to-do list on Google Sheets; this focused our attention due to the benefits gained by visualising the tasks left to do. This allowed us to proceed with increased focus, as well as more flexibility, due to the face that if one task was dependant on another member finishing their own task; the waiting member could visually see what tasks they could do in the mean time; thus vastly increasing efficiency.
<p align="center"><img  src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/Agiletodo.png"></p>


#### 5. Reflective discussion of the success of the project

How is success for a project like this measured?  A lot depends on your metric for success. Looking back on this project we became a functioning team, we pushed and developed ideas based on feedback, we improved the look and feel of the design, adapted our algorithms, anticipated user types and user stories, devised ER and no-SQL database schemas. It was a positive, fun experience. Given that none of us had worked together, or even knew each other, before this, we bonded as a team and as friends.
Looking over the Project Objectives as stated at the start of this project

#### Project Objectives
- Devise a fun single page app - TICK
- Create a realistic model of power usage - TICK
- Develop a database that can manipulate the model - TICK
- Develop a database that can track the users usage over the long term -TICK
- Create fun, instant interactive graphics so the user gets instant gratification and feedback -on paper, TICK!

This project pretty much meets all its objectives. Yes the project itself is very much in demo form, and whilst we did develop database schema that would work, we just couldn't hook it up even with the help of uber TA Marceli. Yet we were tantalisingly close, and we had well established plans for development. It shouldn't have taken too much time to have solved these issues. What is certain, is that if we could have met up (an impracticality with one of teh team living with a shielder, and so unable to meet in person indoors - this time of year not being condusive to working outside) we would have achieved all the objectives.
We were one decent sprint, probably over a couple of days, away from completion. Unfortunately we never managed a sprint of more than a day, due to demands from elsewhere on the course. All of us had required extensions on other coding units (including longer extensions due to extenuating circumstances) and this fed in to the scheduling of this project. A sprint over a couple of days, with no other units requiring our time, would have been ideal. It is maybe the hardest part of applying Agile to university - in the real world we would have been solely focussed on this project.
Looking at where we have come from, and what we have learned as a team, by our measure we are a success. We modelled, designed, applied, coded and never became so entrenched in a viewpoint that we couldn't pivot or adapt. We may not save the world this time - but with the skillsets we aquired, who isn't to say we won't in the future! 


#### 6. Discussion of Social and Ethical implications

There are few ethical implications or considerations such that a university would apply, to this project.  At its most fundamental level, it would be a single app on a single-user’s computer system, or mobile device etc.
At the more advanced level there is the option for electricity usage to be tracked over time.  For the user’s benefit this data would be stored on our back-end, however there is no reason not to offer the user the ability to store the information locally.  Of course if they changed devices they would lose their history.
Storing the data with us, however, is perfectly safe.  The account only requires a unique user name and password.  **The data stored is therefore perfectly anonymised, with no trace back to the end user.**  Even if we offered a rankings table of the best users, only those individuals would know who they were.

It may be, however, that the data could be of use to NGO or governments looking at nudging behaviour.  It may be an area that we could expand into – for example we may be able to demonstrate that our users saved x amount of kWh per year, and look at what kind of nudge messages affected the biggest change in behaviour.  **At this present time, such data collection is not part of our system.**

It may be that **the most ethical implication of our work is born out of the work of Climate Interactive** with their C-Roads open source simulation. Their idea of publishing the algorithms and built in conceptualisations behind the system so that anyone can inspect them, is one that we should emulate.  It would bring inspection to our system, and demonstrate that the nudges employed were of altruistic nature with no other agenda.  Likewise, should we as suggested above, collect the data from users, we would make this abundantly clear in all our documentation. 
The strong ethical stance that we follow, should limit any negative impact or social implications.  By being open with the algorithms, our methodology and biases are there to be seen. Our stated aim would be to nudge users into a greener future without a material reduction in their comfort or perceived quality of life.  We hope to do this is a fun, light-hearted way, without any of the lectures or doomsaying associated with the nanny state.

Of course, we would hope that our lasting social impact would be some reduction in our user’s electricity consumption.

#### 7. Discussion of future work

In many ways it could be said that future work in terms of design and evaluation would be about undoing the damage that Covid caused to the project. In both cases it is mostly about getting various iterations out to diverse user groups and getting detailed user feedback.

In the first instance widening our User stories to include a much broader spectrum of people. Whilst Hannah’s age was never determined, it is obvious that we should look towards young users, maybe even pre-teen. “45 per cent of young Britons aged between 18 and 24 say the environment is the second most pressing issue facing the country at the moment” ( https://www.dazeddigital.com/life-culture/article/44801/1/official-young-people-more-concerned-environment-climate-change ) there is no reason to believe that this concern isn’t felt in younger people too - some 89% of youth respondents say young people can make a difference on climate change. [UNEP, 2008] ( https://unacov.uk/what-is-the-un-doing-about-climate-change/ ).

Getting design feedback from a much wider, younger age group will help bring focus on the kind of data they require. Maybe the app doesn’t have enough ‘serious fun’ aspects – and maybe mini-games could be introduced – maybe a new generation should be exposed
<p align="center">
<img width="700" src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/horace_goes_skiing.png">
</p>

to Horace Goes Skiing – down the glacier the users themselves are creating!
We would also like to get design and evaluation feedback from older, retired, users. The design may need tweaking to appeal to them, or to enable them to engage with it fully. It may be that we find that younger people want the full range of information available, that is, they are all Dave’s, whereas older people may prefer a simplified combined result – the Daniels in our stories.

It is in broadening out the age range for beta-testers that the design and evaluation of Glacier View will reach its maximum potential.

Future development, whilst contingent on the design and evaluation feedback, has at this stage, some obvious avenues for us to explore.

To begin with the app is a rather crude instrument. We could expand the number of devices that we track, and group them into more meaningful data sets. Within each device type there is, in reality, a wide range of power consumptions. The Energy Saving Trust report demonstrates this, as for example, over a year different television types consume varying amount of power - CRT 118 kWh, LCD – flat screen199kWh and Plasma flat screens 658kWh ( https://www.energysavingtrust.org.uk/sites/default/files/reports/PoweringthenationreportCO332.pdf )

Indeed the next step may well involve using the data and device breakdowns in this report to expand our range and to tighten out algorithms to be more accurate and to give the user a much more indepth report.

A further expansion would be on graphics. For speed of development we looked at using chart.js and the built in graphs that this afforded us. A future development would be to look at creating a more useful, custom designed graphic to display the ebb and flow of the user’s glacier. This could both improve how the data is presented and also improve the fun aspect of the app.

Graphics may also be further enhanced following design and evaluation feedback. It may be that icons representing devices may be easier for some user groups and broaden the appeal. On the other hand that may also limit the amount of devices that could be represented on screen. Certainly for the initial eight devices, this is something that could be looked at.

Finally implementing the ‘not Jay-Cee’ user story, and creating a league/ranking table of users so you can compare your savings or usage over time, would enhance the serious fun aspect of the app, and may well broaden its appeal and longevity.

## Back to the beginning:

## [Project Report](https://github.com/aaronsharma/SEGP/blob/main/Project%20Report.md)

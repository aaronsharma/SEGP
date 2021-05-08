#### Evaluation 

**E1 Details of how you evaluated your designs (techniques used &  awareness of their limitations). Description of  techniques suitable for your particular design. A timeline of evaluation of your design.**

**E2 Unit testing / Functional testing.**

Since we only have a simple prototype there is not much testing we can do. However we have included a route for database testing purposes at localhost:3000/user where a get request will show all User objects in the database. Using Postman or an alternative piece of software one is also able to add a User by sending a Post request or update/delete/get a specific user using a patch/delete/get request at /user/:userId. This was only included to test saving, updating and deleting data in the database and would be removed on full deployment.

**E3 User acceptance testing. Evaluation of your design with users – methods undertaken, findings, implications.**

#### 

#### Conclusion

#### Reflections on Working Practices

From the outset this group has had two fundamental issues, the small size of teh team, and its limited technical depth. Saying that however, we feel that we dreamt big, and our aspirations were sized to match.

Whilst we ultimately had to focus the scope of the chosen project to one that from the outside looked manageable, it can be seen from the planned sprints and stretch goals that this was still a project that we were going to push as hard and as far as possible.

The impact of Covid has previously been discussed within the Project Management section, and to recap here: it limited meetings and group sprint sessions. With electronic communications we were limited to whether or not someone had read the message, and then could they action the message or meet at the time etc.  Comparing this to free movement on the campus, chance meetings, quick chats over coffee breaks etc, it becomes apparent that for group work, with a group that had never met or interacted before, the Covid restrictions were severely damaging.

Looking beyond this, the **technological challenge** was also maybe seriously underestimated.  Not so much the coding, or building of the elements, but of cross-compatibility.
At times during the first and second sprint we had issues with the docker system on the git repo working for some but not others. Indeed this project had a front end designed on Mac, a back end designed on Windows, with Ubuntu also being used by one of the team.  In restrospect this should have been examined beforehand.  One solution that immediately springs to mind is the use of the **Alpine Linux** OS. Given that the taught component of this course had Alpine as the heart of the docker deployment system, and given that we had to install Alpine on a Virtual Machine for the Software Tools Unit - there was an opportunity for everybody to use their VM Alpine to do all the coding on this project.  That should have led to 100% compatibility, which given issues with node.js modules could have given more time on developing th eproject rather than troubleshooting as to why it was not working.

As to management, with a team of four, any top down management style could be counter-productive. Instead we tried to built a spirit of comradery and unity by regular meetings, making sure everybody had a say in matters, and by holding sprints at the same time - enabling us to reach out and help one another. It was also possible for each of us to explore elements of the project that we were interested in, whether it be front end, back end, design, algorithms etc.
The lack of numbers however did hamper the depth we could bring  to bare on these challenging aspects. Ideally with a larger group there would be a chance for more than one person to work on front and back end, thereby creating mini-teams who could discuss and spark ideas off of each other, as well as provide more than one approach to any problem. For us, with no self-identifying coder who could maybe be astride one or more of the technical aspects, this meant that those who undertook roles pretty quickly became the groups de facto expert in those fields. Therefore any other group member, whilst being able to look and work on these aspects, couldn't necessarily bring the same knowledge to the issue. A slighhtly larger team would have offset this, and maybe helped lessen the pressure that individuals felt working in realtive technical (if not actual) isolation. We ended up with specialists when we maybe suffered from a lack of a general practioner.


**E4 Reflect on the working practices of your group, how well they did or did not work, e.g, management of issues, communication, Agile (etc).**

**E5  Reflective discussion of the success of the project. How well did  your project fulfil the brief? Were all of your own objectives met**

**E6  This is a chance to reflect on how coronavirus has affected your project (remote working practices etc)**

#### Discussion of Social and Ethical implications of your work

There are few ethical implications or considerations such that a university would apply, to this project.  At its most fundamental level, it would be a single app on a single-user’s computer system, or mobile device etc.
At the more advanced level there is the option for electricity usage to be tracked over time.  For the user’s benefit this data would be stored on our back-end, however there is no reason not to offer the user the ability to store the information locally.  Of course if they changed devices they would lose their history.
Storing the data with us, however, is perfectly safe.  The account only requires a unique user name and password.  **The data stored is therefore perfectly anonymised, with no trace back to the end user.**  Even if we offered a rankings table of the best users, only those individuals would know who they were.

It may be, however, that the data could be of use to NGO or governments looking at nudging behaviour.  It may be an area that we could expand into – for example we may be able to demonstrate that our users saved x amount of kWh per year, and look at what kind of nudge messages affected the biggest change in behaviour.  **At this present time, such data collection is not part of our system.**

It may be that **the most ethical implication of our work is born out of the work of Climate Interactive** with their C-Roads open source simulation. Their idea of publishing the algorithms and built in conceptualisations behind the system so that anyone can inspect them, is one that we should emulate.  It would bring inspection to our system, and demonstrate that the nudges employed were of altruistic nature with no other agenda.  Likewise, should we as suggested above, collect the data from users, we would make this abundantly clear in all our documentation. 
The strong ethical stance that we follow, should limit any negative impact or social implications.  By being open with the algorithms, our methodology and biases are there to be seen. Our stated aim would be to nudge users into a greener future without a material reduction in their comfort or perceived quality of life.  We hope to do this is a fun, light-hearted way, without any of the lectures or doomsaying associated with the nanny state.

Of course, we would hope that our lasting social impact would be some reduction in our user’s electricity consumption.

**E8 Discussion of future work (in terms of design, development and evaluation)**


## Back to the beginning:

## [Project Report](https://github.com/aaronsharma/SEGP/blob/main/Project%20Report.md)

<p align="center">
  <img width="474" height="296" src="https://user-images.githubusercontent.com/61804643/114400683-1edcfc80-9b9a-11eb-8a4f-2057cc993592.jpg">
  </p>



#### System Implementation 

**C1 Stack architecture and system design (e.g. class diagrams, sequence diagrams).**

<p align="center">
  <img  src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/possible_schema.JPG">
  </p>
  <p align="center">
  Picture: Possible Database Schema
</p>

A simple database schema.
- user logs in and enters usage in the front end
- for each device entry it's power usage is looked up in the matrix
- the sum of that usage is added to usage which is fed to the result with the timestamp
- the result is then used to generate the daily power usage



**C2 Back End - MongoDB - database implementation, the data model that  you developed your back end from (e.g. entity relationship diagrams).**
/
<p align="center">
  <img  src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/window.JPG">
  </p>
  <p align="center">
  Picture: Beginnings of implementing the back and front end
</p>


<p align="center">
  <img  src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/mongoose_valid.png">
  </p>
  <p align="center">
  Table: Revised power usage matrix with Mongoose Validation variables included
</p>

Using the Mongoose schems allowed us to incorporate Mongoose validation, whereby we can set limits to the values that the user can enter. The table above includes this date.  On the whole it is based on 24 hour usage as being the maximum.  For the kettle we settled on 1 drink per hour over 24 hours, which is excessive even by programmer standards.  the washing machine was similarly restricted to 10 washes per day.  It's unlikely that this could be exceeded, due to several factors i) wash cycle often takes 90 minutes anyway, ii) availability of space to dry all this washing and iii) loading/unloading times have to be factored in.  In reality it would be uslikely for anyone to exceed 3 washes.

**C3 Middle Tier - Express, Node, the RESTful API**

**C4 Front End - Angular. Details of implementation**

**C5 Additional elements and components e.g. authentification. Tell us about any other aspects not covered above!**

**C6 Deployment details (including Docker), include how you have been achieving continuous integration and deployment.**

####                                  


#### UX Design 

- Design Process and Early prototyping and ideation (including mood boards and paper prototyping)
The basic concept of a glacier retreating or expanding depending on the success of the user should be relatively easy to replicate on the computer screen.  The first iteration of the design was determined to be a simple bar graph style graphic.  It would move to the left (i.e. grow) if the user was successful and vice-versa.  It is envisaged that the graph could seemingly animate i.e. redraw itself to display user results over time.

A graph like structure was chosen as it was deemed to be able to demonstrate that all elements of the app were working together.  At it's simplest it could be a single colour graph, but there was scope, as shown below to extend even this simple graphic:

<p align="center">
  <img width="610" height="355" src="https://user-images.githubusercontent.com/61804643/114473736-b0755a00-9bec-11eb-960d-8225243c5dbd.jpg">
  </p>
  <p align="center">
  Picture: Three possible ways to interpret the glacier/electricity data as a bar graph
</p>


Here there four options, note only three are displayed and only one would ever have been seen on the screen:
i) single colour across whole graphic (not displayed)
ii) single colour for glacier retreating (warm colour choice)
iii) single colour for glacier expanding (cold colour choice)
iv) possibility of split colours - warm beyond 8 kWh and cold below it

A high concept paper-prototype was created based on these ideas.   Note the additional data provided in the result - this extra statement of effect was considered desirable for users such as Dave - as it gave a tangible fact.
<p align="center">
  <img src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/pp_aaron.jpg">
  </p>
  <p align="center">
  Picture: First paper prototype
</p>

Feedback from the prototype was positive.  However two main points arose:
i) drop down menus were unpopular
ii) more detailed information gets in the way of the immediacy of the result.  Maybe it could be something you opt in to see


Following this feedback a faster, less polished paper prototype was created so we could get results backk quicker with less effort.  It removes the drop down menus and the detailed results screen.  Below are two animated gifs of it in action.  It is intended as a computer screen and the users finger represents a mouse cursor.  It is envisaged that data is entered by a mechanical keyboard.  This prototype does look like a tablet or phone with a sliding screen - however this was designed for filming purposes.  Under Covid restrictions there was a limit to how many people could film and operate the paper prototype.  This sliding mechanism allowed the subject to control the display whilst the developer could film the result.  Note these gifs are extracts from the session


<p align="center">
<img src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/Paper_Prototype%20pt1.gif" alt="paper prototype pt 1">
</p>
<p align="center">
  <i>
  Animation: Later paper prototype being tested 
  </i>
</p>

<p align="center">
<img src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/Paper_Prototype%20pt2.gif" alt="paper prototype pt 2">
</p>
<p align="center">
  <i>
  Animation: Later paper prototype being tested part 2 
  </i>
</p>

Feedback from this session proved advantageous.  Having a physical object that could be interacted with versus the higher concept design pages previously used opened up important points that had not previously been visualised:
i) users reported frustration at not being able to go back and change things.**It became apparent that our design was maybe not functioning like a single-page app**, and that the whole design should be incorporated on the one screen (as seen in this quick whiteboard sketch).
<p align="center">
  <img height="255" src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/Single_page.jpg">
</p>
<p align="center">
  Picture: Quick whiteboard sketch of single app look
  </p>
ii) the main difference between using the app for fun and having an account was the ability to track usage over time.  No design thus far had incorporated a calendar aspect.
This raises further system design questions - do we allow the user to change the date e.g. enter data for yesterday?  Or is it solely one day at a time?


#### Paper Prototype Issues

It should be noted that Covid had a massive impact on the quantity and quality of tests that could be run.  With the developers limited to their household bubbles there was maybe a lack in the age ranges of people tested.  Further, it is highly unlikely that subjects, knowing the developers personally, would engage in the process without some positive bias.
Outside of Covid the paper prototypes could have been tested within the wider University campus, as well as within family units - extending the quantity and age ranges quite substantially.  Likewise, testing in public spaces and therefore attracting the greatest possible feedback was unavailable to use.  Whilst the use of social media was considered, the burn out and widespread national apathy created by the various lockdowns meant we negated this idea. 


#### Creating the UX

Once a crude prototype demonstrates that all the elements of the MEAN app are working the user facing aspects will have a major overhaul.  Early concept designs for the landing page and a results page are shown below. 


<p align="center">
  <img width="736" height="512" src="https://user-images.githubusercontent.com/61804643/114709568-a6567700-9d24-11eb-8f30-a8ce4c3f1ea7.jpg">
</p>
<p align="center">
  Picture: Design concepts for the app
  </p>
  
  
  Employing user feedback from the first paper prototypes the front end designs were coded.  These will be revised following the developments from the second prototype:
  
  <p align="center">
<img src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/demo-simple.gif" alt="front end version 1">
</p>
<p align="center">
  <i>
  Animation: First working front end design 
  </i>
</p>

  <p align="center">
<img src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/demon-new.gif" alt="front end version 2">
</p>
<p align="center">
  <i>
  Animation: Front end design progression
  </i>
</p>
  
  
  It became apparent that using a bar-chart was a more complicated issue, as it needed to react in the opposite way to that anticapted i.e. a greater device usage value should **shrink** the chart and vice-versa. One solution is to modify the bar-chart so that is has minus figures, allowing it to drop.  Then using the standard 8kWh average equals 20 in our matrix, the algorithm if tweaked thus:
 
 <p align="center">
  
  ## 20 - deviceTotal = result
  
  </p>
  
  
  now means that someone who uses less than the average eg 10 units gets a result of 20-10 = 10 - the glacier increases.  Someone using more power, e.g. 30 gets a results of 20-30 = -10 and the glacier shrinks.
  

**C7 Identification of interacting users and broader stakeholders.**

**C8 UX approach – design heuristics/approach, design methods (design fiction / heuristics)**

**C9 Understanding of user group (questionnaires / user stories / interviews)**

**C10 Wireframes and interaction flow diagrams for final key subsystems.**

#### 



## Back to:

## [Background & Research](https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Background%20Research.md)


## Forward to:

## [Sprints & Management](https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Sprints%20%26%20Project%20Management.md)
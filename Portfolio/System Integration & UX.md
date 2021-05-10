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

#### Our use of MongoDB, database implementation and the data model  

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

We set up a Mongo cluster in the cloud from the Mongo website and linked it to our project using environmental variables to supply username and password. These are not provided in this repo for security reasons. The use of a Mongo cluster in the public cloud (in this case AWS) allows us to manage the database remotely from any browser. Mongo unlike SQL enables us to easily change the model and schemas at any time without much hassle. We have changed our model multiple times during development, ultimately landing on the following. 

We have a **User** schema which contains a username, password (which we will not be using yet but is there for future implementation) a total power usage, which is our custom score based on the user input from the 8 devices and a user score for the 8 devices themselves. In the current prototype we are only making use of the **total power level**. In future the scores for each device can be recorded and used to provide better/more appropriate feedback.
<p align="center">
  <img  src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/exampleUserInDb.JPG">
  </p>
  <p align="center">
  Picture: Example of User in Database
</p>
We also have a schema for **Devices** which contains the device name and power level. We can access this information using the objects ID. This allows us to easily change the devices properties at any time. We can use the objects ID to patch the values similar to how we would update a user’s score once we add user authentication.

Using the Mongoose schemas allowed us to incorporate Mongoose validation, whereby we can set limits to the values that the user can enter. The table above includes this date.  On the whole it is based on 24 hour usage as being the maximum.  For the kettle we settled on 1 drink per hour over 24 hours, which is excessive even by programmer standards.  the washing machine was similarly restricted to 10 washes per day.  It's unlikely that this could be exceeded, due to several factors i) wash cycle often takes 90 minutes anyway, ii) availability of space to dry all this washing and iii) loading/unloading times have to be factored in.  In reality it would be uslikely for anyone to exceed 3 washes.

**C3 Middle Tier - Express, Node, the RESTful API**

In order for our users to be able to interact with our website, we required a tool to allow communication between the user and our back-end. This was facilitated with the implementation of a RESTful Appication Program Interface (API). A RESTful API implements a method to allow HTTP requests to access and manipulate data.We deliberated over choosing to use an alternative to the standard RESTful API, with the option of GraphQL looking appealing. The difference between the two being that in the REST architecture, the client issues a http request and data is recieved in the form of a http response. Whereas, GraphQL is a query language, and the client requests data with queries.  However, we felt that the REST architecture provided powerful advantages in the form of simplicity and ease of error handling.

In contrast to the 'classic' LAMP stack, where a Apache HTTP server is used as a webserver, our team decided to implement Node.js, which is a Javascript runtime event model for our backend. With Node.js we were able to build a scalable network application, which can handle concurrent connections. We opted to choose the Express.js  framework for Node.js, as it allowed us to develop a Node.js web application incredibly fast and easily, with the implementation defined in a server.js configuration file in our project.

  <img  src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/express.png">

When it came to linking the front and back-end together the modular nature of Angular and Express made this much simpler than it could have been. Fenner was able to import Shiruo’s User interface and Input-data component into the dashboard with no trouble. Our only issue that took some time to resolve was how we would pass the data between components and how we would send the user input to the database. We ended up using a method in our data service to send a post request to our API which would then save the data to the database.  At the time of writing this is not working but we cannot figure out why. So, for now the Bar-chart shows temporary values to demonstrate how the website would work once this is integrated.

**C4 Front End - Angular. UI implementation (e.g. development of components, like format, navigation and router)**

The initial thought of homepage was a simple but well-functioned one that enabled the users to choose to log in or not. And to get start with a web, a extreme simple interface with no decorations was implemented: 
<p align="center">
  <img wight="400" src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/Picture1.png">
</p>
It realized the two-way data binding function (as username shows), therefore the machine could get the input of users and use it for afterwards routes. Also, it got route and navigation working (show as glacier one and two). 
In the first web version, the layout and router were optimized with background picture and log-in buttons added and page switching working. Also, the input page was done to get devices and hours: 
<p align="center">
  <img width="500"  src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/1.gif">
</p>
In version 2, homepage and routers were optimized: words about this page and a 'back' button were added for better user experience. In the input page, the input text box of device was replaced by eight buttons to avoid possible input error.
<p align="center">
  <img width="500" src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/2.gif">
</p>
The following gif shows how the input page layout was improved and it was prepared to get connect to database once it was done: 
<p align="center">
  <img width="500" src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/3.gif">
</p>
<i>
  Input layout improved
 </i>
In final version, the input format was adapted to what back-end needed -- allowing multi-input of device-hours by adding 'save' button. Then a 'back' button was added in case users want to modify their previous input. More important, it got connect to back-end and showed the bar chart finally.
<p align="center">
  <img width="500" src="https://github.com/aaronsharma/SEGP/blob/main/Portfolio/Media/4.gif">
</p>
**C5 Additional elements and components e.g. authentification. Tell us about any other aspects not covered above!**

#### Deployment details, Docker, continuous integration and deployment

We used docker to avoid the headaches of getting our application running on everyone’s individual system. This was useful since we were not all running the same operating system. Using a Docker container allows us, with the help of a Dockerfile, to standardize the runtime environment for our app across all our different platforms. Meaning we did not have to worry about everyone having all the necessary dependencies installed to run the app, as the Dockerfile included in the project dashboard takes care of this.

Using Docker didn’t come without it’s own issues however. Getting it all working in the first place was very time consuming and this would be an area we would look to improve on in future. We spent a lot of time troubleshooting individual problems which really slowed down our early development, as we could not collaborate fully until everyone was able to run the app on their individual device. In pre-covid times this would have been less of an issue as we could have had meetings in person, and all cooperated around one machine, but this was just not possible for us in early 2021. 

For example, a thinkpad X230 running Ubuntu 18.04 LTS  would constantly use the docker cache, and would need to be forced to rebuild using a system of trashing the caches with either ‘docker system prune –all –volumes’ or ‘docker-compose build –no—cache.’  This could lead to very long rebuild times for team members with limited, e.g. non fibre, broadband connections.  In retrospect using the university lab systems through remote access would have been preferable to solve this problem, as at least the rebuild would have benefited from the university’s connection speeds.


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

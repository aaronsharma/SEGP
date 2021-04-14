# 						   TEAM 16 

## 						    PROJECT REPORT





\
\
\


This is a MSc Computer Science Software Engineering Project for the University of Bristol




nb: git branches admin logs our meetings etc and git branch ideas contains the ideas we've been examining.  Parts of these will be rolled into this project report


#### TEAM:

Team (product) name

#### ![lego head](https://user-images.githubusercontent.com/61804643/111087464-b9094080-8519-11eb-8fa1-48b680c160bb.jpg) 	<u>Aaron Sharma</u> 

​								Text about Aaron here

#### ![lego head](https://user-images.githubusercontent.com/61804643/111087464-b9094080-8519-11eb-8fa1-48b680c160bb.jpg) 	Fenner Richmond

​							 24 year old, Bristolian.
               Working on back end development.

#### ![lego head](https://user-images.githubusercontent.com/61804643/111087464-b9094080-8519-11eb-8fa1-48b680c160bb.jpg) 	Nathan Cubitt

​								Bringing media industry experience to get the project over the line



#### ![lego head](https://user-images.githubusercontent.com/61804643/111087464-b9094080-8519-11eb-8fa1-48b680c160bb.jpg) 	Shiruo Huang

​								Text about Shiruo here



#### Introduction 

Using the United Kingdom as an example:

### the AVERAGE household uses 8kWh of electricity a day
### there are 27.8 MILLION households

### if every household used 0.1kWh less power a day

### in a year it would SAVE equivalent of nearly 600 000 barrels of oil being consumed


##### 											                         Sources: Office For National Statistics, MWh to BOE conversion site



- Abstract. Motivation for the project, framing of the problem and a high-level overview of the system.

<p align="center">
  <img width="474" height="296" src="https://user-images.githubusercontent.com/61804643/114400440-dd4c5180-9b99-11eb-903b-b5e60f705dee.jpg">
</p>



- Project Objectives. The high level goals of the project and the  contribution towards solving the problem. A checklist against which the  team can evaluate their success.

- Video. Short (1-2min) demo video to explain your system (think Kickstarter)

  

#### Background and Motivation 

<p align="center">
  <img width="613" height="344" src="https://user-images.githubusercontent.com/61804643/114712132-a6a44180-9d27-11eb-886f-95ca56d90864.png">
</p>
<p align="center">
  Picture: Melting ice-caps from NASA data

Since the early 1900s, many glaciers around the world have melting, a process that has accelerated over recent years, as evident in  the image above, created from NASA imagery.
Human activities are at the root of this increase in the speed of change. Specifically, since the industrial revolution, the growth of carbon dioxide and other greenhouse gas emissions have subsequently raised global temperatures in a process known as the greenhouse effect.  This temperature change is more prominent at the poles, where the retreat of the ice is most pronounced.

<p align="center">
  <img height="360" src="https://user-images.githubusercontent.com/61804643/114711346-bcfdcd80-9d26-11eb-83d7-5062ca18d343.png">
</p>

<p align="center">
 The Greenhouse Effect. Image by Efbrazil - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=88910229 
</p>



The Arctic is now warming twice as fast than anywhere else on earth. The sea ice there is declining by more than 10% every 10 years. As the ice melts, darker patches of ocean start to emerge, eliminating the effect that previously cooled the poles, creating warmer air temperatures and in turn disrupting normal patterns of ocean circulation.  What happens here has consequences across the entire globe. As sea ice and glaciers melt and oceans warm, ocean currents will continue to disrupt weather patterns worldwide. Fish migrations will change affecting the fishing industry. Certain sea-life species, such as coral, may go extinct due to warmer conditions.  Coastal and river communities will continue to face expensive disaster recovery bills due to flooding and storms become more intense. In the first three months of 2021 unexpected weather events have taken down the power grid of the US State of Texas.

**Approximately 40% of global CO2 emissions are emitted from electricity generation **

One way to help limit future damage is to reduce CO2 emissions, and one way to do that is to decrease our use of electricity.  That is where Glacier View comes in.


Sources:
Glaciers melting https://www.worldwildlife.org/pages/why-are-glaciers-and-sea-ice-melting  accessed 13/4/2021
NASA graphic https://geoawesomeness.com/wp-content/uploads/2016/10/NASA-Arctic-Ice-Cap-Melt.jpg accessed 12/4/2021
Texas weather  https://www.bbc.co.uk/news/av/world-us-canada-56090016 accessed 14/4/2021
Coral Extinction   https://www.nationalgeographic.com/science/article/scientists-work-to-save-coral-reefs-climate-change-marine-parks  accessed 10/4/2021
Reducing Carbon Dioxide Emissions from Electricity Sector Using Smart Electric Grid Applications
Journal of Engineering
Abdallah, L.,  El-Shennawy, T.,  Reducing Carbon Dioxide Emissions from Electricity Sector Using Smart Electric Grid Applications, in Journal of Engineering 2013 https://doi.org/10.1155/2013/845051  accessed 12/04/2021

<p align="center">
  <img width="474" height="296" src="https://user-images.githubusercontent.com/61804643/114400575-040a8800-9b9a-11eb-8bef-4da19288ec15.jpg">
</p>


- Background literature. Academic research review.

#### The Power Game

The usage of electricity is typically measured in kilo watt hours (kWh) with energy generation being measured in Megawatt hours (MWh) or even Gigawatt hours.  These units of measurement follow the standard lines of 1 GWh = 1000= MWh, and 1 MWh = 1000 kWh, and 1 kWh = 1000 watts, with watts being the usual measurement at the consumer level.  For context 1 kWh (1000 watts) is the equivalent of boiling a kettle ten times, or watching television for seven hours.*

It has been calculated by the Department for Business, Energy & Industrial Strategy that the average household uses approximately 8 kWh of electricity every single day.*  Naturally there is quite a range from low use, small households, to larger high use households, however targetting an average household usage enables us to set a clearly defined target to our users.  You are usually either below or above the average.

The typical usage can be further broken down into demand according to end use*:

<p align="center">
  <img width="712" height="276" src="https://user-images.githubusercontent.com/61804643/114583063-1efff980-9c79-11eb-8623-3f07b35eafa6.png">
</p>


From general consumption is it of course possible to find highly specific power usage data down to the individual device and version number.  Unfortunately, whilst available, this data is usually held by individual manufacturers, and obtaining a comprehensive collection of specifications is more problematic.  However websites such as The Power Consumption Database http://www.tpcdb.com/ have been collating such data into fairly substantial collections (see image below).

![tpcdb](https://user-images.githubusercontent.com/61804643/114583114-2c1ce880-9c79-11eb-96e3-ec42bafde28b.png)


* Source: https://www.ovoenergy.com/guides/energy-guides/how-much-electricity-does-a-home-use.html


#### Gamifying the Environment - Current Games

Using gamification to carry important environmental messages in fun ways that does not preach to the players is a challenge, and it is useful to see how others have approached this process.  While we will focus on the computer game market it is not the sole provider of environmental game soultions.  It is worth considering the wider games market where board games such as Photosynthesis https://www.blueorangegames.com/index.php/games/photosynthesis  and the STEM educational card game GO Extinct! https://www.flinnsci.com/go-extinct/fb2207/ are well worth looking at and playing.

As ours is a single-page application, we will primarily focus on projects that could be portable to the part of the market we are attempting to reach.  It would be remiss to not mention **Among Ripples**, by Eat Create Sleep https://eatcreatesleep.itch.io/amongripples
![among](https://user-images.githubusercontent.com/61804643/114318991-5c447a00-9b07-11eb-9c9d-14dbc62e526a.jpeg)
It's a glorious looking ecosystem management simulator, where the player controls a lake ecosystem.  Developed alongside ecologists to ensure scientific accuracy, its look and scope are beyond our project, but demonstrate the potential that environmental games have.


The current largest freeware game is **C-Roads**, from Climate Interactive.  At its core is a sym game where the player represents a country whose environmental policies can be seen affecting the earth https://www.climateinteractive.org/tools/c-roads/  

<p align="center">
  <img width="797" height="427" src="https://user-images.githubusercontent.com/61804643/114319048-b0e7f500-9b07-11eb-8d20-2c21e4c75c83.jpg">
</p>

C-roads is a serious contender, using MIT research, and all of the modelling and assumptions behind the algorithms are openly available on their website.  here however the focus is on the national or multi-national level, whereas ours will focus on the individual.  In some ways Glacier View and C-roads are bookends of the same genre.
At this point in the development cycle, we can not attempt to incorporate such a sophisticated model as theirs.  However we can see the advantages in being able to express such sophistication as a draw for the more scientifically orientated user.  Likewise the openness of the algorithms is commendable, and once we move from a relative model it may be wise to follow this path.  What we can take from C-roads is the immediacy of the design, how the graph lines change quickly, giving instance user feedback.


On a scale similar to ours is **Forest** https://www.forestapp.cc/
![forest](https://user-images.githubusercontent.com/61804643/114319026-931a9000-9b07-11eb-8d14-6553b3dc52f0.jpg)
Here the focus is less environmental and more about focus.  This is an app that gets you to focus your attention on something you want to do by removing the distraction of your phone.  It does this by starting to grow a tree - if you don't use your phone the tree grows, but it dies if you give in to temptation.  Through the use of virtual coins youcan also donate to reforestation work in the real world.
Similarly to Forest, Glacier View is using the idea of nudging people's actions towards a positive result.  Their tying it to reworld reforestation is a fantastic further step, and we may well consider some form of tangable rreal world effect too.


- Clear definition of the problem. How does your project relate to the above? We will be marking the ability of your team to identify a  worthwhile and important problem and clearly articulate the scope and  challenge of the problem.

#### The Number Game

At this point in the development cycle it became apparent that the power usage data for each and every device available to the consumer was both unwieldy and complex.  Finding information sources such as The Power Consumption Database and porting their information into a usable format would, it itself, be a full time project.

On the other end, for the user, having the ability to select almost any device manufacturered would be overwhelming and counter productive.  the end user wants snappy fast feedback, and not having to spend time using drop down menus and the like to find a device.

Whilst we may be able to open the scope up at a later date, it was decided that for this round of development, instead of using device accurate data, we would instead use a relative system of numbers that was average for those particular devices.
Again, to keep the scope small enough to not overwhelm the user, but complex enough to demonstrate the proof of concept we decided to limit the types of devices (see table below);

We had to make some assumptions based on average use.  These are:
-  Average household electricity use works out at around 8kWh broken down into
- Cold appliances 63%
-  Wet appliances 10%
- Cooking 7%
-  Lighting 6%
-  Consumer electronics 4%

As we’re mostly looking at consumer electronics that only gives us 4% of daily use to use as a basis to change people’s energy use.  As such, it made sense to add big ticket items, a washing machine and kettle into the app.

If we remove cold appliances, cooking and lighting from the mix – that’s approximately 75% of the daily average , or 6 kWh,  leaving 2 kWh as our focus of attention. 

To simplify the maths, this 2 kWh will be multiplied by 10 - giving us a target score of 20.  

From that this relative usage table was drawn up, with the devices accorded values that mimic the average for said device and places it within the 20 point score system:

<p align="center">
  <img width="792" height="303" src="https://user-images.githubusercontent.com/61804643/114588064-2bd31c00-9c7e-11eb-86dd-ee0c9e7e95f7.png">
</p>

\
\
Source cse.org.uk
\* average use = 1.5 hours so 2kWh * 1.5
\** average use 5 mins to boil = 3 wWh /12
\*** rounded up to include routers etc
\**** averaging out for higher end laptops



EXAMPLES:

1) Hannah has 5 cups of coffee a day (2.5 x 5 = 12.5). 
     Plays her PS5 for 5 hours a day on the large tv (5 x 2 x 2 = 20)
     Uses her phone for about 2 hours (0.25 * 2) = 0.5

TOTAL 33
Average is 20.  She is above average.
We could use tips to suggest drinking more water vs coffee.  Maybe play a bit more on the phone than the PS5.


2) Dave has 2 cups of tea per day (3 X 2.5 = 7.5)
    He’s coding Java for 10 hours a day on his laptop (1 X 10 = 10);
    Unwinds by watching tv for an hour (1 x 2 = 2)

TOTAL 19.5
Under average – but we could tip him to maybe go for a walk, 10 hours of Java is not good for anyone!


<p align="center">
  <img width="474" height="296" src="https://user-images.githubusercontent.com/61804643/114400683-1edcfc80-9b9a-11eb-8a4f-2057cc993592.jpg">
  </p>



#### System Implementation 

- Stack architecture and system design (e.g. class diagrams, sequence diagrams).
- Back End - MongoDB - database implementation, the data model that  you developed your back end from (e.g. entity relationship diagrams).
- Middle Tier - Express, Node, the RESTful API
- Front End - Angular. Details of implementation.
- Additional elements and components e.g. authentification. Tell us about any other aspects not covered above!
- Deployment details (including Docker), include how you have been achieving continuous integration and deployment.

#### 
<p align="center">
  <img width="474" height="296" src="https://user-images.githubusercontent.com/61804643/114400744-2f8d7280-9b9a-11eb-8926-b2f2b3ef0d0f.jpg">
</p>                                    


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

Once a crude prototype demonstrates that all the elements of the MEAN app are working the user facing aspects will have a major overhaul.  Early concept designs for the landing page and a results page are shown below.  Note the additional data provided in the result - this extra statement of effect was considered desirable for users such as Dave - as it gave a tangible fact.


<p align="center">
  <img width="736" height="512" src="https://user-images.githubusercontent.com/61804643/114709568-a6567700-9d24-11eb-8f30-a8ce4c3f1ea7.jpg">
</p>
<p align="center">
  Picture: Design concepts for the app
  </p>

- Identification of interacting users and broader stakeholders.
- UX approach – design heuristics/approach, design methods (design fiction / heuristics)
- Understanding of user group (questionnaires / user stories / interviews)
- Wireframes and interaction flow diagrams for final key subsystems.

#### 

#### Sprints & Project Management 

At the onset of this project the team was investigating various socially important campaigns or messages that could be promoted using a single page app.  During this period extensive use was made of Microsoft Teams as a useful focal point for group meetings. 
Initially ideas where logged in an simple ideas text file on the **ideas branch** of the github repo.   At the same time an  **admin branch** was created to hold records of meetings etc, as this was felt to be a good way to keep creative and business aspects apart and easier to manage.
Later Google Sheets was employed to create a pros and cons list for each idea - the advantage Google Sheets gave us was that it was easy to share and edit, and was more private than the university based Microsoft Teams account.
At this stage some early paper-prototypes were developed to look at the potential of some designs.  

![prevWorkMontage](https://user-images.githubusercontent.com/61804643/114706696-3397cc80-9d21-11eb-84c2-3ce0b27e39da.jpg)
<p align="center">
  Picture: Google sheets document and early paper-prototype designs for ideas that were not developed
</p>



- Group working methods used (for instance did your team choose a  particular style of agile? what communication channels did you use?)
- Discussion of team roles (specialisation is ok!). A summary of  individual contributions (note: this is for reference, your team will  all receive the same grade!).
- Documentation of your sprints, including both high level overview,  timeline, and selected highlights that were critical points in the  project (remember to show the users stories implemented in each sprint). We expect a summary of meeting logs (including for instance apologies  for absence etc)
- Team use of Git, how your team used continuous integration / continuous deployment. Streamlining of workflow throughout.

#### 

#### Evaluation 

- Details of how you evaluated your designs (techniques used &  awareness of their limitations). Description of  techniques suitable for your particular design. A timeline of evaluation of your design.
- Unit testing / Functional testing.
- User acceptance testing. Evaluation of your design with users – methods undertaken, findings, implications.

#### 

#### Conclusion

- Reflect on the working practices of your group, how well they did or did not work, e.g, management of issues, communication, Agile (etc).
- Reflective discussion of the success of the project. How well did  your project fulfil the brief? Were all of your own objectives met
- This is a chance to reflect on how coronavirus has affected your project (remote working practices etc)
- Discussion of Social and Ethical implications of your work.
- Discussion of future work (in terms of design, development and evaluation)

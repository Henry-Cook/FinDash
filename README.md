# Budget Dashboard

## Project Description
	
Budget Dashboard is a  React.JS app that uses [Airtable](https://airtable.com/) for a basic database connection, this allows for a simulated user authentication.  Users can very easily build budgets by adding information into the three budgeting categories: “Bills”, “Living Expenses”, and “Everything Else”.  The app will then use [react-chartjs-2  ](https://www.npmjs.com/package/react-chartjs-2)  to render graphs so that users can visualize their finances with. 

The focus of this project is to use React to create a beautiful dashboard. 

## React Component Hierarchy

```
|- App
|
| --- Nav-bar
| --- Title 
| --- User Picture and Name 
| --- Budget Manager 
	| --- Categories 
		| --- Bills
		| --- Living Expenses 
		| --- Everything Else
| --- Budget Totals
| --- Charts 
	| --- Doughnut Chart
	| --- Bar Chart
```




## Wireframes

|                                                                       Mobile                                                                        |
| :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![Mobile](https://github.com/Henry-Cook/Budget-Dashboard/blob/master/New%20Project%20Pictures/Screen%20Shot%202020-08-01%20at%2010.31.14%20AM.png?raw=true) |

|                                                                       Desktop                                                                        |
| :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![desktop](https://github.com/Henry-Cook/Budget-Dashboard/blob/master/New%20Project%20Pictures/Screen%20Shot%202020-08-01%20at%2010.23.32%20AM.png?raw=true) |

Made with [wireframe.cc](https://wireframe.cc/)

## MVP 
* User Signup/Login.
* Budget Manager/Creator.
* Shows breakdown on charts.
* Navigation bar with access to budget page and settings page.
* Responsiveness for mobile, tablet ,  desktop  users.


## PostMVP  
* Dark Mode 
* Add another page to navigate to with financial data using the free [Finnhub API](https://finnhub.io/docs/api#introduction), Showing:
	* Company News
	* Searchable stock prices
	* Symbol Lookup
	
	
## Project Schedule



| Day        | Deliverable                                                                                   | Status     |
| ---------- | --------------------------------------------------------------------------------------------- | ---------- |
| July 31 - August 2 | Prompt / Wireframes / Priority Matrix / Timeframes                                      | Incomplete   |
| August 3    | Project approval, orgainization, component creation, Airtable connection.                        | Incomplete   |
| August 4    | Build main functionality: signup/login, budget creation.      | Incomplete   |
| August 5    | Add charts, settings page for profile updates, and start styling. | Incomplete   |
| August 6    | Make responsive and complete styling, check that all MVP's are complete.   | Incomplete   |
| August 7    | Presentations                                                                                 | Incomplete |

## Priority Matrix

![Priority-Matrix](https://github.com/Henry-Cook/Budget-Dashboard/blob/master/New%20Project%20Pictures/Project2Matrix.png?raw=true)

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

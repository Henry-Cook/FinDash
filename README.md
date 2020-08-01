# Budget Dashboard

## Project Description
	
Budget Dashboard is a  React.JS app that uses [Airtable](https://airtable.com/) for a basic database connection, this allows for a simulated user authentication.  Users can very easily build budgets by adding information into the three budgeting categories: “Bills”, “Living Expenses”, and “Everything Else”.  The app will then use [react-chartjs-2  ](https://www.npmjs.com/package/react-chartjs-2)  to render graphs so that users can visualize their finances. 

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

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: | :---: | :---: | :---: |
| Write out funcationality of components | M | 2hrs| - | - |
| Create color scheme and choose fonts | L | 2hrs| - | - |
| Add components and test | M | 2hrs| - | - |
| Start with basic desktop view oriented CSS - See wireframes | M | 3hrs| - | - |
| Create Airtable schema, add connection, test |H | 3hrs| - | - |
| Build login/signup component with Airtable connection  | H | 3hrs| | - |
| Add Budget creation | H | 3hrs| - | - |
| Add Budget management after creation | H | 3hrs| - | - |
| Add charts using the data from airtable | H | 3hrs| - | - |
| Create user setting/profile page | M | 3hrs| - | - |
| Confirm that all MVP requirements are met + Anything that wasn't completed| H | 3hrs| - | - |
| Style everything, and make responsive| H | 3hr| - | - |
|------------- Post MVPs -------------|
| Add Dark Mode | L | 2hr| - | - |
| Create new page with fincial data | L | 5hr| - | - |
|------------- Totals -------------| - | 40hrs| - | - |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
// Will add once completed
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

# Budget Dashboard

## Project Description

Findash is a finacial dashboard built in [React](https://reactjs.org/) that uses [Airtable](https://airtable.com/) for a basic database connection. The point of this application was to create a good looking dashboard that is responsive at all breakpoints. There are two main sections of the app, Budget Manager and Market Watch. The first allows users to create a budget focusing on three main catogories: "Bills", "Expenses", and "Everything Else". The Market Watch section let's users look up the preformance of their favorite stocks. Currently you can only use the companies symbol to look up their information. The app will then use [react-chartjs-2 ](https://www.npmjs.com/package/react-chartjs-2) to render graphs so that users can visualize their budget, and stock information.

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

|                                                                           Mobile                                                                            |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![Mobile](https://github.com/Henry-Cook/Budget-Dashboard/blob/master/New%20Project%20Pictures/Screen%20Shot%202020-08-01%20at%2010.31.14%20AM.png?raw=true) |

|                                                                           Desktop                                                                            |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![desktop](https://github.com/Henry-Cook/Budget-Dashboard/blob/master/New%20Project%20Pictures/Screen%20Shot%202020-08-01%20at%2010.23.32%20AM.png?raw=true) |

Made with [wireframe.cc](https://wireframe.cc/)

## MVP

- Budget Manager/Creator.
- Shows breakdown on charts.
- Navigation bar with access to budget page and settings page.
- Responsiveness for mobile, tablet , desktop users.

## PostMVP

- Dark Mode
- Add another page to navigate to with financial data using the free [Finnhub API](https://finnhub.io/docs/api#introduction), Showing:
  _ Company News
  _ Searchable stock prices \* Symbol Lookup

## Project Schedule

| Day                | Deliverable                                                               | Status   |
| ------------------ | ------------------------------------------------------------------------- | -------- |
| July 31 - August 2 | Prompt / Wireframes / Priority Matrix / Timeframes                        | Complete |
| August 3           | Project approval, orgainization, component creation, Airtable connection. | Complete |
| August 4           | Build main functionality: budget creation.                                | Complete |
| August 5           | Add charts, settings page for profile updates, and start styling.         | Complete |
| August 6           | Make responsive and complete styling, check that all MVP's are complete.  | Complete |
| August 7           | Presentations                                                             | Complete |

## Priority Matrix

![Priority-Matrix](https://github.com/Henry-Cook/Budget-Dashboard/blob/master/New%20Project%20Pictures/Project2Matrix.png?raw=true)

## Timeframes

| Component                                                                  | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Write out funcationality of components                                     |    M     |      2hrs      |     3hrs      |    3hrs     |
| Create color scheme and choose fonts                                       |    L     |      2hrs      |      1hr      |     1hr     |
| Add components and test                                                    |    M     |      2hrs      |     2hrs      |    2hrs     |
| Start with basic desktop view oriented CSS - See wireframes                |    M     |      3hrs      |     2hrs      |    2hrs     |
| Create Airtable schema, add connection, test                               |    H     |      3hrs      |      1hr      |     1hr     |
| Add Budget creation                                                        |    H     |      3hrs      |     3hrs      |    3hrs     |
| Add Budget management after creation                                       |    H     |      3hrs      |     2hrs      |    2hrs     |
| Add charts using the data from airtable                                    |    H     |      3hrs      |     2hrs      |    2hrs     |
| Confirm that all MVP requirements are met + Anything that wasn't completed |    H     |      3hrs      |      1hr      |     1hr     |
| Style everything, and make responsive                                      |    H     |      3hr       |     5hrs      |    5hrs     |
| ------------- Post MVPs -------------                                      |
| Add Dark Mode                                                              |    L     |      2hr       |     3hrs      |    3hrs     |
| Create new page with fincial data                                          |    L     |      5hr       |      1hr      |     1hr     |
| ------------- Totals -------------                                         |    -     |     40hrs      |     26hrs     |    26hrs    |

## Code Snippet

This Snippet shows off how I was able to figure out implementing dark mode. I used the useContext hook to send the themes variable to each necessary component. Themes was set to either true or false according to whether a button located in the Themes.js componet has been clicked.

```
              <div
                  className="title-bar"
                  style={{
                    backgroundColor: themes === true ? "#393e46" : "#ffffff",
                    borderBottom:
                      themes === true
                        ? "1px solid #222831"
                        : "1px solid rgb(214, 211, 211)",
                  }}
                >
                  <Title />
                  <Themes change={changeTheme} />
                  <ProfileBadge />
                </div>
```

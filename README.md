Substantive Research Technical Task
To start do the following:

1. yarn (or npm} install;
2. yarn (or npm) run start;
3. This should automatically open a new window on your browser if not go to http://localhost:3000 on your browser

Pre-build planning:
Create a fetch function to retrieve interaction from Api (statically load?)
Group interactions by sector.
Create an array of sectors.
Sort grouped interactions by date.
Create a sidebar component based on all interactions and an array of sectors, each sector will have a button when clicked will change a redux state choosing what data is shown.
Create a top bar to choose how the data is shown (pie chart for percentage, doughnut and bar chart for interactions, maybe a fourth as well)
Styles (Tailwind or Sass?)
Use ChartJs to easily create the charts.
90 mins max
(Typescript or JavaScript?)
(Next or React?)
Javascript to save time, no need for API, and only one JSON to fetch so statically loading won’t make much difference, so use react.
Fetch data into a redux state to function as static loading.
Use the redux toolkit to save time.
Use sass for bonus points

Future improvements:
Use Typescript for static typing.
Use NextJs for static loading and optimizations.
Use Material UI Components with Tailwind for better-looking UI
Create custom charts for better responsive design

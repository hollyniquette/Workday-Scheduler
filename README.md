### Workday Planner

A simple schedule planner that allows the user to add, edit, and save hourly tasks for a standard 9-5 workday. The app utilizes jQuery and day.js to create a dynamic and responsive interface.

## Code Overview

- Utilized jQuery functions to interact with the DOM
- Wrapped all code in '$(document).ready()' to ensure that code is run once the page loads
- Used create hour function to create rows for each hour of the 9-5 workday
- Input hour as the parameter to determine the label and id for each row
- Used functions and classes to format the display of past and present colors of events
- Event listeners on the save button allow entries to be saved on local storage

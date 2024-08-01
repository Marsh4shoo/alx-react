0x02. React props By Marshal Zvinoira 

Tasks
0. Basic components
mandatory
Start with your files from the last task of the 0x01. React intro project

Instead of creating new elements, we’re going to create components to split the project. The App.js is going to become the main entry point, the shell, for every component in the app.

Create a Header component
Create a new folder Header:

Move the code of the header from the App.js to a new file Header.js
Move the css code, related to the header, of the App.css to a new file named Header.css
Create an empty Header.test.js. We’ll add tests for it later.
Create a Footer component
Create a new folder Footer:

Move the code of the footer from the App.js to a new file Footer.js
Move the css code, related to the footer, of the App.css to a new file named Footer.css
Create a Footer.test.js, we will add the tests later
Create a Login component
Create a new folder Login:

Move the code of the login section from the App.js to a new file Login.js
The code should be wrapped in a React Fragment
Move the css code, related to the login, of the App.css to a new file named Login.css
Create a Login.test.js, we will add the tests later
Modify the shell
In the index.js:

Remove the root-notifications
Remove the Notifications import
In the App.js:

Import Notifications, Login, Footer, and Header
Add the new Notifications component before the div.App element
Wrap Notifications and the rest of the div.App within a React Fragment
In the div.App, replace the header code by the new Header component
In the div.App-body, replace the login code by the new Login component
In the div.App-footer, replace the footer code by the new Footer component
In the App.test.js:

Most tests will fail, only keep the one testing that the component renders without crashing
Requirements:

At this point, reloading the App should display the exact same page as the last task
The console in your browser should not show any error or warning

# Floral Match

The aim of Floral Match is to find the matching pairs of tiles within as few tries as possible. There is a limit of 25 attempts to make things more challenging. Users will click on a tile to reveal it, note what image has been shown, then try to locate the matching tile. It is aimed at users who are looking to test their memory, those looking for a simple game to help them relax, possibly as part of a mindfulness activity, or users who just want a fun distraction to pass the time. It will have relaxing imagery such as a welcoming landing page image and also flowers on the face side of the tiles. 

![Image of application pages on different screen sizes](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/am-i-responsive.JPG)

[Link to deployed site](https://domsq.github.io/project-tile-match-game/index.html)

## UX

### Imagery

For my website, I went with a natural theme centred around greenery and flowers to promote the idea that playing the game could be used as part of a relaxation or mindfulness exercise. The landing page has a background image of a field of flowers and on the game page, the tile face sides are all flower images. The background image to the game page is a simple image of a wall of leaves.

### Typography

The fonts used for my website are "Chicle" for headings and "Lato" for the remaining body and button text. These fonts are provided by Google Fonts.

### Colour scheme
 
The fall back colour for the background images on the landing and game pages, should they not load correctly, is "darkslategray", which is a dark green \ blue colour. The colour used for the buttons is #5B5B5B, which is a medium grey colour. "Darkslategray" has also been used for the font colour of the heading on the landing page. The content box on the landing page, the footer, the scoring and game control areas and also the modal popups have the colour #E4E1D0 for their background, which is a pale sandy colour. The font colour used for the buttons is "whitesmoke" and the main font colour otherwise is black.

Please see below the wireframes for desktop, mobile and tablet:

![Wireframe of homepage](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/homepage-wireframe.JPG)<br>
![Wireframe of game page](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/game-page-wireframe.JPG)<br>
![Wireframe of game completion](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/game-complete-wireframe.JPG)<br>
![Wireframe of contact us page](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/contact-us-wireframe.JPG)<br>
![Wireframe of homepage on tablet](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/tablet-homepage-wireframe.JPG)<br>
![Wireframe of game page on tablet](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/tablet-game-page-wireframe.JPG)<br>
![Wireframe of homepage on mobile](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/mobile-homepage-wireframe.JPG)<br>
![Wireframe of game page on mobile](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/mobile-game-page-wireframe.JPG)

In the final design of the application, it differs from the wireframes as follows:

- The title, "start game" and "how to play" buttons on the landing page are grouped together rather than separate
- The scoring area on the game page now shows "Attempts" instead of "Remaining tries"
- The proposed timer has been removed from the scoring area on the game page
- The game control buttons below the tile grid are more central in their container

Earlier in the planning process, I was initially going to have the application consist of a single page, however decided to amend this to separate landing and game pages once discussed with my mentor. The "Contact Us" form button has also been moved into a footer. See below for all wireframes, including both the earlier and later versions:

[Link to earlier wireframes here](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/floral-match-wireframes-v1.pdf)<br>
[Link to later wireframes here](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/floral-match-wireframes-v2.pdf)

User stories as follows:

### New users:
-	The user would like to play a game to test their memory<br>
-	The user is looking for a game to help them relax<br>
-	The user would like to play a game to pass the time 
### Returning users:
-	The user is looking to improve on their score from their last attempt<br>
-	The user wants to see whether the game has any new features or functionality
### Frequent users:
-	As per returning users

## Features

### Existing Features

The application has a landing page with "How To Play", "Start Game" and "Contact Us" buttons to explain the rules of the game, allow the user to start playing or submit any feedback:

![Image of homepage](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/homepage.JPG)

Clicking on "How To Play" brings up the game rules:

![Image of rules](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/how-to-play.JPG)

Clicking on "Contact Us" brings up the following form:

![Image of contact us page](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/contact-us.JPG)

If any feedback is entered into the form, a confirmation is displayed after clicking submit:

![Image of contact us confirmation](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/contact-confirm.JPG)

"Start Game" takes the user to the game page:

![Image of game page](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/game-page.JPG)

When playing the game, if the user successfully finds all matches they see the following confirmation:

![Image of success message](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/success.JPG)

If the user exceeds the allowed 25 attempts without finding all matches, the following is displayed:

![Image of game over message](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/game-over.JPG)

Should the user wish to reset the game at any point, a confirmation is shown as follows before the game resets:

![Image of reset confirmation](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/reset-game-popup.JPG)

### Features Left to Implement

- Allow the user to set the difficulty level through increasing \ decreasing the attempts allowed
- Implement a timer function and allow the user to set a time limit if desired, rather than limiting the number of attempts

## Technologies Used

- HTML - Provides the structure for the website
- CSS - Used to style the content and elements
- JavaScript - Provides the required logic to allow for interactivity 
- Font Awesome - Used for the icons present on the buttons in the game
- Google Fonts - I used the Chicle and Lato fonts for my website
- Gitpod - IDE used for development, incorporates git version control
- GitHub - Repository where code is kept and also git version control
- GitHub Pages - Platform that the website is deployed on
- [tinypng.com](https://tinypng.com) - Tool for optimising image sizes
- [favicon.io](https://favicon.io/favicon-converter/) - Used for creating favicon file

## Testing

-	The user would like to play a game to test their memory<br><br>
The user will first encounter the landing page when accessing the application. They can then click on "How To Play" button to view the rules before playing the game:
![Image of rules](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/how-to-play.JPG)<br>
Once they've familiarised themselves with the rules, clicking "Start Game" takes them to the game page, which is played by revealing the tiles in turn and remembering their positions so matches can be attempted:
![Image of game page](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/game-page.JPG)<br>

-	The user is looking for a game to help them relax<br><br>
The landing page of the application features a field of flowers, which should promote a calming effect:
![Image of homepage](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/homepage.JPG)<br>
The background to the game page is a wall of leaves, which should hopefully also promote calm:
![Image of game page](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/game-page.JPG)<br>
The tile face sides feature floral images:
![Image of tiles face up](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/game-tiles-face-up.JPG)<br>

-	The user would like to play a game to pass the time<br><br>
From the landing page, the user will click on "Start Game" to move onto the game page:
![Image of game page](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/game-page.JPG)<br><br>

The application has been tested using the following browsers:<br>
- Google Chrome<br>
- Microsoft Edge<br>
- Mozilla Firefox<br><br>
Within Chrome and Edge, the following breakpoints were checked using responsive mode:<br>
- Mobile S - 320px<br>
- Mobile M - 375px<br>
- Mobile L - 425px<br>
- Tablet - 768px<br>
- Laptop - 1024px<br>
- Laptop L - 1440px<br><br>
As well as the following emulated devices:<br>
- Moto G4<br>
- Galaxy S5<br>
- Pixel 2<br>
- Pixel 2 XL<br>
- iPhone 5/SE<br>
- iPhone 6/7/8<br>
- iPhone 6/7/8 Plus<br>
- iPhone X<br>
- iPad<br>
- iPad Pro<br>
- Surface Duo<br><br>
In Firefox, the following emulated device sizes were checked:<br>
- Galaxy S9/S9+ Android 7.0<br>
- iPad<br>
- iPhone 6/7/8 iOS 11<br>
- iPhone 6/7/8 Plus iOS 11<br>
- iPhone X/XS iOS 12<br>
- Kindle Fire HDX Linux

The website was also checked at full width on a 1080p and 4K screen and tested on Oppo Find X2 Lite and Samsung Galaxy S20 FE 5G handsets. Media queries were added where necessary to maintain site viewability.<br>
The website has been optimised for 1080p and smaller screens but works as expected on a 4K monitor. If viewing on a screen other than 1080p, the website scales accordingly. I also had a few friends test the application to ensure it functions as expected and barring some minor issues (which have since been resolved) the game plays as expected. Factors such as clicking the back button, etc don't break the game functionality. Some of the minor issues noticed are included under "Bugs" as below.<br>

### Bugs 

During development of my application, I encountered the following bugs:<br>
- For the "How To Play" button, I had to rather use the 'onclick' HTML attribute instead of an event listener, as going from the landing page to game page would cause JavaScript errors due to the now missing elements that couldn't be seen by script.js.
- As I required event listeners that relied upon the elements in game.html being loaded, I had to create a separate script file (gamelogic.js) to prevent errors when on the landing page.
- Tile matches could be forced by clicking the same tile twice. This was corrected with additional code to disable the clicked tiles to prevent this from happening, unless they don't match of course.
- Occasionally a non-matching tile would not flip back over and would stay face up and disabled. This was corrected with an additional check in JavaScript.
- There was significant vertical scrolling at resolutions such as 1600 x 900. Amended by resizing of elements, adjusting of margin and other tweaks.

### Validator Testing

- HTML
    - No errors but 1 warning returned when tested using the official W3C validator:<br>
    - [Check of landing page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdomsq.github.io%2Fproject-tile-match-game%2F)<br>
    - [Check of game page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdomsq.github.io%2Fproject-tile-match-game%2Fgame.html)<br>
    The warning for game.html is simply because there isn't a heading element in use on that page. 

- CSS
    - No errors but 1 warning when tested using the official Jigsaw validator:<br>
    ![Image of Jigsaw validation](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/jigsaw-validation.JPG)<br>
    ![Image of Jigsaw warning](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/jigsaw-warning.JPG)<br>
    The warning is simply stating it couldn't check an import link due to the validation method being direct input.

- JavaScript
    - No major issues reported with either JavaScript file:<br>
    ![Image of JSHint check for script.js](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/jshint-script-js.JPG)<br>
    ![Image of JSHint check for gamelogic.js](https://raw.githubusercontent.com/domsq/project-tile-match-game/master/screenshots/jshint-gamelogic-js.JPG)<br>
    The warning for script.js, namely functions "openRulesPage" and "closeRulesPage" showing as unused is due to my having to use "onclick" attributes to call these functions. This was done as when moving from the landing page to the game page, the "How To Play" button element is no longer present and so would otherwise cause an error in JavaScript if an event listener was used for instance. 

## Deployment

My website was deployed via GitHub Pages as follows:
- Browse to https://github.com and login
- Navigate to the required repository (in this case, project-tile-match-game)
- Click on the "Settings" button (has a gear icon to the left of it)
- Click on "Pages"
- Under "Source", click the dropdown for "Branch" select "master" and then "Save"
- After a brief period, a message appears at the top to state "Your site is published at..."

## Credits 

### Content

Application design and layout are my own creation with additional feedback provided by my mentor. For the media used on the website, please see below.<br>

### Media

All images are from [Unsplash](https://www.unsplash.com) and in particular by the following photographers:<br><br>
[Gabriel Manlake](https://unsplash.com/@osomax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)<br>
[Marissa Daeger](https://unsplash.com/@marissadaeger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)<br>
[Tra Tran](https://unsplash.com/@tratran?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)<br>
[Karl-Heinz Müller](https://unsplash.com/@khmuller?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)<br>
[Frank Busch](https://unsplash.com/@frankbusch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)<br>
[mana5280](https://unsplash.com/@mana5280?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)<br>
[Francesco Ungaro](https://unsplash.com/@francesco_ungaro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)<br>
[Constant Yearning](https://unsplash.com/@grosse_koalition?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)<br>
[Engin Akyurt](https://unsplash.com/@enginakyurt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)<br>
[Achim Ruhnau](https://unsplash.com/@achimr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)<br>
[Angelika Paduch](https://unsplash.com/@andziax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)<br><br>

### Acknowledgements

In addition to the content covered in the LMS, I used the following tutorials for additional guidance:<br><br>
https://www.w3schools.com/howto/howto_css_modals.asp<br>
https://www.w3schools.com/css/css_grid.asp<br>
https://www.youtube.com/watch?v=tjyDOHzKN0w <br>
https://www.youtube.com/watch?v=c_ohDPWmsM0<br>
https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript<br><br>
I would also like to acknowledge my mentor Akshat Garg for all his help and feedback and my fellow students on Slack.




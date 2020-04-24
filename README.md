# password_generator

For this assignment, I created a fuctioning password generator in order to generate a randomized combination of characters according to the user's preferences.
The user's preferences are determined by answers to questions asking if the password should include capital letters, numbers, and/or symbols. By default, the password will include lowercase letters.

For the script to work, I first created several arrays that held the possible characters to be used in the password. I then developed a function to write the password including if/else conditional statements that are dependent on the user's preference answers.

Lastly, there is a flaw in my code. When the "Generate Password" button is clicked on the first time (on a just refreshed page), the function writePassword and its for loops will work depending on the conditional statements. However, if the page is not refreshed, the conditional statements might be ignored after the initial generated password and, unless the page will refresh, the following passwords will be dependent on the initial answers of the user.
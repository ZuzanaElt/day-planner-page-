# DAY PLANNER - BOOTCAMP CHALLENGE

The main goal of this challenge is to crate a page of Daily scheduler.


## Application requirements
The application includes the following:

* Display the current day at the top of the calender when a user opens the planner.
 
* Present timeblocks for standard business hours when the user scrolls down.
 
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
* Allow a user to enter an event when they click a timeblock

* Save the event in local storage when the save button is clicked in that timeblock.

* Persist events between refreshes of a page

All requirements were completed.

## Note

Moment.js was not used as it is being fased out and therefore a different way how to get dates had to be found. I decided to use the Javascript own date formats

## How to use
Use of this application is intuitive.
Date and time are displayed when you open the application for the first time.
After you choose your timeslot, after clicking in the area you can input the task.
This can then be saved and will stay saved even after page is refreshed. 
The time slots change color depending on time of day. If the task is still ahead the slot will be green, if it is in the past it will be grey. If it is at present it will be red


## Credits

Two pieces of code where copied from the interenet
    1. displaying current date - copied from Asiri Manjitha in DD/MM/YYYY format;
    //https://stackoverflow.com/questions/25445377/how-to-get-current-date-without-time#:~:text=setHours(0%2C0%2C0,%2C0)%20should%20be%20enough.

and
    2. /current time - copied from Satpal
    //https://stackoverflow.com/questions/18229022/how-to-show-current-time-in-javascript-in-the-format-hhmmss


## URL
https://zuzanaelt.github.io/day-planner-page-/
and 
Github page:
https://github.com/ZuzanaElt/day-planner-page-

screenshot:
[image of the page](assets/images/Screenshot%20(39).png)
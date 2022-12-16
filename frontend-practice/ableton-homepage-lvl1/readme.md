This is a Frontend Practice, level 1 project where the task is to recreate the Ableton About page design in 2021/2022.

Link to FEP task
https://www.frontendpractice.com/projects/ableton

Link to the original source live page, as of Dec 16, 2022
https://www.ableton.com/en/about/

I had no issues with the hero.

The content sections were quite easy, after I figured out how to place the pictures in the collage properly.

The footer was relatively easy, it uses a grid layout where the mobile version does nothing, only changes the order of the sections (pop up the newsletter signup to the first place)(changing the order of the elements is only available on grid or flexbox), while the desktop version places the sections into a 3-repeat column layout, where the newsletter field is in the 3rd position.
One BIG ISSUE I do have is the the main content is overflowing to the footer, which is likely a main content issue rather than a footer issue. A quick search did not help find a solution yet.

The menu bars were the real CHALLENGE.
Building the hidden mobile menu was alright, where JS helps me unhide the menu on a click.
The desktop version was much more difficult, because the multi level organisation is very finicky and here a leaned heavily on the Dev tools and the original code. I know I did not do it the same way as they had, but it works. I managed to make the multi-level showing menu with the conditionally hidden buttons as well.

A small issue was placing the iframe YT video because havin g a consistent aspect ratio is a pain and setting up manual dimensions not too responsive, while the iframe did not respond to any relative units at all.

The website is responsive on mobile, its not perfect but is 100% usable. There are no major issues except the main content overflow into the footer.

One thing I did not implement is the sticky second header menu on scroll. The FEP task sounds pretty easy, making it sticky using the Intersection Observer API would be easy enough, however the original functionality is much more intriguing and above my level at this point.

There is much room to improve this project, starting from the organisation of the html and also making the CSS more DRY. However I wanted to focus on results and not perfecting the code, otherwise I will allways be running in place.

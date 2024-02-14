/* 
Code one won't work because the browser won't recognize the element that
its id = el only when it will reach the tag that will create the element
*/

/* 
Code two will work because window.onload will let the browser finish creating all elements
in the body tag (loading the page or the window) then it will enter the function that is 
associated with the onload event and then styling the h1 tag
*/

/* 
Code three will work because script tag is in the recommended place which is
at the end of the body tag which means browser will finish creating elements
then it will go to the script tag and execute the code
*/
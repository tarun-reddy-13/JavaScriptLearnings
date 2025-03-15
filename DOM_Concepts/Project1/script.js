/*

Window Object:
--------------

The window object represents an open window in a browser. It is browser's object(not JS)
& is automatically created by browser.

It is a global object with lots of properties and methods.

*/

/*

manipulating using dom

*/

let headding = document.querySelector("h2");
headding_text = headding.innerText;
let new_headding = headding_text+", from learners";
headding.innerText = new_headding;

let containers = document.querySelectorAll(".box");

let idx=1;
for(let container of containers){
    container.innerHTML += `<p><i>unique content in div ${idx}<i><p>`; 
    idx++;
}

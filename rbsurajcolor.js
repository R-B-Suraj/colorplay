let domain = '0123456789ABCDEF';

let pickColor = function() { // getting a random color and its complement randomly

    let temp;
    let colours = {
        colour: '#',
        complement: '#'
    };


    for (let i = 0; i < 6; i++) {

        temp = Math.floor(Math.random() * 16);
        colours.colour += domain[temp];
        colours.complement += domain[15 - temp];

    }

    console.log(colours);

    return colours;
};








function deletechild(mess) // deletes a child if it has a parent
{
    if (mess.parentNode) {
        mess.parentNode.removeChild(mess);
    }

}



let prompt = function(heading, instruct) // to create a new element to show message
{
    let message = document.createElement("div");
    message.id = "instruct";
    message.innerHTML = "<h1>" + heading + "</h1>" + "<br>" + instruct;
    message.getElementsByTagName("h1")[0].style.cssText = "color:red; font-weight:bold; margin:0px; ";
    document.body.appendChild(message); // appends to body of document

    setTimeout(deletechild, 1100, message); // runs deletechild function after 1100ms, takes argument mess;


};












let container = document.getElementById("container");
let container_size = container.offsetWidth * container.offsetHeight; // getting size of container
let child_size;
let children = document.getElementsByClassName("incontainer"); // returns array of objects


let noch = 0; // nch number of children





function addnew() // creates and adds a new element to container
{
    let input = document.getElementById("input");

    let new_child = document.createElement("div"); // creates a div element dynamically
    new_child.classList.add("incontainer");
    new_child.textContent = "" + input.value;
    let ch_color = pickColor();
    new_child.style.color = ch_color.complement;
    new_child.style.backgroundColor = ch_color.colour;

    container.appendChild(new_child);
    children[noch] = new_child;
    ++noch;
}







let add = function() {

    if (noch === 0)
        addnew();
    else {
        child_size = children[0].offsetWidth * children[0].offsetHeight; // getting size of child element
        console.log(container_size);

        if ((noch * child_size - 1) < container_size)
            addnew();
        else
            prompt('HEY!', 'this is too much'); // if going to overflow

    }



};





let remove = function() {
    if (noch > 0) {
        let val = document.getElementById("input").value; // value inside textfield
        console.log(typeof(val), val);
        console.log(typeof(children[0].textContent), children[0].textContent);
        console.log(children[0].textContent == val);
        console.log(typeof(children[0].width));



        let to_remove; // the child to be removed

        for (var i = 0; i < noch; i++) {
            if (children[i].textContent == val) // loose equal check
            {
                to_remove = children[i]; // child to be removed is stored
                children[i] = children[noch - 1]; // last element is assigned at the position where child is to be removed
                // so that all the remaining elements are inside the array of noch-1 elements
                deletechild(to_remove); // remove that child ( the function defined above)
                --noch; // decrease the number of children

                break;
            }
        }


    } else
        prompt('OOPS!', 'nothing to remove'); // if no element present 



};
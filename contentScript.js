let selector = "stipend_container_table_cell";

var elementStipend = document.getElementsByClassName(selector);

for (let i = 0; i < elementStipend.length; i++) {

    let InternshipCard = elementStipend[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

    let textStipend = elementStipend[i].innerText;
    let posHyphen = textStipend.search("-");
    let posSlash = textStipend.search("/");
    let posLump = textStipend.search("Lump");

    let stipend;

    if (textStipend.search("Lump-Sum") != -1) { // found 
        //  its a range     //range 
        stipend = textStipend.slice(0, posLump);

    } else if (textStipend.search("-") != -1) { //RANGE => $5000-8000 /Month
        stipend = textStipend.slice(++posHyphen, posSlash);
    } else if (textStipend.search("/") != -1) {
        stipend = textStipend.slice(0, posSlash);
    } else {
        console.log("E: foregin value: ", textStipend);
    }

    if (stipend < 10000) {
        InternshipCard.hidden = true;
        console.log("Eliminated these :", textStipend);
    } else {

    }

}

//reloading the page to apply the filter on pages
//filter was not running on paginated page
location.reload(true);
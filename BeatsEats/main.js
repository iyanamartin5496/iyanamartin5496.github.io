var holder = document.getElementById("holder");
var sort = "Number";
var filter = "None";

var sample = _.flatten(_(eats).pluck("mealIngredients"));
var sampleGenre = _.flatten(_(beats).pluck("genre"));
// console.log(sample) ;

var uniqueIngredients = _.uniq(sample).sort();
var uniqueGenres = _.uniq(sampleGenre).sort();
// var uniqueIngredients = _(sample).uniq();

var ingredientDrop = document.querySelector("#mealIngredientsSelect");
var genreDrop = document.querySelector("#genreSelect");

_(uniqueIngredients).each(fillupingdropdown);

_(uniqueGenres).each(fillupgenredropdown);

// _(beats[0].genre).each(fillupgenredropdown);

ingredientDrop.addEventListener("change", function(e) {

    var find = _.filter(eats, function(individual_thing) {
        if (   _(individual_thing.mealIngredients).contains(ingredientDrop.value)   ) {

            return true;
        }
        // if (   _(individual_thing.imagelink).contains(ingredientDrop.value)   ) {

        //     return true;
        // }

    });

    console.log("eats", find);

});

genreDrop.addEventListener("change", function(e) {

    console.log(genreDrop.value);

    var found = _.filter(beats, function(beat) {
        return _(beat.genre).contains(genreDrop.value);
    });

    // hide everything 
    // show beats screen
    // fill beats screen with filtered beats from found

    console.log("beats" , found);

    renderArray(found);


    // for (var i = 0; i < beats.length; i++) {

    //     var thisparticularone = beats[i];

    //     console.log("for loop! loop number " + i);
        

    //     if (thisparticularone.genre === "Funk") {

    //         console.log(thisparticularone.mealName);    
    //     }
    // }  
});

update();

function fillupingdropdown(element, index, list){

    var newElement = document.createElement("option");

    newElement.innerHTML = element;

    ingredientDrop.appendChild(newElement);

    //console.log(element);

}

function fillupgenredropdown(element, index, list){

    var newElement = document.createElement("option");

    newElement.innerHTML = element;

    genreDrop.appendChild(newElement);

    //console.log(element);

}

function emptyHolder() {
    holder.innerHTML = "";
}

function renderArray(arr) {

    emptyHolder();

    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];

        var Mom = document.createElement("div");
        Mom.classList.add("track");

        var newImage = document.createElement("img");
        newImage.src = "photos/b" + item.date + ".png";
        Mom.appendChild(newImage);

        var newElement = document.createElement("div");
        newElement.innerHTML = "<h1>" + item.trackArtist + " - " + item.trackName + "</h1>";   

        newElement.classList.add("title");

        Mom.appendChild(newElement);

        holder.appendChild(Mom);

    }
}



function update() {
    //console.log(sort, filter);

    // var sorted = _.sortBy(pokemon, function(p) {
    //     if (sort == "Name") {
    //         return p.name;
    //     } else if (sort == "Number") {
    //         return p.id;
    //     }
    // });

    // var filtered = _.filter(sorted, function(p) {
    //     if (filter == "None") {
    //         return true;
    //     } else {
    //         return p.type.indexOf(filter) >= 0;
    //     }
    // });

    // emptyHolder();
    // renderArray(filtered);
}

var holder = document.getElementById("holder");
var sort = "Number";
var filter = "None";

var sample = _.flatten(_(eats).pluck("mealIngredients"));
var sampleGenre = _.flatten(_(beats).pluck("genre"));

var uniqueIngredients = _.uniq(sample).sort();
var uniqueGenres = _.uniq(sampleGenre).sort();

var ingredientDrop = document.querySelector("#mealIngredientsSelect");
var genreDrop = document.querySelector("#genreSelect");

_(uniqueIngredients).each(fillupingdropdown);

_(uniqueGenres).each(fillupgenredropdown);

ingredientDrop.addEventListener("change", function(e) {

    var find = _.filter(eats, function(individual_thing) {
        if (   _(individual_thing.mealIngredients).contains(ingredientDrop.value)   ) {

            return true;
        }

    });

    console.log("eats", find);

});

genreDrop.addEventListener("change", function(e) {

    console.log(genreDrop.value);

    var found = _.filter(beats, function(beat) {
        return _(beat.genre).contains(genreDrop.value);
    });

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

        Mom.dataset.track = item.trackName;

        var newImage = document.createElement("img");
        newImage.src = "photos/b" + item.date + ".png";
        Mom.appendChild(newImage);

        var newElement = document.createElement("div");

        newElement.classList.add("title");

        Mom.appendChild(newElement);

        holder.appendChild(Mom)

    }

        var tiles = document.querySelectorAll("#holder .track");

        console.log(tiles);

        _(tiles).each(function(thisone) {
            thisone.addEventListener("click", function() {
                showOverlay(thisone.dataset.track);
            });
        });
}


var overlay = document.querySelector(".overlay");

overlay.addEventListener("click", function() {
    overlay.classList.add("hidden");
    overlay.innerHTML = "";
});


function showOverlay(incoming){
    overlay.innerHTML = "";

    console.log(incoming);

    var album = _.findWhere(beats, {trackName: incoming});

    var food = _.where(eats, {mealName: album.mealName});

    console.log("album:");
    console.log(album);
    console.log("matching food:");
    console.log(food);

    var title_element = document.createElement("h1");
    title_element.innerHTML = album.trackName +  "-"  + album.trackArtist;

    var audio = document.createElement("audio");
    audio.src = "audio/b" + album.date + ".mp3" ;

    // var Dad = document.createElement("div");
    // Dad.classList.add("track");

    // Dad.dataset.track = item.mealName;

    // var foodImage = document.createElement("img");
    // foodImage.src = "photos/e" + item.date + ".png";
    // Dad.appendChild(foodImage);

    _.each(food, function(thisfood) {
        //do something with thisfood

    });

    audio.controls= "controls";

    audio.autoplay= true;

    overlay.appendChild(title_element);

    overlay.appendChild(audio);

    overlay.classList.remove("hidden");

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

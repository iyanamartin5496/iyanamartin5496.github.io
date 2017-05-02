            var holder = document.getElementById("holder");
            var sort = "Number";
            var filter = "None";



            var sample = _.flatten(_(eats).pluck("mealIngredients"));
            // console.log(sample) ;

            var uniqueIngredients = _.uniq(sample).sort();
            // var uniqueIngredients = _(sample).uniq();

            var ingredientDrop = document.querySelector("#mealIngredients");

            _(uniqueIngredients).each(fillupdropdown);

            function fillupdropdown(element, index, list){

                var newElement = document.createElement("option");

                newElement.innerHTML = element;

                ingredientDrop.appendChild(newElement);

                console.log(element);

            }

            function emptyHolder() {
                holder.innerHTML = "";
            }

            function renderArray(arr) {
                for (var i = 0; i < arr.length; i++) {
                    var item = arr[i];

                    var newElement = document.createElement("div");
                    newElement.innerHTML = "<h1>" + item.id + ": " + item.name + "</h1>";

                    holder.appendChild(newElement);
                }
            }

            function update() {

                console.log(sort, filter);

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

 
            document.querySelector("#sort").addEventListener("change", function(e) {

                console.log(e.target.value);

                sort = e.target.value;
                update();
            });

            document.getElementById("filter").addEventListener("change", function(e) {
                filter = e.target.value;
                update();
            });

            update();

            document.querySelector("#test").addEventListener("change", function(e) {

                console.log(e.target.value);
                console.log(beats.length);


                var found = _.where(beats, {genre:"Funk"});

                console.log("beats" , found);

                var find = _.filter(eats, function(individual_thing) {
                    if (   _(individual_thing.mealIngredients).contains("olive oil")   ) {

                        return true;
                    }
                });

                console.log("eats", find);



                // for (var i = 0; i < beats.length; i++) {

                //     var thisparticularone = beats[i];

                //     console.log("for loop! loop number " + i);
                    

                //     if (thisparticularone.genre === "Funk") {

                //         console.log(thisparticularone.mealName);    
                //     }
                // }


                
            });


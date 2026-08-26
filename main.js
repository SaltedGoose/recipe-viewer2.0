import { animate } from "./anime.esm.min.js";

// ======================================================
// YOUR RECIPES
// ======================================================

let recipes = [
    {
        type: "Main",

        name: "Garlic Butter Chicken Pasta",

        description:
            "Garlic Butter Chicken in a Cream Cheese and Herb Sauce",

        ingredients: [
            "2 Chicken Breasts",
            "2 & 1/2 tbsp Butter",
            "1 tsp Garlic Granules",
            "1/2 tsp onion granules",
            "1 tsp Paprika",
            "1 & 1/2 tsp Salt",
            "1 tsp Pepper",
            "1/2 tsp Thyme",
            "1/2 tsp Oregano",
            "? Pasta",
            "1/2 Cup Cream",
            "1/4 Cup Parmesan Cheese"
        ],

        instructions: [
            "Boil Pasta",
            "Melt 1 & 1/2 tbsp of Butter and fry Chicken in 1 tsp Paprika, 1/2 tsp Salt, Pepper, Thyme, Oregano and Onion Granules",
            "Add 1/2 tsp of Garlic Granules and fry for 2 more mins",
            "Clean out pan",
            "Melt 1 tbps Butter in pan and fry 1/2 tsp garlic garnules for 2 mins",
            "Pour in 1/2 Cup of Cream and bring to a gentle simmer",
            "Stir in 1/4 Cup Parmesan Cheese, 1tsp Salt and 1/2 tsp Pepper",
            "Simmer for 3 - 5 mins or until sauce has thickened",
            "Add Pasta and Chicken to pan and stir until everything is coated evenly",
            "Serve while hot"
        ],

        imagePath:
            "images/mains/Garlic Butter Chicken Pasta.jpg"
    },

    {
        type: "Main",

        name: "Cheesy Chicken Wraps",

        description:
            "Seasoned Chicken in a Cheesy Garlic Sauce, wrapped in tortilla wraps",

        ingredients: [
            "2 Chicken Breasts",
            "1 tsp Garlic Granules",
            "1 tsp Paprika",
            "1/2 tsp Onion Granules",
            "1/2 Salt",
            "1/2 Pepper",
            "1 & 1/2 tsp Butter",
            "1/2 Cup Cream",
            "1/4 Cup Parmesan Cheese",
            "4 Large Wraps",
            "1 Cup Cheddar Cheese",
            "1/4 Cup Mozzarella Cheese"
        ],

        instructions: [
            "Cook Chicken in 1 tsp Paprika, 1/2 tsp Garlic Granules and 1/2 tsp Onion Powder, Salt and Pepper",
            "Clean out Pan",
            "Melt 1 tbsp Butter in pan and fry 1/2 tsp of garlic granules for 2 mins",
            "Pour in 1/2 Cup of Cream and bring to a gentle simmer",
            "Stir in 1/4 Cup Parmesan Cheese, 1/2 tsp Salt and Pepper and simmer for 2-3 mins or until sauce thickens slightly",
            "Warm Wraps in Microwave for 10 secs",
            "Assemble wraps with Chicken, Sauce, Cheddar Cheese and Mozzarella Cheese",
            "Fold the Wraps tucking in the sides as you roll them up",
            "Toast the wraps in a toastie maker until crispy and cheese has begun to melt",
            "Slice wraps in half and serve while hot"
        ],

        imagePath:
            "images/mains/Cheesy Chicken Wraps.JPG"
    },

    {
        type: "Main",

        name: "Cajun Chicken Alfredo with Broccoli",

        description:
            "Pasta, Cajun Chicken and Broccoli in a Creamy Alfredo Sauce",

        ingredients: [
            "2 Chicken Breasts",
            "1 tsp Cajun Seasoning",
            "2 tbsp Butter",
            "1 tsp Garlic",
            "1 & 1/2 Cups Cream",
            "1 Cup Parmesan Cheese",
            "1/2 tsp Salt",
            "1/2 tsp Pepper",
            "? Pasta",
            "1 Broccoli"
        ],

        instructions: [
            "Chop Broccoli into Florets",
            "Boil Pasta in a Pan, once the Pasta is nearly cooked throw in Broccoli",
            "Once Cooked drain together and set aside",
            "Fry Chicken in a Pan covered in 1 tsp Cajun Seasoning",
            "Clean out pan",
            "Melt 2 tbsp of Butter and saute 1 tsp garlic granules for 2 mins",
            "Pour in 1 & 1/2 cups cream Cream, add 1/2 tsp Garlic Granules and bring to a gentle simmer. Cook for 3-4 mins until cream begins to thicken",
            "Stir in 1 Cup Parmesan Cheese and simmer until smooth and creamy. Season with  1/2 tsp Salt and Pepper",
            "Mix Pasta, Broccoli and Chicken until everything is coated",
            "Serve while Hot"
        ],

        imagePath:
            "images/mains/Cajun Chicken Alfredo with Broccoli.JPG"
    },

    {
        type: "Main",

        name: "Chicken Parmesan Calzone",

        description: "Seasoned Chicken in a Marinara Sauce and Cheese wrapped in a Pizza Dough",

        ingredients: [
            "2 Chicken Breasts",
            "1 tsp Garlic Granules",
            "1 tsp Garlic Italian Seasoning",
            "1 Cup Marinara Sauce",
            "1 Cup Mozzarella Cheese",
            "1/2 Cup Parmesan Cheese",
            "? Salt",
            "? Pepper",
            "2 Packs Pizza Dough",
            "1 Egg (Beaten)"
        ],

        instructions: [
            "In a Pan fry Chicken in 1 tsp Garlic Granules and Garlic Italian Seasoning and 1/2 tsp Salt and Pepper",
            "Roll out Pizza Dough into a large circle on a lightly floured surface. 1/4 inch Thick",
            "On one half of the Dough Spread a layer of Marinara Sauce leaving the edges dry",
            "Add the Cooked Chicken on top of the Sauce followed by Mozzarella and Parmesan Cheese",
            "Fold the other half of the Dough over the filling pressing the edges together to seal.",
            "Use a fork to crimp the edges to ensure its sealed",
            "Brush the beaten egg on the top of the Calzone and make slits in the top using a Knife so Steam can escape",
            "Cook in the Oven at 220C for 10 mins turn it around and then cook for 10 more mins",
            "Remove from Oven, cut into servings and serve while hot"
        ],

        imagePath:
            "images/mains/Chicken Parmesan Calzone.jpg"
    },

    {
        type: "Main",

        name: "Chicken and Broccoli Pasta Bake",

        description:
            "Chicken and Broccoli Pasta Bake covered in Cheese and baked in Oven",

        ingredients: [
            "2 Chicken Breasts",
            "1 Broccoli",
            "1/2 Dish Pasta",
            "1 Jar Creamy Tomato Sauce",
            "? Shredded Mozzarella Cheese",
            "? Sliced Mozzarella Cheese",
            "1 tsp Paprika",
            "1 tsp Garlic Powder",
            "1/2 tsp Onion Powder",
            "1 & 1/2 tbsp Butter"
        ],

        instructions: [
            "Cook Pasta",
            "Once Pasta nearly cooked add Broccoli and boil till both cooked",
            "Melt 1 & 1/2 Butter in a Pan and then Fry Chicken in 1tsp Paprika and 1/2 tsp Onion Powder and Garlic Granules",
            "Mix Pasta, Sauce and Chicken in a Pan until everything is coated",
            "Add Pasta to Dish and add Shredded Mozzarella occasionally",
            "Once Dish is full top with Sliced Mozzarella",
            "Heat Oven to 180C and cook Pasta Bake for 40 mins",
            "Then serve while hot"
        ],

        imagePath:
            "images/mains/Chicken Broccoli Pasta Bake.JPG"
    },

    {
        type: "Main",

        name: "Shepards Pie",

        description: "Mince covered with Creamy Mash covered in Cheese and baked in the Oven",

        ingredients: [
            "2 Carrots",
            "750g Mince",
            "500ml Beef Stock",
            "1 & 1/2 Bags Potatoes",
            "? Milk",
            "? Butter",
            "200g Cheese grated"
        ],

        instructions: [
            "Peel 2 Carrots and shred",
            "Peel 1 & 1/2 Bags of Potatoes and chop into small chunks",
            "Fry 750g of Mince in a Pan",
            "Put Potatoes in a big Pan and boil for 40 mins",
            "At the same time simmer mince in a Pan with the shredded Carrots and covered in Beef Stock. Simmer for 20 mins covered and 20 mins uncovered.",
            "Once Potatoes are boiled drain and mash with Milk and Butter",
            "Put the Mince in an Oven Proof Dish and Cover with Creamy Mash. Then top with Grated Cheese",
            "Bake in the Oven for 25 mins",
            "Serve while Hot"
        ],

        imagePath:
            "images/mains/Shepards Pie.jpg"
    },

    {
        type: "Starter",

        name: "Mozzarella Triangles",

        description: "Mozzarella Triangles in a rich Tomato Sauce",

        ingredients: [
            "250g Mozzarella Cheese",
            "1 Cup Plain Flour",
            "2 Eggs",
            "1 & 1/2 Cups Bread Crumbs (Italian Seasoned)",
            "1 tsp Oregano",
            "1tsp Garlic Granules",
            "400g Chopped Tomatoes",
            "1 tbsp Tomato Puree",
            "1 tsp Sugar",
            "? Salt",
            "? Pepper"
        ],

        instructions: [
            "Slice the Mozzarella into 1cm thick slices",
            "Cut each slice diagonally in half to make Triangles",
            "Dry the Slices in Kitchen Roll for 10 mins",
            "Set up three bowls 1 cup plain flour (Salt/Pepper), Eggs (Beaten), 1 & 1/2 Cups Breadcrumbs (Seasoned)",
            "Dip each Triangle in this order: Flour, Egg, Breadcrumbs, Egg and then Breadcrumbs",
            "Put Triangles on a Plate and freeze for 15-20 mins",
            "Heat Olive Oil in a Sauce Pan",
            "Cook 1 tsp Garlic Granules in Oil for 1-2 mins",
            "Add 400g Chopped Tomatoes, 1 tbsp Tomato Puree, 1 tsp Sugar and Salt and Pepper",
            "Simmer for 15-20 mins",
            "Heat 2-3cm of oil in a pan until a wooden spoon dipped in starts to bubble",
            "Fry Triangles for 1-2 mins a side",
            "Drain excess oil off Triangles on some Kitchen Roll",
            "Serve Triangles and Sauce Together"
        ],

        imagePath:
            "images/starters/Mozzarella Triangles.jpg"
    },


    {
        type: "Desert",

        name: "Scooby Snacks",

        description:
            "Home Made Cinnamon Scooby Snack Biscuits",

        ingredients: [
            "1 & 1/2 Cups Wheat Flour",
            "1/2 Cup Plain Flour",
            "1/2 Cup Brown Sugar",
            "1/2 tsp Baking Powder",
            "1/2 tsp Baking Soda",
            "1/2 tsp Salt",
            "1 tsp Cinnamon",
            "1/3 Cup Unsalted Butter",
            "3 tbsp Honey",
            "3 tbsp Milk",
            "1 tsp Vanilla Extract"
        ],

        instructions: [
            "Mix all dry ingredients: Flour, Wheat Flour, Brown Sugar, Baking Soda/ Powder, Salt, Cinnamon",
            "Add Butter and mix together with fingers until butter is gone and mixture feels like crumbs",
            "Add Honey, Milk and Vanilla Extract. Mix until a Dough forms",
            "Roll the Dough into a flat disc and chill in the Fridge for at 1hr",
            "Roll the Dough out and cut Biscuits out using the cookie cutter",
            "Place on a tray lined with Baking Paper and bake in the Oven at 180 Degrees",
            "Bake for 10 mins and Spin Tray around then bake for a further 7 mins",
            "Cool on Plates with Kitchen Roll on for 7.5 mins then flip them over and cool for a further 7.5 mins"
        ],

        imagePath:
            "images/deserts/Scooby Snacks.jpg"
    }

];

// ======================================================
// INDEXEDDB
// ======================================================

let db;
let allRecipesByType = {
    "Starters" : [],
    "Mains" : [],
    "Deserts" : []
};
let allRecipes;

const DB_NAME = "recipeDB";
const DB_VERSION = 1;
const STORE_NAME = "recipes";

const request = indexedDB.open(DB_NAME, DB_VERSION);


// ======================================================
// CREATE DATABASE / OBJECT STORE
// ======================================================

request.onupgradeneeded = function (event) {

    db = event.target.result;

    if (!db.objectStoreNames.contains(STORE_NAME)) {

        const store = db.createObjectStore(STORE_NAME, {
            keyPath: "id",
            autoIncrement: true
        });

        // Allows recipes to be searched by name
        store.createIndex("name", "name", {
            unique: false
        });

        // Allows recipes to be searched by type
        store.createIndex("type", "type", {
            unique: false
        });

    }
};


// ======================================================
// DATABASE CONNECTED
// ======================================================

request.onsuccess = async function (event) {

    db = event.target.result;

    console.log("IndexedDB connected");
    await readDB();
};


// ======================================================
// DATABASE ERROR
// ======================================================

request.onerror = function (event) {

    console.error(
        "IndexedDB error:",
        event.target.error
    );

};

async function readDB() {
    const transaction = db.transaction([STORE_NAME]);
    const objectStore = transaction.objectStore(STORE_NAME);
    const request = objectStore.getAll();

    request.onsuccess = function(){
        const existRecipes = request.result;
        if (existRecipes.length > 0){
            console.log(`${existRecipes.length} recipes exist, continuing...`);

            existRecipes.forEach((recipe) => {
                if (recipe.type === "Starter"){
                    allRecipesByType.Starters.push(recipe);
                }
                else if (recipe.type === "Main"){
                    allRecipesByType.Mains.push(recipe);
                }
                else if (recipe.type === "Desert"){
                    allRecipesByType.Deserts.push(recipe);
                }
            })

            allRecipes = existRecipes;
            loadInitRecipes();
            return
        }
        loadRecipes();
    }

    request.onerror = function(){
        console.log("Error reading database!");
    }
}

async function loadRecipes(){
    const recipesToAdd = await Promise.all(
        recipes.map(async (recipe) => {
            const response = await fetch(recipe.imagePath);

            if (!response.ok){
                throw new Error(`Could not load image ${recipe.imagePath}`); 
            }

            const imageBlob = await response.blob();

            return {
                type : recipe.type,
                name : recipe.name,
                description : recipe.description,
                ingredients : recipe.ingredients,
                instructions : recipe.instructions,
                image : imageBlob
            }
        })
    );

    // At this point ALL fetches have finished
    console.log(`${recipesToAdd.length} recipes ready to add`);

    const transaction = db.transaction([STORE_NAME], "readwrite");

    transaction.oncomplete = (event) => {
        console.log("Transaction Complete");
        readDB();
    }

    transaction.onerror = (event) => {
        console.log("Transaction Error");
    }

    const objectStore = transaction.objectStore(STORE_NAME);
    recipesToAdd.forEach((recipe) => {
        const request = objectStore.add(recipe);
        request.onsuccess = (event) => {
            console.log(`${event.target.result} added.`)
        }
    })
}

function loadInitRecipes(){
    let currentTypeIndex = 0
    let types = ["Starters", "Mains", "Deserts"];

    $(".food-section").each(function(){
        let initRecipe = allRecipesByType[types[currentTypeIndex]][0];
        let initRecipeName = initRecipe.name;
        let initImageURL = URL.createObjectURL(initRecipe.image);

        $(this).find("h3").text(initRecipeName);
        let imgToUpdate = $(this).find("div").find("img");

        imgToUpdate.attr("src", initImageURL);
        imgToUpdate.attr("alt", initRecipeName);

        currentTypeIndex++;
    })
}

let navBarExpanded = false;

function hideBottomNav(){
    animate("#bottom-nav", {
        opacity: 0,
        translateY: -10,
        duration: 900,
        ease: "in(3)",
        onComplete: function () {
            $("#bottom-nav").css(
                "pointer-events",
                "none"
            );
        }
    });

    navBarExpanded = false;
}

$("#burger-button").on("click", function () {

    if (!navBarExpanded) {

        $("#bottom-nav").css(
            "pointer-events",
            "auto"
        );

        animate("#bottom-nav", {

            opacity: 1,

            translateY: 0,

            duration: 1000,

            ease: "out(3)"

        });

        navBarExpanded = true;

    }

    else {
        hideBottomNav();
    }

});

$("#home-button").on("click", function(){
    location.reload();
})

// ======================================================
// CAROUSEL
// ===================================================  
function moveCarousel(button, direction) {

    const type = $(button).data("type");

    const recipeArray = allRecipesByType[type];

    const currentImage = button.parent().find("img");
    const currentRecipeHeading = button.parent().parent().find("h3");
    const currentRecipeName = currentImage.attr("alt");

    let currentIndex = recipeArray.findIndex(recipe => recipe.name === currentRecipeName);

    currentIndex += direction;

    if(currentIndex === -1){
        currentIndex = recipeArray.length - 1;
    }
    else if (currentIndex >= recipeArray.length){
        currentIndex = 0;
    }

    const newRecipe = recipeArray[currentIndex];
    const imageURL = URL.createObjectURL(newRecipe.image);

    currentImage.attr("src", imageURL);
    currentImage.attr("alt",newRecipe.name);
    currentRecipeHeading.text(newRecipe.name);
}

// ======================================================
// FORWARD
// ======================================================

$(".fwd").on("click", function () {
    moveCarousel($(this), 1);
});

// ======================================================
// BACKWARD
// ======================================================

$(".rwd").on("click", function () {
    moveCarousel($(this), -1);
});

// ======================================================
// Select Recipe
// ======================================================
$(".food-img").on("click", function(){
    const type = $(this).parent().find(".rwd").data("type");
    const name = $(this).attr("alt");
    const foundRecipe = allRecipesByType[type].find(recipe => recipe.name === name);

    showRecipe(foundRecipe);
})

function showRecipe(foundRecipe){
    $("#show-recipe-name").text(foundRecipe.name);
    $("#show-recipe-image").attr("src", URL.createObjectURL(foundRecipe.image)).attr("alt", foundRecipe.name);
    $("#show-recipe-description").text(foundRecipe.description);
    let ingredients = $("#show-recipe-ingredients");
    ingredients.empty();
    foundRecipe.ingredients.forEach((ingredient) => {
        let nextIngredient = $("<li>");
        nextIngredient.text(ingredient);
        ingredients.append(nextIngredient);
    });
    let instructions = $("#show-recipe-instructions");
    instructions.empty();
    foundRecipe.instructions.forEach((instruction) => {
        let nextInstruction = $("<li>");
        nextInstruction.text(instruction);
        instructions.append(nextInstruction);
    });

    animate("#show-recipe", {
        opacity: 1,
        duration: 1000,
        ease: "out(3)",
        oncomplete: function(){
            $("nav").css("filter", "blur(5px)");
            $("main").css("filter", "blur(5px)");
            $("#show-recipe").css("display", "flex");
            hideBottomNav();
        }
    });
}

$("#close-recipe").on("click", function(){
    $("#show-recipe").css("display", "flex");
    animate("#show-recipe", {
        opacity: 0,
        duration: 1000,
        ease: "out(3)",
        oncomplete: function(){
            $("nav").css("filter", "blur(0px)");
            $("main").css("filter", "blur(0px)");
            $("#show-recipe").css("display", "none");
        }
    });
})

/* =========================
   Search
   ========================= */

$("#search").on("click", function(){
    $("#result-display").empty();

    const recipeInput = $("#recipe-search");
    const recipeToSearch = recipeInput.val().trim().toLowerCase();
    const wordsToSearch = recipeToSearch.toLowerCase().split(/\s+/);

    const foundRecipes = allRecipes.filter(recipe => {
        return wordsToSearch.some(word =>
            recipe.name.toLowerCase().includes(word) ||

            recipe.description.toLowerCase().includes(word) ||

            recipe.ingredients.some(ingredient =>
                ingredient.toLowerCase().includes(word)
            )
        );
    });

    recipeInput.val("");

    if(foundRecipes.length === 0){
        const errorHeading = $("<h3>");
        errorHeading.text(`No Recipes found containing: ${recipeToSearch}`);
        $("#result-display").append(errorHeading);
    }
    else{
        foundRecipes.forEach((recipe) => {
            let html = `
                <div class="result">
                    <div class="result-description">
                        <h3>${recipe.name}</h3>
                        <p>${recipe.description}</p>
                    </div>
                    <img class="result-img" src="${URL.createObjectURL(recipe.image)}" alt="${recipe.name}">
                </div>
            `
            $("#result-display").append(html);
        })
    }

    animate("#recipe-search-results", {
        opacity: 1,
        duration: 1000,
        ease: "out(3)",
        oncomplete: function(){
            $("nav").css("filter", "blur(5px)");
            $("main").css("filter", "blur(5px)");
            $("#recipe-search-results").css("display", "Flex");
            hideBottomNav();
        }
    });
})

function hideRecipeSearchResults(){
    animate("#recipe-search-results", {
        opacity: 0,
        duration: 1000,
        ease: "out(3)",
        oncomplete: function(){
            $("nav").css("filter", "blur(0px)");
            $("main").css("filter", "blur(0px)");
            $("#recipe-search-results").css("display", "None");
        }
    });
}

$("#result-display").on("click", ".result", function(){
    const foundRecipe = allRecipes.find(recipe => recipe.name === $(this).find("h3").text());
    hideRecipeSearchResults();
    showRecipe(foundRecipe);
})

$("#result-close").on("click", function(){
    hideRecipeSearchResults();
})

/* =========================
   Add new recipes
   ========================= */

let recipeError = false;

function closeAddRecipe(){
    animate("#add-new-recipe", {
        opacity: 0,
        duration: 1000,
        ease: "out(3)",
        oncomplete: function(){
            $("nav").css("filter", "blur(0px)");
            $("main").css("filter", "blur(0px)");
            $("#add-new-recipe").css("display", "None");
            recipeError = false;
            location.reload();
        }
    });
}

$("#add-button").on("click", function(){
    animate("#add-new-recipe", {
        opacity: 1,
        duration: 1000,
        ease: "out(3)",
        oncomplete: function(){
            $("nav").css("filter", "blur(5px)");
            $("main").css("filter", "blur(5px)");
            $("#add-new-recipe").css("display", "Flex");
            hideBottomNav();
        }
    });
})

$("#recipe-image-button").on("click", function(){
    $("#recipe-image-input").click();
})

function showRecipeError(input){
    input.css("border-color", "red");
    recipeError = true;
}

$("#submit-new-recipe").on("click", function(){
    recipeError = false;
    const recipeName = $("#new-recipe-name").val();
    const recipeType = $("#new-recipe-type").val();
    const recipeDescription = $("#new-recipe-description").val();
    const recipeIngredients = $("#new-recipe-ingredients").val();
    const recipeInstructions = $("#new-recipe-instructions").val();
    const imageInput = $("#recipe-image-input");

    if(recipeName === ""){
        showRecipeError($("#new-recipe-name"));
    }
    if (!recipeType){
        showRecipeError($("#new-recipe-type"));
    }
    if(recipeDescription === ""){
        showRecipeError($("#new-recipe-description"));
    }
    if (recipeIngredients === ""){
        showRecipeError($("#new-recipe-ingredients"));
    }
    if (recipeInstructions === ""){
        showRecipeError($("#new-recipe-instructions"));
    }
    if (imageInput[0].files.length === 0){
        showRecipeError($("#recipe-image-button"));
    }

    if(recipeError === true){
        return
    }
    else{
        let newRecipeToAdd = {
            type : recipeType,
            name : recipeName,
            description : recipeDescription,
            ingredients : recipeIngredients.split("\n"),
            instructions : recipeInstructions.split("\n"),
            image : $("#recipe-image-input")[0].files[0]
        }

        const transaction = db.transaction([STORE_NAME], "readwrite");

        transaction.oncomplete = (event) => {
            console.log("Transaction Complete");
            readDB();
        }

        transaction.onerror = (event) => {
            console.log("Transaction Error");
        }

        const objectStore = transaction.objectStore(STORE_NAME);
        const request = objectStore.add(newRecipeToAdd);
        request.onsuccess = (event) => {
            console.log(`${event.target.result} added.`)
        }

        closeAddRecipe();
    }
})

$("#cancel-recipe").on("click", function(){
    closeAddRecipe();
})
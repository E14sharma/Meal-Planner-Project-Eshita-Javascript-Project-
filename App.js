// const title = document.getElementById("title");
// title.innerText = "hello";
const mealPlanData = [
    {
        "id": 11,
        "title": "Peanut Butter and Chocolate Oatmeal",
        "readyInMinutes": 45,
        "servings": 1,
        "image": "https://www.acouplecooks.com/wp-content/uploads/2021/01/Peanut-Butter-Oatmeal-018s.jpg",
        "ingredients": "1 cup old-fashioned rolled oats, 2 cups milk (dairy or plant-based), 2 tablespoons cocoa powder, 2 tablespoons peanut butter, 2 tablespoons honey or maple syrup, 1/2 teaspoon vanilla extract, Pinch of salt 2 sliced bananas, chopped peanuts, chocolate chips",
        "steps": "In a saucepan, combine the rolled oats, milk, cocoa powder, peanut butter, honey or maple syrup, vanilla extract, and a pinch of salt. Place the saucepan over medium heat and bring the mixture to a gentle boil, stirring occasionally. Reduce the heat to low and simmer for about 5 minutes, or until the oats are tender and the mixture has thickened to your desired consistency, stirring occasionally. Remove the saucepan from heat and let it cool for a minute or two. Give the oatmeal a good stir to make sure everything is well combined. Serve the peanut butter and chocolate oatmeal in bowls. If desired, top with sliced bananas, chopped peanuts, and chocolate chips for extra flavor and texture. Enjoy the warm and comforting peanut butter and chocolate oatmeal for a delicious breakfast or snack!"
    },
    {
        "id": 12,
        "title": "Lentil Salad With Vegetables",
        "readyInMinutes": 40,
        "servings": 2,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlmH8jCZU2K2PL8yj5aKF7hpnIgfIBw_Zabw&usqp=CAU",
        "ingredients": "1 cup dried green or brown lentils, 3 cups water ,1 cucumber diced, 1 bell pepper diced, 1/2 red onion, finely chopped ,1/4 cup chopped fresh parsley, 1/4 cup chopped fresh mint ,1/4 cup crumbled feta cheese (optional) ,3 tablespoons extra-virgin olive oil, 2 tablespoons lemon juice ,1 clove garlic minced ,Salt and pepper to taste",
        "steps": "Rinse the lentils under cold water. In a saucepan, combine the lentils and water. Bring to a boil over medium heat. Reduce the heat to low, cover, and simmer for 15-20 minutes or until the lentils are tender but still hold their shape. Drain any excess water and let the lentils cool. In a large bowl, combine the cooked lentils, diced cucumber, diced bell pepper, finely chopped red onion, chopped fresh parsley, and chopped fresh mint. In a small bowl, whisk together extra-virgin olive oil, lemon juice, minced garlic, salt, and pepper to make the dressing. Pour the dressing over the lentil mixture and toss to coat the ingredients evenly. If using, sprinkle crumbled feta cheese over the salad and gently mix. Adjust the seasoning if needed. Refrigerate the lentil salad for at least 30 minutes to allow the flavors to meld. Serve the lentil salad chilled as a refreshing and nutritious dish."
    },
    {
        "id": 13,
        "title": "Asian Noodles",
        "readyInMinutes": 30,
        "servings": 3,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IsCrtnkvSS_xhW3uLeHXGAJljB7QFlvc-w&usqp=CAU",
        "ingredients": "8 ounces Asian noodles (such as soba, udon, or rice noodles) ,2 tablespoons sesame oil, 2 cloves garlic, minced ,1 tablespoon fresh ginger, grated ,1 bell pepper, sliced ,1 carrot julienned ,1 cup snap peas, 2 tablespoons soy sauce ,1 tablespoon hoisin sauce, 1 tablespoon rice vinegar",
        "steps": "Cook the Asian noodles according to the package instructions. Drain and set aside. In a large skillet or wok, heat sesame oil over medium heat. Add minced garlic and grated ginger to the skillet. Sauté for a minute until fragrant. Add sliced bell pepper, julienned carrot, and snap peas. Stir-fry for a few minutes until the vegetables are crisp-tender. In a small bowl, whisk together soy sauce, hoisin sauce, rice vinegar, and honey (if using). Push the vegetables to one side of the skillet and pour the sauce into the empty space. Let it cook for a few seconds until heated. Add the cooked noodles to the skillet and toss everything together to coat the noodles with the sauce and vegetables. Cook for an additional 2-3 minutes until everything is well combined and heated through. Remove from heat and garnish with chopped green onions and sesame seeds. Serve the Asian noodles hot as a delicious and flavorful meal."
    },
    {
        "id": 21,
        "title": "Spaghetti Bolognese",
        "readyInMinutes": 120,
        "servings": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTba_u7jPyLwM3wGF0NOdA-HlxPBjXMhNrExg&usqp=CAU",
        "ingredients": "8 ounces spaghetti, 1 tablespoon olive oil ,1 onion finely chopped, 2 cloves garlic minced, 1 carrot finely chopped, 1 celery stalk finely chopped ,1 pound ground beef, 1 can (14 ounces) crushed tomatoes ,1/2 cup red wine (optional) ,1 teaspoon dried oregano ,Salt and pepper to taste",
        "steps": "Cook spaghetti according to package instructions. Drain and set aside. Heat olive oil in a large skillet over medium heat. Add onion, garlic, carrot, and celery. Sauté until vegetables are softened. Add ground beef to the skillet and cook until browned. Drain excess fat if necessary. Stir in crushed tomatoes, red wine (if using), dried oregano, salt, and pepper. Simmer for 20-30 minutes. Serve the Bolognese sauce over cooked spaghetti. Garnish with grated Parmesan cheese and fresh basil leaves."
    },
    {
        "id": 22,
        "title": "Chocolate Chip Cookies",
        "readyInMinutes": 60,
        "servings": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcT_qmtJlx5Y21vCogaCUCG33bajYFWdQGQ&usqp=CAU",
        "ingredients": "1 cup unsalted butter softened ,1 cup granulated sugar, 1 cup brown sugar packed ,2 large eggs, 1 teaspoon vanilla extract, 3 cups all-purpose flour ,1 teaspoon baking soda ,1/2 teaspoon salt, 2 cups chocolate chips",
        "steps": "Preheat the oven to 375°F (190°C). Line a baking sheet with parchment paper. In a large bowl, cream together the softened butter, granulated sugar, and brown sugar until light and fluffy. Beat in the eggs one at a time, then stir in the vanilla extract. In a separate bowl, whisk together the flour, baking soda, and salt. Gradually add the dry ingredients to the butter mixture, mixing well. Fold in the chocolate chips until evenly distributed in the dough. Drop rounded tablespoons of dough onto the prepared baking sheet, spacing them about 2 inches apart. Bake for 9-11 minutes or until the edges are golden brown. Allow the cookies to cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely."
    },
    {
        "id": 23,
        "title": "Caprese Salad",
        "readyInMinutes": 25,
        "servings": 2,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvrdaULGNUr9C3EoOG4pimBa_T3JwBPRHtw&usqp=CAU",
        "ingredients": "4 ripe tomatoes sliced ,8 ounces fresh mozzarella cheese sliced, Fresh basil leaves, Extra virgin olive oil, Balsamic glaze Salt and pepper to taste",
        "steps": "Arrange tomato slices and mozzarella slices on a serving platter, alternating them. Tuck fresh basil leaves between the tomato and mozzarella slices. Drizzle extra virgin olive oil over the salad. Season with salt and pepper to taste. Finish with a drizzle of balsamic glaze. Serve the Caprese salad immediately as a refreshing appetizer or side dish."
    },
    {
        "id": 31,
        "title": "Vegetable Curry",
        "readyInMinutes": 40,
        "servings": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ1KsjKemdsYeFdmk8QFR-q0SehpxplAu_UA&usqp=CAU",
        "ingredients": "4 bell peppers (any color) ,2 cups fresh spinach chopped, 1 cup crumbled feta cheese ,1/2 cup cooked quinoa ,1/4 cup diced red onion ,2 cloves garlic minced, 1 tablespoon olive oil, 1 teaspoon dried oregano Salt and pepper to taste",
        "steps": "Preheat the oven to 375°F (190°C). Slice off the tops of the bell peppers and remove the seeds and membranes. In a skillet, heat olive oil over medium heat. Add diced red onion and minced garlic. Sauté until the onion is softened. Add chopped spinach to the skillet and cook until wilted. Remove from heat. In a mixing bowl, combine the spinach mixture, crumbled feta cheese, cooked quinoa, dried oregano, salt, and pepper. Mix well. Stuff the bell peppers with the spinach and feta mixture, pressing it down gently. Place the stuffed peppers in a baking dish and bake in the preheated oven for 25-30 minutes or until the peppers are tender and the filling is heated through. Remove from the oven and let the peppers cool for a few minutes before serving."
    },
    {
        "id": 32,
        "title": "Spinach and Feta Stuffed Peppers",
        "readyInMinutes": 65,
        "servings": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2n_nABLmehwpFYIRDJCUYLFqt_dS1_8OJSw&usqp=CAU",
        "ingredients": "1 tablespoon olive oil, 1 onion, diced, 2 cloves garlic, minced,1 carrot, diced,1 celery stalk diced, 1 cup dried lentils, 4 cups vegetable broth, 1 can (14 ounces) diced tomatoes,1 teaspoon ground cumin,1 teaspoon dried thyme Salt and pepper to taste, Fresh parsley leaves (for garnish)",
        "steps": "Heat olive oil in a large pot over medium heat. Add diced onion, minced garlic, carrot, and celery. Sauté until the vegetables are softened. Rinse the dried lentils under cold water and add them to the pot. Pour in the vegetable broth and diced tomatoes (with their juices). Stir in ground cumin, dried thyme, salt, and pepper. Bring the soup to a boil, then reduce the heat to low. Simmer uncovered for about 25-30 minutes or until the lentils are tender. Adjust the seasoning if needed. Serve the lentil soup hot, garnished with fresh parsley leaves."
    },
    {
        "id": 33,
        "title": " Lentil Soup",
        "readyInMinutes": 50,
        "servings": 2,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPx-vjd_TgOBi290TXM8eErstzNjJ72DYPLg&usqp=CAU",
        "ingredients": "1 cup cooked quinoa ,1 cucumber diced ,1 bell pepper, diced, 1/2 cup cherry tomatoes halved ,1/4 cup red onion, finely chopped, 1/4 cup Kalamata olives, pitted and halved ,2 tablespoons fresh lemon juice, 2 tablespoons olive oil, 1 tablespoon chopped fresh parsley, Salt and pepper to taste",
        "steps": "In a large bowl, combine cooked quinoa, diced cucumber, diced bell pepper, halved cherry tomatoes, chopped red onion, and halved Kalamata olives. In a small bowl, whisk together fresh lemon juice, olive oil, chopped parsley, salt, and pepper. Pour the dressing over the quinoa mixture. Toss to coat evenly. Adjust the seasoning if needed. Serve the quinoa salad chilled or at room temperature."
    }
];
async function getdata(calorie) {
    const response = await fetch("https://content.newtonschool.co/v1/pr/64995a40e889f331d43f70ae/categories");
    const result = await response.json();
    for (let meal of result) {
        let min = meal["min"];
        let max = meal["max"];
        if (calorie <= max && calorie >= min) {
            console.log(meal + "meal");
            displayMealPlan(meal);
        }
    }
}

async function fetchRecipe(mealTitle) {
    const response = await fetch("https://content.newtonschool.co/v1/pr/64996337e889f331d43f70ba/recipes");
    const recipeData = await response.json();


    // const recipe = recipeData.find(recipe => recipe.id === mealId);
    for (let recipe of recipeData) {
        // console.log(recipe);
        if (recipe["title"] == mealTitle) {
            // console.log(recipe.title);
            populateRecipeTabs(recipe.ingredients, recipe.steps);
        }
    }
}


const mealPlanSection = document.getElementById("plan");
mealPlanSection.style.display = "none";
const generateMeal = document.getElementById("btn-meal");
generateMeal.addEventListener("click", (e) => {
    e.preventDefault();
    const calorie = calculatecalorie();
    getdata(calorie);
    mealPlanSection.style.display = "flex";
});


function calculatecalorie() {
    const weight = document.getElementById("weight").value;
    console.log("weight" + weight);
    const height = document.getElementById("height").value;
    console.log(height + "h");
    const age = document.getElementById("age").value;
    console.log("a" + age);
    const gender = document.getElementById("gender").value;
    const activity = document.getElementById("activity").value;
    let BMR;
    if (gender === "male") {
        BMR = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    }
    if (gender === "female") {
        BMR = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)
    }
    console.log("BMR" + BMR);
    let calorie;

    if (activity === "light") {
        calorie = BMR * 1.375;
    }
    if (activity === "moderate") {
        calorie = BMR * 1.55;
    }
    if (activity === "active") {
        calorie = BMR * 1.725;
    }
    console.log("calorie" + calorie);
    return calorie;
}

function displayMealPlan(meal) {

    document.getElementById("meal1").src = meal["breakfast"]["image"];
    document.getElementById("meal2").src = meal["lunch"]["image"];
    document.getElementById("meal3").src = meal["dinner"]["image"];
    const meal1 = document.getElementById("dish1").innerText = meal["breakfast"]["title"];
    // console.log(meal1.parentNode);
    meal1.id = meal["breakfast"]["title"];
    const meal1RecipeBtn = document.querySelector("#btn1");
    meal1RecipeBtn.addEventListener("click", handelgetRecipe);
    const meal2 = document.getElementById("dish2").innerText = meal["lunch"]["title"];
    meal2.id = meal["lunch"]["title"];
    const meal2RecipeBtn = document.querySelector("#btn2");
    meal2RecipeBtn.addEventListener("click", handelgetRecipe);
    const meal3 = document.getElementById("dish3").innerText = meal["dinner"]["title"];
    meal3.id = meal["dinner"]["title"];
    const meal3RecipeBtn = document.querySelector("#btn3");
    meal3RecipeBtn.addEventListener("click", handelgetRecipe);



}
// const recipies = document.getElementById("recipeSection");
// recipies.style.display = "none";
// const show = document.getElementsByClassName("get-recipe-btn");
// show.addEventListener("click", (e) => {
//     e.preventDefault();
//     populateRecipeTabs();
//     recipies.style.display = "flex";
// });

function handelgetRecipe(e) {
    const mealTitle = e.target.previousElementSibling.previousElementSibling.innerText;
    console.log("getRecipe clicked " + mealTitle);
    fetchRecipe(mealTitle);

}
//    
function populateRecipeTabs(ingredients, steps) {
    // Populate the Ingredients tab
    const ingredientsTab = document.getElementById("recipeIngredients");
    listAll(ingredientsTab, ingredients, ', ');

    const stepsTab = document.getElementById("recipeSteps");
    listAll(stepsTab, steps, '. ');
    console.log(steps);
    console.log(ingredients);
}

function listAll(node, str, delimiter) {
    node.innerText = "";
    const arr = str.split(delimiter);
    const list = document.createElement("ul");
    node.appendChild(list);

    for (let item of arr) {
        const listItem = document.createElement("li");
        listItem.innerText = item;
        list.appendChild(listItem);
    }
}


// function populateRecipeTabs(ingredients, steps) {
//     // Populate the Ingredients tab
//     const ingredientsTab = document.getElementById("recipeIngredients");


//     listAll(ingredientsTab, ingredients);

//     const stepsTab = document.getElementById("recipeSteps");

//     listAll(stepsTab, steps);
//     console.log(steps);
//     console.log(ingredients);

// }

// function listAll(node, str) {
//     node.innerText = "";
//     const arr = str.split(", ");
//     const list = document.createElement("ol");
//     node.appendChild(list);

//     for (let item of arr) {
//         const listItem = document.createElement("li");
//         listItem.innerText = item;
//         list.appendChild(listItem);
//     }
// list.innerText = arr;


// // Peanut Butter and Chocolate Oatmeal"
// // Lentil Salad With Vegetables
// // Asian Noodles
// // Spaghetti Bolognese
// // Chocolate Chip Cookies
// // Caprese Salad
// // Vegetable Curry
// // Spinach and Feta Stuffed Peppers"
// // Lentil Soup



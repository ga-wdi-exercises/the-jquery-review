# JS Review

This review exercise is built around accessing data contained in various data structures, and then taking that data and writing to the DOM using jQuery.

It builds on concepts from the first checkpoints (Checkpoint-00 through 2) and ties them into DOM-manipulation concepts from Week 2.

## Instructions

Clone down this repository. Your job is to write code in `js/script.js` that accomplishes the tasks listed below. Do not modify any other file.

## Writing Staff

  0.  For testing purposes, `console.log()` each element in the `staff` array in `js/script.js` using a for-loop.
  0. Next, use the jQuery function `$()` to create `<span>` tags inside the `<header>` that is directly in the `<main>` tag. The text of each `<span></span>` should be each item in the `staff` array, respectively.
  0. You should have added six `span`s and have one name from the `staff` in each `<span>`.

## Populating Article Content

0. Populating Content for the First Article
  0. Take the `text` of the first object in `articles` and write it to the `<section>` inside of the first `<article>`.

  0. In the first `<article>`, set the text of the `<h3>` inside `<header>` to the `title` from the first object in `articles`.

  0. Modify the `byline` property of the first `articles` by concatenating it with the 1st value in `staff`.

  0. Take the new value of the `byline` property and add it to the text of the `<header>` within the first `<article>`.

  0. Add an `editor` property to the first object in `articles` and give it the value of the 2nd item in the `staff` array.

  0. Create and append a `<span>` inside the `<header>` of the first `<article>`, where the new `<span>`'s text is the value of the `editor` property you just created.

  0. Render the image, from the `body` property of the first object in `articles`, to the `<figure>` element in the first `<article>`.

0. Using a for-loop to populate content for each article

  0. Adapt the code you wrote in the previous section to work with a for loop that iterates over the objects in `articles`.


## Bonuses

0. Hovering over a paragraph changes its background color to lightGrey. When the mouse exits the paragraph, the color should revert back to its previous value.

0. Use jQuery animate to have the staff names slide and fade into view. Check out [http://api.jquery.com/animate/](http://api.jquery.com/animate/)

0. Add infinite scroll by re-appending the articles when the user scrolls to a certain point near the bottom.

## Hints

> Write a little bit of code, and then test it--work methodically.

> use $ in variable names that refer to jQuery objects/collections (this is a recommended convention, and will not have an impact on code function).
```js
var $body = $("body");
```

>  Store references to each part of the DOM you need to interact with. Example:
```js
var $paragraphs = $("p");
var $smallestHeaders = $("h6");   
```

# JS Review

This review exercise will build on the first checkpoint and the jQuery we've learned thus far. We'll be using our javascript knowledge from Checkpoint-00 to access data and write it to the DOM using jQuery. The idea is access data contained in various data structures, and then taking that data and writing to the DOM.

**Do not hard-code the data from `script.js` in `index.html`. The idea is to use javascript, rather than to copy and paste.**

Do NOT modify anything in the `<body>` of the html file.


## Instructions

0. Clone down this repo.
0. Link jQuery from a CDN (if you aren't sure how, try googling it first!) and link the `script.js` file in your `index.html`
1. `console.log()` each element in the `names` array in `script.js` using a for-loop.
> For the rest of the exercise, you will be writing your code below where the variables are defined in `script.js
`
2. `console.log()` the text inside each `<div>` using `.eq()` within a for-loop
  > Hint: Use jQuery to select all divs and store the result in a variable

3. Change the text inside a `<div>` to whatever text you'd like.

4. Next, use a for-loop to write each element in the `names` array to each `<div>`, using jQuery.
6. Access the text of the `article` object in `script.js` and write it to the `<main>` inside of `<article>`.

Bonuses:

0. Write the title in the `<h3>` inside `<header>`.
1. Write the author and editors of the article, contained in the `header` property and `editor` property of the object, to the header HTML element ***in italics***, using only javascript.
2. Render the image, from the `body` property of the object, inside `article` to the `<figure>` element.

## Hints

> Write a little bit of code, and then test it--work methodically.

> use $ with variable names that refer to jQuery objects/collections (this is really just a suggested convention, and will not have an impact on code function).
```js
var $body = $("body");
```

>  Store references to each part of the DOM you need to interact with. Example:
```js
var $paragraphs = $("p");
var $hSix = $("h6");   
```

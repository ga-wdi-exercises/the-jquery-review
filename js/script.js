// Begin writing your code after the variable declarations
var staff = ["Richard Feynman", "Barefoot Contessa", "Patti Stanger", "Shania Twain Jr.", "Dean Ambrose", "Roger Lodge"];

var articles = [
  {
    header: {
      title: "Gibberish",
      byline: "by "
    },
    body: {
      imageUrl: "http://www.placebear.com/333/333",
      text: 'Shark far unsafely some hello a over hey overabundant rarely amiable so as surreptitious ceaseless busted flabbily as some quail jeepers some vibrantly house the wow wow hello far. Hey this hey concomitant when horrendous gull within far alas forgave thanks after poignantly tritely flamingo rarely one sullenly jocose. \n Why painful the sixteen how minuter looking nor. Subject but why ten earnest husband imagine sixteen brandon. Are unpleasing occasional celebrated motionless unaffected conviction out. Evil make to no five they. Stuff at avoid of sense small fully it whose an. Ten scarcely distance moreover handsome age although. As when have find fine or said no mile. He in dispatched in imprudence dissimilar be possession unreserved insensible. She evil face fine calm have now. Separate screened he outweigh of distance landlord. \n Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as. Made neat an on be gave show snug tore. '
    }
  },
  {
    header: {
      title: "Scandal in the Panhandle",
      byline: "by "
    },
    body: {
      imageUrl: "http://www.placecage.com/333/333",
      text: "Actually flannel post-ironic, kogi small batch franzen mlkshk nihil enim. Twee lo-fi portland 3 wolf moon, chillwave magna selfies. Aesthetic paleo chambray, synth deep v qui mustache. Brooklyn live-edge pok pok bicycle rights, deep v direct trade squid dolore gastropub. Fingerstache messenger bag dolore, leggings jean shorts assumenda farm-to-table mixtape +1 tilde locavore intelligentsia godard knausgaard. Post-ironic elit succulents chia. Bitters non yuccie whatever, qui activated charcoal poutine portland literally banjo brunch vaporware chicharrones air plant.\n La croix duis four loko, 8-bit artisan veniam plaid. Franzen minim pork belly, pickled delectus swag drinking vinegar velit iceland umami live-edge truffaut. Activated charcoal man braid meggings delectus lyft stumptown. Velit mollit locavore 90's poke, nulla cred VHS gentrify pinterest synth migas chambray. Nostrud mixtape do, typewriter swag quinoa portland incididunt vexillologist hammock pariatur anim jean shorts. Affogato unicorn nostrud, succulents activated charcoal cillum voluptate. Tumblr seitan biodiesel, ugh vape yuccie typewriter letterpress elit literally irure deep v knausgaard."
    }
  },
  {
    header: {
      title: "Rare Memes",
      byline: "by "
    },
    body: {
      imageUrl: "http://www.fillmurray.com/333/333",
      text: "Pour-over shoreditch labore mumblecore bitters, sint vexillologist do chillwave. Schlitz microdosing taxidermy, try-hard irure salvia yr twee XOXO af. Gastropub air plant asymmetrical, offal veniam dreamcatcher ad mumblecore accusamus stumptown retro meh food truck nihil single-origin coffee. Tofu kale chips fap minim. Aesthetic deserunt fingerstache pok pok. Placeat try-hard do banh mi. Deserunt jean shorts mollit, assumenda meggings aliqua austin sriracha.\n Hella YOLO shoreditch, jianbing XOXO before they sold out fugiat paleo small batch assumenda gochujang air plant anim irony voluptate. Seitan heirloom keytar kombucha blue bottle. Sint ullamco shoreditch hammock. Do live-edge prism neutra, sapiente paleo drinking vinegar lo-fi chambray typewriter photo booth. PBR&B man braid mumblecore, tilde copper mug magna intelligentsia sustainable lomo man bun pickled. Selfies exercitation cliche, iPhone everyday carry odio humblebrag gentrify taxidermy brooklyn ut freegan incididunt. Craft beer tumblr edison bulb fam."
    }
  }
];

// Your code below

for(let i = 0; i < staff.length; i++) {
  console.log(staff[i]);
}

let mainHeader = $('main > header');
for(let i = 0; i < staff.length; i++) {
  mainHeader.append($(`<span>${staff[i]}</span>`));
}

/*
let firstArticle = $('article:first-of-type');
firstArticle.children('section').append(articles[0].body.text);
firstArticle.find('h3').text(articles[0].header.title);

articles[0].header.byline += staff[0];
firstArticle.find('header').append(articles[0].header.byline);

articles[0].header.editor = `Edited by ${staff[1]}`;
firstArticle.find('header').append($(`<span>${articles[0].header.editor}</span>`));

firstArticle.find('figure').append(`<img src="${articles[0].body.imageUrl}">`);
*/

let articleElems = $('article');
for(let i = 0; i < $('article').length; i++) {
  let article = $(`article:nth-of-type(${i+1})`);
  article.children('section').append(articles[i].body.text);
  article.find('h3').text(articles[i].header.title);
  articles[i].header.byline += staff[i];
  article.find('header').append(articles[i].header.byline);
  articles[i].header.editor = `Edited by ${staff[i]}`;
  article.find('header').append($(`<span>${articles[i].header.editor}</span>`));
  article.find('figure').append(`<img src="${articles[i].body.imageUrl}">`);
}

$('section').hover(function() {
    $(this).css("background-color", "lightGray");
  },
  function() {
    $(this).css("background-color", "white");
  });

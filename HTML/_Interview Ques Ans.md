#### Q. What's output?

```html
<div>aaa</div>
<span>bbb</span>
<div>ccc</div>
<span>ddd</span>
<div>eee</div>

// OUTPUT:-
aaa
bbb
ccc
ddd
eee

All div elements takes entire width of container
All span elements only takes width of its content
```



#### Q. Name some new features which were not present in HTML but are added to HTML5?

=> 

- **DOCTYPE declaration**: <!DOCTYPE html>
- **section**: Section tag defines a section in the document, such as a header, footer or in other sections of the document. It is used to define the structure of the document. **<section></section>**
- **header:** Header tag defines the head section of the document. A header section always sticks at the top of the document. **<header></header>**
- **footer:** Footer tag defines the footer section of the document. A footer section always sticks at the bottom of the document. **<footer></footer>**
- **article:** Article tag defines an independent piece of the content of a document. **<article> </article>**
- **main:** The main tag defines the main section in the document which contains the main content of the document. **<main></main>**
- **figcaption:** Figcaption tag defines the caption for the media elements such as an image or video. **<figcaption></figcaption>**



#### Q. Define Semantic elements in HTML.

=> Semantic elements are HTML elements that represent <u>its meaning to the browser</u> and <u>developer about its contents</u>.

For Example – p tag represents a paragraph, a tag represents anchor tag, form tag, table tag, article tag and many more are semantic elements in HTML. Whereas, div tag, span tag, bold tag are not semantic elements.

**Semantic tags ? does it affect anything on document**



#### Q. Can we modify the attribute’s value of the HTML tag dynamically?

=> Yes, we can modify the value of the attributes by using JavaScript.

```html
<input type=“text” id=“inputField”>
document.getElementById(“inputField”).attr(“type”, “password”);
```



#### Q. inline-block vs block vs inline

=> Block elements are the blocks that take the full available width and always start from a new line. It will stretch itself to the full available width of the available container width. Block-level elements are <div>, <p>, <img>, <section> and many more.

Inline elements are the elements that will only take the width that is required to fit into the container.

**For Example,** take the flow of text on the page. When the line of the text takes the full width of the container it wraps itself into a new line and again goes in the same way.

Whereas, the inline element will take only that much space or width that it is needed for them. Inline elements are <span>, <label>, <a>, <b> and many more.



#### Q. Why Meta tags are used in HTML?

=> Meta tags in HTML are used by the developer to tell the browser about the page description, author of the template, character set, keywords and many more.

Meta tags are used for search engine optimization to tell the search engine about the page contents.

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale = 1.0">
<meta name="description" content="HTML interview questions">
<meta name="author" content="Author Name">
<meta name="copyright" content="All Rights Reserved">
```



#### Q. Explain list elements in HTML.

=> Enlisted below are the list elements in HTML:

- **Ordered List (<ol>) –** An Ordered List or ol tag is the list that lists the items in an ordered way, i.e. numbered or alphabetically.
- **Unordered List (<ul>) –** An Unordered List or ul tag is the list which will list the items in an unordered way, i.e. in bulleted format or in any other format.
- **Definition List (<dl>)** – A Definition List or dl tag arrange the items in the way in which they are arranged in a dictionary.



#### Q. What are Web Workers?

=> Web Workers is a code of JavaScript which runs in the background threads without disturbing the performance of the page. It is used for computing-heavy tasks like an access database or function.



#### Q. What is the SVG element?

=> SVG is a followed XML format; it stands for Scalable Vector Graphics which is used to create vector graphics with the support for interactivity and animation.

SVG is resolution independent as it does not lose its quality when they are resized or zoomed.



####  Q. Explain about Canvas.

=> Canvas is a pixel-based graphics and it is one of the new features of HTML5.

It provides a space in the document where we can draw graphics by using JavaScript and it is resolution dependent, hence the quality will be affected when it’s zoomed or resized.

Example:

```html
<!DOCTYPE html>
<html>
<body>
<canvas id="myCanvas" width="300" height="200" style="border:1px solid #d3d3d3; color: #c9cc18;">
Your browser does not support the HTML5 canvas tag.</canvas>
<script>
var can = document.getElementById("myCanvas");
var canvas = can.getContext("2d");
canvas.font = "20px Hind-sanserif";
canvas.fillText("Canvas Example",30,60);
</script>
</body>
```



#### Q. Explain new form elements in HTML5.

=> The new form elements that were added into HTML5 are:

- **Datalist –** It’s used as a list of options for input control.
- **Keygen –** This tag defines a key-pair generator (Private/Public) field.
- **Output –** It’s used to show the result of a calculation.



#### Q.  What is Quirks mode in HTML5?

=> If we do not include the <!DOCTYPE> element in our HTML page or Document, it will go to Quirks Mode. In this mode, the HTML element depends on the browser. Hence the content will be displayed according to the browser.



Q. Doctype stands for Document Type Declaration. It informs the web browser about the type and version of HTML used in building the web document. This helps the browser to handle and load it properly. While the HTML syntax for this statement is somewhat simple, you must note each version of HTML has its own rules.



Q. async defer akshay saini video

async defer with multiple script tag
https://stackoverflow.com/questions/42615758/javascript-async-defer-order-of-execution-in-case-of-multiple-files-in-single-pa
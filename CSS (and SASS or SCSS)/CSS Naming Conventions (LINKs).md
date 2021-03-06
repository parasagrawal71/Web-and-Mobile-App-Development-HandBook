* __CSS Naming Conventions that Will Save You Hours of Debugging:-__   
https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/   

<pre>
- Use Hyphen Delimited Strings   

- The BEM Naming Convention(Block Element Modifier)   
  For example, .stick-man__head--small
	stick-man = Block
	head = Element
	small = modifier

- CSS Names with JavaScript Hooks   
For example, 
< div class="site-navigation js-site-navigation">
const nav = document.querySelector('.js-site-navigation')

OR,

Use the Rel attribute:-
< div class="site-navigation" rel="js-site-navigation">
const nav = document.querySelector("[rel='js-site-navigation']")
</pre>

* __CSS Naming Conventions: Fewer Rules, more Fun:-__   
https://medium.com/@drublic/css-naming-conventions-less-rules-more-fun-12af220e949b   
<pre>
- Components
	.component {…}
	.component-name {…}
- Variants
	.component--variant {…}
	.component-name--variant-modifier {…}
- Nested Elements
	.component__link {…}
	.component-name__link-element {…}
- Modifiers / State Indicators
	.component.is-active {…}
	.component-name.has-children {…}
	.component.js-selected {…} /* For behavior applied via JS */
	A modifier class is a verb combined with the purpose it has to describe the state of the component, which are separated with a “-” (dash).

</pre>

* __Use Structural naming convention rather than using Presentational naming convention:-__   
https://www.webfx.com/blog/web-design/css-tip-2-structural-naming-convention-in-css/   

* __BEM Convention:-__   
https://css-tricks.com/bem-101/   
<pre>
Another smart part of BEM is that everything is a class and nothing is nested. That makes CSS specificity very flat and low, which is a good idea. It means you won’t end up fighting with yourself over specificity.

</pre>

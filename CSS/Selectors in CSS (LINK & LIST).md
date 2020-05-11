https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors   



* __Basic selectors:-__   
<pre>
- Universal selector:-
Syntax: *

- Type selector:-
Syntax: elementname

- Class selector:-
Syntax: .classname

- ID selector:-
Syntax: #idname

- Attribute selector:-
Syntax: [attr] 
[attr=value] 
[attr~=value] attribute containing the word 'value'
[attr|=value] attribute value starting with 'value'
[attr^=value] attribute value begins with 'value'
[attr$=value] attribute value ends with 'value'
[attr*=value] attribute value contains the substring 'value'
</pre>

* __Grouping selectors__:-
<pre>
- Selector list:- 
Syntax: A, B [all A and all B]
Example:- element, element
</pre>

* __Combinators__:-
<pre>
- Descendant combinator:-
Syntax: A B
Example, .class1 .class2, element element, 

- Child combinator:-
Syntax: A > B
Example, element > element

- General sibling combinator:-
Syntax: A ~ B
Example, element1 ~ element2

- Adjacent sibling combinator:-
Syntax: A + B
Example, element + element

- Column combinator :-
Syntax: A || B
</pre>

* __Pseudo__:-
<pre>
- Pseudo classes:-
The : pseudo allow the selection of elements based on state information that is not contained in the document tree.
Example, :active, :hover, :link, :visited, :checked, :default, :disabled, :empty, :enabled, :first-child, :first-of-type, :focus,
:in-range, :indeterminate, :invalid, :lang(language), :last-child, :last-of-type, :not(selector), 
:nth-child(n), :nth-last-child(n), :nth-last-of-type(n), :nth-of-type(n), :only-of-type, :only-child, 
:optional, :out-of-range, :read-only, :read-write, :required, :root, :target, :valid

- Pseudo elements:-
The :: pseudo represent entities that are not included in HTML.
Example, ::after, ::before, ::first-letter, ::first-line, ::placeholder, ::selection
</pre>

* Xtra:-   
<pre>   
  Selector        Example         Example description
.class1.class2	.name1.name2	Selects all elements with both name1 and name2 set within its class attribute
 element.class	 p.intro      Selects all < p> elements with class="intro"
</pre>

Fragments:-   
A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.   

Example,   
<pre>
return (
    < React.Fragment>
      < ChildA />
      < ChildB />
      < ChildC />
    < /React.Fragment>
  );
  
Short syntax,
    <>
      < ChildA />
      < ChildB />
      < ChildC />
    < />
</pre>
Some Code Quality checkers inside the editor can throw an error saying this short syntax (<></>) is not valid.   
So, React.Fragment is preferable.   

#### Event Propagation or Event Bubbling:-   

Default JS or default HTML behaviour:- if we ever trigger an event on some child elements and that child element does not handle that event, the event is going to bubble up to some parent element until it's eventually caught with an event handler.   (**Propagate up or Bubbling Up**)



```
Example,
<div id="grandparent">
	<div id="parent">
		<div id="child"></div>
	</div>
</div>

On clicking child,
child clicked
parent clicked
grandparent clicked

On clicking parent,
parent clicked
grandparent clicked

On clicking grandparent,
grandparent clicked
```



#### Event Capturing or Event Trickling:-

It's opposite of Event bubbling where it moves down from parent to child (**Trickling down**)

```
Example,

<div id="grandparent">
	<div id="parent">
		<div id="child"></div>
	</div>
</div>

On clicking child,
grandparent clicked
parent clicked
child clicked

On clicking parent,
grandparent clicked
parent clicked

On clicking grandparent,
grandparent clicked
```

<br />

##### useCapture:-

`.addEventListener('some_event', () => {eventHandler()}, useCapture); // useCapture(Boolean value), by default false.`

<br />

According to W3C, First event trickles down then bubbles up

(If useCapture is true for html element, its eventHandler is executed. In case useCapture is false, eventHandler will be executed while bubbling up stage)

```
Event capturing(1st)				Event Bubbling(Then)

			\								/

				\						/

					\				/

						\		/


```



##### event.stopPropagation():-

`.addEventListener('some_event', (event) => {`

​		`console.log('eventHandler Called')`	

​		`event.stopPropagation();`

`}, useCapture);`



#### Event Delegation:-

Event Delegation is possible because of event bubbling.

Instead of attaching individual event handlers to each child elements which can led to performance degradation if there are too many event handlers, we can attach a single event handler to the parent element which will be called while bubbling  up.

Pros:-

- Less Memory
- Less code
- DOM Manipulation Easy. No need to add event handler to each new child elements that are added dynamically

Cons:-

- Not all events are bubbled up such as resize, blur, focus, scroll, etc.
- stopPropagation can cause not to perform Event delegation
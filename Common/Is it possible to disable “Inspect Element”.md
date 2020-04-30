There are some javascript tricks to disable some keyboard, mouse interaction on the page:-   

<pre>
  const onF12Click = () => {
    document.addEventListener("keydown", function(e){
      if(e.which === 123){
        e.preventDefault();
      }
    });
  }

  const onRightClick = () => {
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    });
  }
</pre>

To open Inspect Element:-   
Right Click   
F12   
Ctrl + Shift + I   
Ctrl + Shift + J   
Ctrl + Shift + C   
Ctrl + U   

But there always are work around to those tricks. For instance, you can use the browser top menu to enable DOM inspector without a problem. and You can't disable this developer tools option on a browser.   
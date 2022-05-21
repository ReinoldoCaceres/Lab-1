function parent() {
   const message = 'Hello World';

   function child() {
      alert (message);
   }

   return child;
}

const childFN = parent();
childFN();

//My code added here

function intialize() {
   const message = 'your app has been initialized';

   function intializeChild() {
      //this function get the parameter message from the outer function (initialize)
      alert (message);
   }

   return intializeChild;
}

const intializeChildFN = intialize();
intializeChildFN();
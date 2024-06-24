/* To import bootstrtap :
    1- run npm i bootstrap at cmd
    2- at main.tsx add import 'bootstrap/dist/css/bootstrap.css'*/

//--------------------------------------------------------------------------------------------------

// When naming files or components in react follow PascalNaming convention "The first letter of every word is uppercase"
// Also when naming functions follow the same convention

// ..........................................................................

// To return more than one element in a component use fragment <>
// Ex:
/* 
 function App(){
     return (
      <>
         <h1>Hi</hi>
         <ul>
           <li>item 1 </li>
         </ul>
      </>
     )
 }
*/

//................................................................................

/* Conditional Rendring 

function ListGroup() {
  let items = ["New York", "San Fransisco", "Egypt"];
  return (
    <>
      <h1>Lists</h1>
      {items.length === 0 && <p>No items in the list</p>}   //(true && Ziyad = Ziyad) React developers used that techiniqe instead of ternary operator.
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

*/

// ......................................................................................

// To handle a click event dinamically

// handleClick = () => console.log("Click handeled");
// return (

// <ul className="list-group">
//     {items.map((item) => (
//       <li className="list-group-item" key={item} onClick={handleClick}>{item}</li>
//     ))}
//   </ul>
// )

// .........................................................................................................

// useSate Hook              useState imagine it as *ngIf in Angular.

// What is a Hook ?
//ans: A hook is a function that allows us to tab into builted features in react.

// useState()       it takes an array [the first index 0 , the second index 1]
// the first index 0 => variable (selectedIndex).
// the second index 1 => updater function (setSelectedIndex).

// Note: Each component have its own state. if you call the same function each component will have its own state.

//..................................................................................................................

// When using the state hook : 
// 1- group related variables inside an object.
// 2- avoid using complex object.

// ..............................................................................

// What is the difference between pure and impure ? 

// Pure Function : when you give the same input it always returns the same result 
// Impure : The oposite of pure given the same input and it returns different outputs.

// To keep the component pure you should keep changes out of the render phase
// Means that if you make a counter it should be outside of the function component.

/* EX: 
  let count = 0 
  count++

  const Message = () =>{
    // if you make the count++ here inside the component the output will be different when you render the <Message /> 3 times in app.jsx
    return <div>Message {count} </div>
  }

  export defult Message;

  */
// .......................................................................................

/* when dealing with state variables you should group related variables inside an object 
 Ex: const [drink , setDrink] = useState({
    title:"Amirican",
    price:5
  })

and to update that object you should give React a new state object so: 
const handleClick = () =>{
     setDrink({...drink , price:6})
  }

here we updated the price to be 6.
*/
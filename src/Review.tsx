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

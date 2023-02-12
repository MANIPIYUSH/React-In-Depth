
import React from "react";
import  ReactDOM from "react-dom/client";

//1- Create a nested header element using React.createElement(h1,h2,h3 inside a div with class "title")

// const heading= React.createElement(
//     "div",
//     {
//     className:"title",
//     key:"title",
//     },
//     [React.createElement("h1",{
        
//         key:"h1",
//     },
//     "this is h1 tag"),
//     React.createElement("h2",{
        
//         key:"h2",
//     },
//     "this is h2 tag"),React.createElement("h3",{
        
//         key:"h3",
//     },
//     "this is h3 tag")]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//2- Create the same element using JSX

// const heading = (<div className="title">
//             <h1 key="h1">this is heading1</h1>
//             <h2 key="h2">this is heading2</h2>
//             <h3 key="h3">this is heading2</h3>

// </div>)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//3-Create a functional component of the same with JSX

// const Heading = ()={
//     (<div className="title">
//             <h1 key="h1">this is heading1</h1>
//             <h2 key="h2">this is heading2</h2>
//             <h3 key="h3">this is heading2</h3>

// </div>
// );
// };


//4- Pass attribute into the tag in JSX

// const Header = () => {
//     return (
//       <div className="Title" key="title">
//         <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
//         <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
//         <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
//       </div>
//     );
//   };

//5- Composition of Component (Add a component inside another)

// const AnotherComponent = function(){
//     return <h2> This is Another Component</h2>
// }

// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
//       <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
//       <AnotherComponent/>
//       <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
//     </div>
//   );
// };

//6-{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

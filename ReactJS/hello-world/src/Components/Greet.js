import React from "react";

// this is a functional component example using props in it 
const Greet = props => {    //props are the objects which are nothing but the attributes of the tags used in jsx
    // props.name = "Prakash";     //this is never allowed in props .we can not assign a particular w]value to prop in the component
    return (    //there should be only one wrapper tag in return . wrapper means which wraps the entire return contents
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1> 
             {props.children}    {/*the content which are in between the opening tag and closing tags in jsx is stored as the children of props object */}
        </div>
    )
}
export default Greet    //exporting this way we can change the name of the component in the app.js
//But if we use 
//export const Greet = () => {   <h1>Hello Tejas</h1>    }        //this is called as named export that means we can not change the name of the component in the app.js it should be strictly same



// //DESTRUCTURING of props in functional components
// const Greet = ({name , heroName , children}) => {   
    //const {name , heroName , children} = props;   //or else this can be used
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1> 
//             {children} 
//         </div>
//     )
// }
// export default Greet;
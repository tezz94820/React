import React from 'react'

// function ForwardRefInput() {
//   return (
//     <div>
//       <input type="text" /> 
//     </div>
//   )
// }




    //this is a Ref Forwqarding method which helps to call the child dom by ref from parent ref
    const ForwardRefInput = React.forwardRef( (props , ref) => {        
        return (
          <div>
            <input type="text" ref={ref}/>
          </div>
        )
      }) 
    
    export default ForwardRefInput

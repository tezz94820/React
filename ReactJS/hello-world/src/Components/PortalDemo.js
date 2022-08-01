import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {             //see in the index.html we included another div tag with id as portal-root . do with the help of portals we can access other elements other than thr the root in which all this is defined . 
  return ReactDOM.createPortal(     //it has 2 parameters firstcan be jsx or any component and second is thee place where we want to make changes happen
    <h1>
      Portals Demo
    </h1>
    ,
    document.getElementById('portal-root')
  ) 
}

export default PortalDemo

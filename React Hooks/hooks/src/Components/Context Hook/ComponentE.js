import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../../App'

function ComponentE() {

    const user = useContext(UserContext)            //here usecontext is calling the consumr for userContext and specifying the values in user
    const channel = useContext(ChannelContext)      //same here as above comment 
  return (
    <div>
        {user} - {channel}
    </div>
  )
}

export default ComponentE


//creating context is same in hook also .usecontext hook helps us to use it without consumer by directly using usecontext
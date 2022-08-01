import React from "react";

const UserContext = React.createContext('CodeEvolution')                //we can even set the default value to context.no need to provider but use consumer where you want to set that value

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider , UserConsumer}

//1) create the context                 here in this file
//2) provide a context value            in te app file
//3) consume the context value          in the Contextf file
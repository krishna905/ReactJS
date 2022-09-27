import React from "react";

const UserContext = React.createContext('Vamsi')
export const ChannelContext = React.createContext('Lovely Professional  University')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

const ChannelProvider = ChannelContext.Provider
const ChannelConsumer = ChannelContext.Consumer

export {UserProvider, UserConsumer, ChannelConsumer, ChannelProvider}
export default UserContext

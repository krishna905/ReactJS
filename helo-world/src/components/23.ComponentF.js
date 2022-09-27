import React, { Component } from 'react'
import { UserConsumer, ChannelConsumer } from './23.userContext'

export class ComponentF extends Component {
  render() {

    //for two context usages...this code looks so difficult so useContext makes it easy, check 10.ContextHook.js  file in state_hook folder 
    return (
      <UserConsumer>
        {
            (username)=>{
                return (
                  <ChannelConsumer>
                    {
                      channelname =>{
                        return <div>Hello User - {username}, Channel - {channelname} </div>

                      }
                    }
                  </ChannelConsumer>
                
                )
            }
        }

      </UserConsumer>
    )

    //for single context usage
    // return (
    //   <UserConsumer>
    //     {
    //         (username)=>{
    //             return <div>Hello {username}</div>
    //         }
    //     }

    //   </UserConsumer>
    // )
  }
}

export default ComponentF

import React, { Component } from 'react'

const YpuContext = React.createContext();
//provider ,consumer 

 export class YpuProvider extends Component {
    render() {
        return (
            <div>
                <YpuContext.Provider>
                    {this.props.children}
                </YpuContext.Provider>
            </div>
        )
    }
}
const YpuConsumer = YpuContext.Consumer;

export default YpuConsumer;
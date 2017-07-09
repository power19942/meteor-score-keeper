import React from 'react';
import TitleBar from './TitleBar'
import AddPlayer from './AddPlayer'
import PlayersList from './PlayersList'
export default class App extends React.Component{
    render(){
        return(
            <div style={{textAlign:'center'}}>
                <TitleBar title={this.props.title} />
                <div className="wrapper">
                    <PlayersList playersList={this.props.players} />
                    <AddPlayer score={10} />
                </div>
            </div>
        )
    }
}
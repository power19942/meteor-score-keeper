import React from 'react';
import FlipMove from 'react-flip-move'
import Player from './Player';
class PlayersList extends React.Component {
    renderPlayer(){
        if(this.props.playersList.length === 0){
            return (
                <div className="item">
                    <p>No Players yet</p>
                </div>
            )
        }
        return this.props.playersList.map((player)=> {
            return <Player key={player._id} player={player} />
        });
    }
    render(){
        return(
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderPlayer()}
                </FlipMove>
            </div>
        )
    }
}

export default PlayersList;
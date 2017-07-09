import React from 'react';
import {Players} from '../api/players';
class Player extends React.Component{
    render(){
        return(
            <div key={this.props.player._id} className="item">
                <div className="left">
                    <p>
                        {this.props.player.name} <br/>
                    </p>
                    <small>{this.props.player.rank} {this.props.player.position} {this.props.player.score} point(s)</small>
                </div>
                <div className="right">
                    <button onClick={()=>Players.update(
                        {'_id':this.props.player._id},
                        {$inc:{score:1}}
                    )}>+</button>
                    <button onClick={()=>Players.update(
                        {'_id':this.props.player._id},
                        {$inc:{score:-1}}
                    )}>-</button>
                    <button onClick={()=>Players.remove({'_id':this.props.player._id})}>X</button>
                </div>
                </div>
        )
    }
}

export default Player;
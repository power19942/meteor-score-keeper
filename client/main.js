import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players,calculatePlayerPosition} from '../imports/api/players';
import {Tracker} from 'meteor/tracker';
// local imports
import App from '../imports/ui/App';


Meteor.startup(()=>{
    Tracker.autorun(()=>{
        let players = Players.find({},{sort:{score:-1}}).fetch();
       // let positionedPlayers = calculatePlayerPosition(players);
        ReactDOM.render(<App title="Score Keep" players={players}/>,document.getElementById('app'));
    });

});

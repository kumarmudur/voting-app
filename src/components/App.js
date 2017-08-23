import React from 'react';
import '../asset/css/App.css';

import { voteAngular, voteReact, voteVuejs } from '../actions/voteAction';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = props.store;
    }

    handleVoteAngular = () => {
        this.store.dispatch(
            voteAngular()
        );
    };

    handleVoteReact = () => {
        this.store.dispatch(
            voteReact()
        );
    };

    handleVoteVuejs = () => {
        this.store.dispatch(
            voteVuejs()
        );
    };

    render() {
        return (
            <div className="jumbotron" style={{textAlign: 'center'}}>
                <img className="img img-circle img-lord" src={require("../asset/images/vote.jpg")} height="150" alt="mahadeva" />
                <h3>Which is your favorite front end framowork in 2017</h3>
                <h5>Click on the below image icons to vote!</h5>
                <br/>
                <div className="row">
                    <div className="col-xs-offset-3 col-xs-2">
                        <img className="img img-circle" src={require("../asset/images/angular.jpg")} height="90" alt="Angular" onClick={this.handleVoteAngular} />
                    </div>

                    <div className="col-xs-2">
                        <img className="img img-circle" src={require("../asset/images/react.png")} height="90" alt="React" onClick={this.handleVoteReact} />
                    </div>

                    <div className="col-xs-2">
                        <img className="img img-circle" src={require("../asset/images/vuejs.png")} height="90"  alt="Vuejs" onClick={this.handleVoteVuejs} />
                    </div>
                </div>
            </div>

        );
    }
}
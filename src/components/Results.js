import React from 'react';

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.store = props.store;
    };    

    voteAngularInPercent() {
        if(this.store.getState().angular) {
            return (this.store.getState().angular /
                   (this.store.getState().angular + this.store.getState().react +
                   this.store.getState().vuejs)) * 100;
        } else {
            return 0;
        }
    }

    voteReactInPercent() {
         if(this.store.getState().react) {
            return (this.store.getState().react /
                   (this.store.getState().angular + this.store.getState().react +
                   this.store.getState().vuejs)) * 100;
        } else {
            return 0;
        }
    }

    voteVuejsInPercent() {
         if(this.store.getState().vuejs) {
            return (this.store.getState().vuejs /
                   (this.store.getState().angular + this.store.getState().react +
                   this.store.getState().vuejs)) * 100;
        } else {
            return 0;
        }
    }

    voteAngularInPercentStyle() {
        return {
            width: this.voteAngularInPercent() + '%'
        }
    }

    voteReactInPercentStyle() {
        return {
            width: this.voteReactInPercent() + '%'
        }
    }

    voteVuejsInPercentStyle() {
        return {
            width: this.voteVuejsInPercent() + '%'
        }
    }

    render() {
        return (
            <div>
                <span className="label label-danger">Angular: { this.voteAngularInPercent().toFixed(2) + '%' }</span>
                <div className="progress progress-striped active">
                  <div className="progress-bar progress-bar-danger" style={this.voteAngularInPercentStyle()}> 
                  </div>
                </div>

                <span className="label label-info">React: { this.voteReactInPercent().toFixed(2) + '%' }</span>
                <div className="progress progress-striped active">
                  <div className="progress-bar progress-bar-info" style={this.voteReactInPercentStyle()}>
                  </div>
                </div>

                <span className="label label-success">Vuejs: { this.voteVuejsInPercent().toFixed(2) + '%' }</span>
                <div className="progress progress-striped active">
                  <div className="progress-bar progress-bar-success" style={this.voteVuejsInPercentStyle()}>           
                  </div>
                </div>
            </div>
        );  
    }
 }
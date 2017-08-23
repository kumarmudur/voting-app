import { VoteAngular, VoteReact, VoteVuejs } from '../actions/voteAction';

const initialState = {
    angular: 0,
    react: 0,
    vuejs: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'VOTE_ANGULAR':
            return Object.assign({}, state, {
                angular: state.angular + 1
            })
            break;

        case 'VOTE_REACT': 
            return Object.assign({}, state, {
                react: state.react + 1
            })
           break;

        case 'VOTE_VUEJS': 
            return Object.assign({}, state, {
                vuejs: state.vuejs + 1
            })
           break;
    
        default:
        return state  
            break;
    }
}
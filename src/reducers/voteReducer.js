import { VoteAngular, VoteReact, VoteVuejs } from '../actions/voteAction';

const initialState = {
    angular: 0,
    react: 0,
    vuejs: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'VOTE_ANGULAR':
            state = {
                ...state,
                angular: state.angular + 1
            }
            break;

        case 'VOTE_REACT': 
            state = {
                ...state,
                react: state.react + 1
            }
           break;

        case 'VOTE_VUEJS': 
            state = {
                ...state,
                vuejs: state.vuejs + 1
            }
           break;
    
        default: 
            break;
    }
    return state; 
}
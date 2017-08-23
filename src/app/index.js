import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';

import App from '../components/App';
import Results from '../components/Results';
import voteApp from '../reducers/voteReducer';

let store = createStore(voteApp);

function render() {
    ReactDOM.render(
      <div>
        <App store={store}/>
        <Results store={store}/>
      </div>,
      document.getElementById('app')
   );    
}

store.subscribe(render);

render();
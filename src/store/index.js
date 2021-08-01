import { createStore } from 'redux';

// Step 1: initial state
const initialState = {
    counter: 0
}

// Step 2: reducer function
const counterReducer = (state = initialState, action) => {
    if(action.type === 'increment'){
        return{
            counter: state.counter + 1
        }
    }

    if(action.type === 'decrement'){
        return{
            counter: state.counter - 1
        }
    }
    if(action.type === 'reset'){
        return{
            counter: 0
        }
    }
    return state;
}


// Step 3: create store
const store = createStore(counterReducer);


// Step 4: export 
export default store;
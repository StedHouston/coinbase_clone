const UPDATE_ERRORS = 'UPDATE_ERRORS';



//Actions
export const UpdateErrorsAction = (errors) => {
    return {
        type: UPDATE_ERRORS,
        errors: errors
    }
}


//Reducers
export default function UpdateErrorsReducer(state = {errors: []}, action) {
    switch(action.type){
        case 'UPDATE_ERRORS':
            return {errors: action.errors}
        default:
            return state;
    }
}

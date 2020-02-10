import { filter } from 'lodash';

const moduleListReducer = (state, action) => {
    switch (action.type) {
        case "ADD_MODULE":
            return [
                ...state,
                action.module
            ];
        case "REMOVE_MODULE":
            return [
                ...filter(state, item => item.id !== action.module.id)
            ];
        default:
            return state;
    }
};

export default moduleListReducer;
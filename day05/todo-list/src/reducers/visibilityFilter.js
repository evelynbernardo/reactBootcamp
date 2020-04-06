import { VisibilityFilters } from '../actions'
import { act } from 'react-dom/test-utils'

const VisibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter 
        default:
            return state
    }
}

export default VisibilityFilter
const initState = {
    recommendations: []
}

const recommendationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_RECOMMENDATION':
            return {
                ...state,
                recommendations: [
                    ...state.recommendations,
                    action.payload
                ]
            }
        default:
            return state
    }
}

export default recommendationReducer;
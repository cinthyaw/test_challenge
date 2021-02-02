const initState = {
    selectedRisk: 5,
}

const riskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_RISK':
            return {
                ...state,
                selectedRisk: action.payload
            }
        default:
            return state
    }
}

export default riskReducer;
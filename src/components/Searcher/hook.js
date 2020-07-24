import { useReducer } from 'react'

const ACTIONS = {
    UPDATE_RATING: 'update_rating',
    UPDATE_LANGUAGE: 'update_language',
    UPDATE_TIMES: 'update_times'
}

const REDUCER = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload
            }
            case ACTIONS.UPDATE_LANGUAGE:
                return {
                    ...state,
                    language: action.payload
                }
            case ACTIONS.UPDATE_TIMES:
                return {
                    ...state,
                    times: state.times + 1
                }
        default:
            return state
    }
}

const useForm = ({ initialLanguage = 'en', initialRating = 'g' } = {}) => {
    const [ state, dispatch ] = useReducer(REDUCER, {
        rating: initialRating,
        language: initialLanguage,
        times: 0
    })

    const { rating, language, times } = state

    return {
        rating,
        language,
        times,
        updateLanguage: language => dispatch({ type: ACTIONS.UPDATE_LANGUAGE, payload: language }),
        updateRating: rating => dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
        updateTimes: times => dispatch({ type: ACTIONS.UPDATE_TIMES, payload: times })
    }
}
export default useForm
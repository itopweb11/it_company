import {emailRegexp, telRegexp} from "../../../constants";

const initialState = {
    websiteAddress: '',
    companyName: '',
    yourComment: '',
    name: '',
    email: '',
    phone: '',
    processingPersonalData: false,
    validate: {
        email: false,
        phone: false,
        name: false,
        processingPersonalData: false
    },
    regexpValid: {
        email: true,
        phone: true,
    },
    validForm: false,
    isLoading: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'setInputValue':
            const newRegexpValid = {...state.regexpValid};

            if (action.name === 'phone') {
                console.log(state.phone.length)
                newRegexpValid.phone = !action.value.includes('_');
            }

            if (action.name === 'email') {
                newRegexpValid.email = emailRegexp.test(String(action.value).toLowerCase());
            }

            return {
                ...state,
                [action.name]: action.value,
                validate: {
                    ...state.validate,
                    [action.name]: !action.value,
                },
                regexpValid: newRegexpValid
            }
        case 'setValidate':
            return {
                ...state,
                validate: {
                    ...state.validate,
                    [action.name]: !state[action.name],
                },
            }
        case 'checkValidate':
            return {
                ...state,
                validate: {
                    email: !state.email,
                    phone: !state.phone,
                    name: !state.name,
                    processingPersonalData: !state.processingPersonalData
                },
                validForm: !!(state.email && state.phone && state.name && state.processingPersonalData && state.regexpValid.email && state.regexpValid.phone),
            }
        case 'setIsLoading':
            return {
                ...state,
                isLoading: !state.isLoading
            }
        case 'clearState':
            return { ...initialState }
        default:
            return state
    }
}

export {
    reducer,
    initialState
};
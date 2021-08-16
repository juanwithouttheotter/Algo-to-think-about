const formReducer = (state, { key, newValue }) => {
        switch (key) {
                case 'first':
                        console.log(newValue);
                        state.name.first = newValue;
                        return { ...state };
                case 'last':
                        state.name.last = newValue;
                        return { ...state };
                case 'sex':
                        state.sex = newValue;
                        return { ...state };
                case 'birthday':
                        state.birthday = newValue;
                        return { ...state };
                case 'reset':
                        return newValue;

                default:
                        throw new Error(`No reducer available for key = ${key}`);
        }
};

export default formReducer;

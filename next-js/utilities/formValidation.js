const validateEmailPattern = () => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
};

export const formValidationField = {
    name: {
        required: "Please enter your name"
    },
    email: {
        required: "Please enter your email",
        pattern: {
            value: validateEmailPattern(),
            message: "This email id is not valid. Please enter another email id"
        }
    },
    password: {
        required: "Please enter your password",
    }
}
export const required = [(value) => !!value || "Required."]
export const passwordValidation = [
    v => !!v || 'Password is Required',
    (v) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(v) || "Must contain min 8 characters including uppercase, lowercase and numeric",
]
export const emailValidation = [
    v => !!v || 'Email is Required',
    (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"]
export const nameValidation = [
    v => !!v || 'Field is Required',
    (v) => /[a-zA-Z]/.test(v) && !(/[0-9]/.test(v)) || "Invalid Name"]

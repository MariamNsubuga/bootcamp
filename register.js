
export default function validate(values) {

    let errors = {};

    if (!values.fname.trim()) {
        errors.fname = 'Fullname required';
    }
    return errors;
}
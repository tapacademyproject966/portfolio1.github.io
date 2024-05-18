class Validator {
    static rules = {
        required: value => value.trim() !== '',
        email: value => /\S+@\S+\.\S+/.test(value),
        minLength: (value, length) => value.length >= length,
    };

    constructor(form) {
        this.form = form;
        this.errors = [];
    }

    validate(rules) {
        this.errors = [];
        for (const [inputName, inputRules] of Object.entries(rules)) {
            const input = this.form[inputName];
            if (!input) continue;

            for (const [rule, ruleValue] of Object.entries(inputRules)) {
                const ruleFunc = Validator.rules[rule];
                if (!ruleFunc(input.value, ruleValue)) {
                    this.errors.push(`${inputName} failed validation: ${rule}`);
                }
            }
        }
        return this.errors.length === 0;
    }
}

// Example usage:
const form = document.querySelector('form');
const validator = new Validator(form);
const rules = {
    email: { required: true, email: true },
    password: { required: true, minLength: 6 }
};

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validator.validate(rules)) {
        alert('Form submitted');
    } else {
        alert('Validation failed: ' + validator.errors.join(', '));
    }
});
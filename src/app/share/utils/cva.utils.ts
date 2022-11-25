import { FormGroup } from '@angular/forms';

export class CVAUtils {
    static getValidationErrors(form: FormGroup) {
        if (form.valid) {
            return null;
        }

        return Object.keys(form.controls).reduce((acc, controlName) => CVAUtils.getControlErrors(form, acc, controlName), {});
    }

    static getControlErrors(form: FormGroup, allErrors: any, controlName: string) {
        const errors = {...allErrors};
        const controlErrors = form.controls[controlName].errors;

        if(controlErrors) {
            errors[controlName] = controlErrors;
        }

        return errors;
    }
}

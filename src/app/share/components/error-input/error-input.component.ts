import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
    selector: 'trade-error-input',
    templateUrl: './error-input.component.html',
    styleUrls: ['./error-input.component.scss'],
})
export class ErrorInputComponent {
    message: string = '';
    errorMessages: Map<string, string> = new Map();
    @Input() errors: ValidationErrors;
    @Input() pristine: boolean;

    ngOnChanges(changes) {
        this.loadMessages(changes);
    }

    private loadMessages({ pristine, errors }) {
        const isNotFirstChange = !errors?.firstChange;
        const hasErrors = errors?.currentValue;
        const dirty = !pristine?.currentValue;
        const invalid = hasErrors && isNotFirstChange && dirty;
        invalid ? this.setErrorMessages(errors) : null;
        this.message = invalid ? this.getErrorsMessage(errors) : '';
    }

    private setErrorMessages(errors) {
        Object.keys(errors?.currentValue).forEach((error) => {
            let message;
            if (error === 'required') {
                message = 'Campo obrigatório';
            }
            if (error === 'minlength') {
                message = `Mínimo de ${errors?.currentValue[error]?.requiredLength} caracteres`;
            }
            if (error === 'maxlength') {
                message = `Máximo de ${errors?.currentValue[error]?.requiredLength} caracteres`;
            }
            this.errorMessages.set(error, message);
        });
    }

    private getErrorsMessage(errors) {
        let errorMessage;
        Object.keys(errors?.currentValue).forEach((error) => {
            errorMessage = this.errorMessages.get(error) + ' ';
        });
        return errorMessage;
    }
}

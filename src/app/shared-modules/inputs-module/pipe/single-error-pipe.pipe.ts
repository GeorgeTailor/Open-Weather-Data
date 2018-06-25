import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'singleErrorPipe'
})
export class SingleErrorPipe implements PipeTransform {
    /**
     * Given an array of errors, returns first one.
     * @param value
     * @param args
     */
    transform(value: Array<any>, args?: any): any {
        if (!args.errors) {
            throw new Error('Input object should have errors object');
        }
        const keys = Object.keys(args.errors);
        if (keys.length > 0) {
            return value.filter(val => val.validationFn === keys[0]);
        }
        return args;
    }
}

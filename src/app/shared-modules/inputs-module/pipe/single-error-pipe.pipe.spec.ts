import { SingleErrorPipe } from './single-error-pipe.pipe';

describe('SingleErrorPipePipe', () => {
    let pipe: SingleErrorPipe;
    let value;
    let args;

    beforeEach(() => {
        pipe = new SingleErrorPipe();
        value = [
            {
                validationFn: 'X'
            },
            {
                validationFn: 'Y'
            }
        ];
        args = {
            errors: {
                X: 'X',
                Y: 'Y'
            }
        };
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('transforms multi element array to single element array', () => {
        const result = pipe.transform(value, args);
        expect(result.length).toEqual(1);
    });

    it('throws error on bad input', () => {
        args = {
            errors1: {
                X: 'X',
                Y: 'Y'
            }
        };
        expect(() => pipe.transform(value, args)).toThrowError();
    });
    it('returns input object when it has empty nested errors object', () => {
      args = {
          errors: {}
      };
      const result = pipe.transform(value, args);
      expect(result).toBe(args);
  });
});

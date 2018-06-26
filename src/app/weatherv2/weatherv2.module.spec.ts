import { Weatherv2Module } from './weatherv2.module';

describe('Weatherv2Module', () => {
  let weatherv2Module: Weatherv2Module;

  beforeEach(() => {
    weatherv2Module = new Weatherv2Module();
  });

  it('should create an instance', () => {
    expect(weatherv2Module).toBeTruthy();
  });
});

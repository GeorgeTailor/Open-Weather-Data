import { HistoricalDataModule } from './historical-data.module';

describe('HistoricalDataModule', () => {
  let historicalDataModule: HistoricalDataModule;

  beforeEach(() => {
    historicalDataModule = new HistoricalDataModule();
  });

  it('should create an instance', () => {
    expect(historicalDataModule).toBeTruthy();
  });
});

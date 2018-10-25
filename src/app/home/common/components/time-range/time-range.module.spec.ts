import { TimeRangeModule } from './time-range.module';

describe('TimeRangeModule', () => {
  let timeRangeModule: TimeRangeModule;

  beforeEach(() => {
    timeRangeModule = new TimeRangeModule();
  });

  it('should create an instance', () => {
    expect(timeRangeModule).toBeTruthy();
  });
});

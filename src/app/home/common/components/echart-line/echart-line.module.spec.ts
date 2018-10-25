import { EchartLineModule } from './echart-line.module';

describe('EchartLineModule', () => {
  let echartLineModule: EchartLineModule;

  beforeEach(() => {
    echartLineModule = new EchartLineModule();
  });

  it('should create an instance', () => {
    expect(echartLineModule).toBeTruthy();
  });
});

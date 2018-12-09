import { ComModule } from './com.module';

describe('ComModule', () => {
  let comModule: ComModule;

  beforeEach(() => {
    comModule = new ComModule();
  });

  it('should create an instance', () => {
    expect(comModule).toBeTruthy();
  });
});

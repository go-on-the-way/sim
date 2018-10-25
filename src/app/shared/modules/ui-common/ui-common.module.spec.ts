import { UiCommonModule } from './ui-common.module';

describe('UiCommonModule', () => {
  let uiCommonModule: UiCommonModule;

  beforeEach(() => {
    uiCommonModule = new UiCommonModule();
  });

  it('should create an instance', () => {
    expect(uiCommonModule).toBeTruthy();
  });
});

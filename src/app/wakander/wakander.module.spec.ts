import { WakanderModule } from './wakander.module';

describe('WakanderModule', () => {
  let wakanderModule: WakanderModule;

  beforeEach(() => {
    wakanderModule = new WakanderModule();
  });

  it('should create an instance', () => {
    expect(wakanderModule).toBeTruthy();
  });
});

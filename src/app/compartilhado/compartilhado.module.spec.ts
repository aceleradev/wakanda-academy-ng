import { CompartilhadoModule } from './compartilhado.module';

describe('CompartilhadoModule', () => {
  let compartilhadoModule: CompartilhadoModule;

  beforeEach(() => {
    compartilhadoModule = new CompartilhadoModule();
  });

  it('should create an instance', () => {
    expect(compartilhadoModule).toBeTruthy();
  });
});

import { WakatimeHPage } from './app.po';

describe('wakatime-h App', () => {
  let page: WakatimeHPage;

  beforeEach(() => {
    page = new WakatimeHPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { I18npocPage } from './app.po';

describe('i18npoc App', () => {
  let page: I18npocPage;

  beforeEach(() => {
    page = new I18npocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

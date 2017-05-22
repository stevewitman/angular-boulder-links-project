import { AblinksPage } from './app.po';

describe('ablinks App', () => {
  let page: AblinksPage;

  beforeEach(() => {
    page = new AblinksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

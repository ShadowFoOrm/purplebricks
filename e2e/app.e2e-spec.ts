import { PurplebricksPage } from './app.po';

describe('purplebricks App', () => {
  let page: PurplebricksPage;

  beforeEach(() => {
    page = new PurplebricksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

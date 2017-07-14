import { MultifilterPage } from './app.po';

describe('multifilter App', () => {
  let page: MultifilterPage;

  beforeEach(() => {
    page = new MultifilterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

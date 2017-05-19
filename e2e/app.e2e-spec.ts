import { Essilor1Page } from './app.po';

describe('essilor1 App', () => {
  let page: Essilor1Page;

  beforeEach(() => {
    page = new Essilor1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

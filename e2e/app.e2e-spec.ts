import { Ppr1Page } from './app.po';

describe('ppr1 App', () => {
  let page: Ppr1Page;

  beforeEach(() => {
    page = new Ppr1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

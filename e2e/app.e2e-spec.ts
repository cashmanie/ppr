<<<<<<< HEAD
import { AppPage } from './app.po';

describe('ppr App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
=======
import { Ppr1Page } from './app.po';

describe('ppr1 App', () => {
  let page: Ppr1Page;

  beforeEach(() => {
    page = new Ppr1Page();
>>>>>>> refs/remotes/origin/master
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to app!');
=======
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
>>>>>>> refs/remotes/origin/master
  });
});

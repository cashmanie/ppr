import { browser, by, element } from 'protractor';

<<<<<<< HEAD
export class AppPage {
=======
export class Ppr1Page {
>>>>>>> refs/remotes/origin/master
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

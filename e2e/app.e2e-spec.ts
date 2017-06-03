import { GphAppPage } from './app.po';

describe('gph-app App', () => {
  let page: GphAppPage;

  beforeEach(() => {
    page = new GphAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

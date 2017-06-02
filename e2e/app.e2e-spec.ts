import { FleetBuilderPage } from './app.po';

describe('fleet-builder App', () => {
  let page: FleetBuilderPage;

  beforeEach(() => {
    page = new FleetBuilderPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

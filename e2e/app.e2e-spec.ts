import { WorldclockPage } from './app.po';

describe('worldclock App', function() {
  let page: WorldclockPage;

  beforeEach(() => {
    page = new WorldclockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

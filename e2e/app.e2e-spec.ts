import { CarsUiPage } from './app.po';

describe('cars-ui App', function() {
  let page: CarsUiPage;

  beforeEach(() => {
    page = new CarsUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

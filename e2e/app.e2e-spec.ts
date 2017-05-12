import { AmazonPage } from './app.po';

describe('amazon App', () => {
  let page: AmazonPage;

  beforeEach(() => {
    page = new AmazonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

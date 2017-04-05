import { ToolbarPage } from './app.po';

describe('toolbar App', () => {
  let page: ToolbarPage;

  beforeEach(() => {
    page = new ToolbarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

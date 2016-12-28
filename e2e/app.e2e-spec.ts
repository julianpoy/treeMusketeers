import { TreeMPage } from './app.po';

describe('tree-m App', function() {
  let page: TreeMPage;

  beforeEach(() => {
    page = new TreeMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

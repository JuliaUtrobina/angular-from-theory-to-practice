import { AngularFromTheoryToPracticePage } from './app.po';

describe('angular-from-theory-to-practice App', function() {
  let page: AngularFromTheoryToPracticePage;

  beforeEach(() => {
    page = new AngularFromTheoryToPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

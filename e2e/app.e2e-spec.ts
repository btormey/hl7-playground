import { Hl7PlaygroundPage } from './app.po';

describe('hl7-playground App', () => {
  let page: Hl7PlaygroundPage;

  beforeEach(() => {
    page = new Hl7PlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

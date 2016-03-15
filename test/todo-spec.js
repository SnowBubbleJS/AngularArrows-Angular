/* Angular material doesn't work well with protractor...
  https://github.com/angular/material/issues/1063
*/
describe('SnowBubble app', function() {
  it('should have a title', function() {
    browser.get('http://localhost:5000/');
    expect(browser.getTitle()).toEqual('SnowBubble');
  });
});

describe('Editors loaded', function() {
  it('should have html editor', function() {
    var html = element(by.id('html'));
    expect(html);
  });
  it('should have app editor', function() {
    var app = element(by.id('app'));
    expect(app);
  });

  it('should have controller editor', function() {
    var controller = element(by.id('controller'));
    expect(controller);
  });

  it('should have factory editor', function() {
    var factory = element(by.id('factory'));
    expect(factory);
  });
});

/* Angular material doesn't work well with protractor...
  https://github.com/angular/material/issues/1063
*/
describe('SnowBubble app', function() {
  it('should have a title', function() {
    browser.get('http://localhost:5000/');
    expect(browser.getTitle()).toEqual('SnowBubble');
  });
});

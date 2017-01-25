export default class MessageFormat {

  constructor(){
    return this;
  }
  setIntlSupport() {
    return this;
  }
  compile() {
    console.log('called');
    return {
      test: () => 'test-message'
    }
  }
}

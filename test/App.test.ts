import { describe, beforeAll, it, expect } from '@jest/globals';
import { App } from '../src/App';

describe('App', () => {
  let testee: App;

  beforeAll(() => {
    testee = new App();
  });

  it('should do something', async () => {
    testee.doSomething();
    expect(true);
  });
});

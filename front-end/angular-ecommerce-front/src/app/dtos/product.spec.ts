import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(1, 'test', 'test', 1, 'test', 'test', 1)).toBeTruthy();
  });
});

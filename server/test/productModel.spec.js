const Product = require('../../db/models/products');
const dbUtils = require('../../db/lib/utils');

describe('Product model', () => {
  beforeEach(() => {
    return dbUtils.rollbackMigrate();
  });

  afterEach(() => {
    return dbUtils.rollback();
  });

  it('should be able to retrieve a product by name', () => {
    return Product.where({name: 'Test Product'}).fetch()
      .then(product => {
        expect(product.get('id')).toBe(1);
        expect(product.get('name')).toBe('Test Product');
        expect(product.get('upc')).toBe('abc123');
        expect(product.get('description')).toBe('Test Product Please Ignore');
      });
  });

  it('should be able to retrieve associated vendors and urls', () => {
    return Product.where({name: 'Test Product'}).fetch({
      withRelated: [
        'product_urls.vendor'
      ]
    })
      .then(product => {
        expect(product.related('product_urls').length).toBe(1);

        var product_url = product.related('product_urls').at(0);
        expect(product_url.get('url')).toBe('https://www.amazon.com/foo');
      });
  });

  it('should be able to retrieve associated vendors and prices sorted by newest', () => {
    return Product.where({
      name: 'Test Product'
    }).fetch({
      withRelated: [
        { 'prices': q => q.orderBy('created_at', 'DESC') },
        'prices.vendor'
      ]
    })
      .then(product => {
        expect(product.related('prices').length).toBe(2);
        
        var price1 = product.related('prices').at(0);
        var price2 = product.related('prices').at(1);

        expect(price1.related('vendor').get('name')).toBe('Amazon');
        expect(price1.get('price')).toBe(123456);

        expect(price2.related('vendor').get('name')).toBe('Amazon');
        expect(price2.get('price')).toBe(999999);

        expect(price1.get('created_at').getTime())
          .toBeGreaterThan(price2.get('created_at').getTime());
      });
  });

  it('allows users to follow products', () => {
    return Product.where({
      name: 'Test Product'
    }).fetch()
      .then(product => {
        return product.followers().attach(1);
      })
      .then(() => {
        return Product.where({
          name: 'Test Product'
        }).fetch({
          withRelated: [
            'followers'
          ]
        });
      })
      .then(product => {
        expect(product.related('followers').length).toBe(1);
      });
  });
});

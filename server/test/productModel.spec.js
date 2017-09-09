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
      withRelated: [{
        'vendors': q => q.columns([
          'vendors.id',
          'vendors.name',
          'product_urls.url as product_url'
        ])
      }]
    })
      .then(product => {
        expect(product.related('vendors').length).toBe(1);

        var vendor = product.related('vendors').at(0);
        expect(vendor.get('id')).toBe(1);
        expect(vendor.get('name')).toBe('Amazon');
        expect(vendor.get('product_url')).toBe('https://www.amazon.com/foo');
      });
  });

  it('should be able to retrieve associated vendors and prices sorted by newest', () => {
    return Product.where({
      name: 'Test Product'
    }).fetch({
      withRelated: [{
        'prices': q => q.columns([
          'vendors.name',
          'prices.price',
          'prices.created_at as timestamp'
        ])
          .orderBy('timestamp', 'DESC')
      }]
    })
      .then(product => {
        expect(product.related('prices').length).toBe(2);
        
        var price1 = product.related('prices').at(0);
        var price2 = product.related('prices').at(1);

        expect(price1.get('name')).toBe('Amazon');
        expect(price1.get('price')).toBe(123456);

        expect(price2.get('name')).toBe('Amazon');
        expect(price2.get('price')).toBe(999999);

        expect(price1.get('timestamp').getTime())
          .toBeGreaterThan(price2.get('timestamp').getTime());
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

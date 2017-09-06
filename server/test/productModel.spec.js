const Product = require('../../db/models/products');
const dbUtils = require('../../db/lib/utils');

describe('Product model tests', () => {
  beforeEach(() => {
    return dbUtils.rollbackMigrate();
  });

  afterEach(() => {
    return dbUtils.rollback();
  });

  it('should be able to retrieve a vendor', () => {
  });
});

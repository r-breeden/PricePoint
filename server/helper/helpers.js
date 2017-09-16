var ignoreTypeError = function (cb) {
  try {
    cb();
  } catch (e) {
    if (e instanceof TypeError) {
      console.log('ignored error: ', e);
    } else {
      throw e;
    }
  }
};

var normalizeAmazon = function (obj) {
  var normalized = {};

  normalized.name = '';
  ignoreTypeError( () => { normalized.name = obj.ItemAttributes[0].Title[0]; } );

  normalized.itemURL = '';
  ignoreTypeError( () => { normalized.itemURL = obj.DetailPageURL[0]; });

  normalized.imageURL = '';
  ignoreTypeError( () => { normalized.imageURL = obj.LargeImage[0].URL[0]; });

  normalized.description = '';
  ignoreTypeError( () => { normalized.description = obj.ItemAttributes[0].Feature[0]; });

  normalized.price = '';
  ignoreTypeError( () => { normalized.price = obj.OfferSummary[0].LowestNewPrice[0].FormattedPrice[0]; });

  normalized.upc = '';
  ignoreTypeError( () => { normalized.upc = obj.ItemAttributes[0].UPC[0]; });

  normalized.brand = '';
  ignoreTypeError( () => { normalized.brand = obj.ItemAttributes[0].Brand[0]; });

  return normalized;
};

module.exports = normalizeAmazon;

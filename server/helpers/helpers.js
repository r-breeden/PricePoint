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

  normalized.ASIN = '';
  ignoreTypeError( () => { normalized.ASIN = obj.ASIN[0]; });

  normalized.dimensions = [['' ,''],['' ,''],['' ,'']];
  ignoreTypeError( () => {
    var height = [];
    //add height
    height.push(obj.ItemAttributes[0].PackageDimensions[0].Height[0]._);
    height.push(obj.ItemAttributes[0].PackageDimensions[0].Height[0].$.Units);
    var width = [];
    width.push(obj.ItemAttributes[0].PackageDimensions[0].Width[0]._);
    width.push(obj.ItemAttributes[0].PackageDimensions[0].Width[0].$.Units);
    var length = [];
    length.push(obj.ItemAttributes[0].PackageDimensions[0].Length[0]._);
    length.push(obj.ItemAttributes[0].PackageDimensions[0].Length[0].$.Units);

    var dimensions = [height, width, length];
    normalized.dimensions = dimensions;
  });
  
  normalized.title = '';
  ignoreTypeError( () => { normalized.title = obj.ItemAttributes[0].Title[0]; });

  normalized.itemURL = '';
  ignoreTypeError( () => { normalized.itemURL = obj.DetailPageURL[0]; });

  normalized.imageURL = '';
  ignoreTypeError( () => { normalized.imageURL = obj.LargeImage[0].URL[0]; });

  normalized.description = '';
  ignoreTypeError( () => { normalized.description = obj.ItemAttributes[0].Feature; });

  normalized.price = '';
  ignoreTypeError( () => { normalized.price = obj.OfferSummary[0].LowestNewPrice[0].FormattedPrice[0]; });

  normalized.upc = '';
  ignoreTypeError( () => { normalized.upc = obj.ItemAttributes[0].UPC[0]; });

  normalized.brand = '';
  ignoreTypeError( () => { normalized.brand = obj.ItemAttributes[0].Brand[0]; });

  return normalized;
};

module.exports = normalizeAmazon;
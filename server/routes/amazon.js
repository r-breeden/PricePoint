const amazon = require('amazon-product-api');
const Promise = require('bluebird');
const fs = require('fs');

const client = amazon.createClient({

});

var search = Promise.promisify(client.itemSearch);
Promise.map([
  {
    Keywords: 'Nintendo Switch with Gray Joy-Con',
    idType: 'ASIN',
    itemId: 'B01LTHP2ZK'
  },
  {
    Keywords: 'Echo Dot (2nd Generation) - Black',
    idType: 'ASIN',
    itemId: 'B01DFKC2SO'
  },
  {
    Keywords: 'Amazon Echo - Black',
    idType: 'ASIN',
    itemId: 'B00X4WHP5E'
  },
  {
    Keywords: 'Echo Show - Black',
    idType: 'ASIN',
    itemId: 'B01J24C0TI'
  },
  {
    Keywords: 'Kindle Paperwhite E-reader - Black, 6" High-Resolution Display (300 ppi) with Built-in Light, Wi-Fi - Includes Special Offers',
    idType: 'ASIN',
    itemId: 'B00OQVZDJM'
  },
  {
    Keywords: 'Raspberry PI 3 Model B 1.2GHz 64-bit quad-core ARMv8 CPU, 1GB RAM',
    idType: 'ASIN',
    itemId: 'B01CD5VC92'
  },
  {
    Keywords: 'Bose QuietComfort 35 Wireless Headphones, Noise Cancelling - Black',
    idType: 'ASIN',
    itemId: 'B01E3SNO1G'
  },
  {
    Keywords: 'Intel Core i7 6700K 4.00 GHz Unlocked Quad Core Skylake Desktop Processor, Socket LGA 1151 [BX80662I76700K]',
    idType: 'ASIN',
    itemId: 'B012M8LXQW'
  },
  {
    Keywords: 'Kodak Tri-x400 135-36 36mm Black and White Film - 10 Pack',
    idType: 'ASIN',
    itemId: 'B004UT0T5S'
  },
  {
    Keywords: 'Samsung Electronics QN65Q7F 65-Inch 4K Ultra HD Smart QLED TV (2017 Model)',
    idType: 'ASIN',
    itemId: 'B01MUG21M6'
  },
  {
    Keywords: 'Canon EOS Rebel T5 Digital SLR Camera Kit with EF-S 18-55mm IS II Lens',
    idType: 'ASIN',
    itemId: 'B00IB1BTWI'
  },
  {
    Keywords: 'Apple MacBook MLH72LL/A 12-Inch Laptop with Retina Display, Space Gray, 256 GB (Discontinued by Manufacturer)',
    idType: 'ASIN',
    itemId: 'B01EIQDGDO'
  },
  {
    Keywords: 'Philippine Brand Naturally Delicious Dried Mangoes Tree Ripened Value Bag 30 Ounces',
    idType: 'ASIN',
    itemId: 'B000Q5NSAS'
  },
  {
    Keywords: 'Powerbeats3 Wireless In-Ear Headphones - Black (Certified Refurbished)',
    idType: 'ASIN',
    itemId: 'B06X979GGB'
  },
  {
    Keywords: 'Red Bull Energy Drink, 8.4 Fl Oz Cans, Pack of 24',
    idType: 'ASIN',
    itemId: 'B003PFPFIE'
  },
  {
    Keywords: 'Vornado Flippi V6 Personal Air Circulator Fan, Midnight',
    idType: 'ASIN',
    itemId: 'B000YKC0UY'
  },
  {
    Keywords: 'Acer Predator XB281HK bmiprz 28-inch UHD (3840x2160) NVIDIA G-SYNC Monitor (Display Port & HDMI Port)',
    idType: 'ASIN',
    itemId: 'B01N34Q6CI'
  },
  {
    Keywords: 'Contigo AUTOSEAL West Loop Vacuum Insulated Stainless Steel Travel Mug with Easy-Clean Lid, 16oz, Greyed Jade',
    idType: 'ASIN',
    itemId: 'B00KR9OIQQ'
  },
  {
    Keywords: 'Dishonored 2 PlayStation 4',
    idType: 'ASIN',
    itemId: 'B00ZM5OXD8'
  },
  {
    Keywords: 'LEGO Super Heroes Batman Classic TV Series â€“ Batcave 76052',
    idType: 'ASIN',
    itemId: 'B01BZQUJT4'
  },
  {
    Keywords: 'Samick Sage Takedown Recurve Bow',
    idType: 'ASIN',
    itemId: 'B007O7Q2L8'
  },
  {
    Keywords: 'Leica M7 0.72 35mm Rangefinder Camera body',
    idType: 'ASIN',
    itemId: 'B0000BZM10'
  },
  {
    Keywords: 'Nerf N-Strike Elite HyperFire Blaster',
    idType: 'ASIN',
    itemId: 'B01BH928LQ'
  }
],
item => search(item))
  .then(results => {
    var date = new Date().toISOString().slice(0, 10);
    fs.writeFile(`../${date}-results.json`, JSON.stringify(results), (err) => {
      if (err) {
        throw err;
      } else {
        console.log('MEOW');
      }
    });
  });

module.exports = amazon;

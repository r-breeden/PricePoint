import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Thumbnail, Table, Button, ButtonToolbar } from 'react-bootstrap';
import Header from './Header.jsx';
import { connect } from 'react-redux';
import {LineChart} from 'react-easy-chart';
//
// {
//   "name": "Nerf N-Strike Elite Strongarm Blaster",
//   "description": "Strongarm blaster holds 6 elite darts and fires darts up to 90 feet.\nSlam fire slide lets you rapid-fire all 6 included elite darts.\nRotating barrel flips open for easy loading.\nElite darts work with any elite blaster and most n-strike blasters (sold separately).\nBlaster colors may vary.\nIncludes blaster, 6 elite darts, and instructions.",
//   "imageURL": "https://images-na.ssl-images-amazon.com/images/I/41S49cwqn8L.jpg",
//   "upc": "630509260232",
//   "vendors": {
//     "Amazon": {
//       "url": "https://www.amazon.com/Nerf-N-Strike-Elite-Strongarm-Blaster/dp/B00DW1JT5G?psc=1&SubscriptionId=AKIAJJEAIGPROK3CRXGA&tag=pricepoint03-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00DW1JT5G",
//       "prices": [
//         {
//           "price": 12.99,
//           "timestamp": "2017-09-10T18:35:46.626Z"
//         },
//         {
//           "price": 12.99,
//           "timestamp": "2017-09-13T18:51:25.962Z"
//         }
//       ]
//     }
//   }
// }


class LineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPricesAt: false,
      vendors: {
        "Amazon": {
          "url": "https://www.amazon.com/Nerf-N-Strike-Elite-Strongarm-Blaster/dp/B00DW1JT5G?psc=1&SubscriptionId=AKIAJJEAIGPROK3CRXGA&tag=pricepoint03-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00DW1JT5G",
          "prices": [
            {
              "price": 12.99,
              "timestamp": "2017-09-10T18:35:46.626Z"
            },
            {
              "price": 12.99,
              "timestamp": "2017-09-13T18:51:25.962Z"
            }
          ]
        }
      }
      // [
      //         {
      //           name: 'Amazon',
      //           color: 'black',
      //           logoUrl: 'https://vignette.wikia.nocookie.net/logopedia/images/1/19/Amazon-logo-png-transparent-white.png/revision/latest?cb=20140523171103',
      //           productUrl: 'https://www.amazon.com/Kodak-Tri-x400-135-36-Black-White/dp/B004UT0T5S?SubscriptionId=AKIAJJEAIGPROK3CRXGA&tag=pricepoint03-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004UT0T5S',
      //           data: [
      //               { x: '1-Jan-15', y: 20 },
      //               { x: '1-Feb-15', y: 10 },
      //               { x: '1-Mar-15', y: 33 },
      //               { x: '1-Apr-15', y: 45 },
      //               { x: '1-May-15', y: 15 }
      //           ]
      //         },
      //         {
      //           name: 'Walmart',
      //           color: 'blue',
      //           data: [
      //             { x: '1-Jan-15', y: 10 },
      //             { x: '1-Feb-15', y: 15 },
      //             { x: '1-Mar-15', y: 13 },
      //             { x: '1-Apr-15', y: 15 },
      //             { x: '1-May-15', y: 10 }
      //           ]
      //         },
      //         {
      //           name: 'NewEgg',
      //           color: 'red',
      //           data: [
      //             { x: '1-Jan-15', y: 15.99 },
      //             { x: '1-Feb-15', y: 21.99 },
      //             { x: '1-Mar-15', y: 50.00 },
      //             { x: '1-Apr-15', y: 61.93 },
      //             { x: '1-May-15', y: 8.76 }
      //           ]
      //         },
      //         {
      //           name: 'BestBuy',
      //           color: 'yellow',
      //           data: [
      //             { x: '1-Jan-15', y: 9.99 },
      //             { x: '1-Feb-15', y: 13.99 },
      //             { x: '1-Mar-15', y: 11.11 },
      //             { x: '1-Apr-15', y: 41.23 },
      //             { x: '1-May-15', y: 8.76 }
      //           ]
      //         }
      //       ]
    };
    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.displayButtons = this.state.vendors.map(vendor => {
      return <Button style={{backgroundSize: '100%', width: 72, backgroundImage: `url(${vendor.logoUrl})`, backgroundColor: vendor.color, color: 'white'}}></Button>;
    });
  }

  mouseOverHandler(coordinates, e) {
    console.log('show prices');
    this.setState({
      showPricesAt: true
    });
  }

  mouseOutHandler(e) {
    console.log('remove them');
    this.setState({
      showPricesAt: false
    });
  }

  render() {
    return (
      <div>
        <div>
          <ButtonToolbar>
            {this.displayButtons}
          </ButtonToolbar>
        </div>
        <LineChart
          xType={'time'}
          axes
          axisLabels={{x: 'Date', y: 'Price' }}
          grid
          verticalGrid
          mouseOverHandler={this.mouseOverHanderler}
          mouseOutHandler={this.mouseOutHandler}
          interpolate={'cardinal'}
          lineColors={this.state.vendors.map(vendor => {
            return vendor.color;
          })}
          width={750}
          height={250}
          data={this.state.vendors.map(vendor => {
            return vendor.data;
          })}
        />
      </div>
    );
  }
}
export default LineGraph;

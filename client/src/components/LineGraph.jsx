import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Thumbnail, Table, Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import Header from './Header.jsx';
import { connect } from 'react-redux';
import {LineChart} from 'react-easy-chart';
import TimeSpan from './TimeSpan.jsx';

const normalizeData = (name, vendorObj) => {
  var obj = {};
  obj.name = name;
  obj.url = vendorObj.url;
  obj.data = [];
  for (var i = 0; i < vendorObj.prices.length; i++) {
    let dataPoint = {};
    dataPoint.x = vendorObj.prices[i].timestamp.slice(0, 19);
    dataPoint.y = vendorObj.prices[i].price;
    obj.data.push(dataPoint);
  }
  return obj;
};

class LineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateRange: '2017-06-08T18:35:46',
      vendors: {
        Amazon: {
          url: "https://www.amazon.com/Nerf-N-Strike-Elite-Strongarm-Blaster/dp/B00DW1JT5G?psc=1&SubscriptionId=AKIAJJEAIGPROK3CRXGA&tag=pricepoint03-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00DW1JT5G",
          prices: [
            {
              price: 12.99,
              timestamp: "2017-09-05T18:35:46.626Z"
            },
            {
              price: 11.99,
              timestamp: "2017-09-08T18:35:46.626Z"
            },
            {
              price: 10.99,
              timestamp: "2017-09-10T18:35:46.626Z"
            },
            {
              price: 15.99,
              timestamp: "2017-09-11T18:35:46.626Z"
            },
            {
              price: 19.99,
              timestamp: "2017-09-13T18:35:46.626Z"
            },
            {
              price: 13.99,
              timestamp: "2017-09-16T18:51:25.962Z"
            }
          ]
        }
      }
    };
    this.vendors = [];
    this.colors = ['blue', 'red', 'yellow', 'black'];
    for(let vendor in this.state.vendors) {
      var obj = normalizeData(vendor, this.state.vendors[vendor]);
      obj.color = this.colors.pop();
      this.vendors.push(obj);
    }
    this.displayButtons = this.vendors.map( vendor => {
      return <Button
        style={{backgroundSize: '100%', width: 72,
          backgroundColor: vendor.color, color: 'white'}}
        href={vendor.url}>
        {vendor.name}</Button>;
    });
  }

  onDateChange(newDate) {
    console.log(newDate);
    this.setState({
      dateRange: newDate
    });
  }


  render() {
    return (
      <div>
        <div>
          <ButtonGroup >
            {this.displayButtons}
            <TimeSpan changeRange={this.onDateChange}/>
          </ButtonGroup>
        </div>

        <LineChart
          xType={'time'}
          axes
          xDomainRange={[this.dateRange,new Date.toString().slice(0,19)]}
          axisLabels={{x: 'Date', y: 'Price' }}
          grid
          datePattern={'%Y-%m-%dT%H:%M:%S'}
          verticalGrid
          interpolate={'cardinal'}
          lineColors={this.vendors.map(vendor => {
            return vendor.color;
          })}
          width={750}
          height={250}
          data={this.vendors.map(vendor => {
            return vendor.data;
          })}
        />
      </div>
    );
  }
}
export default LineGraph;

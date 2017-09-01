import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap'; 
import { Navbar, Button, Glyphicon, Thumbnail } from 'react-bootstrap'; 
import { Provider } from 'react-redux';
import store from './store';
import Search from './components/Search.jsx'; 

const App = (
  <div className="price-point-app">
    <Grid fluid>
      <Row>
        <Col md={12}>
          <Navbar fixedTop fluid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">PricePoint</a>
                <small> a powerful price tracker tool</small>
              </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Text pullRight>
              <Button>
                <a href='/login'><Glyphicon glyph="log-in"/></a>
              </Button>
            </Navbar.Text>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Search>
          </Search>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3}>
          <Thumbnail href="#" alt="171x180" src="http://www.gujaratheritagetourism.com/wp-content/uploads/2017/04/dummy-img.jpg" />
          <Thumbnail href="#" alt="171x180" src="http://www.gujaratheritagetourism.com/wp-content/uploads/2017/04/dummy-img.jpg" />
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail href="#" alt="171x180" src="http://www.gujaratheritagetourism.com/wp-content/uploads/2017/04/dummy-img.jpg" />
          <Thumbnail href="#" alt="171x180" src="http://www.gujaratheritagetourism.com/wp-content/uploads/2017/04/dummy-img.jpg" />
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail href="#" alt="171x180" src="http://www.gujaratheritagetourism.com/wp-content/uploads/2017/04/dummy-img.jpg" />
          <Thumbnail href="#" alt="171x180" src="http://www.gujaratheritagetourism.com/wp-content/uploads/2017/04/dummy-img.jpg" />
        </Col>
      </Row>
    </Grid>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    {App}
  </Provider>,
  document.getElementById('root')
);



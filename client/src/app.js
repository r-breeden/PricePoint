import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

const App = (
  <div className="price-point-app">
    <div className="container">
      <Row>
        <Col md={6}>
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
          {/* <Search>
          </Search> */}
        </Col>
      </Row>
    </div>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    {App}
  </Provider>,
  document.getElementById('root'));




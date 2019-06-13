import React, {Component} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends Component {
  constructor(props) {
    super(props);
  }
}

componentDidMount() {
  const city = [52.38333, 4.9];
  const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const zoom = 12;
const map = leaflet.map(`map`, {
  center: city,
  zoom: zoom,
  zoomControl: false,
  marker: true
});
map.setView(city, zoom);
}

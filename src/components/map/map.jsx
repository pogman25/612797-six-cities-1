import React, {Component} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.map = null;
    this.layer = [];
  }

  componentDidMount() {
    const mapElement = document.getElementById(`map`);
    if (mapElement) {
      const city = [52.38333, 4.9];
      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      const zoom = 12;
      this.map = leaflet.map(`map`, {
        center: city,
        zoomControl: false,
        marker: true
      });
      this.map.setView(city, zoom);
      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this.map);

      this.props.offers.forEach((item) => {
        this.layer = [...this.layer, leaflet
        .marker(item.coords, {icon})
        .addTo(this.map)];
      });
    }
  }

  componentDidUpdate () {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this.layer.forEach((i) => {
      this.map.removeLayer(i);
    });

    this.props.offers.forEach((item) => {
      this.layer = [...this.layer, leaflet
        .marker(item.coords, {icon})
        .addTo(this.map)];
    });
  }

  render() {
    return <section className = "cities__map map" id = "map"> </section>;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        price: PropTypes.string,
        rate: PropTypes.number,
        src: PropTypes.string,
        premium: PropTypes.string,
        description: PropTypes.string,
        id: PropTypes.number,
        coords: PropTypes.arrayOf(PropTypes.number)
      })
  ),
};

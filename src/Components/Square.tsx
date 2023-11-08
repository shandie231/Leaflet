import { useLeafletContext } from '@react-leaflet/core';
import { ControlledLayer } from '@react-leaflet/core/lib/context';
import L, { LatLngTuple, Map, Rectangle } from 'leaflet';
import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { squareProps } from './types'

function getBounds(center: LatLngTuple, size: number) {
  return L.latLng(center).toBounds(size);
}


const Square = (props: squareProps): null => {
  const context = useLeafletContext();
  const squareRef = useRef<Rectangle | null>();
  const propsRef = useRef<squareProps | null>(props);

  useEffect(() => {
    squareRef.current = new Rectangle(getBounds(props.center, props.size));
    const container: ControlledLayer = context.layerContainer || context.map;
    container.addLayer(squareRef.current);

    return () => {
      if (squareRef.current) {
        container.removeLayer(squareRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (
      props.center !== propsRef.current?.center ||
      props.size !== propsRef.current?.size
    ) {
      if (squareRef.current) {
        squareRef.current.setBounds(getBounds(props.center, props.size));
      }
    }
    propsRef.current = props;
  }, [props.center, props.size]);

  return null;
}

export default Square;
import L, { LatLngTuple, Map, Rectangle } from 'leaflet';

export type squareProps = {
  center: LatLngTuple;
  size: number;
}

export interface Props extends L.ControlOptions {
  position: L.ControlPosition;
  drawCircle?: boolean;
  oneBlock?: boolean;
}

export interface textProps extends L.ControlOptions {
  position: L.ControlPosition;
  lat: number;
  long: number;
}
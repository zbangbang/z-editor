import { createFTextClass } from './FText';
import { createFImageClass } from './FImage';
import { createFLineClass } from './FLine';
import { createFPolylineClass } from './FPolyline';
import { createFArrowClass, createFTriArrowClass } from './FArrow';
import { createFPointClass } from './FPoint';

export default function () {
  createFTextClass();
  createFImageClass();
  createFPointClass();
  createFLineClass();
  createFPolylineClass();
  createFArrowClass();
  createFTriArrowClass();
}
/*
 * @FilePath: shape.ts
 * @Author: @zhangl
 * @Date: 2024-04-26 18:54:45
 * @LastEditTime: 2024-06-06 11:11:36
 * @LastEditors: @zhangl
 * @Description:
 */
import { fabric } from 'fabric';
import { uuid } from '../utils/func';

export function createShape(ShapeClass, options) {
  const { points, canvas, ...rest } = options || {};
  let object;
  if (ShapeClass === fabric.Polygon) {
    object = new fabric.Polygon(points, {
      id: uuid(),
      ...rest,
    });
  } else {
    object = new ShapeClass({
      id: uuid(),
      ...rest,
    });
  }

  canvas.viewportCenterObject(object);
  canvas.add(object);
  canvas.setActiveObject(object);
  canvas.requestRenderAll();
  return object;
}
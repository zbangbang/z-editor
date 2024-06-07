/*
 * @FilePath: rect.ts
 * @Author: @zhangl
 * @Date: 2024-04-26 18:54:45
 * @LastEditTime: 2024-06-06 11:10:51
 * @LastEditors: @zhangl
 * @Description:
 */
import { fabric } from 'fabric';
import { uuid } from '../utils/func';

export function createRect(options) {
  const { canvas, ...rest } = options || {};
  const rect = new fabric.Rect({
    id: uuid(),
    width: 200,
    height: 200,
    ...rest,
  });

  canvas.viewportCenterObject(rect);
  canvas.add(rect);
  canvas.setActiveObject(rect);
  canvas.requestRenderAll();
  return rect;
}
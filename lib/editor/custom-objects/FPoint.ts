import { fabric } from 'fabric';

const extend = fabric.util.object.extend;

export const createFPointClass = () => {
  // @ts-ignore FPoint
  fabric.FPoint = fabric.util.createClass(fabric.Circle, {
    type: 'f-point',

    initialize(options: any) {
      options = options || {}
      this.callSuper('initialize', options)
    },

    toObject(propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), { x1: this.x1, y1: this.y1, x2: this.x2, y2: this.y2 });
    },
  });

  // @ts-ignore FPoint
  fabric.FPoint.fromObject = (object, callback) => {
    return fabric.Object._fromObject('FPoint', object, callback);
  };
}
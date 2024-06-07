import { fabric } from 'fabric';

const extend = fabric.util.object.extend;

export const createFPolylineClass = () => {
  // @ts-ignore FPolyline
  fabric.FPolyline = fabric.util.createClass(fabric.Polyline, {
    type: 'f-polyline',

    padding: 6,

    borderColor: '#00000000',

    setStrokeWidth(w) {
      this.set('strokeWidth', w);
    },

    setStrokeDashArray(dashArray) {
      this.set('strokeDashArray', dashArray);
    },

    setStrokeLineCap(isRound) {
      this.set('strokeLineCap', isRound ? 'round' : 'butt');
    },

    toObject(propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), { x1: this.x1, y1: this.y1, x2: this.x2, y2: this.y2 });
    },
  });

  // @ts-ignore FLine
  fabric.FPolyline.fromObject = (object, callback) => {
    function _callback(instance) {
      delete instance.points;
      callback && callback(instance);
    };
    const options = { ...object };
    fabric.Object._fromObject('FPolyline', options, _callback, 'points');
  };
}
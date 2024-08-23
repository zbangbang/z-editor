/*
 * @FilePath: config.ts
 * @Author: @zhangl
 * @Date: 2024-03-08 16:41:00
 * @LastEditTime: 2024-08-23 14:00:58
 * @LastEditors: @zhangl
 * @Description:
 */

import dayjs from "dayjs"
import testImg from '@/assets/images/mapProduct/test.png'
import testImg1 from '@/assets/images/mapProduct/test1.png'
import testImg2 from '@/assets/images/mapProduct/test2.png'

export enum ToolType {
  draw,
  point,
  line,
  circle,
  rect
}
/**
 * @Date: 2024-03-08 16:43:23
 * @Description: 绘制工具
 * @return {*}
 */
export const toolList = [
  {
    label: '绘制',
    type: ToolType.draw,
    img: new URL(`@/assets/images/mapProduct/draw.png`, import.meta.url).href,
    activeImg: new URL(`@/assets/images/mapProduct/drawActive.png`, import.meta.url).href
  },
  {
    label: '标点',
    type: ToolType.point,
    img: new URL(`@/assets/images/mapProduct/point.png`, import.meta.url).href,
    activeImg: new URL(`@/assets/images/mapProduct/pointActive.png`, import.meta.url).href
  },
  {
    label: '线段',
    type: ToolType.line,
    img: new URL(`@/assets/images/mapProduct/line.png`, import.meta.url).href,
    activeImg: new URL(`@/assets/images/mapProduct/lineActive.png`, import.meta.url).href
  },
  {
    label: '圆圈',
    type: ToolType.circle,
    img: new URL(`@/assets/images/mapProduct/circle.png`, import.meta.url).href,
    activeImg: new URL(`@/assets/images/mapProduct/circleActive.png`, import.meta.url).href
  },
  {
    label: '矩形',
    type: ToolType.rect,
    img: new URL(`@/assets/images/mapProduct/rect.png`, import.meta.url).href,
    activeImg: new URL(`@/assets/images/mapProduct/rectActive.png`, import.meta.url).href
  }
]

export const FontFamilyArray = ['方正楷体', 'SmileySans', 'SourceHanSans', 'AlibabaPuHuiTi', '霞鹜新晰黑']
export const FontSizeList = [{
  value: 12,
  label: '12px'
}, {
  value: 14,
  label: '14px'
}, {
  value: 16,
  label: '16px'
}, {
  value: 18,
  label: '18px'
}, {
  value: 20,
  label: '20px'
}, {
  value: 24,
  label: '24px'
}, {
  value: 36,
  label: '36px'
}, {
  value: 48,
  label: '48px'
}]


export interface ILegendData {
  value: number,
  color: [number, number, number, number?],
  label?: string
}

export const TempLegend: {
  unit: string
  list: ILegendData[]
} = {
  unit: 'dbz',
  list: [{
    value: 5,
    color: [0, 0, 0, 0]
  }, {
    value: 10,
    color: [1, 160, 246, 1]
  }, {
    value: 15,
    color: [7, 235, 236, 1]
  }, {
    value: 20,
    color: [109, 250, 61, 1]
  }, {
    value: 25,
    color: [0, 216, 6, 1]
  }, {
    value: 30,
    color: [1, 144, 0, 1]
  }, {
    value: 35,
    color: [255, 255, 0, 1]
  }, {
    value: 40,
    color: [231, 191, 0, 1]
  }, {
    value: 45,
    color: [255, 144, 0, 1]
  }, {
    value: 50,
    color: [255, 0, 0, 1]
  }, {
    value: 55,
    color: [214, 0, 1, 1]
  }, {
    value: 60,
    color: [192, 0, 0, 1]
  }, {
    value: 65,
    color: [255, 0, 239, 1]
  }, {
    value: 70,
    color: [150, 1, 180, 1]
  }]
}

export const imgList = [
  {
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    url: testImg
  },
  {
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    url: testImg1
  },
  {
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    url: testImg2
  },
  {
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    url: testImg
  },
  {
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    url: testImg1
  },
  {
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    url: testImg2
  },
  {
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    url: testImg
  },
  {
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    url: testImg1
  },
  {
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    url: testImg2
  },
  {
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    url: testImg
  },
  {
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    url: testImg1
  },
  {
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    url: testImg2
  }
]

export const jsonStr = {
  "version": "5.3.0",
  "objects": [
    {
      "type": "rect",
      "version": "5.3.0",
      "originX": "left",
      "originY": "top",
      "left": 0,
      "top": 0,
      "width": 667.7,
      "height": 591.8,
      "fill": "#fff",
      "stroke": null,
      "strokeWidth": 1,
      "strokeDashArray": null,
      "strokeLineCap": "butt",
      "strokeDashOffset": 0,
      "strokeLineJoin": "miter",
      "strokeUniform": true,
      "strokeMiterLimit": 4,
      "scaleX": 1,
      "scaleY": 1,
      "angle": 0,
      "flipX": false,
      "flipY": false,
      "opacity": 1,
      "shadow": null,
      "visible": true,
      "backgroundColor": "",
      "fillRule": "nonzero",
      "paintFirst": "stroke",
      "globalCompositeOperation": "source-over",
      "skewX": 0,
      "skewY": 0,
      "rx": 0,
      "ry": 0,
      "id": "fabritor-sketch",
      "fabritor_desc": "我的画板 by fabritor",
      "selectable": false,
      "hasControls": false
    },
    {
      "type": "f-image",
      "version": "5.3.0",
      "originX": "left",
      "originY": "top",
      "left": 30.85,
      "top": 27.4,
      "width": 607,
      "height": 538,
      "fill": "rgb(0,0,0)",
      "stroke": null,
      "strokeWidth": 0,
      "strokeDashArray": null,
      "strokeLineCap": "butt",
      "strokeDashOffset": 0,
      "strokeLineJoin": "miter",
      "strokeUniform": true,
      "strokeMiterLimit": 4,
      "scaleX": 1,
      "scaleY": 1,
      "angle": 0,
      "flipX": false,
      "flipY": false,
      "opacity": 1,
      "shadow": null,
      "visible": true,
      "backgroundColor": "",
      "fillRule": "nonzero",
      "paintFirst": "stroke",
      "globalCompositeOperation": "source-over",
      "skewX": 0,
      "skewY": 0,
      "id": "13cbbe8d-cf98-42a4-9dd8-a515e78728f9",
      "selectable": false,
      "hasControls": false,
      "imageBorder": {},
      "objects": [
        {
          "type": "image",
          "version": "5.3.0",
          "originX": "center",
          "originY": "center",
          "left": 0,
          "top": 0,
          "width": 606,
          "height": 537,
          "fill": "rgb(0,0,0)",
          "stroke": null,
          "strokeWidth": 0,
          "strokeDashArray": null,
          "strokeLineCap": "butt",
          "strokeDashOffset": 0,
          "strokeLineJoin": "miter",
          "strokeUniform": true,
          "strokeMiterLimit": 4,
          "scaleX": 1,
          "scaleY": 1,
          "angle": 0,
          "flipX": false,
          "flipY": false,
          "opacity": 1,
          "shadow": null,
          "visible": true,
          "backgroundColor": "",
          "fillRule": "nonzero",
          "paintFirst": "stroke",
          "globalCompositeOperation": "source-over",
          "skewX": 0,
          "skewY": 0,
          "clipPath": {
            "type": "rect",
            "version": "5.3.0",
            "originX": "center",
            "originY": "center",
            "left": 0,
            "top": 0,
            "width": 606,
            "height": 537,
            "fill": "rgb(0,0,0)",
            "stroke": null,
            "strokeWidth": 1,
            "strokeDashArray": null,
            "strokeLineCap": "butt",
            "strokeDashOffset": 0,
            "strokeLineJoin": "miter",
            "strokeUniform": true,
            "strokeMiterLimit": 4,
            "scaleX": 1,
            "scaleY": 1,
            "angle": 0,
            "flipX": false,
            "flipY": false,
            "opacity": 1,
            "shadow": null,
            "visible": true,
            "backgroundColor": "",
            "fillRule": "nonzero",
            "paintFirst": "stroke",
            "globalCompositeOperation": "source-over",
            "skewX": 0,
            "skewY": 0,
            "rx": 0,
            "ry": 0,
            "selectable": true,
            "hasControls": true,
            "inverted": false,
            "absolutePositioned": false
          },
          "cropX": 0,
          "cropY": 0,
          "selectable": true,
          "hasControls": true,
          "src": "http://localhost:5173/src/assets/images/mapProduct/test.png",
          "crossOrigin": "anonymous",
          "filters": []
        },
        {
          "type": "rect",
          "version": "5.3.0",
          "originX": "center",
          "originY": "center",
          "left": 0,
          "top": 0,
          "width": 606,
          "height": 537,
          "fill": "#00000000",
          "stroke": null,
          "strokeWidth": 1,
          "strokeDashArray": null,
          "strokeLineCap": "butt",
          "strokeDashOffset": 0,
          "strokeLineJoin": "miter",
          "strokeUniform": true,
          "strokeMiterLimit": 4,
          "scaleX": 1,
          "scaleY": 1,
          "angle": 0,
          "flipX": false,
          "flipY": false,
          "opacity": 1,
          "shadow": null,
          "visible": true,
          "backgroundColor": "",
          "fillRule": "nonzero",
          "paintFirst": "fill",
          "globalCompositeOperation": "source-over",
          "skewX": 0,
          "skewY": 0,
          "rx": 0,
          "ry": 0,
          "selectable": true,
          "hasControls": true
        }
      ]
    },
    {
      "type": "path",
      "version": "5.3.0",
      "originX": "left",
      "originY": "top",
      "left": 198.43,
      "top": 142.25,
      "width": 283.2,
      "height": 231.07,
      "fill": null,
      "stroke": "#fff",
      "strokeWidth": 1,
      "strokeDashArray": null,
      "strokeLineCap": "round",
      "strokeDashOffset": 0,
      "strokeLineJoin": "round",
      "strokeUniform": true,
      "strokeMiterLimit": 10,
      "scaleX": 1,
      "scaleY": 1,
      "angle": 0,
      "flipX": false,
      "flipY": false,
      "opacity": 1,
      "shadow": null,
      "visible": true,
      "backgroundColor": "",
      "fillRule": "nonzero",
      "paintFirst": "stroke",
      "globalCompositeOperation": "source-over",
      "skewX": 0,
      "skewY": 0,
      "selectable": true,
      "hasControls": true,
      "path": [
        [
          "M",
          254.14266666666666,
          142.7541666666666
        ],
        [
          "Q",
          254.14166666666665,
          142.7541666666666,
          253.62083333333328,
          142.7541666666666
        ],
        [
          "Q",
          253.0999999999999,
          142.7541666666666,
          252.5791666666666,
          142.7541666666666
        ],
        [
          "Q",
          252.05833333333328,
          142.7541666666666,
          250.49583333333328,
          143.7958333333333
        ],
        [
          "Q",
          248.93333333333328,
          144.83749999999998,
          247.8916666666666,
          145.3583333333333
        ],
        [
          "Q",
          246.8499999999999,
          145.8791666666666,
          243.7249999999999,
          149.00416666666663
        ],
        [
          "Q",
          240.5999999999999,
          152.12916666666666,
          239.55833333333328,
          153.17083333333332
        ],
        [
          "Q",
          238.51666666666665,
          154.21249999999998,
          235.39166666666665,
          157.33749999999998
        ],
        [
          "Q",
          232.26666666666665,
          160.46249999999998,
          231.22499999999997,
          161.50416666666663
        ],
        [
          "Q",
          230.18333333333328,
          162.5458333333333,
          229.1416666666666,
          164.62916666666663
        ],
        [
          "Q",
          228.0999999999999,
          166.71249999999998,
          227.05833333333328,
          170.35833333333332
        ],
        [
          "Q",
          226.01666666666665,
          174.00416666666666,
          225.49583333333328,
          176.08749999999998
        ],
        [
          "Q",
          224.9749999999999,
          178.1708333333333,
          224.9749999999999,
          181.81666666666663
        ],
        [
          "Q",
          224.9749999999999,
          185.46249999999998,
          225.49583333333328,
          187.02499999999998
        ],
        [
          "Q",
          226.01666666666665,
          188.58749999999998,
          226.53749999999997,
          190.67083333333332
        ],
        [
          "Q",
          227.05833333333328,
          192.75416666666666,
          229.1416666666666,
          195.87916666666666
        ],
        [
          "Q",
          231.2249999999999,
          199.00416666666666,
          234.3499999999999,
          201.08749999999998
        ],
        [
          "Q",
          237.4749999999999,
          203.1708333333333,
          239.55833333333328,
          204.7333333333333
        ],
        [
          "Q",
          241.64166666666665,
          206.2958333333333,
          245.80833333333328,
          207.8583333333333
        ],
        [
          "Q",
          249.9749999999999,
          209.4208333333333,
          253.0999999999999,
          209.94166666666663
        ],
        [
          "Q",
          256.2249999999999,
          210.46249999999998,
          260.3916666666666,
          210.46249999999998
        ],
        [
          "Q",
          264.5583333333333,
          210.46249999999998,
          269.2458333333333,
          210.46249999999998
        ],
        [
          "Q",
          273.9333333333333,
          210.46249999999998,
          279.1416666666666,
          209.42083333333332
        ],
        [
          "Q",
          284.3499999999999,
          208.37916666666666,
          287.9958333333333,
          206.81666666666666
        ],
        [
          "Q",
          291.64166666666665,
          205.25416666666666,
          295.8083333333333,
          203.17083333333332
        ],
        [
          "Q",
          299.9749999999999,
          201.08749999999998,
          303.6208333333333,
          199.00416666666663
        ],
        [
          "Q",
          307.26666666666665,
          196.9208333333333,
          310.91249999999997,
          193.7958333333333
        ],
        [
          "Q",
          314.5583333333333,
          190.6708333333333,
          317.6833333333333,
          188.06666666666663
        ],
        [
          "Q",
          320.8083333333333,
          185.46249999999998,
          322.8916666666666,
          182.33749999999998
        ],
        [
          "Q",
          324.9749999999999,
          179.21249999999998,
          326.0166666666666,
          177.64999999999998
        ],
        [
          "Q",
          327.0583333333333,
          176.08749999999998,
          327.5791666666666,
          172.96249999999998
        ],
        [
          "Q",
          328.0999999999999,
          169.83749999999998,
          328.0999999999999,
          167.75416666666663
        ],
        [
          "Q",
          328.0999999999999,
          165.6708333333333,
          327.5791666666666,
          162.02499999999998
        ],
        [
          "Q",
          327.0583333333333,
          158.37916666666666,
          326.0166666666666,
          156.81666666666666
        ],
        [
          "Q",
          324.9749999999999,
          155.25416666666666,
          323.4124999999999,
          154.21249999999998
        ],
        [
          "Q",
          321.8499999999999,
          153.1708333333333,
          319.7666666666666,
          152.12916666666663
        ],
        [
          "Q",
          317.6833333333333,
          151.08749999999998,
          315.0791666666666,
          150.56666666666663
        ],
        [
          "Q",
          312.4749999999999,
          150.0458333333333,
          309.3499999999999,
          149.52499999999998
        ],
        [
          "Q",
          306.2249999999999,
          149.00416666666666,
          302.0583333333333,
          149.00416666666666
        ],
        [
          "Q",
          297.89166666666665,
          149.00416666666666,
          292.6833333333333,
          149.52499999999998
        ],
        [
          "Q",
          287.4749999999999,
          150.0458333333333,
          278.0999999999999,
          152.64999999999998
        ],
        [
          "Q",
          268.7249999999999,
          155.25416666666666,
          261.9541666666666,
          157.85833333333332
        ],
        [
          "Q",
          255.18333333333328,
          160.46249999999998,
          249.4541666666666,
          163.58749999999998
        ],
        [
          "Q",
          243.7249999999999,
          166.71249999999998,
          237.99583333333328,
          170.35833333333332
        ],
        [
          "Q",
          232.26666666666665,
          174.00416666666666,
          225.49583333333328,
          180.77499999999998
        ],
        [
          "Q",
          218.7249999999999,
          187.5458333333333,
          214.55833333333328,
          191.71249999999998
        ],
        [
          "Q",
          210.39166666666665,
          195.87916666666666,
          207.78749999999997,
          200.56666666666666
        ],
        [
          "Q",
          205.18333333333328,
          205.25416666666666,
          202.5791666666666,
          212.54583333333332
        ],
        [
          "Q",
          199.9749999999999,
          219.83749999999998,
          199.4541666666666,
          224.52499999999998
        ],
        [
          "Q",
          198.93333333333328,
          229.21249999999998,
          198.93333333333328,
          233.37916666666663
        ],
        [
          "Q",
          198.93333333333328,
          237.5458333333333,
          200.49583333333328,
          243.7958333333333
        ],
        [
          "Q",
          202.05833333333328,
          250.0458333333333,
          204.66249999999997,
          253.1708333333333
        ],
        [
          "Q",
          207.26666666666665,
          256.2958333333333,
          211.95416666666665,
          260.4625
        ],
        [
          "Q",
          216.64166666666665,
          264.6291666666666,
          220.80833333333328,
          266.7125
        ],
        [
          "Q",
          224.9749999999999,
          268.7958333333333,
          230.18333333333328,
          270.8791666666666
        ],
        [
          "Q",
          235.39166666666665,
          272.9625,
          241.64166666666665,
          273.4833333333333
        ],
        [
          "Q",
          247.89166666666665,
          274.0041666666666,
          254.66249999999997,
          274.525
        ],
        [
          "Q",
          261.4333333333333,
          275.0458333333333,
          284.8708333333333,
          271.9208333333333
        ],
        [
          "Q",
          308.3083333333333,
          268.7958333333333,
          316.6416666666666,
          266.7125
        ],
        [
          "Q",
          324.9749999999999,
          264.6291666666666,
          332.2666666666666,
          261.5041666666666
        ],
        [
          "Q",
          339.5583333333333,
          258.3791666666666,
          346.3291666666666,
          254.7333333333333
        ],
        [
          "Q",
          353.0999999999999,
          251.08749999999998,
          358.8291666666666,
          247.44166666666663
        ],
        [
          "Q",
          364.5583333333333,
          243.7958333333333,
          369.2458333333333,
          237.5458333333333
        ],
        [
          "Q",
          373.9333333333333,
          231.2958333333333,
          374.9749999999999,
          228.1708333333333
        ],
        [
          "Q",
          376.01666666666654,
          225.0458333333333,
          376.01666666666654,
          223.4833333333333
        ],
        [
          "Q",
          376.01666666666654,
          221.9208333333333,
          374.45416666666654,
          219.83749999999998
        ],
        [
          "Q",
          372.89166666666654,
          217.75416666666666,
          370.2874999999999,
          215.67083333333332
        ],
        [
          "Q",
          367.6833333333333,
          213.58749999999998,
          365.5999999999999,
          212.54583333333332
        ],
        [
          "Q",
          363.51666666666654,
          211.50416666666666,
          358.3083333333332,
          209.94166666666666
        ],
        [
          "Q",
          353.0999999999999,
          208.37916666666666,
          347.8916666666666,
          207.85833333333332
        ],
        [
          "Q",
          342.6833333333333,
          207.33749999999998,
          334.3499999999999,
          207.33749999999998
        ],
        [
          "Q",
          326.01666666666654,
          207.33749999999998,
          317.6833333333332,
          207.85833333333332
        ],
        [
          "Q",
          309.3499999999999,
          208.37916666666666,
          299.9749999999999,
          209.94166666666666
        ],
        [
          "Q",
          290.5999999999999,
          211.50416666666666,
          277.5791666666666,
          215.14999999999998
        ],
        [
          "Q",
          264.5583333333333,
          218.7958333333333,
          258.3083333333333,
          221.9208333333333
        ],
        [
          "Q",
          252.05833333333328,
          225.0458333333333,
          245.80833333333328,
          229.7333333333333
        ],
        [
          "Q",
          239.55833333333328,
          234.4208333333333,
          235.91249999999997,
          242.75416666666663
        ],
        [
          "Q",
          232.26666666666665,
          251.08749999999998,
          233.30833333333328,
          255.77499999999998
        ],
        [
          "Q",
          234.3499999999999,
          260.4625,
          236.9541666666666,
          264.6291666666666
        ],
        [
          "Q",
          239.55833333333328,
          268.7958333333333,
          243.72499999999997,
          272.4416666666666
        ],
        [
          "Q",
          247.89166666666665,
          276.0875,
          252.05833333333328,
          278.6916666666666
        ],
        [
          "Q",
          256.2249999999999,
          281.2958333333333,
          262.9958333333333,
          284.4208333333333
        ],
        [
          "Q",
          269.76666666666665,
          287.5458333333333,
          281.22499999999997,
          289.6291666666666
        ],
        [
          "Q",
          292.6833333333333,
          291.7125,
          297.3708333333333,
          291.7125
        ],
        [
          "Q",
          302.0583333333333,
          291.7125,
          307.2666666666666,
          290.6708333333333
        ],
        [
          "Q",
          312.4749999999999,
          289.6291666666666,
          316.6416666666666,
          288.0666666666666
        ],
        [
          "Q",
          320.8083333333333,
          286.5041666666666,
          324.4541666666666,
          284.4208333333333
        ],
        [
          "Q",
          328.0999999999999,
          282.3375,
          329.6624999999999,
          278.6916666666666
        ],
        [
          "Q",
          331.2249999999999,
          275.0458333333333,
          332.2666666666666,
          272.9625
        ],
        [
          "Q",
          333.3083333333333,
          270.8791666666666,
          333.3083333333333,
          268.275
        ],
        [
          "Q",
          333.3083333333333,
          265.6708333333333,
          332.7874999999999,
          263.0666666666666
        ],
        [
          "Q",
          332.26666666666654,
          260.4625,
          331.7458333333332,
          259.4208333333333
        ],
        [
          "Q",
          331.2249999999999,
          258.3791666666666,
          329.1416666666666,
          256.8166666666666
        ],
        [
          "Q",
          327.0583333333333,
          255.2541666666666,
          326.0166666666666,
          254.7333333333333
        ],
        [
          "Q",
          324.9749999999999,
          254.21249999999998,
          321.3291666666666,
          253.1708333333333
        ],
        [
          "Q",
          317.6833333333333,
          252.1291666666666,
          314.5583333333333,
          252.1291666666666
        ],
        [
          "Q",
          311.4333333333333,
          252.1291666666666,
          309.8708333333333,
          252.64999999999995
        ],
        [
          "Q",
          308.3083333333333,
          253.1708333333333,
          306.22499999999997,
          255.77499999999995
        ],
        [
          "Q",
          304.14166666666665,
          258.3791666666666,
          303.6208333333333,
          260.9833333333333
        ],
        [
          "Q",
          303.0999999999999,
          263.5875,
          303.6208333333333,
          266.1916666666666
        ],
        [
          "Q",
          304.14166666666665,
          268.7958333333333,
          305.70416666666665,
          271.9208333333333
        ],
        [
          "Q",
          307.26666666666665,
          275.0458333333333,
          309.8708333333333,
          279.2125
        ],
        [
          "Q",
          312.4749999999999,
          283.3791666666666,
          315.5999999999999,
          286.5041666666666
        ],
        [
          "Q",
          318.7249999999999,
          289.6291666666666,
          334.3499999999999,
          300.5666666666666
        ],
        [
          "Q",
          349.9749999999999,
          311.5041666666666,
          360.3916666666666,
          314.1083333333333
        ],
        [
          "Q",
          370.8083333333333,
          316.7125,
          377.5791666666666,
          317.2333333333333
        ],
        [
          "Q",
          384.3499999999999,
          317.7541666666666,
          390.5999999999999,
          316.1916666666666
        ],
        [
          "Q",
          396.8499999999999,
          314.6291666666666,
          403.0999999999999,
          309.9416666666666
        ],
        [
          "Q",
          409.3499999999999,
          305.2541666666666,
          411.9541666666666,
          296.9208333333333
        ],
        [
          "Q",
          414.5583333333333,
          288.5875,
          414.0374999999999,
          283.9
        ],
        [
          "Q",
          413.51666666666654,
          279.2125,
          412.4749999999999,
          276.0875
        ],
        [
          "Q",
          411.4333333333333,
          272.9625,
          408.3083333333333,
          268.275
        ],
        [
          "Q",
          405.1833333333333,
          263.5875,
          401.0166666666666,
          259.9416666666666
        ],
        [
          "Q",
          396.8499999999999,
          256.2958333333333,
          393.2041666666666,
          254.7333333333333
        ],
        [
          "Q",
          389.5583333333333,
          253.1708333333333,
          383.3083333333333,
          250.56666666666663
        ],
        [
          "Q",
          377.0583333333333,
          247.96249999999998,
          369.7666666666666,
          246.9208333333333
        ],
        [
          "Q",
          362.4749999999999,
          245.8791666666666,
          357.2666666666666,
          245.8791666666666
        ],
        [
          "Q",
          352.0583333333333,
          245.8791666666666,
          344.7666666666666,
          247.4416666666666
        ],
        [
          "Q",
          337.4749999999999,
          249.0041666666666,
          332.2666666666666,
          251.6083333333333
        ],
        [
          "Q",
          327.0583333333333,
          254.21249999999998,
          324.97499999999997,
          257.3375
        ],
        [
          "Q",
          322.89166666666665,
          260.4625,
          321.32916666666665,
          265.15
        ],
        [
          "Q",
          319.76666666666665,
          269.8375,
          319.76666666666665,
          273.4833333333333
        ],
        [
          "Q",
          319.76666666666665,
          277.1291666666666,
          321.84999999999997,
          283.9
        ],
        [
          "Q",
          323.9333333333333,
          290.6708333333333,
          327.5791666666666,
          296.4
        ],
        [
          "Q",
          331.2249999999999,
          302.1291666666666,
          333.8291666666666,
          306.2958333333333
        ],
        [
          "Q",
          336.4333333333333,
          310.4625,
          343.2041666666666,
          316.7125
        ],
        [
          "Q",
          349.9749999999999,
          322.9625,
          359.3499999999999,
          328.1708333333333
        ],
        [
          "Q",
          368.7249999999999,
          333.3791666666666,
          377.0583333333332,
          336.5041666666666
        ],
        [
          "Q",
          385.39166666666654,
          339.6291666666666,
          395.2874999999999,
          341.1916666666666
        ],
        [
          "Q",
          405.1833333333333,
          342.7541666666666,
          414.0374999999999,
          342.7541666666666
        ],
        [
          "Q",
          422.89166666666654,
          342.7541666666666,
          430.1833333333332,
          341.7125
        ],
        [
          "Q",
          437.4749999999999,
          340.6708333333333,
          445.8083333333332,
          337.025
        ],
        [
          "Q",
          454.14166666666654,
          333.3791666666666,
          458.82916666666654,
          330.775
        ],
        [
          "Q",
          463.51666666666654,
          328.1708333333333,
          466.64166666666654,
          325.5666666666666
        ],
        [
          "Q",
          469.76666666666654,
          322.9625,
          470.8083333333332,
          321.4
        ],
        [
          "Q",
          471.8499999999999,
          319.8375,
          469.7666666666666,
          319.3166666666666
        ],
        [
          "Q",
          467.6833333333333,
          318.7958333333333,
          464.0374999999999,
          318.7958333333333
        ],
        [
          "Q",
          460.39166666666654,
          318.7958333333333,
          455.70416666666654,
          319.8375
        ],
        [
          "Q",
          451.01666666666654,
          320.8791666666666,
          445.8083333333332,
          323.4833333333333
        ],
        [
          "Q",
          440.5999999999999,
          326.0875,
          436.4333333333332,
          329.7333333333333
        ],
        [
          "Q",
          432.26666666666654,
          333.3791666666666,
          430.1833333333332,
          337.5458333333333
        ],
        [
          "Q",
          428.0999999999999,
          341.7125,
          426.5374999999999,
          346.9208333333333
        ],
        [
          "Q",
          424.9749999999999,
          352.1291666666666,
          425.4958333333332,
          356.29583333333323
        ],
        [
          "Q",
          426.01666666666654,
          360.4624999999999,
          427.0583333333332,
          363.0666666666666
        ],
        [
          "Q",
          428.0999999999999,
          365.6708333333333,
          430.1833333333332,
          368.7958333333333
        ],
        [
          "Q",
          432.26666666666654,
          371.9208333333333,
          435.39166666666654,
          372.9625
        ],
        [
          "Q",
          438.51666666666654,
          374.0041666666666,
          446.8499999999999,
          373.48333333333323
        ],
        [
          "Q",
          455.1833333333333,
          372.9624999999999,
          457.7874999999999,
          370.8791666666666
        ],
        [
          "Q",
          460.39166666666654,
          368.7958333333333,
          465.5999999999999,
          363.0666666666666
        ],
        [
          "Q",
          470.8083333333333,
          357.3375,
          473.9333333333333,
          353.1708333333333
        ],
        [
          "Q",
          477.0583333333333,
          349.0041666666666,
          479.1416666666666,
          343.7958333333333
        ],
        [
          "Q",
          481.2249999999999,
          338.5875,
          481.7458333333332,
          334.4208333333333
        ],
        [
          "Q",
          482.26666666666654,
          330.2541666666666,
          481.7458333333332,
          328.1708333333333
        ],
        [
          "Q",
          481.2249999999999,
          326.0875,
          478.6208333333332,
          324.0041666666666
        ],
        [
          "Q",
          476.01666666666654,
          321.9208333333333,
          472.89166666666654,
          319.8375
        ],
        [
          "Q",
          469.76666666666654,
          317.7541666666666,
          447.89166666666654,
          313.0666666666666
        ],
        [
          "Q",
          426.01666666666654,
          308.3791666666666,
          416.64166666666654,
          307.8583333333333
        ],
        [
          "Q",
          407.26666666666654,
          307.3375,
          396.8499999999999,
          307.8583333333333
        ],
        [
          "Q",
          386.4333333333333,
          308.3791666666666,
          377.0583333333333,
          310.4625
        ],
        [
          "Q",
          367.6833333333333,
          312.5458333333333,
          360.3916666666666,
          315.6708333333333
        ],
        [
          "Q",
          353.0999999999999,
          318.7958333333333,
          348.4124999999999,
          321.9208333333333
        ],
        [
          "Q",
          343.7249999999999,
          325.0458333333333,
          341.6416666666666,
          329.7333333333333
        ],
        [
          "Q",
          339.5583333333333,
          334.4208333333333,
          339.0374999999999,
          338.0666666666666
        ],
        [
          "Q",
          338.51666666666654,
          341.7125,
          341.1208333333332,
          346.4
        ],
        [
          "Q",
          343.7249999999999,
          351.0875,
          346.8499999999999,
          353.6916666666666
        ],
        [
          "Q",
          349.9749999999999,
          356.2958333333333,
          355.7041666666666,
          359.9416666666666
        ],
        [
          "Q",
          361.4333333333333,
          363.5874999999999,
          366.6416666666666,
          366.1916666666666
        ],
        [
          "Q",
          371.8499999999999,
          368.7958333333333,
          378.0999999999999,
          369.8375
        ],
        [
          "Q",
          384.3499999999999,
          370.8791666666666,
          392.1624999999999,
          372.4416666666666
        ],
        [
          "Q",
          399.9749999999999,
          374.0041666666666,
          409.3499999999999,
          373.48333333333323
        ],
        [
          "Q",
          418.7249999999999,
          372.9624999999999,
          424.4541666666666,
          371.92083333333323
        ],
        [
          "Q",
          430.1833333333333,
          370.8791666666666,
          433.8291666666666,
          367.7541666666666
        ],
        [
          "Q",
          437.4749999999999,
          364.6291666666666,
          437.4749999999999,
          364.10833333333323
        ],
        [
          "Q",
          437.4749999999999,
          363.5874999999999,
          436.4333333333332,
          363.0666666666666
        ],
        [
          "Q",
          435.39166666666654,
          362.5458333333333,
          433.3083333333332,
          360.4625
        ],
        [
          "Q",
          431.2249999999999,
          358.3791666666666,
          428.0999999999999,
          355.2541666666666
        ],
        [
          "Q",
          424.9749999999999,
          352.1291666666666,
          418.2041666666666,
          346.9208333333333
        ],
        [
          "Q",
          411.4333333333333,
          341.7125,
          404.6624999999999,
          336.5041666666666
        ],
        [
          "Q",
          397.89166666666654,
          331.2958333333333,
          389.5583333333332,
          326.0875
        ],
        [
          "Q",
          381.2249999999999,
          320.8791666666666,
          373.9333333333332,
          315.6708333333333
        ],
        [
          "Q",
          366.64166666666654,
          310.4625,
          361.95416666666654,
          306.8166666666666
        ],
        [
          "Q",
          357.26666666666654,
          303.1708333333333,
          355.70416666666654,
          301.6083333333333
        ],
        [
          "Q",
          354.14166666666654,
          300.0458333333333,
          354.14166666666654,
          301.0875
        ],
        [
          "L",
          354.14166666666654,
          302.1301666666666
        ]
      ]
    }
  ],
  "clipPath": {
    "type": "rect",
    "version": "5.3.0",
    "originX": "left",
    "originY": "top",
    "left": 0,
    "top": 0,
    "width": 667.7,
    "height": 591.8,
    "fill": "#fff",
    "stroke": null,
    "strokeWidth": 1,
    "strokeDashArray": null,
    "strokeLineCap": "butt",
    "strokeDashOffset": 0,
    "strokeLineJoin": "miter",
    "strokeUniform": true,
    "strokeMiterLimit": 4,
    "scaleX": 1,
    "scaleY": 1,
    "angle": 0,
    "flipX": false,
    "flipY": false,
    "opacity": 1,
    "shadow": null,
    "visible": true,
    "backgroundColor": "",
    "fillRule": "nonzero",
    "paintFirst": "stroke",
    "globalCompositeOperation": "source-over",
    "skewX": 0,
    "skewY": 0,
    "rx": 0,
    "ry": 0,
    "selectable": true,
    "hasControls": true
  },
  "background": "#ddd",
  "fabritor_schema_version": 3
}
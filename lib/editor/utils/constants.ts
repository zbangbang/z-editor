export const APP_NAME = 'fabritor';
export const APP_VERSION = '3.0.0';
export const SCHEMA_VERSION = 3;
export const SCHEMA_VERSION_KEY = 'fabritor_schema_version';
export const LOG_PREFIX = `${APP_NAME}_log：`;

export const OBJECT_DEFAULT_CONFIG = {
  // controls
  borderColor: '#FF2222',
  borderScaleFactor: 2,
  cornerStrokeColor: '#2222',
  cornerColor: '#FF2222',
  cornerSize: 12,
  cornerStyle: 'circle',
  transparentCorners: false,
  padding: 0,
  centeredScaling: false,
  strokeUniform: true,
  paintFirst: 'stroke'
}

export const TEXTBOX_DEFAULT_CONFIG = {
  // styles
  fill: '#000000',
  fontWeight: 'normal',
  fontSize: 50,
  lineHeight: 1.30,
  textAlign: 'center',
  fontFamily: 'AlibabaPuHuiTi',
  // size
  width: 500,
  // 中文处理
  splitByGrapheme: true
}

export const FONT_PRESET_FAMILY_LIST = [
  {
    label: '得意黑',
    value: 'SmileySans'
  },
  {
    label: '霞鹜新晰黑',
    value: '霞鹜新晰黑'
  },
  {
    label: '霞鹜文楷',
    value: '霞鹜文楷'
  },
  {
    label: '小赖字体',
    value: '小赖字体'
  },
  {
    label: '悠哉字体',
    value: '悠哉字体'
  },
  {
    label: '阿里巴巴普惠体',
    value: 'AlibabaPuHuiTi'
  },
  {
    label: '霞鹜尚智黑',
    value: '霞鹜尚智黑'
  },
  {
    label: '思源黑体',
    value: 'SourceHanSans'
  },
  {
    label: '思源宋体',
    value: 'SourceHanSerif'
  },
  {
    label: '方正楷体',
    value: '方正楷体'
  },
  {
    label: '包图小白体',
    value: '包图小白体'
  },
  {
    label: '手写杂字体',
    value: '手写杂字体'
  },
  {
    label: '胡晓波男神体',
    value: '胡晓波男神体'
  },
  {
    label: '胡晓波骚包体',
    value: '胡晓波骚包体'
  },
  {
    label: '站酷快乐体',
    value: '站酷快乐体'
  },
  {
    label: '站酷文艺体',
    value: '站酷文艺体'
  },
  {
    label: '站酷小薇LOGO体',
    value: '站酷小薇LOGO体'
  }
]

export const SKETCH_ID = 'fabritor-sketch';

export const FABRITOR_CUSTOM_PROPS = [
  'id',
  'fabritor_desc',
  'selectable',
  'hasControls',
  'sub_type',
  'imageSource',
  'imageBorder',
  'oldArrowInfo'
];
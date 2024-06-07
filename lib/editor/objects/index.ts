import { createGroup } from './group'
import { loadImage, createImage, createFImage, createClipRect } from './image'
import { LatlonLine } from './latlon'
import { LegendBox, ILegendData, TempLegend } from './legendBox'
import { drawLine, drawArrowLine, drawTriArrowLine } from './line'
import { createPathFromSvg } from './path'
import { GPoint } from './point'
import { GPolyline } from './polyline'
import { createRect } from './rect'
import { ScaleRule } from './scalerule'
import { createShape } from './shape'
import { createTextbox, getTextboxWidth, getPathOffset, drawTextPath, removeTextPath } from './textbox'


export type { ILegendData }
export default { createGroup, loadImage, createImage, createFImage, createClipRect, LatlonLine, LegendBox, TempLegend, drawLine, drawArrowLine, drawTriArrowLine, createPathFromSvg, GPoint, GPolyline, createRect, ScaleRule, createShape, createTextbox, getTextboxWidth, getPathOffset, drawTextPath, removeTextPath }

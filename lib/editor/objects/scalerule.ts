/*
 * @FilePath: scalerule.ts
 * @Author: @zhangl
 * @Date: 2024-05-14 10:10:57
 * @LastEditTime: 2024-05-16 15:47:32
 * @LastEditors: @zhangl
 * @Description:
 */
import { fabric } from 'fabric';
import { getTextWidth, uuid } from '../utils/func';
import type Editor from '../index'

interface ICalcOptions {
  outWidth: number
  outHeight: number
  innerWidth: number
  innerHeight: number
  offsetX: number
  offsetY: number
}

export class ScaleRule {
  private editor: Editor
  private canvas: fabric.Canvas
  private group?: fabric.Group
  private activeImage: any
  private options: any = {
    padding: 15,
    fontSize: 12,
    short: 10,
    long: 100
  }

  constructor(editor: Editor, canvas: fabric.Canvas, activeImage: any, options: any) {
    this.editor = editor
    this.canvas = canvas
    this.group = new fabric.Group()
    this.activeImage = activeImage
    this.options = Object.assign(this.options, options)

    this.init()
  }

  private init() {
    if (!this.group)
      this.group = new fabric.Group()

    this.editor.fhistory.pause = true

    let calcOptions: ICalcOptions = {
      outWidth: this.editor.sketch.width!,
      outHeight: this.editor.sketch.height!,
      innerWidth: this.activeImage.width! * this.activeImage.scaleX,
      innerHeight: this.activeImage.height! * this.activeImage.scaleY,
      offsetX: (this.editor.sketch.width! - this.activeImage.width! * this.activeImage.scaleX) / 2,
      offsetY: (this.editor.sketch.height! - this.activeImage.height! * this.activeImage.scaleY) / 2
    }
    this.createLine(calcOptions)
    this.createText(calcOptions)

    this.editor.fhistory.pause = false
    this.editor.canvas.add(this.group)
  }

  public update() {
    this.editor.canvas.remove(this.group!)
    this.group!.destroy()
    this.group = undefined
    this.init()
  }

  public remove() {
    this.editor.canvas.remove(this.group!)
    this.group!.destroy()
  }

  private createLine(calcOptions: ICalcOptions) {
    const { offsetX, outHeight, offsetY } = calcOptions
    const { padding, short, long } = this.options

    const left = offsetX + padding + 40
    const top = outHeight - (offsetY + padding + short)

    const lShortLine = new fabric.FLine([left, top, left, top + short], {
      strokeWidth: 2,
      stroke: '#000000',
      strokeLineJoin: 'round',
      strokeLineCap: 'round',
      borderColor: '#00000000',
      id: uuid()
    });
    const rShortLine = new fabric.FLine([left + long, top, left + long, top + short], {
      strokeWidth: 2,
      stroke: '#000000',
      strokeLineJoin: 'round',
      strokeLineCap: 'round',
      borderColor: '#00000000',
      id: uuid()
    });
    const longLine = new fabric.FLine([left, top + short, left + long, top + short], {
      strokeWidth: 2,
      stroke: '#000000',
      strokeLineJoin: 'round',
      strokeLineCap: 'round',
      borderColor: '#00000000',
      id: uuid()
    });
    this.group!.addWithUpdate(lShortLine)
    this.group!.addWithUpdate(rShortLine)
    this.group!.addWithUpdate(longLine)

  }

  createText(calcOptions: ICalcOptions) {
    // 1m = 0.00001141
    const { offsetX, outHeight, offsetY, innerWidth } = calcOptions
    const { padding, short, long, rect, fontSize } = this.options

    let left = offsetX + padding + 40
    const top = outHeight - (offsetY + padding + short * 1.5)

    let { minLon, maxLon } = rect
    const onePixelLon = (maxLon - minLon) / innerWidth

    let num = onePixelLon / 0.00001141 * long
    let numStr = num > 1000 ? `${Number((num / 1000).toFixed(3))}km` : `${num}m`

    let str = `1:${numStr}`
    let width = getTextWidth(str, `${fontSize}px`)
    left = left + (long - width) / 2

    const line = new fabric.Text(`${str}`, { left, top, fontSize, fontWeight: 'normal' })
    this.group!.addWithUpdate(line)
  }
}
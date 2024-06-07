/*
 * @FilePath: latlon.ts
 * @Author: @zhangl
 * @Date: 2024-05-14 10:10:57
 * @LastEditTime: 2024-05-16 13:39:53
 * @LastEditors: @zhangl
 * @Description:
 */
import { fabric } from 'fabric';
import { uuid } from '../utils/func';
import type Editor from '../index'

export class LatlonLine {
  private editor: Editor
  private canvas: fabric.Canvas
  private group?: fabric.Group
  private activeImage: any
  private options: any = {
    padding: 10,
    fontSize: 12
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
    this.createLine()
    this.createText()
    this.group.set({
      selectable: false,
      lockMovementX: true,
      lockMovementY: true,
      hasControls: false
    })

    this.editor.fhistory.pause = false
    this.editor.canvas.add(this.group)
    this.editor.canvas.moveTo(this.group, 2)
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

  private createLine() {
    let outWidth = this.editor.sketch.width!
    let outHeight = this.editor.sketch.height!
    let innerWidth = this.activeImage.width! * this.activeImage.scaleX
    let innerHeight = this.activeImage.height! * this.activeImage.scaleY
    const offsetX = (outWidth - innerWidth) / 2
    const offsetY = (outHeight - innerHeight) / 2
    const { rect, padding } = this.options
    const delta = (innerWidth - padding) / 10

    // 横
    let top = padding + offsetY

    for (let index = 0; top < innerHeight - delta; index++) {
      top = index * delta + padding + offsetY
      // @ts-ignore
      const line = new fabric.FLine([offsetX, top, innerWidth + offsetX, top], {
        strokeWidth: 1,
        stroke: '#000000',
        strokeLineJoin: 'round',
        strokeLineCap: 'round',
        strokeDashArray: [3, 3],
        borderColor: '#00000000',
        id: uuid()
      });
      this.group!.addWithUpdate(line)
    }

    // 竖
    let left = padding + offsetX
    let xlength = (innerWidth - padding) / delta
    for (let index = 0; index < xlength; index++) {
      left = index * delta + padding + offsetX
      // @ts-ignore
      const line = new fabric.FLine([left, offsetY, left, innerHeight + offsetY], {
        strokeWidth: 1,
        stroke: '#000000',
        strokeLineJoin: 'round',
        strokeLineCap: 'round',
        strokeDashArray: [3, 3],
        borderColor: '#00000000',
        id: uuid()
      });
      this.group!.addWithUpdate(line)
    }
  }

  createText() {
    let outWidth = this.editor.sketch.width!
    let outHeight = this.editor.sketch.height!
    let innerWidth = this.activeImage.width! * this.activeImage.scaleX
    let innerHeight = this.activeImage.height! * this.activeImage.scaleY
    const offsetX = (outWidth - innerWidth) / 2
    const offsetY = (outHeight - innerHeight) / 2
    const { rect, padding, fontSize } = this.options
    const delta = (innerWidth - padding) / 10

    let { minLat, maxLat, minLon, maxLon } = rect
    const onePixelLon = (maxLon - minLon) / innerWidth
    minLon = minLon + onePixelLon * padding
    const deltaLon = (maxLon - minLon) / 10

    // 横
    let top = padding + offsetY
    let topLon = minLon
    let offsetLeft = offsetX > 30 ? offsetX - 28 : offsetX < 0 ? 0 : offsetX

    for (let index = 0; top < innerHeight - delta; index++) {
      top = index * delta + padding + offsetY - fontSize / 2
      topLon = Number((index * deltaLon + minLon).toFixed(3))
      const text = new fabric.Text(`${topLon}`, { left: offsetLeft, top, fontSize, fontWeight: 'normal' })
      this.group!.addWithUpdate(text)
    }

    const onePixelLat = (maxLat - minLat) / innerHeight
    minLat = minLat + onePixelLat * padding
    const deltaLat = (maxLat - minLat) / 10
    // 竖
    let left = padding + offsetX
    let leftLat = minLat
    let offsetTop = offsetY > 20 ? offsetY - 18 : offsetY < 0 ? 0 : offsetY
    let xlength = (innerWidth - padding) / delta
    for (let index = 0; index < xlength; index++) {
      left = index * delta + padding + offsetX - fontSize / 2
      leftLat = Number((index * deltaLat + minLat).toFixed(3))
      const text = new fabric.Text(`${leftLat}`, { left, top: offsetTop, fontSize, fontWeight: 'normal' })
      this.group!.addWithUpdate(text)
    }
  }
}
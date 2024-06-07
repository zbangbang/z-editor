/*
 * @FilePath: point.ts
 * @Author: @zhangl
 * @Date: 2024-05-13 20:03:06
 * @LastEditTime: 2024-06-06 11:10:33
 * @LastEditors: @zhangl
 * @Description:
 */
import { fabric } from 'fabric';
import { uuid } from '../utils/func';
import type Editor from '../index'

export class GPoint {
  private editor: Editor
  private canvas: fabric.Canvas
  private options: any = {}


  constructor(editor: Editor, canvas: fabric.Canvas, options: any) {
    this.editor = editor
    this.canvas = canvas

    this.options = Object.assign(this.options, options)

    this.init()
  }

  setOptions = (options: any) => {
    this.options = Object.assign(this.options, options)
  }

  private handleMouseDown = (e: any) => {
    if (!this.editor.sketch.containsPoint(e.pointer)) return
    const { radius } = this.options
    const top = e.absolutePointer.y - radius
    const left = e.absolutePointer.x - radius
    // @ts-ignore
    const point = new fabric.FPoint({
      top,
      left,
      fill: 'rgba(255,0,0,1)',
      id: uuid(),
      ...this.options
    })
    this.canvas.add(point)
    // this.canvas.setActiveObject(point)
  }

  remove() {
    this.canvas.off('mouse:down', this.handleMouseDown)
  }

  init() {
    this.canvas.on('mouse:down', this.handleMouseDown)
  }
}
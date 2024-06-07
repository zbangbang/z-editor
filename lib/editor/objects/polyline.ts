/*
 * @FilePath: polyline.ts
 * @Author: @zhangl
 * @Date: 2024-05-13 20:51:46
 * @LastEditTime: 2024-05-14 16:54:06
 * @LastEditors: @zhangl
 * @Description:
 */
import { fabric } from 'fabric';
import { uuid } from '../utils/func';
import type Editor from '../index'

export class GPolyline {
  private editor: Editor
  private canvas: fabric.Canvas
  private options: any = {}
  private polyline: any
  private cb: Function


  constructor(editor: Editor, canvas: fabric.Canvas, cb: Function, options: any) {
    this.editor = editor
    this.canvas = canvas
    this.cb = cb

    this.options = Object.assign(this.options, options)

    this.init()
  }

  setOptions = (options: any) => {
    this.options = Object.assign(this.options, options)
  }

  private handleMouseDown = (e: any) => {
    if (!this.polyline) {
      this.createPolyline(e)
    } else {
      this.updatePolyline(e)
    }
  }

  private createPolyline = (e: any) => {
    const points = [{
      x: e.absolutePointer.x,
      y: e.absolutePointer.y
    }, {
      x: e.absolutePointer.x,
      y: e.absolutePointer.y
    }]
    this.polyline = new fabric.Polyline(points || [], {
      strokeWidth: 4,
      stroke: '#000000',
      strokeLineJoin: 'round',
      strokeLineCap: 'round',
      borderColor: '#00000000',
      fill: 'transparent',
      objectCaching: false,
      id: uuid(),
      ...this.options
    })
    this.canvas.add(this.polyline)
    this.canvas.setActiveObject(this.polyline)
  }

  private updatePolyline = (e: any) => {
    this.polyline.points.push({
      x: e.absolutePointer.x,
      y: e.absolutePointer.y
    })
    this.canvas.requestRenderAll()
  }

  private updateTempLine = (e: any) => {
    if (!this.polyline) return
    this.polyline.points[this.polyline.points.length - 1].x = e.absolutePointer.x
    this.polyline.points[this.polyline.points.length - 1].y = e.absolutePointer.y
    this.canvas.requestRenderAll()
  }

  finishHandle = () => {
    this.polyline.points.pop()
    this.polyline.points.pop()
    this.canvas.remove(this.polyline)
    this.editor.fhistory.pause = false
    this.polyline = new fabric.Polyline(this.polyline.points || [], {
      strokeWidth: 4,
      stroke: '#000000',
      strokeLineJoin: 'round',
      strokeLineCap: 'round',
      borderColor: '#00000000',
      fill: 'transparent',
      objectCaching: false,
      id: uuid(),
      ...this.options
    })
    this.canvas.add(this.polyline)
    this.canvas.setActiveObject(this.polyline)
    this.canvas.skipTargetFind = false // 禁止选中
    this.cb()
    this.canvas.off('mouse:down', this.handleMouseDown)
    this.canvas.off('mouse:move', this.updateTempLine)
    this.canvas.off('mouse:dblclick', this.finishHandle)
  }

  remove = () => {
    this.canvas.off('mouse:down', this.handleMouseDown)
    this.canvas.off('mouse:move', this.updateTempLine)
    this.canvas.off('mouse:dblclick', this.finishHandle)
    this.canvas.remove(this.polyline)
  }

  private init() {
    this.editor.fhistory.pause = true
    this.canvas.skipTargetFind = true // 禁止选中
    this.canvas.on('mouse:down', this.handleMouseDown)
    this.canvas.on('mouse:move', this.updateTempLine)
    this.canvas.on('mouse:dblclick', this.finishHandle)
  }
}
/*
 * @FilePath: legendBox.ts
 * @Author: @zhangl
 * @Date: 2024-05-16 13:36:25
 * @LastEditTime: 2024-08-24 23:53:00
 * @LastEditors: @zhangl
 * @Description:
 */

import { fabric } from 'fabric'
import { downloadFile, getTextWidthList, uuid } from '../utils/func'
import type Editor from '../index'
import { loadImage } from './image'

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

export class LegendBox {
  private editor: Editor
  private canvas: fabric.Canvas
  private activeImage: any
  private imgUrl: any
  private canvasImage: fabric.Image | undefined
  private options: {
    padding: number
    fontSize: number
    legend: {
      unit: string
      list: ILegendData[]
    }
    [key: string]: any
  } = {
      padding: 10,
      fontSize: 12,
      legend: TempLegend,
      rectWidth: 16,
      rectHeight: 16,
      sWidth: 16,
      tHeight: 240
    }

  constructor(editor: Editor, canvas: fabric.Canvas, activeImage: any, options: any) {
    this.editor = editor
    this.canvas = canvas
    this.activeImage = activeImage
    this.options = Object.assign(this.options, options)

    this.init()
  }

  private init() {
    this.createImage()
  }

  public update() {
    this.remove()
    this.canvasImage = undefined
    this.init()
  }

  public remove() {
    this.editor.canvas.remove(this.canvasImage!)
    this.canvasImage!.dispose()
  }

  private async createImage() {
    let outWidth = this.editor.sketch.width!
    let outHeight = this.editor.sketch.height!
    let innerWidth = this.activeImage.width! * this.activeImage.scaleX
    let innerHeight = this.activeImage.height! * this.activeImage.scaleY
    const offsetX = (outWidth - innerWidth) / 2
    const offsetY = (outHeight - innerHeight) / 2
    let { legend, tHeight, padding, rectWidth, rectHeight } = this.options
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!
    let numArr: any[] = []
    let hasLabel: boolean = legend.list.some(item => item.label)
    if (hasLabel) {
      numArr = legend.list.map(item => item.label)
    } else {
      numArr = legend.list.map(item => item.value)
    }
    let widthList = getTextWidthList(numArr, '12px')
    const maxW = Math.max(...widthList)
    canvas.width = padding * 2 + rectWidth + maxW + 2
    canvas.height = tHeight
    rectHeight = (tHeight - padding * 2) / legend.list.length

    ctx.imageSmoothingEnabled = false
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgba(0,0,0,0.2)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    legend.list.forEach((item, index) => {
      ctx.fillStyle = item.color.length === 3 ? `rgb(${item.color.join(',')})` : `rgba(${item.color.join(',')})`
      ctx.fillRect(padding, rectHeight * index + padding, rectWidth, rectHeight)
      ctx.font = '12px'
      ctx.fillStyle = 'white'
      // ctx.strokeStyle = 'red'
      // ctx.textAlign = 'left'
      ctx.textBaseline = 'middle'
      // 绘制文字
      if (hasLabel) {
        ctx.fillText(String(item.label), padding + rectWidth + 2, rectHeight * (index + 0.5) + padding)
      } else {
        ctx.fillText(String(item.value), padding + rectWidth + 2, rectHeight * (index + 0.5) + padding)
      }
    })
    this.imgUrl = canvas.toDataURL()
    // downloadFile(this.imgUrl, 'png', 'test')

    try {
      this.canvasImage = await loadImage(this.imgUrl);
    } catch (e) { console.log(e) }

    if (!this.canvasImage) return
    this.canvasImage.set({
      left: offsetX,
      top: outHeight - offsetY - canvas.height,
      width: canvas.width,
      height: canvas.height
    })

    this.canvas.add(this.canvasImage)
    this.canvas.setActiveObject(this.canvasImage)
    this.canvas.requestRenderAll()
  }
}
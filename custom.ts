//% weight=100 color=#0fbc11 icon="\uf009"
namespace レゴブロック {
    //% block="まえ"
    //% weight=89
    export function まえ() {
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.showArrow(ArrowNames.North)
    }
    //% block="うしろ"
    //% weight=88
    export function うしろ() {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showArrow(ArrowNames.South)
    }
    //% block="ぶらんぶらん"
    //% weight=87
    export function ぶらんぶらん() {
        for (let index = 0; index < 4; index++) {
            まえ()
            うしろ()
        }
    }
}

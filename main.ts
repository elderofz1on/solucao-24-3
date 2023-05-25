input.onButtonPressed(Button.A, function () {
    motor_ligado = 1
})
input.onSound(DetectedSound.Loud, function () {
    if (motor_ligado == 1) {
        motor_ligado = 0
    } else if (motor_ligado == 0) {
        motor_ligado = 1
    }
})
input.onButtonPressed(Button.B, function () {
    motor_ligado = 0
})
let motor_ligado = 0
led.enable(false)
motor_ligado = 0
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 1)
pins.digitalWritePin(DigitalPin.P3, 0)
basic.forever(function () {
    if (motor_ligado == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 1)
    } else if (motor_ligado == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P3, 0)
    }
})

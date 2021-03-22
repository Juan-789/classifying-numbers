input.onButtonPressed(Button.A, function () {
    num += 1
})
input.onButtonPressed(Button.AB, function () {
    if (num < 0) {
        basic.showString("N")
    } else if (num > 0) {
        basic.showString("P")
    } else if (num == 0) {
        basic.showString("Z")
    }
})
input.onButtonPressed(Button.B, function () {
    num += -1
})
input.onGesture(Gesture.Shake, function () {
    num += 0.5
})
let num = 0
num = 0
basic.forever(function () {
    basic.showNumber(num)
    basic.pause(100)
})

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    message = "" + message + "."
    basic.showString(".")
})
input.onButtonPressed(Button.AB, function () {
    message = ""
    basic.clearScreen()
    // Optional: Visual cue that it's cleared
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    message = "" + message + "-"
    basic.showString("-")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString(message)
    basic.showIcon(IconNames.Yes)
    message = ""
    basic.clearScreen()
})
let message = ""
radio.setGroup(1)
message = ""

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    message = "" + message + "."
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    message = ""
    basic.clearScreen()
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    // Optional: Visual cue that it's cleared
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    music.play(music.stringPlayable("C5 B A B A B C5 C5 ", 120), music.PlaybackMode.UntilDone)
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    message = "" + message + "-"
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString(message)
    basic.showIcon(IconNames.Yes)
    message = ""
    basic.pause(500)
    basic.clearScreen()
})
let message = ""
music.play(music.tonePlayable(880, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
radio.setGroup(1)
message = ""

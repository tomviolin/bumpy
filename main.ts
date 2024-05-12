input.onGesture(Gesture.LogoUp, function () {
    if (sad) {
        basic.pause(4000)
        sad = 0
    }
    music.stopAllSounds()
    images.createImage(`
        . . . . .
        # . # . .
        . . . . #
        # . . # .
        . # # . .
        `).showImage(0)
    music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.InBackground)
})
input.onGesture(Gesture.ScreenUp, function () {
    if (sad) {
        basic.pause(4000)
    }
    sad = 0
    music.stopAllSounds()
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
    images.createImage(`
        . . . . .
        # . # . .
        . . . . #
        # . . # .
        . # # . .
        `).showImage(0)
})
input.onGesture(Gesture.ScreenDown, function () {
    sad = 1
    music.stopAllSounds()
    images.createImage(`
        . # . . .
        . . . # .
        . # # . .
        # . . # .
        . . . . #
        `).showImage(0)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    music.stopAllSounds()
    sad = 0
    music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.InBackground)
    images.createImage(`
        . # . . .
        . . . . .
        . # . # .
        # . . # .
        . # # . .
        `).showImage(0, 100)
    for (let index = 0; index < 4; index++) {
        images.createImage(`
            . . . . .
            # . # . .
            . . . . #
            # . . # .
            . # # . .
            `).showImage(0, 100)
        images.createImage(`
            . # . . .
            . . . . .
            . # . # .
            # . . # .
            . # # . .
            `).showImage(0, 100)
    }
    for (let index = 0; index < 4; index++) {
        images.createImage(`
            . . . . .
            . # . # .
            . . . . #
            # . . # .
            . # # . .
            `).showImage(0, 50)
        images.createImage(`
            . . . . .
            # . # . .
            . . . . #
            # . . # .
            . # # . .
            `).showImage(0, 200)
    }
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
})
input.onGesture(Gesture.LogoDown, function () {
    music.stopAllSounds()
    images.createImage(`
        . . # # .
        # . . . #
        . . # . #
        . . . . #
        # # # # #
        `).showImage(0)
    music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.InBackground)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.InBackground)
    basic.showString("Happy Mother's Day!")
    katakana.setScrollTime(200)
    katakana.showString("ﾋ ﾙｼ")
    images.createImage(`
        . . . . .
        # . # . .
        . . . . #
        # . . # .
        . # # . .
        `).showImage(0)
})
let sad = 0
sad = 0
images.createImage(`
    . . . . .
    # . # . .
    . . . . #
    # . . # .
    . # # . .
    `).showImage(0)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
basic.forever(function () {
    basic.pause(100)
})
control.inBackground(function () {
    while (true) {
        led.plot(4, 4)
        basic.pause(80)
        led.unplot(4, 4)
        basic.pause(120)
        led.plot(4, 4)
        basic.pause(40)
        led.unplot(4, 4)
        basic.pause(600)
        if (sad) {
            basic.pause(1000)
        }
    }
})

input.onGesture(Gesture.Shake, function () {
    if (ok != 2) {
        basic.clearScreen()
        number = randint(1, 6)
        if (number == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            sum += 1
        } else if (number == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                . . . . .
                . . . . .
                `)
            sum += 2
        } else if (number == 3) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . .
                `)
            sum += 3
        } else if (number == 4) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                `)
            sum += 4
        } else if (number == 5) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                `)
            sum += 5
        } else {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                `)
            sum += 6
        }
        ok += 1
    } else {
        if (sum > 9) {
            basic.showString("Win")
        } else {
            basic.showString("Lose")
        }
        ok = 0
        sum = 0
    }
})
let number = 0
let sum = 0
let ok = 0
ok = 0
sum = 0

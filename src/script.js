let done = 0
let divis = []
let oldValue = null
let newValue = null
const divisibleSign = document.getElementById('divisiblesign')

// Checks if number is divisible
const checkChange = () =>
{
    divis = []
    newValue = document.getElementById('number-input').value;
    if (newValue !== oldValue) {
        oldValue = newValue
        done = 0
        divis = []
        check()
    }
}

const check = () =>
{
    const numberInput = document.getElementById('number-input').value;
    let numberInputBy2 = numberInput / 2
    let numberInputBy3 = numberInput / 3
    let numberInputBy4 = numberInput / 4
    let numberInputBy5 = numberInput / 5
    let numberInputBy6 = numberInput / 6
    let numberInputBy7 = numberInput / 7
    let numberInputBy8 = numberInput / 8
    let numberInputBy9 = numberInput / 9
    if (numberInput == "" || done == 1) {
        return
    }
    if (!numberInputBy2.toString().includes('.')) {
        divis.push('2')
        done = 1
    }
    if (!numberInputBy3.toString().includes('.')) {
        divis.push('3')
        done = 1
    }
    if (!numberInputBy4.toString().includes('.')) {
        divis.push('4')
        done = 1
    }
    if (!numberInputBy5.toString().includes('.')) {
        divis.push('5')
        done = 1
    }
    if (!numberInputBy6.toString().includes('.')) {
        divis.push('6')
        done = 1
    }
    if (!numberInputBy7.toString().includes('.')) {
        divis.push('7')
        done = 1
    }
    if (!numberInputBy8.toString().includes('.')) {
        divis.push('8')
        done = 1
    }
    if (!numberInputBy9.toString().includes('.')) {
        divis.push('9')
        done = 1
    }
    if (divis.length == 0) {
        divisibleSign.innerText = `nothing`
    } else {
        divisibleSign.innerText = `${divis.toString().replaceAll(',', ', ')}`
    }
}

// Tick Function

const tick = () =>
{
    // Checks
    checkChange()

    // Request next tick
    window.requestAnimationFrame(tick)
}
tick()
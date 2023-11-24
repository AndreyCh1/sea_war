function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let boatSize = rand(1, 4),
    boatOrientation = rand(1, 2),
    strikesUsed = 0,
    boatLife = boatSize,
    vertical,
    gorizontal,
    step,
    cellCounter = 11,
    hitCount = 0,
    playingField = 0

let level = +prompt("Виберіть рівень складності - 1 - Easy, 2 - Medium або 3 - Hard", "Ваш рівень складності")
if (level == 1 || level == 2 || level == 3) {
    alert("Ваш рівень складності " + level)
    if (level === 1) {
        playingField = 5
    } else if (level === 2) {
        playingField = 7
    } else {
        playingField = 9
    }
} else {
    alert("Будьласка виберіть рівень складності - 1 - Easy, 2 - Medium або 3 - Hard")
}

let strikes = Math.pow(playingField) / 2

// if (boatOrientation === 1) {
//     vertical = rand(1, 9 - boatSize)
//     gorizontal = rand(1, 9)
//     step = 1
// } else {
//     vertical = rand(1, 9)
//     gorizontal = rand(1, 9 - boatSize)
//     step = 10
// }

if (boatOrientation === 1) {
    gorizontal = rand(1, playingField - boatSize + 1)
    vertical = rand(1, playingField)
    step = 1
} else {
    gorizontal = rand(1, playingField)
    vertical = rand(1, playingField - boatSize + 1)
    step = 10
}

console.log(boatOrientation)

deck1 = parseInt("" + vertical + gorizontal)
deck2 = (boatSize > 1) ? deck1 + step : false
deck3 = (boatSize > 2) ? deck2 + step : false
deck4 = (boatSize > 3) ? deck3 + step : false

console.log(deck1, deck2, deck3, deck4)

document.write("<div class='wrapper'>")
document.write("<table class='table' style='margin: 0; padding: 100px; border-collapse: collapse'><tbody>")
for (let j = 1; j <= playingField; j++) {
    document.write("<tr>")
    for (let k = 1; k <= playingField; k++) {
        console.log(k, deck1)
        // } else if (cellCounter % 10 === 5) {
        //     cellCounter += 5
        // } else if (cellCounter % 10 === 7) {
        //     cellCounter += 4
        // }
        document.write("<td style='padding: 2px 2px; border: 1px solid #000'><div class='cell td" + cellCounter + "'>")
        // if (boatOrientation === 1) {
        //     if (k === gorizontal && j === vertical) {
        //         document.write("<img class='deck' src='images/deck.jpg' alt=''>")
        //     }
        //     if (deck2) {
        //         if ((k + 1) === gorizontal && j === vertical) {
        //             document.write("<img class='deck' src='images/deck.jpg' alt=''>")
        //         }
        //     }
        //     if (deck3) {
        //         if ((k + 2) === gorizontal && j === vertical) {
        //             document.write("<img class='deck' src='images/deck.jpg' alt=''>")
        //         }
        //     }
        //     if (deck4) {
        //         if ((k + 3) === gorizontal && j === vertical) {
        //             document.write("<img class='deck' src='images/deck.jpg' alt=''>")
        //         }
        //     }
        // } else {
        //     if (k === gorizontal && j === vertical) {
        //         document.write("<img class='deck' src='images/deck.jpg' alt=''>")
        //     }
        //     if (deck2) {
        //         if (k === gorizontal && (j + 1) === vertical) {
        //             document.write("<img class='deck' src='images/deck.jpg' alt=''>")
        //         }
        //     }
        //     if (deck3) {
        //         if (k === gorizontal && (j + 2) === vertical) {
        //             document.write("<img class='deck' src='images/deck.jpg' alt=''>")
        //         }
        //     }
        //     if (deck4) {
        //         if (k === gorizontal && (j + 3) === vertical) {
        //             document.write("<img class='deck' src='images/deck.jpg' alt=''>")
        //         }
        //     }
        // }
        document.write("</div></td>")
        if (cellCounter % 10 === 9) {
            cellCounter++
            cellCounter++
        } else if (cellCounter % 10 === 7 && playingField === 7) {
            cellCounter += 4
        } else if (cellCounter % 10 === 5 && playingField === 5) {
            cellCounter += 6
        } else {
            cellCounter++
        }
    }
    document.write("</tr>")
}
document.write("</tbody></table>")
document.write("</div>")

for (let i = 1; i <= strikes; i++) {
    let choise = +prompt("Спробуйте влучити у корабель:", "Виберіть координати по горизонталі від 1 до " + playingField)
    if (isNaN(choise) || choise < 1 || choise > playingField) {
        alert("Будьласка введіть число від 1 до " + playingField)
    }
    let choise2 = +prompt("Спробуйте влучити у корабель:", "Виберіть координати по вертикалі від 1 до " + playingField)
    if (isNaN(choise2) || choise2 < 1 || choise2 > playingField) {
        alert("Будьласка введіть число від 1 до " + playingField)
    }
    let choiseCord = parseInt("" + choise + choise2)
    console.log("choiseCord" + choise2 + choise)
    console.log(choise)
    console.log(deck1, deck2, deck3, deck4)
    strikesUsed++
    if (choiseCord === deck1 || choiseCord === deck2 || choiseCord === deck3 || choiseCord === deck4) {
        alert("Є влучання!")
        boatLife--
        hitCount++
        let cellHit = (".td" + choise) + choise2
        console.log(cellHit)
        document.querySelector(cellHit).classList.add("hit")
        if (boatLife === 0) {
            alert("Корабель знищено!")
            break
        } else {
            if (i === 4) {
                alert("Спроби закінчились, корабель не знищено.")
                break
            }
        }
    } else {
        let cellPast = (".td" + choise) + choise2
        console.log(cellPast)
        document.querySelector(cellPast).classList.add("past")
        alert("Ти не влучив")
    }
    console.log(i)
    // var row = table.insertRow();
    // for (var j = 0; j < 3; j++) {
        //   var cell = row.insertCell();
        //   cell.innerHTML = 'Row ' + (i + 1) + ', Column ' + (j + 1);
        // }
}

console.log(hitCount, strikes)
console.log("Hello")
document.write("<div class='results'><h1>Відсоток попадань:</h1><span class='hit_percentages'>" + (hitCount / strikesUsed) * 100 + "</span></div>")
console.log(deck1, deck2, deck3, deck4)
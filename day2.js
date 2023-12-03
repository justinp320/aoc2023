const data = `Game 1: 2 green, 6 blue, 7 red; 12 green, 6 blue, 3 red; 5 red, 18 green, 4 blue
Game 2: 10 green, 4 red; 2 red; 12 green, 11 red, 1 blue; 1 blue, 11 red, 5 green; 10 red, 9 green, 1 blue
Game 3: 3 green; 15 red, 7 blue, 1 green; 3 red, 6 blue, 1 green; 14 blue, 13 red, 2 green; 1 green, 6 blue, 6 red; 16 red, 13 blue, 2 green
Game 4: 5 blue; 8 blue, 7 red; 9 blue, 5 red, 4 green; 4 red, 1 green; 8 red, 6 blue; 2 blue, 4 red, 3 green
Game 5: 3 blue, 4 red, 10 green; 13 green, 8 blue, 2 red; 2 red, 4 green, 6 blue; 3 blue, 5 green, 2 red; 4 red, 13 blue, 8 green; 9 green, 2 red
Game 6: 3 red, 2 blue; 6 green, 13 blue; 11 blue, 1 red; 4 green, 3 red, 5 blue
Game 7: 14 green, 2 red, 5 blue; 4 blue, 8 green; 2 red, 2 green, 9 blue
Game 8: 10 green, 6 blue; 3 green, 4 red; 7 blue, 7 red, 5 green; 1 red, 11 green; 3 blue, 2 red, 11 green
Game 9: 4 blue, 1 green, 6 red; 5 red, 5 blue; 1 blue, 7 red; 4 red, 8 blue; 6 red
Game 10: 3 green, 7 blue, 6 red; 1 red, 5 blue; 6 red; 1 red, 5 green, 6 blue; 5 red, 2 blue; 6 red, 4 blue, 6 green
Game 11: 8 red, 6 blue, 6 green; 5 blue, 2 red, 5 green; 4 blue, 5 green; 4 blue, 3 red, 8 green
Game 12: 5 green, 1 red, 7 blue; 1 red, 10 green; 6 red, 3 green, 7 blue; 5 red, 6 blue, 7 green; 3 blue, 4 green; 1 red, 3 blue, 3 green
Game 13: 11 red, 9 blue, 16 green; 1 red, 3 green, 3 blue; 14 green, 2 red, 7 blue
Game 14: 4 red, 8 blue, 12 green; 7 blue, 4 red, 2 green; 4 blue, 7 green, 6 red; 3 red, 11 blue, 12 green
Game 15: 6 red; 3 red, 5 blue; 3 red, 10 blue, 1 green; 2 green, 8 red, 2 blue
Game 16: 2 green, 4 red, 6 blue; 2 green, 16 blue, 2 red; 13 blue, 7 green, 3 red
Game 17: 5 blue; 1 blue; 2 red, 2 green, 4 blue; 6 blue, 4 green, 2 red
Game 18: 3 red; 7 green, 11 red, 6 blue; 6 red, 3 blue, 12 green; 5 red, 3 blue; 7 green, 8 red, 9 blue
Game 19: 2 green, 13 blue; 11 blue, 16 red, 7 green; 13 blue, 10 green, 8 red; 18 red, 1 green, 14 blue
Game 20: 10 red, 6 green; 1 blue, 6 red, 15 green; 15 green, 9 red, 3 blue; 3 blue, 11 red, 9 green; 2 blue, 5 red, 10 green
Game 21: 1 green, 5 red, 8 blue; 4 red, 6 green, 7 blue; 13 blue, 10 green, 6 red; 9 blue, 2 red, 14 green; 16 green, 10 blue, 1 red; 9 blue, 3 red, 11 green
Game 22: 4 blue; 1 green, 1 red, 16 blue; 15 blue, 1 red
Game 23: 2 blue, 6 green; 15 green, 2 blue, 10 red; 1 green, 6 blue, 6 red; 8 red, 1 green; 4 green, 3 blue, 10 red; 7 red, 3 blue, 20 green
Game 24: 1 red, 13 blue, 8 green; 3 blue, 7 red, 8 green; 3 red, 11 green, 12 blue; 7 green, 6 blue, 2 red; 11 blue, 5 red, 10 green; 13 blue, 3 green, 8 red
Game 25: 4 red, 6 green, 8 blue; 4 red, 10 blue, 9 green; 5 red, 2 blue, 3 green; 2 green, 9 red, 4 blue
Game 26: 14 red, 4 green, 5 blue; 3 blue, 2 red, 3 green; 1 red, 9 blue, 1 green; 5 green, 15 red, 8 blue; 5 green, 6 red, 6 blue
Game 27: 1 blue, 1 green, 9 red; 4 green, 1 blue, 1 red; 4 green, 4 red; 5 green, 4 red; 1 green, 1 blue, 8 red; 9 red
Game 28: 11 red, 3 blue, 19 green; 3 green, 13 red, 5 blue; 8 blue, 16 red, 18 green; 13 red, 5 blue, 7 green; 8 red, 5 green, 4 blue; 16 green, 1 blue, 15 red
Game 29: 12 red, 15 blue, 1 green; 3 green, 10 red, 5 blue; 4 green, 5 blue, 17 red; 11 red, 2 blue; 6 blue, 3 green, 4 red; 1 blue, 13 red
Game 30: 2 blue, 2 green, 3 red; 1 green, 4 red; 1 red, 2 blue; 1 green, 1 blue, 2 red
Game 31: 3 green, 5 blue, 4 red; 3 red, 1 green; 3 blue, 4 red, 3 green; 8 blue, 8 red; 6 blue; 1 green, 6 blue, 1 red
Game 32: 3 blue, 12 green, 2 red; 13 red, 12 green, 4 blue; 9 green, 1 red; 10 red; 12 green, 9 red; 15 red, 3 blue, 10 green
Game 33: 1 green, 8 blue; 3 red, 7 green; 4 red, 3 green; 5 red, 9 green
Game 34: 12 blue, 3 red, 2 green; 12 blue, 12 green, 2 red; 10 blue, 8 green; 3 red, 3 green, 9 blue
Game 35: 4 red, 4 blue, 6 green; 3 blue, 8 green, 2 red; 5 green, 2 red, 2 blue
Game 36: 12 blue, 4 red, 5 green; 18 blue, 2 red, 5 green; 2 green, 2 red; 3 red, 9 green, 13 blue; 2 green, 12 blue, 1 red
Game 37: 8 red, 3 blue; 6 blue, 5 red; 9 red, 10 blue, 3 green; 4 green, 10 red
Game 38: 1 green, 3 blue, 7 red; 6 blue, 6 green, 9 red; 5 green
Game 39: 7 red, 1 blue, 1 green; 5 red, 2 blue, 3 green; 9 red, 9 blue; 5 red, 3 green, 1 blue; 1 green, 9 red, 1 blue
Game 40: 1 blue, 1 green, 3 red; 3 red, 2 green, 2 blue; 5 red, 1 blue, 8 green; 2 green, 4 red, 2 blue; 13 red, 2 green
Game 41: 17 blue, 5 red, 3 green; 10 green, 4 red, 5 blue; 3 red, 17 blue, 1 green; 11 blue, 10 red, 3 green
Game 42: 8 blue, 2 green, 7 red; 4 blue, 1 red; 9 red, 2 green, 6 blue; 4 blue, 9 red; 1 green, 9 blue, 8 red; 6 red, 1 green
Game 43: 1 green, 6 blue, 14 red; 7 green, 1 blue, 8 red; 3 green, 16 red, 7 blue
Game 44: 5 red, 5 blue; 1 green, 8 red, 9 blue; 6 red, 3 blue
Game 45: 4 green, 17 red, 14 blue; 14 red, 2 green, 2 blue; 9 blue, 1 green, 8 red
Game 46: 1 blue, 10 red, 7 green; 3 red, 4 blue; 2 blue, 1 green, 1 red
Game 47: 8 red, 2 green, 13 blue; 10 red, 9 blue; 4 green, 15 blue, 2 red; 1 blue, 1 green, 16 red
Game 48: 9 red, 8 green, 1 blue; 10 green, 5 red; 9 red, 3 green, 1 blue; 8 red, 1 green
Game 49: 11 blue, 18 green, 1 red; 13 red, 9 blue; 17 green, 18 red, 6 blue
Game 50: 2 green, 10 red, 6 blue; 6 red, 6 blue, 7 green; 7 red, 5 green, 3 blue; 5 green, 2 red, 1 blue
Game 51: 1 blue, 9 green, 7 red; 2 blue, 11 red, 10 green; 1 blue, 9 green, 12 red; 10 red, 5 green, 3 blue; 9 green, 3 blue, 14 red
Game 52: 4 green; 6 blue; 4 green, 7 blue; 1 blue; 1 red, 8 green, 1 blue
Game 53: 6 green, 3 blue, 13 red; 3 blue, 2 green, 16 red; 13 red, 9 green, 2 blue; 1 red, 1 blue, 7 green
Game 54: 1 green, 4 blue, 10 red; 2 red, 6 blue; 2 blue, 5 red; 3 blue, 7 red, 1 green
Game 55: 17 red; 18 red, 3 blue, 4 green; 5 blue, 14 red, 1 green; 4 green, 5 blue, 4 red; 2 green, 18 red
Game 56: 14 green, 2 red, 18 blue; 8 green, 12 blue, 2 red; 1 red, 13 blue, 12 green
Game 57: 2 green, 4 blue, 12 red; 1 green, 3 red, 4 blue; 4 green, 2 red, 3 blue; 3 green, 6 red; 3 red, 3 blue, 3 green
Game 58: 2 blue, 5 red, 2 green; 6 red, 6 green; 8 red, 11 green, 2 blue; 9 green, 1 blue, 11 red; 2 blue, 17 green, 11 red; 7 red, 8 green, 2 blue
Game 59: 4 blue, 1 red, 16 green; 2 blue, 5 green, 1 red; 2 green, 6 blue; 3 blue, 10 green; 14 green, 6 blue; 1 red, 11 green
Game 60: 4 red, 1 blue, 5 green; 2 green, 6 blue; 1 red, 17 green; 2 red, 11 blue, 14 green; 2 red, 8 blue, 14 green
Game 61: 6 red, 7 blue, 1 green; 2 red, 10 green, 16 blue; 14 blue, 10 green, 7 red; 12 red, 15 blue, 3 green; 5 blue, 1 red
Game 62: 9 blue, 4 red; 1 green, 2 blue, 4 red; 8 red, 9 blue; 6 red, 15 blue; 7 blue, 10 red
Game 63: 8 green, 2 red, 4 blue; 2 red, 1 green, 3 blue; 1 red, 3 green; 2 blue, 9 green
Game 64: 4 green, 13 red; 2 red, 6 green, 2 blue; 4 red, 6 green, 2 blue; 6 red, 2 blue; 5 red, 9 green; 3 red, 1 blue, 10 green
Game 65: 8 blue, 3 red, 3 green; 6 red, 8 green; 6 blue, 7 green, 7 red
Game 66: 6 red, 2 blue, 2 green; 15 green, 11 red, 1 blue; 1 red, 2 blue, 10 green; 2 blue, 17 green; 12 green, 2 blue, 4 red; 16 green, 10 red, 3 blue
Game 67: 1 green, 2 red, 12 blue; 2 red, 3 blue, 3 green; 8 blue, 4 green, 1 red; 12 blue, 2 red, 4 green; 2 red, 10 blue
Game 68: 6 red, 4 green, 16 blue; 9 red, 7 green, 11 blue; 7 blue, 16 green, 15 red; 2 red, 2 green; 16 red; 13 red, 15 green, 2 blue
Game 69: 14 red, 3 blue, 14 green; 4 blue, 18 green, 2 red; 4 green, 9 blue, 7 red; 15 green, 9 blue, 10 red
Game 70: 2 green, 5 red, 12 blue; 3 green, 5 red, 4 blue; 5 blue, 4 red; 6 red, 11 blue; 5 red, 2 blue; 5 blue, 1 green, 4 red
Game 71: 3 green, 3 red; 6 green, 11 blue, 2 red; 6 red, 4 blue
Game 72: 9 blue, 4 green, 4 red; 5 blue, 5 red, 3 green; 9 blue, 11 green, 3 red
Game 73: 1 blue, 13 red; 12 red; 5 red, 1 green, 6 blue; 5 blue, 7 red; 8 red, 9 blue
Game 74: 7 green, 17 red, 3 blue; 15 red, 2 green; 5 red, 3 blue, 1 green; 19 red, 1 blue; 3 red, 1 blue, 6 green; 7 red, 3 blue, 1 green
Game 75: 11 blue, 9 green, 4 red; 5 green, 2 red, 16 blue; 13 blue, 2 red; 3 red, 18 blue, 1 green
Game 76: 5 green, 13 red, 10 blue; 5 red, 11 green; 1 red, 5 green, 8 blue; 4 red, 14 green; 7 blue, 12 green, 2 red
Game 77: 5 blue, 2 green, 3 red; 2 red; 1 green, 6 blue; 5 blue, 1 red
Game 78: 9 red, 7 green; 10 red, 2 blue, 6 green; 13 red, 3 blue, 15 green; 9 blue, 10 green, 2 red; 1 blue, 4 red, 12 green
Game 79: 4 red, 3 green; 3 blue, 10 green, 4 red; 1 red, 12 green, 7 blue; 5 blue, 3 green, 6 red; 10 green, 1 blue, 5 red; 5 green, 5 red
Game 80: 3 blue, 18 green; 5 blue, 11 green, 3 red; 2 blue, 13 green, 7 red; 4 red, 1 blue, 8 green
Game 81: 9 green, 18 blue, 10 red; 6 red, 5 green, 13 blue; 8 red, 4 blue, 7 green
Game 82: 9 green, 2 red, 2 blue; 7 green, 2 red, 1 blue; 2 green, 2 red, 2 blue; 2 red, 14 green, 1 blue
Game 83: 10 red, 7 green, 3 blue; 4 green, 12 red, 12 blue; 13 blue, 1 green, 8 red
Game 84: 10 green, 3 blue; 8 green, 2 red; 3 blue, 5 green; 3 blue, 1 green; 5 blue, 7 green, 1 red; 8 green, 5 blue, 2 red
Game 85: 6 blue, 4 green, 5 red; 11 green, 1 blue, 13 red; 11 green, 1 red; 6 green, 2 red; 1 blue, 5 green, 4 red
Game 86: 1 blue, 10 red; 2 blue, 5 red; 1 red, 2 blue, 2 green
Game 87: 11 green, 13 red, 6 blue; 8 blue, 2 red, 6 green; 10 blue, 11 red, 1 green; 16 green, 16 blue, 6 red; 6 green, 12 red, 3 blue
Game 88: 15 green, 4 red, 2 blue; 6 red, 13 green, 4 blue; 3 green, 17 red, 4 blue; 4 blue, 14 green
Game 89: 6 green, 12 red, 7 blue; 3 blue, 6 green, 7 red; 6 green, 13 red, 5 blue; 6 red, 7 green
Game 90: 19 blue, 19 red; 6 blue, 12 red, 6 green; 2 green, 7 blue, 17 red; 3 green, 9 blue, 7 red; 8 red, 7 green, 18 blue
Game 91: 3 red, 1 green; 14 red, 2 blue, 2 green; 7 red, 3 blue; 1 blue, 6 red
Game 92: 2 green, 16 red, 15 blue; 3 green, 3 blue, 11 red; 7 blue, 6 red; 7 blue, 13 red
Game 93: 1 red, 1 blue, 9 green; 12 green, 3 red, 4 blue; 3 green, 3 red, 7 blue
Game 94: 12 green, 5 red, 9 blue; 3 blue, 3 green, 2 red; 5 green, 2 blue; 5 green, 7 red, 10 blue; 7 red, 10 blue, 10 green
Game 95: 3 blue, 15 red, 10 green; 3 blue, 16 red; 1 blue, 13 green, 6 red
Game 96: 11 blue, 2 green, 5 red; 2 green, 10 red, 15 blue; 11 blue, 19 red, 8 green
Game 97: 7 green, 2 red, 1 blue; 5 red, 3 blue, 12 green; 4 blue, 2 green, 3 red
Game 98: 2 green, 5 blue, 9 red; 4 green, 9 blue, 8 red; 7 green, 11 blue, 7 red
Game 99: 2 green, 15 blue, 2 red; 2 red, 6 green, 12 blue; 11 green, 18 blue, 2 red; 3 red, 9 blue, 3 green; 18 blue
Game 100: 13 red, 2 green; 15 red, 1 green; 4 green, 1 blue; 11 red, 5 green; 3 green, 8 red`

function getAll(data, maxRed, maxGreen, maxBlue){
    let total = 0
    let dataArr = data.split(/\n/)
    for (let i=0; i<dataArr.length; i++){
        let data = dataArr[i].replace(':', ';').replace('Game ', '').split(';')
        total += Number(findMax(data, maxRed, maxGreen, maxBlue)) * [i+1]
    }
    return total
}

function findMax(data, maxRed, maxGreen, maxBlue){
    let reds = []
    let blues = []
    let greens = []
    for (let i=1; i<data.length; i++){
        if (data[i].includes('red')){
            reds.push(data[i].slice(data[i].toString().indexOf('red')-3, data[i].toString().indexOf('red')))
            }
        if (data[i].includes('blue')){
            blues.push(data[i].slice(data[i].toString().indexOf('blue')-3, data[i].toString().indexOf('blue')))
        }
        if (data[i].includes('green')){
            greens.push(data[i].slice(data[i].toString().indexOf('green')-3, data[i].toString().indexOf('green')))
        }
    }
    const highestRed = Math.max(...reds.map( (a) => parseInt(a)))
    const highestGreen = Math.max(...greens.map ( (a) => parseInt(a)))
    const highestBlue = Math.max(...blues.map( (a) => parseInt(a)))
    return ((highestRed <= maxRed) && (highestGreen <= maxGreen) && (highestBlue <= maxBlue))
    
}

console.log(getAll(data, 12, 13, 14))

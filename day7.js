const data = [
    [45,305],
    [97,1062],
    [72,1110],
    [95,1695]
]

function totalWays(time, distance){
    const ways = []
    for (let i=0; i<time+1; i++){
        ways.push((time-i)*i)
    }
    return ways.filter(num => num>distance).length
}

function findTotalWays(data){
    let totals = []
    for (let i=0; i<data.length; i++){
        totals.push(totalWays(data[i][0],data[i][1]))
    }
    return totals.reduce( (a,c) => a*c)
}

//console.log(findTotalWays(data)) // part 1
console.log(totalWays(45977295, 305106211101695)) //part 2
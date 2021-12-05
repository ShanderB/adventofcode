var teste = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

for (let b = 9; b >= 0; b--) {
    if (teste[b - 1] != undefined){
        if (teste[b] < teste[b - 1]) {
            console.log("decrease " + teste[b] + " " + teste[b - 1])
        } else {
            console.log("increase " + teste[b] + " " + teste[b - 1])
        }
    } else {
        console.log("no changes")
    }

}
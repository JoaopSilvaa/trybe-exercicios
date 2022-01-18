const check = (result, verify) => {
    let points = 0;
    for ( let index = 0; index < verify.length; index += 1) {
        if (result[index] === verify[index]){
            points += 1; 
        } else if(verify[index] === 'N.A'){
            points += 0;
        } else {
            points -= 0.5;
        }
    }
    return points;
}

const hof = (result, verify, check) => {
    console.log(check(result, verify));
}

hof(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], check);

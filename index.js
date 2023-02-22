function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42)
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, dest) {
    return Math.abs(dest - start) * 264
}

function calculatesFarePrice(start, dest) {
    const distance = distanceTravelledInFeet(start, dest)
    if (distance <= 400) {
        return 0
    }

    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02
    }

    else if (distance > 200 && distance <= 2500) {
        return 25
    }
    else
        return "cannot travel that far"
}

console.log(calculatesFarePrice(1, 9))
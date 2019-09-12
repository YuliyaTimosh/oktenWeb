//Прокинутись
// Чистити зуби (3 сек)
// Поснідати (1 сек)
// їхати на роботу (5 сек)
// працювати (7 сек)
// їхати додому (5 сек)
// душ (2 сек)
// спати

function wakeUP() {
    return new Promise(resolve => {
        resolve('I\'m woke up!')
    })
};

function cleanTooth() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('I cleaned my tooth!')
        }, 3000)

    })
};

function takeBreakfast() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('I took my breakfast')
        }, 1000)
    })
}

function commuteToWork() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('I commuted to work')
        }, 5000)
    })
}

function working() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('I am working hard')
        }, 7000)
    })
}

function commuteToHome() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Go home')
        }, 5000)
    })
}

function takeShower() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('washing')
        }, 2000)
    })
}

function goToBed() {
    return new Promise(resolve => {
        resolve('Good night!')
    })
}

//call promises

wakeUP()
    .then(value => {
        console.log(value)
        return cleanTooth();
    })
    .then(value => {
        console.log(value);
        return takeBreakfast();
    })
    .then(value => {
        console.log(value);
        return commuteToWork();
    })
    .then(value => {
        console.log(value);
        return working();
    })
    .then(value => {
        console.log(value)
        return commuteToHome();
    })
    .then(value => {
        console.log(value);
        return takeShower();
    })
    .then(value => {
        console.log(value);
        return goToBed();
    })
    .then(value => {
        console.log(value)});





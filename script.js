const data = [
    { principal: 2500, time: 1.8 },
    { principal: 1000, time: 5 },
    { principal: 3000, time: 1 },
    { principal: 2000, time: 3 },
];

var rate = 0;
var interest = 0;
var interestData = [];

function interestCalculator(i) {
    i.forEach((element) => {
        if (element.principal < 2500 || element.time <= 1)
            rate = 2;
        else if (element.principal >= 2500 && element.time>= 3)
            rate = 4;
        else if (element.principal >=2500 && (element.time > 1 && element.time < 3))
            rate = 3;
        else 
            rate = 1;
        interestData.push({
            principal: element.principal,
            rate,
            time: element.time,
            interest
        });
    });
    console.log(interestData);
    return interestData
};
interestCalculator(data);
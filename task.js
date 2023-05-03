 function  summarizeByDay(D) {
    let result = {
        'Mon': 'NA',
        'Tue': 'NA',
        'Wed': 'NA',
        'Thu': 'NA',
        'Fri': 'NA',
        'Sat': 'NA',
        'Sun': 'NA'
    };

    let ArrKeys = Object.keys(D)
    for (let i = 0; i < ArrKeys.length; i++) {
        let key = ArrKeys[i];
        let value = D[key];

        let date = new Date(key);
        let dayOfWeek = date.toLocaleString('en-US', {
            weekday: 'short'
        });
        if (result[dayOfWeek] == 'NA') {
            result[dayOfWeek] = value
        } else {
            result[dayOfWeek] += value;
        }
    }
    const key = Object.keys(result)
    const values = Object.values(result)
    for (let i = 0; i < values.length; i++) {
        if (values[i] == "NA") {
            values[i] = 0
        }
    }


    for (let i = 1; i < key.length - 1; i++) {

        if (result[key[i]] == "NA" && result[key[i + 1]] !== "NA") {
            result[key[i]] = Math.ceil((result[key[i + 1]] + result[key[i - 1]]) / 2)
        } else if (result[key[i]] == "NA" && result[key[i + 1]] == "NA") {
            function splitNumber(number) {
                const combination = [];
                for (let i = 1; i <= Math.floor(number / 2); i++) {
                    for (let j = i; j <= number - i; j++) {
                        if (i + j === number) {
                            combination.push([i, j], [j, i]);
                        }
                    }
                  
                }  return combination}
                let Flag = true

                const combinations = splitNumber(result[key[i - 1]] + result[key[i + 2]])
                
                while (Flag==true) {
                    for (let j in combinations) {
                        if (Math.ceil((result[key[i - 1]] + combinations[j][1]) / 2) == combinations[j][0] &&
                            Math.ceil((result[key[i + 2]] + combinations[j][0]) / 2) == combinations[j][1]
                        ) {
                            result[key[i]] =combinations[j][0]
                            result[key[i + 1]] = combinations[j][1]
                            Flag = false
                            break
                        }

                    }

                }
  


            }
        }
            return result;
    }

    

module.exports = summarizeByDay;
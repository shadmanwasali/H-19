function checkCashRegister(price, cash, cid) {
  var CurrencyObj = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }

  var objValues = Object.values(CurrencyObj).reverse();
  var objKeys = Object.keys(CurrencyObj).reverse();

  cid.reverse();

  var change = [], sum = 0, numbers = [], cidMoneyValue = [];
  var billCount = 0, finalArr = [], returnObj = {}, deduce = 0;
  var change_due = cash - price;

  var caclulate = function () {
    for (var i = 0; i < cid.length; i++) {
      for (var j = 1; j < cid[i].length; j++) {
        sum += cid[i][j];
        numbers.push(cid[i][j]);
      }
    }
    return sum;
  }

  for (var index_i = 0; index_i < cid.length; index_i++) {
    for (var index_j = 1; index_j < cid[index_i].length; index_j++) {
      cidMoneyValue.push(cid[index_i][index_j])
    }
  }

  if (caclulate() === change_due) {
    cid.reverse();
    returnObj.status = "CLOSED";
    returnObj.change = cid;
  } else if (caclulate() > cash) {
    //Start implementing the logic boi

    for (var i = 0; i < cidMoneyValue.length; i++) {
      billCount = Math.ceil(cidMoneyValue[i] / objValues[i]);
      if (change_due - cidMoneyValue[i] >= 0) {

        finalArr.push([objKeys[i], cidMoneyValue[i]]);
        change_due -= cidMoneyValue[i]

      } else if (change_due - cidMoneyValue[i] < 0) {
        if (cidMoneyValue[i] / objValues[i] === 1) {
          continue;

        } else {
          while (change_due - objValues[i] >= 0 && billCount >= 0) {
            change_due -= objValues[i];
            deduce += objValues[i]
            billCount--;
          }
          if (deduce != 0) {
            if (objKeys[i] === "PENNY") {
              finalArr.push([objKeys[i], deduce + 0.01]);              
            } else {
              finalArr.push([objKeys[i], deduce]);
            }
            deduce = 0;
          }
        }
      }
    }
    returnObj.status = "OPEN";
    returnObj.change = finalArr;
  } else {
    returnObj.status = "INSUFFICIENT_FUNDS";
    returnObj.change = change;
  }
  return returnObj;
}


// checkCashRegister(19.5, 20,
//   [["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]]);

// checkCashRegister(3.26, 100, 
// [["PENNY", 1.01], 
// ["NICKEL", 2.05], 
// ["DIME", 3.1], 
// ["QUARTER", 4.25], 
// ["ONE", 90], 
// ["FIVE", 55], 
// ["TEN", 20], 
// ["TWENTY", 60], 
// ["ONE HUNDRED", 100]]);

// checkCashRegister(19.5, 20,
//   [["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0]]);

// checkCashRegister(19.5, 20, 
// [["PENNY", 0.01], 
// ["NICKEL", 0], 
// ["DIME", 0], 
// ["QUARTER", 0], 
// ["ONE", 1], 
// ["FIVE", 0], 
// ["TEN", 0], 
// ["TWENTY", 0], 
// ["ONE HUNDRED", 0]]);

checkCashRegister(19.5, 20, 
[["PENNY", 0.5], 
["NICKEL", 0], 
["DIME", 0], 
["QUARTER", 0], 
["ONE", 0], 
["FIVE", 0], 
["TEN", 0], 
["TWENTY", 0], 
["ONE HUNDRED", 0]]);
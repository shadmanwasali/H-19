var twoSum = function(nums, target) {
  var newArr = [];
  var inc = 1;
    for(var i = 0; i < nums.length; i++){
      if(nums[i] + nums[i+inc] == target){
        newArr.push(i,i+inc)
      }else{
        inc++;
        
      }
    }
    return newArr;
};

twoSum([2, 7, 11, 15],18)
//twoSum([3, 2, 3],6)
"" + 1 + 0 = "10"  // adding a number to a string leads to the result being a string 
"" - 1 + 0 = -1 // empty string is converted to 0
true + false = 1 // true is conerted to 1 and false is converted to 0
!true = false // ! is the not operator, therefore not true is false
6 / "3" = 2 // string "3" is converted to number 3 because of division operator
"2" * "3" = 6 // both strings are converted to numbers because of multiplication operator
4 + 5 + "px" = "9px" // 4 + 5 is 9, then 9 + "px" is "9px
"$" + 4 + 5 = "$45" // "$" + 4 is "$4", then "$4" + 5 is "$45"
"4" - 2 = 2 // string "4" is converted to number 4 because of subtraction operator
"4px" - 2 = NaN // string "4px" cannot be converted to a number
" -9 " + 5 = " -9 5" // string " -9 " is not converted to a number because of the plus operator
" -9 " - 5 = -14 // string " -9 " is converted to number -9 because of the minus operator
null + 1 = 1 // null is converted to 0 because of addition operator
undefined + 1 = NaN // undefined cannot be converted to a number
undefined == null = true // undefined and null are equal in value but not in type
undefined === null = false // undefined and null are not equal in type
" \t \n" - 2 = -2 // string " \t \n" is converted to number 0 because of the minus operator

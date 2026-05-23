if (0) console.log('#1 zero is true') // will not print, 0 is falsy
if ("0") console.log('#2 zero is true') // will print, non-empty string is truthy
if (null) console.log('null is true') // will not print, null is falsy
if (-1) console.log('negative is true') // will print, number isn't 0 so it is truthy
if (1) console.log('positive is true') // will print, number isn't 0 so it is truthy
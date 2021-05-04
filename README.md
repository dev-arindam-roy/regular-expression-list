# regular-expression-list
A list of different types of regular expressions 


**Alpha character check (only accept A to Z / a to z, without space)**  
*Like - any name (first name, last name etc.)*
```javascript

    1. const expression = /^[A-Za-z]+$/
```

**Alpha character check (only accept A to Z / a to z and space)**  
*Like - any name (full name, shop name etc.)*
```javascript

    2. const expression = /^[A-Z a-z]+$/
```

**Numeric check (only accept numbers, digitis, space)**  
*Like - any numbers or digits*
```javascript

    3. const expression = /[0-9]+$/
```

**Numeric check (only accept numbers, digitis)**  
*Like - any numbers or digits (without space)*
```javascript

    4. const expression = /^[0-9]+$/
```

**Numeric check (only accept numbers, digitis)**  
*Like - any numbers or digits (without space)*
```javascript

    5. const expression = /^\d+$/
```

**10 digits number accept**  
*Like - any 10 digits mobile number*
```javascript

    6. const expression = /^[0-9]{10}$/
```

**10 - 12 digits number accept**  
*Like - any 10 to 12 digits mobile number*
```javascript

    7. const expression = /^[0-9]{10,12}$/
```

**10 digits number accept**  
*Like - any 10 digits mobile number*
```javascript

    8. const expression = /^\d{10}$/
```

**10 - 12 digits number accept**  
*Like - any 10 to 12 digits mobile number*
```javascript

    9. const expression = /^\d{10,12}$/
```

**Numeric with 2 decimal point but not starting with 0 & should grater than 0**  
*Like - any price, salary etc*
```javascript

    10. const expression = /^[1-9]\d{0,6}(\.\d{1,2})?$/
```

**Numeric with 2 decimal point accept 0 as value**  
*Like - any price, salary etc*
```javascript
    11. const expression = /^[0-9]\d{0,6}(\.\d{1,2})?$/
```

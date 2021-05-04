# regular-expression-list
A list of different types of regular expressions 

```javascript

    1. const alpha_without_space = /^[A-Za-z]+$/

    2. const alpha_with_space = /^[A-Z a-z]+$/
    
    3. const number_with_space = /[0-9]+$/

    4. const only_number = /^[0-9]+$/

    5. const only_number = /^\d+$/

    6. const 10_digit_number = /^[0-9]{10}$/

    7. const 10_12_digit_number = /^[0-9]{10,12}$/

    8. const 10_digit_number = /^\d{10}$/

    9. const 10_digit_number = /^\d{10,12}$/

    10. const number_with_decimal = /^[1-9]\d{0,6}(\.\d{1,2})?$/
    
    11. const number_with_decimal = /^[0-9]\d{0,6}(\.\d{1,2})?$/
```

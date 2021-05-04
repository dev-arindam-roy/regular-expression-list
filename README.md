# regular-expression-list
A list of different types of regular expressions 


**Alpha character check (only accept A to Z / a to z, without space)**
*Like - any name (first name, last name etc.)*
```javascript

    1. const expression = /^[A-Za-z]+$/
```

```javascript

    2. const expression = /^[A-Z a-z]+$/
```

```javascript

    3. const expression = /[0-9]+$/
```

```javascript

    4. const expression = /^[0-9]+$/
```

```javascript

    5. const expression = /^\d+$/
```

```javascript

    6. const expression = /^[0-9]{10}$/
```

```javascript

    7. const expression = /^[0-9]{10,12}$/
```

```javascript

    8. const expression = /^\d{10}$/
```

```javascript

    9. const expression = /^\d{10,12}$/
```

```javascript

    10. const expression = /^[1-9]\d{0,6}(\.\d{1,2})?$/
```

```javascript
    11. const expression = /^[0-9]\d{0,6}(\.\d{1,2})?$/
```

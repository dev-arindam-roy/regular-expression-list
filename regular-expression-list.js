const regularExpressions = [
    {
        expression: '^[A-Za-z]+$',
        description: 'Alpha character check (only accept A to Z / a to z, without space)',
        example: 'Like - any name (first name, last name etc.)'
    },
    {
        expression: '^[A-Z a-z]+$',
        description: 'Alpha character check (only accept A to Z / a to z and space)',
        example: 'Like - any name (full name, shop name etc.)'
    },
    {
        expression: '[0-9]+$',
        description: 'Numeric check (only accept numbers, digitis, space)',
        example: 'Like - any numbers or digits'
    },
    {
        expression: '^[0-9]+$',
        description: 'Numeric check (only accept numbers, digitis)',
        example: 'Like - any numbers or digits (without space)'
    },
    {
        expression: '^\\d+$',
        description: 'Numeric check (only accept numbers, digitis)',
        example: 'Like - any numbers or digits (without space)'
    },
    {
        expression: '^[0-9]{10}$',
        description: '10 digits number accept',
        example: 'Like - any 10 digits mobile number'
    },
    {
        expression: '^[0-9]{10,12}$',
        description: '10 - 12 digits number accept',
        example: 'Like - any 10 to 12 digits mobile number'
    },
    {
        expression: '^\\d{10}$',
        description: '10 digits number accept',
        example: 'Like - any 10 digits mobile number'
    },
    {
        expression: '^\\d{10,12}$',
        description: '10 - 12 digits number accept',
        example: 'Like - any 10 to 12 digits mobile number'
    },
    {
        expression: '^[1-9]\\d{0,6}(\\.\\d{1,2})?$',
        description: 'Numeric with 2 decimal point but not starting with 0 & should grater than 0',
        example: 'Like - any price, salary etc'
    },
    {
        expression: '^[0-9]\\d{0,6}(\\.\\d{1,2})?$',
        description: 'Numeric with 2 decimal point accept 0 as value',
        example: 'Like - any price, salary etc'
    }
];
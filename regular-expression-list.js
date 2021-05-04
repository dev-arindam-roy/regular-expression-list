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
];
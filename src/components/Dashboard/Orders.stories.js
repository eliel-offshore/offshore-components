import React from 'react'
import Orders, {createData} from './Orders';

export default {
    title: 'Components/Orders',
    
}
  
const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
];

const rowsNegative = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', -312.44),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', -866.99),
];

const rowsString = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', '312.44'),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', ''),
];

export const Default = args => <Orders {...args}  />;
Default.args = {
    initialState: rows,
}
Default.parameters = {
    jest: ['Orders.test.js'],
};

export const NegativeAmount = args => <Orders {...args}  />;
NegativeAmount.args = {
    initialState: rowsNegative,
}

export const invalidAmount = args => <Orders {...args}  />;
invalidAmount.args = {
    initialState: rowsString,
}
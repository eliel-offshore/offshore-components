import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Default } from './Orders.stories' 
import { createData } from './Orders'

const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
];

it('renders an orders list', () => {
    const { getByText, getAllByTestId } = render(<Default initialState={rows} />);

    getByText('Date')
    getByText('Name')
    getByText('Ship To')
    getByText('Payment Method')
    getByText('Sale Amount')

    const listItems = getAllByTestId('list-row')
    expect(listItems).toHaveLength(2)
});

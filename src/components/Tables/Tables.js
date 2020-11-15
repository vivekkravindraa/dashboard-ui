import React from 'react'
import TableOne from './TableOne';
import TableTwo from './TableTwo';

import '../../assets/styles/Tables.scss';

export default function Tables() {
    return (
        <div className="tablesContainer">
            <TableOne />
            <TableTwo />
        </div>
    )
}

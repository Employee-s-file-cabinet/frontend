import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { v4 as uuidv4 } from 'uuid';

export default function EmployeesList() {
  function createData(
    name,
    department,
    position,
    email,
    mobPhone,
    internalPhone
  ) {
    return { name, department, position, email, mobPhone, internalPhone };
  }

  const rows = Array(10)
    .fill()
    .map(() =>
      createData(
        'Абрамова Александра Андреевна',
        'Отдел материально-технического снабжения',
        'Торговый представитель',
        'aabramova@logoipsum.ru ',
        '+79093334455',
        '11-11'
      )
    );

  return (
    <div className="employees-list">
      <TableContainer component={Paper} className="employees-list__container">
        <Table className="employees-list__table">
          <TableHead>
            <TableRow>
              <TableCell align="right" className="employees-list__table-column">
                ФИО
              </TableCell>
              <TableCell align="right" className="employees-list__table-column">
                Отдел
              </TableCell>
              <TableCell align="right" className="employees-list__table-column">
                Должность
              </TableCell>
              <TableCell align="right" className="employees-list__table-column">
                Эл.почта
              </TableCell>
              <TableCell align="right" className="employees-list__table-column">
                Мобильный телефон
              </TableCell>
              <TableCell align="right" className="employees-list__table-column">
                Внутренний телефон
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={uuidv4()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className="employees-list__table-row"
              >
                <TableCell
                  component="th"
                  scope="row"
                  className="employees-list__table-row"
                >
                  {row.name}
                </TableCell>
                <TableCell
                  align="right"
                  className="employees-list__table-row-cell"
                >
                  {row.department}
                </TableCell>
                <TableCell
                  align="right"
                  className="employees-list__table-row-cell"
                >
                  {row.position}
                </TableCell>
                <TableCell
                  align="right"
                  className="employees-list__table-row-cell"
                >
                  {row.email}
                </TableCell>
                <TableCell
                  align="right"
                  className="employees-list__table-row-cell"
                >
                  {row.mobPhone}
                </TableCell>
                <TableCell
                  align="right"
                  className="employees-list__table-row-cell"
                >
                  {row.internalPhone}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

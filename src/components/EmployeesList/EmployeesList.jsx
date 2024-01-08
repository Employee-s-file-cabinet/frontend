import React from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function EmployeesList({ usersList }) {
  const navigate = useNavigate();

  const handleClick = (employeeData) => {
    // eslint-disable-next-line no-console
    console.log(employeeData.id);
    navigate(`/employee/${employeeData.id}`);
  };

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
            {usersList.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className="employees-list__table-row"
                onClick={() => handleClick(row)}
              >
                <TableCell
                  component="th"
                  scope="row"
                  className="employees-list__table-row-cell"
                >
                  {`${row.first_name} ${row.middle_name} ${row.last_name}`}
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
                  {row.department}
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
                  {row.phone_numbers.mobile}
                </TableCell>
                <TableCell
                  align="right"
                  className="employees-list__table-row-cell"
                >
                  {row.phone_numbers.mobile}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

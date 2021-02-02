import React, { Component, useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



import Paper from '@material-ui/core/Paper';
import { Button, Snackbar } from '@material-ui/core';

const EditableTable = (props) => {

    const { portfolioInfo } = props;

    const rows = Object.keys(portfolioInfo[0]);

    const [amounts, setAmounts] = useState([]);
    const [differences, setDifferences] = useState([]);
    const [fixedAmounts, setFixedAmounts] = useState([]);
    const [error, setError] = useState(false);
    const [calculated, setCalculated] = useState([]);


    const inputChange = (e, i) => {
        console.log(e, i);
        const values = amounts;
        values[i] = e.target.value;
        setAmounts(values);
        console.log(values);
    }

    const onButtonClick = () => {
        let error = false;
        console.log(amounts);
        amounts.map(a => { if (!a) error = true; });
        setError(error || amounts.length === 0);
        if (!error) {
            calculateAmounts();
        }
    };
    console.log('INFOR', portfolioInfo);

    const calculateAmounts = () => {

        const currentPercentages = [];
        const idealAmount = [];
        const total = amounts.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

        for (let i = 0; i < amounts.length; i++) {
            //console.log(amounts[i], 100, total);
            currentPercentages.push(amounts[i] * 100 / total);
            idealAmount.push(total / 100 * portfolioInfo[0][rows[i]]);
        }
        fixTotals(amounts, idealAmount);
        //console.log(currentPercentages, idealPercentages);
        setFixedAmounts(idealAmount);
    };

    const fixTotals = (current, expected) => {
        const difference = [];
        for (let i = 0; i < current.length; i++) {
            difference.push(expected[i] - current[i]);
        }
        setDifferences(difference);
    };

    

    const handleClose = () => {
        setError(false);
    };


    return <div className="editable-table">
        <Button variant="contained" color="primary" onClick={onButtonClick}>
            Re-calculate
            </Button>
        <TableContainer component={Paper}>
            <Table aria-label="Portfolio">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">Current amount</TableCell>
                        <TableCell align="right">Difference</TableCell>
                        <TableCell align="right">New Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row} $
                            </TableCell>
                            <TableCell align="right"><input type="text" value={amounts[i]} onChange={(e) => inputChange(e, i)} /></TableCell>
                            <TableCell align="right"><input type="text" value={differences[i]} disabled="disabled" /></TableCell>
                            <TableCell align="right"><input type="text" value={fixedAmounts[i]} disabled="disabled" /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Snackbar open={error} autoHideDuration={6000} onClose={handleClose} message=" Please fill out all fields">
        </Snackbar>
    </div>;
};

export default EditableTable;
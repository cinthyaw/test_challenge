import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const PortfolioTable = (props) => {

    const { data, selectedRow, symbol } = props;

    const getRowClass = (index) => {
        if (index + 1 === selectedRow) {
            return 'selected';
        }
    }

    return <div className="PortFolioTable">
        <TableContainer component={Paper}>
            <Table aria-label="Portfolio table">
                <TableHead className="table-header">
                    <TableRow>
                        <TableCell>Risk</TableCell>
                        <TableCell align="center">Stocks</TableCell>
                        <TableCell align="center">Bonds</TableCell>
                        <TableCell align="center">ETF</TableCell>
                        <TableCell align="center">Options</TableCell>
                        <TableCell align="center">Crypto</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, i) => (
                        <TableRow key={i} className={getRowClass(i)}>
                            <TableCell component="th" scope="row">
                                <strong>{data.length === 1 ? selectedRow : i + 1}</strong>
                            </TableCell>
                            <TableCell align="center">{row.Stocks}{symbol}</TableCell>
                            <TableCell align="center">{row.Bonds}{symbol}</TableCell>
                            <TableCell align="center">{row.ETF}{symbol}</TableCell>
                            <TableCell align="center">{row.Options}{symbol}</TableCell>
                            <TableCell align="center">{row.Crypto}{symbol}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer></div>;

}

export default PortfolioTable;
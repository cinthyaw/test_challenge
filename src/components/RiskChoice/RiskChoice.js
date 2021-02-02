import React, { Component, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from '@material-ui/core/DialogActions';
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { DialogContentText, Slider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const RiskChoice = (props) => {

    const { selectedRisk, change } = props;

    const handleChange = (event, value) => {
        change(value);
    }

    return (
        <div className="RiskChoice">
            <Slider
                defaultValue={5}
                value={selectedRisk}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="on"
                step={1}
                marks
                min={1}
                max={10}
                onChange={handleChange}
            />


        </div>
    );

}


export default RiskChoice;






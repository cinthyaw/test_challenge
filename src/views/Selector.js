import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RiskChoice from '../components/RiskChoice/RiskChoice';
import PortfolioTable from '../components/PortfolioTable/PortfolioTable';
import { Doughnut } from 'react-chartjs-2';

const Selector = () => {

    const selectedRisk = useSelector(state => state.risk.selectedRisk);

    const dispatch = useDispatch();

    const riskChange = (value) => {
        dispatch({ type: 'SET_RISK', payload: value });
    };

    // Hardcoded json
    const tableData = require('../data/portfolios.json');


    const getDoghnutData = () => {
        const labels = Object.keys(tableData.riskLevels[0]);
        const values = labels.map(l => tableData.riskLevels[selectedRisk - 1][l]);
        const data = {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#ff4411',
                    '#11ee1a'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#ff4411',
                    '#11ee1a'
                ]
            }]
        };
        return data;
    }

    return <div className="selector">
        <header className="headerBox">
            <h1>Select a risk level</h1>
            <p className="flow-text">Use the slider to select a risk level</p>
        </header>
        <div className="row">
            <div className="col s12 m6">
                <RiskChoice selectedRisk={selectedRisk} change={riskChange} />
                <PortfolioTable data={tableData.riskLevels} selectedRow={selectedRisk} />
            </div>
            <div className="col s12 m6">
                <Doughnut data={getDoghnutData()} />
            </div>
        </div>
    </div>;
}

export default Selector;
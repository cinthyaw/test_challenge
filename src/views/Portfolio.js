import React from 'react';
import { useSelector } from 'react-redux';
import PortfolioTable from '../components/PortfolioTable/PortfolioTable';
import EditableTable from '../components/EditableTable/EditableTable';
import List from '../components/List/List';

const Portfolio = () => {

    const selectedRisk = useSelector(state => state.risk.selectedRisk);
    const recommendations = useSelector(state => state.recommendation.recommendations);

    const portfoliosInfo = require('../data/portfolios.json');

    const portfolioRiskLevel = portfoliosInfo.riskLevels.filter((e, i) => i === selectedRisk - 1);

    const confirm = (values) => {
        console.log(values);
    }

    return <div className="portfolio">
        <header className="headerBox">
            <h1>Your portfolio</h1>
        </header>
        <div className="row">
            <div className="col">
                <p className="flow-text">Selected Risk Level: <strong>{selectedRisk}</strong></p>
                <PortfolioTable data={portfolioRiskLevel} selectedRow={selectedRisk} symbol={'%'} />
                <div className="row">
                    <div className="col">
                        <p className="flow-text">Please enter your portfolio information</p>
                        <EditableTable portfolioInfo={portfolioRiskLevel} onConfirm={confirm} />
                    </div>
                </div>
            </div>
            <div className="col">
                <h2>{recommendations && recommendations.length > 0 ? 'Recommendations' : '' }</h2>
                <List items={recommendations} />
            </div>
        </div>

    </div>
}

export default Portfolio;
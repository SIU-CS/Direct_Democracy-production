'use strict';

import React from 'react';
import rd3 from 'rd3';


let VoteGraph = React.createClass({
    propTypes: {
        selectedBill: React.PropTypes.object
    },

    render() {
        var PieChart = rd3.PieChart;
        let { vote } = this.props;
        var pieData = [
            {label: "Against", value: vote.against},
            {label: "For", value: vote.for}
        ];
        return (
                <div className="VoteGraph">
                <PieChart
            data={pieData}
            width={400}
            height={400}
            radius={100}
            innerRadius={50}
            showOuterLabels={true}
            showInnerLabels={false}
            sectorBorderColor="white">
                </PieChart>
                </div>
        );
    }
});

export default VoteGraph;

/*
 * PieCharProps
 *
 *
 * data   array   []
 * radius   number
 * cx   number
 * cy   number
 * labelTextFill  string
 * valueTextFill  string
 * valueTextFormatter   func  (val) =>${val}%``
 * colors   func  d3.scale.category20c()
 * colorAccessor  func  (d, idx) => idx
 * title  string  ''
 * showInnerLabels  bool
 * showOuterLabels  bool
 * sectorBorderColor  string
 * hoverAnimation   bool  true
 *
 */


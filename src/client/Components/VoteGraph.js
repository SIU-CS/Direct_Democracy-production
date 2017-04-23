import React from 'react';
import rd3 from 'rd3';

class VoteGraph extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      for: this.props.for,
      against:this.props.against
    };
	  this.render = this.render.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({for: this.nextProps.for});
    this.setState({against: this.nextProps.against});
  }


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

  render() {
    var PieChart = rd3.PieChart;
    var pieData = [
      {label: "Against", value: this.state.against},
      {label: "For", value: this.state.for}
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
}

export default VoteGraph;
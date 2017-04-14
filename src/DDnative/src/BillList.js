import React, { Component } from 'react';
import {ListView, StyleSheet, View, Button, Text} from 'react-native';

const onButtonPress = () => {
	
};

class BillList extends Component {
	constructor(props) {
      super(props);
      const data = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
         dataSource: data.cloneWithRows([
             'Bill One', 'Bill Two', 'Bill Three', 'Bill Four', 'Bill Five', 'Bill Six', 'Bill One', 'Bill Two', 'Bill Three', 'Bill Four', 'Bill Five', 'Bill Six', 'Bill One', 'Bill Two', 'Bill Three', 'Bill Four', 'Bill Five', 'Bill Six', 'Bill One', 'Bill Two', 'Bill Three', 'Bill Four', 'Bill Five', 'Bill Six', 'Bill One', 'Bill Two', 'Bill Three', 'Bill Four', 'Bill Five', 'Bill Six', 'Bill One', 'Bill Two', 'Bill Three', 'Bill Four', 'Bill Five', 'Bill Six'
         ])
      };
	}
  render() {
    return (
      <View style={styles.container}>
	    <View style={styles.burgerContainer}>
			<Button
				title="Burger!"
				onPress={onButtonPress}
				color='black'/>
		</View>
		
		<ListView dataSource={this.state.dataSource} renderRow={(rowData) => <Text>{rowData}</Text>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  burgerContainer: {
	  width: 50,
  },
  updownContainer: {
	  justifyContent: 'space-around',
	  flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#3498db',
      padding: 20,
  },
});
export default BillList;

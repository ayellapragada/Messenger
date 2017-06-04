import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { searchUsers } from './../../utils/user_api_util.js';
import Result from './result.js';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {query: "", results: {}};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    const { query } = this.state;
    this.setState({query: val})
    searchUsers(val)
      .then(res => this.setState({results: res}))
  }

  render() {
    const { query, results } = this.state;
    const resultsArray = Object.values(results);

    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Button 
            style={styles.button}
            title="Back"
            onPress={() => { Actions.pop() }}
          />
          <Text style={styles.headerText}>
            Search
          </Text>
        </View>
        <TextInput 
          style={styles.input}
          underlineColorAndroid="transparent"
          value={query}
          onChangeText={val => {this.handleChange(val)}}
          placeholder="Search Fafbook!"
        />
        <FlatList 
          style={styles.list}
          data={resultsArray}
          keyExtractor={res => res.id}
          renderItem={res => <Result {...res} /> }
        />
    </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: "space-between"
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 20,
  },
  input: {
    textAlign: 'center',
    fontSize: 20,
  },
  list: {
  },
});

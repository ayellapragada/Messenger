import React from 'react';
import { Text } from 'react-native';

const Home = ({currentUser}) => {

  return (
    <Text>
      {currentUser.full_name}
    </Text>
  );
};

export default Home;

import React from 'react';
import { View } from 'react-native';

import { Topo, Painel, Resultado } from './components';

export default props => (
    <View>
      <Topo />
      <Resultado />
      <Painel />
    </View>
);


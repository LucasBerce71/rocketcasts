import 'react-native';
import React from 'react';
import Text from 'components/Text';

import renderer from 'react-test-renderer';

describe('Text component render correctly', () => {
  it('render correctly', () => {
    const tree = renderer.create(
      <Text>.</Text>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

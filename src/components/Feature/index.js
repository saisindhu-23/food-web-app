import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Your favourite dishes</h1>
      <p>Explore your choices and get it.</p>
      <FeatureButton>Explore Restaurants</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;

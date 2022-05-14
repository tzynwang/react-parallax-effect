import React, { memo } from 'react';
import { faker } from '@faker-js/faker';

function Section01(): React.ReactElement {
  return (
    <div>
      <div>{faker.lorem.sentence()}</div>
      <div>{faker.lorem.sentences()}</div>
      <div>
        <img src={faker.image.cats()} />
      </div>
    </div>
  );
}

export default memo(Section01);

import React, { memo } from 'react';
import { faker } from '@faker-js/faker';
import Image from '@Components/Base/Image';

function Section01(): React.ReactElement {
  return (
    <div>
      <div>{faker.lorem.sentence()}</div>
      <div>{faker.lorem.sentences()}</div>
      <Image
        src="https://images.rawpixel.com/image_1300/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTg1Njk5NC13aWtpbWVkaWEtaW1hZ2Uta293ZHVhZ2kuanBn.jpg"
        inViewport={true}
      />
    </div>
  );
}

export default memo(Section01);

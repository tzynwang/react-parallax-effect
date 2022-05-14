import React, { memo, forwardRef } from 'react';
import { faker } from '@faker-js/faker';
import { styled } from '@mui/material/styles';
import Image from '@Components/Base/Image';

const Base = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));
const CenterContainer = styled('div')(() => ({
  flex: '1 1 50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Section02 = forwardRef<HTMLDivElement>((props, ref) => {
  // Main
  return (
    <Base ref={ref} className="SectionBase">
      <CenterContainer>
        <Image src={faker.image.cats(640, 480, true)} />
      </CenterContainer>
      <CenterContainer>
        <div>{faker.lorem.paragraphs(2)}</div>
      </CenterContainer>
    </Base>
  );
});

export default memo(Section02);

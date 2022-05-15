import React, { memo, forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import Image from '@Components/Base/Image';
import useScrollPercentage from '@Hooks/useScrollPercentage';
import type { Section02Props } from './types';

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

const Section02 = forwardRef<HTMLDivElement, Section02Props>((props, ref) => {
  // States
  const { topPercentage, bottomPercentage } = props;
  const currentScrollPercentage = useScrollPercentage();
  const inView =
    topPercentage < currentScrollPercentage &&
    bottomPercentage > currentScrollPercentage;

  // Main
  return (
    <Base ref={ref} className="SectionBase">
      <CenterContainer>
        <Image src="https://picsum.photos/640/480" inView={inView} />
      </CenterContainer>
      <CenterContainer>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolores
          laudantium itaque nulla eaque necessitatibus atque sit ipsa fugiat,
          est qui sequi eius voluptatibus tenetur quidem reiciendis soluta
          deserunt sunt maiores voluptatum? Cum, laboriosam aut! Cupiditate
          ipsam qui optio tenetur possimus assumenda? Fugit voluptas quisquam
          modi laborum minus eveniet exercitationem?
        </div>
      </CenterContainer>
    </Base>
  );
});

export default memo(Section02);

import React from 'react';

import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  MenuItemBackgroundImage,
  MenuItemContainer,
  MenuItemContent,
  MenuItemContentSubtitle,
  MenuItemContentTitle,
} from './MenuItem.styles';

interface IProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

const MenuItem: React.FC<IProps> = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <MenuItemContainer
      className={`${size}`}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
      <MenuItemBackgroundImage
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <MenuItemContent>
        <MenuItemContentTitle>{title.toUpperCase()}</MenuItemContentTitle>
        <MenuItemContentSubtitle>SHOP NOW</MenuItemContentSubtitle>
      </MenuItemContent>
    </MenuItemContainer>
  );
};

export default MenuItem;

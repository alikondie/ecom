import React from 'react';
import './MenuItem.styles.scss';

interface IProps {
  title: string;
  imageUrl: string;
  id: number;
  size?: string;
}

const MenuItem: React.FC<IProps> = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;

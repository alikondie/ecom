import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './LoadingSpinner.styles';

interface ILoadingSpinnerProps {
  isLoading: boolean;
  isError: string | null | undefined;
}

const Loader: React.FC = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({
  isLoading,
  isError,
  children,
}) => {
  if (isLoading) return <Loader />;
  if (isError) return <h1>Error Occured :(</h1>;

  return <>{children}</>;
};

export default LoadingSpinner;

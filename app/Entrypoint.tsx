import React, {lazy, Suspense} from 'react';
const RootNavigationComponent = lazy(
  () => import('./navigation/RootNavigation'),
);
const Entrypoint = () => {
  return (
    <>
      <Suspense>
        <RootNavigationComponent />
      </Suspense>
    </>
  );
};

export default Entrypoint;

// const styles = StyleSheet.create({});

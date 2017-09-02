import invariant from 'invariant';

function intlSelector(state) {
  const reducer = state.intl;

  invariant(
    reducer,
    'The "intl" reducer is not found. Ensure that it is properly configured'
  );

  return reducer || {};
}

export default intlSelector;

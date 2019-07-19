import React from 'react';

const FakeTransition = jest.fn(({ children }) => children);

const FakeCSSTransition = jest.fn(props =>
  props.in ? <FakeTransition>{props.children}</FakeTransition> : null
);

module.exports = { CSSTransition: FakeCSSTransition };

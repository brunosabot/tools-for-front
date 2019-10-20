import React from "react";

export default function asyncComponent(getComponent) {
  class AsyncComponent extends React.PureComponent {
    static Component = null;

    constructor(props) {
      super(props);

      this.state = {
        Component: AsyncComponent.Component
      };
    }

    async componentDidMount() {
      const { Component: C } = this.state;

      if (!C) {
        const Component = await getComponent();
        AsyncComponent.Component = Component;
        this.setState(() => ({ Component }));
      }
    }

    render() {
      const { Component } = this.state;

      if (Component) {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Component {...this.props} />;
      }

      return null;
    }
  }
  return AsyncComponent;
}

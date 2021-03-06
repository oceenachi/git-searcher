import React from "react";

//Custom error boundary to display error state when there is an error
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <p>Error page go back to home</p>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;
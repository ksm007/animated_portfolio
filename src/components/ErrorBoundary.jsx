import React from "react";
// import { HiExclamationTriangle } from "react-icons";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Portfolio Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center p-8 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-700">
          {/* <HiExclamationTriangle className="text-4xl text-yellow-500 mb-4" /> */}
          <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300 mb-2">
            Something went wrong
          </h3>
          <p className="text-muted-foreground text-center mb-4">
            {this.props.fallbackMessage ||
              "Unable to load this content. Please try refreshing the page."}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

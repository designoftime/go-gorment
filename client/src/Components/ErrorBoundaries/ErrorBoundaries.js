import React from "react";

class ErrorBoundaires extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, errorName: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorName: error.toString()};
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center row">
              <div className=" col-md-6 mt-5">
                <p className="fs-3">
                  {" "}
                  <span className="text-danger">Opps!</span> Page not found.
                </p>
                <p className="lead">Internal Error Occurs</p>
                <p className="m-2 p-2">{this.state.errorName}</p>
                <a href="index.html" className="btn btn-primary">
                  Go Home
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }
  
    return this.props.children;
  }
}

export default ErrorBoundaires;

import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { children } = this.props;
    const { errorInfo, error } = this.state;

    return errorInfo ? (
      <Paper sx={{ padding: '10px' }}>
        <Typography>Модуль сломался...</Typography>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          <summary>Ошибка</summary>
          {error && error.toString()}
          <br />
          {errorInfo.componentStack}
        </details>
      </Paper>
    ) : children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBoundary;

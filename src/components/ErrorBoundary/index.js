import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props);
    this.state = {error: null, errorInfo: null};
  }
  
  componentDidCatch (error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }
  
  render () {
    return this.state.errorInfo ? (
      <Paper sx={{padding: '10px'}}>
        <Typography>Модуль сломался...</Typography>
        <details style={{whiteSpace: 'pre-wrap'}}>
          <summary>Ошибка</summary>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      </Paper>
    ) : (
      this.props.children
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
}

export default ErrorBoundary;

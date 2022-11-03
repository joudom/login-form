import React from 'react';

class LoginMessage extends React.Component {
    render() {
        // Destructure the `message` and `isValid` from the props Object.
        const { message, isValid } = this.props;
        
        if (message) {
            return (
                // Show different messages based on `isValid`
                <h1 className={ isValid ? 'success' : 'error'}>
                    {message}
                </h1>
            );
        } else {
            // Rendering `null` tells React to show nothing.
            return null;
        }
    }
}

export default LoginMessage;
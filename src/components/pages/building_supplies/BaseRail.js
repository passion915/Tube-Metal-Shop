import React from 'react';

class BaseRail extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isCity: false };
    }
    
    

    componentDidMount() {
        
    }

    
    render() {
        return (
            <div>
                <h2>Base Rail Page</h2>
            </div>
        )
    }
}
 

export default BaseRail;

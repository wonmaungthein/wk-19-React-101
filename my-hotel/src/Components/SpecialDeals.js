import React from 'react';
import { Component } from 'react';

const Deals = {
    'seven days': '300',
    'three days': '230',
    'one day': '105'
};


class SpecialDeals extends Component {
    render() {
        return (
            <div>
                {/* <p> {'seven days','three days', 'one day'} = Deals </p> */}
                <p> For Seven days (£ {Deals["seven days"]})</p>
                <p> For three days ( £ {Deals["three days"]}) </p>
                <p> For one day ( £ {Deals["one day"]}) </p>
            </div>
        )
    }
}

export default SpecialDeals;

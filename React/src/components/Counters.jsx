import React, { Component } from 'react';
import Counter from './counter';

export default class extends Component {
    render() {
        const{onReset, onDelete, counters, onIncrement} = this.props;
        return (<div>
            <button className="btn btn-primary btn-sm m2" onClick={onReset}>Reset</button>
            {counters.map(counter =>
                <Counter key={counter.id} value={counter.value} counter={counter} id={counter.id}
                    onDelete={onDelete} onIncrement={onIncrement}>
                    <h4>Counter #{counter.id}</h4>
                </Counter>
            )
            }
        </div>);
    }
}
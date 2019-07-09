import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/Counters';


export default class App extends Component {
    state = {
        counters: [
            { id: 1, value: 3 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    }

    handleReset = () => {
        let counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    handleDelete = (counterId) => {
        console.log("Delete Called", counterId);
        let counters = this.state.counters.filter(c => c.id != counterId);
        this.setState({ counters });
    };

    handleIncrement = counter => {
        console.log(counter);
        let counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
        console.log(this.state.counters[0]);
    };
    render() {
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }

}
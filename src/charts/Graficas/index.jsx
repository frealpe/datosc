
import { Component } from 'react';
import draw from './graf';

export default class PieChart extends Component{

    componentDidMount() {
        draw(this.props);
    }

    componentDidUpdate(preProps) {
        draw(this.props);
    }
    render() {
        return (
            <div> </div>
        )
    }
}
import React, {Component} from 'react';
import { Table, Badge } from 'reactstrap';
import './ScheduleTable.css';

class ScheduleTable extends Component {
    render() {
        return (
            <div className='Table'>
            <Table bordered dark>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Batman</th>
                        <th>Interstellar</th>
                        <th>Avengers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td><Badge color='info'>13:00</Badge><Badge color='info'>18:00</Badge><Badge color='info'>20:30</Badge></td>
                        <td><Badge color='info'>14:00</Badge><Badge color='info'>16:30</Badge><Badge color='info'>21:00</Badge></td>
                        <td><Badge color='info'>13:15</Badge><Badge color='info'>17:00</Badge><Badge color='info'>20:00</Badge></td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td><Badge color='info'>13:00</Badge><Badge color='info'>18:00</Badge><Badge color='info'>20:30</Badge></td>
                        <td><Badge color='info'>14:00</Badge><Badge color='info'>16:30</Badge><Badge color='info'>21:00</Badge></td>
                        <td><Badge color='info'>13:15</Badge><Badge color='info'>17:00</Badge><Badge color='info'>20:00</Badge></td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td><Badge color='info'>13:00</Badge><Badge color='info'>18:00</Badge><Badge color='info'>20:30</Badge></td>
                        <td><Badge color='info'>14:00</Badge><Badge color='info'>16:30</Badge><Badge color='info'>21:00</Badge></td>
                        <td><Badge color='info'>13:15</Badge><Badge color='info'>17:00</Badge><Badge color='info'>20:00</Badge></td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td><Badge color='info'>13:00</Badge><Badge color='info'>18:00</Badge><Badge color='info'>20:30</Badge></td>
                        <td><Badge color='info'>14:00</Badge><Badge color='info'>16:30</Badge><Badge color='info'>21:00</Badge></td>
                        <td><Badge color='info'>13:15</Badge><Badge color='info'>17:00</Badge><Badge color='info'>20:00</Badge></td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td><Badge color='info'>13:00</Badge><Badge color='info'>18:00</Badge><Badge color='info'>20:30</Badge></td>
                        <td><Badge color='info'>14:00</Badge><Badge color='info'>16:30</Badge><Badge color='info'>21:00</Badge></td>
                        <td><Badge color='info'>13:15</Badge><Badge color='info'>17:00</Badge><Badge color='info'>20:00</Badge></td>
                    </tr>
                    <tr>
                        <td>Weekends</td>
                        <td><Badge color='danger'>13:00</Badge><Badge color='danger'>15:30</Badge><Badge color='danger'>18:00</Badge><Badge color='danger'>20:00</Badge><Badge color='danger'>22:00</Badge></td>
                        <td><Badge color='danger'>12:00</Badge><Badge color='danger'>14:30</Badge><Badge color='danger'>17:00</Badge><Badge color='danger'>19:30</Badge><Badge color='danger'>22:15</Badge></td>
                        <td><Badge color='danger'>13:15</Badge><Badge color='danger'>17:00</Badge><Badge color='danger'>19:30</Badge><Badge color='danger'>21:00</Badge><Badge color='danger'>22:45</Badge></td>
                    </tr>
                </tbody>
            </Table>
            </div>
        );
    }
}

export default ScheduleTable;
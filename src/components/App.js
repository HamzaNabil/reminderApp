import React , {Component} from 'react'
import {connect } from 'react-redux'
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from './reminder.png'
import { add_Reminder , remove_Reminder , clear_Reminder } from '../actions'
class App extends Component {
    state = {
        text: '',
        date: new Date()
    }


    render_Reminders = () => {
        const {reminders} =  this.props ;
        return (
            <ul className="list-group">
                {
                     reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className='list-group-item'>
                                <div>{reminder.text}</div>
                                <div>{moment(new Date(reminder.date)).fromNow()}</div>
                                <div className="closeIcon btn btn-danger" onClick={() => this.props.remove_Reminder(reminder.id)}>X</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
       
    }

    render() {
        return (
            <div className="App">
                <img src={logo} />
                <div className="reminder-title">
                    <h2>What Should U Do ?</h2>
                </div>
                <input 
                    className="form-control"
                    type="text" 
                    value={this.state.text}
                    placeholder="Enter What U think ... ?"
                    onChange={(e) => this.setState({text: e.target.value})}
                />
                <DatePicker
                    className="form-control"
                    value={this.state.date}
                    placeholderText="Enter Date"
                    selected={this.state.date}
                    onChange={(date) => {this.setState({date})}}
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                />
                <button 
                    onClick={ () => {
                        this.props.add_Reminder(this.state.text , this.state.date)
                        this.setState({text: '' , date: ''})
                    }}
                    className="btn btn-primary btn-block"
                >
                    Add Reminder
                </button>
                {this.render_Reminders()}
                <button 
                    onClick ={ () => this.props.clear_Reminder()}
                    className="btn btn-danger btn-block clearReminder"
                >
                    Clear Reminders
                </button>
            </div>
        )
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         clear_Reminder : () => dispatch(clear_Reminder())
//     }
// }

// function mapStateToProps(state) {
//     return {
//         reminders: state
//     }
// }

export default connect(state => {
    return {
        reminders: state
    }
} , {
    add_Reminder,
    remove_Reminder,
    clear_Reminder
}
)(App)
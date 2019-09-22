import {ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDERS} from '../types'
import { bake_cookie, read_cookie }  from 'sfcookies'
const reminders = (state=[] , action) => {
    let reminders = null;

    state = read_cookie('reminders')

    if(action.type === ADD_REMINDER){
        reminders = [...state , {text: action.text , date:action.date , id: Math.random()}]
        bake_cookie('reminders', reminders)

        console.log("from reducer ",reminders)
        return reminders
    } 
    else if ( action.type === REMOVE_REMINDER) {
        reminders = state.filter(reminder => reminder.id !== action.id)
        bake_cookie('reminders', reminders)
        console.log("from reducer ",reminders)
        return reminders
    }
    else if ( action.type === CLEAR_REMINDERS) {
        reminders = []
        bake_cookie('reminders', reminders)
        console.log("from reducer ",reminders)
        return reminders
    }
    
    else {
        return state
    }
}

export default reminders
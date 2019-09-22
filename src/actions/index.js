import {ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDERS} from '../types'

export const add_Reminder = (text,date) => {
    const action = {
        type: ADD_REMINDER ,
        text,
        date
    }
    console.log("Add" , action)
    return action
} 

export const remove_Reminder = (id) => {
    const action = {
        type: REMOVE_REMINDER,
        id
    }

    console.log("Remove", action)
    return action
}

export const clear_Reminder = () => {
    const action = {
        type: CLEAR_REMINDERS
    }
    return action
}
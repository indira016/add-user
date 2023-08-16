import React, { useState } from 'react'
import classes from './AddUser.module.css'
import Card from './ui/Card'
import Button from './ui/Button'
import ErrorModul from './ui/ErrorModul'

const AddUser = (props) => {
    const [username, setUserName] = useState('')
    const [age, setUserAge] = useState('')
    const [error, setError] = useState(null)
  

    const usernameChangeHandler = (e) => {
        setUserName(e.target.value)
    }
    const ageChangeHandler = (e) => {
        setUserAge(e.target.value)
    }
    const sumbitHandler = (e) => {
        e.preventDefault()
        if (username.trim().length === 0 || age.length == 0) {
            setError({
                title: 'Error',
                messege: 'Форма не должен быть пустым'
            })
            return
        }
        if (age < 5) {
            setError({
                title: "Error",
                messege: "возраст не подходит"
            })
            return
        }

        props.onAdd(username, age)


        setUserName("")
        setUserAge("")
    }
    const closeModulError = () => {
        setError(null)
    }
    return (
        <React.Fragment>
            {error && <ErrorModul title={error.title} messege={error.messege} onClick={closeModulError} />}
            <Card className={classes.input}>
                <form onSubmit={sumbitHandler}>
                    <label htmlFor='name '>User name</label>
                    <input value={username} id='name' type="text" onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age</label>
                    <input value={age} id='age' type="number" onChange={ageChangeHandler} />
                    <Button type='submit'>Add user</Button>
                </form>
            </Card>
        </React.Fragment>
    )
}
export default AddUser
import React, { Fragment, useState } from 'react'
import Card from './ui/Card'
import classes from './UserList.module.css'
import Button from './ui/Button'
import DeleteModul from './ui/DeleteModul'


const UserList = (props) => {


    const [filteredUser, setFilteredUser] = useState([])
    const [delet, setDelete] = useState(null)


    const deleteHandler = (e) => {
        setDelete({
            title: "delete",
            messege: 'Точно хотите удалить?'
        })
        const buttonId = e.target.id
        console.log(buttonId);
        const users = props.users.filter((el) => {
            return el.id !== buttonId
        })
        setFilteredUser([...users])
    }

    const confirmHandler = (e) => {
        if (e.target.type === 'button') {
            props.onDelete(filteredUser)
            console.log(filteredUser);
        }
        setDelete(null)
    }

    const cancelHandler = () => {
        setDelete(null)
    }

    return (<Fragment>
        {delet && <DeleteModul title={delet.title} messege={delet.messege} onClick={confirmHandler} cancelHandler={cancelHandler} />}
        <Card className={classes.users}>
            <ul >
                {props.users.map(user => (
                    <li key={user.id} >{user.username} {user.age}
                        <Button id={user.id} onClick={deleteHandler}  >Delete</Button>
                    </li>
                ))}
            </ul>
        </Card>
    </Fragment>
    )
}

export default UserList
import React, { Fragment } from 'react'
import Card from './Card'
import Button from './Button'
import classes from './ErrorModul.module.css'


const DeleteModul = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <main className={classes.content}>
          <p>{props.messege}</p>
        </main>
        <footer className={classes.actions} >

          <Button onClick={props.onClick} >Delete</Button>


          <Button onClick={props.cancelHandler}>Cancel</Button>

        </footer>
      </Card>
    </Fragment>
  )
}

export default DeleteModul
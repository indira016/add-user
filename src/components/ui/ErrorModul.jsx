import React from 'react'
import Card from './Card'
import classes from './ErrorModul.module.css'
import Button from './Button'

const ErrorModul = (props) => {
  return (
    <div >
        <div className={classes.backdrop} onClick={props.onClick}/>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <main className={classes.content}>
                <p>{props.messege}</p>
            </main>
            <footer className={classes.actions} ></footer>
            <Button onClick={props.onClick}>OK</Button>
        </Card>
    </div>
  )
}

export default ErrorModul
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import classes from './ErrorModul.module.css'
import Button from './Button'


 
const Bagdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />
}
const ModalLoveray = (props) => {

  return (
    <Fragment >

      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <main className={classes.content}>
          <p>{props.messege}</p>
        </main>
        <footer className={classes.actions} >
        <Button onClick={props.onClick}>OK</Button>
        </footer>
      </Card>
    </Fragment>
  )
}
const ErrorModul = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Bagdrop onClick={props.onClick} />,
        document.getElementById('bagdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalLoveray title={props.title} messege={props.messege} onClick={props.onClick} />,
        document.getElementById('modal-root')
      )}
    </Fragment>)
}

export default ErrorModul
import css from './fotter.module.scss'

export const Footer = (props) => {
    return (
        <footer className={css.footer}>
            <span>Active task: {props.activeTaskCount}</span>
            <span>Finished task: {props.finishedTaskCount}</span>
        </footer>
    )
}

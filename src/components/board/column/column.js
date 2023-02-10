import css from './column.module.scss';
export const Column = (props) => {
    return (
        <div className={css.column}>
            <div className={css.header}>{props.name}</div>
            <div className={css.wrapper}>
                <div className={css.body}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

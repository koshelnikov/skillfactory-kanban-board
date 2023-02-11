import css from './card.module.scss'
import {IconRemove} from "../../../icons/icon-remove";
import {useTasks} from "../../../../hooks/tasks/use-tasks";

export const Card = (props) => {
    const {removeTask} = useTasks()

    return (
        <div className={css.card}>
            <span>{props.name}</span>
            <div className={css.remove} onClick={() => removeTask(props.id)}>
                <IconRemove/>
            </div>
        </div>
    )
}

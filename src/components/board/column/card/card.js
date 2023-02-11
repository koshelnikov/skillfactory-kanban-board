import css from './card.module.scss'
import {IconRemove} from "../../../icons/icon-remove";
import {useTasks} from "../../../../hooks/tasks/use-tasks";
import {useNavigate} from "react-router-dom";

export const Card = (props) => {
    const {removeTask} = useTasks()
    const navigate = useNavigate();

    return (
        <div className={css.card} onClick={() => navigate(`/tasks/${props.id}`)}>
            <span>{props.name}</span>
            <div className={css.remove} onClick={(e) =>
            {
                removeTask(props.id);
                e.stopPropagation();
            }}>
                <IconRemove/>
            </div>
        </div>
    )
}

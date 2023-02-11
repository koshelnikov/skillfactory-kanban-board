import {Link} from "react-router-dom";
import css from './card.module.scss';
import {IconRemove} from "../../icons/icon-remove";
import {useNavigate} from 'react-router-dom'

export const Card = () => {
    const navigate = useNavigate();
    return (
        <div className={css.card}> Card
            <div className={css.close} onClick={() => navigate(-1)}>
                <IconRemove/>
            </div>
        </div>
    )
}

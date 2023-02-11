import css from './card.module.scss';
import {useNavigate} from 'react-router-dom'
import {Button} from "../../buttons/button/button";
import {IconRemove} from "../../icons/icon-remove";

export const Card = () => {
    const navigate = useNavigate();
    return (
        <div className={css.card}> Card
            <Button className={css['button-close']} onClick={() => navigate(-1)}>
                <IconRemove/>
            </Button>
        </div>
    )
}

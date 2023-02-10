import css from './column.module.scss';
import Scrollbars from "react-custom-scrollbars-2";
import {useLayout} from "../../../hooks/layout/use-layout";
export const Column = (props) => {
    const {mainContentHeight} = useLayout();

    return (
        <div className={css.column}>
            <div className={css.header}>{props.name}</div>
            <div className={css.wrapper}>
                <div className={css.body}>
                    {props.children && <Scrollbars style={{height: mainContentHeight}} autoHide>
                        {props.children}

                    </Scrollbars>
                    }
                </div>
            </div>
        </div>
    )
}

import {Column} from "./column/column";
import css from './board.module.scss';
import {Card} from "./column/card/card";

export const Board = () => {
    return (
        <div className={css.board}>
            <Column name={'backlog'}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Column>
            <Column name={'ready'}/>
            <Column name={'in progress'}/>
            <Column name={'finished'}/>
        </div>
    )
}

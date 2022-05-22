import React, {FC} from 'react';
import {FilterValuesType} from "./App";
import {Button, ButtonGroup} from "@material-ui/core";

type ButtonsBlockPropsType = {
    filter: FilterValuesType
    setFilterValue: (filter: FilterValuesType) => () => void
}

const ButtonsBlock: FC<ButtonsBlockPropsType> = (
    {
        filter,
        setFilterValue
    }) => {
    return (
        <ButtonGroup
            fullWidth
            variant={"contained"}
            size={"small"}
        >
            <Button
                color={filter === "all" ? "secondary": "primary"}
                onClick={setFilterValue("all")}
            >All
            </Button>
            <Button
                color={filter === "active" ? "secondary": "primary"}
                onClick={setFilterValue("active")}
            >Active
            </Button>
            <Button
                color={filter === "completed" ? "secondary": "primary"}
                onClick={setFilterValue("completed")}
            >Completed
            </Button>
        </ButtonGroup>
    );
};

export default ButtonsBlock;

{/*<Button*/}
{/*    active={filter === "all"}*/}
{/*    title={"Все"}*/}
{/*    onClickHandler={setFilterValue("all")}*/}
{/*/>*/}
{/*<Button*/}
{/*    active={filter === "active"}*/}
{/*    title={"В работе"}*/}
{/*    onClickHandler={setFilterValue("active")}*/}
{/*/>*/}
{/*<Button*/}
{/*    active={filter === "completed"}*/}
{/*    title={"Выполнено"}*/}
{/*    onClickHandler={setFilterValue("completed")}*/}
{/*/>*/}
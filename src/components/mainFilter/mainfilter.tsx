import React from "react";
import classes from "../index.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";

const Mainfilter: React.FC = () => {
  const buttonClassCheap = [classes["main__button-cheap"]];
  const buttonClassFast = [classes["main__button-fast"]];

  const { option } = useTypedSelector((state) => state.mainFilterReducer);
  const { mainFilterAction } = useActions();

  if (option) {
    buttonClassCheap.push(classes.active);
    buttonClassFast.push(classes.inactive);
  }
  if (!option) {
    buttonClassFast.push(classes.active);
    buttonClassCheap.push(classes.inactive);
  }

  return (
    <div className={classes["main_filter"]}>
      <input
        onClick={() => mainFilterAction("самый дешевый")}
        className={buttonClassCheap.join(" ")}
        type="button"
        value="самый дешевый"
      />
      <input
        onClick={() => mainFilterAction("самый быстрый")}
        className={buttonClassFast.join(" ")}
        type="button"
        value="самый быстрый"
      />
    </div>
  );
};

export default Mainfilter;

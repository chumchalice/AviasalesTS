import React, { useEffect } from "react";
import classes from "../index.module.scss";
import { Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { sideFilter } from "../../store/action-creators/sideFilterActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { CheckboxChangeEvent } from "antd/es/checkbox";
// import { useEffect } from "react";
// import { userAction } from "../../types/sideFilter";

const CheckboxGroup = Checkbox.Group;

const defaultOptions = [
  "Без пересадок",
  "1 пересадка",
  "2 пересадки ",
  "3 пересадки",
];

const Sidefilter: React.FC = () => {
  const { all, options } = useTypedSelector((state) => state.sideFilterReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sideFilter(defaultOptions, true, false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOptions = (value: CheckboxValueType[]) => {
    dispatch(
      sideFilter(
        value,
        value.length === defaultOptions.length,
        !!value.length && value.length < defaultOptions.length
      )
    );
  };
  const handleFilterAll = (e: CheckboxChangeEvent) => {
    dispatch(
      sideFilter(
        e.target.checked ? defaultOptions : [],
        e.target.checked,
        false
      )
    );
  };

  return (
    <aside className={classes.filter}>
      <div className={classes["filter_content-wrapper"]}>
        <h1 className={classes["filter_title"]}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
        <Checkbox checked={all} onChange={handleFilterAll}>
          Все
        </Checkbox>
        <CheckboxGroup
          className={classes["side-filter__list"]}
          options={defaultOptions}
          value={options}
          onChange={handleOptions}
        ></CheckboxGroup>
      </div>
    </aside>
  );
};

// const mapStateToProps = (state) => {
//   const { sideFilterReducer } = state;
//   return {
//     all: sideFilterReducer.all,
//     customOptions: sideFilterReducer.options,
//   };
// };

export default Sidefilter;

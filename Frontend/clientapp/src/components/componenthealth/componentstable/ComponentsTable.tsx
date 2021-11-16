import { useTranslation } from "react-i18next";
import { Component } from "../../../globalTypes";
import "../HistoryTable/HistoryTable.scss";
import "./ComponentsTable.scss";

interface ITableProps {
  components: Component[];
  SetComponent: (component: Component) => void;
}

export default function ComponentsTable(props: ITableProps) {
  const { t } = useTranslation();

  return (
    <div className="Components-Table">
      <div className="thead">
        <div className="row">
          <p>{t("name.label")}</p>
          <p>{t("totalactions.label")}</p>
        </div>
      </div>
      <div className="tbody">
        {props.components.map((component: Component, index: number) => {
          return (
            <div key={index} onClick={() => props.SetComponent(component)} className="row">
              <p>{component.description}</p>
              <p>{component.totalActions}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

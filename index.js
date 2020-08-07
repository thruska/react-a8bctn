import "@syncfusion/ej2/fabric.css";
import { render } from "react-dom";
import * as React from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Selection, Inject } from "@syncfusion/ej2-react-grids";

const syncWait = (ms) => {
    const end = Date.now() + ms;
    while (Date.now() < end) continue;
};

export class App extends React.Component {
    state = { foo: "bar" };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ foo: "baz" });
            syncWait(300); // simulate some work
        }, 40); // Simulate API call delay
    }

    render() {
        const grid = (
            <GridComponent
                id={"foo"}
                dataSource={[{ id: 1 }, { id: 2 }, { id: 3 }]}
                selectionSettings={{ persistSelection: true }}
                enablePersistence={true}
                allowSelection={true}
            >
                <ColumnsDirective>
                    <ColumnDirective type="checkbox" width="50" />
                    <ColumnDirective field="id" isPrimaryKey={true} />
                </ColumnsDirective>
                <Inject services={[Selection]} />
            </GridComponent>
        );
        syncWait(200); // simulate some work
        return grid;
    }
}

render(<App />, document.getElementById("app"));

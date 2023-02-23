
export interface ColumnDef {
    name: string,
    type: any
}

export interface TableDef {
    name: string,
    columnDefs: {[name: string] : ColumnDef}
}

export interface DBState {
    tableDefs: {[name: string] : TableDef}
}


export const newTableDef = (name:string) => {
    return {name: name, columnDefs: {}}
}

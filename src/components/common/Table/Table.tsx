// ** Imports do React
import React from "react";

// ** Imports de estilos
import styles from "./Table.module.css";

export interface Column<T> {
    header: string;
    accessor: keyof T | string;
}

interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    handleEdit?: (item: T) => void;
    handleDelete?: (item: T) => void;
}

export const Table = <T,>({ columns, data, handleEdit, handleDelete }: TableProps<T>): JSX.Element => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index} className={styles.th}>{column.header}</th>
                    ))}
                    {(handleEdit || handleDelete) && <th className={styles.th}>Actions</th>}
                </tr>
            </thead>
            <tbody>
                {data.map((item: any, index) => (
                    <tr key={index}>
                        {columns.map((column, columnIndex) => (
                            <td key={columnIndex} className={styles.td}>
                                {typeof column.accessor === "string" ? (
                                    // Check if the accessor is a nested property
                                    column.accessor.includes('.') ? (
                                        // If it's a nested property, split and access the nested value
                                        item[column.accessor.split('.')[0]][column.accessor.split('.')[1]] as string
                                    ) : (
                                        // If not nested, access the property directly
                                        item[column.accessor as keyof T]
                                    )
                                ) : (
                                    (column.accessor as keyof T) === "image" ? (
                                        <img src={item[column.accessor] as string} alt="Image" />
                                    ) : (
                                        item[column.accessor as keyof T]
                                    )
                                )}
                            </td>
                        ))}
                        {(handleEdit || handleDelete) && (
                            <td className={styles.td}>
                                {handleEdit && <button onClick={() => handleEdit(item)}>Editar</button>}
                                {handleDelete && <button onClick={() => handleDelete(item)}>Deletar</button>}
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

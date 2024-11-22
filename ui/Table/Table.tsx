import React from "react";

// Тип для ячейки таблицы
interface TableCell {
  content: React.ReactNode; // Контент ячейки (текст, элемент JSX)
  itemProp?: string;        // Необязательный атрибут itemProp
}

// Тип для строки таблицы
interface TableRow {
  cells: TableCell[];       // Массив ячеек в строке
  itemProp?: string;        // Необязательный атрибут itemProp для всей строки
}

// Типы для таблицы
interface TableProps {
  headers: string[];        // Заголовки таблицы
  rows: TableRow[];         // Массив строк таблицы
}

const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <table cellPadding={5} border={1}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} {...(row.itemProp ? { itemProp: row.itemProp } : {})}>
            {row.cells.map((cell, cellIndex) => {
              const { content, itemProp } = cell;
              return (
                <td key={cellIndex} {...(itemProp ? { itemProp } : {})}>
                  {content}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

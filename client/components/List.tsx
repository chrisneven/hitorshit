import * as React from 'react';
import DataObject from '../interfaces';
import ListItem from './ListItem';

interface Props {
    items: DataObject[];
    handleRemove?: (item: DataObject) => void;
}

const List: React.FunctionComponent<Props> = ({ items, handleRemove }) => (
    <ul>
        {items.map(item => (
            <li key={item.id}>
                <ListItem data={item} />
                <span style={{ cursor: 'pointer' }} onClick={() => handleRemove(item)}>
                    <strong>{`     `}x</strong>
                </span>
            </li>
        ))}
    </ul>
);

export default List;

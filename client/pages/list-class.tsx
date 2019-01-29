import { NextContext } from 'next';
import React, { FormEvent } from 'react';
import Layout from '../components/Layout';
import List from '../components/List';
import DataObject from '../interfaces';

interface Props {
    items: DataObject[];
}

class ListClass extends React.Component<Props, { items: DataObject[] }> {
    state = { items: [] };
    static async getInitialProps({ pathname }: NextContext) {
        // Example for including initial props in a Next.js page.
        // Don't forget to include the respective types for any
        // props passed into the component
        const dataArray: DataObject[] = [
            { id: 101, name: 'larry' },
            { id: 102, name: 'sam' },
            { id: 103, name: 'jill' },
            { id: 104, name: pathname }
        ];
        return { items: dataArray };
    }

    componentDidMount = () => {
        const items = this.props.items;
        this.setState({ items });
    };

    handleRemove = (itemToDelete: DataObject) => {
        const items = this.state.items.filter(item => item !== itemToDelete);
        this.setState({ items });
        console.log(this.state.items);
    };

    handleAdd = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { items } = this.state;
        const calculatedId = items[items.length - 1] ? items[items.length - 1].id + 1 : 101;
        items.push({ id: calculatedId, name: e.target[0].value });
        this.setState({ items });
    };

    render() {
        const { items } = this.state;
        return (
            <Layout title="List Example | Next.js + TypeScript Example">
                <List handleRemove={this.handleRemove} items={items} />
                <form onSubmit={this.handleAdd}>
                    <label id="name">item: </label>
                    <input id="name" name="name" type="text" />
                    <button type="submit">Add item</button>
                </form>
            </Layout>
        );
    }
}

export default ListClass;

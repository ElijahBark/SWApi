import React, {Component} from "react";
import ItemsList from "../ItemsList";

export default class RenderedItemList extends Component  {
    render() {
        let {match, list, arrOfKeys, imageLink} = this.props;

        return <ItemsList
            itemsList={list[match.params.id-1]}
            arrOfKeys={arrOfKeys}
            imageLink={imageLink}
            num={'5'}
        />
    }

    componentDidMount() {
        console.log("id:", this.props.match.params.id);
        let {match, load} = this.props;
        load(match.params.id)
    }
}
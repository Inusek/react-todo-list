import React, { Component } from "react";

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props;
        return (
            <dir className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <dir className="input-group-text bg-primary text-white mt-0">
                                <i className="fas fa-book"></i>
                            </dir>
                        </div>
                        <input
                            type="text"
                            className="form-control text-capitalize"
                            placeholder="add todo item"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={item ? false : true}
                        className={
                            editItem
                                ? "btn btn-block btn-success mt-3 text text-uppercase"
                                : "btn btn-block btn-primary mt-3 text text-uppercase"
                        }
                    >
                        {editItem ? "Edit item" : "Add item"}
                    </button>
                </form>
            </dir>
        );
    }
}

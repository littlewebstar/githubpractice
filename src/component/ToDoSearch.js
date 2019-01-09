import React, { Component } from 'react';


class ToDoSearch extends Component {
    render() {
        return (
            <div>
            <div className="card-body">
                    <hr />
                    <h5 className="card-title" id = "tasks-title">Todolar</h5>
                    <div className="form-row">
                            <div className="form-group col-md-6">
                                <input className="form-control" type="text" name="filter" id = "filter" placeholder="Bir Todo Arayın" />
                                </div>
                            
                    </div>

                    <hr />
                    <ul className="list-group">
                        {/* <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>-->*/}

                        
                    </ul>
                    <hr />  
                    <a id="clear-todos" className="btn btn-dark" href="https://github.com">Tüm Taskları Temizleyin</a>               
                </div>
            </div>

        );
    }
}

export default ToDoSearch;
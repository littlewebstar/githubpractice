import React, { Component } from 'react';



class TodoAdd extends Component {
    constructor() {
        super();
    }
    render() {
        return (
                 
           <div>
                <div className="card-body">
                    <form id="todo-form" name="form">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input className="form-control" type="text" name="todo" id="todo" placeholder="Bir Todo Girin" />
                            </div>
                        </div>
                        
                            <button type="submit" className="btn btn-danger">Todo Ekleyin</button>
                        
                    </form>
                    
                    <hr />
                    
                
                </div>
           </div>

        );
    }
}

export default TodoAdd;
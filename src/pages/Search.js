import React from "react";
import Home from "./Home";

const Search = (props) => {
    return (
        <div className="d-flex flex-column bg-secondary shadow">
            <h1 className="text-center">Search</h1>
            <div className="container-fluid d-flex justify-content-center">
                <form style={{width: '100%'}}>
                    <input
                        type='text'
                        name='search'
                        id='search'
                        placeholder="Search"
                        style={{width: '75%', marginLeft: '100px', marginBottom: '25px'}}
                    />
                    <input
                        type="submit"
                        name="submit"
                        id="submit"
                        value="Submit"
                        style={{margin: "5px"}}
                        onClick={() => {
                            if(document.getElementById('search').value === 'mario') {
                                props.handlePageChange("Home");
                            }
                            if(document.getElementById('search').value === 'zelda'){
                                props.handlePageChange('Home2');
                            }
                            if(document.getElementById('search').value === 'call of duty'){
                                props.handlePageChange('Home3');
                            }
                            if(document.getElementById('search').value === 'fallout'){
                                props.handlePageChange('Home4');
                            }

                            
                        }}
                    />
                </form>
            </div>
        </div>

    );
};

export default Search;
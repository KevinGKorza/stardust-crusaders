import React from "react";

const Search = () => {
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
                    />
                </form>
            </div>
        </div>

    );
};

export default Search;
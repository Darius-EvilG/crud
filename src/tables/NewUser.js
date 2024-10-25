import React from 'react'

const NewUser = ({usuario}) => {
    return (
        <form>
            <label>Name</label>
            <input
                type="texto"
                name="Name"
                value={"Gustavo"}
            />
        </form>
    )
}

export default NewUser
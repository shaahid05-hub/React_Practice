import React, { useContext, useMemo } from 'react'
import { context } from './UserList'

function Child() {
    let user = useContext(context)
    // let search = useMemo()

    return (
        <>


            <div className='container mt-5'>
                <div className='card shadow'>

                    <div className='card-header'>
                        <h4 className='text-center'>User Details</h4>
                        <input type="text" className='col-4' />
                    </div>


                    <div className='card-body'>
                        <table className='table table-striped table-hover table-bordered table-sm' style={{tableLayout:"fixed",width: "100%"}}>
                            <thead className='table-dark text-center'>
                                <tr>
                                    <th>Serial Number</th>
                                    <th>FirstName</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>

                            <tbody>
                                {user.map(e => (
                                    <tr key={e.id} className='text-center'>
                                        <td>{e.id}</td>
                                        <td>{e.firstName}</td>
                                        <td>{e.age}</td>
                                        <td>{e.gender}</td>
                                        <td>{e.phone}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>



        </>
    )
}

export default Child

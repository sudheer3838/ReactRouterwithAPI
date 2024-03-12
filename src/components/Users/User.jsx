import React from 'react'
import { useParams } from 'react-router-dom';
function User() {
	const {id} = useParams();
	console.log(id);
	return (
		<div className='bg-grey-500  text-3xl'>user: {id}</div>
	)
}

export default User
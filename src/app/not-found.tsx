import React from 'react'

const NotFound: React.FC = () => {
	return (
		<div
			className={
				'flex flex-col items-center justify-center gap-6 h-screen w-full'
			}
		>
			<h1>Sorry!</h1>
			<p>Couldn&#39;t find that page.</p>
		</div>
	)
}

export default NotFound

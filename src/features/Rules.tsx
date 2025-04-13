import pageContent from '@/config/pageContent'
import { Divider } from '@chakra-ui/react'
import { PageHeader } from './Pages/components/PageHeader'
import { PageLayout } from './Pages/components/PageLayout'
const Rules = () => {
	const { rules } = pageContent
	return (
		<PageLayout bg='secondary'>
			<PageHeader title='Rules' color='white'>
				{/* <Text fontSize={'xl'}></Text> */}
				<Divider
					borderTopColor='white'
					borderTopWidth={2}
					opacity={1}
				/>
			</PageHeader>

			<div className='bg-secondary'>
				<ol className='w-full text-xl text-white flex flex-col justify-center pl-12 gap-12'>
					{rules.map(({ title, body }) => (
						<li
							key={title}
							className='uppercase font-primary font-extrabold  w-full list-decimal text-base lg:text-2xl'
						>
							{title && <h2>{title}</h2>}
							{body && (
								<p className='w-full normal-case font-normal text-base'>
									{body}
								</p>
							)}
						</li>
					))}
				</ol>
			</div>
		</PageLayout>
	)
}

export default Rules

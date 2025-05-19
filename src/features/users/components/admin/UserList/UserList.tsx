'use client'

import {
  Box,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tag,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import React from 'react'
import { useUsers } from '../../../utils/hooks/useUsers'
import { UserRow } from './UserRow'

const UserList: React.FC = () => {
  const { users } = useUsers()
  return (
    <Box w='full'>
      <TableContainer
        bg='white'
        borderColor='secondary'
        borderWidth={2}
        rounded='lg'
      >
        <Table variant='simple'>
          <TableCaption placement='top' bg='secondary' color='white' mt={0}>
            <HStack alignItems='center' py={2}>
              <Heading size={'sm'}>
                <Tag mr={2}>{users?.length}</Tag> Active Users
              </Heading>
            </HStack>
          </TableCaption>
          <Thead bg='gray.100'>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Clerk ID</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users?.map((user) => <UserRow user={user} key={user._id} />)}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export { UserList }

import React from 'react'
import { Container, ContainerProps } from '@chakra-ui/react'

export const Wrapper = (props: ContainerProps) => {
  return (
    <Container variant='outlined' {...props}>{props.children}</Container>
  )
}

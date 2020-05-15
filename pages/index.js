import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import {
  Container,
  Anchor,
} from '../components/styled';
import { useIntl } from 'react-intl';
import messages from '../utils/messages';


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <Container>
        <Anchor onClick={() => Router.push('/')}>home</Anchor>
        <Anchor onClick={() => Router.push('/about')}>about</Anchor>
        <Anchor onClick={() => Router.push('/page1')}>{formatMessage(messages.link1)}</Anchor>
        <Anchor onClick={() => Router.push('/page2')}>{formatMessage(messages.link2)}</Anchor>
        <Anchor onClick={() => Router.push('/page3')}>{formatMessage(messages.link3)}</Anchor>
        <Anchor onClick={() => Router.push('/page4')}>{formatMessage(messages.link4)}</Anchor>
        <Anchor onClick={() => Router.push('/page5')}>{formatMessage(messages.link5)}</Anchor>
        <Anchor onClick={() => Router.push('/page6')}>{formatMessage(messages.link6)}</Anchor>
        <Anchor onClick={() => Router.push('/page7')}>{formatMessage(messages.link7)}</Anchor>
        <Anchor onClick={() => Router.push('/page8')}>{formatMessage(messages.link8)}</Anchor>
        <Anchor onClick={() => Router.push('/page9')}>{formatMessage(messages.link9)}</Anchor>
        <Anchor onClick={() => Router.push('/page10')}>{formatMessage(messages.link10)}</Anchor>
        <br/>
        <div></div>
      </Container>
      <Title>HOME</Title>
    </>
  )
};

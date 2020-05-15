import Router from 'next/router';
import { useIntl } from 'react-intl';
import fetch from 'isomorphic-unfetch';
import {
  Container,
  Anchor,
} from '../components/styled';
import messages from '../utils/messages';

const Page = (props) => {
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
      </Container>
      <div>{formatMessage(messages.page3)}</div>
      <br />
      <div>{props.pokemon.name}</div>
    </>
  )
};

Page.getInitialProps = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/3/')
  const json = await res.json()
  return { pokemon: json }
}

export default Page;
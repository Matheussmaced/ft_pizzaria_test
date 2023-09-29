import { useParams } from 'react-router-dom'

import { Head } from '../../../components/Head'

import { Container, Inner, SubTitle, Title } from './styled'

export default function OrderSuccessPage() {
  const { orderId } = useParams()

  return (
    <Container>
      <Head title='Compra Realizada com Sucesso!' />

      <Inner>
        <Title>Compra Realizada com Sucesso</Title>

        <p>
          Número de Pedido <code>#{orderId}</code>
        </p>

        <SubTitle>Dados de Contato da Loja</SubTitle>

        <ul>
          <li>Endereço: R. Paulo José de Macêdo, Aurora velha, 17</li>
          <li>Tel: 83 98161-3615</li>
        </ul>

        <br />
        <a href='/'>Voltar para a página inicial</a>
      </Inner>
    </Container>
  )
}

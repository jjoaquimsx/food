import React from 'react'
import { Head } from '../../../components/head'
import { SnackTitle } from '../../../components/snacks'
import { Snacks } from '../Snacks'

export default function Burguers() {
  const data = [
    {
      id: 1,
      snack: 'Burguer',
      description: 'O artesanal tamanho familia recheado com tres carnes suculetas, queijo e bacon',
      price: 25.5,
      image: 'https://i.imgur.com/upjIUnG.jpeg',
    },
    {
      id: 2,
      snack: 'Extra Bacon',
      description:
        'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem asssado e aidna queijo e carne',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpeg',
    },
  ]

  console.log(data)

  return (
    <>
      <Head title='Hambúrgueres' description='Um hamburguer como voce nunca viu' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}

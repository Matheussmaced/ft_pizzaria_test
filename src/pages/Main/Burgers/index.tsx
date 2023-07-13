import { useEffect, useState } from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { getBurgues } from '../../../services/api';

export default function Burgers() {

  const [burgers, setBurgers] = useState([]);

  useEffect(()=> {
    (async ()=> {
      const burgerRequest = await getBurgues();

      setBurgers(burgerRequest.data)
    })()
  },[])


  return (
    <>
      <Head title='Hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
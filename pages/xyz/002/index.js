
import Head from 'next/head'



const Footer = () => {


    return (
        <>
              <Head>
         <title>WEBALUX</title>
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         <meta name="description" content="Definicion Alcance" />
          <meta property="og:title" content="Definición alcance" />
         <meta property="og:description" content="Definición alcance" />

      </Head>
         <div style={{display:"flex", justifyContent:"center", justifyItems:"center"}}>
      <iframe style={{height:"100vh", width:"100%"}} 
      src="https://docs.google.com/document/d/e/2PACX-1vQAnZQSxRI9ZbKE9zxSCFq1VAd4K_3U0_J4-_qA5y7Sl_UydqHTiGjbnn4RlcZq5YAWKDyaeGto7t8A/pub?embedded=true"></iframe>
      </div>
	
{/* style={{height:"100vh", width:"100vw"}}></iframe> */}
        </>


    )

}

export default Footer;
export default async function Home() {
  const resposta = await fetch("http://back-end-ifms.vercel.app/campi",{
    next:{
    revalidate: 1
  }
});
const campi = await resposta.json();
    return (
      <main>
        <h1>Home</h1>
        {
          campi.map((campus) =>
            <div>
              <p>{campus.nome_campus}</p>
            </div>


          )
      }
      </main>
    )
}
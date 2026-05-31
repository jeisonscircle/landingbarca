import Image from 'next/image'

const items = [
  {
    number: '①',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2027%2C%202026%2C%2003_54_02%20PM%201-XcyNWJn4n1hGTGRDEfqr2US1EWfPLP.png',
    alt: 'Barça fans with blue and red smoke flares',
    description: (
      <>
        A kick. A roar. An irreplaceable moment. Each drop uses real Barça moments captured{' '}
        <strong>live.</strong>
      </>
    ),
  },
  {
    number: '②',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BVB%202-3%20FC%20Barcelona%201-9zh9YotaMxNxmHNw6LoTVhSjbRW0sx.png',
    alt: 'BVB 2-3 FC Barcelona scoreboard',
    description: (
      <>
        <strong>Data meets emotion.</strong> Scircle decodes live match data, intensity, and crowd energy into a unique <strong>scent.</strong>
      </>
    ),
  },
  {
    number: '③',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FCBxSCIRCLE_INTERIOR_CATALA%CC%81N_TIMELESS-KW9QNW6HtPi5XdxteS8gJ2WEkUHrDk.jpg',
    alt: 'Scircle x Barça Timeless fragrance box open',
    description: (
      <>
        Created in the moment, never repeated. Each drop is released live in strictly{' '}
        <strong>limited</strong> quantities.
      </>
    ),
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-black py-14 md:py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
          {items.map((item) => (
            <div key={item.number} className="flex flex-col gap-6">
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 px-1">
                <span className="text-white/60 text-lg font-light">{item.number}</span>
                <p className="text-white/75 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

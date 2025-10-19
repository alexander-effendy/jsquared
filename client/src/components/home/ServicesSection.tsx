import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function ServicesSection() {
  const services = [
    {
      id: 'videography',
      title: 'Videography',
      description:
        'Cinematic video content that tells your story and engages your audience. Ideal for brands, events, and social media.',
      price: 'A$85/hr + GST',
      details: [
        'Onsite professional video shoots',
        'Price does not include editing',
        'Custom add-ons available (editing, color grading, licensed music)',
      ],
    },
    {
      id: 'photography',
      title: 'Photography',
      description:
        'Professional photography services for personal, corporate, or creative needs with a focus on storytelling and tone.',
      price: 'A$75/hr + GST',
      details: [
        'Onsite or studio shoots',
        'Price does not include editing',
        'Optional retouching and color correction available',
      ],
    },
  ];

  const packages = [
    {
      name: 'Casual Shoot',
      price: 'AUD 350 + GST',
      perks: [
        '1 x Professional onsite video shoot',
        '3 x 20–30 sec edited social videos',
        '3 revisions',
        '5-day turnaround guaranteed',
        '1 x Photography album (FREE)',
      ],
    },
    {
      name: '1 Month Content',
      price: 'AUD 700 + GST',
      perks: [
        '2 x Professional onsite video shoots',
        '8 x 20–30 sec edited social videos',
        'Unlimited revisions',
        '7-day turnaround guaranteed',
        '1 x Photography album (FREE)',
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-left font-thin">
          <p className="text-md ">[ Our Services ]</p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {services.map((service) => (
            <AccordionItem
              key={service.id}
              value={service.id}
              className="border-stone-700 border-b"
            >
              <AccordionTrigger className="py-5 hover:no-underline">
                <div className="flex flex-col text-left">
                  <h3 className="text-md font-light">{service.title}</h3>
                  <p className="text-muted-foreground text-sm font-thin">
                    Shoots from <span className="text-green-400">{service.price}</span>
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 space-y-4">
                <p className="text-sm">{service.description}</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {service.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}

          {/* Packages Section */}
          <AccordionItem value="packages" className="border-stone-700 border-b">
            <AccordionTrigger className="flex py-5 hover:no-underline">
              <div className="flex flex-col text-left">
                <h3 className="text-md font-light">Packages</h3>
                <p className="text-muted-foreground text-sm font-thin">
                  Casual shoot or one month content
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6 space-y-8 font-thin">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="border border-stone-800 rounded-xl p-6 bg-stone-900/40 hover:bg-stone-800/60 transition-colors"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-md font-thin">{pkg.name}</h4>
                    <p className="text-green-400 font-thin">{pkg.price}</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    {pkg.perks.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// Sample services data
const services = [
  {
    id: 'service-1',
    title: 'Portrait Photography',
    shortDescription: 'Personal, corporate, and creative portraits',
    fullDescription:
      'Whether it’s for professional branding, creative expression, or personal keepsakes, I capture portraits that tell your story through authentic lighting, composition, and tone. Each session is tailored to bring out your unique character and energy.',
    benefits: [
      'Studio or on-location portrait sessions',
      'Professional lighting and posing guidance',
      'High-resolution retouched images',
      'Optional hair and makeup collaboration',
      'Fast delivery with online gallery access',
    ],
    link: '#',
  },
  {
    id: 'service-2',
    title: 'Event Coverage',
    shortDescription: 'Candid and cinematic storytelling for your events',
    fullDescription:
      'From weddings and corporate gatherings to intimate celebrations, I document each moment with a mix of candid and cinematic styles, capturing emotions, details, and atmosphere that make your event unforgettable.',
    benefits: [
      'Full or half-day event coverage',
      'Multi-camera photo and video setup',
      'Natural storytelling style with minimal intrusion',
      'Quick turnaround highlight gallery',
      'Custom deliverables (albums, reels, highlight films)',
    ],
    link: '#',
  },
  {
    id: 'service-3',
    title: 'Product & Brand Shoots',
    shortDescription: 'Visual storytelling for your brand and products',
    fullDescription:
      'Bring your brand to life through creative imagery and videos that capture your products in their best light. I design shoots that align with your brand’s identity, ensuring every visual communicates professionalism and emotion.',
    benefits: [
      'Creative direction and concept planning',
      'Studio or lifestyle setup',
      'Lighting and styling tailored to your brand aesthetic',
      'Professional retouching and color grading',
      'Content ready for web and social media',
    ],
    link: '#',
  },
  {
    id: 'service-4',
    title: 'Video Production',
    shortDescription: 'Cinematic visuals that move your audience',
    fullDescription:
      'From concept to final edit, I produce cinematic videos for brands, events, and personal projects. My work focuses on storytelling, mood, and flow—turning every frame into a visual narrative that connects emotionally with viewers.',
    benefits: [
      'Storyboarding and shot planning',
      '4K multi-camera filming',
      'Professional color grading and audio mixing',
      'Licensed music and motion graphics',
      'Optimized exports for different platforms',
    ],
    link: '#',
  },
  {
    id: 'service-5',
    title: 'Editing & Retouching',
    shortDescription: 'Professional post-production that brings visuals to life',
    fullDescription:
      'Polish your photos and videos with professional color correction, retouching, and editing. I ensure every deliverable looks stunning, cohesive, and true to your creative vision.',
    benefits: [
      'Advanced photo retouching and color correction',
      'Cinematic video editing and grading',
      'Consistent tone across full projects',
      'Client review and revision rounds',
      'Delivery in high-quality formats',
    ],
    link: '#',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#131313] py-12">
      <div>
        {/* Section header */}
        <div className="md:mb-16">
          <h2 className="text-3xl font-thin tracking-tight">
            Services
          </h2>
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full">
            {services.map((service) => (
              <AccordionItem
                key={service.id}
                value={service.id}
                className="border-stone-600 border-b-[1px]"
              >
                <AccordionTrigger className="py-6 hover:no-underline">
                  <div className="flex flex-1 items-center text-left">
                    <div>
                      <h3 className="text-xl font-medium">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-4">
                    <p>{service.fullDescription}</p>
                    <div>
                      <h4 className="text-muted-foreground mb-2 text-sm font-medium">
                        Key Benefits:
                      </h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {service.benefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="text-primary text-xl leading-tight">
                              •
                            </span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={service.link}
                          className="inline-flex items-center gap-2"
                        >
                          <span>Learn more</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 text-center">
            {/* <Button asChild>
              <a href="#" className="inline-flex items-center gap-2">
                <span>Get a custom quote</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

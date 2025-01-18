+++
title = 'Home'
date = 2023-01-01T08:00:00-07:00
draft = false

[heroSection]
  headline = "Bringing Color to Your World"
  subheadline = "Transforming your home with precision, quality, and care."
  CTA = "Get a Free Quote"
  CTAUrl = "#quote"
  image = "images/home/hero.jpg"
  altText = "A professional painter with a roller brush"

  # Optional Stats
  [[heroSection.stats]]
  value = "100+"
  label = "Homes painted yearly"

  [[heroSection.stats]]
  value = "15+"
  label = "Years of experience"

  [[heroSection.stats]]
  value = "5-Star"
  label = "Client satisfaction"

[textAndImagesSection]
  title = "Quality Assurance"
  headline = "Painting solutions for every home"
  subheadline = "High-quality finishes, every time"
  description = """
  Our team of skilled painters provides exceptional interior and exterior painting services. With attention to detail and a commitment to excellence, we bring your vision to life, one brushstroke at a time.
  """

  image = "images/home/feature.jpg"
  imageAlt = "A freshly painted wall with clean edges"
  image2 = "images/home/feature2.jpg"
  image2Alt = "Painter holding color swatches"

  [textAndImagesSection.primaryCTA]
    ctaText = "About Us"
    ctaUrl = "/about-us"
  [textAndImagesSection.secondaryCTA]
    ctaText = "0 800 555 44 33"
    ctaIcon = "phone"
    ctaUrl = "tel:08005554433"

[listingSection]
  title = "Our Services"
  headline = "Transform Your Home with Our Expertise"
  cardType = "simple" 
  section = "services"
  viewAllText = "View All Services"
  viewAllUrl = "/services"

[valuePropositionSection]
  title = "Why Choose Us"
  headline = "The Painters You Can Trust"
  subheadline = "Combining craftsmanship, quality, and care in every project."

  [[valuePropositionSection.values]]
    icon = "paint-roller"
    headline = "Expert Craftsmanship"
    subheadline = "Precise, clean, and professional finishes."

  [[valuePropositionSection.values]]
    icon = "palette"
    headline = "Custom Colors"
    subheadline = "Tailored solutions to match your style."

  [[valuePropositionSection.values]]
    icon = "clock"
    headline = "On-Time Completion"
    subheadline = "We respect your time and deadlines."

[testimonialSection]
  title = "Testimonials"
  headline = "What Our Clients Say"

[quoteSection]
  title = "For a free estimate"
  headline = "Request a quote"
  subheadline = "Let us help you transform your home with high-quality painting services tailored to your needs."
  
  [quoteSection.form]
    submitText = "Send"

    [[quoteSection.form.input]]
      name = "First Name"
      placeholder = "John"
      required = true
      type = "text"

    [[quoteSection.form.input]]
      name = "Email address"
      placeholder = "example@email.com"
      required = true
      type = "email"

    [[quoteSection.form.input]]
      name = "Message"
      placeholder = "Your message"
      required = true
      type = "textarea"

[menus]
  [menus.main]
    weight = 10
+++

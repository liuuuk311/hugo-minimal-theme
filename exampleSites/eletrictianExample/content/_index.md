+++
title = 'Home'
date = 2023-01-01T08:00:00-07:00
draft = false

[heroSection]
  headline = "Powering Your Home and Business — Electrical Services"
  subheadline = "Your trusted partner for safe, reliable, and efficient electrical solutions."
  CTA = "Get a Free Quote"
  CTAUrl = "#quote"
  image = "images/home/hero.jpg"
  altText = "An electrician working on a circuit board"

  # Optional Stats
  [[heroSection.stats]]
  value = "50+"
  label = "Jobs completed weekly"

  [[heroSection.stats]]
  value = "20+"
  label = "Years of experience"

  [[heroSection.stats]]
  value = "100+"
  label = "Happy clients monthly"


[textAndImagesSection]
  title = "Quality Assurance"
  headline = "Electrical solutions you can trust"
  subheadline = "Safe, reliable, and efficient electrical work for your home or business"
  description = """
  Our team of certified electricians provides top-tier electrical services, from installations to emergency repairs. We are committed to delivering quality workmanship and ensuring the safety and efficiency of your electrical systems.
  """

  image = "images/home/feature.jpg"
  imageAlt = "An electrician inspecting a circuit breaker"
  image2 = "images/home/feature2.jpg" # optional second image
  image2Alt = "Close-up of electrical tools and wires"

  [textAndImagesSection.primaryCTA]
    ctaText = "About Us"
    ctaUrl = "/about-us"
  [textAndImagesSection.secondaryCTA]
    ctaText = "0 800 555 44 33"
    ctaIcon = "phone"
    ctaUrl = "tel:08005554433"


[listingSection]
  title = "Our Services"
  headline = "Safe and Efficient Electrical Solutions"
  cardType = "simple" 
  section = "services"            # services/projects or leave blank for CurrentSection
  viewAllText = "View All Services"
  viewAllUrl = "/services"

[valuePropositionSection]
  title = "Why Choose Us"
  headline = "Powering Your Trust"
  subheadline = "Dedicated to quality, safety, and customer satisfaction."

  [[valuePropositionSection.values]]
    icon = "id-card"
    headline = "Certified Electricians"
    subheadline = "Trained and certified professionals you can count on."

  [[valuePropositionSection.values]]
    icon = "thumbs-up"
    headline = "Top Rated Service"
    subheadline = "Our clients trust us for quality and reliability."

  [[valuePropositionSection.values]]
    icon = "clock"
    headline = "On-Time Solutions"
    subheadline = "We value your time and ensure punctual service."

[testimonialSection]
  title = "Testimonials"
  headline = "What Our Clients Say"

[quoteSection]
  title = "For a free estimate"
  headline = "Request a quote"
  subheadline = "Get in touch with us today for tailored electrical solutions that meet your needs and exceed your expectations."
  
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

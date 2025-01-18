+++
title = 'Home'
date = 2023-01-01T08:00:00-07:00
draft = false

[heroSection]
  headline = "We grow, you flourish — gardening services"
  subheadline = "Transforming outdoor spaces into lush, vibrant sanctuaries tailored to your vision."
  CTA = "Get a Free Consultation"
  CTAUrl = "#quote"
  image = "images/home/hero.jpg"
  altText = "A gardener tending to vibrant flowerbeds"

  # Optional Stats
  [[heroSection.stats]]
  value = "50+"
  label = "Gardens maintained weekly"

  [[heroSection.stats]]
  value = "10+"
  label = "Years of experience"

  [[heroSection.stats]]
  value = "100+"
  label = "Satisfied clients monthly"


[textAndImagesSection]
  title = "Quality Assurance"
  headline = "Gardening solutions on demand"
  subheadline = "We nurture your garden with care and expertise"
  description = """
  Our team brings your outdoor spaces to life with innovative designs, precise care, and eco-friendly practices.
  Whether it's creating a new garden or maintaining your current one, we ensure top-quality results every time.
  """

  image = "images/home/feature.jpg"
  imageAlt = "A lush garden with colorful flowers"
  image2 = "images/home/feature2.jpg" # optional second image
  image2Alt = "Close-up of gardening tools and gloves"

  [textAndImagesSection.primaryCTA]
    ctaText = "About Us"
    ctaUrl = "/about-us"
  [textAndImagesSection.secondaryCTA]
    ctaText = "0 800 123 45 67"
    ctaIcon = "phone"
    ctaUrl = "tel:08001234567"


[listingSection]
  title = "Our Services"
  headline = "Gardening solutions tailored for you"
  cardType = "simple" 
  section = "services"            # services/projects or leave blank for CurrentSection
  viewAllText = "View All Services"
  viewAllUrl = "/services"

[valuePropositionSection]
  title = "People Trust"
  headline = "Why Choose Us"
  subheadline = "Bringing expertise, passion, and care to every garden we tend."

  [[valuePropositionSection.values]]
    icon = "seedling"
    headline = "Experienced Gardeners"
    subheadline = "Our skilled team ensures your garden thrives year-round."

  [[valuePropositionSection.values]]
    icon = "leaf"
    headline = "Eco-Friendly Practices"
    subheadline = "We use sustainable methods and locally sourced plants."

  [[valuePropositionSection.values]]
    icon = "clock"
    headline = "Reliable Services"
    subheadline = "Punctual, professional, and committed to your satisfaction."

[testimonialSection]
  title = "Testimonials"
  headline = "What Our Clients Say"

[quoteSection]
  title = "For a free consultation"
  headline = "Request a quote"
  subheadline = "Let us bring your vision to life with personalized gardening solutions tailored to your needs."
  
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

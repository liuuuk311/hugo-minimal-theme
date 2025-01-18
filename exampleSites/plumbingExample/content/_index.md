+++
title = 'Home'
date = 2023-01-01T08:00:00-07:00
draft = false

[heroSection]
  headline = "We solve, you evolve — plumbing services"
  subheadline = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum."
  CTA = "Get a Free Quote"
  CTAUrl = "#quote"
  image = "images/home/hero.jpg"
  altText = "A skilled plumber holding a clipboard"

  # Optional Stats
  [[heroSection.stats]]
  value = "20+"
  label = "Parts installed per day"

  [[heroSection.stats]]
  value = "100+"
  label = "Happy customers weekly"

  [[heroSection.stats]]
  value = "10+"
  label = "New clients daily"


[textAndImagesSection]
  title = "Quality Assurance"
  headline = "Plumbing solutions on demand"
  subheadline = "We install the best plumbing for your home"
  description = """
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Nisl tincidunt eget nullam non nisi.
  """

  image = "images/home/feature.jpg"
  imageAlt = "A handshake over plumbing pipes"
  image2 = "images/home/feature2.jpg" # optional second image
  image2Alt = "Close-up of plumbing tools"

  [textAndImagesSection.primaryCTA]
    ctaText = "About Us"
    ctaUrl = "/about-us"
  [textAndImagesSection.secondaryCTA]
    ctaText = "0 800 555 44 33"
    ctaIcon = "phone"
    ctaUrl = "tel:08005554433"


[listingSection]
  title = "Our Services"
  headline = "Pipe repair 24/7"
  cardType = "simple" 
  section = "services"            # services/projects or leave black for CurrentSection
  viewAllText = "View All Services"
  viewAllUrl = "/services"

[valuePropositionSection]
  title = "People Trust"
  headline = "Why We Are Best"
  subheadline = "Curabitur vitae nunc sed velit dignissim sodales ut eu. Leo vel orci porta non."

  [[valuePropositionSection.values]]
    icon = "id-card"
    headline = "Licensed Technicians"
    subheadline = "Mauris augue neque gravida in fermentum et sollicitudin."

  [[valuePropositionSection.values]]
    icon = "thumbs-up"
    headline = "Top Rated Service"
    subheadline = "Scelerisque felis imperdiet proin fermentum vel orci."

  [[valuePropositionSection.values]]
    icon = "clock"
    headline = "Timely Services"
    subheadline = "Erat nam at lectus urna duis convallis convallis tellus."

[testimonialSection]
  title = "Testimonials"
  headline = "Feedback from our clients"

[quoteSection]
  title = "For a free estimate"
  headline = "Request a quote"
  subheadline = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor veritatis et quasi architecto beatae vitae dicta."
  
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


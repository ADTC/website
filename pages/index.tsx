import React from 'react';
import { Box, Container } from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { MainHero } from '@components/marketing/MainHero';
import { ComponentDetailsSection } from '@components/marketing/ComponentDetailsSection';
import { CaseStudiesSection } from '@components/marketing/CaseStudiesSection';
import { BenefitsSection } from '@components/marketing/BenefitsSection';
import { AccessibilitySection } from '@components/marketing/AccessibilitySection';
import { DeveloperExperienceSection } from '@components/marketing/DeveloperExperienceSection';
import { AdoptionSection } from '@components/marketing/AdoptionSection';
import { CommunitySection } from '@components/marketing/CommunitySection';
import { OtherProductsSection } from '@components/marketing/OtherProductsSection';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { FancyBackground } from '@components/marketing/FancyBackground';

// TODO check that all paragraphs are P tags
export default function PrimitivesHome() {
  return (
    <Box>
      <TitleAndMetaTags
        title="Primitives — Radix UI"
        description="An open-source React component library for building high-quality, accessible design systems and web apps."
        // TODO meta image
        image="colors.png"
      />
      <FancyBackground>
        <Header />
        <MainHero />
      </FancyBackground>
      <CaseStudiesSection />
      <BenefitsSection />
      <ComponentDetailsSection />
      <AccessibilitySection />
      <DeveloperExperienceSection />
      <AdoptionSection />
      <CommunitySection />
      <OtherProductsSection />
      <Container size="3">
        <Footer />
      </Container>
    </Box>
  );
}

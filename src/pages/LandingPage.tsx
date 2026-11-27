import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Users, Stethoscope, Sparkles, UserCheck, FileText, BrainCircuit } from 'lucide-react';
import { LandingNavbar } from '../components/common/LandingNavbar';
import { LandingFooter } from '../components/common/LandingFooter';

const steps = [
  {
    number: '01',
    icon: UserCheck,
    title: 'Sign Up or Log In',
    description: 'Create your secure account or sign in to access your personal healthcare readiness portal.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Enter Health Information',
    description: 'Provide details about your upcoming visit, symptoms, or interact directly with the assistant.',
  },
  {
    number: '03',
    icon: BrainCircuit,
    title: 'Receive AI Assistance & Insights',
    description: 'Get tailored question checklists, preparation guides, and structured visit insights in seconds.',
  },
];

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Health Assistance',
    description: 'Conversational clinical intelligence helping patients prepare questions and clarify visit expectations.',
  },
  {
    icon: Users,
    title: 'Smart Patient Management',
    description: 'Streamlined scheduling, structured readiness profiles, and organized pre-consultation notes.',
  },
  {
    icon: Stethoscope,
    title: 'Doctor-Patient Interaction',
    description: 'Bridge communication barriers and facilitate informed, efficient dialogues during consultations.',
  },
  {
    icon: Sparkles,
    title: 'Intelligent Health Insights',
    description: 'Actionable summaries and insights derived from visit histories to support ongoing patient care.',
  },
];

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen relative flex flex-col justify-between overflow-x-hidden bg-page-bg text-text-primary transition-colors duration-300">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/10 dark:bg-[#45E6B8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation */}
      <LandingNavbar />

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              AI-Powered Patient Preparation
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.12] sm:leading-[1.08] break-words">
              <span>Next-Gen Healthcare</span>
              <br className="hidden sm:inline" />
              <span className="text-accent sm:inline"> Readiness with CareReady AI</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed">
              CareReady AI empowers patients with intelligent pre-visit preparation, clear medical summaries, and guided questions to ensure productive consultations with healthcare providers.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                to="/register"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base bg-accent text-white dark:text-[#060B14] hover:bg-accent-hover transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </Link>
              <a
                href="#features"
                className="px-6 py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base border border-border-color text-text-primary hover:bg-section-bg transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-[460px] rounded-3xl overflow-hidden border border-border-color shadow-2xl bg-card-bg p-3">
              <img
                src="/assets/doctor-patient-illustration.png"
                alt="Doctor consulting patient with CareReady AI"
                className="w-full h-auto object-cover rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-2">
            Platform Capabilities
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Designed for Modern Healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative p-6 rounded-2xl border border-border-color bg-card-bg hover:border-accent/50 hover:shadow-lg dark:hover:shadow-emerald-950/20 transition-all duration-300 flex flex-col items-start"
              >
                <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300 mb-4">
                  <Icon className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-2">
            Simple Process
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            How CareReady AI Works
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative p-8 rounded-2xl border border-border-color bg-card-bg shadow-xs flex flex-col items-start transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>
                  <span className="text-3xl font-black text-text-secondary/40">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>

                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-slate-400 dark:text-slate-600 pointer-events-none">
                    <ArrowRight className="h-5 w-5 opacity-40" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer Section */}
      <LandingFooter />
    </div>
  );
};

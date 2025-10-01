import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./AboutPage.css";

import missionImg from "../assets/mission.jpg";
import visionImg from "../assets/vision.jpg";
import mentorImg from "../assets/mentor.jpg";
import programImg from "../assets/program.jpg";
import successImg from "../assets/success.jpg";

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="about-container">
        {/* Hero */}
        <section className="about-hero">
          <h1>About Career Catalyst</h1>
          <p>
            Empowering students and professionals to achieve their career goals
            with expert guidance, training, and industry-focused mentorship.
          </p>
        </section>

        {/* Our Story */}
        <section className="about-section story">
          <h2>Our Story</h2>
          <p>
            Career Catalyst was founded with a vision to bridge the gap between
            education and employment. Our mission is to guide aspirants in
            choosing the right career path and provide them with the tools they
            need to excel in today’s competitive job market. With years of
            experience and a dedicated team of experts, we have transformed
            thousands of careers across diverse industries.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="about-section grid">
          <div className="about-card hover-card">
            <img src={missionImg} alt="Mission" />
            <h3>Our Mission</h3>
            <p>
              To empower individuals by providing personalized career counseling,
              skill development programs, and industry-aligned training for
              long-term success.
            </p>
          </div>
          <div className="about-card hover-card">
            <img src={visionImg} alt="Vision" />
            <h3>Our Vision</h3>
            <p>
              To become the most trusted career guidance and training partner
              worldwide, helping every individual discover their true potential
              and achieve excellence.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="about-section">
          <h2>Why Choose Career Catalyst?</h2>
          <div className="features-grid">
            <div className="about-card hover-card">
              <img src={mentorImg} alt="Expert Mentors" />
              <h3>Expert Mentors</h3>
              <p>Learn directly from industry leaders and certified professionals.</p>
            </div>
            <div className="about-card hover-card">
              <img src={programImg} alt="Tailored Programs" />
              <h3>Tailored Programs</h3>
              <p>Courses and training customized to match your career goals.</p>
            </div>
            <div className="about-card hover-card">
              <img src={successImg} alt="Proven Success" />
              <h3>Proven Success</h3>
              <p>Thousands of students successfully placed in top companies.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <h2>Ready to Transform Your Career?</h2>
          <p>Join Career Catalyst today and take your first step toward success.</p>
          <a href="/contact" className="cta-btn">
            Contact Us
          </a>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

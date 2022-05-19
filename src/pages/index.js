import React from "react"
import Layout from "../components/layout/Layout"

export default function Home() {
  const posts = [];
  return (
    <Layout>
      <section className="home-page-section">
        <h1>Who am I?</h1>
        <hr />
        <p>My name is Jayendra Sharan. I live in Bangalore, India. By profession, I am a software engineer and I work with JavaScript & React.</p>
        <p>I like roads and usually go on road trips with my family.</p>
        <p>Reading fiction and non-fiction is something I do whenever I get time. I am a big fan of legal thriller; John Grisham and Mike Connely are two of my favourite authors.</p>
        <p>Online and data privacy, personal development, digital minimalism etc. are some of the topics I like to talk about with my friends and family.</p>
        <p>Football is one of my favourite sports and I love to follow Manchester United and Real Madrid.</p>
      </section>
      {
        posts.length > 0 && (
          <section className="home-page-section">
            <h1>Latest Post</h1>
            <hr />
          </section>
        )
      }
    </Layout>
  )
}

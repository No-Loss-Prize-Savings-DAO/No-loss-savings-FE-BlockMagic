import { NavBar } from "@/components/shared/nav-bar";
import { Button } from "@/components/ui/button";
import React from "react";

function Tokenomics() {
  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-5xl mt-24 p-10">
        <h1 className="mb-8 text-3xl font-bold">
          Tokenomics
        </h1>
        <section id="introduction">
          <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
          <p className="mb-6 text-gray-100">
            In today&rsquo;s fast-paced business landscape, organizations are
            constantly seeking innovative solutions to streamline their
            operations and drive productivity. This white paper introduces a
            groundbreaking platform that is poised to transform the way we work,
            offering a comprehensive suite of tools and features designed to
            empower teams and unlock new levels of efficiency.
          </p>
        </section>
        <section id="problem-statement">
          <h2 className="mb-4 text-2xl font-semibold">Problem Statement</h2>
          <p className="mb-6 text-gray-100">
            Businesses today face a myriad of challenges, from managing complex
            workflows and coordinating remote teams to ensuring seamless
            collaboration and data security. Traditional tools and methods often
            fall short in addressing these pressing needs, leading to
            inefficiencies, communication breakdowns, and missed opportunities.
          </p>
        </section>
        <section id="our-solution">
          <h2 className="mb-4 text-2xl font-semibold">Our Solution</h2>
          <p className="mb-6 text-gray-100">
            Our platform offers a holistic approach to addressing the challenges
            faced by modern organizations. By integrating cutting-edge
            technologies and intuitive user experiences, we have developed a
            comprehensive solution that streamlines workflows, enhances
            collaboration, and empowers teams to achieve their goals more
            effectively.
          </p>
        </section>
        <section id="benefits">
          <h2 className="mb-4 text-2xl font-semibold">Benefits</h2>
          <p className="mb-6 text-gray-100">
            Implementing our platform can unlock a wide range of benefits for
            your organization, including:
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-100">
            <li>Increased productivity and efficiency</li>
            <li>Improved collaboration and communication</li>
            <li>Enhanced data security and compliance</li>
            <li>Scalable and adaptable to your business needs</li>
            <li>Seamless integration with existing systems</li>
          </ul>
        </section>
        <section id="conclusion">
          <h2 className="mb-4 text-2xl font-semibold">Conclusion</h2>
          <p className="mb-6 text-gray-100">
            By embracing our innovative platform, your organization can unlock
            new levels of productivity, collaboration, and success. We invite
            you to explore the transformative potential of our solution and
            discover how it can revolutionize the way you work.
          </p>
        </section>
        <div className="mt-8 flex justify-end">
          <Button variant="primary">Download White Paper</Button>
        </div>
      </div>
    </>
  );
}

export default Tokenomics;

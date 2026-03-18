"use client";

import resumeData from "@/data/resume.json";
import { Printer } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-black absolute inset-0 z-[100] overflow-auto print:static print:bg-white print:text-black">
      <div className="max-w-4xl mx-auto p-8 md:p-16 font-sans">
        <div className="flex justify-end mb-8 print:hidden">
          <button 
            onClick={() => window.print()} 
            className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </button>
        </div>

        {/* Resume Content */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold uppercase tracking-wider text-gray-900">{resumeData.basics.name}</h1>
          <p className="mt-2 text-gray-600">
            {resumeData.basics.location} • {resumeData.basics.phone} • {resumeData.basics.email}
          </p>
          <p className="text-gray-600">
            {resumeData.basics.links.map(l => l.url).join(" • ")}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b-2 border-gray-900 mb-3 text-gray-900">Professional Summary</h2>
          <p className="text-gray-800 leading-relaxed">{resumeData.basics.summary}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b-2 border-gray-900 mb-3 text-gray-900">Education</h2>
          {resumeData.education.map((edu, i) => (
            <div key={i} className="mb-3 flex justify-between items-start">
              <div>
                <div className="font-bold text-gray-900">{edu.degree}</div>
                <div className="text-gray-700">{edu.institution}</div>
              </div>
              <div className="text-gray-600 font-medium whitespace-nowrap ml-4">{edu.dates}</div>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b-2 border-gray-900 mb-3 text-gray-900">Technical Skills</h2>
          {resumeData.skills.map((skill, i) => (
            <div key={i} className="mb-2 text-gray-800">
              <span className="font-bold text-gray-900">{skill.category}:</span> {skill.items.join(", ")}
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b-2 border-gray-900 mb-3 text-gray-900">Professional Experience</h2>
          {resumeData.experience.map((exp, i) => (
            <div key={i} className="mb-5">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <span className="font-bold text-gray-900">{exp.role}</span>
                  <span className="text-gray-700"> - {exp.company}</span>
                </div>
                <span className="text-gray-600 font-medium whitespace-nowrap ml-4">{exp.dates}</span>
              </div>
              <ul className="list-disc pl-5 text-gray-800 space-y-1">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b-2 border-gray-900 mb-3 text-gray-900">Projects</h2>
          {resumeData.projects.map((proj, i) => (
            <div key={i} className="mb-5">
              <div className="flex justify-between items-start mb-1">
                <span className="font-bold text-gray-900">{proj.title}</span>
                <span className="text-gray-600 font-medium whitespace-nowrap ml-4">{proj.dates}</span>
              </div>
              <ul className="list-disc pl-5 text-gray-800 space-y-1">
                {proj.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b-2 border-gray-900 mb-3 text-gray-900">Certifications</h2>
          <ul className="list-disc pl-5 text-gray-800 space-y-1">
            {resumeData.certifications.map((cert, i) => <li key={i}>{cert}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

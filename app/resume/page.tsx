"use client";

import Link from "next/link";
import { ArrowLeft, Download, FileText, ExternalLink } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="h-screen w-screen bg-[#1e1e1f] text-zinc-300 flex flex-col overflow-hidden select-none">
      {/* Top Header Bar - clean, modeled after actual standard PDF viewers */}
      <header className="h-14 bg-[#121213] border-b border-zinc-800 px-4 flex items-center justify-between shrink-0 shadow-md">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors text-sm font-medium bg-zinc-800/40 hover:bg-zinc-800 px-3.5 py-1.5 rounded-md border border-zinc-700/30 active:scale-95"
            id="back-portfolio-btn"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Portfolio</span>
            <span className="sm:hidden">Back</span>
          </Link>
          <div className="h-4 w-[1px] bg-zinc-800" />
          <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
            <FileText className="h-4 w-4 text-cyan-400" />
            <span className="font-semibold text-zinc-300 truncate max-w-[120px] sm:max-w-xs">
              Shruthi_Kodati_Resume.pdf
            </span>
          </div>
        </div>

        {/* Center Indicators */}
        <div className="hidden md:flex items-center gap-3 bg-zinc-950/40 px-3 py-1 rounded border border-zinc-800/50 text-xs font-mono">
          <span className="text-zinc-500">Page 1 of 1</span>
          <div className="h-3 w-[1px] bg-zinc-800" />
          <span className="text-cyan-400 font-bold">100% Original PDF</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Download Link */}
          <a
            href="/resume.pdf"
            download="Shruthi_Kodati_Resume.pdf"
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-3 py-1.5 rounded-md transition-colors text-xs font-semibold border border-zinc-700/50 active:scale-[0.98]"
            id="download-pdf-btn"
          >
            <Download className="h-3.5 w-3.5 text-cyan-400" />
            <span>Download</span>
          </a>

          {/* Open full window / standalone tab link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1.5 rounded-md transition-colors text-xs font-semibold border border-cyan-500/30 active:scale-[0.98]"
            id="open-original-btn"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Open Original</span>
            <span className="sm:hidden">Open</span>
          </a>
        </div>
      </header>

      {/* Embedded PDF Viewer Workspace */}
      <div className="flex-1 w-full bg-[#2a2a2e] relative overflow-hidden flex items-center justify-center">
        <iframe
          src="/resume.pdf#toolbar=1"
          className="w-full h-full border-none"
          title="Shruthi Kodati Resume PDF"
          id="embedded-pdf-viewer"
        />
      </div>
    </div>
  );
}

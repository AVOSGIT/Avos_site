"use client";

import React from "react";
import { CONTACT_DISPLAY, openContactMail } from "@/lib/contact";

interface ObfuscatedEmailProps {
  subject?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function ObfuscatedEmail({
  subject = "Inquiry - AVOS IoT Platform",
  className,
  style,
  children,
}: ObfuscatedEmailProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openContactMail(subject);
  };

  return (
    <a
      href="#contact"
      onClick={handleClick}
      className={className}
      style={style}
      title="Click to send an email to AVOS IoT"
    >
      {children || CONTACT_DISPLAY}
    </a>
  );
}


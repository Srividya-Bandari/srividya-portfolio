"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Loader2, CheckCircle } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

type Status = "idle" | "submitting" | "success" | "error";

interface ResumeDownloadModalProps {
  triggerClassName?: string;
  triggerLabel?: string;
  triggerIcon?: boolean;
}

export function ResumeDownloadModal({
  triggerClassName = "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-accent text-white text-sm font-medium hover:opacity-90 transition-opacity",
  triggerLabel = "Download PDF",
  triggerIcon = true,
}: ResumeDownloadModalProps) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleOpen = () => {
    setStatus("idle");
    setOpen(true);
  };

  const handleClose = () => {
    if (status === "submitting") return;
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("https://formspree.io/f/xqenqlwg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "First Name": form.firstName,
          "Last Name": form.lastName,
          Email: form.email,
          Phone: form.phone || "Not provided",
          _subject: `Resume download — ${form.firstName} ${form.lastName}`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          const link = document.createElement("a");
          link.href = "/resume.pdf";
          link.download = "Srividya-Bandari-Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setOpen(false);
          setTimeout(() => {
            setStatus("idle");
            setForm({ firstName: "", lastName: "", email: "", phone: "" });
          }, 300);
        }, 1200);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <>
      <button onClick={handleOpen} className={triggerClassName}>
        {triggerIcon && <Download size={14} />}
        {triggerLabel}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
            onClick={(e) => e.target === e.currentTarget && handleClose()}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md bg-surface border border-border rounded-xl p-6 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    Get the Resume
                  </h2>
                  <p className="text-sm text-muted mt-1">
                    Fill in your details and it downloads instantly.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  aria-label="Close"
                  className="text-muted hover:text-foreground transition-colors ml-4 mt-0.5"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Success state */}
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <CheckCircle size={44} className="text-accent mb-3" />
                  <p className="font-semibold text-foreground text-lg">
                    Downloading now!
                  </p>
                  <p className="text-sm text-muted mt-1">
                    Thanks for your interest in Srividya&apos;s work.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="First Name" required>
                      <input
                        required
                        autoFocus
                        value={form.firstName}
                        onChange={update("firstName")}
                        placeholder="Jane"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Last Name" required>
                      <input
                        required
                        value={form.lastName}
                        onChange={update("lastName")}
                        placeholder="Smith"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  {/* Email */}
                  <Field label="Work Email" required>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="jane@company.com"
                      className={inputClass}
                    />
                  </Field>

                  {/* Phone */}
                  <Field label="Phone" optional>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+1 (555) 000-0000"
                      className={inputClass}
                    />
                  </Field>

                  {/* Error */}
                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      Something went wrong — please try again.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-accent text-white font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Download size={14} />
                        Download Resume
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted text-center leading-relaxed">
                    Your info is only used to follow up if there&apos;s a
                    relevant opportunity.
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const inputClass =
  "w-full px-3 py-2 text-sm bg-background border border-border rounded-md text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors";

function Field({
  label,
  required,
  optional,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-1 text-xs font-medium text-muted mb-1.5">
        {label}
        {required && <span className="text-accent">*</span>}
        {optional && <span className="font-normal">(optional)</span>}
      </label>
      {children}
    </div>
  );
}

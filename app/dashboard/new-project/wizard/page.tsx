"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { 
  ArrowLeft, ArrowRight, Check, FolderTree, Code2, FileText, 
  Target, Sparkles, Download, Github, Package 
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const steps = [
  { id: 1, title: "Project Info", icon: <FolderTree className="size-5" /> },
  { id: 2, title: "Goals", icon: <Target className="size-5" /> },
  { id: 3, title: "Features", icon: <Sparkles className="size-5" /> },
  { id: 4, title: "Scope", icon: <FileText className="size-5" /> },
  { id: 5, title: "Tech Stack", icon: <Code2 className="size-5" /> },
  { id: 6, title: "Generate", icon: <Check className="size-5" /> },
];

const techStacks = [
  "Next.js + TypeScript",
  "Vue 3 + TypeScript",
  "React + TypeScript",
  "Laravel",
  "Flutter",
  "Node.js + Express",
  "Custom",
];

export default function WizardPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    goals: ["", "", ""],
    features: [""],
    inScope: [""],
    outScope: [""],
    tech_stack: "",
  });
  const [generatedFiles, setGeneratedFiles] = useState<string[]>([]);

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerate = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/generate-context", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate");
      }

      setGeneratedFiles(data.files);
      toast.success("Context generated!", {
        description: "Your 7 context files are ready.",
      });
    } catch (error) {
      toast.error("Failed to generate", {
        description: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadAll = async () => {
    try {
      const response = await fetch("/api/download-all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${formData.name || "project"}-context.zip`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      toast.error("Download failed", {
        description: "Please try again.",
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-base">
      <Navbar />

      <div className="flex-1 pt-32">
        <div className="mx-auto max-w-3xl px-6 pb-32">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex size-10 items-center justify-center rounded-xl border-2 transition-all ${
                      currentStep >= step.id
                        ? "border-brand bg-brand text-white"
                        : "border-default bg-surface text-copy-muted"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="size-4" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  {step.id < 6 && (
                    <div
                      className={`h-0.5 w-8 md:w-16 ${
                        currentStep > step.id ? "bg-brand" : "bg-default"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-medium text-brand">
                Step {currentStep} of 6: {steps[currentStep - 1].title}
              </p>
            </div>
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step 1: Project Info */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Tell us about your project</h2>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Project Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. My SaaS Platform"
                      className="w-full rounded-xl border border-default bg-surface px-5 py-3.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="What does this project do?"
                      rows={4}
                      className="w-full resize-none rounded-xl border border-default bg-surface px-5 py-3.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Goals */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">What are your main goals?</h2>
                  {formData.goals.map((goal, index) => (
                    <input
                      key={index}
                      type="text"
                      value={goal}
                      onChange={(e) => {
                        const newGoals = [...formData.goals];
                        newGoals[index] = e.target.value;
                        setFormData({ ...formData, goals: newGoals });
                      }}
                      placeholder={`Goal ${index + 1}`}
                      className="w-full rounded-xl border border-default bg-surface px-5 py-3.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                  ))}
                </div>
              )}

              {/* Step 3: Features */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">What features do you need?</h2>
                  {formData.features.map((feature, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => {
                          const newFeatures = [...formData.features];
                          newFeatures[index] = e.target.value;
                          setFormData({ ...formData, features: newFeatures });
                        }}
                        placeholder={`Feature ${index + 1}`}
                        className="flex-1 rounded-xl border border-default bg-surface px-5 py-3.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                      />
                      <button
                        onClick={() => {
                          const newFeatures = [...formData.features, ""];
                          setFormData({ ...formData, features: newFeatures });
                        }}
                        className="rounded-xl border border-default px-4 text-brand hover:border-brand/30"
                      >
                        +
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Step 4: Scope */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Define your scope</h2>
                  <div>
                    <label className="mb-2 block text-sm font-medium">In Scope</label>
                    {formData.inScope.map((item, index) => (
                      <input
                        key={index}
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const newItems = [...formData.inScope];
                          newItems[index] = e.target.value;
                          setFormData({ ...formData, inScope: newItems });
                        }}
                        placeholder="What you're building"
                        className="mb-2 w-full rounded-xl border border-default bg-surface px-5 py-3.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                      />
                    ))}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Out of Scope</label>
                    {formData.outScope.map((item, index) => (
                      <input
                        key={index}
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const newItems = [...formData.outScope];
                          newItems[index] = e.target.value;
                          setFormData({ ...formData, outScope: newItems });
                        }}
                        placeholder="What you're NOT building"
                        className="mb-2 w-full rounded-xl border border-default bg-surface px-5 py-3.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Tech Stack */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Choose your tech stack</h2>
                  <div className="grid gap-3">
                    {techStacks.map((stack) => (
                      <button
                        key={stack}
                        onClick={() => setFormData({ ...formData, tech_stack: stack })}
                        className={`rounded-xl border px-5 py-3.5 text-sm text-left transition-all ${
                          formData.tech_stack === stack
                            ? "border-brand bg-brand-soft text-brand font-medium"
                            : "border-default bg-surface text-copy-primary hover:border-brand/30"
                        }`}
                      >
                        {stack}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 6: Generate */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Ready to generate!</h2>
                  <div className="rounded-2xl border border-default bg-surface p-6">
                    <h3 className="font-medium">{formData.name || "Your Project"}</h3>
                    <p className="mt-2 text-sm text-copy-secondary">{formData.description}</p>
                    <p className="mt-2 text-sm text-copy-secondary">{formData.tech_stack}</p>
                  </div>

                  {generatedFiles.length > 0 && (
                    <div className="rounded-2xl border border-green-500/30 bg-green-50 p-6">
                      <p className="text-sm font-medium text-green-700">
                        ✅ Context generated successfully!
                      </p>
                      <button
                        onClick={handleDownloadAll}
                        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700"
                      >
                        <Download className="size-4" />
                        Download All Files
                      </button>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="mt-12 flex items-center justify-between">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="inline-flex items-center gap-2 rounded-xl border border-default px-5 py-2.5 text-sm font-medium text-copy-primary disabled:opacity-30"
            >
              <ArrowLeft className="size-4" />
              Back
            </button>

            {currentStep < 6 ? (
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-dark"
              >
                Next
                <ArrowRight className="size-4" />
              </button>
            ) : (
              <button
                onClick={handleGenerate}
                disabled={isLoading}
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-dark disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="size-4" />
                    Generate Context
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
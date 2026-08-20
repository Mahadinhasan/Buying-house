"use client";

import { useState } from "react";
import {
  Wrench,
  Plus,
  Trash2,
  Pencil,
  Check,
  Sparkles,
  ArrowUpDown,
  Layers,
  Save,
  X,
} from "lucide-react";
import { useSiteStore, ProcessStep, AddOnService } from "@/lib/siteStore";

export default function AdminServicesPage() {
  const { processSteps, addOnServices, updateProcessSteps, updateAddOnServices } = useSiteStore();

  const [steps, setSteps] = useState<ProcessStep[]>(processSteps);
  const [addOns, setAddOns] = useState<AddOnService[]>(addOnServices);
  const [editingStepIndex, setEditingStepIndex] = useState<number | null>(null);
  const [editingAddOnIndex, setEditingAddOnIndex] = useState<number | null>(null);
  const [savedNotice, setSavedNotice] = useState(false);

  // New step / AddOn states
  const [newStep, setNewStep] = useState<ProcessStep>({
    step: `0${steps.length + 1}`,
    title: "",
    desc: "",
  });
  const [showAddStepModal, setShowAddStepModal] = useState(false);

  const [newAddOn, setNewAddOn] = useState<AddOnService>({
    id: `ADDON-${Date.now()}`,
    title: "",
    desc: "",
    tag: "Services",
  });
  const [showAddOnModal, setShowAddOnModal] = useState(false);

  function handleSaveAll() {
    updateProcessSteps(steps);
    updateAddOnServices(addOns);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  }

  function handleAddStep() {
    if (!newStep.title) return;
    const updated = [...steps, { ...newStep, id: `STEP-${steps.length + 1}` }];
    setSteps(updated);
    updateProcessSteps(updated);
    setNewStep({ step: `0${updated.length + 1}`, title: "", desc: "" });
    setShowAddStepModal(false);
  }

  function handleDeleteStep(idx: number) {
    if (confirm("Delete this process stage?")) {
      const updated = steps.filter((_, i) => i !== idx);
      setSteps(updated);
      updateProcessSteps(updated);
    }
  }

  function handleAddAddOn() {
    if (!newAddOn.title) return;
    const updated = [...addOns, { ...newAddOn, id: `ADDON-${Date.now()}` }];
    setAddOns(updated);
    updateAddOnServices(updated);
    setNewAddOn({ id: `ADDON-${Date.now()}`, title: "", desc: "", tag: "Services" });
    setShowAddOnModal(false);
  }

  function handleDeleteAddOn(idx: number) {
    if (confirm("Delete this add-on service?")) {
      const updated = addOns.filter((_, i) => i !== idx);
      setAddOns(updated);
      updateAddOnServices(updated);
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="mono-label text-xs text-loom font-semibold">Services &amp; Process</span>
            {savedNotice && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 animate-pulse">
                <Check size={12} /> Services Saved!
              </span>
            )}
          </div>
          <h1 className="mt-1 font-display text-3xl font-bold text-ink tracking-tight">
            Sourcing Process &amp; Add-on Services
          </h1>
          <p className="mt-1 text-sm text-ink/65 max-w-2xl">
            Configure the 5-stage order lifecycle milestones and specialized add-on services shown on the public Services page and homepage.
          </p>
        </div>

        <button
          onClick={handleSaveAll}
          className="inline-flex items-center gap-2 rounded-xl bg-loom text-paper font-semibold px-5 py-2.5 text-sm hover:bg-loom-dark transition-all shadow-xs"
        >
          <Save size={16} /> Save All Changes
        </button>
      </div>

      {/* 1. Core Sourcing Process Stages */}
      <section className="bg-paper border border-ink/10 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-ink/10">
          <div>
            <h2 className="font-display font-bold text-ink text-lg flex items-center gap-2">
              <Layers size={18} className="text-loom" /> Core Sourcing Process Milestones
            </h2>
            <p className="text-xs text-ink/55 mt-0.5">
              The sequential stages of every garment order from design to shipment.
            </p>
          </div>
          <button
            onClick={() => setShowAddStepModal(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-loom/10 text-loom font-semibold text-xs hover:bg-loom/20 transition-colors"
          >
            <Plus size={15} /> Add Stage
          </button>
        </div>

        {/* Modal for adding step */}
        {showAddStepModal && (
          <div className="p-5 rounded-xl bg-canvas border border-loom/30 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-sm text-ink">
                Add New Process Stage
              </h3>
              <button onClick={() => setShowAddStepModal(false)} className="text-ink/50 hover:text-ink">
                <X size={16} />
              </button>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-semibold text-ink/70 block mb-1">Step #</label>
                <input
                  type="text"
                  value={newStep.step}
                  onChange={(e) => setNewStep({ ...newStep, step: e.target.value })}
                  placeholder="06"
                  className="w-full rounded-lg border border-ink/20 bg-paper px-3 py-2 text-xs font-mono"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-ink/70 block mb-1">Stage Title</label>
                <input
                  type="text"
                  value={newStep.title}
                  onChange={(e) => setNewStep({ ...newStep, title: e.target.value })}
                  placeholder="e.g. Sustainable Packing &amp; Labeling"
                  className="w-full rounded-lg border border-ink/20 bg-paper px-3 py-2 text-xs font-semibold"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-ink/70 block mb-1">Description</label>
              <textarea
                value={newStep.desc}
                onChange={(e) => setNewStep({ ...newStep, desc: e.target.value })}
                rows={2}
                placeholder="Explain what occurs during this stage..."
                className="w-full rounded-lg border border-ink/20 bg-paper px-3 py-2 text-xs"
              />
            </div>
            <button
              onClick={handleAddStep}
              className="px-4 py-2 rounded-lg bg-loom text-paper font-semibold text-xs hover:bg-loom-dark transition-colors"
            >
              Confirm &amp; Add Stage
            </button>
          </div>
        )}

        {/* Steps List */}
        <div className="space-y-3">
          {steps.map((step, idx) => {
            const isEditing = editingStepIndex === idx;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl border border-ink/10 bg-canvas hover:border-loom/30 transition-all flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-loom/10 border border-loom/20 font-mono font-bold text-loom flex items-center justify-center text-sm shrink-0">
                      {step.step}
                    </span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={step.title}
                        onChange={(e) => {
                          const copy = [...steps];
                          copy[idx].title = e.target.value;
                          setSteps(copy);
                        }}
                        className="font-display font-bold text-sm text-ink bg-paper border border-ink/20 rounded-lg px-2.5 py-1"
                      />
                    ) : (
                      <h3 className="font-display font-bold text-base text-ink">
                        {step.title}
                      </h3>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setEditingStepIndex(isEditing ? null : idx)}
                      className="p-2 rounded-lg border border-ink/10 text-ink/60 hover:text-loom hover:border-loom/30 transition-colors"
                      title={isEditing ? "Done editing" : "Edit"}
                    >
                      {isEditing ? <Check size={14} /> : <Pencil size={14} />}
                    </button>
                    <button
                      onClick={() => handleDeleteStep(idx)}
                      className="p-2 rounded-lg border border-ink/10 text-ink/40 hover:text-stamp hover:border-stamp/30 transition-colors"
                      title="Delete step"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                {isEditing ? (
                  <textarea
                    value={step.desc}
                    onChange={(e) => {
                      const copy = [...steps];
                      copy[idx].desc = e.target.value;
                      setSteps(copy);
                    }}
                    rows={2}
                    className="w-full text-xs text-ink bg-paper border border-ink/20 rounded-lg p-2.5"
                  />
                ) : (
                  <p className="text-xs text-ink/70 leading-relaxed pl-13">
                    {step.desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Specialized Add-on Services */}
      <section className="bg-paper border border-ink/10 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-ink/10">
          <div>
            <h2 className="font-display font-bold text-ink text-lg flex items-center gap-2">
              <Sparkles size={18} className="text-brass" /> Specialized Add-on Services
            </h2>
            <p className="text-xs text-ink/55 mt-0.5">
              Additional capabilities such as Fabric R&amp;D, Tech Pack design, and Consolidations.
            </p>
          </div>
          <button
            onClick={() => setShowAddOnModal(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brass/20 text-brass-dark font-semibold text-xs hover:bg-brass/30 transition-colors"
          >
            <Plus size={15} /> Add Service
          </button>
        </div>

        {/* Modal for adding AddOn */}
        {showAddOnModal && (
          <div className="p-5 rounded-xl bg-canvas border border-brass/30 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-sm text-ink">
                Add Specialized Add-on Service
              </h3>
              <button onClick={() => setShowAddOnModal(false)} className="text-ink/50 hover:text-ink">
                <X size={16} />
              </button>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-ink/70 block mb-1">Service Title</label>
                <input
                  type="text"
                  value={newAddOn.title}
                  onChange={(e) => setNewAddOn({ ...newAddOn, title: e.target.value })}
                  placeholder="e.g. Custom Garment Dyeing &amp; Wash Testing"
                  className="w-full rounded-lg border border-ink/20 bg-paper px-3 py-2 text-xs font-semibold"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink/70 block mb-1">Category Tag</label>
                <input
                  type="text"
                  value={newAddOn.tag}
                  onChange={(e) => setNewAddOn({ ...newAddOn, tag: e.target.value })}
                  placeholder="R&amp;D"
                  className="w-full rounded-lg border border-ink/20 bg-paper px-3 py-2 text-xs font-mono"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-ink/70 block mb-1">Description</label>
              <textarea
                value={newAddOn.desc}
                onChange={(e) => setNewAddOn({ ...newAddOn, desc: e.target.value })}
                rows={2}
                placeholder="Explain the service details..."
                className="w-full rounded-lg border border-ink/20 bg-paper px-3 py-2 text-xs"
              />
            </div>
            <button
              onClick={handleAddAddOn}
              className="px-4 py-2 rounded-lg bg-brass text-ink font-semibold text-xs hover:bg-brass-light transition-colors"
            >
              Confirm &amp; Add Service
            </button>
          </div>
        )}

        {/* AddOns Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {addOns.map((addon, idx) => {
            const isEditing = editingAddOnIndex === idx;
            return (
              <div
                key={addon.id}
                className="p-5 rounded-xl border border-ink/10 bg-canvas hover:border-loom/30 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    {isEditing ? (
                      <input
                        type="text"
                        value={addon.tag}
                        onChange={(e) => {
                          const copy = [...addOns];
                          copy[idx].tag = e.target.value;
                          setAddOns(copy);
                        }}
                        className="text-[10px] font-mono font-bold bg-paper border border-ink/20 rounded px-2 py-0.5"
                      />
                    ) : (
                      <span className="mono-label text-[10px] bg-brass/20 text-brass-dark font-bold px-2.5 py-0.5 rounded-full">
                        {addon.tag}
                      </span>
                    )}

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setEditingAddOnIndex(isEditing ? null : idx)}
                        className="p-1.5 rounded-lg text-ink/50 hover:text-loom transition-colors"
                      >
                        {isEditing ? <Check size={13} /> : <Pencil size={13} />}
                      </button>
                      <button
                        onClick={() => handleDeleteAddOn(idx)}
                        className="p-1.5 rounded-lg text-ink/40 hover:text-stamp transition-colors"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  {isEditing ? (
                    <input
                      type="text"
                      value={addon.title}
                      onChange={(e) => {
                        const copy = [...addOns];
                        copy[idx].title = e.target.value;
                        setAddOns(copy);
                      }}
                      className="w-full font-display font-bold text-sm text-ink bg-paper border border-ink/20 rounded-lg px-2.5 py-1 mb-2"
                    />
                  ) : (
                    <h3 className="font-display font-bold text-base text-ink">
                      {addon.title}
                    </h3>
                  )}

                  {isEditing ? (
                    <textarea
                      value={addon.desc}
                      onChange={(e) => {
                        const copy = [...addOns];
                        copy[idx].desc = e.target.value;
                        setAddOns(copy);
                      }}
                      rows={2}
                      className="w-full text-xs text-ink bg-paper border border-ink/20 rounded-lg p-2"
                    />
                  ) : (
                    <p className="text-xs text-ink/70 leading-relaxed mt-1">
                      {addon.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

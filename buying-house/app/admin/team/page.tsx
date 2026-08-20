"use client";

import { useState } from "react";
import {
  Users,
  Plus,
  Trash2,
  Pencil,
  Check,
  Save,
  Mail,
  X,
  UserCheck,
} from "lucide-react";
import { useSiteStore, TeamMember } from "@/lib/siteStore";

export default function AdminTeamPage() {
  const { team, updateTeam } = useSiteStore();
  const [members, setMembers] = useState<TeamMember[]>(team);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [savedNotice, setSavedNotice] = useState(false);

  // New member modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMember, setNewMember] = useState<Omit<TeamMember, "id">>({
    name: "",
    role: "",
    initials: "",
    avatar: "",
    bio: "",
    email: "",
  });

  function handleSaveAll() {
    updateTeam(members);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  }

  function handleAddMember() {
    if (!newMember.name || !newMember.role) return;
    const initials =
      newMember.initials ||
      newMember.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    const added: TeamMember = {
      ...newMember,
      initials,
      id: `TEAM-${Date.now()}`,
    };

    const updated = [...members, added];
    setMembers(updated);
    updateTeam(updated);
    setNewMember({ name: "", role: "", initials: "", avatar: "", bio: "", email: "" });
    setShowAddModal(false);
  }

  function handleDelete(id: string) {
    if (confirm("Remove this team profile?")) {
      const updated = members.filter((m) => m.id !== id);
      setMembers(updated);
      updateTeam(updated);
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="mono-label text-xs text-loom font-semibold">Leadership &amp; Staff</span>
            {savedNotice && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 animate-pulse">
                <Check size={12} /> Team Updated!
              </span>
            )}
          </div>
          <h1 className="mt-1 font-display text-3xl font-bold text-ink tracking-tight">
            Team &amp; Merchandisers Management
          </h1>
          <p className="mt-1 text-sm text-ink/65 max-w-2xl">
            Manage your account managers, merchandisers, QC inspectors, and executives shown on the public Team page.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-loom/10 text-loom font-semibold text-xs sm:text-sm hover:bg-loom/20 transition-colors"
          >
            <Plus size={16} /> Add Team Member
          </button>
          <button
            onClick={handleSaveAll}
            className="inline-flex items-center gap-2 rounded-xl bg-loom text-paper font-semibold px-5 py-2.5 text-xs sm:text-sm hover:bg-loom-dark transition-all shadow-xs"
          >
            <Save size={16} /> Save All
          </button>
        </div>
      </div>

      {/* Modal for adding team member */}
      {showAddModal && (
        <div className="p-6 rounded-2xl bg-paper border border-loom/40 shadow-lifted space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-ink/10">
            <h3 className="font-display font-bold text-base text-ink flex items-center gap-2">
              <UserCheck size={18} className="text-loom" /> Add New Team Member
            </h3>
            <button onClick={() => setShowAddModal(false)} className="text-ink/50 hover:text-ink">
              <X size={18} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold text-ink/75 block mb-1">Full Name *</label>
              <input
                type="text"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                placeholder="e.g. Nusrat Jahan"
                className="w-full rounded-xl border border-ink/20 bg-canvas px-3.5 py-2 text-xs font-semibold text-ink"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink/75 block mb-1">Role / Designation *</label>
              <input
                type="text"
                value={newMember.role}
                onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                placeholder="e.g. Senior Merchandising Manager"
                className="w-full rounded-xl border border-ink/20 bg-canvas px-3.5 py-2 text-xs font-semibold text-ink"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink/75 block mb-1">Initials (optional)</label>
              <input
                type="text"
                value={newMember.initials}
                onChange={(e) => setNewMember({ ...newMember, initials: e.target.value })}
                placeholder="e.g. NJ"
                maxLength={3}
                className="w-full rounded-xl border border-ink/20 bg-canvas px-3.5 py-2 text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink/75 block mb-1">Avatar Image URL (optional)</label>
              <input
                type="url"
                value={newMember.avatar}
                onChange={(e) => setNewMember({ ...newMember, avatar: e.target.value })}
                placeholder="https://..."
                className="w-full rounded-xl border border-ink/20 bg-canvas px-3.5 py-2 text-xs"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink/75 block mb-1">Contact Email</label>
              <input
                type="email"
                value={newMember.email}
                onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                placeholder="nusrat@buyinghouse.demo"
                className="w-full rounded-xl border border-ink/20 bg-canvas px-3.5 py-2 text-xs"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink/75 block mb-1">Short Bio</label>
              <input
                type="text"
                value={newMember.bio}
                onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })}
                placeholder="Over 8 years managing knitwear accounts."
                className="w-full rounded-xl border border-ink/20 bg-canvas px-3.5 py-2 text-xs"
              />
            </div>
          </div>

          <button
            onClick={handleAddMember}
            className="px-5 py-2.5 rounded-xl bg-loom text-paper font-semibold text-xs hover:bg-loom-dark transition-colors shadow-xs"
          >
            Confirm &amp; Add Member
          </button>
        </div>
      )}

      {/* Team Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {members.map((member, idx) => {
          const isEditing = editingId === member.id;

          return (
            <div
              key={member.id}
              className="bg-paper border border-ink/10 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-loom/30 transition-all space-y-4"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-full bg-loom/10 border border-loom/20 text-loom font-display font-bold flex items-center justify-center text-lg overflow-hidden">
                    {member.avatar ? (
                      <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      member.initials || "FI"
                    )}
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setEditingId(isEditing ? null : member.id)}
                      className="p-1.5 rounded-lg border border-ink/10 text-ink/50 hover:text-loom transition-colors"
                      title={isEditing ? "Done" : "Edit"}
                    >
                      {isEditing ? <Check size={14} /> : <Pencil size={14} />}
                    </button>
                    <button
                      onClick={() => handleDelete(member.id)}
                      className="p-1.5 rounded-lg border border-ink/10 text-ink/40 hover:text-stamp transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                {isEditing ? (
                  <div className="space-y-2 mt-4">
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) => {
                        const copy = [...members];
                        copy[idx].name = e.target.value;
                        setMembers(copy);
                      }}
                      className="w-full font-bold text-sm bg-canvas border border-ink/20 rounded-lg px-2.5 py-1"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      value={member.role}
                      onChange={(e) => {
                        const copy = [...members];
                        copy[idx].role = e.target.value;
                        setMembers(copy);
                      }}
                      className="w-full text-xs text-ink/70 bg-canvas border border-ink/20 rounded-lg px-2.5 py-1"
                      placeholder="Role"
                    />
                    <input
                      type="text"
                      value={member.initials}
                      onChange={(e) => {
                        const copy = [...members];
                        copy[idx].initials = e.target.value;
                        setMembers(copy);
                      }}
                      className="w-full text-xs font-mono bg-canvas border border-ink/20 rounded-lg px-2.5 py-1"
                      placeholder="Initials"
                    />
                    <input
                      type="email"
                      value={member.email || ""}
                      onChange={(e) => {
                        const copy = [...members];
                        copy[idx].email = e.target.value;
                        setMembers(copy);
                      }}
                      className="w-full text-xs bg-canvas border border-ink/20 rounded-lg px-2.5 py-1"
                      placeholder="Email"
                    />
                  </div>
                ) : (
                  <div className="mt-4">
                    <h3 className="font-display font-bold text-lg text-ink">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-loom mt-0.5">
                      {member.role}
                    </p>
                    {member.email && (
                      <p className="text-[11px] text-ink/50 mt-1 flex items-center gap-1 font-mono">
                        <Mail size={12} /> {member.email}
                      </p>
                    )}
                    {member.bio && (
                      <p className="text-xs text-ink/65 mt-2 leading-relaxed">
                        {member.bio}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

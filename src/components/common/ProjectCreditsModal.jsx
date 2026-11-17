import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { X, Award, Users, BookOpen, Edit2, Check, Plus, Trash2, GraduationCap } from 'lucide-react';

export const ProjectCreditsModal = () => {
  const { showCreditsModal, setShowCreditsModal, credits, updateTeamCredits } = useGame();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(credits);

  if (!showCreditsModal) return null;

  const handleSave = () => {
    updateTeamCredits(editForm);
    setIsEditing(false);
  };

  const handleMemberChange = (index, field, value) => {
    const updated = [...editForm.teamMembers];
    updated[index] = { ...updated[index], [field]: value };
    setEditForm({ ...editForm, teamMembers: updated });
  };

  const handleAddMember = () => {
    setEditForm({
      ...editForm,
      teamMembers: [
        ...editForm.teamMembers,
        { name: 'New Contributor', role: 'Student Developer', dept: 'CSE', roll: 'Roll No.' }
      ]
    });
  };

  const handleRemoveMember = (index) => {
    const updated = editForm.teamMembers.filter((_, i) => i !== index);
    setEditForm({ ...editForm, teamMembers: updated });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0f1424] border border-cyan-500/30 rounded-2xl p-6 shadow-2xl text-left overflow-hidden max-h-[90vh] flex flex-col">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                Academic Project Information
              </span>
              <h3 className="text-xl font-bold text-white font-display">
                {credits.projectTitle}
              </h3>
            </div>
          </div>
          <button
            onClick={() => {
              setShowCreditsModal(false);
              setIsEditing(false);
            }}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="py-4 space-y-5 overflow-y-auto pr-1">
          {/* Institutional Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 space-y-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-500 uppercase tracking-wider text-[10px] block">Internship Program</span>
                <span className="font-semibold text-slate-200">{credits.program}</span>
              </div>
              <div>
                <span className="text-slate-500 uppercase tracking-wider text-[10px] block">Project Guidance</span>
                <span className="font-semibold text-cyan-300">{credits.guide}</span>
              </div>
              <div>
                <span className="text-slate-500 uppercase tracking-wider text-[10px] block">Department</span>
                <span className="font-semibold text-slate-200">{credits.department}</span>
              </div>
              <div>
                <span className="text-slate-500 uppercase tracking-wider text-[10px] block">Prototype Status</span>
                <span className="font-semibold text-emerald-400">{credits.version}</span>
              </div>
            </div>
          </div>

          {/* Team Members Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                CSE Student Development Team
              </h4>
            </div>

            <button
              onClick={() => {
                if (isEditing) {
                  handleSave();
                } else {
                  setEditForm(credits);
                  setIsEditing(true);
                }
              }}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 transition"
            >
              {isEditing ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Save Roster</span>
                </>
              ) : (
                <>
                  <Edit2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Edit Team Details</span>
                </>
              )}
            </button>
          </div>

          {/* Team Roster List */}
          <div className="space-y-2.5">
            {isEditing ? (
              <div className="space-y-3">
                {editForm.teamMembers.map((member, idx) => (
                  <div key={idx} className="p-3 bg-slate-900 border border-slate-700 rounded-xl space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] text-slate-400 uppercase">Student Name</label>
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => handleMemberChange(idx, 'name', e.target.value)}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 uppercase">Roll Number</label>
                        <input
                          type="text"
                          value={member.roll}
                          onChange={(e) => handleMemberChange(idx, 'roll', e.target.value)}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <label className="text-[10px] text-slate-400 uppercase">Role / Responsibility</label>
                        <input
                          type="text"
                          value={member.role}
                          onChange={(e) => handleMemberChange(idx, 'role', e.target.value)}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white"
                        />
                      </div>
                      <button
                        onClick={() => handleRemoveMember(idx)}
                        className="text-rose-400 hover:text-rose-300 p-2 mt-4 rounded-lg bg-rose-500/10 border border-rose-500/20"
                        title="Remove member"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  onClick={handleAddMember}
                  className="w-full py-2 border-2 border-dashed border-slate-700 hover:border-cyan-500/60 rounded-xl text-xs font-semibold text-slate-400 hover:text-cyan-400 flex items-center justify-center gap-1.5 transition"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Team Member</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {credits.teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-white">{member.name}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                          {member.dept}
                        </span>
                      </div>
                      <span className="text-[11px] text-cyan-300 block mt-0.5">{member.role}</span>
                    </div>
                    <div className="mt-2 text-[10px] text-slate-400 font-mono flex items-center gap-1">
                      <span>Roll:</span>
                      <span className="text-slate-300 font-medium">{member.roll}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3 flex-shrink-0">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 transition"
            >
              Save Team Details
            </button>
          ) : (
            <button
              onClick={() => setShowCreditsModal(false)}
              className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

import { create } from 'zustand';

interface Label {
    id: string;
    labelName: string;
    isEditing: boolean;
}

interface LabelState {
    labels: Label[];
    setLabels: (labels: Label[]) => void
    addLabel: (labelName: string) => void;
    deleteLabel: (id: string) => void;
    updateLabel: (id: string, labelName: string) => void;
    toggleEdit: (id: string) => void;
}

export const useLabelStore = create<LabelState>((set) => ({
    labels: [],

    setLabels: (labels) => set({ labels }),

    addLabel: (labelName) =>
        set((state) => ({
            labels: [...state.labels, { id: Date.now().toString(), labelName, isEditing: false }]
        })),

    deleteLabel: (id) =>
        set((state) => ({
            labels: state.labels.filter((label) => label.id !== id)
        })),

    updateLabel: (id, labelName) =>
        set((state) => ({
            labels: state.labels.map((label) => (label.id === id ? { ...label, labelName, isEditing: false } : label))
        })),

    toggleEdit: (id) =>
        set((state) => ({
            labels: state.labels.map((label) => (label.id === id ? { ...label, isEditing: !label.isEditing } : label))
        }))
}));

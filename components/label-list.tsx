"use client"

import { FC, useState } from 'react';
import { useLabelStore } from '@/store/label-store';
import Label from './label';

const LabelList: FC = () => {
    const { labels, addLabel } = useLabelStore();
    const [newLabel, setNewLabel] = useState('');

    const handleAdd = () => {
        if (newLabel.trim()) {
            addLabel(newLabel);
            setNewLabel('');
        }
    };

    return (
        <div className="space-y-2">
            <div className="flex space-x-2">
                <input
                    value={newLabel}
                    onChange={(e) => setNewLabel(e.target.value)}
                    placeholder="Create new label"
                    className="border p-1 rounded text-black"
                />
                <button onClick={handleAdd} className="bg-blue-500 text-white p-1 rounded">
                    Add
                </button>
            </div>
            {labels.map((label) => (
                <Label  key={label.id} {...label} />
            ))}

        </div>
    );
};

export default LabelList;

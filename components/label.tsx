import { FC } from 'react';
import { Pencil, Trash, Check } from 'lucide-react';
import { useLabelStore } from '@/store/label-store';

interface LabelProps {
    id: string;
    labelName: string;
    isEditing: boolean;
}

const Label: FC<LabelProps> = ({ id, labelName, isEditing }) => {
    const { deleteLabel, updateLabel, toggleEdit } = useLabelStore();
    const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedName = formData.get('name') as string;
        updateLabel(id, updatedName);
    };

    return (
        <div className="flex justify-between items-center space-x-2 hover:bg-gray-200 hover:text-black p-2 rounded">
            <div className="flex items-center">
                <button onClick={() => deleteLabel(id)} className="hover:text-red-500 mr-2">
                    <Trash className="w-4 h-4" />
                </button>
                {isEditing ? (
                    <form onSubmit={handleUpdate}>
                        <input name="name" defaultValue={labelName} className="border-none  text-black  border-gray-400 focus:outline-none" />
                    </form>
                ) : (
                    <span >{labelName}</span>
                )}
            </div>
            <button onClick={() => toggleEdit(id)} className="hover:text-green-500">
                {isEditing ? <Check className="w-4 h-4" /> : <Pencil className="w-4 h-4" />}
            </button>
        </div>
    );
};

export default Label;

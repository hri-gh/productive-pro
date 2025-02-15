// Modal.js
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
    title: string;
    description: string;
    triggerText: string;
    className?: string; // New className prop for custom styles
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    title,
    description,
    triggerText,
    className = "", // Default to an empty string
    children,
}) => {
    return (
        <Dialog>
            <DialogTrigger>{triggerText}</DialogTrigger>
            <DialogContent className={className}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default Modal;

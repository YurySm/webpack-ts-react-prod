import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from 'src/shared/ui/deprecated/Modal';
import { LoginFormLazy as LoginForm } from '../LoginForm/LoginForm.lazy';
import { Suspense } from 'react';
import { Loader } from 'src/shared/ui/deprecated/Loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginForm onSuccess={onClose} />
        </Suspense>
    </Modal>
);
